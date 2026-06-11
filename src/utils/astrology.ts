import { Body, GeoVector, Ecliptic, EclipticGeoMoon, SiderealTime } from 'astronomy-engine';
import { PlanetId, SignId, AspectType, HouseNumber } from '../data/astrology/types';

export interface PlanetPosition {
  planet: PlanetId;
  longitude: number; // ecliptic longitude 0-360 (tropical)
  sign: SignId;
  degreeInSign: number; // 0-30
  house: HouseNumber | null; // null when birth time unknown
  retrograde: boolean;
}

export interface ChartPoint {
  longitude: number;
  sign: SignId;
  degreeInSign: number;
  house: HouseNumber | null;
}

export interface ChartAspect {
  type: AspectType;
  planetA: PlanetId;
  planetB: PlanetId;
  orb: number; // actual deviation from exact angle, degrees
}

export interface NatalChart {
  positions: PlanetPosition[];
  ascendant: { longitude: number; sign: SignId; degreeInSign: number } | null;
  midheaven: { longitude: number; sign: SignId; degreeInSign: number } | null;
  northNode: ChartPoint;
  aspects: ChartAspect[];
}

const SIGN_ORDER: SignId[] = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces',
];

const PLANET_BODIES: { id: PlanetId; body: Body }[] = [
  { id: 'sun', body: Body.Sun },
  { id: 'moon', body: Body.Moon },
  { id: 'mercury', body: Body.Mercury },
  { id: 'venus', body: Body.Venus },
  { id: 'mars', body: Body.Mars },
  { id: 'jupiter', body: Body.Jupiter },
  { id: 'saturn', body: Body.Saturn },
  { id: 'uranus', body: Body.Uranus },
  { id: 'neptune', body: Body.Neptune },
  { id: 'pluto', body: Body.Pluto },
];

const ASPECT_DEFS: { type: AspectType; angle: number; orb: number }[] = [
  { type: 'conjunction', angle: 0, orb: 8 },
  { type: 'sextile', angle: 60, orb: 5 },
  { type: 'square', angle: 90, orb: 7 },
  { type: 'trine', angle: 120, orb: 7 },
  { type: 'opposition', angle: 180, orb: 8 },
];

const normalize = (deg: number): number => ((deg % 360) + 360) % 360;

export const longitudeToSign = (lon: number): { sign: SignId; degreeInSign: number } => {
  const n = normalize(lon);
  const index = Math.floor(n / 30);
  return { sign: SIGN_ORDER[index], degreeInSign: n - index * 30 };
};

// Geocentric tropical ecliptic longitude of a body at a moment
const eclipticLongitude = (body: Body, date: Date): number => {
  if (body === Body.Moon) {
    return normalize(EclipticGeoMoon(date).lon);
  }
  const vector = GeoVector(body, date, true);
  return normalize(Ecliptic(vector).elon);
};

const OBLIQUITY_RAD = (23.4367 * Math.PI) / 180; // mean obliquity, adequate for natal charts

// Right Ascension of the Midheaven, degrees
const computeRAMC = (date: Date, lon: number): number => {
  const gastHours = SiderealTime(date); // Greenwich apparent sidereal time, hours
  return normalize(gastHours * 15 + lon);
};

// Ascendant from local sidereal time + latitude (standard formula, true ecliptic of date)
const computeAscendant = (date: Date, lat: number, lon: number): number => {
  const ramcRad = (computeRAMC(date, lon) * Math.PI) / 180;
  const latRad = (lat * Math.PI) / 180;

  const asc = Math.atan2(
    Math.cos(ramcRad),
    -(Math.sin(ramcRad) * Math.cos(OBLIQUITY_RAD) + Math.tan(latRad) * Math.sin(OBLIQUITY_RAD))
  );
  return normalize((asc * 180) / Math.PI);
};

// Midheaven (MC) ecliptic longitude from the RAMC
const computeMidheaven = (date: Date, lon: number): number => {
  const ramcRad = (computeRAMC(date, lon) * Math.PI) / 180;
  const mc = Math.atan2(Math.sin(ramcRad), Math.cos(ramcRad) * Math.cos(OBLIQUITY_RAD));
  return normalize((mc * 180) / Math.PI);
};

