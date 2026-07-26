import { StarMeaning } from './starMeanings';

/**
 * Ý nghĩa 17 phụ tinh nền (Lục Cát, Lộc Tồn, Lục Sát, nhóm đào hoa).
 * Cùng khuôn với starMeanings.ts: `essence` là cụm danh từ ghép được sau "chủ về".
 */
export const BASE_STAR_MEANINGS: Record<string, StarMeaning> = {
  // ── Lục Cát ──
  TaPhu: {
    essence: 'quý nhân phò tá đắc lực, người trợ giúp âm thầm đứng phía sau nâng đỡ',
    note: 'Tả Phụ hợp Hữu Bật thành bộ đắc lực song toàn; hội Tử Vi mới nên cách Quân Thần Khánh Hội.',
  },
  HuuBat: {
    essence: 'sự hậu thuẫn bền bỉ, người sẵn lòng chống lưng và gánh việc cùng bạn',
    note: 'Hữu Bật đi cùng Tả Phụ thì trước sau đều có người đỡ; đứng lẻ thì lực nhẹ hơn một bậc.',
  },
  VanXuong: {
    essence: 'tài văn chương khoa bảng, học vấn chính quy và tư duy mạch lạc sáng rõ',
    note: 'Văn Xương hội Văn Khúc là cách thông minh đa tài, thi cử khoa giáp thuận lợi.',
  },
  VanKhuc: {
    essence: 'tài hoa nghệ thuật, khẩu tài lưu loát và cảm xúc tinh tế nhạy bén',
    note: 'Văn Khúc thiên về năng khiếu và cảm thụ, Văn Xương thiên về chữ nghĩa quy củ; gặp nhau càng quý.',
  },
  ThienKhoi: {
    essence: 'quý nhân bậc trên nâng đỡ công khai, cơ may đến từ người có địa vị',
    note: 'Thiên Khôi hợp Thiên Việt thành cách Tọa Quý Hướng Quý, cả đời không thiếu người đề bạt.',
  },
  ThienViet: {
    essence: 'quý nhân kín đáo giúp sức, cơ hội bất ngờ đến đúng lúc cần nhất',
    note: 'Thiên Việt giúp âm thầm và tinh tế, khác Thiên Khôi giúp lộ rõ trước mặt.',
  },
  LocTon: {
    essence: 'tài lộc bền vững, sự sung túc và khả năng giữ gìn của cải không thất thoát',
    note: 'Lộc Tồn gặp Hóa Lộc thành cách Song Lộc, gặp Thiên Mã thành Lộc Mã Giao Trì — đều là cát cách về tiền tài.',
  },

  // ── Lục Sát ──
  KinhDuong: {
    essence: 'khí sắc bén cương mãnh, sức sát phạt quyết liệt nhưng dễ gây thương tổn',
    note: 'Kình Dương cư Ngọ tại Mệnh thành cách Mã Đầu Đới Kiếm — chế được thì uy dũng, không chế được thì chuốc họa.',
  },
  DaLa: {
    essence: 'sự trì trệ dây dưa, những phiền toái ngấm ngầm kéo dài không dứt',
    note: 'Đà La ám mà bền, hại chậm nhưng lâu; Kình Dương hại nhanh và lộ rõ hơn.',
  },
  HoaTinh: {
    essence: 'tính nóng nảy bộc phát và những biến động đột ngột thấy rõ ngay',
    note: 'Hỏa Tinh gặp Tham Lang lại hóa cát thành cách Hỏa Tham, chủ hoạnh phát rất nhanh.',
  },
  LinhTinh: {
    essence: 'nỗi uất kết ngấm ngầm khó gọi tên và tai ương âm thầm khó lường',
    note: 'Linh Tinh gặp Tham Lang thành cách Linh Tham cũng chủ hoạnh phát; nhưng hội Xương – Đà – Vũ thì rất nên phòng.',
  },
  DiaKhong: {
    essence: 'sự trống rỗng hư hao, ý tưởng viển vông và mất mát đến không báo trước',
    note: 'Địa Không tuy phá tài nhưng lại hợp người tu hành, nghiên cứu và sáng tạo phá cách.',
  },
  DiaKiep: {
    essence: 'sự phá tán hao tổn, việc dễ đổ vỡ nửa chừng khi gần thành',
    note: 'Không – Kiếp giáp Mệnh là cách nặng nhất trong Lục Sát, sức phá ngang chính tinh.',
  },

  // ── Nhóm đào hoa ──
  DaoHoa: {
    essence: 'sức hút giới tính mạnh mẽ, duyên tình nồng nàn và sự lôi cuốn tức thì',
    note: 'Đào Hoa hội Hồng Loan – Thiên Hỷ thành bộ Tam Minh rất đẹp về nhan sắc và hỷ sự; gặp sát tinh thì dễ phong lưu quá độ.',
  },
  HongLoan: {
    essence: 'nhan sắc duyên dáng, chuyện hỷ sự cưới hỏi và tình cảm lãng mạn bền lâu',
    note: 'Hồng Loan là duyên "đến từ từ mà sâu", thiên về tinh thần, khác Đào Hoa nghiêng về hấp dẫn tức thời.',
  },
  ThienHy: {
    essence: 'tin vui hỷ sự, niềm vui con cái và không khí hân hoan trong gia đạo',
    note: 'Thiên Hỷ luôn xung chiếu Hồng Loan, hai sao cùng chủ hôn nhân và tin mừng.',
  },
  ThienDieu: {
    essence: 'nét phong lưu đa tình, khiếu hài hước có duyên nhưng dễ sa đà tình cảm',
    note: 'Thiên Diêu (Thiên Riêu) thông minh khéo nói nhưng cần giữ mình trước tửu sắc và tình duyên phức tạp.',
  },
};
