// Tổng luận lá số Tử Vi — dàn ý 9 phần theo lối "tiên tổng quan, hậu chi tiết"
// của các trang tử vi chuyên nghiệp: Mệnh–Thân làm gốc, Đại vận làm cành, Lưu niên làm lá.
// Nội dung mang tính chiêm nghiệm & tham khảo, không phán định mệnh.

import { TuViChartResult, Palace, StarInstance } from './types';
import { BRIGHTNESS_NAMES, TRANSFORMATION_NAMES, ELEMENT_VI, CHINH_TINH } from './constants';
import { ALL_STAR_MEANINGS as STAR_MEANINGS } from './starMeaningsAll';
import { detectCachCuc, DetectedCachCuc } from './cachCuc';

export interface ReadingSection {
  key: string;
  icon: string;
  title: string;
  paragraphs: string[];
  tags?: { label: string; type: 'cat' | 'hung' | 'info' }[];
}

export interface OverallReading {
  headline: string;
  subhead: string;
  sections: ReadingSection[];
  cachCuc: DetectedCachCuc[];
}

// ── Bản chất cốt lõi 14 chính tinh ──
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

const STAR_CAREER: Record<string, string> = {
  TuVi: 'quản lý, điều hành, lãnh đạo tổ chức lớn',
  ThienCo: 'tham mưu, hoạch định, kỹ thuật, tư vấn, nghiên cứu',
  ThaiDuong: 'giáo dục, truyền thông, hoạt động công khai, chính trị',
  VuKhuc: 'tài chính, ngân hàng, kỹ nghệ, quân đội, kinh doanh',
  ThienDong: 'dịch vụ, ẩm thực, giải trí, phúc lợi',
  LiemTrinh: 'kỹ thuật, hành pháp, y tế, nghệ thuật, công việc cải cách',
  ThienPhu: 'tài chính, quản trị, bất động sản, hành chính',
  ThaiAm: 'tài chính, nghệ thuật, thẩm mỹ, bất động sản, chăm sóc',
  ThamLang: 'kinh doanh, ngoại giao, giải trí, nghề cần giao tế',
  CuMon: 'luật, giáo dục, truyền thông, y–dược, nghề dùng lời nói',
  ThienTuong: 'hành chính, trợ lý cấp cao, ngoại giao, ẩm thực, thời trang',
  ThienLuong: 'giáo dục, y tế, luật pháp, giám sát, thiện nguyện',
  ThatSat: 'quân đội – công an, kỹ nghệ, thể thao, kinh doanh mạo hiểm',
  PhaQuan: 'khai phá, kỹ thuật, vận tải, khởi nghiệp',
};

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
    'Bạn thuộc trục Sát Phá Tham — cách của những tâm hồn khai phá. Cuộc đời hiếm khi bằng phẳng mà đi theo từng đợt sóng lớn: dám rời vùng an toàn, dám đập bỏ cái cũ để dựng cái mới. Đây là trục thường thấy ở doanh nhân, người tiên phong và nhà cải cách — thành bại đều đậm nét, bản lĩnh hơn người, song phải học cách giữ thành quả và tiết chế nóng vội.',
  coNguyetDongLuong:
    'Bạn thuộc trục Cơ Nguyệt Đồng Lương — cách của người tham mưu và phụng sự. Cổ nhân có câu "Cơ Nguyệt Đồng Lương tác lại nhân": bạn tiến thân bằng trí tuệ, sự mềm mại và bền bỉ thay vì va đập, rất hợp công việc chuyên môn, hành chính, giáo dục hay tư vấn. Đời sống thiên về ổn định, hậu vận an nhàn, nhưng đôi khi thiếu quyết đoán và ngại thay đổi lớn.',
  tuPhuVuTuong:
    'Bạn thuộc trục Tử Phủ Vũ Tướng — cách của người quản trị và tích luỹ. Bạn có tố chất thủ lĩnh, biết tổ chức, coi trọng nền tảng và của cải bền vững; hợp làm quản lý, tài chính, điều hành. Cuộc đời có căn cơ, dễ đạt địa vị, song cần tránh bảo thủ và quá coi trọng thể diện.',
  cuNhat:
    'Bạn thuộc trục Cự Nhật (Cự Môn – Thái Dương) — cách của người dùng lời nói và trí tuệ lập thân. Bạn sáng ý, giỏi biện luận, hợp nghề nói – viết – giảng dạy – pháp lý – truyền thông. Danh tiếng đến từ khẩu tài, nhưng cũng dễ vướng thị phi nên phải giữ lời và minh bạch.',
};

