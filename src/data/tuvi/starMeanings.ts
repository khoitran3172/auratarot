/**
 * Ý nghĩa các sao phụ trong Tử Vi Đẩu Số (Nam phái).
 *
 * `essence` là cụm danh từ, dùng để ghép vào câu:
 *   `Có sao ${name} chủ về ${essence}.`
 *   `Cung này mang ${essence}.`
 * Vì vậy: không viết hoa chữ đầu, không có dấu chấm cuối.
 *
 * `note` là một câu trọn vẹn: điều kiện đắc/hãm, cách cục liên quan, hoặc lời cảnh báo.
 */

export interface StarMeaning {
  essence: string;
  note?: string;
}

export const STAR_MEANINGS: Record<string, StarMeaning> = {
  // ===== VÒNG TRƯỜNG SINH (12 sao) =====
  TruongSinh: {
    essence:
      'sinh khí đang lên, khởi đầu hanh thông, sức sống dồi dào và phúc thọ bền lâu',
    note: 'Đóng ở cung nào thì cung ấy có gốc rễ vững, gặp nạn cũng dễ hồi sinh; đắc cách nhất khi cư Dần, Thân, Tị, Hợi.',
  },
  MocDuc: {
    essence:
      'bại địa của vòng sinh trưởng, tính phóng túng, đam mê sắc dục, dễ sa ngã giữa đường',
    note: 'Gặp Đào Hoa, Hồng Loan, Thiên Riêu thì tình duyên rối loạn, thân danh dễ hoen; cần chính tinh miếu vượng chế ngự.',
  },
  QuanDoi: {
    essence:
      'áo mũ vinh hiển, công danh thành đạt, được bậc trên nâng đỡ mà nên thân',
    note: 'Hội cùng Xương Khúc, Khôi Việt thì đường thi cử tiến thân rộng mở.',
  },
  LamQuan: {
    essence:
      'bước vào chốn quan trường, tiến thân có lộc vị, sự nghiệp vào thời chững chạc',
    note: 'Đi cùng Lộc Tồn hoặc Hóa Lộc thì quyền và lợi song toàn, danh vị vững vàng.',
  },
  DeVuong: {
    essence:
      'khí lực cực thịnh, sung mãn nhất trong vòng sinh trưởng, đỉnh cao của thế vận',
    note: 'Thịnh đến cùng thì tất chuyển suy, nên biết giữ mình lúc đang lên để tránh cực thịnh tất bại.',
  },
  Suy: {
    essence:
      'khí thế bắt đầu tiêu giảm, sức lực hụt hơi, việc làm quá nửa thì chững lại',
    note: 'Không phải sao đại hung, nhưng cung có Suy thì mọi mưu sự cần lui một bước để giữ, chớ tiến để tranh.',
  },
  Benh: {
    essence: 'ốm đau dai dẳng, khí huyết trì trệ, thân thể và công việc đều đình đốn',
    note: 'Gặp Bệnh Phù, Thiên Hình, Tang Môn thì càng nên lưu tâm sức khỏe và tránh lao lực quá độ.',
  },
  Tu: {
    essence: 'tử khí bao trùm, sự việc đến chỗ kết thúc, đường đi bế tắc không thông',
    note: 'Hạn gặp Tử cần thủ tĩnh, không nên khai trương, khởi sự hay thay đổi lớn.',
  },
  Mo: {
    essence:
      'kho chứa thu tàng, tài vật chôn giấu, sự tích tụ lặng lẽ dưới bề mặt yên tĩnh',
    note: 'Mộ là "khố" nên đóng ở Tài, Điền thì hay tích trữ được của, song ở Phối hay Tử Tức lại thành ẩn ức khó tỏ.',
  },
  Tuyet: {
    essence: 'khí tuyệt tận, đường cùng không lối, mọi vận động dừng lại nơi giới hạn',
    note: 'Tuyệt xứ phùng sinh: hết cùng thì sinh trở lại, nên đây là lúc gột rửa cái cũ hơn là gắng gượng níu giữ.',
  },
  Thai: {
    essence:
      'mầm mống thai nghén, cơ duyên vừa kết tụ trong bóng tối, chưa hình mà đã có thế',
    note: 'Đóng ở Tử Tức thì liên quan tin con cái; đóng ở cung khác chỉ dự tính đang ấp ủ, chớ nóng lòng thúc ép.',
  },
  Duong: {
    essence:
      'sự nuôi dưỡng hồi phục, tích khí chờ thời, gốc rễ được bồi đắp trước khi phát',
    note: 'Cung có Dưỡng thì nên tu dưỡng, học nghề, dưỡng sức; phát muộn mà bền.',
  },

  // ===== VÒNG THÁI TUẾ (12 sao) =====
  ThaiTue: {
    essence:
      'chủ tể của một năm, khẩu tài tranh biện sắc sảo, khí thế áp người nhưng dễ vướng thị phi khẩu thiệt',
    note: 'Đắc cách thì thành người nói có kẻ nghe, hãm địa hoặc gặp sát tinh thì miệng lưỡi gây oán, kiện tụng liên miên.',
  },
  ThieuDuong: {
    essence:
      'dương khí mới lên, đường đi hanh thông sáng sủa, việc gì cũng dễ tỏ tường',
    note: 'Là sao lành trong vòng Thái Tuế, có sức làm dịu bớt cái u ám của Tang Môn, Điếu Khách kề bên.',
  },
  TangMon: {
    essence: 'tang chế buồn phiền, tiếng khóc trong nhà, nỗi mất mát và chia ly',
    note: 'Hạn gặp Tang Môn hội Thiên Khốc, Bạch Hổ thì phải lưu tâm tin buồn của người thân lớn tuổi.',
  },
  ThieuAm: {
    essence:
      'âm phúc thầm lặng, quý nhân ngầm phù trợ, cái may đến từ chỗ không ngờ',
    note: 'Ơn giúp thường đến trong âm thầm, không rực rỡ bề ngoài nhưng đủ để giải nguy.',
  },
  QuanPhu: {
    essence:
      'kiện tụng quan phi, giấy tờ vướng mắc, tranh chấp phải đưa ra chốn công đường',
    note: 'Gặp Thiên Hình, Bạch Hổ, Kình Đà thì càng nặng; cẩn thận khế ước, chữ ký và lời hứa.',
  },
  TuPhu: {
    essence: 'tang tóc u ám, hao tổn ngấm ngầm, khí sắc buồn bã đè trên việc nhà',
    note: 'Tử Phù hội Tang Môn, Điếu Khách là bộ tang khốc, hạn ấy nên tránh việc hỷ và giữ gìn người già trong gia đạo.',
  },
  TuePha: {
    essence: 'khí phá hoại xung khắc, đổ vỡ giữa dòng, việc đã thành lại tan',
    note: 'Chủ sự bất hòa và phá tán, gặp Đại Hao, Địa Không thì tài sản và tình nghĩa đều dễ sứt mẻ.',
  },
  LongDuc: {
    essence: 'phúc đức che chở, khả năng giải trừ hung hiểm, cái lành hóa giải cái dữ',
    note: 'Là một trong những sao giải cứu của vòng Thái Tuế, đóng cùng hung tinh thì bớt được phần nguy.',
  },
  BachHo: {
    essence:
      'tang thương huyết quang, tai nạn thương tích, khí sát mãnh liệt đến bất chợt',
    note: 'Vào võ cách hoặc hội cùng chính tinh miếu vượng thì chuyển thành uy dũng quyết đoán, nhưng vẫn phải phòng thương tích và dao kiếm.',
  },
  PhucDuc: {
    essence: 'phúc lộc an lành, sự hưởng thụ ung dung, đời sống đủ mà không phải giành',
    note: 'Đóng ở Phúc Đức hay Điền Trạch thì gia đạo yên vui, hậu vận thư thái.',
  },
  DieuKhach: {
    essence:
      'tang điếu từ phương xa, tin buồn nơi khách địa, thị phi theo người ngoài mà đến',
    note: 'Hội Tang Môn thành bộ tang khốc; hạn ấy dễ có việc phải đi xa vì chuyện buồn của người khác.',
  },
  TrucPhu: {
    essence: 'thị phi dây dưa, quan sự lằng nhằng, rắc rối bám riết không dứt',
    note: 'Không hung dữ như Quan Phù nhưng dai dẳng, gặp Phi Liêm thì tiếng xấu lan xa.',
  },

  // ===== VÒNG BÁC SĨ (12 sao) =====
  BacSi: {
    essence: 'trí thông minh học rộng, đường khoa bảng thuận lợi, tài biện luận có sách',
    note: 'Hội Văn Xương, Văn Khúc, Thái Phụ, Phong Cáo thì học vấn và bằng cấp hiển đạt.',
  },
  LucSi: {
    essence:
      'sức mạnh thể lực, uy lực trong tay, sự vất vả phải lấy thân mà gánh',
    note: 'Chủ lao lực hơn lao tâm; đắc cách thì thành người có sức đảm đương việc lớn.',
  },
  ThanhLong: {
    essence: 'hỷ sự tài lộc, tin vui bất ngờ, dòng nước lành chảy tới cửa',
    note: 'Đi cùng Lộc Tồn, Hóa Lộc hay Thiên Mã thì tin vui đi liền với tiền tài.',
  },
  TieuHao: {
    essence:
      'sự hao tán lặt vặt, tiêu pha vụn vặt không tên, tiền rơi từng chút không rõ nguyên do',
    note: 'Nhỏ nhưng đều đặn, gặp Đại Hao trong cùng vận hạn thì túi tiền khó giữ.',
  },
  TuongQuan: {
    essence:
      'uy dũng cương nghị, quyền hành trong tay, khí phách của người cầm quân',
    note: 'Hội Tử Vi, Thất Sát, Phá Quân miếu vượng thì hiển đạt về võ nghiệp hoặc nghề chỉ huy.',
  },
  TauThu: {
    essence:
      'văn thư giấy tờ, tài ăn nói trình bày, bằng cấp và những việc phải tấu trình',
    note: 'Lợi cho nghề dùng lời và chữ nghĩa; gặp Xương Khúc thì văn tài càng sáng.',
  },
  PhiLiem: {
    essence: 'thị phi dèm pha, tai tiếng bay xa, lời gièm sau lưng làm hỏng danh',
    note: 'Kề Phục Binh hay Trực Phù thì họa từ miệng người, nên kín tiếng và tránh khoe khoang.',
  },
  HyThan: {
    essence: 'niềm vui hỷ khánh, may mắn đến đúng lúc, việc mừng trong nhà',
    note: 'Hội Thanh Long, Hồng Loan thì chủ hôn nhân, sinh nở hoặc tin mừng về gia đạo.',
  },
  BenhPhu: {
    essence: 'bệnh tật vặt vãnh, mỏi mệt kéo dài, cái đau không nặng mà dai dẳng',
    note: 'Gặp Bệnh của vòng Trường Sinh hay Thiên Hình thì nên chú ý điều dưỡng, khám xét kịp thời.',
  },
  DaiHao: {
    essence:
      'hao tán lớn, phá tài thất thoát, của cải ra đi từng khoản đáng kể',
    note: 'Hội Tuế Phá, Địa Không, Địa Kiếp thì phá sản, kiện tụng mất tiền; tuyệt đối tránh đầu tư mạo hiểm trong hạn.',
  },
  PhucBinh: {
    essence:
      'sự ám hại phục kích, tiểu nhân giấu mặt, mũi dao đâm từ chỗ tin cậy',
    note: 'Cẩn thận người thân cận và cộng sự; gặp Phi Liêm thì trước bị hại sau bị vu.',
  },
  QuanPhuBS: {
    essence:
      'quan tụng giấy tờ, việc phải ra trước phép quan, tranh chấp cần người phân xử',
    note: 'Đây là Quan Phủ của vòng Bác Sĩ, khác với Quan Phù ở vòng Thái Tuế; hai sao cùng hiện thì kiện tụng khó dứt.',
  },

  // ===== SAO LẺ (17 sao) =====
  ThienMa: {
    essence:
      'sự dịch chuyển thay đổi, đường xuất ngoại, tăng tài tiến lộc nhờ động mà thành',
    note: 'Gặp Lộc Tồn hoặc Hóa Lộc thành cách Lộc Mã Giao Trì, tài lộc đến từ phương xa rất tốt; gặp Không Kiếp lại thành bôn ba vô ích.',
  },
  CoThan: {
    essence: 'khí cô đơn lẻ bóng, khắc hại lục thân, sự xa cách với ruột thịt',
    note: 'Kỵ với nam mệnh hơn nữ mệnh; đóng ở Phụ Mẫu hay Phối thì tình thân dễ nhạt, sớm phải tự lập.',
  },
  QuaTu: {
    essence:
      'phận cô quả lẻ loi, khắc phối ngẫu, duyên vợ chồng khó trọn vẹn dài lâu',
    note: 'Kỵ với nữ mệnh hơn nam mệnh; hội Cô Thần thì cô quả song hành, hôn nhân cần muộn mới yên.',
  },
  ThienKhoc: {
    essence: 'tiếng khóc bi ai, nỗi mất mát trong lòng, sự thương cảm thấm vào tính khí',
    note: 'Hội Thiên Hư thành bộ Khốc Hư, đóng Tí Ngọ lại hóa thành chí khí bền và tài hùng biện thấm thía.',
  },
  ThienHu: {
    essence: 'sự hư hao trống rỗng, lo âu không tên, cái có mà như không',
    note: 'Đi cùng Thiên Khốc, Đại Hao thì tài vật và tinh thần đều dễ suy kiệt; nên tránh vay mượn và mộng hão.',
  },
  ThienHinh: {
    essence:
      'khí hình thương cô khắc, chuyện tù tội kiện tụng, dao mổ giải phẫu và luật lệ nghiêm minh',
    note: 'Đắc địa ở Dần, Thân, Mão, Dậu thì chuyển thành uy quyền pháp luật, giỏi y thuật hoặc nghề dùng dao; hãm địa thì tai họa hình thương.',
  },
  AnQuang: {
    essence:
      'ân sủng từ bậc trên, đường khoa giáp quý hiển, sức cứu giải hung tinh của một quý tinh bậc nhất',
    note: 'Hội Thiên Quý thành bộ Ân Quang Thiên Quý, gặp Xương Khúc thì công danh hiển đạt và giải được nhiều hung hiểm.',
  },
  ThienQuy: {
    essence: 'sự quý hiển được trọng vọng, danh giá trong mắt người, khả năng giải hung',
    note: 'Cùng Ân Quang là cặp quý tinh cứu giải, đóng ở Mệnh hay Quan thì được người trên tin dùng.',
  },
  TamThai: {
    essence: 'địa vị chức tước, bệ đỡ cho danh vọng, thế đứng được người công nhận',
    note: 'Phải hội Bát Toạ mới đủ bộ Tam Thai Bát Toạ, khi ấy danh vị mới thực sự vững.',
  },
  BatToa: {
    essence: 'địa vị chức tước, chỗ ngồi trong hàng có thứ bậc',
    note: 'Đứng một mình ít giá trị, phải đi cùng Tam Thai hoặc các quý tinh khác mới thành danh phận.',
  },
  LongTri: {
    essence:
      'đường khoa giáp hanh thông, cốt cách thanh cao, cái may đến với người có tài',
    note: 'Hội Phượng Các thành bộ Long Phượng, chủ thi cử đỗ đạt, dung mạo và gia thế đều đẹp.',
  },
  PhuongCac: {
    essence:
      'văn tài khéo léo, dung mạo tươi sáng, nhà cửa và nếp sống có phần đẹp đẽ',
    note: 'Đi cùng Long Trì thì tài hoa được dùng đúng chỗ; đơn thủ thì chỉ nghiêng về vẻ ngoài và khiếu thẩm mỹ.',
  },
  ThaiPhu: {
    essence:
      'bằng sắc chức tước, vai phụ tá đắc lực, danh vọng nhờ đường học hành mà nên',
    note: 'Hội Phong Cáo thành bộ Thai Phụ Phong Cáo, gặp Xương Khúc thì bằng cấp và chức vị đều toại.',
  },
  PhongCao: {
    essence: 'bằng sắc chức tước, danh vọng do học hành và giấy tờ chứng nhận',
    note: 'Cùng Thai Phụ mới đủ bộ, thiếu một thì công danh chỉ đến nửa đường.',
  },
  ThienQuan: {
    essence:
      'quý nhân là bậc quan chức, sự che chở từ người có vị thế, năng lực giải hung',
    note: 'Hội Thiên Phúc thì phúc và quyền cùng đến, giải được nhiều hung hiểm trên đường công danh.',
  },
  ThienPhuc: {
    essence: 'phúc thọ dày dặn, sức giải nạn tăng thọ, sự bình an trong cơn biến động',
    note: 'Là sao giải cứu quan trọng, đóng cùng sát tinh thì hung khí giảm, người có bệnh cũng dễ qua.',
  },
  DauQuan: {
    essence:
      'tính nghiêm khắc kỷ luật, khí lạnh của người cầm luật, sự cô độc trong cách sống',
    note: 'Đắc cách thì thành người chấp pháp công minh, hãm thì khắt khe cực đoan nên ít bạn và hay tự làm khổ mình.',
  },
};
