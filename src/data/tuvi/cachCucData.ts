// Cách cục Tử Vi Đẩu Số — 18 cát cách, 7 hung cách
// Cách cục là "thế cờ" của lá số: sao tốt tụ lại thành cách thì phúc dày,
// nhưng cách nào cũng có điều kiện thành và điều kiện phá. Luận cách cục
// phải xét cả hai mặt mới gọi là có nghề.

export interface CachCucInfo {
  name: string;              // tên cách, vd "Quân Thần Khánh Hội"
  type: 'cat' | 'hung';      // cát cách hay hung cách
  condition: string;         // 1 câu mô tả điều kiện thành cách, viết cho người thường đọc hiểu
  meaning: string;           // 3-5 câu luận sâu: ý nghĩa, biểu hiện đời thực, điều kiện phá cách nếu có
  advice: string;            // 1-2 câu khuyên hành động cụ thể
}

export const CACH_CUC_DATA: Record<string, CachCucInfo> = {
  // ============================ CÁT CÁCH ============================

  quanThanKhanhHoi: {
    name: 'Quân Thần Khánh Hội',
    type: 'cat',
    condition:
      'Tử Vi thủ Mệnh ở vị trí đắc địa (miếu, vượng hoặc đắc), lại có cả Tả Phụ và Hữu Bật hội chiếu về.',
    meaning:
      'Cổ nhân gọi đây là cảnh "vua sáng tôi hiền cùng hội một triều" — đế tinh ngồi giữa, hai tay chân trung thành đứng hai bên, thế cục vững như đỉnh ba chân. Người có cách này thường tự nhiên sinh ra uy tín: nói ra có người nghe, làm việc có người gánh giúp, khó khăn thì tự khắc có người tìm đến đỡ đần, nên phú quý thường bền chứ không chỉ lóe sáng một thời. Biểu hiện đời thực là con đường quản trị, lãnh đạo, làm chủ hoặc đứng đầu một tập thể — dù ở doanh nghiệp, cơ quan hay chỉ là một nhóm nhỏ, họ vẫn hay được đẩy lên vị trí trung tâm. Tuy nhiên cách này cũng nuôi cái tật quen được phò tá nên thiếu kiên nhẫn với việc tiểu tiết, dễ sinh kiêu và xem nhẹ người dưới. Phá cách khi vắng bóng Tả Hữu mà lại gặp Địa Không – Địa Kiếp xâm phạm: đế tinh hóa thành "vua trơ trọi giữa điện trống", khí độ vẫn lớn nhưng hữu danh vô thực, danh cao mà thực lực và tay chân đều mỏng.',
    advice:
      'Hãy chủ động gây dựng và giữ gìn đội ngũ thân tín — cách này phát nhờ người, không phát nhờ một mình. Mỗi khi thấy mình phải tự tay làm hết mọi thứ, đó là dấu hiệu cách đang bị phá, cần lập tức tìm người cùng gánh.',
  },

  tuPhuVuTuong: {
    name: 'Tử Phủ Vũ Tướng',
    type: 'cat',
    condition:
      'Bốn sao Tử Vi, Thiên Phủ, Vũ Khúc, Thiên Tướng cùng có mặt trong tam hợp Mệnh – Tài – Quan.',
    meaning:
      'Đây là bộ tứ trụ cột của Đẩu Số: Tử Vi là đế vương chủ về địa vị, Thiên Phủ là kho tàng chủ về tích luỹ, Vũ Khúc là tài tinh chủ về dòng tiền, Thiên Tướng là ấn tín chủ về sự tận tụy và mực thước. Bốn khí ấy tụ lại thì phúc lộc song toàn — có chỗ đứng trong xã hội, đồng thời có của cải thật nằm trong tay, không phải hạng "áo gấm túi rỗng". Biểu hiện thường thấy là người điềm đạm, biết tính toán dài hơi, ưa những nghề có nền tảng vững như tài chính, quản lý, bất động sản, doanh nghiệp gia đình; tài sản đến chậm nhưng ở lại lâu. Mặt tối là quá thiên về giữ: dễ bảo thủ, ngại mạo hiểm, đôi khi bỏ mất cơ hội lớn vì tính toán quá kỹ, và cả đời có xu hướng bị công việc cùng trách nhiệm ràng buộc. Cách này giảm sức nếu các sao đều lạc hãm hoặc bị sát tinh, Hóa Kỵ chen vào — khi ấy vẫn có tài có địa vị nhưng phải đổi bằng lao tâm nặng và tranh chấp quyền lợi.',
    advice:
      'Chọn một lĩnh vực có tính tích luỹ lâu dài rồi đi đường dài trong đó, đừng nhảy việc nhảy ngành theo trào lưu. Mỗi vài năm nên cho phép mình một quyết định mạo hiểm có kiểm soát, để cái tính giữ của không hóa thành trì trệ.',
  },

  phuTuongTrieuVien: {
    name: 'Phủ Tướng Triều Viên',
    type: 'cat',
    condition:
      'Thiên Phủ và Thiên Tướng cùng chầu về cung Mệnh — thường một sao ở cung Tài Bạch, một sao ở cung Quan Lộc.',
    meaning:
      '"Triều viên" là chầu về sân điện: kho tàng và ấn tín đều hướng mặt về bản thân, nên cả tiền tài lẫn danh vị đều tìm đến chứ không phải chật vật đi tìm. Người có cách này thường được đánh giá là đáng tin — mặt mũi phúc hậu, cách nói cách làm chừng mực, nên hay được giao giữ tiền, giữ việc, giữ chức, và điều quý nhất là họ biết giữ của thật, tiền vào tay ít khi rơi ra vô nghĩa. Đời sống thường trôi theo kiểu tiến từng bậc, ít bùng nổ nhưng cũng ít khi rớt sâu; tuổi trung niên về sau càng ngày càng dày dặn. Mặt hạn là dễ an phận, thiếu khí xông pha, có phần chuộng hình thức và trọng lời khen của người ngoài, đôi khi vì giữ hòa khí mà nhân nhượng quá mức. Cách này bị giảm sắc khi Thiên Phủ gặp Không Kiếp (kho tàng bị đục lỗ) hoặc Thiên Tướng bị Hóa Kỵ, Kình Đà — khi ấy vẫn được người kính trọng nhưng tiền của hay bị người khác mượn, vay, dựa dẫm mà tiêu tán.',
    advice:
      'Tận dụng chữ tín của mình: hãy nhận những vai trò cần người đáng tin cậy đứng ra, đó là đất phát của bạn. Song phải học nói lời từ chối dứt khoát trong chuyện tiền bạc, kẻo cái phúc giữ của bị lòng nể nang làm hao.',
  },

  coNguyetDongLuong: {
    name: 'Cơ Nguyệt Đồng Lương',
    type: 'cat',
    condition:
      'Bốn sao Thiên Cơ, Thái Âm, Thiên Đồng, Thiên Lương cùng tụ về nhóm Mệnh – Tài – Quan.',
    meaning:
      'Phú xưa có câu "Cơ Nguyệt Đồng Lương tác lại nhân" — hợp làm người trong chốn công đường. Thiên Cơ cho mưu lược, Thái Âm cho sự tinh tế cẩn mật, Thiên Đồng cho tính hòa nhã dễ sống, Thiên Lương cho phẩm cách chính trực và khả năng hóa giải; bốn khí ấy hợp lại thành mẫu người tham mưu, chuyên viên, thầy giáo, công chức, người làm trong tổ chức lớn có quy củ. Đời họ thường ổn định, ít sóng gió lớn, được cấp trên tin dùng vì làm việc kỹ và ít gây họa; hưu trí về sau vẫn có chỗ dựa. Nhưng mặt trái nằm ngay trong cái ổn định ấy: thiếu quyết đoán, hay do dự cân nhắc đến khi cơ hội đi qua, quen đứng sau người khác nên khó tự mình mở cơ nghiệp, và tâm hay lo xa sinh ra bất an vô cớ. Cách này dễ suy khi Thiên Cơ hóa Kỵ hoặc Thái Âm lạc hãm — bấy giờ mưu nhiều mà thành ít, giỏi bàn mà chậm làm; ngược lại nếu có Hóa Quyền hay Lộc Tồn trợ thì cái nhu hòa được thêm gân cốt, làm nên sự nghiệp bền.',
    advice:
      'Chọn tổ chức có hệ thống rõ ràng để đứng, đó là môi trường bạn phát tốt nhất; đừng cố ép mình làm người khởi nghiệp đơn độc. Với mỗi việc quan trọng, hãy tự đặt một hạn chót để quyết, tránh để tật cân nhắc kéo dài thành bỏ mất thời cơ.',
  },

  satPhaTham: {
    name: 'Sát Phá Tham',
    type: 'cat',
    condition:
      'Ba sao Thất Sát, Phá Quân, Tham Lang cùng hội về nhóm tam hợp của cung Mệnh.',
    meaning:
      'Đây là cách "động" bậc nhất trong Đẩu Số: Thất Sát là khí uy dũng, Phá Quân là khí đạp đổ, Tham Lang là khí khát khao — hợp lại thành người sinh ra để phá cái cũ mà lập cái mới. Vận đời họ thường lên xuống theo từng đợt lớn, thăng trầm không phải là tai họa mà là bản chất của cách; kẻ hiểu mình thì mỗi lần đổ lại dựng lên cao hơn. Thành cách với cát tinh, Hóa Quyền, Lộc trợ thì có sức đột phá phi thường: dám làm việc người khác không dám, mở được đất mới, giành được vị trí bằng chính khí phách của mình. Nhưng nếu sao lạc hãm hoặc thêm Kình Đà Không Kiếp thì hóa thành bôn ba vất vả, nghề nghiệp thay đổi liên tục, tiền vào rồi ra, tình cảm nhiều dở dang, tính nóng dễ gây họa. Người có cách này cũng thường mang cái cô độc bên trong: bạn đông mà người hiểu thì ít, càng lên cao càng cảm thấy đơn thân.',
    advice:
      'Đừng chống lại sự biến động, hãy chọn nghề mà biến động là lợi thế — kinh doanh, dự án, khai phá thị trường, nghề cần bản lĩnh và tốc độ. Quan trọng nhất là lập sẵn phần dự trữ và giới hạn rủi ro trước mỗi lần xông ra, để lần đổ nào cũng còn vốn dựng lại.',
  },

  cuNhat: {
    name: 'Cự Nhật',
    type: 'cat',
    condition:
      'Thái Dương và Cự Môn đồng cung tại Dần hoặc Thân (đóng ở Dần thì khí sáng hơn, tốt hơn ở Thân).',
    meaning:
      'Cự Môn là cái miệng, Thái Dương là ánh sáng — miệng có ánh sáng soi vào thì lời nói thành sức mạnh, tiếng tăm lan xa hơn cả công việc thật đã làm. Người có cách này thường hùng biện, lý lẽ sắc, nói trước đám đông không sợ, nên hợp những nghề sống bằng lời: luật pháp, ngoại giao, giảng dạy, truyền thông, đàm phán, môi giới, chính trị. Ở Dần là lúc mặt trời mới lên, khí đang tiến nên danh đến sớm và bền; ở Thân là mặt trời đã ngả, danh vẫn có nhưng phải đợi trung vận và thường phải qua ít nhất một lần trắc trở mới đứng vững. Cái giá của cách này là thị phi: Cự Môn vốn chủ khẩu thiệt, nên càng nổi tiếng càng nhiều người bàn tán, dễ vướng tranh chấp bằng lời, kiện tụng, hoặc bị hiểu sai ý. Phá cách khi gặp Hóa Kỵ hay Kình Dương – Đà La cùng cung: lời nói khi ấy dễ hóa thành lưỡi dao tự cắt mình, mất người vì một câu, mất việc vì một lần thẳng quá.',
    advice:
      'Hãy đầu tư nghiêm túc vào năng lực nói và viết — đó là vốn liếng lớn nhất của cách này, dùng đúng thì một câu đổi được một cơ hội. Đồng thời tập giữ khẩu đức: chuyện chưa chắc thì đừng nói, chuyện của người thì đừng bình, đó là cách hóa giải thị phi hữu hiệu nhất.',
  },

  nhatNguyetTinhMinh: {
    name: 'Nhật Nguyệt Tịnh Minh',
    type: 'cat',
    condition:
      'Thái Dương và Thái Âm đều ở vị trí miếu vượng và cùng chiếu về cung Mệnh.',
    meaning:
      'Hai vầng nhật nguyệt cùng tỏa sáng về một chỗ — dương khí cho sự cương quyết, hào sảng, dám cống hiến; âm khí cho sự tinh tế, trực giác, biết nhìn vào bên trong. Người hội đủ cả hai thường thông tuệ hơn tuổi, học nhanh hiểu rộng, vừa làm được việc lớn ngoài xã hội lại vừa biết chăm cái gốc trong gia đạo, nên hay thành danh khá sớm và được cả bề trên lẫn người ngang hàng mến. Đời họ thường có phần rạng rỡ dễ thấy: học hành, thi cử, danh tiếng, cơ hội xuất ngoại hoặc bước ra trường lớn hơn thường đến thuận. Mặt tối là hai khí trái nhau cùng mạnh nên nội tâm hay giằng xé — lúc muốn xông ra tranh đấu, lúc lại muốn lui về ở yên, dễ sinh mâu thuẫn với chính mình, và vì tài lộ sớm nên khó tránh bị người ganh. Cách này lập tức mất sức nếu một trong hai vầng bị Hóa Kỵ, bị Tuần Triệt án ngữ hoặc lạc hãm: ánh sáng lệch về một bên, thành ra người ngoài mạnh mà trong yếu, hoặc trong tinh mà ngoài không mở được đường.',
    advice:
      'Sớm chọn một sân lớn mà bước vào — cách này càng ra chỗ rộng càng sáng, ở chỗ chật thì tài bị nén. Khi thấy lòng giằng xé giữa tiến và lui, hãy quyết theo việc dài hạn đã cam kết, đừng quyết theo cảm xúc trong ngày.',
  },

  minhChauXuatHai: {
    name: 'Minh Châu Xuất Hải',
    type: 'cat',
    condition:
      'Thái Âm (thường kèm Thiên Đồng) đắc thế tại cung Tý, lại có cát tinh hội chiếu.',
    meaning:
      'Tý là cung nước, Thái Âm là trăng — trăng soi mặt biển sâu, cổ nhân ví như "hạt ngọc sáng nhô lên khỏi biển". Cách này chủ về trí tuệ thanh khiết: người thông minh xuất chúng, học một biết mười, có trực giác nhạy và óc thẩm mỹ tinh, thường hiển đạt sớm qua đường học vấn, khoa bảng, nghệ thuật hoặc những nghề cần tinh tế và thẩm định. Kèm Thiên Đồng thì thêm phúc khí, tính hòa nhã dễ được người che chở, đời ít phải giành giật mà vẫn có phần. Nhưng ngọc quý vốn mềm: người có cách này thường thiên về nội tâm, dễ đa cảm, hay nghĩ nhiều đến mất ngủ, thiếu sức chịu đòn khi gặp môi trường thô ráp hoặc cạnh tranh khốc liệt. Phá cách khi Thái Âm bị Hóa Kỵ, gặp Linh Tinh – Đà La hoặc bị Tuần Triệt che: ngọc còn nằm dưới nước không nhô lên được, thành ra tài hoa mà lận đận, giỏi mà không ai biết đến.',
    advice:
      'Hãy đưa tài của mình ra chỗ có người thấy — dự thi, công bố, làm sản phẩm, nhận việc có tên mình trên đó; ngọc phải rời mặt nước mới sáng. Giữ giấc ngủ và nhịp sống điều độ, vì cách này hao ở tinh thần trước khi hao ở thể lực.',
  },

  nhatLeTrungThien: {
    name: 'Nhật Lệ Trung Thiên',
    type: 'cat',
    condition:
      'Thái Dương ở vị trí miếu tại cung Ngọ, thủ Mệnh.',
    meaning:
      'Ngọ là giờ chính trưa, Thái Dương tại Ngọ là "mặt trời giữa trời", ánh sáng mạnh nhất và không chỗ nào không soi tới. Người có cách này thường quang minh chính đại, tính hào sảng, ưa cho hơn nhận, ghét chuyện quanh quéo, nên tự nhiên có sức quy tụ và được đặt vào vị trí đứng đầu; sự nghiệp có thể huy hoàng, danh vọng vượt hẳn xuất thân. Cổ nhân xem đây là đặc cát cho nam mệnh vì Thái Dương là dương tinh, đúng khí; nữ mệnh cũng quý nhưng thường mang tính cách mạnh mẽ, gánh vác nhiều, hay phải làm trụ cột thay phần của người khác. Mặt tối là mặt trời trưa thì gay gắt: dễ nóng nảy, thẳng đến mức làm người khác đau, làm việc quá sức mà không biết dừng, hao tổn ở tim mạch, huyết áp và thị lực. Cách này bị giảm khi Thái Dương hóa Kỵ hoặc gặp Kình Dương – Hỏa Tinh: khí sáng thành khí thiêu, công danh lên nhanh nhưng dễ vì một lần nóng giận hay một lần quá cương mà đổ.',
    advice:
      'Nhận lấy vai đứng mũi chịu sào và làm việc ngay thẳng công khai — đó là chỗ cách này phát mạnh nhất. Nhưng phải chủ động đặt giới hạn cho bản thân về giờ làm và lời nói lúc nóng, vì cái hao lớn nhất của bạn là tự thiêu chính mình.',
  },

  nguyetLangThienMon: {
    name: 'Nguyệt Lãng Thiên Môn',
    type: 'cat',
    condition:
      'Thái Âm ở vị trí miếu tại cung Hợi, thủ Mệnh.',
    meaning:
      'Hợi được xem là cửa trời, Thái Âm tại Hợi là "trăng sáng nơi cửa trời" — vầng trăng lên đến chỗ cao rộng nhất, ánh sáng đầy đặn và dịu. Cách này chủ tài hoa và tài lộc: người thường có tướng mạo thanh tú, khí chất dễ mến, giỏi những việc cần mỹ cảm và sự tinh tế, đồng thời rất biết tích trữ — tiền của vào âm thầm mà dày lên theo năm tháng, hay có phần về nhà đất, tài sản ngầm hoặc lộc từ phía nữ giới, gia đình. Đời sống thiên về hưởng thụ có phẩm chất, thích không gian đẹp, quan hệ êm, ít khi phải giành giật ồn ào. Mặt trái là nhu quá thành yếu: đa cảm, dễ mềm lòng trước lời ngọt, tình duyên thường nhiều sóng gợn dưới mặt nước phẳng, và có tật nghĩ ngợi về đêm sinh ra mất ngủ, sức khỏe hư nhược. Phá cách khi có Hóa Kỵ, Đà La – Linh Tinh xâm nhập hoặc bị Tuần Triệt: trăng bị mây che, tài hoa vẫn còn mà lộc thì hao, thường vì tình cảm hoặc vì tin người mà mất của.',
    advice:
      'Hãy biến mỹ cảm thành nghề và biến tiền mặt thành tài sản giữ được — cách này phát nhất ở chỗ vừa đẹp vừa tích luỹ. Trong quan hệ tiền bạc với người thân thiết, nên rành mạch bằng giấy tờ ngay từ đầu để cái mềm lòng không thành lỗ hao.',
  },

  thachTrungAnNgoc: {
    name: 'Thạch Trung Ẩn Ngọc',
    type: 'cat',
    condition:
      'Cự Môn thủ Mệnh tại Tý hoặc Ngọ, người sinh năm Tân hoặc Quý (được Hóa Lộc, Hóa Quyền hoặc Lộc Tồn trợ).',
    meaning:
      '"Ngọc ẩn trong đá" — nhìn ngoài chỉ thấy tảng đá thô, phải đập vỡ lớp vỏ mới thấy ngọc bên trong. Người có cách này hầu như đều qua một thời thiếu niên gian khổ: xuất thân không thuận, học hành hoặc mưu sinh phải tự lực, tài năng có mà chưa ai nhìn ra, thường bị đánh giá thấp hơn thực chất. Đến trung vận về sau, khi lớp vỏ đã bị đời đập vỡ, thì khí Cự Môn được Lộc Quyền tiếp sức bỗng rực sáng: nói ra có trọng lượng, chuyên môn được thừa nhận, danh và lợi đến cùng lúc và bền vì có gốc thật. Vì thế cách này quý ở chỗ hậu vận, đừng lấy thành bại của tuổi trẻ mà đo cả đời. Mặt tối là cái nghiệp khẩu thiệt vẫn đeo theo: hay tranh luận đến cùng, dễ mang tiếng khó tính, và nỗi ấm ức thời thiếu thời nếu không giải thì hóa thành tâm đa nghi. Kỵ nhất Kình Dương — đặc biệt tại Ngọ — vì gươm chém vào đá thì ngọc nát cùng đá, khi ấy thành phá cách: cả đời mài mà không ai thấy ngọc, tài cao mà vận trắc.',
    advice:
      'Kiên trì mài một chuyên môn sâu đến mức không ai thay được, và đừng nóng ruột đòi được công nhận sớm — cách của bạn tính bằng thập niên, không tính bằng năm. Trong tranh luận hãy nhường phần thắng lời, giữ phần thắng việc, đó là cách tránh gươm chém vào đá.',
  },

  anhTinhNhapMieu: {
    name: 'Anh Tinh Nhập Miếu',
    type: 'cat',
    condition:
      'Phá Quân ở vị trí miếu tại cung Tý hoặc Ngọ thủ Mệnh, lại có cát tinh hội chiếu.',
    meaning:
      'Phá Quân vốn là tướng phá thành, đặt vào miếu địa thì cái phá ấy hóa thành khí khai phá — cổ nhân gọi là "anh tinh nhập miếu", ngôi sao hùng anh về đúng đền của mình. Người có cách này dũng mãnh khác thường: dám bỏ chỗ cũ để mở đường mới, chịu được cực khổ mà người khác chịu không nổi, làm việc dứt khoát không luyến tiếc, nên thường phú quý song toàn sau khi đã dựng được cơ nghiệp riêng. Điểm then chốt là ly hương: rời nơi sinh trưởng, ra xa lập nghiệp thì vận mở rất tốt, còn nếu cứ bám ở đất cũ trong khuôn cũ thì cái khí phá không có chỗ dùng, quay vào phá chính gia đạo và các quan hệ gần. Mặt tối là tính khí mạnh, ít nhượng bộ, hôn nhân và hợp tác dễ có đổ vỡ ít nhất một lần, tiền của cũng theo nhịp vào lớn ra lớn. Phá cách khi Phá Quân lạc hãm hoặc bị Không Kiếp, Kình Đà bao vây: khai phá thành phá tán, đổi thay thành bôn ba vô định.',
    advice:
      'Hãy chủ động đi xa để lập nghiệp — đổi thành phố, đổi ngành, ra thị trường mới đều là đất tốt của bạn. Mỗi lần đạp đổ cái cũ, hãy chuẩn bị xong cái mới trước khi ra tay, để cái dũng không hóa thành cái hao.',
  },

  maDauDoiKiem: {
    name: 'Mã Đầu Đới Kiếm',
    type: 'cat',
    condition:
      'Kình Dương thủ Mệnh tại cung Ngọ (bản cổ điển: Thiên Đồng – Thái Âm hoặc Tham Lang tại Ngọ mà gặp Kình Dương).',
    meaning:
      '"Ngựa mang gươm" — Ngọ là ngựa, Kình Dương là gươm; sát tinh vốn hung nhưng đặt lên lưng ngựa đang phi thì hung khí hóa thành khí xông trận. Người có cách này hiển đạt bằng con đường quyền lực và can trường: quân đội, công an, an ninh, thể thao đối kháng, ngành cơ khí – dao thép – y khoa phẫu thuật, hoặc bất cứ nghề nào cần một người dám ra mặt gánh phần nguy hiểm. Đặc điểm rõ nhất là phải bôn ba xa xứ mới phát; thiếu thời hầu như đều vất vả, thương tổn, có thể mang thương tích hoặc chịu cảnh phải tự lo từ sớm, nhưng trung vận đến vãn vận thì đại phát, càng qua sóng lớn càng lên cao. Mặt tối là gươm luôn có hai lưỡi: tính nóng, cương quá dễ gây oán, hay vướng tranh chấp kiện tụng và tai nạn liên quan đến sắt thép, xe cộ; gia đạo thường không êm bằng sự nghiệp. Phá cách khi thêm Đà La, Linh Tinh, Hóa Kỵ vây quanh hoặc chính tinh đồng cung lạc hãm — bấy giờ ngựa vẫn phi mà gươm quay vào mình, vất vả cả đời mà công không thành.',
    advice:
      'Chọn nghề cho phép cái cương của bạn có chỗ dùng chính đáng, và chấp nhận đi xa nhà trong giai đoạn đầu — đó là điều kiện thành cách. Tuyệt đối giữ mình trước rượu, tốc độ và những cuộc va chạm nóng, vì tai họa của cách này thường đến trong tích tắc.',
  },

  hoaTham: {
    name: 'Hỏa Tham',
    type: 'cat',
    condition:
      'Tham Lang và Hỏa Tinh đồng cung (đóng cùng một cung trên lá số).',
    meaning:
      'Cổ nhân nói "sát tinh gặp Tham hóa cát": Tham Lang là khát khao, Hỏa Tinh là lửa bộc phát, hai khí gặp nhau thì sinh ra hoạnh phát — tài lộc hoặc công danh đến rất nhanh, rất bất ngờ, thường trong một cơ hội duy nhất chỉ có mấy tháng. Người có cách này khi vào vận thì như đổ dầu vào lửa: dám xuống tay lớn, gặp đúng thời thế, một bước lên tầm khác hẳn; hợp kinh doanh nắm thời cơ, đầu tư, ngành nóng, ngành dùng lửa và kim khí. Nhưng lời cảnh báo đi kèm cũng nặng ngang phần phúc: hoạnh phát thì hoạnh phá — cái đến nhanh cũng có khả năng đi nhanh, nhất là khi hết vận mà người ta vẫn giữ nguyên độ mạo hiểm của lúc đang lên. Mặt tối thường trực là tính nóng, sốt sắng, ham dục và ham chơi, dễ nghiện những thứ cho cảm giác mạnh, quan hệ tình cảm bốc lên rồi tắt. Phá cách khi thêm Không Kiếp hoặc Hóa Kỵ chen vào: lửa cháy hết đám cỏ mà không kịp gặt, phát rồi tán sạch, có khi mắc nợ hơn trước.',
    advice:
      'Khi thời cơ đến hãy quyết nhanh và làm mạnh, nhưng phải định trước phần lãi sẽ rút ra khỏi cuộc chơi và chuyển thành tài sản không dễ bán. Trong lúc đang phát nhất, đó chính là lúc nên giảm đòn cân nợ, chứ không phải tăng.',
  },

  linhTham: {
    name: 'Linh Tham',
    type: 'cat',
    condition:
      'Tham Lang và Linh Tinh đồng cung (đóng cùng một cung trên lá số).',
    meaning:
      'Cùng loại với Hỏa Tham nhưng khí chất khác: Hỏa Tinh là lửa bùng thấy được, Linh Tinh là lửa âm ỉ nén lâu rồi mới nổ. Vì thế Linh Tham thường phát đột ngột hơn và có phần lặng lẽ hơn — nhiều năm không ai để ý, rồi trong một biến động của thời thế bỗng nắm được quyền, được vị trí, được món lợi lớn; hợp những việc cần chờ thời, tình huống cạnh tranh ngầm, ngành đặc thù hoặc nắm quyền do người khác rời chỗ. Người có cách này bên ngoài điềm tĩnh nhưng bên trong nhiều tính toán và nhiều uất kết, sức chịu đựng dai hơn Hỏa Tham nhưng khi bùng thì cũng dữ hơn. Mặt tối là Linh Tinh vốn chủ nỗi ngấm ngầm: dễ để bụng, đa nghi, hay chuốc lấy oán thù không cần thiết, và phần hoạnh phát đến từ biến động của người khác nên hay kèm miệng đời, tranh chấp phía sau. Phá cách khi gặp Đà La, Hóa Kỵ hoặc Không Kiếp: cái nén không bung ra được mà quay vào trong, thành ra bệnh ngấm, kiện tụng dai dẳng, hoặc phát một lần rồi mất cả gốc.',
    advice:
      'Hãy chuẩn bị kỹ trong lúc chưa ai nhìn tới mình — năng lực, quan hệ, tiền dự trữ — để khi cơ hội bật ra thì nắm được ngay. Đừng để bụng lâu và đừng dùng cách trả đòn ngầm; oán khí là thứ làm hao cách này nhanh nhất.',
  },

  locMaGiaoTri: {
    name: 'Lộc Mã Giao Trì',
    type: 'cat',
    condition:
      'Lộc Tồn (hoặc Hóa Lộc) và Thiên Mã cùng hội về một cung hoặc cùng chiếu Mệnh.',
    meaning:
      '"Lộc gặp ngựa" — của cải được đặt lên lưng ngựa, nên tiền của cách này là tiền lưu động, phải chạy mới sinh sôi. Người có cách này thường phát tài nơi xa hoặc nhờ di chuyển: buôn bán, xuất nhập khẩu, vận tải, du lịch, làm ăn khác vùng khác nước, nghề phải đi lại gặp người; ngồi một chỗ thì lộc bị tắc, càng đi càng có. Biểu hiện dễ thấy là cơ hội hay đến từ những chuyến đi, những người gặp tình cờ, và họ thường có nhiều nguồn thu nhỏ cùng lúc thay vì một nguồn lớn. Mặt tối là chạy nhiều thì hao nhiều: tiền qua tay lớn mà đọng lại ít, đời sống dễ mất gốc, xa gia đình, sức khỏe hao vì đường trường, và tâm khó an vì luôn thấy phải đi tiếp. Phá cách khi Thiên Mã gặp Đà La (gọi là "chiết túc mã" — ngựa què) hoặc Lộc bị Không Kiếp, Hóa Kỵ phá: khi ấy đi mà không tới, lộc chạy qua tay người khác, càng xoay càng cạn.',
    advice:
      'Hãy chọn mô hình kiếm tiền có yếu tố dịch chuyển và mở rộng địa bàn, đừng bó mình vào một chỗ cố định. Nhưng phải định kỳ chuyển phần lãi thành tài sản đứng yên — nhà đất, vốn dài hạn — nếu không cả đời chỉ thấy tiền chạy qua chứ không thấy tiền ở lại.',
  },

  tamKyGiaHoi: {
    name: 'Tam Kỳ Gia Hội',
    type: 'cat',
    condition:
      'Cả ba Hóa Lộc, Hóa Quyền, Hóa Khoa cùng hội về tam phương tứ chính của cung Mệnh.',
    meaning:
      'Ba điều kỳ diệu cùng tụ một chỗ: Hóa Lộc là tài, Hóa Quyền là quyền, Hóa Khoa là danh và học vấn — cổ nhân xếp đây vào hàng cách cục quý và hiếm nhất, bởi ba khí ấy hợp đủ thì không thiếu điều gì để làm nên nghiệp lớn. Người có cách này khi vào vận thì khí thế cực thịnh: nói có người nghe, làm có tiền theo, tên tuổi được ghi nhận chính thức; thăng tiến, thi cử, giấy tờ, danh hiệu đều thuận, và thường được cả hệ thống ủng hộ chứ không phải tự chen. Nhưng cách quý đến đâu vẫn cần cái nền: nếu chính tinh thủ Mệnh yếu, lạc hãm, hoặc lá số thiếu sức chịu tải thì ba khí lớn dồn vào một thân mỏng lại thành gánh nặng — được đặt vào chỗ cao hơn năng lực, dễ vấp ở chính đỉnh cao. Mặt tối khác là dễ sinh tự đại vì mọi việc đến thuận, và vì quá đủ nên thiếu cái đói khiến người ta bền chí; khi vận qua mà lòng vẫn quen được ưu ái thì hụt hẫng rất nặng. Cách này cũng bị chiết giảm khi Không Kiếp, Kình Đà cùng xen hoặc Tuần Triệt án ngữ cung Mệnh: tam kỳ vẫn có mà hưởng không trọn, được danh mất lợi hoặc được thời mà không giữ được.',
    advice:
      'Khi cách này khởi lên, hãy dốc sức vào một việc lớn xứng tầm và lập nền tảng lâu dài ngay trong lúc thuận — vận cực thịnh không kéo dài mãi. Song song đó phải rèn thực lực đủ gánh vị trí mình được trao, kẻo cái quý biến thành cái vấp.',
  },

  khoiVietQuyNhan: {
    name: 'Khôi Việt Quý Nhân (Tọa Quý Hướng Quý)',
    type: 'cat',
    condition:
      'Thiên Khôi và Thiên Việt cùng hội về cung Mệnh — một sao ngồi cùng, một sao chiếu tới.',
    meaning:
      'Thiên Khôi là quý nhân công khai, bậc trên có địa vị đứng ra nâng đỡ; Thiên Việt là quý nhân kín đáo, cơ may đến từ chỗ không ngờ. Hai sao cùng hội thì cả đời "ngồi ở chỗ quý, hướng về chỗ quý": mỗi khúc ngoặt quan trọng đều có người xuất hiện mở cửa cho mình — thi cử có người chỉ đường, xin việc có người giới thiệu, thăng tiến có người đề bạt, hoạn nạn có người đứng ra bảo lãnh. Người có cách này thường phong thái đoan chính, dễ gây thiện cảm với bậc trên, nên hay được chọn giữa nhiều người ngang tài. Mặt tối là quá quen được đỡ thì sinh dựa: thiếu ý chí tự lập, gặp việc khó liền tìm người thay mình gánh, và một khi quý nhân rời đi thì hụt chân rõ rệt. Cách này giảm sức khi Khôi Việt gặp sát tinh, Hóa Kỵ hoặc rơi vào cung xấu: quý nhân vẫn đến nhưng đến muộn, giúp nửa vời, hoặc giúp rồi lại sinh chuyện phải mang ơn nặng nề khó trả.',
    advice:
      'Hãy chăm giữ quan hệ với những người từng nâng đỡ mình bằng cách báo tin và báo kết quả đều đặn — quý nhân của bạn cần thấy công của họ không đặt sai chỗ. Đồng thời tự đặt ra những việc phải hoàn thành hoàn toàn bằng sức mình, để năng lực thật không bị cái phúc được đỡ che mất.',
  },

  songLoc: {
    name: 'Song Lộc (Lộc Hợp Uyên Ương)',
    type: 'cat',
    condition:
      'Lộc Tồn và Hóa Lộc cùng hội chiếu về cung Mệnh (hoặc cùng đóng ở Mệnh – Tài – Quan).',
    meaning:
      'Hai nguồn lộc cùng về một chỗ, cổ nhân ví như đôi chim uyên ương không rời nhau: Lộc Tồn là lộc có gốc, tiền của tích được và giữ được; Hóa Lộc là lộc chảy tới, cơ hội và dòng thu nhập mới. Có gốc lại có dòng thì phúc lộc rất dày — người có cách này thường không thiếu tiền ở những khúc cần tiền, hay có nhiều nguồn thu, và điều đáng quý là tiền đến bằng đường chính đáng, do làm mà có, nên hưởng được yên ổn. Đời sống thường sung túc, ăn ở tử tế, có điều kiện giúp người, và tuổi càng lớn của càng dày. Mặt tối là quá đủ thì nhụt: dễ an nhàn, ham hưởng thụ, thân thể sinh bệnh phú quý; lại dễ thành chỗ dựa tài chính cho cả họ hàng bạn bè nên tiền tuy nhiều mà phần dành cho mình thì ít. Phá cách khi Không Kiếp xen vào giữa hoặc Hóa Kỵ, Kình Đà xâm phạm cung Lộc: kho có hai cửa vào nhưng cũng có lỗ dưới đáy, tiền vào nhiều mà chảy đi cũng nhiều, thường vì bảo lãnh, cho vay hoặc đầu tư nghe theo người.',
    advice:
      'Hãy dùng phần lộc dư để mua tài sản sinh lời và lập quỹ dự phòng ngay khi còn đang thuận, đừng để tất cả nằm ở dạng tiền dễ tiêu. Đặt sẵn một mức trần cho việc giúp đỡ người khác về tiền bạc, giúp trong mức ấy thì phúc còn, quá mức thì phúc hóa hao.',
  },

  // ============================ HUNG CÁCH ============================

  menhVoChinhDieu: {
    name: 'Mệnh Vô Chính Diệu',
    type: 'hung',
    condition:
      'Cung Mệnh không có chính tinh nào tọa thủ, phải mượn chính tinh của cung đối diện (cung Thiên Di) để luận.',
    meaning:
      'Mệnh không chính diệu như nhà không chủ, ngựa không dây cương: đời thường thiếu một định hướng rõ từ đầu, tính cách khó nắm bắt, lúc thế này lúc thế khác, dễ bị hoàn cảnh và người xung quanh đẩy đưa. Biểu hiện quen thấy là thay đổi ngành nghề nhiều lần, sớm phải rời gia đình hoặc chịu cảnh thiếu chỗ dựa từ nhỏ, có tài mà lâu mới định được đường; vì phải mượn sao đối cung nên bản chất con người này chịu ảnh hưởng rất lớn từ môi trường bên ngoài — gặp thầy tốt bạn tốt thì nên, gặp môi trường xấu thì trôi theo rất nhanh. Nhưng cổ nhân cũng dặn không được xem thường cách này: nếu có cát tinh hội chiếu đủ mạnh, thêm Tuần hoặc Triệt đắc dụng che chắn, thì lại thành "phản vi kỳ cách" — hư mà hóa thực, người sớm cực khổ mà hậu vận lên rất cao, không ít bậc thành đạt lớn mang cách này. Cái lợi ngầm của nó là sự mềm dẻo: không bị một khí sao nào ép chặt nên dễ chuyển mình, học được nhiều nghề, thích nghi giỏi ở chỗ người khác chịu không nổi. Ngược lại, nếu thiếu cát tinh mà lại thêm sát tinh vây, thì đúng là phận trôi nổi, cả đời làm cho người, dễ nương nhờ và khó có phần riêng.',
    advice:
      'Hãy chủ động chọn lấy môi trường và người thầy cho mình — với cách này, ở cạnh ai quan trọng hơn cả tài riêng. Chọn một hướng đi và cam kết đủ lâu (tối thiểu vài năm) trước khi đổi, vì cái làm hại bạn không phải thiếu năng lực mà là đổi quá sớm.',
  },

  cucCuMaoDau: {
    name: 'Cực Cư Mão Dậu',
    type: 'hung',
    condition:
      'Tử Vi và Tham Lang đồng cung tại Mão hoặc Dậu.',
    meaning:
      '"Cực" là Bắc Cực tinh tức Tử Vi, ngôi đế tinh đáng ra phải ngồi giữa mà lại đóng ở Mão – Dậu là hai cửa ra vào của trời đất, đế khí không vững; thêm Tham Lang là sao đa dục ngồi kèm, thành ra ngôi cao mà lòng nhiều ham muốn. Biểu hiện đời thực là người có khí chất, có sức hút, ăn nói dễ nghe, nhưng dễ sa vào tửu sắc, chơi vui, những thú phù phiếm tốn kém; tài năng thật thường bị tiêu bớt vào chỗ ăn chơi và quan hệ tình cảm rối. Cổ nhân cảnh báo cách này hay "hữu danh vô thực": vị trí và vẻ ngoài trông sang mà nội lực cùng tài sản thì không tương xứng, hôn nhân dễ có sóng gió. Điều thú vị là chính cách này lại có một ngả rẽ khác: nếu gặp Địa Không – Địa Kiếp, cái dục bị chặn lại, người ta thường ngoảnh sang đường tinh thần — tu hành, tôn giáo, triết học, nghệ thuật thoát tục — và đi rất xa trên đường đó. Có cát tinh trợ cùng Hóa Quyền, Hóa Khoa thì vẫn nên người, giữ được vị trí, chỉ là cả đời phải tự chiến với cái ham của chính mình.',
    advice:
      'Hãy đặt ra giới hạn rõ ràng cho tiệc tùng, rượu và các quan hệ ngoài luồng — cách này không đổ vì kém tài mà đổ vì mất kiểm soát ở chỗ vui. Chuyển phần khát khao ấy sang một theo đuổi có chiều sâu (chuyên môn, nghệ thuật, tu dưỡng) thì cái hung tự nhiên hóa thành cái quý.',
  },

  duongDaGiapKy: {
    name: 'Dương Đà Giáp Kỵ',
    type: 'hung',
    condition:
      'Kình Dương và Đà La ở hai cung hai bên, kẹp Hóa Kỵ hoặc kẹp chính tinh thủ Mệnh ở giữa.',
    meaning:
      'Một bên là gươm sắc, một bên là dây rối, giữa là chỗ mình đứng — cách này chủ về bị đè nén từ hai phía cùng lúc. Biểu hiện đời thực rất dễ nhận: làm việc gì cũng có trở ngại chen ngang, tiến thì bị chặn mà lui thì mất phần, xung quanh có người gây khó công khai lẫn người dây dưa phía sau; chuyện đáng xong trong một tháng thường bị kéo thành nửa năm. Người có cách này lâu ngày dễ mang tâm trạng bức bối, mất niềm tin vào nỗ lực, sức khỏe hao ở gân xương, dạ dày, thần kinh, và nếu Hóa Kỵ nằm giữa thì thêm chuyện giấy tờ, kiện tụng, tiền bạc bị vướng. Nhưng mặt khác, khí bị nén lâu cũng tạo nên sức chịu đựng phi thường và sự cẩn trọng hơn người: nhiều người mang cách này về sau làm rất tốt những việc cần bền gan, giải quyết vướng mắc, xử lý chỗ rối mà người khác bỏ chạy. Cách được hóa giải đáng kể khi có Hóa Khoa, Lộc Tồn, Thiên Giải hoặc Tuần Triệt chặn đúng chỗ, và nhất là khi người ta biết rút khỏi những cuộc tranh giành không cần thiết.',
    advice:
      'Đừng chọn đường đối đầu trực diện — cách này thắng bằng cách đi vòng, chờ thời và làm đúng thủ tục, không thắng bằng cách xông lên. Mọi việc quan trọng hãy làm rõ bằng văn bản và tính trước độ trễ, để trở ngại không biến thành thiệt hại.',
  },

  khongKiepGiapMenh: {
    name: 'Không Kiếp Giáp Mệnh',
    type: 'hung',
    condition:
      'Địa Không và Địa Kiếp giáp hai bên cung Mệnh, hoặc cùng tọa thủ ngay tại cung Mệnh.',
    meaning:
      'Địa Không chủ sự trống rỗng, Địa Kiếp chủ sự phá tán; hai sao ấy vây lấy Mệnh thì đời nhiều sóng gió mà lại là loại sóng làm hao chứ không làm giàu. Biểu hiện quen thấy là mưu sự đến gần thành thì đổ, người hợp tác bỏ đi giữa đường, tiền của tích được lại mất vì một biến cố ngoài dự tính; tay trắng rồi làm lại nhiều lần là chuyện thường của cách này. Về tâm tính, họ hay có ý tưởng lạ và tầm nghĩ vượt khỏi khuôn thường, nhưng dễ viển vông, thiếu kiên nhẫn với những việc phải làm từng bước, và bên trong thường mang cảm giác trống trải khó gọi tên. Chính vì thế cổ nhân dặn cách này hợp con đường tu tâm, nghiên cứu, huyền học, tôn giáo, khoa học lý thuyết, nghệ thuật — những chỗ mà cái "không" trở thành lợi thế — hơn là lao vào tranh đoạt vật chất, nơi họ hay thua kẻ tầm thường hơn mình. Cách được đỡ nhiều khi có Hóa Khoa, Lộc Tồn hoặc quý tinh hội chiếu, hoặc chính tinh thủ Mệnh miếu vượng đủ mạnh; đặc biệt với các cách "động" như Sát Phá Tham thì Không Kiếp có lúc lại thúc cho sự đổi mới, miễn là người ta đừng dùng vốn vay để chơi lớn.',
    advice:
      'Đừng dồn hết vào một cửa và tuyệt đối tránh vay nợ để đầu tư — cách này chỉ cần một lần đổ là mất nhiều năm gây lại. Hãy đặt phần lớn năng lượng vào chuyên môn, tri thức, tay nghề: đó là loại tài sản Không Kiếp không lấy đi được.',
  },

  linhXuongDaVu: {
    name: 'Linh Xương Đà Vũ',
    type: 'hung',
    condition:
      'Bốn sao Linh Tinh, Văn Xương, Đà La, Vũ Khúc gặp nhau trong cùng cung hoặc cùng hội chiếu, nhất là ở cung hãm.',
    meaning:
      'Cổ nhân xếp đây vào loại cách hạn nặng và có lời răn rất gắt: Linh Tinh là tai ương ngấm ngầm, Đà La là sự dây dưa trì trệ, Vũ Khúc mang khí kim sắc lạnh, Văn Xương thuộc kim văn — kim khí chồng kim khí, thêm sát tinh nén lại thì dễ sinh biến cố nghiêm trọng, nhất là ở những hạn xấu hoặc khi cung an ở chỗ hãm. Biểu hiện cần đề phòng là tai nạn liên quan đến sắt thép, dao mổ, xe cộ, nước sâu, cùng những cú sốc tinh thần đột ngột, kiện tụng nặng hoặc sụp đổ tài chính do một quyết định ký kết sai. Về tâm tính, người mang cách này thường thông minh có học, nghĩ sâu, nhưng dễ dồn nén, ôm chuyện trong lòng, và khi đã bế tắc thì hay tự đẩy mình vào chỗ cực đoan. Phải nói rõ: đây là cách cảnh báo để phòng, không phải bản án — nếu có Hóa Khoa, Hóa Lộc, Thiên Giải, Lộc Tồn hoặc Tuần Triệt trấn đúng chỗ, và nhất là nếu người ta biết sống chậm, không tranh, không mạo hiểm trong những năm hạn xấu, thì phần lớn cái hung tiêu tán, tài văn của Xương – Vũ vẫn dùng được vào nghề chuyên môn kỹ tính.',
    advice:
      'Trong những năm hạn xấu, hãy chủ động giảm rủi ro thật: không ký kết lớn, không đi đêm đường dài, kiểm tra sức khỏe định kỳ, tránh tranh chấp đến mức đối đầu. Đừng giữ bế tắc một mình — nói ra với người tin cậy hoặc tìm chuyên gia, vì cái hại lớn nhất của cách này bắt đầu từ chỗ dồn nén.',
  },

  nhatNguyetPhanBoi: {
    name: 'Nhật Nguyệt Phản Bối',
    type: 'hung',
    condition:
      'Cả Thái Dương và Thái Âm đều lạc hãm (đóng ở những cung mà hai sao này mất sáng).',
    meaning:
      '"Phản bối" là quay lưng lại với ánh sáng: hai vầng nhật nguyệt đều tối thì cả dương khí lẫn âm khí đều không đủ soi đường. Biểu hiện đời thực thường là công danh trắc trở — có tài mà không gặp thời, làm nhiều mà người ngoài ít thấy, thi cử hoặc thăng tiến hay bị hụt ở khâu cuối; đường tình duyên và gia đạo cũng bất ổn, dễ chia cách với cha hoặc mẹ, hôn nhân muộn hoặc phải qua khúc gãy. Tâm tính hay lao tâm khổ tứ, nghĩ ngợi về đêm, mắt và tim mạch dễ hao, bên trong thường tự thấy mình không được công nhận. Nhưng cách này cũng có mặt sáng riêng: chính vì không được ánh sáng bên ngoài chiếu tới nên người ta buộc phải tự thắp đèn — nhiều người mang cách này rất bền chí, giỏi những nghề làm việc âm thầm, ngành đêm, ngành nghiên cứu, nghề chăm sóc và thiện nguyện, đến trung vãn vận thì tích được nền tảng vững hơn cả người phát sớm. Cách được đỡ đáng kể nếu có Hóa Lộc, Hóa Khoa, Khôi Việt, Xương Khúc hội chiếu, hoặc lá số có cung Thiên Di, Phúc Đức sáng — khi ấy nên rời quê hương đi xa để tìm ánh sáng ở đất khác.',
    advice:
      'Đừng đo mình bằng tốc độ thành danh của người khác; hãy chọn nghề tính bằng độ dày kinh nghiệm và kiên trì tích trong âm thầm. Nên tính chuyện đi xa hoặc đổi môi trường một lần cho dứt khoát, và giữ nếp sinh hoạt ngủ sớm để bảo toàn phần khí đã mỏng.',
  },

  phaQuanAmHam: {
    name: 'Phá Quân Ám Hãm',
    type: 'hung',
    condition:
      'Phá Quân lạc hãm thủ Mệnh, lại gặp sát tinh như Kình Dương, Đà La, Hỏa Linh hoặc Không Kiếp.',
    meaning:
      'Phá Quân ở miếu địa là tướng khai phá, nhưng khi lạc hãm mà thêm sát tinh thì cái khí phá không có chỗ dùng chính đáng nên quay vào phá chính mình và những gì gần mình nhất. Biểu hiện đời thực là hao tổn liên tục: tiền vào rồi tán, việc dựng lên rồi dẹp, quan hệ vừa gắn đã rạn; tính khí thất thường, lúc hăng hái quá độ lúc buông xuôi hẳn, nói dứt là dứt nên gia đạo và hôn nhân dễ đổ vỡ. Người mang cách này thường phải rời quê sớm, tự lo từ nhỏ, chịu thương tổn cả về thân lẫn tình, và trong lòng hay có cái bất mãn muốn đạp đổ trật tự sẵn có. Song cần thấy mặt còn lại: đây là mẫu người gan dạ, chịu được đổ vỡ mà vẫn dựng lại, và nếu đưa được cái khí phá vào chỗ hợp — nghề đòi hỏi cải tổ, xử lý khủng hoảng, làm lại cái đang hỏng, ngành cần dũng khí và tay nghề nặng — thì họ làm được việc mà người êm đềm không làm nổi. Cách nhẹ đi rõ rệt khi có Hóa Lộc, Hóa Quyền, Lộc Tồn hoặc Tả Hữu trợ, và khi người ta chịu sống có kỷ luật, có người kèm cặp.',
    advice:
      'Hãy đặt mình vào một cấu trúc có kỷ luật và có người đồng hành nhắc nhở — cách này hại nhất khi được tự do tuyệt đối. Trước mỗi lần muốn đập đi làm lại, buộc mình chờ đủ một tháng và hỏi ý một người tỉnh táo, riêng việc đó đã hóa giải được phần lớn cái phá tán.',
  },
};

export default CACH_CUC_DATA;
