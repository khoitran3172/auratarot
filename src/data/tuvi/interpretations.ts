// Luận đoán từng cung theo lối 5 TẦNG của người có nghề:
//   (Chính tinh × Cung) × Độ sáng × Phụ tinh đồng cung × Tam hợp–Xung chiếu × Tứ Hóa
// Mỗi tầng bồi thêm một lớp nghĩa, thay vì tra bảng phẳng.

import { Palace, StarInstance, TuViChartResult, Brightness } from './types';
import {
  BRIGHTNESS_NAMES, TRANSFORMATION_NAMES, PALACE_DOMAIN, CHINH_TINH, STAR_DEFS,
} from './constants';
import { ALL_STAR_MEANINGS as STAR_MEANINGS } from './starMeaningsAll';
import { CHINH_TINH_PALACE_A } from './chinhTinhPalaceA';
import { CHINH_TINH_PALACE_B } from './chinhTinhPalaceB';

const CHINH_TINH_PALACE = { ...CHINH_TINH_PALACE_A, ...CHINH_TINH_PALACE_B };

const mod12 = (x: number) => ((x % 12) + 12) % 12;

/** Sao sáng (M/V/Đ) dùng bản luận "bright", mờ (B/H) dùng "dim" */
function isBright(b?: Brightness): boolean {
  return b === 'M' || b === 'V' || b === 'D';
}

export function starLabel(s: StarInstance): string {
  let l = s.name;
  if (s.brightness) l += ` (${BRIGHTNESS_NAMES[s.brightness]})`;
  if (s.transformation) l += ` ${TRANSFORMATION_NAMES[s.transformation]}`;
  return l;
}

function joinVi(items: string[]): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  return items.slice(0, -1).join(', ') + ' và ' + items[items.length - 1];
}

function chinhOf(p: Palace): StarInstance[] {
  return p.stars.filter(s => s.kind === 'chinh_tinh');
}

function listChinh(p: Palace): string {
  const c = chinhOf(p);
  return c.length ? c.map(starLabel).join(' – ') : 'vô chính diệu';
}

/**
 * Sinh chuỗi luận đoán cho một cung, dùng toàn cảnh lá số để xét tam hợp/xung chiếu.
 */
