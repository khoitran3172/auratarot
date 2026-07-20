import { Palace, StarInstance, Brightness } from './types';
import { STAR_POLARITY, BRIGHTNESS_NAMES, TRANSFORMATION_NAMES } from './constants';

// Mảnh A — bản chất cốt lõi từng sao (ghép với lĩnh vực cung)
const STAR_ESSENCE: Record<string, string> = {
  // 14 chính tinh
  TuVi: 'khí chất tôn quý, tài lãnh đạo điều hành và uy tín được người khác nể trọng',
  ThienCo: 'trí tuệ mưu lược, khéo tính toán, linh hoạt ứng biến và ưa vận động',
  ThaiDuong: 'nguồn năng lượng dương cương, hào phóng, quang minh, thích cống hiến và toả sáng',
  VuKhuc: 'ý chí cương nghị, tài quản lý tài chính và tinh thần hành động quả quyết',
  ThienDong: 'sự an nhiên, phúc hậu, tâm hồn lạc quan biết hưởng thụ và dễ được che chở',
  LiemTrinh: 'cá tính mạnh, nguyên tắc, đào hoa ngầm và khả năng bứt phá cải cách',
  ThienPhu: 'sự vững chãi, tài tích luỹ, bao dung điềm đạm và biết giữ của cải',
  ThaiAm: 'sự dịu dàng, tinh tế, giàu trực giác, óc thẩm mỹ và khả năng tích trữ âm thầm',
  ThamLang: 'sức hút mạnh mẽ, đa tài đa dục, tham vọng và khát khao trải nghiệm',
  CuMon: 'tài ăn nói hùng biện, óc phản biện sắc bén nhưng dễ vướng thị phi khẩu thiệt',
  ThienTuong: 'sự tận tụy, trung hậu, biết phò tá và ưa cái đẹp mực thước',
  ThienLuong: 'phẩm cách chính trực, giàu lòng nhân, khả năng che chở và hoá giải tai ương',
  ThatSat: 'khí phách uy dũng, quyết đoán, dám xông pha nhưng cô độc và khắc nghiệt',
  PhaQuan: 'tinh thần phá cách, dám đạp đổ làm lại, mạnh mẽ nhưng dễ hao tổn biến động',
  // Phụ cát
  TaPhu: 'quý nhân phò tá đắc lực, người trợ giúp âm thầm phía sau',
  HuuBat: 'sự hậu thuẫn, giúp đỡ từ người xung quanh một cách bền bỉ',
  VanXuong: 'tài văn chương, học vấn khoa bảng và tư duy mạch lạc',
  VanKhuc: 'tài hoa nghệ thuật, khẩu tài và cảm xúc tinh tế',
  ThienKhoi: 'quý nhân bậc trên nâng đỡ công khai, cơ may đến từ người có địa vị',
  ThienViet: 'quý nhân kín đáo giúp đỡ, cơ hội bất ngờ và sự khéo léo',
  LocTon: 'tài lộc, sự sung túc và khả năng giữ gìn của cải',
  // Phụ sát
  KinhDuong: 'sự sắc bén cương mãnh nhưng dễ gây tranh đấu, thương tổn',
  DaLa: 'sự trì trệ, dây dưa và những phiền toái ngấm ngầm kéo dài',
  HoaTinh: 'tính nóng nảy bộc phát và những biến động đột ngột',
  LinhTinh: 'nỗi uất kết ngấm ngầm và tai ương khó lường',
  DiaKhong: 'sự trống rỗng, hao hụt và những ý tưởng viển vông',
  DiaKiep: 'sự phá tán, hao tổn và trắc trở nửa chừng',
  // Đào hoa
  DaoHoa: 'sức hút giới tính mạnh mẽ, duyên tình nồng nàn và sự lôi cuốn tức thì',
  HongLoan: 'nhan sắc duyên dáng, chuyện hỷ sự cưới hỏi và tình cảm lãng mạn',
  ThienHy: 'tin vui, hỷ sự, niềm vui con cái và không khí hân hoan',
  ThienDieu: 'nét phong lưu đa tình, hài hước có duyên nhưng dễ sa đà tình cảm',
};

// Mảnh B — lĩnh vực đời sống của 12 cung
const PALACE_DOMAIN: Record<string, string> = {
  'Mệnh': 'bản thân, tính cách cốt lõi và vận mệnh tổng quát của bạn',
  'Phụ Mẫu': 'cha mẹ, bề trên, cấp trên và những người đỡ đầu bạn',
  'Phúc Đức': 'phúc phần, đời sống tinh thần, hưởng thụ và may mắn thừa hưởng',
  'Điền Trạch': 'nhà cửa, đất đai, tài sản cố định và gia trạch',
  'Quan Lộc': 'sự nghiệp, công danh và con đường thăng tiến',
  'Nô Bộc': 'bạn bè, cộng sự, người dưới quyền và các mối quan hệ xã hội',
  'Thiên Di': 'sự dịch chuyển, ra ngoài xã hội, cơ hội xa nhà và quý nhân bên ngoài',
  'Tật Ách': 'sức khỏe, bệnh tật và những tai ách trong đời',
  'Tài Bạch': 'tiền bạc, khả năng kiếm và giữ tiền',
  'Tử Tức': 'con cái, sức sáng tạo và thế hệ sau',
  'Phu Thê': 'hôn nhân, tình duyên và người bạn đời',
  'Huynh Đệ': 'anh chị em, bạn bè thân và những người đồng hành gần gũi',
};