const THAN_MEANING: Record<string, string> = {
  'Mệnh': 'Thân cư Mệnh — cuộc đời do chính bạn định đoạt, cá tính và số phận hoà làm một; bạn tự tay dựng nên vận mệnh của mình.',
  'Phụ Mẫu': 'Thân cư Phụ Mẫu — cha mẹ và bề trên ảnh hưởng sâu tới hậu vận; bạn thường mang dấu ấn gia đình rất đậm trong cách sống.',
  'Phúc Đức': 'Thân cư Phúc Đức — hậu vận hưởng phúc; đời sống tinh thần, sự an vui và phúc phần thừa hưởng quyết định hạnh phúc của bạn.',
  'Điền Trạch': 'Thân cư Điền Trạch — nhà cửa, đất đai và gia trạch là chỗ neo của cuộc đời; bạn tìm thấy giá trị bản thân qua cơ ngơi mình tạo dựng.',
  'Quan Lộc': 'Thân cư Quan Lộc — sự nghiệp là trọng tâm nửa sau cuộc đời; bạn khẳng định giá trị bản thân qua công danh và thành tựu.',
  'Nô Bộc': 'Thân cư Nô Bộc — bạn bè và các mối quan hệ xã hội chi phối vận mệnh; thành hay bại phần nhiều do người mình kết giao.',
  'Thiên Di': 'Thân cư Thiên Di — bạn phát triển mạnh khi ra ngoài, xa quê hoặc giao thiệp rộng; quý nhân và cơ hội thường đến từ bên ngoài.',
  'Tật Ách': 'Thân cư Tật Ách — sức khỏe và những trở ngại của thân là bài học lớn; giữ được thân an thì mọi việc khác thuận theo.',
  'Tài Bạch': 'Thân cư Tài Bạch — tiền tài và khả năng kiếm sống chi phối hậu vận; bạn gắn giá trị bản thân với sự sung túc vật chất.',
  'Tử Tức': 'Thân cư Tử Tức — con cái và sức sáng tạo là nơi bạn gửi trọn tâm lực nửa sau cuộc đời.',
  'Phu Thê': 'Thân cư Phu Thê — hôn nhân và người bạn đời ảnh hưởng sâu đậm tới vận mệnh; hạnh phúc lứa đôi là mắt xích lớn của đời bạn.',
  'Huynh Đệ': 'Thân cư Huynh Đệ — anh em bạn bè gần gũi là điểm tựa và cũng là nơi phát sinh nhiều duyên nợ.',
};

const CUC_DESC: Record<string, string> = {
  Thuy: 'trí tuệ linh hoạt, giỏi thích nghi, tình cảm sâu lắng',
  Moc: 'nhân hậu, vươn lên bền bỉ, giàu sức sống',
  Kim: 'cương nghị, quyết đoán, trọng nguyên tắc',
  Tho: 'vững vàng, thành tín, bao dung và biết tích luỹ',
  Hoa: 'nhiệt huyết, bùng nổ, quyết liệt và giàu đam mê',
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
function catNames(p: Palace): string[] {
  return p.stars.filter(s => s.nature === 'cat' && (s.kind === 'phu_tinh' || s.kind === 'dao_hoa')).map(s => s.name);
}
function satNames(p: Palace): string[] {
  return p.stars.filter(s => s.nature === 'hung' && s.kind === 'phu_tinh').map(s => s.name);
}
function joinVi(items: string[]): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  return items.slice(0, -1).join(', ') + ' và ' + items[items.length - 1];
}
function scoreTag(p: Palace): string {
  return `${p.score.score100}/100 – ${p.score.label}`;
}

