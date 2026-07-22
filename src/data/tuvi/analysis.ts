// Tổng luận lá số Tử Vi — tổng hợp toàn cục (cách cục, tam hợp/xung chiếu,
// chuyên đề sự nghiệp/tài/tình, dòng thời gian đại hạn). Luận theo lối phổ thông,
// dùng cho mục đích chiêm nghiệm & giải trí.

import { TuViChartResult, Palace, StarInstance } from './types';
import { BRIGHTNESS_NAMES, TRANSFORMATION_NAMES } from './constants';

export interface ReadingSection {
  key: string;
  icon: string;        // emoji
  title: string;
  paragraphs: string[];
  tags?: string[];     // ví dụ tên cách cục — hiển thị dạng chip
}

export interface OverallReading {
  headline: string;
  subhead: string;
  sections: ReadingSection[];
}

// ── Bản chất cốt lõi 14 chính tinh (dùng dệt câu luận) ──
const STAR_DESC: Record<string, string> = {
  TuVi: 'khí chất tôn quý, thiên hướng lãnh đạo và khả năng thu phục lòng người',
  ThienCo: 'trí tuệ mưu lược, khéo tính toán, linh hoạt ứng biến và ưa vận động',
  ThaiDuong: 'nguồn dương khí hào phóng, quang minh chính đại, thích cống hiến và toả sáng nơi công chúng',
  VuKhuc: 'ý chí cương nghị, tài quản trị tiền bạc và tinh thần hành động quả quyết',
  ThienDong: 'tâm hồn an nhiên phúc hậu, lạc quan biết hưởng thụ và dễ được che chở',
  LiemTrinh: 'cá tính mạnh và nguyên tắc, đào hoa ngầm cùng khả năng bứt phá cải cách',
  ThienPhu: 'sự vững chãi như kho tàng của trời, tài tích luỹ, bao dung và biết giữ của',
  ThaiAm: 'sự dịu dàng tinh tế, giàu trực giác, óc thẩm mỹ và khả năng tích trữ âm thầm',
  ThamLang: 'sức hút mãnh liệt, đa tài đa dục, tham vọng và khát khao trải nghiệm',
  CuMon: 'tài hùng biện, óc phản biện sắc bén — nhưng dễ vướng thị phi khẩu thiệt',
  ThienTuong: 'sự tận tụy trung hậu, tài phò tá và gu thẩm mỹ mực thước',
  ThienLuong: 'phẩm cách chính trực, lòng nhân ái và khả năng che chở, hoá giải tai ương',
  ThatSat: 'khí phách uy dũng, quyết đoán dám xông pha — nhưng cô độc và khắc nghiệt',
  PhaQuan: 'tinh thần phá cách, dám đạp đổ dựng lại — mạnh mẽ nhưng dễ hao tổn biến động',
};

// ── Định hướng nghề nghiệp gợi ý theo chính tinh ──
const STAR_CAREER: Record<string, string> = {
  TuVi: 'quản lý, điều hành, lãnh đạo, ngành cao cấp và tổ chức lớn',
  ThienCo: 'tham mưu, hoạch định, kỹ thuật, tư vấn và nghiên cứu',
  ThaiDuong: 'giáo dục, truyền thông, chính trị và các ngành hoạt động công khai',
  VuKhuc: 'tài chính, ngân hàng, kỹ nghệ, quân đội và kinh doanh',
  ThienDong: 'dịch vụ, ẩm thực, giải trí, phúc lợi và những nghề nhẹ nhàng',
  LiemTrinh: 'kỹ thuật, hành pháp, y tế, nghệ thuật và công việc cải cách',
  ThienPhu: 'tài chính, quản trị, bất động sản và hành chính',
  ThaiAm: 'tài chính, nghệ thuật, thẩm mỹ, bất động sản và chăm sóc',
  ThamLang: 'kinh doanh, ngoại giao, giải trí và những nghề cần giao tế đa năng',
  CuMon: 'luật, giáo dục, truyền thông, y–dược và nghề dùng lời nói',
  ThienTuong: 'hành chính, trợ lý cấp cao, ngoại giao, ẩm thực và thời trang',
  ThienLuong: 'giáo dục, y tế, luật pháp, giám sát và công việc thiện nguyện',
  ThatSat: 'quân đội – công an, kỹ nghệ, thể thao và kinh doanh mạo hiểm',
  PhaQuan: 'khai phá, kỹ thuật, vận tải, khởi nghiệp và những nghề biến động',
};