export function buildPalaceInterpretations(palace: Palace, chart: TuViChartResult): string[] {
  const out: string[] = [];
  const domain = PALACE_DOMAIN[palace.name] || 'lĩnh vực này';
  const chinh = chinhOf(palace);

  const opposite = chart.palaces.find(p => p.branchIndex === mod12(palace.branchIndex + 6));
  const trines = chart.palaces.filter(p =>
    [mod12(palace.branchIndex + 4), mod12(palace.branchIndex + 8)].includes(p.branchIndex)
  );

  // ══ Mở đầu: định vị cung ══
  out.push(
    `Cung ${palace.name} an tại ${palace.canName} ${palace.branchName}, tọa thủ ${listChinh(palace)}` +
    `${palace.isBody ? ', đồng thời là nơi cung Thân an cư' : ''}. Cung này cai quản ${domain}.`
  );

  // ══ TẦNG 1 + 2: Chính tinh × Cung × Độ sáng ══
  if (chinh.length > 0) {
    for (const st of chinh) {
      const reading = CHINH_TINH_PALACE[st.id]?.[palace.name];
      if (!reading) continue;
      const bright = isBright(st.brightness);
      const body = bright ? reading.bright : reading.dim;
      const sang = st.brightness ? BRIGHTNESS_NAMES[st.brightness] : '';
      out.push(
        `${st.name}${sang ? ` ${sang.toLowerCase()} địa` : ''} tại đây — ${body} ✦ ${reading.advice}`
      );
    }
  } else {
    // Vô chính diệu: mượn khí đối cung
    const oppChinh = opposite ? chinhOf(opposite) : [];
    out.push(
      `Cung này vô chính diệu — không có chính tinh tọa thủ nên phải mượn khí của ${
        oppChinh.length ? oppChinh.map(starLabel).join(' – ') : 'cung xung chiếu'
      } từ cung ${opposite?.name ?? 'đối diện'}. Người xưa nói cung vô chính diệu thì "khí mờ mà uyển chuyển": ${domain} của bạn không có nét định hình cứng, dễ thay đổi theo hoàn cảnh và người xung quanh; nếu được cát tinh hội chiếu lại thành "phản vi kỳ cách", hậu vận tốt hơn tiền vận.`
    );
    if (oppChinh.length) {
      const st = oppChinh[0];
      const reading = CHINH_TINH_PALACE[st.id]?.[palace.name];
      if (reading) {
        out.push(`Khí mượn về mang sắc ${st.name}: ${isBright(st.brightness) ? reading.bright : reading.dim}`);
      }
    }
  }

  // ══ TẦNG 3: Phụ tinh đồng cung ══
  const catStars = palace.stars.filter(s => s.kind === 'phu_tinh' && s.nature === 'cat');
  const satStars = palace.stars.filter(s => s.kind === 'phu_tinh' && s.nature === 'hung');
  const daoStars = palace.stars.filter(s => s.kind === 'dao_hoa');

  const describe = (list: StarInstance[], max: number): string =>
    joinVi(list.slice(0, max).map(s => {
      const m = STAR_MEANINGS[s.id];
      return m ? `${s.name} — ${m.essence}` : s.name;
    }));

  if (catStars.length) {
    const rest = catStars.length > 3 ? `; ngoài ra còn ${joinVi(catStars.slice(3).map(s => s.name))}` : '';
    out.push(
      `Cát tinh phù trợ tại cung: ${describe(catStars, 3)}${rest}. Những sao này nâng đỡ ${domain}, làm dịu phần khắc nghiệt và mở thêm cơ hội.`
    );
    // Ghi chú đáng lưu ý của sao mạnh nhất
    const strongest = catStars.reduce((a, s) =>
      (STAR_DEFS[s.id]?.weight ?? 0) > (STAR_DEFS[a.id]?.weight ?? 0) ? s : a, catStars[0]);
    const note = STAR_MEANINGS[strongest.id]?.note;
    if (note) out.push(note);
  }

  if (satStars.length) {
    const rest = satStars.length > 3 ? `; cùng với ${joinVi(satStars.slice(3).map(s => s.name))}` : '';
    out.push(
      `Sát tinh cần đề phòng: ${describe(satStars, 3)}${rest}. Đây là những nút thắt của ${domain} — không phải điềm gở mà là chỗ đời gửi bài học; biết trước thì hóa giải được phần lớn.`
    );
    const note = STAR_MEANINGS[satStars[0].id]?.note;
    if (note) out.push(note);
  }

  if (daoStars.length) {
    out.push(
      `Có đào hoa tinh ${joinVi(daoStars.map(s => s.name))} đóng tại đây — sắc thái tình cảm, sức hút và duyên gặp gỡ in dấu lên ${domain}. ${
        daoStars.some(s => s.id === 'DaoHoa') && daoStars.some(s => s.id === 'HongLoan')
          ? 'Đào Hoa hội Hồng Loan là bộ Tam Minh, càng thêm phần duyên dáng và hỷ sự.'
          : 'Cần giữ chừng mực để duyên thành phúc, không thành họa.'
      }`
    );
  }

  // ══ TẦNG 4: Tứ Hóa ══
  const hoaStars = palace.stars.filter(s => s.transformation);
  for (const st of hoaStars) {
    const t = st.transformation!;
    if (t === 'ky') {
      out.push(
        `${st.name} Hóa Kỵ đóng tại cung này — Hóa Kỵ vào cung nào thì cung ấy là "tử huyệt" của lá số: ${domain} dễ vướng mắc, trì trệ, hoặc trở thành nơi bạn chấp niệm nhiều nhất. Người xưa dạy lấy sự nhẫn nại và buông bỏ đúng lúc làm thuốc giải.`
      );
    } else {
      const effect = t === 'loc' ? 'tài lộc và nhân duyên thuận lợi'
        : t === 'quyen' ? 'quyền lực, khả năng chưởng quản và sự quyết đoán'
        : 'danh tiếng, học vấn và quý nhân nâng đỡ';
      out.push(
        `${st.name} được ${TRANSFORMATION_NAMES[t]} kích hoạt — thêm ${effect} cho ${domain}. Đây là điểm nên dồn sức khai thác, vì Tứ Hóa là chỗ vận khí "bật đèn xanh" theo can năm sinh của bạn.`
      );
    }
  }

  // ══ TẦNG 5: Tam hợp & Xung chiếu ══
  if (opposite) {
    out.push(
      `Xung chiếu: cung ${opposite.name} (${listChinh(opposite)}) đối diện chiếu sang. Trong tử vi, đối cung có lực gần ngang cung tọa thủ — nên ${domain} của bạn luôn bị kéo bởi lực của ${opposite.name}; hai cung này phải đọc cùng nhau mới thấy đủ.`
    );
  }
  if (trines.length) {
    out.push(
      `Tam hợp chiếu về: ${trines.map(p => `${p.name} (${listChinh(p)})`).join(' và ')}. Cùng với cung xung chiếu, bốn cung này tạo thành "tam phương tứ chính" — bộ khung quyết định thực lực của ${domain}.`
    );
  }

  // ══ Tuần / Triệt ══
  if (palace.hasTuan && palace.hasTriet) {
    out.push('Cung bị cả Tuần lẫn Triệt án ngữ — mọi việc, dù tốt hay xấu, đều bị giảm cường độ và thường đến muộn hơn mong đợi. Bù lại, hung khí cũng bị chặn bớt; đây là cung cần "chậm mà chắc".');
  } else if (palace.hasTriet) {
    out.push('Có Triệt Lộ Không Vong án ngữ — Triệt chặn mạnh nhưng chủ yếu ở khoảng ba mươi năm đầu đời; sau đó lực giảm dần. Việc tốt đến chậm, việc xấu cũng bị chặn lại.');
  } else if (palace.hasTuan) {
    out.push('Có Tuần Trung Không Vong án ngữ — Tuần ngăn trở nhẹ nhưng đều đặn suốt đời và mạnh hơn ở nửa sau. Thành quả thường tới muộn, cần bền chí.');
  }

  // ══ Vòng Trường Sinh — nhịp sinh trưởng của cung ══
  const ts = palace.stars.find(s => s.kind === 'vong_truong_sinh');
  if (ts) {
    const m = STAR_MEANINGS[ts.id];
    out.push(
      `Vòng Trường Sinh tại đây là sao ${ts.name}${m ? ` — chủ về ${m.essence}` : ''}. Sao vòng này cho biết ${domain} đang ở chặng nào của nhịp sinh–trưởng–suy–tử.`
    );
  }

  // ══ Vòng Thái Tuế / Bác Sĩ — chỉ nêu sao đáng chú ý ══
  const notable = palace.stars.filter(s =>
    (s.kind === 'vong_thai_tue' || s.kind === 'vong_bac_si') && s.nature !== 'trung'
  );
  if (notable.length) {
    const good = notable.filter(s => s.nature === 'cat').map(s => s.name);
    const bad = notable.filter(s => s.nature === 'hung').map(s => s.name);
    const parts: string[] = [];
    if (good.length) parts.push(`sao lành ${joinVi(good)}`);
    if (bad.length) parts.push(`sao ngại ${joinVi(bad)}`);
    out.push(`Các vòng sao lưu niên tại cung: ${parts.join('; ')}. Nhóm này ảnh hưởng rõ nhất khi vận hạn đi tới cung này.`);
  }

  // ══ Thời gian: đại hạn & tiểu hạn ══
  const nearMinor = palace.minorAges.filter(a => a >= chart.currentAge && a <= chart.currentAge + 12);
  out.push(
    `Nhịp thời gian: đại hạn của cung này trải từ ${palace.majorPeriod.fromAge} đến ${palace.majorPeriod.toAge} tuổi` +
    (nearMinor.length ? `; tiểu hạn sắp tới rơi vào tuổi ${nearMinor.slice(0, 2).join(' và ')}.` : '.') +
    ` Khi vận đi qua đây, những gì luận ở trên sẽ hiện rõ nhất.`
  );

  // ══ Kết: điểm số ══
  out.push(
    `Tổng thể cung ${palace.name}: ${palace.score.label} — ${palace.score.score100}/100 ${'★'.repeat(palace.score.stars5) || '(không sao)'}.`
  );

  return out;
}
