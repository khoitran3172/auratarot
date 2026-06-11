import { PlanetId, SignId, PlanetInSignReading } from './types';
import { planetInSignPersonal } from './planetInSignPersonal';
import { planetInSignOuter } from './planetInSignOuter';

export { planets, signs, houses } from './core';
export { ascendantReadings } from './ascendants';
export { aspectInfos, planetAspectEnergy } from './aspectData';
export { planetInHouse } from './planetInHouse';
export { birthPlaces } from './places';
export { northNodeInSign, northNodeInHouse } from './northNode';
export { mcInSign } from './midheaven';
export {
  elementReadings, modalityReadings, retrogradeReadings,
  signRuler, chartRulerReadings, stelliumTemplate,
} from './chartAnalysis';
export type { ElementName, ModalityName } from './chartAnalysis';
export * from './types';

// Full 10 planets × 12 signs reading table
export const planetInSign: Record<PlanetId, Record<SignId, PlanetInSignReading>> = {
  ...planetInSignPersonal,
  ...planetInSignOuter,
};