// ── Cách cục chủ đạo theo chính tinh ở Mệnh ──
type AxisKey = 'satPhaTham' | 'coNguyetDongLuong' | 'tuPhuVuTuong' | 'cuNhat';
const AXIS_OF: Record<string, AxisKey> = {
  ThatSat: 'satPhaTham', PhaQuan: 'satPhaTham', ThamLang: 'satPhaTham',
  ThienCo: 'coNguyetDongLuong', ThaiAm: 'coNguyetDongLuong', ThienDong: 'coNguyetDongLuong', ThienLuong: 'coNguyetDongLuong',
  TuVi: 'tuPhuVuTuong', ThienPhu: 'tuPhuVuTuong', VuKhuc: 'tuPhuVuTuong', ThienTuong: 'tuPhuVuTuong', LiemTrinh: 'tuPhuVuTuong',
  ThaiDuong: 'cuNhat', CuMon: 'cuNhat',
};
const AXIS_NAME: Record<AxisKey, string> = {
  satPhaTham: 'Sát Phá Tham',
  coNguyetDongLuong: 'Cơ Nguyệt Đồng Lương',
  tuPhuVuTuong: 'Tử Phủ Vũ Tướng',
  cuNhat: 'Cự Nhật',
};
const AXIS_DESC: Record<AxisKey, string> = {
  satPhaTham:
    'Bạn thuộc trục Sát Phá Tham — cách của những tâm hồn khai phá. Cuộc đời hiếm khi bằng phẳng mà đi theo từng đợt sóng lớn: dám rời vùng an toàn, dám đập bỏ cái cũ để dựng cái mới. Đây là cách thường thấy ở doanh nhân, người tiên phong và nhà cải cách — thành bại đều đậm nét, bản lĩnh hơn người, song cần học cách giữ thành quả và tiết chế sự nóng vội.',
  coNguyetDongLuong:
    'Bạn thuộc trục Cơ Nguyệt Đồng Lương — cách của người tham mưu và phụng sự. Bạn tiến thân bằng trí tuệ, sự mềm mại và bền bỉ thay vì va đập; rất hợp với công việc chuyên môn, hành chính, giáo dục, chăm sóc hay tư vấn. Đời sống thiên về ổn định, hậu vận an nhàn, nhưng đôi khi thiếu quyết đoán và ngại những thay đổi lớn.',
  tuPhuVuTuong:
    'Bạn thuộc trục Tử Phủ Vũ Tướng — cách của người quản trị và tích luỹ. Bạn có tố chất thủ lĩnh, biết tổ chức, coi trọng nền tảng và của cải bền vững; hợp làm quản lý, tài chính, điều hành. Cuộc đời có căn cơ, dễ đạt địa vị, song cần tránh bảo thủ và quá coi trọng thể diện.',
  cuNhat:
    'Bạn thuộc trục Cự Nhật (Cự Môn – Thái Dương) — cách của người dùng lời nói và trí tuệ để lập thân. Bạn sáng ý, giỏi biện luận, hợp nghề nói – viết – giảng dạy – pháp lý – truyền thông. Danh tiếng đến từ khẩu tài, nhưng cũng dễ vướng thị phi nên cần giữ lời và minh bạch.',
};