// Rút gọn lĩnh vực để ghép câu phụ
const PALACE_SHORT: Record<string, string> = {
  'Mệnh': 'bản thân', 'Phụ Mẫu': 'cha mẹ & bề trên', 'Phúc Đức': 'phúc phần',
  'Điền Trạch': 'nhà cửa đất đai', 'Quan Lộc': 'sự nghiệp', 'Nô Bộc': 'bạn bè cộng sự',
  'Thiên Di': 'việc ra ngoài xã hội', 'Tật Ách': 'sức khỏe', 'Tài Bạch': 'tiền bạc',
  'Tử Tức': 'con cái', 'Phu Thê': 'hôn nhân tình duyên', 'Huynh Đệ': 'anh em bạn bè',
};

// Mảnh C — sắc thái theo độ sáng, phân theo sao tốt (N≥0) hay xấu (N<0)
function brightnessShade(brightness: Brightness, polarity: number): string {
  const good = polarity >= 0;
  switch (brightness) {
    case 'M':
    case 'V':
      return good
        ? 'phát huy rực rỡ, mang lại nhiều thuận lợi:'
        : 'tuy là hung tinh nhưng đắc thế nên được chế hoá thành uy lực, quyết đoán có ích:';
    case 'D':
      return good ? 'phát huy khá tốt:' : 'hung tính đã dịu bớt, còn giữ được nét cứng cỏi:';
    case 'B':
      return good ? 'ở mức trung hoà, không quá nổi bật:' : 'bắt đầu lộ nét bất ổn cần lưu tâm:';
    case 'H':
    default:
      return good
        ? 'bị hãm nên khó phát huy, hiệu lực suy giảm:'
        : 'bị hãm địa nên hung tính dễ bùng phát, cần đặc biệt thận trọng:';
  }
}

function starLabel(st: StarInstance): string {
  let label = st.name;
  if (st.kind === 'chinh_tinh' && st.brightness) {
    label += ` (${BRIGHTNESS_NAMES[st.brightness]})`;
  }
  if (st.transformation) {
    label += ` ${TRANSFORMATION_NAMES[st.transformation]}`;
  }
  return label;
}

/**
 * Sinh câu luận đoán cho một cung bằng cách ghép mảnh:
 * (bản chất sao) × (lĩnh vực cung) × (sắc thái độ sáng).
 */
export function buildInterpretations(palace: Palace): string[] {
  const out: string[] = [];
  const domain = PALACE_DOMAIN[palace.name];
  const short = PALACE_SHORT[palace.name];

  const chinh = palace.stars.filter(s => s.kind === 'chinh_tinh');
  const others = palace.stars.filter(s => s.kind !== 'chinh_tinh');

  // Câu chủ đạo từ chính tinh
  if (chinh.length > 0) {
    for (const st of chinh) {
      const N = STAR_POLARITY[st.id] ?? 0;
      const shade = brightnessShade(st.brightness as Brightness, N);
      const essence = STAR_ESSENCE[st.id] || 'năng lượng riêng của mình';
      out.push(`${starLabel(st)} tọa cung ${palace.name} — ${shade} ${essence}, in dấu rõ lên ${domain}.`);
    }
  } else {
    out.push(`Cung ${palace.name} vô chính diệu (không có chính tinh) — ${domain} chịu ảnh hưởng chủ yếu từ các sao phụ và cung xung chiếu; tính cách ở phương diện này mềm dẻo, dễ thích nghi theo hoàn cảnh.`);
  }

  // Câu phụ cho phụ tinh / đào hoa / Tứ Hóa đáng chú ý
  for (const st of others) {
    const essence = STAR_ESSENCE[st.id];
    if (!essence) continue;
    let extra = '';
    if (st.transformation === 'ky') extra = ' — song có Hóa Kỵ nên dễ vướng trắc trở, cần hoá giải bằng sự kiên nhẫn';
    else if (st.transformation) extra = ` — lại được ${TRANSFORMATION_NAMES[st.transformation]} nâng đỡ nên càng thêm tốt đẹp`;
    out.push(`Có ${starLabel(st)}: ${essence}, tác động tới ${short}${extra}.`);
  }

  // Tuần / Triệt
  if (palace.hasTriet && palace.hasTuan) {
    out.push('Cung bị cả Tuần lẫn Triệt án ngữ — mọi việc (cả tốt lẫn xấu) đều bị giảm cường độ và thường đến chậm, cần bền chí.');
  } else if (palace.hasTriet) {
    out.push('Cung có Triệt án ngữ — việc tốt đến chậm ở nửa đầu đời, nhưng cũng giúp chặn bớt điều xấu; hãy kiên trì.');
  } else if (palace.hasTuan) {
    out.push('Cung có Tuần án ngữ — năng lượng bị ngăn trở nhẹ và đều, thành quả thường tới muộn hơn mong đợi.');
  }

  // Kết bằng đánh giá tổng thể
  out.push(`Tổng thể cung ${palace.name}: ${palace.score.label} (${palace.score.score100}/100 — ${'⭐'.repeat(palace.score.stars5) || 'không sao'}).`);

  return out;
}
