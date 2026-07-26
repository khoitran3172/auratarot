// Luận giải CHÍNH TINH theo từng CUNG (nhóm A: 7 sao đầu của 14 chính tinh).
// Mỗi mục gồm: bright (khi sao Miếu/Vượng/Đắc — mặt phát huy),
// dim (khi sao Bình/Hãm — mặt suy giảm, biến chất), advice (một câu hành động).
// Luận theo lối phổ thông Nam phái, dùng cho mục đích chiêm nghiệm & giải trí.

export interface PalaceReading {
  bright: string;   // 2-3 câu: khi sao MIẾU/VƯỢNG/ĐẮC tại cung này — mặt phát huy
  dim: string;      // 2-3 câu: khi sao BÌNH/HÃM tại cung này — mặt suy giảm/biến chất
  advice: string;   // 1 câu khuyên hành động cụ thể cho lĩnh vực của cung
}

export const CHINH_TINH_PALACE_A: Record<string, Record<string, PalaceReading>> = {
  // ══════════════════════════════════════════════════════════════
  // TỬ VI — đế tinh, Bắc Đẩu chi chủ. Tôn quý, lãnh đạo, uy tín,
  // thu phục lòng người. Tối kỵ cô lập (đế tinh vô phụ tá = cô quân).
  // ══════════════════════════════════════════════════════════════
  TuVi: {
    'Mệnh': {
      bright: 'Tử Vi là đế tinh, đóng Mệnh sáng thì người này thường mang dáng vẻ đường bệ, mặt đầy đặn, cử chỉ chậm mà chắc, đứng giữa đám đông tự nhiên được người ta nhường lời. Tự trọng rất cao, không thích ngửa tay xin ai, hễ gặp việc rối là có xu hướng bước ra chủ trì thay vì đứng ngoài bàn luận. Phần nhiều được bề trên tin cậy sớm, tuổi trung niên trở đi mới thật sự vào thời của mình.',
      dim: 'Đế tinh hãm địa là "cô quân trên ngai trống" — vẫn muốn ra lệnh nhưng thực lực và vây cánh chưa đủ, dễ sinh cao ngạo, ưa nghe lời khen mà xa lời thật. Người này dễ trọng hư danh hơn thực chất, hay tự ái vì chuyện nhỏ, và có xu hướng chuộng bề ngoài sang trọng quá mức thu nhập. Càng cô lập càng cố chấp, nên hay tự đóng cửa với những người thật lòng góp ý.',
      advice: 'Hãy chủ động giữ bên mình hai ba người dám nói thẳng và trao cho họ quyền phản biện thật, vì đế tinh chỉ vững khi có phụ tá.',
    },
    'Phụ Mẫu': {
      bright: 'Tử Vi sáng ở Phụ Mẫu thường báo cha mẹ có vị thế, gia phong nghiêm cẩn, nếp nhà trọng danh dự và học vấn. Người này phần nhiều được thừa hưởng uy tín hoặc quan hệ của bề trên, đi làm dễ gặp cấp trên có tầm nhìn nâng đỡ, được giao việc trọng sớm hơn tuổi. Chữ "quý" ở đây nằm ở chỗ được che chở bởi người có quyền, chứ không hẳn là được cho nhiều tiền.',
      dim: 'Khi hãm, cái tôn quý biến thành uy quyền áp chế: cha mẹ nghiêm khắc thái quá, đặt kỳ vọng nặng, thương con theo cách khiến con ngột ngạt. Quan hệ trên dưới thường có khoảng cách khách khí — kính mà không gần, khó tâm sự. Với cấp trên cũng vậy, dễ gặp người thích ra lệnh và giữ công, mình làm nhiều mà tiếng thơm về người khác.',
      advice: 'Nên chọn cách bày tỏ bằng việc làm cụ thể và báo cáo đều đặn thay vì tranh luận thắng lý với bề trên.',
    },
    'Phúc Đức': {
      bright: 'Tử Vi cư Phúc Đức mà sáng thường ứng với âm đức dòng họ khá dày, tổ tiên có người đỗ đạt hoặc từng làm việc nghĩa, đời mình vì thế hay được "gặp may đúng lúc". Tinh thần người này cao khiết, thích những gì đường hoàng chính đại, không ưa mưu lợi tiểu nhân; già càng an, phần nhiều thọ và được con cháu tôn kính. Đây là cách hưởng phúc bằng danh dự và sự an tâm hơn là bằng vật chất.',
      dim: 'Hãm địa thì thành "phúc có mà không hưởng được": tiêu chuẩn tinh thần quá cao nên hiếm khi bằng lòng, tự đặt lên vai gánh danh tiếng dòng họ rồi mệt vì nó. Người này dễ khổ tâm vì so đo địa vị, đêm nằm nghĩ nhiều, tâm không tĩnh. Cũng dễ tốn kém vào chuyện lễ nghĩa, phô trương giỗ chạp hoặc hình thức tín ngưỡng mà lòng vẫn chẳng nhẹ hơn.',
      advice: 'Mỗi tuần nên dành một khoảng tĩnh lặng không mục đích — thiền, đi bộ, đọc sách xưa — để tập hưởng phúc thay vì quản lý phúc.',
    },
    'Điền Trạch': {
      bright: 'Đế tinh nhập Điền Trạch sáng thì gia trạch có khí thế: phần nhiều được nhà cao cửa rộng, ưa vị trí trung tâm, mặt tiền quang đãng, hoặc thừa hưởng nhà tổ có giá. Người này có duyên với bất động sản giá trị lớn, mua một lần được lâu dài, ít khi phải bán tháo. Nhà dù chưa lớn cũng thường bày biện đường hoàng, khách đến là nhận ra chủ nhà trọng thể diện.',
      dim: 'Khi hãm thì hoá "nhà lớn mà trống" — dốc quá nhiều tiền vào nơi ở để giữ mặt, cuối cùng nhà rộng người thưa, sửa sang liên miên. Dễ vướng tranh chấp gia sản với người trong họ, giấy tờ đất đai lằng nhằng vì tin nhau bằng lời. Ở lâu một chỗ vẫn thấy không thuộc về nơi đó, nên có xu hướng đổi nhà, đổi chỗ ở nhiều lần.',
      advice: 'Với mọi tài sản đứng chung tên trong họ, hãy làm giấy tờ công chứng rõ ràng ngay từ đầu, đừng để nghĩa tình che mất phần pháp lý.',
    },
    'Quan Lộc': {
      bright: 'Tử Vi đóng Quan Lộc là sao về đúng nhà — đế tinh vốn sinh ra để ngồi chỗ chủ trì. Người này thường tiến thân trong tổ chức lớn, có thứ bậc rõ ràng, được đề bạt vì tác phong đường hoàng và khả năng thu phục nhân sự hơn là vì giỏi kỹ thuật. Hợp quản trị, điều hành, hành chính cấp cao, ngành nghề cao cấp; càng làm việc có danh nghĩa chính thống càng phát.',
      dim: 'Hãm địa dễ thành chức danh hư: ngồi ghế nghe oai mà không có thực quyền, hoặc có quyền mà không có người theo. Người này khi ấy dễ mắc bệnh quan liêu — nặng thủ tục, thích duyệt hơn thích làm, ra quyết định theo cảm giác thể diện. Tự phụ khiến đồng sự lặng lẽ tránh xa, đến lúc cần hậu thuẫn thì đứng một mình.',
      advice: 'Nên chọn môi trường có thước đo kết quả rõ ràng và định kỳ tự tay làm lại phần việc chuyên môn để giữ thực lực bên dưới cái danh.',
    },
    'Nô Bộc': {
      bright: 'Tử Vi sáng ở Nô Bộc thì bạn bè cộng sự phần nhiều là người có địa vị, nói được làm được; mình tuy không giàu nhất nhóm nhưng thường là người đứng ra tập hợp. Người dưới quyền tôn phục vì thấy chủ mình biết giữ lời và bảo vệ quân. Nhờ vòng quan hệ này mà nhiều việc lớn được mở ra bằng một lời giới thiệu.',
      dim: 'Khi hãm, quanh mình đông người mà mỏng tình: kẻ đến vì danh nghĩa và lợi ích, hết việc là hết thân. Dễ bị mượn tên tuổi để đứng mũi chịu sào, hoặc bị người dưới vâng mặt trái lòng — trước mặt gọi anh, sau lưng làm khác. Càng ở vị trí cao càng khó nghe được một câu thật.',
      advice: 'Hãy phân biệt rõ quan hệ giao tế và quan hệ tin cậy, và tuyệt đối không cho ai dùng danh nghĩa của mình khi chưa có văn bản.',
    },
    'Thiên Di': {
      bright: 'Đế tinh ở Thiên Di sáng là ra ngoài được trọng: đến chỗ lạ vẫn được xếp chỗ tử tế, dễ gặp quý nhân cấp cao và những cơ hội đến từ người có quyền. Người này phần nhiều lập nghiệp xa quê hoặc thành danh nhờ môi trường rộng, xuất ngoại, công tác nhiều nơi. Danh tiếng bên ngoài thường lớn hơn tiếng nói trong nhà.',
      dim: 'Hãm địa thì ra ngoài hay cao giọng không đúng lúc, dễ va chạm với người bản địa hoặc kẻ cũng muốn làm chủ. Danh nổi mà thực lợi mỏng — được mời ngồi bàn trên nhưng phần chia chẳng đáng, lại tốn kém giao tế. Đi xa nhiều mà trong lòng cô độc, ít nơi thật sự coi là chốn về.',
      advice: 'Khi đến môi trường mới, ba tháng đầu hãy giữ vai người quan sát và học lệ địa phương trước khi đưa ra bất kỳ đề xuất thay đổi nào.',
    },
    'Tật Ách': {
      bright: 'Tử Vi thuộc Thổ, sáng ở Tật Ách thì nguyên khí sung mãn, tỳ vị vững, ít bệnh nặng, có bệnh cũng hồi phục nhanh hơn người thường. Người này thường trông vào là thấy sắc khí tốt, chịu được cường độ làm việc dài, tai ách lớn hay có người hoặc thời cơ đỡ giúp. Càng giữ giờ ăn giờ ngủ đều đặn thì sức bền càng rõ.',
      dim: 'Khi hãm, cái vượng khí ấy chuyển thành bệnh của người phú quý: tỳ vị trệ, gan nhiễm mỡ, huyết áp và tim mạch do ăn uống thừa và tiệc tùng nhiều. Tính nóng ngầm, chuyện gì cũng nén vào trong nên dễ đau đầu, mất ngủ, tức vùng ngực. Lại hay chủ quan cho rằng mình còn khoẻ nên trì hoãn khám, đến lúc phát thì đã tích lâu.',
      advice: 'Hãy đặt lịch khám tổng quát và kiểm tra huyết áp, đường huyết, men gan mỗi năm một lần vào cùng một tháng cố định.',
    },
    'Tài Bạch': {
      bright: 'Tử Vi sáng tại Tài Bạch thì tiền đến theo vị thế: càng ngồi đúng chỗ chủ trì, càng có quyền quyết, tiền càng lớn. Người này quen làm việc tay to, thích những khoản đáng kể và bền, không hứng thú với đồng bạc lẻ; hợp làm chủ, làm quản lý ngân sách, hoặc ăn theo tổ chức lớn. Của cải thường lên theo bậc, mỗi lần thăng tiến là một lần đổi mức sống.',
      dim: 'Hãm địa thì thu lớn mà chi cũng lớn — tiêu theo thể diện, mời khách, xe cộ, quà cáp, cuối năm nhìn lại chẳng dư. Nguồn tiền lệ thuộc vào chức vị, rời cái ghế là dòng thu hụt ngay, nên hay bị động. Cũng dễ mất tiền vì ngại mặc cả, ngại đòi nợ, và vì tin người cùng đẳng cấp mà không kiểm tra sổ sách.',
      advice: 'Nên tách một tài khoản tích luỹ tự động trích ngay khi tiền vào, và xây thêm một nguồn thu không phụ thuộc chức vụ hiện tại.',
    },
    'Tử Tức': {
      bright: 'Đế tinh ở Tử Tức sáng thường báo con cái đoan chính, có chí khí, sớm biết tự trọng; con trưởng hoặc một người con nổi trội hẳn, về sau thành chỗ dựa cho cả nhà. Số con phần nhiều không nhiều nhưng "quý hơn đa" — nuôi kỹ, dạy nghiêm mà con nên người. Sức sáng tạo của bản thân cũng thiên về việc lớn, thích dựng nền móng cho người khác kế tục.',
      dim: 'Khi hãm, kỳ vọng của cha mẹ hoá thành áp lực: con phải giỏi, phải nở mặt, dẫn tới đứa con hoặc bật lại hoặc lặng lẽ xa cách. Con thường tự lập rất sớm và ít chia sẻ, lớn lên dễ ở xa, tình cảm kính nhiều hơn thân. Đường con cái cũng hay muộn hoặc ít con hơn mong đợi.',
      advice: 'Hãy bỏ chuyện thành tích ra khỏi vài buổi mỗi tuần và chỉ ngồi nghe con nói về những gì con thấy vui.',
    },
    'Phu Thê': {
      bright: 'Tử Vi sáng ở Phu Thê thì bạn đời có khí chất, dáng vẻ tề chỉnh, gia thế hoặc nghề nghiệp có vị thế, ra ngoài mình được nể vì có người bên cạnh. Hôn nhân nếu thuận thì bền, hai bên cùng giữ thể diện cho nhau và biết chừng mực trước mặt người ngoài. Phần nhiều lấy người hơn mình một mức nào đó — tuổi tác, kinh nghiệm hoặc địa vị.',
      dim: 'Hãm địa dễ gặp cảnh "hai đế một ngai": bạn đời cũng thích chủ trì, ai cũng muốn nói câu cuối, chuyện nhỏ thành hơn thua. Cuộc sống chung khi ấy trọng hình thức — vẫn đủ lễ nghĩa với bên ngoài mà trong nhà lạnh, ít lời âu yếm. Cũng thường gặp duyên muộn, hoặc lệch tuổi lệch cảnh khá xa nên phải học nhau lâu.',
      advice: 'Nên thống nhất trước ai quyết việc gì trong nhà — tiền, con, họ hàng — để khỏi tranh quyền giữa lúc đang cãi.',
    },
    'Huynh Đệ': {
      bright: 'Tử Vi sáng ở Huynh Đệ thì trong hàng anh chị em có người làm trụ cột được cả họ nhìn vào, và người ấy có thể chính là mình. Tình nghĩa giữ được nhờ có thứ bậc rõ, việc lớn của nhà thường bàn với nhau rồi mới quyết. Bạn thân phần nhiều là người đứng đắn, giúp nhau bằng uy tín và cơ hội hơn là bằng tiền.',
      dim: 'Khi hãm, anh chị em ai cũng muốn làm chủ nên hay chạm ngôi thứ, nhất là mỗi khi bàn đến chia phần hoặc lo cho cha mẹ. Bề ngoài vẫn đủ lễ mà bên trong so đo, việc nhà dễ thành cuộc phân xử. Khi mình cần nhờ thì phần nhiều phải tự lo, được giúp bằng lời nhiều hơn bằng tay.',
      advice: 'Việc chung của gia đình nên chia thành phần việc và mức góp cụ thể bằng văn bản, đừng để tình cảm quyết cái mà con số nên quyết.',
    },
  },
  // ══════════════════════════════════════════════════════════════
  // THIÊN CƠ — trí tuệ mưu lược, khéo tính toán, linh hoạt ứng biến,
  // ưa vận động, giỏi hoạch định. Động tinh, nghĩ nhiều hơn làm.
  // ══════════════════════════════════════════════════════════════
  ThienCo: {
    'Mệnh': {
      bright: 'Thiên Cơ là bánh xe của trời, đóng Mệnh sáng thì người này đầu óc nhanh nhạy khác thường, nghe một hiểu mười, gặp việc rối là lập tức thấy đường đi vòng. Học gì cũng vào nhanh, thích đọc, thích hỏi, tay chân không chịu ngồi yên; hợp làm tham mưu, hoạch định, phân tích hơn là làm người xông lên trước. Phần nhiều có nghề mưu sinh bằng cái đầu và giữ được nghề ấy suốt đời.',
      dim: 'Hãm địa thì trí tuệ chuyển thành đa mưu vô thành — kế hoạch nghĩ ra rất nhiều mà bắt tay làm thì đổi ý giữa đường. Người này dễ nghĩ quẩn, thần kinh căng, đêm nằm dựng đủ tình huống rồi sáng ra chẳng làm gì; hay tính hơn thua từng chút nên bị xem là khôn lỏi. Cũng thường thay việc, thay chỗ ở, thay hướng đi nhiều lần khiến công không tích được thành quả.',
      advice: 'Hãy đặt luật cho mình: mỗi phương án chỉ được nghĩ trong một tuần, hết hạn là phải chọn một và làm đủ ba tháng mới xét lại.',
    },
    'Phụ Mẫu': {
      bright: 'Thiên Cơ sáng ở Phụ Mẫu thường báo cha mẹ là người có học hoặc có nghề khéo, biết dạy con bằng lý lẽ hơn bằng roi vọt. Trong nhà hay bàn luận, con cái được tự do hỏi ngược nên sớm mở trí. Với cấp trên, người này dễ được dùng vào việc cần tính toán, hay được gọi hỏi ý kiến trước khi quyết.',
      dim: 'Khi hãm, cha mẹ hay thay đổi chủ ý, nay dặn thế này mai bảo thế khác, khiến con lớn lên thiếu điểm tựa chắc chắn. Cha mẹ cũng có thể vất vả xoay nghề, di chuyển nhiều nên con phải đổi trường, đổi chỗ. Quan hệ với bề trên dễ mỏi vì hay tranh luận đúng sai — mình có lý mà mất lòng.',
      advice: 'Khi thấy bề trên nói khác lần trước, hãy hỏi lại cho rõ và ghi thành một dòng xác nhận thay vì âm thầm làm theo phỏng đoán.',
    },
    'Phúc Đức': {
      bright: 'Thiên Cơ cư Phúc Đức mà sáng thì phúc phần nằm ở chỗ sáng suốt: hay tránh được tai vạ nhờ trực giác kịp thời, nhiều lần "may mà hôm đó không đi". Đời sống tinh thần phong phú, thích đọc sách nghĩa lý, ưa nghiên cứu dịch số, y học, triết học; nhờ đó già mà đầu vẫn minh mẫn. Dòng họ phần nhiều có người theo nghề thầy — dạy học, thuốc, lễ nghi.',
      dim: 'Hãm địa thì tâm không tĩnh: nghĩ nhiều thành lo nhiều, chuyện chưa tới đã mệt trước, hay giật mình và khó vào giấc. Phúc có mà bị chính cái đầu mình làm cho vơi — được điều tốt vẫn ngờ, được người giúp vẫn đoán ý. Cũng dễ sa vào việc xem đoán liên tục để tìm chỗ dựa, càng xem càng bất an.',
      advice: 'Hãy chọn một môn luyện thân tâm đều đặn như khí công, thiền hơi thở hay đi bộ dài, và dừng việc tra cứu vận hạn dày đặc.',
    },
    'Điền Trạch': {
      bright: 'Thiên Cơ sáng ở Điền Trạch thì nhà ở tuy không đồ sộ nhưng bố trí khéo, biết chọn nơi thuận đường, thuận sinh hoạt, mua bán đúng thời điểm. Người này có duyên với việc sửa sang cải tạo — nhà cũ qua tay thành ra khác, nhờ đó mà sinh lời. Có thể có nhiều lần đổi nhà nhưng mỗi lần đều lên một bậc.',
      dim: 'Khi hãm, gia trạch thành nơi tạm trú: dời đổi liên tục, ở thuê nhiều năm, hoặc nhà mua rồi bán chưa kịp yên. Cũng hay sửa vặt suốt ngày — chỗ này rò, chỗ kia đổi, tốn tiền lắt nhắt mà nhà chẳng hoàn chỉnh. Giấy tờ đất dễ dây dưa vì tin lời hứa và vì tính toán nước đôi lúc mua.',
      advice: 'Trước khi xuống tiền một bất động sản, hãy tự đặt thời hạn giữ tối thiểu năm năm và chỉ mua nếu vẫn thấy hợp lý với thời hạn đó.',
    },
    'Quan Lộc': {
      bright: 'Thiên Cơ sáng tại Quan Lộc là cách của người tham mưu giỏi: mạnh nhất khi ngồi cạnh người quyết, vạch đường và tính nước cho tổ chức. Hợp nghề kỹ thuật, tư vấn, nghiên cứu, kế hoạch, dữ liệu, cơ khí máy móc, vận tải; càng việc cần đầu óc phân tích càng phát. Người này thường có nhiều nghề trong tay, một nghề chính và vài nghề phụ nuôi nhau.',
      dim: 'Hãm địa thì công danh vất vả vì đổi hướng liên tục — mỗi hai ba năm lại thấy nghề cũ chật, bỏ đi làm mới, cuối cùng không dày ở đâu. Người này dễ giỏi bàn mà chậm chốt, nên bị đánh giá là lý thuyết; công lao hay bị người khác cầm về vì mình không đứng ra nhận. Cũng dễ mỏi vì việc nhiều đầu mối, phải chạy đi chạy lại nhiều nơi.',
      advice: 'Nên chọn một nghề trục và cắm sâu ít nhất năm năm, xem các mối quan tâm khác chỉ là nhánh phụ chứ không phải đường thoát.',
    },
    'Nô Bộc': {
      bright: 'Thiên Cơ sáng ở Nô Bộc thì bạn bè phần nhiều là người có nghề, có kiến thức, nói chuyện được nửa buổi vẫn thấy hay; nhờ họ mà mình mở mang và biết tin trước người khác. Cộng sự linh hoạt, hợp làm những việc cần bàn đi bàn lại rồi bung ra nhanh. Vòng quan hệ rộng theo bề ngang, mỗi giới một người quen.',
      dim: 'Khi hãm, quan hệ dễ nhạt và hay đổi lứa: hết một chặng việc là bạn cũng thay, ít người theo mình đường dài. Trong nhóm dễ có kẻ nói nhiều đoán ý, tin nhau bằng suy diễn nên sinh nghi kỵ, thị phi lan qua lời truyền miệng. Người dưới quyền hay lách việc, biết đường đi nước bước nên khó quản bằng luật lệ chung.',
      advice: 'Việc hợp tác nên chốt bằng văn bản ngắn ghi rõ phần việc, mốc thời gian và cách chia, đừng dựa vào những gì đã "hiểu ý nhau".',
    },
    'Thiên Di': {
      bright: 'Thiên Cơ vốn là động tinh, sáng ở Thiên Di thì càng đi càng phát: đi công tác, du học, làm việc xuyên vùng, buôn đường dài đều thuận. Người này ra ngoài rất nhạy — đến chỗ lạ vài hôm là nắm được lệ và tìm ra người cần gặp. Quý nhân bên ngoài thường là người có nghề, gặp trên đường hoặc qua công việc.',
      dim: 'Hãm địa thì đi nhiều mà tán, hành trình đổi lịch liên tục, chi phí phát sinh, đến nơi mới biết tin ban đầu không đúng. Ra ngoài hay dùng mẹo cho nhanh nên dễ hớ, gặp người lanh hơn mình; giấy tờ, hành lý, xe cộ nên cẩn thận. Đường xa cũng dễ mệt thần kinh, ngủ không ngon khi nằm chỗ lạ.',
      advice: 'Trước mỗi chuyến đi hoặc thương vụ ở xa, hãy xác minh thông tin từ hai nguồn độc lập và luôn giữ một khoản dự phòng đi lại.',
    },
    'Tật Ách': {
      bright: 'Thiên Cơ thuộc Mộc, sáng ở Tật Ách thì gân cốt dẻo, phản xạ nhanh, bệnh thường nhẹ và biết sớm nhờ nhạy với thay đổi trong người. Người này chịu khó tìm hiểu về sức khoẻ, hay tự đọc và điều chỉnh, nên nếu giữ nếp thì ít khi phải nhờ đến thuốc nặng. Vận động đều đặn là thứ đỡ cho lá số này nhiều nhất.',
      dim: 'Khi hãm, bệnh nghiêng về thần kinh và gan mật: mất ngủ, hay giật mình, đau đầu do suy nghĩ, dạ dày trào ngược vì căng thẳng, mắt mờ mỏi do dùng nhiều. Gân cốt hay mỏi, đau vai cổ và lưng do ngồi lâu và tư thế lệch; cũng nên cẩn thận với tai nạn khi di chuyển vì hay tranh thời gian. Lại có tật tự đoán bệnh rồi lo, càng lo càng nặng thêm phần cảm giác.',
      advice: 'Hãy đặt giờ ngủ cố định, cắt màn hình một tiếng trước khi lên giường, và mỗi ngày dành nửa giờ vận động dãn cơ vai cổ.',
    },
    'Tài Bạch': {
      bright: 'Thiên Cơ sáng ở Tài Bạch thì tiền vào bằng cái đầu: hoa hồng, tư vấn, môi giới, chênh lệch mua bán, nghề chuyên môn tính theo giờ. Người này nhạy với thời điểm, thấy sóng trước người khác và biết rút đúng lúc nếu giữ được kỷ luật. Thu nhập thường có nhiều nguồn nhỏ chảy về, cộng lại lại khá.',
      dim: 'Hãm địa thì tiền đến bằng mưu và đi cũng bằng mưu — hay xoay, hay đảo, được món này bù món kia nên khó tích thành khối. Người này dễ ham đánh nhanh, thử vận với những kênh biến động, thắng thì nhỏ mà thua thì gọn cả phần dành dụm. Cũng hay tính hơn kém từng đồng với người thân, mất tình mà chẳng lợi bao nhiêu.',
      advice: 'Hãy đặt ngưỡng cứng cho mọi khoản đầu cơ, không quá một phần mười tài sản, và chuyển phần còn lại vào kênh không cần mình theo dõi hằng ngày.',
    },
    'Tử Tức': {
      bright: 'Thiên Cơ sáng ở Tử Tức thường báo con cái thông minh lanh lợi, học nhanh, hay hỏi những câu người lớn phải nghĩ; có thể theo đường học vấn hoặc nghề kỹ thuật. Cha mẹ và con nói chuyện được với nhau như bạn, dạy bằng giải thích thì con nghe. Sức sáng tạo của bản thân dồi dào, thích nghĩ ra cái mới và cải tiến cái đang có.',
      dim: 'Khi hãm, con cái hiếu động khó ngồi yên, đổi ý nhanh, thích thì học rất giỏi mà không thích thì bỏ ngang; nuôi con phần nhiều tốn công theo sát. Đường con hay muộn hoặc lận đận đoạn đầu, có thể có chuyện thai kỳ phải cẩn thận, con nhỏ dễ bệnh về đường hô hấp và thần kinh. Bản thân cũng dễ dở dang những việc mình khởi ra, ý tưởng nhiều mà thành phẩm ít.',
      advice: 'Hãy cùng con chọn một hoạt động duy nhất và cam kết theo hết một năm học, để con học cách đi đến cuối một việc.',
    },
    'Phu Thê': {
      bright: 'Thiên Cơ sáng ở Phu Thê thì bạn đời thông minh, nói chuyện hợp ý, biết đường tính toán cho gia đình; hai người bàn nhau được từ tiền bạc tới chuyện dạy con. Bạn đời thường trẻ hơn tuổi thật, dáng người nhanh nhẹn, hay là người có nghề chuyên môn. Hôn nhân bền nhờ hiểu nhau bằng lý và biết nhường đúng lúc.',
      dim: 'Hãm địa thì tình duyên nhiều đoạn dò xét: gặp rồi thử, thử rồi thôi, đến khi thành lại đổi ý. Trong nhà hay tranh biện đúng sai, mỗi người giữ một cách nghĩ, chuyện nhỏ cũng phân tích thành lớn; lâu dần thành lạnh nhạt mà chẳng có xích mích to. Cũng dễ gặp cảnh xa cách vì công việc hai nơi, hoặc bạn đời hay đổi hướng nghề khiến gia cảnh chưa yên.',
      advice: 'Khi bất đồng, hãy dừng việc chứng minh ai đúng và thay bằng câu hỏi mỗi người cần gì, rồi chọn phương án cùng chịu được.',
    },
    'Huynh Đệ': {
      bright: 'Thiên Cơ sáng ở Huynh Đệ thì anh chị em có người khéo tay khéo nghề, bàn việc gì cũng ra đường; nhà đông ý kiến nhưng nhờ thế mà ít khi bế tắc. Tình cảm giữ được bằng chuyện trò thường xuyên hơn bằng lễ nghĩa hình thức. Bạn thân phần nhiều là người cùng nghề, gặp nhau vì hợp cách nghĩ.',
      dim: 'Khi hãm, anh chị em mỗi người một nơi, thay đổi công việc và chỗ ở luôn nên khó gần; liên lạc thưa dần theo năm tháng. Bàn chuyện chung dễ thành mỗi người một phương án, ai cũng có lý mà không ai chịu chốt, việc nhà vì thế cứ treo. Cũng nên giữ chừng chuyện vay mượn qua lại vì hay nhập nhằng, tính không rõ đầu đuôi.',
      advice: 'Nên lập một kênh liên lạc chung của anh chị em và ấn định mỗi tháng một lần bàn việc nhà, có ghi lại kết luận.',
    },
  },
  // ══════════════════════════════════════════════════════════════
  // THÁI DƯƠNG — dương khí hào phóng, quang minh chính đại, thích
  // cống hiến, toả sáng nơi công chúng. Ứng với CHA và người nam.
  // ══════════════════════════════════════════════════════════════
  ThaiDuong: {
    'Mệnh': {
      bright: 'Thái Dương là vầng mặt trời, đóng Mệnh sáng thì người này tính tình quang minh chính đại, nói thẳng, ghét chuyện ngấm ngầm, gặp việc bất bình là lên tiếng dù chẳng phải phần mình. Hào phóng đến mức cho đi trước khi tính mình còn gì; đứng trước đám đông không ngại, càng nhiều người càng có sức. Phần nhiều thành danh bằng việc phục vụ số đông — dạy học, truyền thông, đoàn thể, chính sự.',
      dim: 'Thái Dương lạc hãm là mặt trời lặn — vẫn muốn cho mà lực không đủ, làm nhiều mà tiếng thơm về người khác, hay chịu ơn nghĩa một chiều rồi tủi thân. Người này dễ nóng bộc phát rồi nguội ngay, nói năng lỡ lời làm mất lòng người thân; bên trong lại hay cảm thấy cô đơn giữa chỗ đông. Cũng thường vất vả nửa đời trước, lo cho người khác nhiều hơn lo cho mình.',
      advice: 'Trước khi nhận thêm việc giúp người, hãy tự hỏi phần sức và phần tiền mình còn lại có đủ cho gia đình mình trong tháng đó không.',
    },
    'Phụ Mẫu': {
      bright: 'Thái Dương ứng với cha; sáng ở Phụ Mẫu là điềm tốt nhất của cung này — cha khoẻ mạnh, có uy tín, tính rộng rãi, làm trụ cột cho cả họ. Người này được cha hoặc bậc trưởng nam trong nhà nâng đỡ rõ ràng, học được từ cha cái nghĩa khí và cách đối nhân. Với cấp trên cũng dễ gặp người quân tử, dùng người công bằng, sẵn sàng cất nhắc mình lên trước mặt đám đông.',
      dim: 'Thái Dương lạc hãm ở Phụ Mẫu thường báo duyên cha mỏng — cha có thể vất vả bươn bả, xa cách sớm vì công việc, hoặc sức khoẻ và mắt kém. Người này lớn lên thiếu bóng người đàn ông dẫn đường nên phải tự dò, sớm gánh việc thay cha. Quan hệ với bề trên dễ có khoảng cách, gặp cấp trên khắt khe hoặc chính mình nói thẳng quá nên khó được đề bạt trực tiếp.',
      advice: 'Hãy quan tâm sức khoẻ của cha một cách cụ thể — nhắc lịch khám mắt, tim mạch, huyết áp — và giữ liên lạc đều thay vì chờ dịp lớn.',
    },
    'Phúc Đức': {
      bright: 'Thái Dương sáng ở Phúc Đức là phúc của người biết cho: cả đời làm việc thiện lành mà không kể công, nên hay gặp lúc ngặt lại có người dưng ra tay. Tâm hồn quang đãng, ít giữ hận, ngủ được và nghĩ thoáng; dòng họ phần nhiều có tiếng thơm về đức độ hoặc có người làm nghề giúp đời. Càng lớn tuổi càng được kính, con cháu nhìn vào mà noi.',
      dim: 'Hãm địa thì phúc phần đến từ chỗ chịu đựng: hay nhận phần khó cho người khác được nhẹ, làm âm thầm mà chẳng ai biết, lâu dần sinh chạnh lòng. Tinh thần dễ mệt vì nghĩ mình sống thẳng mà đời không đền lại, có giai đoạn mất niềm tin vào lẽ công bằng. Cũng nên chú ý con mắt và giấc ngủ, vì Thái Dương hãm hay ứng vào hai chỗ ấy.',
      advice: 'Hãy chọn một việc thiện nhỏ làm đều đặn và có ghi lại, để lòng mình thấy rõ điều tốt vẫn đang tích chứ không mất đi.',
    },
    'Điền Trạch': {
      bright: 'Thái Dương sáng ở Điền Trạch thì nhà ở thoáng sáng, hướng đón nắng, tầng cao hoặc ban công rộng, ở vào là thấy khoẻ người. Gia trạch phần nhiều yên ổn, cửa nhà hay có khách, người trong nhà ra ngoài đều được kính. Tài sản đứng tên có thể do người nam trong nhà — cha, chồng, con trai — góp phần lớn.',
      dim: 'Hãm địa thì nhà thiếu ánh sáng, ẩm hoặc bị che chắn, ở lâu sinh mỏi mệt uể oải; cũng dễ ở nơi ồn, sát đường lớn. Gia sản hay tốn vào việc lo cho người khác — anh em, họ hàng, việc nghĩa — nên tích được ít. Nhà cửa có thể sang tên hoặc bán đi để chu toàn việc chung, hoặc ở nhà cha mẹ lâu hơn dự tính.',
      advice: 'Khi chọn chỗ ở, hãy xem hướng nắng và độ thoáng trước tiên, và tránh những nơi phải bật đèn cả ngày.',
    },
    'Quan Lộc': {
      bright: 'Thái Dương sáng ở Quan Lộc là đúng đất dụng võ — nghề nào càng công khai, càng phục vụ nhiều người thì càng phát: giáo dục, truyền thông, y tế công, đoàn thể, chính sự, ngoại giao. Người này làm việc rõ ràng, không ăn của ai, nên được tin và được giao phần đối ngoại, phần nói trước công chúng. Danh thường đến trước lợi, nhưng có danh rồi thì lợi theo sau.',
      dim: 'Hãm địa thì làm nhiều hưởng ít: gánh phần nặng cho tập thể mà công lao chia đều, hoặc người khác đứng nhận thay. Tính nói thẳng khi ấy dễ thành cái cớ để bị gạt ra khỏi những cuộc bàn quan trọng; công danh vì thế lên chậm, phải qua vài lần đổi chỗ mới gặp nơi trọng mình. Cũng dễ kiệt sức vì việc nghĩa vụ nhiều hơn việc có thù lao.',
      advice: 'Hãy ghi lại kết quả công việc của mình bằng số liệu và mốc thời gian, để phần đóng góp không phụ thuộc vào việc ai nói hộ.',
    },
    'Nô Bộc': {
      bright: 'Thái Dương sáng ở Nô Bộc thì bạn bè nghĩa khí, gặp lúc mình khó là có người xắn tay, phần nhiều là bạn nam hoặc người lớn tuổi hơn. Mình cũng là chỗ dựa của nhóm, hay được nhờ đứng ra dàn xếp vì tính công bằng. Vòng quan hệ rộng và sạch, ít vướng chuyện bè phái.',
      dim: 'Khi hãm, mình cho nhiều hơn nhận: bạn bè tìm đến lúc cần, xong việc thì thưa; giúp người rồi lại nghe tiếng không hay. Dễ vướng chuyện bảo lãnh, đứng tên, cho vay vì nể nghĩa khí, rồi tự mình mang lấy phần thiệt. Người dưới quyền có thể phụ lòng đúng lúc mình đặt niềm tin nhất.',
      advice: 'Hãy đặt một hạn mức giúp đỡ mỗi năm mà mình mất cũng không ảnh hưởng gia đình, và tuyệt đối không đứng tên hay bảo lãnh vay hộ ai.',
    },
    'Thiên Di': {
      bright: 'Thái Dương sáng ở Thiên Di thì ra ngoài là toả sáng: đi xa gặp quý nhân, làm việc nơi công cộng được người ta thương, danh tiếng bên ngoài rất tốt. Người này hợp xuất ngoại, làm việc với người nước ngoài, hoặc lập nghiệp ở phương xa — nhất là phương Nam và những nơi nhiều nắng. Càng bước ra khỏi nhà càng có cơ hội.',
      dim: 'Hãm địa thì ra ngoài hay bôn ba mà thu về chẳng tương xứng, đi nhiều nắng gió, thân vất vả; dễ gặp cảnh làm hết sức cho nơi khác rồi trở về tay trắng. Nói thẳng nơi lạ dễ thành mất lòng người, có khi vì một câu mà mất một mối. Cũng nên cẩn thận mắt, da và say nắng khi đi lại nhiều giữa trưa.',
      advice: 'Khi làm việc ở nơi mới, hãy để kết quả nói trước và giữ ý kiến phê bình lại cho lúc được hỏi riêng.',
    },
    'Tật Ách': {
      bright: 'Thái Dương thuộc Hoả, sáng ở Tật Ách thì khí huyết lưu thông tốt, người ấm, ít bệnh hàn, tinh thần hăng hái nên bệnh đến cũng đẩy đi nhanh. Người này thích vận động ngoài trời, phơi nắng sớm là khoẻ ra; mắt sáng, tim mạch bền nếu giữ nếp ăn ngủ. Tai ách phần nhiều hoá giải được nhờ tính rộng rãi, hay có người giúp.',
      dim: 'Khi hãm, ứng vào mắt và tim trước hết: mắt mờ, nhức, khô, loạn thị hoặc bệnh võng mạc; tim đập nhanh, huyết áp cao, dễ hoa mắt chóng mặt. Người này hay nóng trong, khô miệng, bốc hoả, đầu đau vùng thái dương khi căng thẳng, lại chủ quan làm quá sức không chịu nghỉ. Với nam giới hoặc người nam trong nhà, cung này hãm cũng nhắc phải để ý sức khoẻ hơn.',
      advice: 'Hãy khám mắt và đo huyết áp định kỳ mỗi năm, đồng thời cắt bớt việc thức khuya làm bù vốn là gốc của cả hai chứng ấy.',
    },
    'Tài Bạch': {
      bright: 'Thái Dương sáng ở Tài Bạch thì tiền đến từ danh và từ việc phục vụ nhiều người — càng có tiếng, càng đông người biết thì thu càng lên. Người này kiếm tiền quang minh, không thích đường tắt, nên tiền vào sạch và ít hậu hoạn. Tiêu cũng rộng tay, hay bao bọc người khác, nhưng phần nhiều vẫn đủ và có dư khi trung niên.',
      dim: 'Hãm địa thì tiền qua tay mà không đọng: làm được đồng nào lo cho người ấy, cha mẹ, anh em, bạn bè đều tìm đến mình. Người này ngại nói chuyện tiền, ngại đòi, ngại mặc cả, nên hay bị nợ dây dưa và làm không lấy đủ công. Cũng dễ mất tiền vì cả tin nghĩa khí, ai kể khổ là mềm lòng.',
      advice: 'Hãy tự đặt giá công việc thành bảng rõ ràng và thu trước một phần, đừng để chuyện thanh toán phụ thuộc vào tình cảm.',
    },
    'Tử Tức': {
      bright: 'Thái Dương sáng ở Tử Tức thường báo có con trai hoặc một người con tính rộng rãi, học giỏi, sớm ra ngoài xã hội và có tiếng. Con hiếu, hay lo cho cha mẹ trước mặt người ngoài, về sau thành chỗ dựa. Sức sáng tạo của bản thân thiên về việc mở đường cho người khác — dạy, dẫn dắt, truyền lại nghề.',
      dim: 'Khi hãm, con cái vất vả hơn cha mẹ mong: hoặc con trai muộn, hoặc con hay đi xa nên ít lúc bên nhau, hoặc con nóng tính khó dạy bằng lời nhẹ. Cha mẹ dễ hy sinh quá mức cho con rồi mong đền đáp, sinh ra buồn lòng khi con chưa hiểu. Cũng nên để ý mắt và sức đề kháng của con lúc nhỏ.',
      advice: 'Hãy nói rõ với con điều mình cần thay vì lặng lẽ hy sinh rồi chờ con tự đoán ra.',
    },
    'Phu Thê': {
      bright: 'Thái Dương sáng ở Phu Thê thì bạn đời tính rộng rãi, thẳng thắn, ra ngoài được người ta trọng; với nữ mệnh đây là điềm gặp chồng có chí và có nghĩa. Hai người sống với nhau minh bạch, ít giấu nhau chuyện tiền và chuyện người, nên bền. Bạn đời thường lo phần đối ngoại của gia đình, mình được nhờ tiếng của người ấy.',
      dim: 'Hãm địa thì bạn đời vất vả, đi làm xa hoặc mải việc bên ngoài, trong nhà thưa bóng; tình nghĩa vẫn có mà thời gian bên nhau ít. Cũng dễ gặp cảnh người ấy nóng nảy, nói to rồi thôi, còn mình mang lời ấy nghĩ lâu. Với nữ mệnh, Thái Dương hãm ở đây nhắc duyên chồng có phần muộn hoặc phải qua một lần dở dang mới yên.',
      advice: 'Hãy giữ một buổi cố định mỗi tuần chỉ dành cho hai người, không bàn việc làm và không có mặt người thứ ba.',
    },
    'Huynh Đệ': {
      bright: 'Thái Dương sáng ở Huynh Đệ thì trong nhà có người anh hoặc em trai đàng hoàng, tính khí rộng rãi, gánh việc chung không tính toán. Anh chị em thương nhau thật, hoạn nạn có nhau, và mình cũng sẵn lòng cho đi trước. Bạn thân phần nhiều là bạn nam, quen từ thuở đi học hoặc cùng nghề, giữ được nhiều năm.',
      dim: 'Khi hãm, anh chị em vất vả hoặc ở xa, mỗi người một gánh nên khó đỡ nhau; cũng có thể sớm mất một người trong hàng hoặc có người sức khoẻ kém. Mình thường là người ra tay lo việc chung, gánh phần cha mẹ, mà ít khi được ghi công. Chuyện tiền bạc qua lại giữa anh em dễ khiến tình nghĩa nặng nề.',
      advice: 'Hãy chia phần lo cho cha mẹ thành mức góp cụ thể theo khả năng từng người và nói ra sớm, đừng âm thầm gánh rồi oán.',
    },
  },
  // ══════════════════════════════════════════════════════════════
  // VŨ KHÚC — tài tinh, ý chí cương nghị, tài quản trị tiền bạc,
  // hành động quả quyết. Kim khí, nói ít làm nhiều, hơi khắc.
  // ══════════════════════════════════════════════════════════════
  VuKhuc: {
    'Mệnh': {
      bright: 'Vũ Khúc là tài tinh thuộc Kim, đóng Mệnh sáng thì người này xương thịt rắn rỏi, giọng dứt khoát, làm việc gì cũng có đầu có cuối và rất giữ chữ tín. Nói ít làm nhiều, không thích vòng vo, đưa ra quyết định nhanh và ít khi ngoảnh lại hối tiếc; tiền bạc trong tay được quản chặt từ sớm. Phần nhiều tự lập nghiệp bằng nghề thật, tay làm ra của, càng gian nan càng cứng.',
      dim: 'Hãm địa thì cái cương nghị hoá thành cương ngạnh — khô khan, ít lời ngọt, ai nói trái ý là đóng cửa lòng; người thân hay thấy khó gần dù mình vẫn lo cho họ đủ. Người này dễ chấp và nhớ lâu, việc gì cũng muốn tự tay nên gánh nặng quá sức; tiền có mà tiếc, sống dưới mức mình đáng được hưởng. Cũng hay va chạm với người khác vì thẳng đến mức sắc.',
      advice: 'Hãy tập nói rõ ý tốt của mình thành lời trước khi hành động, vì người thân cần nghe chứ không chỉ cần thấy.',
    },
    'Phụ Mẫu': {
      bright: 'Vũ Khúc sáng ở Phụ Mẫu thường báo cha mẹ là người làm ăn giỏi hoặc có nghề chắc tay, nghiêm nhưng công bằng, dạy con bằng nếp kỷ luật và bằng cách bắt tay vào việc. Người này thừa hưởng được cái vốn thực — nghề, tiền, hoặc thói quen làm việc; đi làm dễ gặp cấp trên thực dụng, ai làm được thì trọng. Của cải trong nhà phần nhiều do cha mẹ gây dựng vững chứ không nhờ may.',
      dim: 'Khi hãm, cha mẹ nghiêm đến mức lạnh, ít khen, hay lấy chuyện tiền và thành tích làm thước đo tình cảm. Người này lớn lên biết tự lo rất sớm nhưng thiếu chỗ dựa mềm, có chuyện cũng không quen kể với cha mẹ. Với cấp trên dễ gặp người khắt khe, chỉ đo bằng con số, và mối quan hệ chỉ có công việc chứ khó có tình.',
      advice: 'Hãy chủ động về nhà làm cùng cha mẹ một việc cụ thể — sửa nhà, đi khám, dọn dẹp — vì đó là cách người này hiểu chữ thương.',
    },
    'Phúc Đức': {
      bright: 'Vũ Khúc sáng ở Phúc Đức thì phúc phần đến từ sự chắc chắn: đời ít khi rơi vào chỗ trắng tay vì luôn có phần để lại, và cái nghề cái vốn giữ mình qua những đoạn khó. Tinh thần người này vững, không dễ hoang mang, đã tin điều gì thì theo đến cùng; càng lớn tuổi càng an vì của cải và nề nếp đã sẵn. Dòng họ thường có người làm ăn giỏi, để lại nếp cần kiệm.',
      dim: 'Hãm địa thì tâm hay nặng vì tiền: đủ rồi vẫn lo thiếu, có của mà không dám dùng, tự đóng khung mình trong bổn phận. Người này ít khi cho phép mình nghỉ, coi hưởng thụ là phù phiếm, nên đời được phần vật chất mà nhẹ phần thanh thản. Cũng dễ khô cạn về mặt tinh thần, ít bạn tâm giao và ít lúc nào thấy vui thuần khiết.',
      advice: 'Hãy dành riêng một khoản mỗi tháng chỉ để tiêu cho niềm vui của mình và coi việc dùng hết nó là một bổn phận.',
    },
    'Điền Trạch': {
      bright: 'Vũ Khúc sáng ở Điền Trạch là điềm rất tốt cho tài sản cố định: nhà đất mua bằng tiền thật, giấy tờ chắc chắn, càng giữ càng lên giá. Người này có tay chọn bất động sản có giá trị bền — vị trí thực dụng, hạ tầng tốt, cho thuê được ngay; nhà cửa gọn gàng, bền, ít hỏng hóc. Phần nhiều đứng tên nhiều hơn một nơi khi vào trung vận.',
      dim: 'Hãm địa thì tài sản có mà nặng nợ: mua bằng vay, tháng nào cũng lo kỳ trả, ở trong nhà mình mà lòng không thoải mái. Người này tiếc tiền sửa sang nên nhà bền mà thiếu ấm áp, khô cứng, ít hơi người. Cũng có thể vướng chuyện tranh chấp hoặc phải bán một nơi để cứu một việc, đoạn ấy khá xót.',
      advice: 'Hãy giữ tỷ lệ vay dưới một nửa giá trị bất động sản và luôn có sẵn khoản trả nợ cho sáu tháng tới.',
    },
    'Quan Lộc': {
      bright: 'Vũ Khúc sáng ở Quan Lộc thì tiến thân bằng nghề thật và bằng thành tích đo được: tài chính, ngân hàng, kế toán, kỹ nghệ, xây dựng, quân đội – công an, hoặc tự làm chủ một cơ sở. Người này chịu được việc nặng, đứng mũi chịu sào, giao gì làm nấy đến cùng nên cấp trên rất yên tâm. Đường công danh lên chậm mà chắc, mỗi bước đứng vững rồi mới bước tiếp.',
      dim: 'Hãm địa thì làm hùng hục mà lên chậm: giỏi việc nhưng không giỏi trình bày, nên phần công hay thuộc về người nói hay hơn. Tính thẳng và cứng khiến hay đối đầu với đồng sự, có khi vì một lần không nhịn mà mất cả cơ hội đã gần tay. Cũng dễ chọn việc quá sức mình vì tự tin vào sức bền, rồi kiệt lực giữa chặng.',
      advice: 'Hãy học cách tóm gọn thành quả của mình trong ba câu và nói ra ở đúng cuộc họp, xem đó là một phần của công việc.',
    },
    'Nô Bộc': {
      bright: 'Vũ Khúc sáng ở Nô Bộc thì bạn bè cộng sự là người làm được việc, có vốn có nghề, hứa là giữ; hợp tác với họ ít khi phải lo phần trách nhiệm. Mình cũng là người giữ cam kết nên được tin trong chuyện tiền bạc, hay được nhờ quản quỹ chung. Người dưới quyền phục vì thấy chủ mình sòng phẳng, làm nhiều trả nhiều.',
      dim: 'Khi hãm, quan hệ nặng phần lợi ích: được thì bên nhau, hết lợi thì thôi, ít ai đến vì tình. Tính khô và thẳng của mình dễ làm bạn xa, có người ngại tìm đến khi khó vì sợ bị nói. Cũng dễ vướng nợ nần với người quen, cho vay rồi thành ra vừa mất tiền vừa mất bạn.',
      advice: 'Trong hợp tác, hãy tách rạch ròi phần vốn, phần công và cách rút, ghi thành văn bản ngay từ buổi bàn đầu tiên.',
    },
    'Thiên Di': {
      bright: 'Vũ Khúc sáng ở Thiên Di thì ra ngoài kiếm được của: đi buôn, làm ăn nơi xa, làm việc trong ngành kim khí máy móc hoặc tài chính ở thị trường lớn đều thuận. Người này ra ngoài rất gan, dám xuống tiền khi thấy đáng, quyết nhanh nên bắt được cơ hội. Quý nhân bên ngoài thường là người có tiền hoặc có quyền, giúp bằng vốn và bằng đơn hàng thật.',
      dim: 'Hãm địa thì bôn ba mà tốn: đi xa nhiều, thân vất vả, có khi va chạm hoặc tranh chấp tiền bạc ở nơi lạ. Tính cứng khi ra ngoài dễ thành ngang, không chịu lệ địa phương nên mất mối; cũng nên cẩn thận với dao kim khí, xe cộ và máy móc khi đi lại. Được món lớn thì cũng dễ mất món lớn vì quyết nhanh mà thiếu người can.',
      advice: 'Với mọi thương vụ ở xa, hãy đặt hạn mức tối đa được phép mất và tự cấm mình vượt qua nó dù cơ hội trông có hấp dẫn thế nào.',
    },
    'Tật Ách': {
      bright: 'Vũ Khúc thuộc Kim, sáng ở Tật Ách thì thể chất rắn chắc, sức bền tốt, ít bệnh vặt, chịu được lao động nặng và làm việc dài ngày không ngã. Người này thường có nếp sinh hoạt kỷ luật, ăn ngủ đúng giờ nên bệnh khó vào; có bệnh cũng chịu điều trị đến cùng theo đúng chỉ dẫn. Càng luyện tập có bài bản thì lá số này càng được lợi.',
      dim: 'Khi hãm, ứng vào phế – khí đạo và răng, mũi, xương khớp: ho lâu ngày, viêm mũi xoang, khô họng, đau lưng đau khớp, răng yếu sớm. Người này hay nén cảm xúc nên khí ngực bức, thở không sâu, dễ đau vai và cứng cổ; lại chủ quan cho rằng mình khoẻ nên làm quá sức tới lúc gãy mới nghỉ. Cũng nên cẩn thận thương tích do kim khí, dao, máy móc và tai nạn giao thông.',
      advice: 'Hãy khám hô hấp và cột sống định kỳ, luyện thở sâu mỗi ngày, và tuyệt đối không làm việc nặng khi đã thấy đau.',
    },
    'Tài Bạch': {
      bright: 'Vũ Khúc là tài tinh, đóng Tài Bạch sáng là sao về đúng nhà — tiền vào bằng nghề, bằng công việc thật, đều đặn và có thể tính trước. Người này quản tiền rất chắc: biết giá, biết cắt lỗ, không tiêu theo cảm xúc, tiền vào là có chỗ đi rõ ràng. Hợp tài chính, kinh doanh hàng thực, kim khí, xây dựng, cho thuê; trung vận trở đi phần nhiều có của để dành đáng kể.',
      dim: 'Hãm địa thì kiếm tiền bằng sức và bằng va chạm: được đồng nào cũng phải đổ mồ hôi, hoặc phải cạnh tranh tranh giành mới có. Người này khi ấy dễ quá tiết kiệm thành khắc kỷ, tiếc từng đồng mà mất mối lớn; hoặc ngược lại quyết nhanh một cú lớn rồi mất khoản dành dụm bao năm. Cũng hay vướng nợ, đứng tên vay, hoặc bị chôn vốn trong hàng hoá và tài sản khó bán.',
      advice: 'Hãy giữ nguyên tắc mỗi khoản đầu tư lớn phải qua một đêm suy nghĩ và một người ngoài phản biện trước khi chuyển tiền.',
    },
    'Tử Tức': {
      bright: 'Vũ Khúc sáng ở Tử Tức thường báo con cái cứng cỏi, tự lập sớm, biết giá trị đồng tiền và không hư; con có nghề chắc tay, về sau lo được cho mình. Số con phần nhiều không đông nhưng đứa nào cũng đứng được trên chân mình. Sức sáng tạo của bản thân thiên về làm ra sản phẩm cụ thể, làm được thì bán được.',
      dim: 'Khi hãm, quan hệ với con hơi khô: dạy con bằng luật và bằng tiền, ít lời khen nên con vâng mà không gần. Con có thể tính nóng, cứng đầu, hoặc đường con muộn, hiếm, phải nhờ can thiệp; nuôi con tốn kém về vật chất mà mình vẫn cảm thấy chưa đủ. Sáng tạo của bản thân cũng dễ bị bó vì quá xét nét chi phí, ý hay mà không dám thử.',
      advice: 'Hãy dành mỗi tuần một buổi chơi cùng con không dính đến học hành hay tiền bạc, để con nhớ mặt mềm của mình.',
    },
    'Phu Thê': {
      bright: 'Vũ Khúc sáng ở Phu Thê thì bạn đời là người thật thà, có nghề, tay hòm chìa khoá chắc chắn, cùng mình xây dựng từ ít lên nhiều. Hôn nhân bền vì cả hai coi trọng trách nhiệm hơn lời hoa mỹ, nói là làm, ít khi bỏ nhau lúc khó. Của cải trong nhà thường lên rõ sau khi cưới.',
      dim: 'Hãm địa thì hôn nhân thiếu chất mềm: hai người lo làm, lo tiền, ít khi ngồi nói chuyện tình cảm, lâu dần thành hai người cùng nhà mà xa lòng. Người này hoặc bạn đời hay giữ ý trong bụng, đến khi nói ra là nói nặng; cũng dễ tranh nhau chuyện quản tiền. Duyên có phần muộn hoặc phải qua một đoạn xa cách vì công việc mới định.',
      advice: 'Hãy thống nhất một quỹ chung minh bạch và một khoản riêng cho mỗi người, rồi giữ thói quen mỗi tối kể nhau một chuyện không liên quan tới tiền.',
    },
    'Huynh Đệ': {
      bright: 'Vũ Khúc sáng ở Huynh Đệ thì anh chị em có người làm ăn được, tính sòng phẳng, khi cần thì góp vốn góp sức thật chứ không chỉ nói. Nhà giữ được hoà khí nhờ chuyện tiền bạc rõ ràng từ đầu, ai phần nào biết phần ấy. Bạn thân phần nhiều là người cùng làm ăn, hợp nhau ở chỗ giữ chữ tín.',
      dim: 'Khi hãm, anh chị em dễ chạm nhau vì tiền: chuyện chia tài sản, chuyện vay mượn, chuyện lo cho cha mẹ đều thành đề tài nhạy cảm. Tính cứng của mỗi người khiến một lần cãi là lạnh nhau nhiều năm, không ai chịu mở lời trước. Nhờ vả cũng khó, phần nhiều phải tự lo và tự chịu.',
      advice: 'Mọi khoản tiền qua lại giữa anh chị em nên có giấy nhận và mốc trả cụ thể, coi đó là cách giữ tình chứ không phải thiếu tin nhau.',
    },
  },
  // ══════════════════════════════════════════════════════════════
  // THIÊN ĐỒNG — phúc tinh, tâm hồn an nhiên phúc hậu, lạc quan
  // biết hưởng thụ, dễ được che chở — nhưng dễ an phận, thiếu tranh đấu.
  // ══════════════════════════════════════════════════════════════
  ThienDong: {
    'Mệnh': {
      bright: 'Thiên Đồng là phúc tinh, đóng Mệnh sáng thì người này mặt mũi phúc hậu, da dẻ mịn, nét trẻ hơn tuổi, tính ôn hoà đến mức ai gặp cũng thấy dễ chịu. Không tranh giành mà phần vẫn tới, gặp việc khó thường có người dưng ra đỡ, cả đời ít khi lâm vào cảnh cùng đường. Biết hưởng thụ đúng nghĩa — ăn ngon, ngủ được, chơi được, và giữ cho lòng mình nhẹ.',
      dim: 'Hãm địa thì phúc tinh hoá thành người an phận: thấy khó là rút, thấy phải tranh là nhường, nên tài năng có mà chẳng mài đến sáng. Người này dễ trì hoãn, việc gì cũng để mai, sống theo thói quen và tránh mọi thứ gây căng thẳng; lâu dần thân hình phát ra ngoài mà chí khí thu vào trong. Cũng dễ mềm lòng nghe theo người khác, để rồi cả đời làm theo sắp xếp của người thân.',
      advice: 'Hãy chọn một mục tiêu khó có thời hạn rõ ràng trong năm nay và nói cho một người khác biết để họ nhắc mình đi tới cuối.',
    },
    'Phụ Mẫu': {
      bright: 'Thiên Đồng sáng ở Phụ Mẫu là điềm rất lành: cha mẹ tính hiền hoà, thương con theo cách nhẹ nhàng, nhà ít tiếng lớn nên tuổi thơ êm ả. Người này được che chở, ít bị đòn roi, lớn lên vẫn giữ được nét tin người vì chưa từng bị nhà mình làm cho chai. Với cấp trên cũng dễ gặp người dễ tính, sẵn sàng bao dung lỗi nhỏ và tạo môi trường thoải mái.',
      dim: 'Khi hãm, cái hiền hoá thành nuông: cha mẹ bao bọc quá, làm hộ cả những việc con nên tự làm, nên con lớn mà chưa quen chịu trách nhiệm. Cũng có thể cha mẹ dễ dãi đến mức thiếu định hướng, con muốn gì cũng được nên không biết chọn đường. Với cấp trên thì gặp người thiếu quyết đoán, chỗ làm êm mà không dạy được cho mình nghề.',
      advice: 'Hãy tự nhận lấy một việc lớn của gia đình và làm trọn từ đầu đến cuối, thay vì để cha mẹ đứng ra lo hộ.',
    },
    'Phúc Đức': {
      bright: 'Thiên Đồng là phúc tinh, đóng Phúc Đức là sao về đúng nhà — đây là một trong những cách hưởng phúc đẹp nhất của lá số. Người này tâm nhẹ, ít oán ai, ngủ được và ít bệnh do lo; hoạn nạn thường được hoá giải bằng cách nào đó mà chính mình cũng không giải thích nổi. Phần nhiều sống thọ, tuổi già thanh nhàn, con cháu quây quần, âm đức dòng họ dày.',
      dim: 'Hãm địa thì phúc mỏng đi và hoá thành sự dễ dãi với chính mình: biết điều gì tốt mà không làm, biết điều gì hại mà không dứt. Người này dễ mượn hưởng thụ để tránh đối diện — ăn nhiều, ngủ nhiều, vui nhất thời rồi trống rỗng. Có giai đoạn cảm thấy đời cứ trôi mà mình không nắm được gì, không khổ hẳn nhưng cũng chẳng thoả.',
      advice: 'Hãy giữ một nếp lành mỗi ngày dù chỉ mười lăm phút — tập, tụng, viết, đi bộ — và không cho phép mình đổi nó lấy sự tiện nghi.',
    },
    'Điền Trạch': {
      bright: 'Thiên Đồng sáng ở Điền Trạch thì nhà cửa ấm áp dễ ở, không cần lớn mà vào là thấy dễ chịu; hay có sân, có cây, có chỗ ngồi uống nước. Gia trạch yên, người trong nhà ít cãi, khách đến chơi thấy vui nên hay lui tới. Của cải nhà đất phần nhiều đến một cách nhẹ nhàng — được cho, được thừa hưởng, hoặc mua đúng lúc giá còn nhẹ.',
      dim: 'Hãm địa thì nhà tiện mà không tiến: ở mãi một chỗ vì quen, biết nên đổi mà không dứt ra được, cơ hội nhà đất qua tay nhiều lần. Người này dễ chi vào tiện nghi và bày biện cho vui mắt hơn là vào phần giá trị lâu dài. Nhà cũng dễ thành nơi tụ tập ăn uống, vui nhưng tốn và ít khi thật sự tĩnh.',
      advice: 'Hãy đặt một mốc thời gian cụ thể cho việc nâng cấp hoặc chuyển chỗ ở và bắt đầu bằng việc đi xem thật, thay vì chỉ bàn.',
    },
    'Quan Lộc': {
      bright: 'Thiên Đồng sáng ở Quan Lộc thì hợp những nghề mang lại niềm vui cho người khác: dịch vụ, ẩm thực, du lịch, giải trí, phúc lợi, chăm sóc, thiết kế không gian. Người này làm việc trong không khí hoà ái thì phát huy nhất, đồng nghiệp thích cộng tác vì mình dễ chịu và không tranh công. Công danh lên êm, ít sóng gió, phần nhiều nhờ được người nâng chứ không nhờ chen.',
      dim: 'Hãm địa thì sự nghiệp bình bình: an với chỗ đang có, tránh việc khó và tránh cả cơ hội đi kèm rủi ro, nên năm này giống năm trước. Người này dễ bị người khác giao phần việc dễ rồi bị bỏ lại phía sau khi tổ chức đổi mới. Cũng hay đổi việc vì thấy chỗ cũ mệt hơn là vì thấy chỗ mới hay, nên mỗi lần đổi không lên được bậc.',
      advice: 'Hãy nhận một việc vượt khả năng hiện tại mỗi năm và xin người giỏi hơn kèm mình làm cho xong.',
    },
    'Nô Bộc': {
      bright: 'Thiên Đồng sáng ở Nô Bộc thì bạn bè đông và dễ mến, tụ họp vui vẻ, ai cũng thích có mình trong nhóm vì mình không gây căng thẳng. Khi khó thì hay có người đứng ra giúp mà chẳng cần mình phải xin. Người dưới quyền phục vì thấy chủ mình biết thương và không hà khắc.',
      dim: 'Khi hãm, bạn bè phần nhiều là bạn chơi: hợp lúc vui, hết vui thì thôi, việc nghiêm chẳng ai gánh cùng. Mình lại nể nang không dám từ chối nên hay bị rủ rê vào những cuộc tốn tiền tốn thời gian. Trong công việc, sự dễ dãi ấy khiến người dưới lơi kỷ luật, việc chậm mà mình cũng không dám nói nặng.',
      advice: 'Hãy tập nói không với những cuộc hẹn thuần vui trong tuần làm việc và đặt ra vài mốc kỷ luật rõ ràng với người dưới quyền.',
    },
    'Thiên Di': {
      bright: 'Thiên Đồng sáng ở Thiên Di thì ra ngoài được người thương: đi đâu cũng có kẻ chỉ đường, có người mời ăn, gặp chuyện thì có người gỡ. Người này hợp du lịch, xuất ngoại nghỉ dưỡng, làm việc trong ngành phục vụ khách; đi xa thường trở về với nhiều hơn lúc đi. Quý nhân bên ngoài đến rất tự nhiên, không cần cầu.',
      dim: 'Hãm địa thì ra ngoài chỉ để vui: chi vào ăn uống, chơi, tiện nghi, về nhà thấy chuyến đi hết mà chẳng đọng lại gì. Người này lười xoay chuyển nên hay bỏ mất cơ hội ở phương xa, cứ chần chừ đến khi người khác đi trước. Cũng dễ bị người lạ dẫn dắt vì tin nhanh và không thích tra hỏi cho rõ.',
      advice: 'Mỗi chuyến đi hãy đặt trước một việc phải làm xong ngoài chuyện nghỉ ngơi, dù chỉ là gặp một người hoặc xem một chỗ làm ăn.',
    },
    'Tật Ách': {
      bright: 'Thiên Đồng là phúc tinh, sáng ở Tật Ách thì tai ách nhẹ, bệnh đến rồi đi, mổ xẻ hiểm nghèo hiếm gặp và thường có người thầy giỏi đúng lúc. Người này tinh thần thoải mái nên ít bệnh do stress, ăn ngủ được, sức đề kháng khá. Đây là cung mà Thiên Đồng che chở rõ nhất trong cả lá số.',
      dim: 'Khi hãm, bệnh của người an nhàn hiện ra: thừa cân, gan nhiễm mỡ, đường huyết cao, mỡ máu, phù nhẹ ở chân, thận – bàng quang trệ vì Thiên Đồng thuộc Thuỷ. Người này ưa ngồi, ưa ngọt, không thích vận động mạnh nên bệnh tích dần rất êm rồi một ngày phát ra bằng con số xét nghiệm. Cũng dễ chần chừ điều trị vì thấy chưa đau lắm.',
      advice: 'Hãy cắt đồ ngọt và nước có ga xuống mức tối thiểu, và đi bộ nhanh ba mươi phút mỗi ngày như một lịch không được huỷ.',
    },
    'Tài Bạch': {
      bright: 'Thiên Đồng sáng ở Tài Bạch thì tiền đến nhẹ nhàng, ít phải giành giật: có nghề nhàn mà thu đủ, hoặc được lộc bất ngờ, được cho, được chia. Người này tiêu tiền biết cách, đồng tiền bỏ ra thường đổi lại được niềm vui thật cho mình và người thân. Cả đời ít khi túng ngặt, cần đến đâu thường vừa đủ đến đó.',
      dim: 'Hãm địa thì tiền vào đủ tiêu mà không đủ dành: kiếm được là hưởng liền, thấy vui thì chi, cuối tháng nhìn lại chẳng hiểu tiền đi đâu. Người này thiếu động lực làm giàu nên hay bỏ qua cơ hội cần cố sức, an với mức thu nhập hiện tại nhiều năm. Cũng dễ mềm lòng cho vay hoặc chi hộ, rồi ngại đòi nên coi như mất.',
      advice: 'Hãy đặt lệnh tự động chuyển một phần thu nhập vào tài khoản tiết kiệm ngay ngày nhận tiền, trước khi kịp tiêu.',
    },
    'Tử Tức': {
      bright: 'Thiên Đồng sáng ở Tử Tức thường báo con cái ngoan, tính hiền, dễ nuôi, ít làm cha mẹ phải khổ tâm; nhà có tiếng cười trẻ con. Quan hệ cha mẹ – con thân mật như bạn, con lớn vẫn thích về nhà. Sức sáng tạo của bản thân thiên về những thứ mang lại niềm vui — ẩm thực, nghệ thuật ứng dụng, không gian, nội dung nhẹ nhàng.',
      dim: 'Khi hãm, con dễ nuôi mà cũng dễ nhàn: được che chở nhiều nên thiếu tính tự lập, lớn rồi vẫn dựa cha mẹ về tiền và về quyết định. Cha mẹ khó nghiêm với con, biết cần rắn mà không làm được nên nếp học của con lỏng. Cũng có thể đường con muộn, hoặc con nhỏ hay bệnh về đường tiêu hoá và tiết niệu.',
      advice: 'Hãy giao cho con một phần việc nhà và một khoản tiền tự quản theo tuần, rồi để con tự chịu hậu quả nếu làm chưa tốt.',
    },
    'Phu Thê': {
      bright: 'Thiên Đồng sáng ở Phu Thê thì bạn đời tính dịu, dễ chịu, nét mặt phúc hậu và trẻ hơn tuổi; hai người sống với nhau êm, ít cãi vã lớn. Đây là một trong những cách hôn nhân an lành: biết nhường nhau, biết cùng nhau hưởng những vui nho nhỏ, càng già càng thuận. Bạn đời thường mang lại cho mình cảm giác được che chở.',
      dim: 'Hãm địa thì êm quá thành nhạt: cả hai tránh xung đột nên chuyện cần nói cứ để đó, tình cảm phẳng lặng mà thiếu gắn kết thật. Bạn đời hoặc chính mình dễ an phận, thiếu chí tiến thủ, gia cảnh vì thế mãi ở một mức. Cũng dễ gặp cảnh mềm lòng với người thứ ba vì không quen từ chối sự dịu ngọt.',
      advice: 'Mỗi tháng hãy dành một buổi cùng nhau nói thẳng những điều chưa hài lòng, coi đó là việc bảo dưỡng chứ không phải gây sự.',
    },
    'Huynh Đệ': {
      bright: 'Thiên Đồng sáng ở Huynh Đệ thì anh chị em hoà thuận, thương nhau kiểu nhẹ nhàng, ít khi tranh giành; nhà có việc là tự khắc tụ về. Mình hay là người làm dịu không khí giữa các bên. Bạn thân phần nhiều là người tính hiền, giữ nhau được rất lâu mà chẳng cần liên lạc liên tục.',
      dim: 'Khi hãm, anh chị em hoà mà lỏng: ai cũng dễ tính nên việc chung không ai đứng ra, cứ chờ nhau rồi để đó. Có người trong hàng an phận, đến tuổi vẫn nhờ cha mẹ hoặc nhờ anh em; mình lại nể nang nên gánh hộ mà không nói. Chuyện tiền bạc qua lại dễ nhập nhằng vì cả nhà đều ngại làm rõ.',
      advice: 'Hãy đề nghị chỉ định một người chịu trách nhiệm cho mỗi việc chung của nhà và ghi rõ ai làm gì, thay vì để cả nhà cùng "chờ xem".',
    },
  },
  // ══════════════════════════════════════════════════════════════
  // LIÊM TRINH — "tù tinh", cá tính mạnh và nguyên tắc, đào hoa ngầm,
  // khả năng bứt phá cải cách — dễ vướng pháp lý và tình cảm phức tạp.
  // ══════════════════════════════════════════════════════════════
  LiemTrinh: {
    'Mệnh': {
      bright: 'Liêm Trinh đóng Mệnh sáng thì người này mắt sắc, sống mũi cao, khí chất lạnh mà hút, đứng đâu cũng có người để ý. Sống theo nguyên tắc riêng rất chặt, đã cho là đúng thì không lung lay, dám đứng ra sửa cái sai dù phải va chạm; đây là cách của người cải cách. Sức hấp dẫn thuộc loại ngầm — không đùa vui ồn ào mà vẫn khiến người khác muốn gần.',
      dim: 'Liêm Trinh là "tù tinh", hãm địa thì cái nguyên tắc hoá thành cố chấp khắc nghiệt: khắt khe với mình rồi khắt khe luôn với người, không tha lỗi. Người này dễ vướng chuyện kiện tụng, giấy tờ, ràng buộc hợp đồng, hoặc tự đưa mình vào những cam kết khó thoát. Đường tình cảm phức tạp vì đào hoa ngầm — thu hút người mà lòng lại lạnh, dễ dây dưa nhiều mối cùng lúc.',
      advice: 'Trước khi ký hay cam kết bất cứ điều gì có ràng buộc lâu dài, hãy để một người ngoài đọc lại giúp và ngủ qua một đêm.',
    },
    'Phụ Mẫu': {
      bright: 'Liêm Trinh sáng ở Phụ Mẫu thường báo cha mẹ là người có nguyên tắc, sống thanh liêm, dạy con phân biệt phải trái rất rõ; nếp nhà nghiêm mà chính. Người này thừa hưởng cái cốt cách không chịu khuất, và học từ cha mẹ tinh thần dám sửa. Với cấp trên dễ gặp người công minh, ai làm sai thì trị, ai làm được thì dùng, nên mình có đất phát triển.',
      dim: 'Khi hãm, sự nghiêm thành sự nghiệt: cha mẹ hay phê phán, lấy chuẩn của mình đo con, khiến con lớn lên tự thấy chưa bao giờ đủ. Quan hệ với bề trên dễ căng — mình có lý mà nói ra là đối đầu, có khi vì một lần va chạm mà mất chỗ. Cũng nên lưu tâm chuyện giấy tờ, thừa kế, ràng buộc pháp lý liên quan tới cha mẹ vì cung này hãm thường dây dưa.',
      advice: 'Với bề trên, hãy chọn trình bày bằng dữ liệu và đề xuất phương án thay vì chỉ ra chỗ họ sai.',
    },
    'Phúc Đức': {
      bright: 'Liêm Trinh sáng ở Phúc Đức thì phúc phần đến từ chỗ giữ mình: cả đời không làm điều trái lương tâm nên lòng vững, đêm nằm không sợ ai gõ cửa. Người này có chiều sâu tinh thần, thích những gì cốt lõi, hay theo một môn tu tập hoặc một nghệ thuật khắt khe và đi rất xa trong đó. Dòng họ phần nhiều có người làm nghề nghiêm cẩn — hành pháp, y thuật, giáo dục.',
      dim: 'Hãm địa thì tâm hay tự xử mình: đòi hỏi bản thân quá mức, sai một chút cũng dằn vặt lâu, ít khi cho phép mình nhẹ. Người này dễ mang cảm giác cô độc bên trong dù bên ngoài đầy người, và có giai đoạn day dứt vì những chuyện tình cảm hoặc lựa chọn cũ. Cũng nên giữ mình khỏi những vui thú dễ thành ràng buộc, vì tù tinh hãm hay ứng vào chỗ đó.',
      advice: 'Hãy học cách xin lỗi rồi kết lại một việc cũ và không nhắc lại, thay vì mang nó ra tự xử mỗi lần buồn.',
    },
    'Điền Trạch': {
      bright: 'Liêm Trinh sáng ở Điền Trạch thì nhà cửa sạch sẽ, gọn, có phong cách rõ ràng, ít đồ mà cái nào cũng chọn kỹ. Người này chuộng giấy tờ minh bạch, mua bán đúng luật nên tài sản đứng tên rất chắc, hiếm khi bị vướng. Nhà có thể liên quan tới cải tạo — mua cái cũ sửa lại thành ra khác và được giá.',
      dim: 'Hãm địa thì gia trạch dễ vướng pháp lý: đất tranh chấp, giấy tờ chưa hoàn công, quy hoạch treo, hoặc thừa kế chưa xong đã ở. Trong nhà không khí lạnh, nghiêm quá thành khô, người trong nhà giữ ý với nhau. Cũng dễ tốn tiền vào việc sửa để đúng chuẩn của mình, sửa mãi mà vẫn chưa vừa mắt.',
      advice: 'Hãy kiểm tra pháp lý và quy hoạch của bất động sản qua cơ quan chức năng trước khi đặt cọc, không tin bản photo nào.',
    },
    'Quan Lộc': {
      bright: 'Liêm Trinh sáng ở Quan Lộc là cách của người làm nghề cần sự chính xác và gan: hành pháp, kiểm toán, thanh tra, y tế, kỹ thuật chính xác, hoặc vai trò cải tổ trong doanh nghiệp. Người này dám nhận việc người khác né, dám cắt cái sai nên tạo được dấu ấn rõ; thăng tiến thường đến sau một lần dám làm khó. Càng ở môi trường có luật lệ nghiêm càng đúng đất.',
      dim: 'Hãm địa thì đường công danh nhiều va chạm: giữ nguyên tắc cứng nên bị xem là khó hợp tác, có khi vì một lần không chịu nhượng mà mất cơ hội. Cũng dễ vướng chuyện kỷ luật, hợp đồng, kiện tụng liên quan đến công việc, hoặc bị đặt vào vị trí phải chịu trách nhiệm cho lỗi người khác. Nghề nghiệp có thể phải thay đổi hẳn hướng ở khoảng giữa đời.',
      advice: 'Hãy lưu lại bằng chứng và biên bản cho mọi quyết định quan trọng mình tham gia, và không nhận trách nhiệm bằng miệng.',
    },
    'Nô Bộc': {
      bright: 'Liêm Trinh sáng ở Nô Bộc thì bạn bè ít mà chọn lọc, phần nhiều là người có nghề nghiêm cẩn, đã kết thì rất bền và dám nói thật với nhau. Trong nhóm mình là người giữ chuẩn, ai lệch là mình chỉnh, nên tuy không được lòng tất cả nhưng được tin. Người dưới quyền phục vì thấy chủ mình công bằng, không thiên vị ai.',
      dim: 'Khi hãm, quan hệ dễ thành nghiệt: bạn bè sợ hơn mến, một lần thất vọng là mình cắt hẳn và không quay lại. Cũng dễ vướng người quen vào chuyện tiền bạc có giấy tờ, rồi thành đối tụng; hoặc bị người trong nhóm gài vào những việc có rủi ro pháp lý. Đào hoa ngầm cũng khiến quan hệ bạn bè và tình cảm dễ chồng lấn, sinh thị phi.',
      advice: 'Đừng để quan hệ cá nhân và ràng buộc pháp lý đi cùng nhau — nếu đã có hợp đồng thì hãy tách phần tình cảm ra khỏi bàn làm việc.',
    },
    'Thiên Di': {
      bright: 'Liêm Trinh sáng ở Thiên Di thì ra ngoài được nể vì bản lĩnh: đến chỗ lạ vẫn giữ được thế, không bị lấn, làm việc với người nước ngoài hoặc trong môi trường luật lệ chặt rất thuận. Người này hợp lập nghiệp phương xa và những việc cần đứng ra thay đổi cục diện. Quý nhân bên ngoài thường là người có địa vị và nghiêm khắc, giúp mình bằng cách đặt vào việc khó.',
      dim: 'Hãm địa thì ra ngoài dễ va: tranh chấp với người bản địa, vướng thủ tục, giấy tờ xuất nhập, hoặc bị giữ lại vì quy định. Tính không chịu nhượng khi ở nơi lạ dễ thành mất lợi và mất mối; cũng nên cẩn thận chuyện tình cảm phát sinh khi đi xa vì đào hoa ngầm dễ khởi ở cung này. Đi lại nên chú ý an toàn, tránh nơi phức tạp về đêm.',
      advice: 'Khi ra ngoài, hãy làm đủ giấy tờ theo đúng quy định địa phương và giữ bản sao ở hai nơi khác nhau.',
    },
    'Tật Ách': {
      bright: 'Liêm Trinh sáng ở Tật Ách thì cơ thể có sức chịu đựng cao, ý chí giữ nếp mạnh nên đã quyết bỏ thói xấu là bỏ được thật. Người này chịu điều trị đến cùng, tuân thủ y lệnh nghiêm nên bệnh có cũng khống chế tốt. Thể trạng thường gọn, ít mỡ, dáng bền nếu duy trì luyện tập.',
      dim: 'Khi hãm, bệnh nghiêng về khí huyết và những chỗ cần mổ: huyết áp, tim, kinh nguyệt bất thường với nữ, sỏi, viêm, và những ca phải can thiệp bằng dao. Người này nén cảm xúc rất sâu nên hay đau đầu, đau ngực, khó ngủ, và các bệnh liên quan đến tự làm khổ mình. Cũng nên cẩn thận thương tích do kim khí, tai nạn và những kỳ hạn phẫu thuật ở tuổi trung niên.',
      advice: 'Hãy tìm một chỗ để trút cảm xúc — người bạn, nhật ký hay chuyên gia — thay vì nén, và không hoãn lịch mổ khi bác sĩ đã chỉ định.',
    },
    'Tài Bạch': {
      bright: 'Liêm Trinh sáng ở Tài Bạch thì tiền vào bằng nghề chuyên sâu và bằng sự minh bạch: sổ sách rõ ràng, thuế phí đầy đủ nên tiền vào là ở lại. Người này biết cắt lỗ dứt khoát, không tiếc của bỏ đi khi thấy sai, nhờ đó tránh được nhiều cái mất lớn. Hợp nghề đòi tay nghề cao, hoặc làm quản lý phần kiểm soát và tuân thủ.',
      dim: 'Hãm địa thì tiền bạc hay dính ràng buộc: hợp đồng bất lợi, nợ có thế chấp, tiền bị phong toả hoặc phải chờ phán quyết mới lấy được. Người này khắt khe trong chi tiêu đến mức tự làm khó, hoặc ngược lại chi rất mạnh cho những thứ thoả cái tôi thẩm mỹ. Cũng dễ mất tiền vì chuyện tình cảm và vì đứng ra chịu trách nhiệm thay người khác.',
      advice: 'Hãy đọc kỹ điều khoản phạt và điều kiện rút vốn của mọi hợp đồng tài chính trước khi ký, và không ký hộ ai bao giờ.',
    },
    'Tử Tức': {
      bright: 'Liêm Trinh sáng ở Tử Tức thường báo con cái cứng cỏi, có chính kiến từ nhỏ, học được thì học rất sâu; con dễ theo nghề cần kỷ luật cao. Cha mẹ dạy con bằng nguyên tắc nhất quán nên con biết đâu là giới hạn và giữ được mình. Sức sáng tạo của bản thân thiên về làm tinh và làm khác — chuộng chất lượng hơn số lượng.',
      dim: 'Khi hãm, đường con cái không thuận: hoặc muộn, hoặc hiếm, hoặc phải nhờ can thiệp y khoa; cũng có thể có chuyện thai kỳ cần theo dõi sát. Quan hệ cha mẹ – con dễ căng vì cả hai đều cứng, con lớn lên phản ứng lại kỷ luật quá chặt. Cha mẹ hay chê nhiều hơn khen nên con giỏi mà thiếu tự tin.',
      advice: 'Hãy đặt ra rất ít nguyên tắc nhưng giữ tuyệt đối, và với những chuyện ngoài số đó thì để con tự quyết.',
    },
    'Phu Thê': {
      bright: 'Liêm Trinh sáng ở Phu Thê thì bạn đời có cá tính, sắc nét, có nghề và có chuẩn mực riêng; hai người tôn trọng nhau vì cùng giữ nguyên tắc. Hôn nhân bền theo kiểu cùng nhìn về một hướng, ít lời ngọt mà nhiều điều làm được. Bạn đời thường là người dám bảo vệ mình trước bên ngoài.',
      dim: 'Hãm địa thì tình duyên nhiều đoạn phức tạp: đào hoa ngầm khiến duyên đến sớm và đến nhiều, nhưng khó dứt khoát nên hay chồng lấn. Hôn nhân dễ có ràng buộc pháp lý nặng — giấy tờ, tài sản chung, thủ tục — và khi rạn thì rất khó gỡ êm. Hai bên đều cứng, một lần nói nặng là lạnh nhau rất lâu, tình còn mà không ai chịu bước xuống trước.',
      advice: 'Hãy dứt điểm rõ ràng một quan hệ trước khi bắt đầu quan hệ tiếp theo, và minh bạch phần tài sản riêng ngay từ trước khi cưới.',
    },
    'Huynh Đệ': {
      bright: 'Liêm Trinh sáng ở Huynh Đệ thì anh chị em có người bản lĩnh, sống nguyên tắc, khi cần thì đứng ra bảo vệ cả nhà không sợ ai. Tình nghĩa giữ được nhờ mọi việc nói rõ ràng từ đầu, ai sai thì nhận. Bạn thân ít mà chất, phần nhiều là người mình từng cùng trải qua chuyện khó.',
      dim: 'Khi hãm, anh chị em dễ chạm nhau vì mỗi người một nguyên tắc, một lần cãi là dứt liên lạc nhiều năm. Chuyện chia tài sản, thừa kế trong nhà có thể phải nhờ đến giấy tờ hoặc pháp luật mới xong, và đoạn ấy khá tổn hại tình. Nhờ vả cũng khó vì ai cũng giữ khoảng cách để khỏi mắc nợ nhau.',
      advice: 'Việc thừa kế và tài sản chung của nhà hãy làm thành văn bản có công chứng khi cha mẹ còn minh mẫn, để sau này không phải phân xử.',
    },
  },
  // ══════════════════════════════════════════════════════════════
  // THIÊN PHỦ — kho tàng của trời, Nam Đẩu chi chủ. Vững chãi, tài
  // tích luỹ, bao dung, biết giữ của — nhưng bảo thủ, thiếu đột phá.
  // ══════════════════════════════════════════════════════════════
  ThienPhu: {
    'Mệnh': {
      bright: 'Thiên Phủ là kho tàng của trời, đóng Mệnh sáng thì người này người đầy đặn, dáng ung dung, nói năng chừng mực, ngồi đâu cũng thành chỗ để người khác dựa vào. Tính bao dung, không ưa tranh, việc gì cũng tính đường lui trước nên hiếm khi rơi vào cảnh mất trắng; của cải lên đều đặn theo năm tháng. Đây là cách của người giữ nhà, giữ nghiệp — có thì giữ được, mất thì gây lại được.',
      dim: 'Hãm địa thì cái vững hoá thành thủ cựu: bám lấy cái đang có, thấy thay đổi là ngại, nên cơ hội lớn thường lướt qua tay. Người này dễ tính toán an toàn quá mức, cân nhắc mãi rồi để người khác đi trước; bên ngoài hoà nhã mà bên trong giữ ý, ít bộc bạch. Cũng có xu hướng nói dễ nghe cho êm chuyện, lâu dần bị xem là khéo mà thiếu thật lòng.',
      advice: 'Mỗi năm hãy tự buộc mình làm một việc chưa từng làm và đặt hạn chốt cụ thể, vì lá số này chỉ thiếu bước đầu tiên.',
    },
    'Phụ Mẫu': {
      bright: 'Thiên Phủ sáng ở Phụ Mẫu là điềm nhà có nền: cha mẹ đôn hậu, biết lo xa, gia đình có của để dành nên tuổi thơ không thiếu thốn. Người này được thừa hưởng cả nếp cần kiệm và phần vốn thật, đi làm cũng dễ gặp cấp trên độ lượng, bao che lỗi nhỏ và giữ mình lâu dài. Chữ phúc ở đây là được che chở bằng sự vững chắc.',
      dim: 'Khi hãm, cha mẹ giữ của quá chặt hoặc bảo thủ trong cách nghĩ, muốn con đi đúng con đường mình đã vạch. Người này lớn lên trong khuôn, muốn thử cái mới thì phải thuyết phục rất lâu, có khi phải tự làm rồi mới nói. Với cấp trên thì gặp người an toàn chủ nghĩa, chỗ làm ổn định mà chậm, khó có bước nhảy.',
      advice: 'Hãy trình bày với bề trên bằng kế hoạch có tính toán rủi ro và phần lùi rõ ràng, đó là cách duy nhất người bảo thủ chịu nghe.',
    },
    'Phúc Đức': {
      bright: 'Thiên Phủ sáng ở Phúc Đức thì phúc dày và bền: đời có nền để dựa, ít khi lâm cảnh trắng tay, hoạn nạn cũng có của và có người đỡ. Tâm người này rộng, không giữ hận lâu, biết đủ nên ngủ được và sống thọ; tuổi già phần nhiều đầy đủ, con cháu có nơi để về. Dòng họ thường có nếp tích thiện tích của, để lại phần cho đời sau.',
      dim: 'Hãm địa thì phúc có mà lòng vẫn chưa yên: đủ rồi vẫn lo mất, càng có càng thêm việc phải giữ, thành ra cả đời canh kho. Người này ngại thay đổi nên sống theo lối cũ đến mức đời trôi mà không có gì mới; niềm vui phần nhiều đến từ sự yên ổn hơn là từ trải nghiệm. Cũng dễ mang tâm bận vì trách nhiệm với cả họ, ai cũng nhìn vào mình.',
      advice: 'Hãy tự cho phép mình mỗi năm một chuyến đi hoặc một việc học mới hoàn toàn không nhằm mục đích sinh lợi.',
    },
    'Điền Trạch': {
      bright: 'Thiên Phủ ở Điền Trạch sáng là kho gặp nhà — điềm rất tốt cho tài sản cố định: nhà đất phần nhiều có, có sớm, và giữ được lâu. Người này biết chọn nơi bền giá, mua rồi ít khi phải bán, càng để càng lời; nhà cửa đầy đặn, kho chứa gọn gàng, trong nhà lúc nào cũng có phần dự trữ. Có duyên thừa hưởng nhà tổ hoặc được cho phần đất.',
      dim: 'Hãm địa thì giữ mà không sinh: đất để đó nhiều năm không khai thác, nhà rộng mà chỉ chứa đồ cũ, tiền chôn trong tài sản khó bán. Người này tiếc nên không dám sửa, không dám đổi, đến khi thị trường thay đổi thì mất lợi thế. Cũng dễ vướng chuyện đứng tên hộ trong họ vì bao dung, sau này gỡ ra rất mệt.',
      advice: 'Hãy xem lại từng tài sản đang nắm và quyết dứt khoát cho mỗi cái: khai thác, cho thuê, hay bán đi, đừng để nguyên vì tiếc.',
    },
    'Quan Lộc': {
      bright: 'Thiên Phủ sáng ở Quan Lộc thì tiến thân trong tổ chức bằng sự tin cậy: hợp tài chính, kế toán, quản trị, hành chính, kho vận, bất động sản, hoặc vai trò trông giữ nguồn lực. Người này được giao phần quản lý vì ai cũng thấy để tiền trong tay mình là an tâm; con đường lên đều, ít gãy, càng lâu càng có tiếng. Làm chủ thì bền nhờ tính toán chắc và biết chừa đường.',
      dim: 'Hãm địa thì công danh êm mà chậm: giữ ghế giỏi hơn giành ghế, chờ đến lượt hơn là tạo ra lượt, nên người vào sau có thể vượt lên trước. Người này ngại đổi việc dù thấy nơi cũ chật, và ngại nhận việc mới vì sợ mất phần đang chắc. Cũng dễ bị xem là an toàn quá, không dám ký những quyết định cần gan.',
      advice: 'Hãy nhận lấy một dự án mới trong nội bộ và tự đứng tên chịu trách nhiệm, để thoát khỏi vai người chỉ giữ.',
    },
    'Nô Bộc': {
      bright: 'Thiên Phủ sáng ở Nô Bộc thì bạn bè cộng sự là người đứng đắn, có nền, chơi lâu dài chứ không nhất thời; khi mình khó thì họ giúp bằng cái thật. Mình bao dung nên trong nhóm ai cũng thoải mái, hay được chọn làm người giữ quỹ và phân xử. Người dưới quyền gắn bó lâu vì thấy chủ mình biết lo cho người.',
      dim: 'Khi hãm, quanh mình nhiều người dựa vào: ai thiếu cũng tìm tới, mình lại khó từ chối nên thành cái kho cho người khác moi. Bạn bè hoà nhã mà giữ khoảng cách, ít ai nói thật vì mình cũng không nói thật; quan hệ đủ mà thiếu chiều sâu. Người dưới quyền dễ ỷ vào sự dễ tính, kỷ luật lỏng mà mình không làm rắn được.',
      advice: 'Hãy có sẵn một câu từ chối lịch sự dùng cho mọi lời nhờ vay tiền, và dùng đúng câu đó mọi lần.',
    },
    'Thiên Di': {
      bright: 'Thiên Phủ sáng ở Thiên Di thì ra ngoài được đón tiếp tử tế: đến đâu cũng có chỗ ăn chỗ ở đàng hoàng, gặp người có nền giúp mình, ít khi phải chịu cảnh bơ vơ. Người này đi xa mà vẫn chắc chân, biết tính đường về nên hiếm gặp rủi ro lớn. Hợp làm ăn ở nơi có thị trường đã định hình hơn là nơi mới mở.',
      dim: 'Hãm địa thì ngại ra khỏi vùng quen: cơ hội ở xa có mà cân nhắc mãi không đi, cuối cùng đứng nhìn người khác lấy. Khi phải đi thì mang theo cả cách làm cũ, không chịu theo lệ mới nên chậm hoà nhập và mất phần. Cũng dễ tốn kém trên đường vì lo dự phòng quá nhiều thứ không dùng đến.',
      advice: 'Với cơ hội ở xa, hãy đặt hạn ba tuần để tự khảo sát rồi quyết, đừng để việc cân nhắc kéo dài thành câu trả lời không.',
    },
    'Tật Ách': {
      bright: 'Thiên Phủ thuộc Thổ, sáng ở Tật Ách thì tỳ vị vững, ăn được ngủ được, bệnh khó vào và tai ách thường nhẹ hơn dự đoán. Người này có sức dự trữ tốt, làm dài hơi không kiệt, có bệnh cũng hồi phục êm nhờ nền thể trạng dày. Càng giữ nếp ăn đúng giờ, ăn vừa phải thì càng bền.',
      dim: 'Khi hãm, sinh bệnh của kho ứ: đầy bụng, khó tiêu, tăng cân, gan nhiễm mỡ, mỡ máu, đường huyết cao, phù nề và trì trệ khí huyết. Người này ưa tĩnh, ít vận động, thích ăn no nên bệnh tích rất từ tốn rồi phát cùng lúc nhiều chỉ số. Lại có tính chịu đựng, thấy chưa nặng thì không đi khám, nên thường phát hiện muộn hơn cần thiết.',
      advice: 'Hãy giảm khẩu phần một phần ba và đi bộ sau mỗi bữa tối, đồng thời xét nghiệm mỡ máu và đường huyết mỗi năm một lần.',
    },
    'Tài Bạch': {
      bright: 'Thiên Phủ là kho tàng của trời, đóng Tài Bạch là sao về đúng nhà — tiền vào thì ở lại, ít khi thất thoát. Người này thường có tài giữ của hơn tài kiếm bạo, biết tích luỹ đều đặn và hiếm khi túng thiếu; nhìn vào sổ chi tiêu là thấy nếp. Hợp nghề tài chính, quản trị ngân sách, bất động sản, kho vận và những việc trông giữ của cải cho người khác.',
      dim: 'Hãm địa thì kho có mà cửa hẹp: tiền vào đều nhưng chậm, mãi ở một mức, vì không dám đặt cược vào cơ hội cần chút gan. Người này dễ quá tiết kiệm thành khắc khổ, tiếc cả những khoản đáng bỏ ra để mở đường; hoặc chôn hết vốn vào tài sản nằm im nên khi cần tiền mặt thì bí. Cũng hay bị người thân mượn dài hạn vì biết mình có, mà mình không nỡ đòi.',
      advice: 'Hãy chia tài sản thành ba phần rõ ràng — tiền mặt sống được sáu tháng, phần giữ giá, và một phần nhỏ chấp nhận rủi ro để sinh lời.',
    },
    'Tử Tức': {
      bright: 'Thiên Phủ sáng ở Tử Tức thường báo con cái đông đủ, tính đôn hậu, biết lo và biết giữ; con lớn lên là chỗ dựa vững cho cha mẹ. Nhà có nền nên con được học hành đầy đủ, ít phải bươn bả sớm. Sức sáng tạo của bản thân thiên về xây nền và bồi đắp — làm cái gì cũng tính để dùng được lâu.',
      dim: 'Khi hãm, cha mẹ lo cho con quá đủ nên con thiếu động lực: có sẵn thì hưởng, chưa quen tự gây dựng. Quan hệ hoà mà giữ ý, con ngoan mà không nói thật lòng với cha mẹ những chuyện lớn. Cha mẹ cũng dễ áp cách nghĩ cũ lên con, muốn con chọn nghề an toàn, khiến con vừa vâng vừa không thoả.',
      advice: 'Hãy để con tự lo một phần chi phí và tự chịu một quyết định lớn của đời nó, dù mình thấy chưa an tâm.',
    },
    'Phu Thê': {
      bright: 'Thiên Phủ sáng ở Phu Thê thì bạn đời đôn hậu, biết tính toán cho gia đình, tay hòm chìa khoá rất chắc; sau khi cưới thì của cải trong nhà lên rõ. Hôn nhân bền vì cả hai chuộng sự yên ổn và không ai muốn đập đổ; sống với nhau càng lâu càng thấy hợp. Bạn đời thường là người có nền — gia cảnh, nghề nghiệp hoặc tính cách vững.',
      dim: 'Hãm địa thì hôn nhân yên mà nguội: hai người giữ hoà khí bằng cách không nói chuyện khó, lâu dần thành hai người cùng quản một cái nhà. Bạn đời có thể giữ tiền rất chặt hoặc bảo thủ trong nếp sống, khiến mình muốn thay đổi gì cũng phải thuyết phục lâu. Cũng dễ gặp duyên do người sắp xếp hoặc lấy vì thấy hợp lý hơn là vì thấy rung động.',
      advice: 'Hãy hẹn nhau mỗi tháng một lần cùng làm điều gì hai người chưa từng làm, để hôn nhân có thêm cái mới ngoài cái ổn.',
    },
    'Huynh Đệ': {
      bright: 'Thiên Phủ sáng ở Huynh Đệ thì anh chị em đông hoặc có người làm nền cho cả nhà, tính bao dung nên hoà thuận lâu dài. Việc chung của nhà thường có người đứng ra lo phần vật chất, ai thiếu thì được đỡ, tình nghĩa giữ được qua nhiều năm. Bạn thân phần nhiều là người điềm đạm, quen lâu và tin nhau về tiền bạc.',
      dim: 'Khi hãm, mình thành cái kho của cả họ: ai cần cũng tìm tới, giúp mãi thành lệ, đến khi mình khó thì chẳng biết gọi ai. Anh chị em hoà nhã mà giữ ý, chuyện chia phần thì cả nhà đều ngại nói nên treo mãi không dứt. Cũng dễ đứng tên hoặc góp vốn vì tình, về sau muốn rút ra rất khó.',
      advice: 'Hãy đặt một mức giúp anh chị em mỗi năm và nói rõ mức đó ra, để lòng bao dung có bờ mà không thành gánh.',
    },
  },
};