// ── Ý nghĩa cung Thân an cư ──
const THAN_MEANING: Record<string, string> = {
  'Mệnh': 'Thân cư Mệnh — cuộc đời do chính bạn định đoạt, cá tính và số phận hoà làm một; bạn tự tay dựng nên vận mệnh của mình.',
  'Phúc Đức': 'Thân cư Phúc Đức — hậu vận hưởng phúc; đời sống tinh thần, sự an vui và phúc phần thừa hưởng quyết định hạnh phúc của bạn.',
  'Quan Lộc': 'Thân cư Quan Lộc — sự nghiệp là trọng tâm nửa sau cuộc đời; bạn khẳng định giá trị bản thân qua công danh và thành tựu.',
  'Tài Bạch': 'Thân cư Tài Bạch — tiền tài và khả năng kiếm sống chi phối hậu vận; bạn gắn giá trị bản thân với sự sung túc vật chất.',
  'Thiên Di': 'Thân cư Thiên Di — bạn phát triển mạnh khi ra ngoài, xa quê hoặc giao thiệp rộng; quý nhân và cơ hội thường đến từ bên ngoài.',
  'Phu Thê': 'Thân cư Phu Thê — hôn nhân và người bạn đời ảnh hưởng sâu đậm tới vận mệnh; hạnh phúc lứa đôi là mắt xích lớn của đời bạn.',
};

// ── Ý nghĩa Cục ──
const CUC_DESC: Record<string, string> = {
  Thuy: 'hành Thuỷ — trí tuệ linh hoạt, giỏi thích nghi, tình cảm sâu lắng',
  Moc: 'hành Mộc — nhân hậu, vươn lên bền bỉ, giàu sức sống',
  Kim: 'hành Kim — cương nghị, quyết đoán, trọng nguyên tắc',
  Tho: 'hành Thổ — vững vàng, thành tín, bao dung và biết tích luỹ',
  Hoa: 'hành Hoả — nhiệt huyết, bùng nổ, quyết liệt và giàu đam mê',
};

// ── Helpers ──
function labelStar(s: StarInstance): string {
  let l = s.name;
  if (s.brightness) l += ` ${BRIGHTNESS_NAMES[s.brightness]}`;
  if (s.transformation) l += ` ${TRANSFORMATION_NAMES[s.transformation]}`;
  return l;
}
function chinhStars(p: Palace): StarInstance[] { return p.stars.filter(s => s.kind === 'chinh_tinh'); }
function listChinh(p: Palace): string {
  const c = chinhStars(p);
  return c.length ? c.map(labelStar).join(', ') : 'vô chính diệu';
}
function namesOfKind(p: Palace, kind: StarInstance['kind']): string[] {
  return p.stars.filter(s => s.kind === kind).map(s => s.name);
}
function joinVi(items: string[]): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  return items.slice(0, -1).join(', ') + ' và ' + items[items.length - 1];
}