/** Sinh toàn bộ tổng luận từ kết quả lá số. */
export function buildOverallReading(chart: TuViChartResult): OverallReading {
  const [menh, phuMau, phucDuc, dienTrach, quanLoc, noBoc, thienDi, tatAch, taiBach, tuTuc, phuThe, huynhDe] = chart.palaces;

  const menhChinh = chinhStars(menh);
  const voChinhDieu = menhChinh.length === 0;
  const effChinh = voChinhDieu ? chinhStars(thienDi) : menhChinh;
  const cachCuc = detectCachCuc(chart);
  const sections: ReadingSection[] = [];

  // ══ 1. TỔNG QUAN: Bản mệnh · Cục · Mệnh – Thân ══
  {
    const paras: string[] = [];
    paras.push(
      `Bạn sinh năm ${chart.yearCanChi}, bản mệnh nạp âm là **${chart.banMenh.name}** (hành ${ELEMENT_VI[chart.banMenh.element]}). ` +
      `Lá số thuộc **${chart.cuc.name}** — ${CUC_DESC[chart.cuc.element] || 'một cục số riêng'}. ` +
      `Xét sinh khắc: **${chart.menhCuc.label}**. ${chart.menhCuc.meaning}`
    );

    const menhEssence = effChinh.map(s => STAR_DESC[s.id]).filter(Boolean).join('; ');
    if (voChinhDieu) {
      paras.push(
        `Cung Mệnh an tại ${menh.canName} ${menh.branchName} nhưng **vô chính diệu** — không chính tinh toạ thủ, phải mượn khí ${listChinh(thienDi)} từ cung Thiên Di đối diện. ` +
        `Người Mệnh vô chính diệu tính cách mềm dẻo, đa diện, dễ thích nghi; vận mệnh uyển chuyển theo hoàn cảnh và thường toả sáng nhờ nương vào người khác${menhEssence ? `. Khí mượn về mang ${menhEssence}` : ''}.`
      );
    } else {
      paras.push(
        `Cung Mệnh an tại ${menh.canName} ${menh.branchName}, toạ thủ **${listChinh(menh)}**. Đây là trụ cột định hình con người bạn: ${menhEssence || 'một cá tính riêng biệt khó lẫn'}. ` +
        `Độ sáng của chính tinh cho biết những phẩm chất ấy phát tiết được đến đâu — miếu vượng thì "như cá gặp nước", hãm địa thì ưu điểm dễ hoá thành khuyết điểm cùng gốc.`
      );
    }

    const thanPalace = chart.palaces.find(p => p.isBody);
    if (thanPalace) {
      paras.push(
        `${THAN_MEANING[thanPalace.name] || `Thân cư ${thanPalace.name} — lĩnh vực này giữ vai trò then chốt ở nửa sau cuộc đời.`} ` +
        `(Cung Thân đóng tại ${thanPalace.branchName} cùng ${listChinh(thanPalace)}.)`
      );
    }

    paras.push(
      `Mệnh Chủ của bạn là **${chart.menhChu}**, Thân Chủ là **${chart.thanChu}** — hai sao chủ này ví như "gốc rễ ngầm", chi phối nét bản chất sâu nhất bên dưới lớp chính tinh. ` +
      `Bạn thuộc **${chart.amDuongLabel}**, ${chart.thuanLy ? 'âm dương **thuận lý**: trong ngoài nhất quán, nghĩ sao làm vậy nên đường đời tương đối trôi chảy' : 'âm dương **nghịch lý**: bên trong và bên ngoài đôi khi lệch nhau, dễ "nghĩ một đằng làm một nẻo", đời nhiều trắc trở hơn nhưng cũng luyện nên chiều sâu'}. ` +
      `Đại hạn của bạn ${chart.isYang ? 'đi thuận' : 'đi nghịch'}, khởi từ ${chart.cuc.number} tuổi.`
    );

    sections.push({ key: 'tongquan', icon: '🪐', title: 'Tổng Quan: Bản Mệnh · Cục · Mệnh – Thân', paragraphs: paras });
  }

  // ══ 2. CÁCH CỤC ══
  {
    const paras: string[] = [];
    const tags: ReadingSection['tags'] = [];

    const AXIS_PRIORITY = ['TuVi', 'ThienPhu', 'ThatSat', 'PhaQuan', 'ThamLang', 'ThaiDuong', 'CuMon', 'VuKhuc', 'ThienTuong', 'LiemTrinh', 'ThienCo', 'ThaiAm', 'ThienDong', 'ThienLuong'];
    const primary = AXIS_PRIORITY.find(id => effChinh.some(s => s.id === id));
    const axis = primary ? AXIS_OF[primary] : undefined;
    if (axis) {
      tags.push({ label: `Trục ${AXIS_NAME[axis]}`, type: 'info' });
      paras.push(AXIS_DESC[axis]);
    } else {
      paras.push('Lá số không rơi vào một trục chính tinh điển hình rõ rệt — cá tính của bạn là sự pha trộn, cần đọc kỹ từng cung mới thấy bức tranh trọn vẹn.');
    }

    if (cachCuc.length === 0) {
      paras.push('Lá số không hình thành cách cục có tên nào nổi bật. Điều này không phải dở: phần lớn lá số đều vậy, và khi ấy cát hung được quyết bởi độ sáng chính tinh cùng sự phân bố cát – sát tinh trong từng cung, chứ không nhờ một cách cục lớn.');
    } else {
      for (const cc of cachCuc) {
        tags.push({ label: cc.name + (cc.broken ? ' ⚠' : ''), type: cc.type });
      }
      paras.push(
        `Lá số hiện **${cachCuc.length} cách cục**. Cổ nhân dạy: một cách chỉ *thành* khi đủ đúng sao, đúng cung, đúng độ sáng và không bị sát tinh phá — nếu chỉ "gần đủ" thì phải luận hạ một bậc. Dưới đây là các cách nhận diện được trên lá số của bạn, kèm điều kiện phá cách nếu có.`
      );
    }

    sections.push({ key: 'cachcuc', icon: '⚜️', title: 'Cách Cục Chủ Đạo', paragraphs: paras, tags });
  }

  // ══ 3. TÍNH CÁCH & KHÍ CHẤT ══
  {
    const paras: string[] = [];
    const cat = catNames(menh);
    const sat = satNames(menh);

    paras.push(
      `Khí chất của bạn thành hình từ ${voChinhDieu ? `khí mượn ${listChinh(thienDi)}` : listChinh(menh)} tại cung Mệnh. ` +
      (cat.length ? `Có cát tinh ${joinVi(cat)} phù trợ — làm mềm và nâng đỡ cá tính, giúp bạn dễ được lòng người. ` : '') +
      (sat.length ? `Đồng thời có ${joinVi(sat)} — khiến bản tính thêm phần sắc bén, cứng cỏi, đôi khi nóng nảy hoặc dễ va chạm. ` : '') +
      (!cat.length && !sat.length ? 'Cung Mệnh khá thanh tịnh, ít sao phụ can thiệp nên cá tính thuần theo chính tinh. ' : '')
    );

    const kyStar = menh.stars.find(s => s.transformation === 'ky');
    if (kyStar) {
      paras.push(`${kyStar.name} Hóa Kỵ toạ Mệnh — đây là "chỗ dính mắc" của cả đời: bạn dễ mang tâm tư nặng lòng, hay chấp niệm vào một điều gì và khó dứt. Cổ nhân lấy sự nhẫn và biết buông đúng lúc làm thuốc giải, chứ không phải cố sức đè nén.`);
    }

    const tsMenh = menh.stars.find(s => s.kind === 'vong_truong_sinh');
    if (tsMenh) {
      const m = STAR_MEANINGS[tsMenh.id];
      paras.push(`Vòng Trường Sinh tại Mệnh là sao ${tsMenh.name}${m ? ` — chủ về ${m.essence}` : ''}, cho biết sinh khí bẩm sinh của bạn đang ở chặng nào của nhịp sinh trưởng.`);
    }

    paras.push(
      `Đối chiếu Mệnh (${scoreTag(menh)}) với Thiên Di (${scoreTag(thienDi)}) sẽ thấy bạn nên "thủ" hay nên "tiến": ` +
      (thienDi.score.score100 > menh.score.score100
        ? 'Thiên Di sáng hơn Mệnh — bạn thuộc mẫu càng ra ngoài càng rực rỡ, ly hương lập nghiệp thường tốt hơn ở mãi một chỗ.'
        : 'Mệnh vững hơn Thiên Di — bạn có nội lực tự thân tốt, không cần phiêu bạt xa mà nên chọn thế đứng vững rồi phát triển từ gốc.')
    );

    sections.push({ key: 'tinhcach', icon: '🧿', title: 'Tính Cách & Khí Chất', paragraphs: paras });
  }

  // ══ 4. TÀI BẠCH – QUAN LỘC ══
  {
    const paras: string[] = [];
    const qc = chinhStars(quanLoc);
    const career = (qc.length ? qc : effChinh).map(s => STAR_CAREER[s.id]).filter(Boolean);

    paras.push(
      `**Sự nghiệp** — cung Quan Lộc tại ${quanLoc.canName} ${quanLoc.branchName} với ${listChinh(quanLoc)}, đạt ${scoreTag(quanLoc)}. ` +
      `${qc.length ? 'Chính tinh nơi đây' : 'Cung vô chính diệu nên mượn khí bản Mệnh, hướng nghề'} cho thấy con đường công danh của bạn.`
    );
    if (career.length) {
      paras.push(`Ngành nghề hợp mệnh: ${Array.from(new Set(career)).join('; ')}. Đây là những lĩnh vực bạn dễ phát huy sở trường và thăng tiến nhất — chọn đúng dòng thì sức bỏ ra ít mà kết quả nhiều.`);
    }
    const qCat = catNames(quanLoc), qSat = satNames(quanLoc);
    if (qCat.length) paras.push(`Quan Lộc có ${joinVi(qCat)} phù trợ — công việc thường được quý nhân nâng đỡ, dễ gặp cơ hội đúng lúc.`);
    if (qSat.length) paras.push(`Lưu ý: Quan Lộc có ${joinVi(qSat)} — đường công danh đôi lúc trắc trở, cạnh tranh gắt hoặc phải làm lại từ đầu; cần kiên trì và giữ mình.`);

    paras.push(
      `**Tiền tài** — cung Tài Bạch tại ${taiBach.canName} ${taiBach.branchName} với ${listChinh(taiBach)}, đạt ${scoreTag(taiBach)}. Cung này cho biết bạn kiếm tiền bằng cách nào và giữ được bao nhiêu.`
    );
    const hasLoc = taiBach.stars.some(s => s.id === 'LocTon' || s.transformation === 'loc');
    if (hasLoc) paras.push('Tài Bạch có Lộc (Lộc Tồn hoặc Hoá Lộc) toạ thủ — phúc về tiền bạc rõ rệt: nguồn thu ổn định, biết tích luỹ, ít khi túng thiếu.');
    const tSat = satNames(taiBach);
    if (tSat.length) paras.push(`Có ${joinVi(tSat)} tại Tài Bạch — tiền dễ hao hụt hoặc đến rồi đi; nên lập kế hoạch chi tiêu rõ ràng và tránh đầu tư mạo hiểm quá tay.`);
    if (taiBach.stars.some(s => s.transformation === 'ky')) paras.push('Tài Bạch gặp Hoá Kỵ — đề phòng tranh chấp tiền nong, cho vay mượn hay bảo lãnh; minh bạch sổ sách chính là cách giữ của.');

    paras.push(
      taiBach.score.score100 > quanLoc.score.score100
        ? 'So sánh hai cung: Tài Bạch sáng hơn Quan Lộc — bạn thuộc mẫu "tiền sinh tiền", giỏi kinh doanh đầu tư hơn là leo thang chức vụ.'
        : 'So sánh hai cung: Quan Lộc sáng hơn Tài Bạch — bạn kiếm tiền chủ yếu từ sự nghiệp và địa vị; xây được danh thì tài tự tới.'
    );

    sections.push({ key: 'taiquan', icon: '💼', title: 'Sự Nghiệp & Tài Lộc', paragraphs: paras });
  }

  // ══ 5. ĐIỀN TRẠCH – PHÚC ĐỨC ══
  {
    const paras: string[] = [];
    paras.push(
      `**Điền Trạch** (nhà đất, tài sản cố định) tại ${dienTrach.branchName} với ${listChinh(dienTrach)} — ${scoreTag(dienTrach)}. ` +
      (dienTrach.stars.some(s => s.id === 'ThaiAm')
        ? 'Thái Âm là chủ tinh của điền sản, đóng đúng cung này là "sao về đúng nhà" — rất tốt cho bất động sản.'
        : dienTrach.score.score100 >= 60
          ? 'Cung tương đối vững — bạn có duyên với nhà cửa đất đai, hậu vận thường có cơ ngơi ổn định.'
          : 'Cung không mạnh — nhà đất có thể phải dời đổi vài lần mới an, nên cẩn trọng giấy tờ và tránh mua bán gấp.')
    );
    paras.push(
      `**Phúc Đức** (phúc phần, đời sống tinh thần, âm đức dòng họ) tại ${phucDuc.branchName} với ${listChinh(phucDuc)} — ${scoreTag(phucDuc)}. ` +
      `Người xưa coi Phúc Đức là "hậu phương" của cả lá số: cung này dày thì dù Mệnh gặp sóng gió vẫn có chỗ dựa vô hình để bật lại. ` +
      (phucDuc.score.score100 >= 60
        ? 'Phúc phần của bạn khá dày — nên tiếp tục bồi đắp bằng việc thiện và giữ tâm an, đó là cách "gửi vốn" cho hậu vận.'
        : 'Phúc phần cần bồi thêm — hãy chú ý tu tâm, hiếu kính và làm việc lành; trong tử vi, phúc là phần duy nhất con người chủ động cải được.')
    );
    sections.push({ key: 'dienphuc', icon: '🏡', title: 'Điền Trạch & Phúc Đức', paragraphs: paras });
  }

  // ══ 6. PHU THÊ – TỬ TỨC ══
  {
    const paras: string[] = [];
    const daoAll = Array.from(new Set([
      ...menh.stars.filter(s => s.kind === 'dao_hoa').map(s => s.name),
      ...phuThe.stars.filter(s => s.kind === 'dao_hoa').map(s => s.name),
    ]));

    paras.push(
      `**Hôn nhân** — cung Phu Thê tại ${phuThe.canName} ${phuThe.branchName} với ${listChinh(phuThe)}, đạt ${scoreTag(phuThe)}. Cung này vẽ nên chân dung người bạn đời và sắc thái đời sống lứa đôi của bạn.`
    );
    if (daoAll.length) {
      paras.push(`Có đào hoa tinh ${joinVi(daoAll)} — đường tình cảm nồng nàn, giàu sức hút, dễ được người khác phái để ý. Mặt khác, duyên nhiều thì cũng cần tỉnh táo và chung thuỷ mới giữ được phúc.`);
    }
    const pSat = satNames(phuThe);
    if (pSat.length) {
      paras.push(`Phu Thê có ${joinVi(pSat)} — tình duyên đôi khi sóng gió, hợp muộn hoặc cần vun đắp nhiều hơn người. Kinh nghiệm cổ nhân: với lá số này, kết hôn muộn một chút thường bền hơn kết hôn sớm.`);
    }
    if (phuThe.stars.some(s => s.transformation === 'ky')) {
      paras.push('Hoá Kỵ nhập Phu Thê — đây là chỗ dễ vướng mắc nhất trong đời sống tình cảm: hay nghĩ nhiều, khó nói hết lòng mình. Học cách trò chuyện thẳng thắn sẽ hoá giải được phần lớn.');
    }
    paras.push(
      `**Con cái** — cung Tử Tức tại ${tuTuc.branchName} với ${listChinh(tuTuc)}, ${tuTuc.score.label.toLowerCase()} (${tuTuc.score.score100}/100). ` +
      (tuTuc.score.score100 >= 60
        ? 'Cung sáng — duyên con cái thuận, con thường ngoan và có chí; đây cũng là cung của sức sáng tạo nên bạn dễ có "đứa con tinh thần" như tác phẩm hay sự nghiệp riêng.'
        : 'Cung không mạnh — duyên con có thể muộn hoặc phải chăm lo nhiều hơn; đừng vội lo, cung này còn chỉ sức sáng tạo, hãy dồn nó vào việc mình tâm huyết.')
    );
    sections.push({ key: 'phuthe', icon: '💞', title: 'Hôn Nhân & Con Cái', paragraphs: paras });
  }

  // ══ 7. PHỤ MẪU – HUYNH ĐỆ – NÔ BỘC ══
  {
    const paras: string[] = [];
    paras.push(
      `**Phụ Mẫu** tại ${phuMau.branchName} (${listChinh(phuMau)}) — ${scoreTag(phuMau)}. Cung này nói về cha mẹ, bề trên và cả cấp trên nơi làm việc. ` +
      (phuMau.score.score100 >= 60
        ? 'Cung sáng — duyên với cha mẹ và bề trên tốt, thường được người lớn tuổi che chở, đề bạt.'
        : 'Cung hơi mờ — quan hệ với cha mẹ hoặc cấp trên đôi khi có khoảng cách, cần chủ động gần gũi và giữ chữ kính.')
    );
    const daoPhuMau = phuMau.stars.filter(s => s.kind === 'dao_hoa').map(s => s.name);
    if (daoPhuMau.length) {
      paras.push(`Đáng chú ý: có ${joinVi(daoPhuMau)} đóng tại Phụ Mẫu — hàm ý bạn dễ được bề trên hoặc cấp trên khác phái quý mến, nâng đỡ nhờ "duyên"; nhân duyên lứa đôi cũng có thể đến qua giới thiệu của cha mẹ, người lớn trong nhà.`);
    }
    paras.push(
      `**Huynh Đệ** tại ${huynhDe.branchName} (${listChinh(huynhDe)}) — ${scoreTag(huynhDe)}: cho biết duyên với anh chị em và bạn bè thân thiết. ` +
      `**Nô Bộc** tại ${noBoc.branchName} (${listChinh(noBoc)}) — ${scoreTag(noBoc)}: cho biết bạn được cộng sự, người dưới quyền hậu thuẫn đến đâu. ` +
      (noBoc.score.score100 >= 60
        ? 'Nô Bộc sáng là phúc lớn cho người làm việc lớn — bạn dễ tìm được người cùng chí hướng.'
        : 'Nô Bộc chưa mạnh — nên chọn bạn mà kết giao, tránh cả nể trong chuyện tiền bạc và trách nhiệm.')
    );
    sections.push({ key: 'lucthan', icon: '👪', title: 'Cha Mẹ · Anh Em · Bạn Bè', paragraphs: paras });
  }

  // ══ 8. TẬT ÁCH – THIÊN DI ══
  {
    const paras: string[] = [];
    const tSat = satNames(tatAch);
    paras.push(
      `**Tật Ách** tại ${tatAch.branchName} với ${listChinh(tatAch)} — ${scoreTag(tatAch)}. Cung này chỉ tạng bệnh dễ mắc và những tai ách trong đời. ` +
      (tSat.length
        ? `Có ${joinVi(tSat)} — cần chú ý hơn tới sức khỏe, đặc biệt tránh làm việc quá sức và những nơi nguy hiểm.`
        : 'Không có sát tinh nặng — nền sức khỏe tương đối, chủ yếu cần giữ nhịp sinh hoạt điều độ.') +
      (tatAch.hasTriet ? ' Có Triệt án ngữ Tật Ách lại là điều hay: Triệt chặn bớt hung khí, giúp giải bệnh tật.' : '')
    );
    paras.push(
      `**Thiên Di** tại ${thienDi.branchName} với ${listChinh(thienDi)} — ${scoreTag(thienDi)}. Cung này là tấm gương đối diện Mệnh: phản chiếu cách xã hội nhìn bạn và những gì chờ bạn khi bước ra ngoài. ` +
      (voChinhDieu
        ? 'Vì Mệnh vô chính diệu nên Thiên Di đặc biệt quan trọng — chính khí ở đối cung mới là "cái tôi thật" bộc lộ; bạn thường rực rỡ hơn khi rời nơi chôn nhau cắt rốn.'
        : catNames(thienDi).length
          ? `Có ${joinVi(catNames(thienDi))} tại Thiên Di — ra ngoài thường gặp quý nhân, hợp đi xa lập nghiệp hoặc làm việc với người ở xa.`
          : 'Cung không nhiều sao phụ — việc ra ngoài của bạn thuận theo lực bản Mệnh, không có biến số lớn.')
    );
    sections.push({ key: 'tatdi', icon: '🩺', title: 'Sức Khỏe & Xuất Ngoại', paragraphs: paras });
  }

  // ══ 9. ĐẠI VẬN ══
  {
    const paras: string[] = [];
    const daihan = [...chart.palaces]
      .filter(p => p.majorPeriod.fromAge <= 85)
      .sort((a, b) => a.majorPeriod.fromAge - b.majorPeriod.fromAge);

    paras.push(
      `Đại hạn là những vận mười năm nối nhau, ${chart.isYang ? 'đi thuận' : 'đi nghịch'} qua 12 cung kể từ ${chart.cuc.number} tuổi. ` +
      `Mỗi vận, cung được chiếu tới sẽ "cầm lái" cuộc đời trong mười năm ấy — cách của cung đó hoà với cách bản Mệnh mới ra kết quả thật. ` +
      `Bạn hiện khoảng **${chart.currentAge} tuổi âm**.`
    );

    const current = daihan.find(p => chart.currentAge >= p.majorPeriod.fromAge && chart.currentAge <= p.majorPeriod.toAge);
    if (current) {
      paras.push(
        `**Đại hạn hiện tại (${current.majorPeriod.fromAge}–${current.majorPeriod.toAge} tuổi): cung ${current.name}** — ${listChinh(current)}, ${scoreTag(current)}. ` +
        `Mười năm này trọng tâm cuộc đời bạn dồn vào ${current.name.toLowerCase()}; những gì luận ở cung này sẽ hiện rõ nhất trong giai đoạn hiện tại.`
      );
    }

    paras.push(
      daihan.map(p => {
        const tag = p.score.score100 >= 65 ? ' ✦ vận thịnh' : p.score.score100 < 40 ? ' ✷ nên thủ' : '';
        const now = current && p.name === current.name ? ' ← đang ở đây' : '';
        return `• ${p.majorPeriod.fromAge}–${p.majorPeriod.toAge} tuổi — cung ${p.name} (${listChinh(p)}): ${p.score.label}${tag}${now}`;
      }).join('\n')
    );

    const best = daihan.reduce((a, b) => (b.score.score100 > a.score.score100 ? b : a), daihan[0]);
    const worst = daihan.reduce((a, b) => (b.score.score100 < a.score.score100 ? b : a), daihan[0]);
    if (best && worst && best !== worst) {
      paras.push(
        `Rực rỡ nhất là vận **${best.majorPeriod.fromAge}–${best.majorPeriod.toAge} tuổi** (cung ${best.name}) — nên dồn sức bứt phá giai đoạn này. ` +
        `Cần giữ mình hơn cả là vận **${worst.majorPeriod.fromAge}–${worst.majorPeriod.toAge} tuổi** (cung ${worst.name}) — hãy thủ thế, tránh phiêu lưu lớn, coi đó là quãng tích lực chờ thời.`
      );
    }
    sections.push({ key: 'daihan', icon: '⏳', title: 'Đại Vận — Dòng Thời Gian 10 Năm', paragraphs: paras });
  }

  // ══ 10. TIỂU HẠN NĂM NAY ══
  {
    const paras: string[] = [];
    const minorPalace = chart.palaces.find(p => p.minorAges.includes(chart.currentAge));
    if (minorPalace) {
      paras.push(
        `Tiểu hạn năm nay (tuổi ${chart.currentAge}) rơi vào **cung ${minorPalace.name}** tại ${minorPalace.branchName} — ${listChinh(minorPalace)}, ${scoreTag(minorPalace)}. ` +
        `Tiểu hạn là "lá" trên cành đại vận: nó quyết sắc thái của riêng một năm, nên đọc cùng đại hạn đang chạy mới đủ.`
      );
      const mCat = catNames(minorPalace), mSat = satNames(minorPalace);
      if (mCat.length) paras.push(`Năm nay cung tiểu hạn có ${joinVi(mCat)} — thuận cho việc mở mang, xin việc, cưới hỏi, ký kết.`);
      if (mSat.length) paras.push(`Cung tiểu hạn có ${joinVi(mSat)} — năm nay nên cẩn trọng chuyện giấy tờ, sức khỏe và tiền bạc; tránh quyết định gấp.`);
      const notable = minorPalace.stars.filter(s => s.kind === 'vong_thai_tue' && s.nature === 'hung').map(s => s.name);
      if (notable.length) paras.push(`Vòng Thái Tuế tại đây có ${joinVi(notable)} — đây là nhóm sao ứng mạnh vào lưu niên, càng nên giữ hoà khí và tránh tranh chấp.`);
      paras.push(
        `Các tuổi tiếp theo mà tiểu hạn quay lại cung này: ${minorPalace.minorAges.filter(a => a > chart.currentAge).slice(0, 3).join(', ')} — cứ 12 năm một lần.`
      );
    } else {
      paras.push('Không xác định được cung tiểu hạn cho tuổi hiện tại.');
    }
    sections.push({ key: 'tieuhan', icon: '📆', title: `Tiểu Hạn Năm Nay (tuổi ${chart.currentAge})`, paragraphs: paras });
  }

  // ══ 11. TỔNG KẾT ══
  {
    const paras: string[] = [];
    const ranked = [...chart.palaces].sort((a, b) => b.score.score100 - a.score.score100);
    const strong = ranked.slice(0, 2);
    const weak = ranked.slice(-2).reverse();

    paras.push(
      `Điểm sáng của lá số nằm ở cung **${strong[0].name}** (${strong[0].score.score100}đ) và **${strong[1].name}** (${strong[1].score.score100}đ) — đây là những lĩnh vực bạn được ưu ái, nên lấy làm bệ phóng cho cả cuộc đời thay vì dàn sức đều khắp.`
    );
    paras.push(
      `Cần lưu tâm hơn cả là cung **${weak[0].name}** (${weak[0].score.score100}đ) và **${weak[1].name}** (${weak[1].score.score100}đ) — không phải điềm gở, mà là chỗ đời gửi bài học; ý thức sớm thì hoá giải được phần lớn.`
    );

    const tuanTriet = chart.palaces.filter(p => p.hasTuan || p.hasTriet).map(p => p.name);
    if (tuanTriet.length) {
      paras.push(`Tuần/Triệt án ngữ các cung ${joinVi(tuanTriet)} — ở những lĩnh vực này mọi việc (cả tốt lẫn xấu) đều đến chậm và giảm cường độ; cứ bền chí, "chậm mà chắc" là đúng đạo của lá số bạn.`);
    }

    const hoaKyPalace = chart.palaces.find(p => p.stars.some(s => s.transformation === 'ky'));
    if (hoaKyPalace) {
      paras.push(`Hoá Kỵ của bạn nhập cung ${hoaKyPalace.name} — theo lối luận Tứ Hoá, đó là "tử huyệt" cần canh giữ suốt đời; ngược lại cũng chính là nơi bạn trưởng thành sâu nhất nếu dám đối diện.`);
    }

    paras.push(
      'Cuối cùng, xin nhắc điều người xưa vẫn dặn: lá số chỉ vẽ ra **xu hướng** của trời đất, còn nét bút sau cùng nằm trong tay bạn. ' +
      '"Đức năng thắng số" — biết mình mạnh đâu, yếu đâu, thuận lúc nào để mà tiến hay thủ, đó mới là ý nghĩa thật của việc xem số.'
    );
    sections.push({ key: 'tongket', icon: '🧭', title: 'Tổng Kết & Lời Nhắn', paragraphs: paras });
  }

  const menhLabel = voChinhDieu
    ? `Mệnh vô chính diệu tại ${menh.branchName}`
    : `Mệnh ${chinhStars(menh).map(s => s.name).join(' – ')} tại ${menh.branchName}`;
  const primaryStar = ['TuVi', 'ThienPhu', 'ThatSat', 'PhaQuan', 'ThamLang', 'ThaiDuong', 'CuMon', 'VuKhuc', 'ThienTuong', 'LiemTrinh', 'ThienCo', 'ThaiAm', 'ThienDong', 'ThienLuong']
    .find(id => effChinh.some(s => s.id === id));
  const axisName = primaryStar && AXIS_OF[primaryStar] ? AXIS_NAME[AXIS_OF[primaryStar]] : 'tổng hợp';

  return {
    headline: `${menhLabel} · ${chart.cuc.name}`,
    subhead: `${chart.banMenh.name} · ${chart.amDuongLabel} · Trục ${axisName} · Mệnh Chủ ${chart.menhChu} – Thân Chủ ${chart.thanChu}`,
    sections,
    cachCuc,
  };
}