// Mean lunar North Node longitude (Meeus, Astronomical Algorithms ch. 47)
const computeMeanNorthNode = (date: Date): number => {
  const jd = date.getTime() / 86400000 + 2440587.5;
  const T = (jd - 2451545) / 36525;
  const omega = 125.0445479 - 1934.1362891 * T + 0.0020754 * T * T + (T ** 3) / 467441 - (T ** 4) / 60616000;
  return normalize(omega);
};

// Whole-sign house of a longitude given the ascendant sign index
const wholeSignHouse = (lon: number, ascSignIndex: number): HouseNumber => {
  const signIndex = Math.floor(normalize(lon) / 30);
  return ((((signIndex - ascSignIndex) % 12) + 12) % 12 + 1) as HouseNumber;
};

/**
 * Computes a natal chart.
 * @param birthDate local birth date/time components
 * @param tzOffsetHours timezone offset of the birth place (e.g. 7 for Vietnam)
 * @param place coordinates; pass null together with hasTime=false for a date-only chart
 * @param hasTime whether the birth time is known (without it ascendant & houses are skipped)
 */
export function computeNatalChart(
  birthDate: { year: number; month: number; day: number; hour: number; minute: number },
  tzOffsetHours: number,
  place: { lat: number; lon: number } | null,
  hasTime: boolean
): NatalChart {
  // Convert local birth time to UTC. When time is unknown use 12:00 local (noon)
  // so planet signs are the most probable for that date.
  const hour = hasTime ? birthDate.hour : 12;
  const minute = hasTime ? birthDate.minute : 0;
  const utcMillis = Date.UTC(birthDate.year, birthDate.month - 1, birthDate.day, hour, minute) - tzOffsetHours * 3600 * 1000;
  const date = new Date(utcMillis);

  let ascendant: NatalChart['ascendant'] = null;
  let midheaven: NatalChart['midheaven'] = null;
  let ascSignIndex = 0;
  if (hasTime && place) {
    const ascLon = computeAscendant(date, place.lat, place.lon);
    const { sign, degreeInSign } = longitudeToSign(ascLon);
    ascendant = { longitude: ascLon, sign, degreeInSign };
    ascSignIndex = Math.floor(ascLon / 30);

    const mcLon = computeMidheaven(date, place.lon);
    const mcSign = longitudeToSign(mcLon);
    midheaven = { longitude: mcLon, sign: mcSign.sign, degreeInSign: mcSign.degreeInSign };
  }

  // Retrograde: ecliptic longitude decreasing over one day
  const dayLater = new Date(date.getTime() + 86400000);
  const positions: PlanetPosition[] = PLANET_BODIES.map(({ id, body }) => {
    const lonDeg = eclipticLongitude(body, date);
    const { sign, degreeInSign } = longitudeToSign(lonDeg);
    let retrograde = false;
    if (id !== 'sun' && id !== 'moon') {
      let delta = eclipticLongitude(body, dayLater) - lonDeg;
      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;
      retrograde = delta < 0;
    }
    return {
      planet: id,
      longitude: lonDeg,
      sign,
      degreeInSign,
      house: ascendant ? wholeSignHouse(lonDeg, ascSignIndex) : null,
      retrograde,
    };
  });

  const nodeLon = computeMeanNorthNode(date);
  const nodeSign = longitudeToSign(nodeLon);
  const northNode: ChartPoint = {
    longitude: nodeLon,
    sign: nodeSign.sign,
    degreeInSign: nodeSign.degreeInSign,
    house: ascendant ? wholeSignHouse(nodeLon, ascSignIndex) : null,
  };

  // Aspects between every planet pair
  const aspects: ChartAspect[] = [];
  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      let diff = Math.abs(positions[i].longitude - positions[j].longitude);
      if (diff > 180) diff = 360 - diff;
      for (const def of ASPECT_DEFS) {
        const orb = Math.abs(diff - def.angle);
        if (orb <= def.orb) {
          aspects.push({
            type: def.type,
            planetA: positions[i].planet,
            planetB: positions[j].planet,
            orb,
          });
          break;
        }
      }
    }
  }

  return { positions, ascendant, midheaven, northNode, aspects };
}