/** Sinh toàn bộ tổng luận từ kết quả lá số. */
export function buildOverallReading(chart: TuViChartResult): OverallReading {
  const menh = chart.palaces[0];
  const quan = chart.palaces[4];
  const tai = chart.palaces[8];
  const di = chart.palaces[6];
  const phuThe = chart.palaces[10];
  const tuTuc = chart.palaces[9];
  const phucDuc = chart.palaces[2];

  // Tam phương tứ chính của Mệnh (Mệnh–Tài–Quan + đối cung Thiên Di)
  const hoiStars = [menh, quan, tai, di].flatMap(p => p.stars);
  const hoiIds = hoiStars.map(s => s.id);
  const has = (id: string) => hoiIds.includes(id);
  const countIn = (ids: string[]) => ids.filter(id => hoiIds.includes(id)).length;
  const hoaSet = new Set(hoiStars.filter(s => s.transformation).map(s => s.transformation));

  const menhChinh = chinhStars(menh);
  const voChinhDieu = menhChinh.length === 0;
  const effChinh = voChinhDieu ? chinhStars(di) : menhChinh;

  const sections: ReadingSection[] = [];

  // ══ 1. Tam trụ: Mệnh — Thân — Cục ══
  {
    const paras: string[] = [];
    const menhEssence = effChinh
      .map(s => STAR_DESC[s.id])
      .filter(Boolean)
      .join('; ');
    if (voChinhDieu) {
      paras.push(
        `Cung Mệnh an tại ${menh.branchName} nhưng vô chính diệu — không có chính tinh toạ thủ, nên mượn khí của ${listChinh(di)} từ cung Thiên Di đối diện. Người Mệnh vô chính diệu tính cách mềm dẻo, đa diện, dễ thích nghi; số phận uyển chuyển theo hoàn cảnh và thường "gá" vào người khác để toả sáng${menhEssence ? `. Khí mượn về mang ${menhEssence}` : ''}.`
      );
    } else {
      paras.push(
        `Cung Mệnh an tại ${menh.branchName}, toạ thủ ${listChinh(menh)}. Đây là trụ cột định hình con người bạn: ${menhEssence || 'một cá tính riêng biệt khó lẫn'}. Độ sáng của sao cho biết những phẩm chất ấy được phát huy đến đâu ngay từ trong bản mệnh.`
      );
    }

    const thanPalace = chart.palaces.find(p => p.isBody);
    if (thanPalace) {
      const meaning = THAN_MEANING[thanPalace.name]
        || `Thân cư ${thanPalace.name} — lĩnh vực này giữ vai trò then chốt ở nửa sau cuộc đời.`;
      paras.push(`${meaning} (Cung Thân đóng tại ${thanPalace.branchName}, cùng ${listChinh(thanPalace)}.)`);
    }

    paras.push(
      `Bản mệnh thuộc ${chart.cuc.name} — ${CUC_DESC[chart.cuc.element] || 'một cục số riêng'}. Cục số cũng ấn định nhịp đại hạn: vận mười năm đầu tiên khởi từ ${chart.cuc.number} tuổi, rồi ${chart.isYang ? 'đi thuận' : 'đi nghịch'} qua các cung. Bộ ba Mệnh – Thân – Cục là ba chân kiềng để đọc mọi phần còn lại của lá số.`
    );

    sections.push({ key: 'tamtru', icon: '🪐', title: 'Tam Trụ: Mệnh · Thân · Cục', paragraphs: paras });
  }

  // ══ 2. Cách cục chủ đạo ══
  {
    const paras: string[] = [];
    const tags: string[] = [];

    const AXIS_PRIORITY = ['TuVi', 'ThienPhu', 'ThatSat', 'PhaQuan', 'ThamLang', 'ThaiDuong', 'CuMon', 'VuKhuc', 'ThienTuong', 'LiemTrinh', 'ThienCo', 'ThaiAm', 'ThienDong', 'ThienLuong'];
    const primary = AXIS_PRIORITY.find(id => effChinh.some(s => s.id === id));
    const axis = primary ? AXIS_OF[primary] : undefined;
    if (axis) {
      tags.push(AXIS_NAME[axis]);
      paras.push(AXIS_DESC[axis]);
    } else {
      paras.push('Lá số không rơi vào một trục chính tinh điển hình rõ rệt — cá tính của bạn là sự pha trộn, cần đọc kỹ từng cung để thấy bức tranh trọn vẹn.');
    }

    // Các cách cục đặc biệt (cát cách)
    const isMenh = (id: string) => menh.stars.some(s => s.id === id);
    if (isMenh('TuVi') && isMenh('ThienPhu')) {
      tags.push('Tử Phủ đồng cung');
      paras.push('Tử Vi và Thiên Phủ cùng toạ Mệnh — "vua" và "kho tàng" hội một chỗ, là cách rất quý: vừa có uy lãnh đạo vừa có nền tảng vật chất vững, phú quý song toàn nếu được cát tinh phù trợ.');
    }
    if (has('TuVi') && countIn(['TaPhu', 'HuuBat', 'VanXuong', 'VanKhuc', 'ThienKhoi', 'ThienViet']) >= 2) {
      tags.push('Quân thần khánh hội');
      paras.push('Tử Vi được nhiều phụ tá cát tinh (Tả Hữu / Xương Khúc / Khôi Việt) vây quanh — cách "Quân thần khánh hội": như bậc đế vương có quần thần phò tá, dễ được người tài giúp sức, công danh hanh thông.');
    }
    if (has('ThienPhu') && has('ThienTuong')) {
      tags.push('Phủ Tướng triều viên');
      paras.push('Thiên Phủ và Thiên Tướng cùng chầu về Mệnh — cách "Phủ Tướng triều viên", chủ đời sống có căn cơ, biết giữ của và được quý nhân nâng đỡ, hậu vận sung túc.');
    }
    if (has('VanXuong') && has('VanKhuc')) {
      tags.push('Xương Khúc hội Mệnh');
      paras.push('Văn Xương và Văn Khúc hội chiếu — tài văn chương, học vấn và nghệ thuật nổi trội, thi cử khoa bảng thuận lợi, ăn nói có duyên.');
    }
    if (has('TaPhu') && has('HuuBat')) {
      tags.push('Tả Hữu hội Mệnh');
      paras.push('Tả Phụ và Hữu Bật hội chiếu — suốt đời có quý nhân và người trợ giúp bên cạnh, làm việc gì cũng dễ được hậu thuẫn.');
    }
    if (has('ThienKhoi') && has('ThienViet')) {
      tags.push('Khôi Việt quý nhân');
      paras.push('Thiên Khôi và Thiên Việt hội chiếu — cách quý nhân đắc lực, thường gặp cơ may từ người có địa vị và những cơ hội bất ngờ đúng lúc.');
    }
    if (hoaSet.has('loc') && hoaSet.has('quyen') && hoaSet.has('khoa')) {
      tags.push('Lộc Quyền Khoa hội (Tam kỳ)');
      paras.push('Hội đủ Hoá Lộc – Hoá Quyền – Hoá Khoa trong tam phương — cách "Tam kỳ gia hội" rất hiếm và quý: tài lộc, quyền uy và danh tiếng cùng tụ, là dấu hiệu của người thành đạt lớn.');
    }
    if (has('LocTon') && hoaSet.has('loc')) {
      tags.push('Song Lộc triều viên');
      paras.push('Lộc Tồn và Hoá Lộc cùng hội — cách "Song Lộc", chủ tài lộc dồi dào, dễ tích luỹ của cải và có phúc về tiền bạc.');
    }
    if (isMenh('ThamLang') && (isMenh('HoaTinh') || isMenh('LinhTinh'))) {
      const which = isMenh('HoaTinh') ? 'Hoả Tham' : 'Linh Tham';
      tags.push(`${which} hoạnh phát`);
      paras.push(`Tham Lang gặp ${isMenh('HoaTinh') ? 'Hoả Tinh' : 'Linh Tinh'} tại Mệnh — cách "${which}", chủ hoạnh phát: tiền tài hoặc cơ hội có thể đến rất nhanh và bất ngờ, song cũng cần đề phòng hoạnh phát thì hoạnh phá.`);
    }

    // Cảnh báo (sát cách)
    if (menh.stars.some(s => s.transformation === 'ky')) {
      tags.push('Hoá Kỵ thủ Mệnh ⚠');
      paras.push('Mệnh có Hoá Kỵ toạ thủ — cuộc đời dễ vướng những trở ngại, phiền muộn dai dẳng và tâm tư nặng lòng; cần lấy sự kiên nhẫn và buông bỏ đúng lúc làm phương thuốc hoá giải.');
    }
    if (isMenh('KinhDuong') || isMenh('DaLa')) {
      const isMaDau = isMenh('KinhDuong') && menh.branchIndex === 6;
      if (isMaDau) {
        tags.push('Mã đầu đới kiếm');
        paras.push('Kình Dương cư Ngọ ngay tại Mệnh — cách "Mã đầu đới kiếm": tính khí cương mãnh, dám xông pha nơi hiểm; nếu chế ngự được thì uy dũng lập nghiệp lớn, bằng không dễ chuốc thương tổn.');
      } else {
        tags.push('Kình/Đà thủ Mệnh ⚠');
        paras.push('Mệnh có sát tinh Kình Dương / Đà La toạ thủ — bản tính sắc bén, cứng cỏi nhưng dễ gặp cạnh tranh, trắc trở hoặc phiền toái dây dưa; nên rèn sự mềm mỏng để bớt va chạm.');
      }
    }
    if (isMenh('DiaKhong') || isMenh('DiaKiep')) {
      tags.push('Không Kiếp thủ Mệnh ⚠');
      paras.push('Địa Không / Địa Kiếp toạ Mệnh — tư tưởng phóng khoáng, nhiều ý tưởng khác người, nhưng dễ hao tán tiền của và gặp chuyện dở dang; hợp tu tâm, nghiên cứu, tâm linh hơn là lao vào tranh đoạt vật chất.');
    }
    if (has('ThaiDuong') && has('ThaiAm')) {
      tags.push('Nhật Nguyệt');
      paras.push('Thái Dương và Thái Âm cùng hội chiếu — cách "Nhật Nguyệt", âm dương giao hoà: bạn dung hoà được cả sự cương mãnh lẫn dịu dàng, nội tâm phong phú và dễ có sức ảnh hưởng lên nhiều người.');
    }

    sections.push({ key: 'cachcuc', icon: '⚜️', title: 'Cách Cục Chủ Đạo', paragraphs: paras, tags });
  }

  // ══ 3. Tam hợp & xung chiếu ══
  {
    const paras: string[] = [];
    paras.push(
      `Theo lối luận tử vi, cung Mệnh không đứng một mình mà được đọc cùng bộ tam hợp Mệnh – Tài – Quan và cung Thiên Di đối diện — gọi là "tam phương tứ chính".`
    );
    paras.push(
      `Bộ tam hợp của bạn: Quan Lộc (${listChinh(quan)}) và Tài Bạch (${listChinh(tai)}) chiếu về Mệnh. Đây là hai lực đỡ trực tiếp cho vận mệnh — sự nghiệp và tiền tài hậu thuẫn lẫn nhau, cho thấy bạn phát tiết năng lượng của mình chủ yếu qua công việc và khả năng tạo ra của cải.`
    );
    paras.push(
      voChinhDieu
        ? `Cung Thiên Di (${listChinh(di)}) đặc biệt quan trọng với bạn: vì Mệnh vô chính diệu nên chính khí ở đối cung này mới là "cái tôi thật" bộc lộ ra ngoài. Bạn thường rực rỡ hơn khi bước ra xã hội, xa nơi chôn nhau cắt rốn.`
        : `Cung Thiên Di (${listChinh(di)}) là tấm gương đối diện Mệnh — phản chiếu cách xã hội nhìn bạn và những gì chờ bạn khi ra ngoài. Đối chiếu Mệnh với Thiên Di sẽ thấy rõ bạn "hướng nội" hay "hướng ngoại", nên thủ hay nên tiến.`
    );
    sections.push({ key: 'tamhop', icon: '🔺', title: 'Tam Hợp & Xung Chiếu', paragraphs: paras });
  }

  // ══ 4. Sự nghiệp & công danh ══
  {
    const paras: string[] = [];
    const qc = chinhStars(quan);
    const career = (qc.length ? qc : effChinh)
      .map(s => STAR_CAREER[s.id])
      .filter(Boolean);
    paras.push(
      `Cung Quan Lộc an tại ${quan.branchName} với ${listChinh(quan)} — đạt ${quan.score.score100}/100 điểm (${quan.score.label}). ${qc.length ? 'Chính tinh nơi đây' : 'Do vô chính diệu, mượn khí bản Mệnh nên hướng nghề'} cho thấy con đường công danh của bạn.`
    );
    if (career.length) {
      paras.push(`Ngành nghề hợp mệnh: ${Array.from(new Set(career)).join('; ')}. Đây là những lĩnh vực bạn dễ phát huy sở trường và thăng tiến nhất.`);
    }
    const quanCat = namesOfKind(quan, 'phu_cat');
    const quanSat = namesOfKind(quan, 'phu_sat');
    if (quanCat.length) paras.push(`Quan Lộc có cát tinh ${joinVi(quanCat)} phù trợ — công việc được quý nhân nâng đỡ, dễ gặp cơ hội tốt.`);
    if (quanSat.length) paras.push(`Lưu ý: Quan Lộc có ${joinVi(quanSat)} — đường công danh đôi lúc trắc trở, cạnh tranh gắt; cần kiên trì và giữ mình.`);
    if (quan.stars.some(s => s.transformation && s.transformation !== 'ky')) {
      paras.push('Có Tứ Hoá cát nhập Quan Lộc — dấu hiệu sự nghiệp bừng sáng vào đúng thời điểm, đáng để dồn sức khi cơ hội tới.');
    }
    sections.push({ key: 'sunghiep', icon: '💼', title: 'Sự Nghiệp & Công Danh', paragraphs: paras });
  }

  // ══ 5. Tài lộc ══
  {
    const paras: string[] = [];
    paras.push(
      `Cung Tài Bạch an tại ${tai.branchName} với ${listChinh(tai)} — đạt ${tai.score.score100}/100 điểm (${tai.score.label}). Cung này cho biết cách bạn kiếm tiền và giữ tiền.`
    );
    const hasLoc = tai.stars.some(s => s.id === 'LocTon' || s.transformation === 'loc');
    if (hasLoc) paras.push('Tài Bạch có Lộc (Lộc Tồn hoặc Hoá Lộc) — phúc về tiền bạc rõ rệt: nguồn thu ổn định, biết tích luỹ và ít khi túng thiếu.');
    const taiSat = namesOfKind(tai, 'phu_sat');
    if (taiSat.length) paras.push(`Có ${joinVi(taiSat)} tại Tài Bạch — tiền bạc dễ hao hụt hoặc đến rồi đi; nên lập kế hoạch chi tiêu và tránh đầu tư mạo hiểm quá tay.`);
    if (tai.stars.some(s => s.transformation === 'ky')) paras.push('Tài Bạch gặp Hoá Kỵ — cần đề phòng tranh chấp tiền nong, cho vay mượn hay bảo lãnh; minh bạch sổ sách là cách giữ của.');
    paras.push('Đối chiếu điểm số Tài Bạch với Quan Lộc sẽ thấy bạn thiên về "kiếm tiền từ sự nghiệp" hay "tiền sinh tiền" — hai con đường làm giàu khác nhau.');
    sections.push({ key: 'taibach', icon: '💰', title: 'Tài Lộc', paragraphs: paras });
  }

  // ══ 6. Tình duyên & gia đạo ══
  {
    const paras: string[] = [];
    const daoAll = Array.from(new Set([...namesOfKind(menh, 'dao_hoa'), ...namesOfKind(phuThe, 'dao_hoa')]));
    paras.push(
      `Cung Phu Thê an tại ${phuThe.branchName} với ${listChinh(phuThe)} — đạt ${phuThe.score.score100}/100 (${phuThe.score.label}). Cung này mô tả người bạn đời và sắc thái hôn nhân của bạn.`
    );
    if (daoAll.length) paras.push(`Có đào hoa tinh ${joinVi(daoAll)} — đường tình cảm nồng nàn, giàu sức hút, nhưng cũng cần chung thuỷ và tỉnh táo để giữ gìn hạnh phúc.`);
    const phuTheSat = namesOfKind(phuThe, 'phu_sat');
    if (phuTheSat.length) paras.push(`Phu Thê có ${joinVi(phuTheSat)} — tình duyên đôi khi sóng gió, hợp muộn hoặc cần vun đắp nhiều; kết hôn muộn một chút thường bền hơn.`);
    paras.push(
      `Cung Tử Tức (con cái) tại ${tuTuc.branchName}: ${listChinh(tuTuc)} — ${tuTuc.score.label.toLowerCase()}. Cung Phúc Đức tại ${phucDuc.branchName}: ${listChinh(phucDuc)} — cho biết phúc phần thừa hưởng và đời sống tinh thần, cũng là "hậu phương" nâng đỡ vận mệnh khi sóng gió.`
    );
    sections.push({ key: 'tinhduyen', icon: '💞', title: 'Tình Duyên & Gia Đạo', paragraphs: paras });
  }

  // ══ 7. Dòng thời gian đại hạn ══
  {
    const paras: string[] = [];
    const daihan = [...chart.palaces]
      .filter(p => p.majorPeriod.fromAge <= 85)
      .sort((a, b) => a.majorPeriod.fromAge - b.majorPeriod.fromAge);
    paras.push(
      `Đại hạn là những vận mười năm nối tiếp nhau, ${chart.isYang ? 'đi thuận' : 'đi nghịch'} qua 12 cung kể từ ${chart.cuc.number} tuổi. Mỗi vận, cung được chiếu tới sẽ "cầm lái" cuộc đời trong mười năm ấy:`
    );
    const lines = daihan.slice(0, 8).map(p => {
      const tag = p.score.score100 >= 65 ? ' ✦ vận thịnh' : p.score.score100 < 40 ? ' ✷ cần thận trọng' : '';
      return `• ${p.majorPeriod.fromAge}–${p.majorPeriod.toAge} tuổi — đại hạn cung ${p.name} (${listChinh(p)}): ${p.score.label}${tag}.`;
    });
    paras.push(lines.join('\n'));

    const best = daihan.reduce((a, b) => (b.score.score100 > a.score.score100 ? b : a), daihan[0]);
    const worst = daihan.reduce((a, b) => (b.score.score100 < a.score.score100 ? b : a), daihan[0]);
    if (best && worst && best !== worst) {
      paras.push(
        `Rực rỡ nhất là vận ${best.majorPeriod.fromAge}–${best.majorPeriod.toAge} tuổi (cung ${best.name}) — nên dồn sức bứt phá giai đoạn này. Cần giữ mình hơn cả là vận ${worst.majorPeriod.fromAge}–${worst.majorPeriod.toAge} tuổi (cung ${worst.name}) — hãy thủ thế, tránh phiêu lưu lớn.`
      );
    }
    sections.push({ key: 'daihan', icon: '⏳', title: 'Dòng Thời Gian Đại Hạn', paragraphs: paras });
  }

  // ══ 8. Điểm mạnh & điều cần lưu tâm ══
  {
    const paras: string[] = [];
    const ranked = [...chart.palaces].sort((a, b) => b.score.score100 - a.score.score100);
    const strong = ranked.slice(0, 2);
    const weak = ranked.slice(-2).reverse();
    paras.push(
      `Điểm sáng của lá số nằm ở cung ${strong[0].name} (${strong[0].score.score100}đ) và ${strong[1].name} (${strong[1].score.score100}đ) — đây là những lĩnh vực bạn được trời ưu ái, nên khai thác làm bệ phóng cho cả cuộc đời.`
    );
    paras.push(
      `Cần lưu tâm nhất là cung ${weak[0].name} (${weak[0].score.score100}đ) và ${weak[1].name} (${weak[1].score.score100}đ) — không phải điềm xấu, mà là những bài học đời gửi tới; ý thức sớm thì hoá giải được phần lớn.`
    );
    const tuanTriet = chart.palaces.filter(p => p.hasTuan || p.hasTriet).map(p => p.name);
    if (tuanTriet.length) {
      paras.push(`Tuần/Triệt án ngữ các cung ${joinVi(tuanTriet)} — ở những lĩnh vực này, mọi việc (cả tốt lẫn xấu) thường đến chậm và bị giảm cường độ; cứ bền chí, "chậm mà chắc".`);
    }
    paras.push('Lá số chỉ vẽ ra xu hướng của trời đất, còn nét bút cuối cùng là ở bạn. Biết mình mạnh đâu, yếu đâu, thuận lúc nào — đó mới là ý nghĩa thật của việc xem số.');
    sections.push({ key: 'tongket', icon: '🧭', title: 'Điểm Mạnh & Điều Cần Lưu Tâm', paragraphs: paras });
  }

  // ── Tiêu đề tổng ──
  const menhLabel = voChinhDieu ? `Mệnh vô chính diệu tại ${menh.branchName}` : `Mệnh ${chinhStars(menh).map(s => s.name).join(' – ')} tại ${menh.branchName}`;
  const primaryStar = ['TuVi', 'ThienPhu', 'ThatSat', 'PhaQuan', 'ThamLang', 'ThaiDuong', 'CuMon', 'VuKhuc', 'ThienTuong', 'LiemTrinh', 'ThienCo', 'ThaiAm', 'ThienDong', 'ThienLuong'].find(id => effChinh.some(s => s.id === id));
  const axisName = primaryStar && AXIS_OF[primaryStar] ? AXIS_NAME[AXIS_OF[primaryStar]] : 'tổng hợp';

  return {
    headline: `${menhLabel} · ${chart.cuc.name}`,
    subhead: `Cách cục chủ đạo: ${axisName} · Bàn luận toàn cục qua ${sections.length} phương diện`,
    sections,
  };
}
