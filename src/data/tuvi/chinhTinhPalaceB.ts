import { PalaceReading } from './chinhTinhPalaceA';

// Luận giải 7 chính tinh (nhóm B) theo từng cung trong 12 cung
// bright: khi sao Miếu/Vượng/Đắc — dim: khi sao Bình/Hãm
export const CHINH_TINH_PALACE_B: Record<string, Record<string, PalaceReading>> = {
  ThaiAm: {
    'Mệnh': {
      bright: 'Thái Âm là vầng trăng sáng giữa trời đêm, đóng Mệnh thì hình dung thanh tú, da sáng, giọng nhỏ nhẹ mà có sức thuyết phục riêng. Người này thường thông minh theo lối trực giác, cảm được ý người trước khi người mở lời, lại sẵn óc thẩm mỹ nên ưa cái tinh sạch gọn gàng. Tính tích trữ âm thầm là nét đáng giá nhất: không ồn ào tranh giành nhưng mỗi năm mỗi dày thêm, càng hậu vận càng phong hậu.',
      dim: 'Thái Âm hãm ví như trăng bị mây che, ánh sáng còn đó mà không tỏ — người dễ đa sầu đa cảm, đêm về hay nghĩ ngợi những chuyện đã qua. Phần nhiều thiếu quyết đoán, việc đáng nói thì giữ trong lòng rồi tự chịu, lâu ngày sinh tự ti hoặc oán thầm. Khí huyết thường hư nhược, mắt kém, hay mất ngủ; nữ mệnh Thái Âm hãm dễ vất vả một đoạn vì tình cảm.',
      advice: 'Hãy tập nói ra nhu cầu của mình sớm một nhịp thay vì chờ người khác tự hiểu.',
    },
    'Phụ Mẫu': {
      bright: 'Thái Âm ứng với mẹ và người nữ trong nhà, sáng ở Phụ Mẫu thì mẹ hiền hậu, chu đáo, thường sống lâu và là chỗ dựa tinh thần bền bỉ. Tuổi nhỏ được mẹ chăm chút tỉ mỉ từ miếng ăn giấc ngủ, nhờ vậy nền tính cách ôn nhu. Ra đời cũng dễ gặp bề trên hoặc cấp trên là nữ, tính mềm mà công bằng, sẵn lòng đỡ đầu.',
      dim: 'Thái Âm hãm tại Phụ Mẫu thì duyên với mẹ phần nhiều mỏng — hoặc mẹ hay đau yếu, lao tâm vì gia đình, hoặc sớm phải xa nhau vì sinh kế. Trong nhà dễ có chuyện cha mẹ bất hòa, sinh ly, khiến người con mang tâm sự khó nói. Với cấp trên cũng hay được thương mà ít được nâng, tình cảm nhiều hơn thực lợi.',
      advice: 'Chủ động giữ nhịp liên lạc và lo phần sức khỏe cho mẹ, đó là cách bồi đắp phúc trực tiếp nhất.',
    },
    'Phúc Đức': {
      bright: 'Thái Âm sáng ở Phúc Đức là phúc phần êm và sâu, phần nhiều thừa hưởng âm đức từ bên ngoại — dòng mẹ tích thiện thì đời con được hưởng chỗ mát. Đời sống tinh thần phong phú, ưa cảnh thanh nhã, một khoảng sân có cây có nước là đủ vui, không cần náo nhiệt. Tâm tĩnh nên thọ khí dài, tuổi già an nhàn có người bên cạnh.',
      dim: 'Thái Âm hãm tại Phúc Đức thì tâm hay bất an, ban ngày còn xuôi mà đêm xuống là trăm mối lo dấy lên, dễ mất ngủ triền miên. Phúc bên ngoại thường không nhờ được nhiều, phúc phần chủ yếu trông vào tự tay gây dựng. Người này dễ nặng lòng chuyện cũ, càng nghĩ càng tự hao thần khí.',
      advice: 'Đặt một giới hạn giờ cho việc suy nghĩ ban đêm, và tìm một môn tĩnh tâm như thiền hay chép kinh để neo tinh thần.',
    },
    'Điền Trạch': {
      bright: 'Thái Âm là chủ tinh của điền sản, đóng Điền Trạch là sao về đúng nhà — chủ giàu về bất động sản, nhà cửa ấm êm. Miếu vượng thì điền trạch dồi dào, càng hậu vận càng dày, tự tay tạo dựng cơ ngơi khang trang, có thể sở hữu nhiều hơn một nơi ở. Nhà thường sạch sáng, có gu, phía sau hoặc gần có nước thì càng hợp cách.',
      dim: 'Thái Âm hãm tại Điền Trạch thì nhà cửa hay dời đổi, mua vào bán ra qua tay nhiều lần mà chưa an vị. Nhà dễ thiếu ánh sáng, ẩm thấp hoặc gần chỗ nước tù, ở lâu người trong nhà hay uể oải bệnh nhẹ. Tổ nghiệp phần nhiều không giữ được trọn, phải tự gây lại từ giữa đời.',
      advice: 'Ưu tiên chọn nhà thoáng sáng và làm giấy tờ dứt điểm ngay từ đầu, đừng để tài sản đứng tên hộ.',
    },
    'Quan Lộc': {
      bright: 'Thái Âm sáng ở Quan Lộc chủ công danh đi lên bằng sự tỉ mỉ và tích lũy, không phải bằng tranh giành ồn ào. Rất hợp các nghề liên quan tiền của và cái đẹp: tài chính, kế toán, kiểm toán, bất động sản, thẩm mỹ, thiết kế, giáo dục, nghệ thuật; làm việc lặng lẽ hậu trường mà vị trí lại vững. Trên đường sự nghiệp thường có nữ quý nhân nâng đỡ đúng lúc.',
      dim: 'Thái Âm hãm tại Quan Lộc thì công danh chậm, công việc phần nhiều nằm dưới bóng người khác, làm nhiều mà tên không nổi. Dễ đổi chỗ làm vì cảm thấy không được ghi nhận, hoặc vì môi trường thiếu tình. Nghề dính ca đêm, giờ thất thường càng làm sức khỏe và tinh thần hao mòn.',
      advice: 'Ghi lại thành quả của mình thành số liệu cụ thể rồi trình bày định kỳ, đừng chờ người khác phát hiện.',
    },
    'Nô Bộc': {
      bright: 'Thái Âm sáng ở Nô Bộc thì bạn bè cộng sự phần nhiều là nữ hoặc người tính ôn hòa, giao tình bền và kín. Người giúp mình thường giúp ngầm, không kể công, đôi khi mãi sau mới biết là nhờ ai. Cộng sự loại này ít khi bùng nổ tranh chấp, làm chung việc lâu dài rất yên tâm.',
      dim: 'Thái Âm hãm tại Nô Bộc thì tình bạn hay nhạt dần theo năm tháng, thân thiết một quãng rồi tự xa mà không rõ lý do. Dễ gặp người mượn tiền rồi khất lần, hoặc bị người nữ quen biết gây phiền chuyện tình cảm, tiếng tăm. Số bạn thật lòng thường ít hơn số người quen rất nhiều.',
      advice: 'Việc tiền bạc với bạn bè nên có giấy tờ và mốc hạn rõ, giữ bạn bằng minh bạch chứ đừng bằng cả nể.',
    },
    'Thiên Di': {
      bright: 'Thái Âm sáng ở Thiên Di thì ra ngoài được người mến, tướng mạo dễ gần nên đi đâu cũng có người sẵn lòng chỉ đường mở lối. Xuất ngoại thuận, đặc biệt có duyên với xứ nhiều sông nước, ven biển, hoặc nơi khí hậu ôn hòa. Quý nhân bên ngoài phần nhiều là nữ, giúp bằng cách giới thiệu và bảo lãnh uy tín.',
      dim: 'Thái Âm hãm tại Thiên Di thì đi xa hay lận đận, việc tưởng suôn lại vướng ở khâu nhỏ, đêm hôm ở đất khách thêm bất tiện. Người này dễ nhớ nhà, ra ngoài mà lòng để ở nhà nên khó dốc sức. Chuyện đi lại nên tránh giờ khuya và tránh đi một mình đến nơi lạ.',
      advice: 'Trước mỗi chuyến đi xa hãy chốt sẵn chỗ ở và người liên lạc tại chỗ, đừng để mọi thứ tùy cơ ứng biến.',
    },
    'Tật Ách': {
      bright: 'Thái Âm chủ âm huyết, sáng ở Tật Ách thì tạng khí tương đối điều hòa, ít gặp bệnh nặng bất ngờ, phần nhiều chỉ là hư nhược nhẹ theo mùa. Người này nhạy với thay đổi thời tiết nên thường tự biết dưỡng sinh sớm. Giữ giấc ngủ đủ và ăn ấm là hầu như đủ để yên thân.',
      dim: 'Thái Âm hãm tại Tật Ách thì bệnh phần nhiều thuộc phần âm và phần nước: khí huyết hư, thiếu máu, mắt kém mỏi, phù nề, thận và bàng quang yếu. Nữ giới dễ vướng chuyện phụ khoa, kinh nguyệt thất thường; cả hai giới đều dễ mất ngủ, thần kinh căng, hay đau đầu về chiều tối. Bệnh thường âm ỉ kéo dài chứ không dữ dội, nên hay bị bỏ qua.',
      advice: 'Khám mắt và làm xét nghiệm máu định kỳ mỗi năm, và tuyệt đối không lấy đêm làm ngày.',
    },
    'Tài Bạch': {
      bright: 'Thái Âm là sao tài của bóng đêm, sáng ở Tài Bạch thì tiền vào âm thầm mà đều, tích tiểu thành đại, ít khi có cú lỗ lớn. Người này giỏi giữ tiền hơn giỏi kiếm gấp: biết chia tài sản thành nhiều tầng, phần để dành phần sinh lời. Lợi nhất là nguồn tiền từ bất động sản, tiền cho thuê, tiền lãi và các khoản thu định kỳ.',
      dim: 'Thái Âm hãm tại Tài Bạch thì tiền qua tay nhiều mà đọng lại ít, hay bị hao ở những khoản nhỏ khó thấy. Người này dễ vì tình mà cho vay rồi khó lấy lại, hoặc đứng ra chi hộ cho người thân. Thu nhập thường có nhưng lòng vẫn cảm thấy chưa đủ, sinh lo tiền triền miên.',
      advice: 'Tách riêng một tài khoản tích lũy trích tự động ngay khi tiền về, và ngưng cho vay bằng tiền chưa dành dụm được.',
    },
    'Tử Tức': {
      bright: 'Thái Âm sáng ở Tử Tức thường chủ quý con gái, hoặc con gái đến trước, tính nết dịu dàng khéo tay và hiếu thuận. Con cái loại này gần mẹ, biết để ý cảm xúc người lớn, lớn lên hay là chỗ dựa tình cảm của cả nhà. Sức sáng tạo của bản thân cũng thuộc lối mềm: giỏi ở mảng thẩm mỹ, chăm chút chi tiết.',
      dim: 'Thái Âm hãm tại Tử Tức thì con phần nhiều ít, đường sinh nở có chỗ vất vả, thai kỳ cần cẩn trọng hơn người. Con nhỏ hay đau yếu lắt nhắt, lớn lên dễ đi xa khiến cha mẹ nhớ mong. Ý tưởng của bản thân cũng thường nuôi trong lòng lâu mà chậm đưa ra ánh sáng.',
      advice: 'Chăm sóc thai kỳ và tuổi thơ của con bằng lịch khám đều, đồng thời tập đưa ý tưởng của mình ra sớm hơn.',
    },
    'Phu Thê': {
      bright: 'Thái Âm sáng ở Phu Thê là cách phú thê đáng mừng: bạn đời hình dung ưa nhìn, tính dịu dàng, biết chăm nhà và biết dành dụm. Hai người thường hợp nhau ở nếp sống kín đáo, không thích khoe, cùng nhau gom góp mà nên. Người bạn đời loại này còn hay mang lại phần tài sản hoặc chỗ ở, khiến gia đạo ấm dần theo năm.',
      dim: 'Thái Âm hãm tại Phu Thê thì đường tình duyên nhiều tâm sự — dễ đa sầu đa cảm, hay ngờ vực rồi tự diễn giải trong đầu thành chuyện lớn. Duyên phần nhiều muộn, hoặc phải yêu xa, hoặc một bên thường xuyên vắng nhà. Tình cảm không thiếu nhưng thiếu lời nói cho rõ, nên hay có khoảng lặng khó gọi tên.',
      advice: 'Hỏi thẳng khi thấy nghi, đừng nuôi giả thuyết trong lòng qua đêm thứ hai.',
    },
    'Huynh Đệ': {
      bright: 'Thái Âm sáng ở Huynh Đệ thì thường có chị em gái làm chỗ đỡ đần, tình cảm gắn bó và giữ được lâu. Anh em trong nhà ít tranh giành, hay giúp nhau bằng cách âm thầm chứ không kể công. Bạn thân của người này cũng phần nhiều thuộc kiểu nhẹ nhàng, quen từ nhỏ mà bền tới già.',
      dim: 'Thái Âm hãm tại Huynh Đệ thì anh chị em dễ ly tán mỗi người một phương, ít có dịp tựa vào nhau. Có người trong số họ hay đau yếu hoặc gặp cảnh riêng khó nói, khiến tình thân nhiều thương mà ít trợ lực. Chuyện chung của nhà thường đổ về một mình mình gánh.',
      advice: 'Giữ một kênh liên lạc chung cho anh chị em và phân công việc nhà rõ ràng để tránh dồn hết cho một người.',
    },
  },

  ThamLang: {
    'Mệnh': {
      bright: 'Tham Lang miếu vượng đóng Mệnh thì sức hút toát ra tự nhiên, ngũ quan sinh động, nói chuyện có lửa nên vào đám đông là được để ý ngay. Người này đa tài đa nghệ, cái gì cũng học được một chút mà chút nào cũng dùng được, lại nhiều tham vọng nên không chịu ngồi yên ở chỗ nhỏ. Nếu có Hỏa Tinh hoặc Linh Tinh đồng cung thì thành cách hoạnh phát, một thời điểm bật lên rất nhanh.',
      dim: 'Tham Lang hãm thì dục nhiều mà lực không theo kịp — muốn tất cả, khởi đầu rộn ràng rồi bỏ giữa đường. Dễ nghiêng về tửu sắc, bài bạc, những cuộc vui thâu đêm, lấy hưởng thụ làm thưởng cho mình quá sớm. Lời thường đi trước việc, hứa nhiều nên uy tín hao dần mà bản thân không hay.',
      advice: 'Mỗi giai đoạn chỉ chọn một mục tiêu để dốc sức, và tự đặt hạn mức cho các cuộc vui.',
    },
    'Phụ Mẫu': {
      bright: 'Tham Lang sáng ở Phụ Mẫu thì cha mẹ thuộc kiểu hoạt bát, rộng giao du, nhà thường có khách ra vào nên con cái sớm biết ứng xử. Người này dễ được bề trên có tính phóng khoáng ưa mến, chỉ cần biết cách nói vừa ý là mở được cửa. Cấp trên loại này trọng người biết giao tế hơn trọng bằng cấp.',
      dim: 'Tham Lang hãm tại Phụ Mẫu thì cha mẹ có thể phong lưu quá mức, hoặc trong nhà từng có chuyện tình cảm phức tạp khiến con cái mang tâm sự. Khoảng cách với bề trên không phải vì xa cách mà vì mỗi người theo một thú riêng, khó gặp nhau ở chuyện chính. Với cấp trên cũng dễ thân nhanh rồi nhạt nhanh.',
      advice: 'Giữ quan hệ với bề trên bằng việc làm cụ thể chứ đừng chỉ bằng những cuộc vui chung.',
    },
    'Phúc Đức': {
      bright: 'Tham Lang sáng ở Phúc Đức thì đây là người biết hưởng đúng cách: sống có gu, thú vui phong phú mà vẫn giữ được chừng mực. Đời sống tinh thần không bao giờ tẻ, luôn có một môn để say mê, nhờ vậy tâm ít bị bào mòn bởi việc mưu sinh. Phúc phần thường đến qua các mối duyên gặp gỡ, người này hay có bạn tốt đúng lúc.',
      dim: 'Tham Lang hãm tại Phúc Đức thì phúc bị chính lòng dục làm mỏng đi — hưởng thụ quá độ, đêm dài rượu mạnh, thứ gì cũng muốn nếm cho biết. Tinh thần dễ rơi vào trạng thái no mà vẫn trống, tìm vui rồi lại thấy nhạt. Về lâu dài sức khỏe và tiếng tăm cùng chịu tổn.',
      advice: 'Chọn hai ba thú vui lành để đi sâu, và cắt bớt những cuộc vui chỉ để cho vui.',
    },
    'Điền Trạch': {
      bright: 'Tham Lang sáng ở Điền Trạch thì nhà đất phần nhiều có được nhờ một cơ hội bất ngờ: mối quen mách nước, mua đúng lúc rẻ, hoặc lộc từ một việc ngoài dự tính. Người này rất thích trang hoàng nhà cửa, ưa không gian có màu sắc và có chỗ tiếp khách. Gặp Hỏa Linh thì có thể phát về đất đai rất gấp.',
      dim: 'Tham Lang hãm tại Điền Trạch thì nhà đất hay mua vì hứng chứ không vì tính toán, xong lại phải bán tháo khi cần tiền. Gia trạch thường náo nhiệt người ra vào, đông vui mà thiếu yên tĩnh, đôi khi sinh chuyện lời tiếng. Tiền sửa nhà, bày biện thường vượt xa dự trù ban đầu.',
      advice: 'Đặt hạn mức trước khi xem nhà hay khởi công, và không ký kết trong lúc đang phấn khích.',
    },
    'Quan Lộc': {
      bright: 'Tham Lang sáng ở Quan Lộc là đúng đất dụng võ cho các nghề cần giao tế và sức hút: kinh doanh, tiếp thị, truyền thông, giải trí, ẩm thực khách sạn, ngoại giao, môi giới. Người này bán được cái mình tin, và cái tin ấy truyền sang người khác rất nhanh. Nếu Hỏa Tinh hoặc Linh Tinh đồng cung thì có giai đoạn thăng tiến gấp, một hợp đồng đổi cả cục diện.',
      dim: 'Tham Lang hãm tại Quan Lộc thì nghề nhiều mà nghề nào cũng ở tầng nông, đổi việc theo hứng nên hồ sơ rời rạc. Dễ dồn sức vào phần quan hệ và tiệc tùng, xem nhẹ phần chuyên môn cần ngồi lại mà mài. Công danh vì thế lên bằng may nhiều hơn bằng nền.',
      advice: 'Cam kết ở lại một lĩnh vực đủ ba năm để tích thành nghề, đừng để cơ hội mới cắt ngang mỗi mùa.',
    },
    'Nô Bộc': {
      bright: 'Tham Lang sáng ở Nô Bộc thì bạn bè đông và rộng, hầu như lĩnh vực nào cũng có người quen, nhờ vậy hay được mách cơ hội trước người khác. Người này là trung tâm của các cuộc gặp, có tài kết nối người với người. Cộng sự phần nhiều tính vui vẻ, làm chung dễ khí thế.',
      dim: 'Tham Lang hãm tại Nô Bộc thì phần lớn là bạn tửu nhục — lúc vui thì chật nhà, lúc cần thì vắng bóng. Người này dễ bị bạn lôi vào những cuộc chơi tốn kém hoặc những vụ hợp tác nghe hay mà thiếu nền. Tiếng tăm cũng hay bị liên đới vì bạn.',
      advice: 'Phân định rõ bạn chơi và bạn làm việc, và không góp vốn theo lời rủ trong bữa tiệc.',
    },
    'Thiên Di': {
      bright: 'Tham Lang sáng ở Thiên Di thì ra ngoài rất nổi, vừa xuất hiện đã có người muốn làm quen, đi đến đâu cũng dễ mở được mối. Xuất ngoại thường mang về cơ hội ngoài dự tính, nhất là những cơ hội đến từ bàn tiệc và hội chợ. Càng nơi đông đúc phồn hoa càng hợp đất người này.',
      dim: 'Tham Lang hãm tại Thiên Di thì đi xa dễ lụy tửu sắc, tiêu hoang nơi đất khách, tiền mang theo về không còn bao nhiêu. Cũng dễ tin người mới gặp mà bị dắt vào chuyện không rõ ràng. Đi càng xa mà không có người quản thì càng dễ trượt.',
      advice: 'Khi đi xa hãy đặt trước ngân sách tiêu và tránh những cuộc vui do người mới quen mời.',
    },
    'Tật Ách': {
      bright: 'Tham Lang sáng ở Tật Ách thì thể chất khỏe, sức bền tốt, ốm cũng hồi phục nhanh hơn người thường. Tuy vậy sao này chủ dục nên phần bệnh phần nhiều là bệnh do chính mình tạo ra, không phải do trời. Biết tiết chế thì hầu như cả đời ít nạn.',
      dim: 'Tham Lang hãm tại Tật Ách thì bệnh thường tụ ở gan mật do rượu, kèm mỡ máu, đường huyết và gout. Cũng dễ vướng bệnh đường sinh dục tiết niệu, bệnh do sinh hoạt buông thả; răng và da cũng hay có vấn đề. Bệnh loại này đến chậm nhưng khi hiện ra thì đã có tuổi bệnh.',
      advice: 'Cắt rượu xuống mức tối thiểu và làm xét nghiệm gan, đường huyết, mỡ máu mỗi năm một lần.',
    },
    'Tài Bạch': {
      bright: 'Tham Lang sáng ở Tài Bạch thì tiền đến từ quan hệ và cơ hội: hoa hồng, môi giới, hợp tác, những khoản trời cho đúng lúc. Đây là cách dễ có hoạnh tài, nhất là khi Hỏa Linh cùng đóng, một vận có thể đổi hẳn mức sống. Người này kiếm tiền nhanh vì dám xoay và dám mời.',
      dim: 'Tham Lang hãm tại Tài Bạch thì tiền vào cửa trước ra cửa sau, kiếm được bao nhiêu tiêu gần hết bấy nhiêu. Hao lớn nhất nằm ở vui chơi, bao bạn bè, và những canh cờ bạc tưởng nhỏ. Người này ít khi thiếu nguồn thu nhưng thường xuyên thiếu tiền để dành.',
      advice: 'Trích ngay một phần cố định vào chỗ khó rút mỗi khi tiền về, và tuyệt đối tránh cờ bạc dưới mọi hình thức.',
    },
    'Tử Tức': {
      bright: 'Tham Lang sáng ở Tử Tức thì con cái thông minh hoạt bát, có tài văn nghệ hoặc thể thao, ra ngoài được bạn bè vây quanh. Cha mẹ con cái dễ nói chuyện như bạn, không khí gia đình vui. Sức sáng tạo của bản thân cũng dồi dào, ý tưởng nảy ra liên tục và có màu sắc riêng.',
      dim: 'Tham Lang hãm tại Tử Tức thì con khó dạy, ham chơi hơn ham học, sớm biết những thứ chưa nên biết. Cần dạy con giới hạn từ nhỏ chứ đợi lớn thì khó uốn. Phần sáng tạo của bản thân cũng nhiều mà tán, mười ý chỉ một ý đi tới cùng.',
      advice: 'Đặt nếp giờ và giới hạn rõ cho con từ sớm, còn ý tưởng của mình thì buộc phải hoàn thành một cái trước khi mở cái mới.',
    },
    'Phu Thê': {
      bright: 'Tham Lang sáng ở Phu Thê thì bạn đời có sức hút, hình dung ưa nhìn, đời sống vợ chồng nồng nhiệt và có sinh khí. Hai người thường hợp nhau ở chỗ cùng thích trải nghiệm, đi chơi, ăn ngon, nên hôn nhân ít khi tẻ nhạt. Được cái ấy thì phải giữ được ranh giới, vì cả hai đều dễ được người khác để ý.',
      dim: 'Tham Lang là đào hoa tinh, hãm ở Phu Thê thì đường phối ngẫu dễ đa đoan — có người thứ ba, hoặc lòng dễ dao động trước cái mới. Duyên phần nhiều muộn, hoặc đến rồi lại đi, có thể lập gia đình hơn một lần. Nồng nhiệt lúc đầu bao nhiêu thì lúc nhạt càng nhanh bấy nhiêu.',
      advice: 'Thống nhất trước với bạn đời những giới hạn cụ thể trong giao tiếp với người khác, và giữ đúng bằng hành vi hằng ngày.',
    },
    'Huynh Đệ': {
      bright: 'Tham Lang sáng ở Huynh Đệ thì anh chị em vui vẻ hoạt bát, nhà có tiếng cười, hay tụ họp ăn uống. Trong số họ thường có người giỏi giao tế, giúp được mình những việc cần người mở lời. Bạn thân cũng thuộc kiểu rộng rãi, dám đứng ra vì mình.',
      dim: 'Tham Lang hãm tại Huynh Đệ thì anh em hay dính chuyện vay mượn, tiền vào việc vui rồi khó tính lại cho rõ. Dễ vì một cuộc chơi hay một khoản chung mà sinh tranh chấp, tình thân mỏng đi vì tiền. Có người trong số họ sống buông, khiến cả nhà phải đỡ.',
      advice: 'Không cho anh em vay bằng tiền dành dụm, và mọi khoản chung phải ghi lại ngay từ đồng đầu tiên.',
    },
  },

  CuMon: {
    'Mệnh': {
      bright: 'Cự Môn vốn là ám tinh, nhưng miếu vượng thì cái ám hóa thành chiều sâu — người này có óc nghi vấn, thấy chỗ khả nghi là truy đến cùng, không dễ bị lời hoa mỹ dắt đi. Tài hùng biện là vốn lớn nhất: nói có lớp lang, phản biện sắc, đứng trước đám đông không loạn. Nếu được Thái Dương chiếu thì ám tinh gặp ánh sáng, lời nói có uy mà không mang tiếng.',
      dim: 'Cự Môn hãm thì miệng lưỡi trở thành cái bẫy của chính mình — nói nhiều mất lòng, nói đúng mà chọn sai lúc nên bị người ghi hận. Tính đa nghi nặng, một câu nói của người khác cũng đem về mổ xẻ suốt đêm rồi tự sinh phiền. Khẩu thiệt thị phi phần nhiều đeo theo từng chặng, có khi vướng cả kiện tụng giấy tờ.',
      advice: 'Trước khi nói điều sắc sảo, hãy tự hỏi câu đó giải quyết được việc gì — nếu không thì giữ lại.',
    },
    'Phụ Mẫu': {
      bright: 'Cự Môn sáng ở Phụ Mẫu thì cha mẹ nghiêm, dạy con bằng lời và bằng lý lẽ, nhờ vậy người con sớm biết lập luận và biết phân phải trái. Trong nhà có truyền thống bàn luận, tranh biện mà không đến mức đổ vỡ. Cấp trên thường là người thẳng tính, nói nặng nhưng dùng người công bằng.',
      dim: 'Cự Môn hãm tại Phụ Mẫu thì cha mẹ con cái hay khắc khẩu, chuyện nhỏ cũng thành đối đáp nặng lời rồi cả hai cùng tổn. Với bề trên cũng vậy: dễ bị cấp trên bắt lỗi từng câu, hoặc chính mình đáp lại quá thật khiến đường tiến bị chặn. Giấy tờ liên quan bề trên, thừa kế, bảo lãnh nên xem thật kỹ.',
      advice: 'Với cha mẹ và cấp trên hãy trả lời chậm hơn một nhịp, và tránh tranh luận khi cả hai đang nóng.',
    },
    'Phúc Đức': {
      bright: 'Cự Môn sáng ở Phúc Đức thì tinh thần ưa suy xét, người này tìm được sự an ổn trong việc hiểu rõ ngọn ngành, không phải trong việc nhắm mắt tin. Thường có duyên với sách vở, kinh điển, các môn cần lý giải như luật, y, đạo học. Càng lớn tuổi càng bớt tranh và biết dùng lời để hòa, đó là lúc phúc dày lên.',
      dim: 'Cự Môn hãm tại Phúc Đức thì tâm nhiều nghi hoặc, đêm về là lúc trăm câu hỏi dấy lên, ngủ không sâu. Phúc phần dễ bị chính lời nói của mình làm hao: một câu buột miệng đủ mất một mối duyên tốt. Người này hay tự vấn quá mức, đến nỗi việc đã qua vẫn còn day dứt.',
      advice: 'Viết những mối nghi ra giấy trước khi ngủ thay vì nghĩ trong đầu, và học một pháp tĩnh tâm để bớt tự tra vấn.',
    },
    'Điền Trạch': {
      bright: 'Cự Môn sáng ở Điền Trạch thì nhà đất dù có qua tranh chấp hay đàm phán vẫn về được tay mình, phần nhiều nhờ chính mình rành lý lẽ và giấy tờ. Người này thường ở nơi tiện đường, gần chợ hoặc gần trục giao thông, náo nhiệt mà thuận việc. Có tài mặc cả nên hay mua được giá tốt hơn người khác.',
      dim: 'Cự Môn hãm tại Điền Trạch thì gia trạch hay ồn ào, dễ vướng chuyện ranh đất, tường chung, lối đi, có khi thành kiện tụng dai dẳng với láng giềng. Nhà thường gần chợ, gần đường lớn hoặc chỗ nhiều tiếng động nên trong nhà khó yên. Giấy tờ nhà cửa hay có chỗ chưa sạch, để lâu càng rối.',
      advice: 'Rà soát và hoàn tất toàn bộ giấy tờ nhà đất ngay khi phát hiện thiếu sót, đừng để đến lúc tranh chấp mới lo.',
    },
    'Quan Lộc': {
      bright: 'Cự Môn sáng ở Quan Lộc rất hợp những nghề lấy miệng và lý làm nghề: luật, báo chí, giáo dục, đào tạo, tư vấn, đàm phán, bán hàng cao cấp, y dược. Người này thắng ở chỗ chuẩn bị lập luận kỹ và giữ được bình tĩnh khi bị chất vấn. Sự nghiệp thường lên nhờ một lần phát biểu hoặc một vụ việc mình xử lý gọn.',
      dim: 'Cự Môn hãm tại Quan Lộc thì công việc nhiều tiếng bấc tiếng chì, hay bị đồng nghiệp nói sau lưng dù mình làm không sai. Con đường thăng tiến bị chặn bởi lời hơn bởi năng lực; một câu nói vô ý có thể lùi cả năm cố gắng. Cũng dễ bị kéo vào các vụ tranh chấp nội bộ mà mình chỉ là người ngoài.',
      advice: 'Trao đổi công việc quan trọng bằng văn bản để có dấu vết, và tuyệt đối không bình luận về người khác nơi làm việc.',
    },
    'Nô Bộc': {
      bright: 'Cự Môn sáng ở Nô Bộc thì trong bạn bè có người dám nói thật, chỉ ra chỗ sai của mình trước khi thành hại — loại bạn này quý hơn mười người tán thưởng. Cộng sự phần nhiều rành việc, bàn tính rõ ràng, làm đâu chốt đó. Người này cũng dễ có bạn ở giới luật, báo chí, giáo dục.',
      dim: 'Cự Môn hãm tại Nô Bộc thì hay gặp người trước mặt nói thuận, sau lưng nói khác, tin tức riêng của mình dễ ra ngoài. Dễ bị vạ miệng liên đới vì bạn, hoặc mất bạn chỉ vì một cuộc tranh luận. Bạn ở cung này nên ít mà kỹ, chớ mở lòng theo cảm tình ban đầu.',
      advice: 'Không kể chuyện riêng và chuyện tiền bạc của mình cho người mới quen dưới một năm.',
    },
    'Thiên Di': {
      bright: 'Cự Môn sáng ở Thiên Di thì ra ngoài giỏi thuyết phục, có tiếng nói trong hội nhóm, dễ được mời phát biểu hoặc làm người đại diện. Đi xa thường mở được đường bằng đàm phán, nói vài buổi đã đổi được cục diện. Có duyên với môi trường đa ngôn ngữ, nghề phiên dịch hoặc đối ngoại.',
      dim: 'Cự Môn hãm tại Thiên Di thì đi xa dễ sinh tranh chấp, hiểu lầm ngôn ngữ, thậm chí vướng chuyện giấy tờ ở đất khách. Người này ra ngoài hay bị người ta nói khác đi ý mình, sinh oan mà khó giải. Chớ ký kết vội ở nơi lạ, chớ tin lời hứa miệng.',
      advice: 'Ở nơi xa hãy yêu cầu mọi thỏa thuận bằng văn bản và nhờ người bản địa đáng tin đọc lại giúp.',
    },
    'Tật Ách': {
      bright: 'Cự Môn sáng ở Tật Ách thì bệnh phần nhiều tụ ở vùng miệng, họng và đường tiêu hóa nhưng ở mức nhẹ, phát hiện sớm là dứt được. Người này khá nhạy với dấu hiệu cơ thể, hay chủ động tra cứu nên ít bỏ sót. Sức khỏe tổng thể ổn, chỉ cần giữ nếp ăn.',
      dim: 'Cự Môn là ám tinh, hãm ở Tật Ách thì bệnh thường ẩn, âm ỉ khó chẩn, đi khám nhiều nơi mới ra. Hay gặp nhất là dạ dày, thực quản, trào ngược, viêm họng thanh quản, và những chỗ viêm nhiễm dai dẳng. Ăn uống thất thường cộng với nói nhiều làm bệnh khó lành hẳn.',
      advice: 'Khi một triệu chứng kéo dài quá hai tuần hãy đi nội soi và làm xét nghiệm cho rõ, đừng tự đoán bệnh.',
    },
    'Tài Bạch': {
      bright: 'Cự Môn sáng ở Tài Bạch thì tiền đến từ lời nói: hoa hồng, tư vấn, đào tạo, môi giới, thù lao diễn thuyết, hoặc từ nghề pháp lý. Người này giỏi mặc cả, biết chỗ nào nên nhường chỗ nào phải giữ, nên trong đàm phán ít khi lỗ. Tiền tuy không đến ào một lần nhưng nguồn thì nhiều cửa.',
      dim: 'Cự Môn hãm tại Tài Bạch thì tiền hay dính tranh chấp — hợp đồng lôi thôi, nợ khó đòi, khoản đã làm mà bị bắt bẻ để trừ. Người này dễ mất tiền vì tin lời hứa miệng hoặc vì hợp tác không rõ điều khoản. Càng lời qua tiếng lại thì tiền càng lâu về.',
      advice: 'Mọi giao dịch phải có hợp đồng ghi rõ mốc thanh toán, và chỉ làm tiếp khi khoản trước đã về.',
    },
    'Tử Tức': {
      bright: 'Cự Môn sáng ở Tử Tức thì con lanh lợi, sớm biết nói và nói có lý, học tốt các môn cần lập luận. Cha con hay bàn luận với nhau như hai người ngang hàng, con nhờ vậy tự tin. Sức sáng tạo của bản thân mạnh ở mảng ngôn từ: viết, giảng, kể chuyện.',
      dim: 'Cự Môn hãm tại Tử Tức thì con hay cãi, dạy đến mỏi miệng mà con vẫn giữ ý riêng, lớn lên khoảng cách nằm ở lời nói chứ không ở tình. Cũng có thể con ít hoặc muộn, hoặc một đứa hay khiến cha mẹ phải nói nhiều nhất. Ý tưởng của bản thân dễ gây bàn tán trước khi kịp chứng minh.',
      advice: 'Với con hãy đặt câu hỏi thay vì ra lệnh, và giữ ý tưởng mới trong vòng kín cho đến khi có kết quả bước đầu.',
    },
    'Phu Thê': {
      bright: 'Cự Môn sáng ở Phu Thê thì bạn đời sắc sảo, nói chuyện được, hai người có thể ngồi bàn một vấn đề đến cùng mà không đứt tình. Hôn nhân loại này hợp nhau ở đầu óc hơn ở hình thức, càng sống càng thấy vừa ý vì nói được với nhau. Bạn đời thường giúp mình sáng ra ở những chỗ mình mù mờ.',
      dim: 'Cự Môn hãm tại Phu Thê thì hai vợ chồng khắc khẩu, chuyện cỏn con cũng thành cuộc tranh cho ra lẽ rồi cả hai đều thua. Duyên phần nhiều muộn, hoặc trước đó có một đoạn dở dang vì lời nói. Cãi vã dai dẳng lâu ngày làm tình cảm nguội, mà nguyên do gốc thường chẳng lớn.',
      advice: 'Thỏa thuận một câu ngưng chiến để cả hai dùng khi tranh luận lên cao, rồi hẹn nói lại sau một ngày.',
    },
    'Huynh Đệ': {
      bright: 'Cự Môn sáng ở Huynh Đệ thì anh chị em bàn việc thẳng thắn, chuyện nhà có người biết nói cho rành mạch nên ít khi rối. Trong số họ thường có người giỏi lý lẽ, đứng ra làm đại diện gia đình rất được. Bạn thân cũng thuộc kiểu nói thật, chơi lâu mà không khách sáo.',
      dim: 'Cự Môn hãm tại Huynh Đệ thì anh em bất hòa vì lời hơn vì việc, một câu nói cũ có thể nhắc lại suốt nhiều năm. Chuyện chia gia sản dễ thành tranh chấp, có khi phải nhờ đến người ngoài phân xử. Tình thân không mất nhưng khoảng cách thì có thật.',
      advice: 'Việc gia sản nên nhờ một người trung gian và làm thành văn bản, tránh bàn tay đôi lúc đang có va chạm.',
    },
  },

  ThienTuong: {
    'Mệnh': {
      bright: 'Thiên Tướng là ấn tinh, đóng Mệnh miếu vượng thì dáng vẻ đoan chính, cử chỉ mực thước, gặp lần đầu đã thấy đáng tin. Người này tận tụy trung hậu, có tài phò tá bậc nhất: đứng bên cạnh người cầm cờ thì việc gì cũng chạy, giấy tờ đâu ra đó. Gu thẩm mỹ chuẩn mực và rất ưa cái đẹp lẫn cái ngon, nhà cửa áo mặc bữa ăn đều được chăm.',
      dim: 'Thiên Tướng hãm thì cái tận tụy hóa thành thiếu chủ kiến — quen dựa vào người khác quyết, đến lúc phải tự chọn thì chần chừ. Tính xuê xoa cầu an khiến việc đáng nói không nói, lâu ngày bị người sai sử mà vẫn nhận. Phần hưởng thụ cũng dễ quá tay, ăn ngon mặc đẹp thành gánh nặng cho túi tiền.',
      advice: 'Mỗi tuần tự quyết một việc mà không hỏi ai, để rèn lại phần chủ kiến của mình.',
    },
    'Phụ Mẫu': {
      bright: 'Thiên Tướng sáng ở Phụ Mẫu thì cha mẹ hiền hậu, chăm lo chu đáo, nhà giữ nếp và trọng lễ nghĩa. Người này thường được cấp trên tin cậy giao việc quan trọng vì tính cẩn thận và không tranh công. Bề trên loại này bảo bọc lâu dài, xem như người trong nhà.',
      dim: 'Thiên Tướng hãm tại Phụ Mẫu thì cha mẹ lao tâm nhiều vì con, gánh việc cho con đến mức mình thiệt. Với cấp trên thì hay bị nhờ vả nhiều mà phần đền đáp lại ít, việc khó thì đến tay mình còn phần ghi nhận về người khác. Người này khó nói lời từ chối với bề trên nên càng dễ bị dồn.',
      advice: 'Khi nhận thêm việc từ cấp trên hãy hỏi rõ phần công và phần thưởng ngay từ đầu.',
    },
    'Phúc Đức': {
      bright: 'Thiên Tướng sáng ở Phúc Đức thì phúc phần êm, tính hòa nhã nên đi đâu cũng bớt được va chạm, đó chính là phúc. Người này biết hưởng cái đẹp một cách chừng mực: một bữa ăn ngon, một chỗ ngồi có ánh sáng đủ làm lòng dịu lại. Tuổi già thường có người bên cạnh chăm, vì cả đời đã chăm người khác.',
      dim: 'Thiên Tướng hãm tại Phúc Đức thì phúc bị mỏng đi vì cả nể — gánh việc người, nhận lời rồi tự khổ, lòng có uất mà không nói ra được. Đời sống tinh thần đầy đủ bên ngoài mà bên trong thiếu chỗ cho mình. Về lâu dài dễ sinh mệt mỏi âm thầm, thấy mình sống cho người nhiều hơn cho mình.',
      advice: 'Học nói không với những việc ngoài phận sự, và dành riêng mỗi tuần một quãng chỉ cho bản thân.',
    },
    'Điền Trạch': {
      bright: 'Thiên Tướng sáng ở Điền Trạch thì nhà cửa gọn gàng có gu, bố cục hợp lý, bếp ấm và bàn ăn tử tế — đúng chất một sao ưa cái đẹp và ẩm thực. Điền sản phần nhiều có được nhờ người: thừa kế, người tặng, hoặc do bạn đời cùng góp. Ở nhà mình là lúc người này dễ chịu nhất.',
      dim: 'Thiên Tướng hãm tại Điền Trạch thì tiền bày biện sửa sang tốn kém, sửa hoài mà vẫn thấy chưa xong, chi phí vượt dự trù. Tài sản dễ rơi vào cảnh đứng tên hộ người khác hoặc mua chung mà phần mình mờ. Nhà đẹp mà lòng chưa chắc yên vì gánh nợ đi kèm.',
      advice: 'Chốt ngân sách và danh mục sửa nhà trước khi khởi công, và không để tài sản đứng tên người khác.',
    },
    'Quan Lộc': {
      bright: 'Thiên Tướng sáng ở Quan Lộc thì đây là mẫu người giỏi nhất ở vị trí số hai: tham mưu, trợ lý cấp cao, chánh văn phòng, quản lý hành chính, kiểm soát nội bộ. Cũng rất hợp các nghề của cái đẹp và cái ngon: thiết kế, thời trang, nội thất, ẩm thực, dịch vụ cao cấp. Là sao điều hòa nên đi với chủ tướng nào thì mang sắc chủ tướng ấy, gặp minh chủ thì cùng lên.',
      dim: 'Thiên Tướng hãm tại Quan Lộc thì làm nhiều mà công ít, phần lao lực về mình còn phần vinh danh về người. Người này khó tự chủ một mảng riêng, thiếu người dẫn thì loay hoay không biết bắt đầu từ đâu. Dễ mắc kẹt lâu ở một vị trí vì quá dễ dùng và không đòi hỏi.',
      advice: 'Chọn một chủ tướng đáng theo rồi đi cùng dài hạn, đồng thời gây dựng một chuyên môn riêng mang tên mình.',
    },
    'Nô Bộc': {
      bright: 'Thiên Tướng sáng ở Nô Bộc thì bạn bè cộng sự trung hậu, đến lúc mình khó thì có mặt, giúp việc thật chứ không chỉ nói. Người này biết cách giữ bạn: nhớ ngày quan trọng, biết mời nhau bữa cơm, nên tình bền. Cộng sự loại này ít trở mặt, làm chung được lâu.',
      dim: 'Thiên Tướng hãm tại Nô Bộc thì lòng tốt dễ bị lợi dụng, làm không cho người ta rồi lại chẳng được một lời cảm ơn. Bạn bè hay tìm đến lúc cần, xong việc thì thưa dần. Người này ngại nói ra nên cứ nhận rồi cứ chịu.',
      advice: 'Giúp bạn ở mức mình không phải hy sinh, và nói rõ giới hạn ngay lần đầu được nhờ.',
    },
    'Thiên Di': {
      bright: 'Thiên Tướng sáng ở Thiên Di thì ra ngoài được người đỡ, đi đâu cũng có người mời cơm mời chỗ nghỉ, nhờ tướng mạo và cách xử sự dễ mến. Xuất ngoại thuận, nhất là đi theo đoàn hoặc theo một người dẫn dắt. Người này ở nơi lạ vẫn nhanh chóng có chỗ đứng vì biết hòa.',
      dim: 'Thiên Tướng hãm tại Thiên Di thì ra ngoài phần nhiều phải phục vụ người khác, chuyến đi của mình mà lo cho cả nhóm. Chi phí thường đội lên vì ăn uống, bày biện, quà cáp. Về nhà thì mệt và túi cạn mà việc riêng chưa xong.',
      advice: 'Trước chuyến đi hãy phân định rõ ai lo phần gì, và giữ riêng phần thời gian cho việc của mình.',
    },
    'Tật Ách': {
      bright: 'Thiên Tướng sáng ở Tật Ách thì ít bệnh nặng, thể trạng ổn định, phần cần lưu ý chỉ là tiêu hóa vì người này ưa ăn ngon. Biết ăn có tiết chế thì hầu như cả đời yên. Sao điều hòa nên bệnh đến cũng dễ tìm được thuốc hợp.',
      dim: 'Thiên Tướng hãm tại Tật Ách thì bệnh phần nhiều sinh từ miệng: dạ dày, túi mật, gan nhiễm mỡ, đường huyết cao, mỡ máu. Da liễu và dị ứng cũng hay gặp, nhất là khi ăn uống thất thường. Bệnh loại này tiến triển chậm nên dễ chủ quan cho đến lúc chỉ số đã lệch xa.',
      advice: 'Giảm dầu mỡ và đồ ngọt trong bữa hằng ngày, kiểm tra đường huyết cùng mỡ máu mỗi năm.',
    },
    'Tài Bạch': {
      bright: 'Thiên Tướng sáng ở Tài Bạch thì tiền vào đều đặn từ lương thưởng, phụ cấp, các khoản chính đáng theo vị trí — không giàu đột ngột nhưng ít khi thiếu. Người này chi tiêu có mỹ cảm, mua ít mà mua đúng, đồ dùng bền. Cũng thường được người khác chia lộc vì tính không tranh.',
      dim: 'Thiên Tướng hãm tại Tài Bạch thì hao nhiều ở cái đẹp và cái ăn: quần áo, đồ dùng, những bữa mời. Người này hay chi hộ người khác rồi ngại nhắc, tiền cứ rơi vào chỗ khó thu về. Thu nhập không tệ mà tích lũy chậm.',
      advice: 'Đặt hạn mức riêng cho khoản ăn uống và mua sắm mỗi tháng, và nhắc lại các khoản đã chi hộ trong vòng một tuần.',
    },
    'Tử Tức': {
      bright: 'Thiên Tướng sáng ở Tử Tức thì con hiền ngoan, có mỹ cảm, biết ăn biết mặc và biết cư xử, lớn lên hiếu thuận. Không khí giữa cha mẹ con cái ôn hòa, ít khi to tiếng. Sức sáng tạo của bản thân thuộc lối tinh chỉnh: nhận việc dở dang của người rồi làm cho đẹp.',
      dim: 'Thiên Tướng hãm tại Tử Tức thì con được chăm quá chu đáo nên thành dựa dẫm, việc gì cũng chờ cha mẹ lo. Đến lúc phải tự lập thì con loay hoay, cha mẹ lại càng phải đỡ. Ý tưởng của bản thân cũng vậy: cần có người dẫn mới thành, tự khởi thì khó.',
      advice: 'Giao cho con những việc phải tự làm và tự chịu hậu quả nhỏ, đừng dọn đường sẵn.',
    },
    'Phu Thê': {
      bright: 'Thiên Tướng sáng ở Phu Thê là cách hôn nhân êm đáng quý: bạn đời chu đáo tận tụy, biết lo nhà lo bếp, về đến cửa là thấy ấm. Hai người hợp nhau ở cái nếp — cùng thích nhà gọn, bữa cơm tử tế, đi lại có chừng. Sóng gió nếu có cũng thường được hóa giải nhờ bên kia nhường trước.',
      dim: 'Thiên Tướng hãm tại Phu Thê thì một bên hy sinh quá nhiều, lâu ngày tình nồng chuyển thành nghĩa, ở với nhau vì trách nhiệm hơn vì muốn. Người quá dễ chịu cũng dễ để người thứ ba chen vào vì không biết cách từ chối dứt khoát. Nhà vẫn êm bề ngoài mà bên trong đã nguội.',
      advice: 'Nói rõ mong muốn của mình với bạn đời thay vì lặng lẽ nhường, và giữ khoảng cách dứt khoát với người có ý khác.',
    },
    'Huynh Đệ': {
      bright: 'Thiên Tướng sáng ở Huynh Đệ thì anh chị em hòa thuận, trong nhà có người đứng ra hòa giải nên chuyện lớn cũng xuôi. Người này thường là chỗ để anh em gửi gắm việc, và làm được việc gửi gắm ấy. Bạn thân cũng thuộc kiểu điềm đạm, chơi lâu không nhạt.',
      dim: 'Thiên Tướng hãm tại Huynh Đệ thì mình luôn là người gánh — anh em nhờ hết vào một mối, từ tiền đến việc. Ban đầu nhận vì tình, sau thành lệ, muốn dừng lại thì bị cho là thay đổi. Sức và tiền vì thế hao mà công thì không ai tính.',
      advice: 'Chia việc nhà thành phần cụ thể cho từng người và công bố rõ, đừng mặc định mình lo tất.',
    },
  },

  ThienLuong: {
    'Mệnh': {
      bright: 'Thiên Lương là lão nhân tinh, đóng Mệnh miếu vượng thì phong thái già dặn hơn tuổi, thiếu niên đã có dáng người từng trải, nói câu nào cũng nghe ra chừng mực. Phẩm cách chính trực, thấy việc bất bình thì không nhịn được, lại sẵn lòng nhân ái nên hay đứng ra che chở người yếu thế. Sao này có khả năng giải tai ương: gặp nạn thường có đường ra vào phút cuối, và người này cũng ưa nghiên cứu triết lý, tôn giáo, y thuật.',
      dim: 'Thiên Lương hãm thì cái phẩm cách hóa thành lý thuyết suông — nói đạo lý rất hay mà làm thì ít, hay đem chuẩn của mình đo người khác. Tính thích dạy người khiến người ta nể mà không gần, lâu ngày thành cô đơn kiểu cách. Cũng dễ cứng nhắc bám nguyên tắc, xét nét chi tiết nhỏ nên bỏ mất cơ hội lớn.',
      advice: 'Trước khi khuyên ai điều gì, hãy tự làm được điều đó ít nhất một lần.',
    },
    'Phụ Mẫu': {
      bright: 'Thiên Lương sáng ở Phụ Mẫu thì cha mẹ đức độ, sống có tiếng thơm trong họ, phần nhiều thọ và là chỗ dựa lâu dài. Người này thường được bề trên che chở như con ruột, cấp trên dạy nghề chứ không chỉ sai việc. Trong họ hay có một bậc cao niên đứng ra đỡ mình vào lúc khó nhất.',
      dim: 'Thiên Lương hãm tại Phụ Mẫu thì cha mẹ khó tính, giáo huấn nhiều mà ít lắng, con cái nghe mãi thành nhàm. Khoảng cách chính là ở quan niệm và tuổi tác chứ không ở tình cảm. Với cấp trên cũng dễ gặp người nặng nguyên tắc, làm đúng vẫn bị nhắc.',
      advice: 'Với bề trên hãy lắng nghe hết rồi mới trình bày phần của mình, và tìm điểm chung về mục đích thay vì tranh về cách làm.',
    },
    'Phúc Đức': {
      bright: 'Thiên Lương đóng Phúc Đức là sao về đúng nhà — phúc thọ dày, tâm an, cả đời hiếm khi rơi vào đường cùng vì luôn có người hoặc có cơ hóa giải. Người này thường có tín tâm, ưa kinh sách hoặc một nếp tu dưỡng, nhờ vậy lòng vững khi gặp biến. Càng lớn tuổi càng thấy nhẹ, hậu vận là quãng đẹp nhất.',
      dim: 'Thiên Lương hãm tại Phúc Đức thì tâm ưa cô tịch, thích ở một mình rồi lại thấy trống, dễ nghĩ xa nghĩ trước đến mức tự sinh khổ. Người này hay tự trách những chuyện chưa xảy ra, lo cho người khác nhiều hơn cho mình. Phúc phần không thiếu nhưng cảm giác hưởng thì ít.',
      advice: 'Ghi ra ba việc trong tầm tay mỗi ngày và làm cho xong, thay vì lo những chuyện chưa đến.',
    },
    'Điền Trạch': {
      bright: 'Thiên Lương sáng ở Điền Trạch thì nhà cửa ổn định lâu dài, thường là nhà cũ có tuổi, có thể là đất hương hỏa của dòng họ để lại. Chỗ ở hay gần chùa, gần trường, nhiều cây cối, khí tĩnh mà lành. Người này giữ nhà bền, ít khi phải dời đổi.',
      dim: 'Thiên Lương hãm tại Điền Trạch thì nhà cũ dột chỗ nọ hỏng chỗ kia, tu sửa liên tục mà không đổi mới được. Có khi giữ nhà tổ mà thành gánh nặng: trách nhiệm về mình còn quyền thì chia cho cả họ. Muốn bán thì vướng người, muốn giữ thì tốn tiền.',
      advice: 'Làm rõ quyền và phần trách nhiệm với nhà tổ thành văn bản, rồi mới quyết giữ hay chuyển.',
    },
    'Quan Lộc': {
      bright: 'Thiên Lương sáng ở Quan Lộc rất hợp những nghề cứu người và giữ chuẩn: y dược, giáo dục, tư pháp, thanh tra kiểm định, nghiên cứu, công tác xã hội, bảo hiểm, tôn giáo. Người này lên chậm mà chắc, càng làm lâu càng có uy tín, đến tuổi trung niên thì thành người ta phải hỏi ý. Sao này che chở nên nghề cũng ít khi đổ vỡ đột ngột.',
      dim: 'Thiên Lương hãm tại Quan Lộc thì công danh lên bằng thâm niên và tuổi tác hơn bằng thành tích, phải chờ đến lượt mới tới phần. Người này dễ mắc kẹt vì giữ nguyên tắc trong môi trường linh hoạt, thành ra bị xem là khó phối hợp. Việc thì kín kẽ mà tiếng thì mờ.',
      advice: 'Học cách trình bày nguyên tắc của mình theo hướng có lợi cho việc chung, và chủ động xin những dự án có thành quả đo được.',
    },
    'Nô Bộc': {
      bright: 'Thiên Lương sáng ở Nô Bộc thì có bạn lớn tuổi hoặc bạn chín chắn làm chỗ dựa, được cố vấn đúng lúc nên tránh được nhiều vấp. Bạn của người này ít mà toàn người có nền, quen dài năm. Trong nhóm mình thường là người được tin để giữ chuyện chung.',
      dim: 'Thiên Lương hãm tại Nô Bộc thì bạn bè hay tìm đến lúc cần khuyên, xong việc thì thưa dần, còn mình cứ mãi ở vai người đi giải quyết chuyện người khác. Cũng dễ gặp người nghe mà không làm, khuyên xong lại thấy y như cũ. Sức và thời gian vì thế hao ở chỗ không thu lại được gì.',
      advice: 'Chỉ nhận tư vấn cho người thật sự chịu hành động, và dành phần thời gian còn lại cho việc của mình.',
    },
    'Thiên Di': {
      bright: 'Thiên Lương sáng ở Thiên Di thì ra ngoài gặp quý nhân cao niên, gặp việc khó thường có người đứng ra giải giúp. Rất hợp đi học, đi tu nghiệp, đi làm việc thiện nguyện ở xa; càng đi càng mở tầm và mở phúc. Người này ở đất khách vẫn được tin vì phong thái đứng đắn.',
      dim: 'Thiên Lương hãm tại Thiên Di thì đi xa hay cô độc, nơi lạ không có người nói chuyện được, lòng dễ trầm. Cũng thường bị nhờ giải quyết chuyện người khác trong chuyến đi của mình. Việc riêng vì thế cứ bị đẩy về sau.',
      advice: 'Trước khi đi xa hãy tìm sẵn một người đáng tin tại chỗ, và giữ nguyên mục đích chính của chuyến đi.',
    },
    'Tật Ách': {
      bright: 'Thiên Lương có tính giải bệnh, sáng ở Tật Ách thì gặp thuốc là thuyên, ít khi có nạn lớn kéo dài, và thường gặp được đúng thầy đúng thuốc. Người này biết dưỡng sinh sớm, hay tìm hiểu về y lý nên tự phòng được nhiều. Nạn nếu có cũng thường hóa giải vào phút cuối.',
      dim: 'Thiên Lương hãm tại Tật Ách thì bệnh mang tính tuổi tác đến sớm: xương khớp, cột sống, huyết áp, gan, tiêu hóa chậm. Bệnh phần nhiều dai dẳng chứ không dữ, chữa được nhưng khó dứt hẳn, phải sống chung và giữ nếp. Ngồi nhiều nghĩ nhiều làm bệnh nặng thêm.',
      advice: 'Tập một môn vận động nhẹ đều đặn cho xương khớp và theo dõi huyết áp hằng tuần.',
    },
    'Tài Bạch': {
      bright: 'Thiên Lương sáng ở Tài Bạch thì tiền đến từ nguồn chính đáng, chậm mà bền, phần nhiều gắn với danh và uy tín nghề nghiệp. Người này ít khi mất lớn vì không tham món dễ, lại có phúc nên gặp lúc khó vẫn có chỗ xoay. Lộc thường dày lên rõ ở tuổi trung niên về sau.',
      dim: 'Thiên Lương hãm tại Tài Bạch thì tiền vừa đủ dùng, khó có khoản dư lớn, và phần dư ấy hay đem cho người vay vì lòng nhân. Cho thì khó lấy lại mà nhắc thì thấy không đành. Cũng dễ mất tiền vì đứng ra bảo lãnh giúp người.',
      advice: 'Ấn định trước mỗi năm một khoản nhỏ dành cho việc giúp người, và ngoài khoản ấy thì không cho vay hay bảo lãnh.',
    },
    'Tử Tức': {
      bright: 'Thiên Lương sáng ở Tử Tức thì con hiếu, có nề nếp, chững chạc hơn tuổi và biết nghe điều phải. Con thường đến muộn nhưng đến thì quý, lớn lên là chỗ dựa của cha mẹ. Sức sáng tạo của bản thân nghiêng về mảng tri thức: nghiên cứu, giảng dạy, truyền lại cho người sau.',
      dim: 'Thiên Lương hãm tại Tử Tức thì con phần nhiều ít, hoặc muộn, hoặc chỉ có một mà cha mẹ dồn hết kỳ vọng vào đó. Dạy con quá nghiêm và quá nhiều đạo lý dễ sinh xa cách, con nghe mà không thân. Ý tưởng của bản thân cũng thường chín trong đầu mà chậm thành hình.',
      advice: 'Cùng con làm việc gì đó thay vì chỉ dạy con, và đặt hạn cụ thể để đưa ý tưởng của mình ra thực tế.',
    },
    'Phu Thê': {
      bright: 'Thiên Lương sáng ở Phu Thê thì bạn đời chững chạc, thường chênh tuổi hoặc chín chắn hơn mình, là chỗ nương tựa lâu dài chứ không phải chỗ vui một đoạn. Hôn nhân bền vì cả hai trọng nghĩa, gặp biến thì cùng đỡ. Đến hết đời vẫn còn người ngồi cùng bàn nói được chuyện.',
      dim: 'Thiên Lương hãm tại Phu Thê thì duyên muộn, hoặc gặp rồi vẫn còn chờ vì tính kỹ quá. Trong nhà hay có chuyện hai bên lên lớp lẫn nhau, ai cũng cho mình đúng đạo lý nên tình thiếu phần nồng. Sống với nhau êm mà lòng cảm thấy như bạn hơn như vợ chồng.',
      advice: 'Bớt phần khuyên nhủ và thêm phần cùng làm cùng đi, tình cảm hâm nóng bằng việc chứ không bằng lời.',
    },
    'Huynh Đệ': {
      bright: 'Thiên Lương sáng ở Huynh Đệ thì có anh chị làm chỗ dựa, được nhường được che, việc khó có người lớn trong nhà đứng ra. Anh em trọng lễ nên ít khi xé chuyện ra to. Bạn thân cũng thuộc kiểu đứng đắn, quen lâu và tin được.',
      dim: 'Thiên Lương hãm tại Huynh Đệ thì anh em xa cách, mỗi người một nếp sống, gặp nhau chỉ dịp lễ. Mình thường phải làm người phân xử giữa các bên, khuyên bên này giải bên kia đến mệt mà chẳng ai trọn ý. Tình thân vì thế thành phần việc.',
      advice: 'Từ chối vai phân xử trong những chuyện không liên quan đến mình, để anh em tự giải quyết với nhau.',
    },
  },

  ThatSat: {
    'Mệnh': {
      bright: 'Thất Sát là tướng tinh chủ uy vũ sát phạt, đóng Mệnh miếu vượng thì mắt sáng có thần, dáng người cương, nói ít mà lời ra là quyết. Người này dám xông pha vào chỗ người khác lùi, tự lập rất sớm, phần nhiều rời nhà đi làm từ tuổi còn nhỏ mà vẫn đứng được. Miếu vượng gặp Kình Dương thì sát khí hóa uy quyền, xứng ngôi cầm quân, càng khó càng tỏ bản lĩnh.',
      dim: 'Thất Sát lạc hãm thì cái quyết đoán hóa thành nóng vội cực đoan — làm rồi mới nghĩ, một câu trái ý là dựng lên ngay. Thân thường mang thương tích, dấu vết trên người là chuyện thường thấy ở cách này. Tính khắc nghiệt với mình và với người nên bạn ít, đường đời phần nhiều cô độc tự chống.',
      advice: 'Trước mỗi quyết định quan trọng hãy để qua một đêm, và tập nói lại ý người khác trước khi phản bác.',
    },
    'Phụ Mẫu': {
      bright: 'Thất Sát sáng ở Phụ Mẫu thì cha mẹ nghiêm cương, rèn con vào khuôn từ nhỏ nên con sớm cứng cỏi và biết chịu. Cấp trên thường là người mạnh và thẳng, nếu mình phục thì được tin dùng và giao việc lớn. Loại bề trên này không khen nhiều nhưng đã dùng thì dùng thật.',
      dim: 'Thất Sát hãm tại Phụ Mẫu thì sớm phải xa cha mẹ, hoặc vì sinh kế hoặc vì không hợp tính nên ít ở gần. Với cấp trên hay xung, hai bên đều cứng nên va chạm dễ thành chuyện lớn. Người này khó chịu được cấp trên yếu hoặc thiếu công bằng.',
      advice: 'Với cấp trên hãy trình bày bằng dữ liệu và giữ giọng phẳng, tránh đối đáp lúc đang có va chạm.',
    },
    'Phúc Đức': {
      bright: 'Thất Sát sáng ở Phúc Đức thì phúc do tự tay tạo — không trông vào tổ tiên mà trông vào sức mình, và điều ấy khiến người này rất vững. Tâm mạnh, không nề gian nan, việc người khác coi là nạn thì mình coi là bài phải giải. Càng qua sóng gió càng dày bản lĩnh, hậu vận thường an vì đã lo đủ.',
      dim: 'Thất Sát hãm tại Phúc Đức thì trong tâm nhiều sát khí, hay bất mãn với hoàn cảnh và với người, ngủ không sâu vì đầu còn đang tranh. Phúc phần mỏng, hay gặp việc bất ngờ xen ngang lúc đang thuận. Người này ít khi cho mình được nghỉ nên thần khí hao.',
      advice: 'Mỗi ngày dành một quãng cho việc không mang tính tranh đấu, và tập một môn thể thao để xả cái nóng ra ngoài.',
    },
    'Điền Trạch': {
      bright: 'Thất Sát sáng ở Điền Trạch thì nhà đất có được nhờ tranh đấu mà nên: mua chỗ người khác không dám mua, hoặc lấy nhà cũ đập đi làm mới. Người này ưa nhà chắc chắn, kết cấu vững, không cần rườm rà. Đất mua rồi thường tự tay cải tạo và tăng giá trị lên rõ.',
      dim: 'Thất Sát hãm tại Điền Trạch thì gia trạch bất an, hay chuyển dời, ở chưa yên đã tính đi. Đất dễ vướng kiện tụng hoặc mua phải chỗ giấy tờ chưa sạch, tranh chấp mất nhiều năm. Nhà thường gần nơi ồn ào, gần xưởng hoặc nơi có kim khí.',
      advice: 'Kiểm tra pháp lý và tranh chấp của thửa đất trước khi đặt cọc, và không mua gấp vì sợ mất cơ hội.',
    },
    'Quan Lộc': {
      bright: 'Thất Sát sáng ở Quan Lộc rất hợp những nghề cần dấn thân và ra quyết định dưới áp lực: quân đội, công an, thể thao, phẫu thuật, cơ khí, xây dựng, khai thác, và khởi nghiệp trong ngành cạnh tranh. Người này càng vào môi trường khốc liệt càng phát, đặt vào chỗ êm thì lại buồn tay. Được cấp dưới nể vì dám nhận trách nhiệm phần nặng nhất.',
      dim: 'Thất Sát hãm tại Quan Lộc thì sự nghiệp lên xuống gấp, một quyết định vội có thể xóa nhiều năm gây dựng. Người này hay đổi ngành theo cảm hứng tranh đấu, và dễ va chạm với đồng sự vì cách nói thẳng quá. Công thì có mà đường tiến hay bị chặn bởi quan hệ.',
      advice: 'Tìm một người bình tĩnh làm cặp phản biện trước khi ra quyết định lớn, và giữ nguyên ngành đủ lâu để tích vốn nghề.',
    },
    'Nô Bộc': {
      bright: 'Thất Sát sáng ở Nô Bộc thì bạn ít mà nghĩa, đã nhận nhau thì lúc hoạn nạn có mặt, không cần nhiều lời. Người dưới quyền nghe lệnh và làm được việc vì thấy mình rõ ràng, thưởng phạt phân minh. Trong nhóm mình là người đứng mũi chịu sào nên được tin.',
      dim: 'Thất Sát hãm tại Nô Bộc thì bạn dễ trở mặt, hôm nay chung thuyền mai đã đứng bên kia. Người dưới hay chống ngầm vì thấy mình khắt khe, việc giao đi mà làm không tới. Người này cũng hay tự làm hết vì không tin ai, càng thêm cô độc.',
      advice: 'Viết rõ tiêu chí thưởng phạt cho cộng sự và giữ đúng, đồng thời tập giao việc kèm hạn thay vì tự làm tất.',
    },
    'Thiên Di': {
      bright: 'Thất Sát sáng ở Thiên Di thì ra ngoài là mở đất — càng xa quê càng dễ lập nghiệp, xông pha nơi lạ mà nên công. Người này ở đất khách không sợ, gặp việc khó thì càng tỉnh. Xuất ngoại phần nhiều hợp, nhất là đi làm nghề cần sức và cần gan.',
      dim: 'Thất Sát hãm tại Thiên Di thì ra ngoài hay va chạm, dễ dính tranh chấp với người lạ vì một câu nói. Cần đề phòng tai nạn xe cộ, va đập và thương tích khi đi đường xa. Đi càng gấp càng dễ gặp chuyện.',
      advice: 'Đi đường luôn giữ tốc độ chậm hơn thói quen và tuyệt đối tránh tranh cãi với người lạ ở nơi xa.',
    },
    'Tật Ách': {
      bright: 'Thất Sát sáng ở Tật Ách thì thể lực tốt, sức chịu đựng hơn người, bệnh đến nhanh mà khỏi cũng nhanh. Điều cần giữ nhất là thương tích chứ không phải bệnh tật. Người này hồi phục tốt sau phẫu thuật hoặc va chạm.',
      dim: 'Thất Sát hãm tại Tật Ách thì hay dính chuyện dao thớt kim khí: mổ xẻ, tai nạn, gãy vỡ, vết thương ngoài. Bệnh thường thuộc gân xương, phổi và những chứng cấp phát ập tới không báo trước. Người này hay chịu đau mà không nói nên lúc phát hiện đã muộn.',
      advice: 'Trang bị bảo hộ đầy đủ khi làm việc có nguy cơ và đi khám ngay khi có dấu hiệu bất thường, đừng chịu đựng.',
    },
    'Tài Bạch': {
      bright: 'Thất Sát sáng ở Tài Bạch thì tiền do tay mình tranh lấy — không chờ ai cho, thấy cơ là vào và kiếm được rất gấp. Người này dám bỏ vốn vào chỗ người khác chần chừ, nên có những khoản lời lớn. Kiếm gấp mà cũng biết dứt gấp khi thấy sai.',
      dim: 'Thất Sát hãm tại Tài Bạch thì tiền vào ra như sóng, được một mẻ lại mất một mẻ, cuối năm tính lại thấy chưa dày lên. Hao lớn nhất đến từ mạo hiểm quá tay và từ việc đứng ra bảo lãnh cho người. Người này hay tin vào sức mình mà xem nhẹ phần rủi ro.',
      advice: 'Chia vốn thành phần an toàn và phần mạo hiểm với tỷ lệ cố định, và không bao giờ bảo lãnh nợ cho ai.',
    },
    'Tử Tức': {
      bright: 'Thất Sát sáng ở Tử Tức thì con cứng cỏi có chí, ít mà giỏi, sớm biết tự lo và không cần cha mẹ kèm. Con loại này dám đi xa và làm được việc lớn. Sức sáng tạo của bản thân thuộc lối đột phá, dám thử cái người khác không dám.',
      dim: 'Thất Sát hãm tại Tử Tức thì con phần nhiều ít, đường sinh nở có chỗ khó, cần cẩn trọng trong thai kỳ. Cha con hay xung vì cả hai đều cứng, đến tuổi con lớn thì càng dễ va. Ý tưởng của bản thân bùng lên mạnh rồi tắt nhanh, nhiều cái bỏ giữa đường.',
      advice: 'Với con hãy đặt luật ít mà giữ nghiêm thay vì áp đặt nhiều điều, và buộc mình hoàn thành từng ý tưởng một.',
    },
    'Phu Thê': {
      bright: 'Thất Sát sáng ở Phu Thê thì bạn đời cá tính mạnh, có nghề có chí, hai người cùng xông pha thì thành một cặp đáng gờm trong công việc. Hôn nhân loại này không êm dịu nhưng rất bền nếu phân định rõ ai chủ việc gì. Được cái là cả hai đều thẳng, ít khi để bụng lâu.',
      dim: 'Thất Sát khí cương, đóng Phu Thê thì đường phối ngẫu dễ xung khắc — cả hai đều muốn làm chủ nên hay va chạm. Lạc hãm gặp sát tinh càng dễ chia ly hoặc hôn nhân muộn; nên chọn bạn đời nhu hòa để bổ khuyết, và tránh cưới gấp trong lúc còn đang thử thách nhau. Cãi nhau thường ngắn mà nặng lời, để lại vết khó xóa.',
      advice: 'Phân định rõ ai quyết việc gì trong nhà và giữ đúng, đồng thời không nói lời nặng lúc đang nóng.',
    },
    'Huynh Đệ': {
      bright: 'Thất Sát sáng ở Huynh Đệ thì trong anh em có người làm trụ, đứng ra chịu phần nặng cho cả nhà. Việc chung được chia rõ ràng, ai nhận phần nào thì làm tới cùng. Bạn thân cũng thuộc kiểu ít nói mà đến lúc cần thì có mặt ngay.',
      dim: 'Thất Sát hãm tại Huynh Đệ thì anh em xung đột, có người nóng nên gặp nhau dễ to tiếng, dần dần ít qua lại. Việc gì cũng phải tự mình lo vì không dựa được vào ai. Chia của cải trong nhà dễ thành chuyện nặng.',
      advice: 'Trao đổi việc nhà bằng tin nhắn hoặc qua một người trung gian khi biết gặp mặt sẽ căng.',
    },
  },

  PhaQuan: {
    'Mệnh': {
      bright: 'Phá Quân là hao tinh, nhưng miếu ở Tý Ngọ thì cái hao hóa thành khai phá — đây là mẫu người dám đạp đổ cái cũ để dựng cái mới, đi trước thời một bước. Chịu khó chịu khổ hơn người thường, việc gì đã quyết là làm tới, không sợ mất mặt cũng không sợ bắt đầu lại từ đầu. Cái đáng giá nhất là dám phá chính thành quả của mình khi thấy nó đã lỗi, điều mà phần lớn người ta không làm được.',
      dim: 'Phá Quân hãm thì hao tán rõ — dựng lên rồi tự tay đập, mười việc chín việc dở dang, sức bỏ ra nhiều mà thành quả đọng lại ít. Tính khí ngang, hay đổi ý bất chợt nên người quanh khó theo. Cũng dễ phá tài phá lễ: tiêu tán tiền của, xem nhẹ khuôn phép, làm mất lòng bề trên mà không hay.',
      advice: 'Buộc mình hoàn thành một việc trọn vẹn trước khi cho phép bắt đầu việc mới.',
    },
    'Phụ Mẫu': {
      bright: 'Phá Quân sáng ở Phụ Mẫu thì cha mẹ có cá tính, không giữ con trong khuôn cũ, để con tự mở đường riêng. Người này sớm rời tổ mà lại nên, xa nhà là bước ngoặt tốt. Cấp trên thuộc kiểu dám dùng người mới, thích ý tưởng khác lối.',
      dim: 'Phá Quân hãm tại Phụ Mẫu thì sớm lìa cha mẹ, hoặc trong nhà có biến khiến gia cảnh đổi khác, con cái phải tự lo từ nhỏ. Với bề trên hay khắc, dễ bị cấp trên thay đổi quyết định làm mình trở tay không kịp. Việc thừa kế, giấy tờ liên quan cha mẹ hay có biến động.',
      advice: 'Xác nhận lại bằng văn bản mọi cam kết của cấp trên, và giữ liên lạc với cha mẹ đều dù ở xa.',
    },
    'Phúc Đức': {
      bright: 'Phá Quân sáng ở Phúc Đức thì phúc đến từ chính sự dám thay đổi: mỗi lần bỏ cái cũ lại mở ra một cửa mới rộng hơn. Tâm người này không sợ mất, nhờ vậy ít bị hoàn cảnh cầm chân. Đến hậu vận nhìn lại mới thấy những lần đổ vỡ đều là chặng cần thiết.',
      dim: 'Phá Quân hãm tại Phúc Đức thì tâm bất định, đang yên lại tự dựng sóng, nhiều khi tự tay đập bỏ những gì mình vừa dựng xong. Phúc phần mỏng nên hay gặp việc xen ngang, được rồi lại mất. Người này cần bù bằng tu tâm và làm việc thiện mới dày lại được.',
      advice: 'Trước khi phá bỏ điều gì đang ổn, hãy viết ra ba lý do và để qua một tuần mới quyết.',
    },
    'Điền Trạch': {
      bright: 'Phá Quân sáng ở Điền Trạch thì nhà cửa qua tay nhiều lần nhưng lần sau tốt hơn lần trước, đó là cái hay của sao phá cách. Rất hợp mua nhà cũ giá thấp rồi sửa lại thành nhà tốt, tay này làm là ra tiền. Người này không tiếc nhà cũ nên biết bán đúng lúc.',
      dim: 'Phá Quân hãm tại Điền Trạch thì tổ nghiệp dễ tan, nhà đất truyền lại không giữ được, phải tự gây từ tay trắng. Chỗ ở dời liên tục, thuê nhiều hơn mua, và hao rất nhiều vào việc sửa chữa vá chỗ này hỏng chỗ khác. Nhà thường có chỗ dở dang chưa xong.',
      advice: 'Ở đủ lâu một nơi để tích được vốn rồi hãy tính chuyện dời, và không khởi công sửa khi chưa đủ tiền cho toàn bộ hạng mục.',
    },
    'Quan Lộc': {
      bright: 'Phá Quân sáng ở Quan Lộc là đất của người khai phá: khởi nghiệp, cải tổ doanh nghiệp, phá dỡ xây mới, công nghệ mới, mở thị trường chưa ai vào. Người này giỏi nhất ở giai đoạn dựng nền và xoay chuyển tình thế xấu, còn giai đoạn giữ ổn định thì nên trao cho người khác. Xông trận mở đường là công lớn nhất của cách này.',
      dim: 'Phá Quân hãm tại Quan Lộc thì đổi việc như đổi áo, chỗ nào cũng chỉ ở được một quãng rồi đi. Việc hay dở dang, làm được bảy phần lại bỏ, nên tiếng chưa kịp dựng. Cũng dễ mất vị trí vì cải cách quá gấp, đạp vào lợi ích người khác mà chưa có đồng minh.',
      advice: 'Trước khi cải cách hãy tìm đủ hai ba người đồng minh trong nội bộ, và cam kết ở lại đến khi việc chạy được.',
    },
    'Nô Bộc': {
      bright: 'Phá Quân sáng ở Nô Bộc thì bạn bè thuộc kiểu chiến hữu — cùng nhau phá cái cũ dựng cái mới, gian nan không rời. Người này thu hút được những người dám làm, nhóm ít mà mạnh. Cộng sự loại này không cần dỗ, chỉ cần mục tiêu rõ.',
      dim: 'Phá Quân hãm tại Nô Bộc thì bạn đến rồi tan theo từng chặng, nhóm nào cũng chỉ gắn được một giai đoạn. Dễ bị người kéo vào những việc hao tài: góp vốn dở, bảo lãnh, hợp tác nghe hay mà nền mỏng. Chia tay bạn cũ thường không êm.',
      advice: 'Chỉ góp vốn với người đã làm chung trọn một dự án, và mọi hợp tác phải có điều khoản rút ra rõ ràng.',
    },
    'Thiên Di': {
      bright: 'Phá Quân sáng ở Thiên Di thì ra ngoài mới nên — càng xa quê càng dễ phát, đổi chỗ là đổi vận. Xuất ngoại thường là bước ngoặt lớn nhất của đời người này, đi rồi mới thấy đất dụng võ. Ở nơi lạ mà lại dám làm hơn ở nhà.',
      dim: 'Phá Quân hãm tại Thiên Di thì đi xa hao tổn, tiền mang theo tiêu tán, hành lý giấy tờ dễ mất mát. Chuyến đi hay có biến động ngoài dự tính: đổi lịch, hủy chuyến, đến rồi việc lại khác. Đi nhiều mà thu về ít.',
      advice: 'Mua bảo hiểm chuyến đi, sao lưu giấy tờ, và giữ một khoản dự phòng riêng cho mỗi chuyến xa.',
    },
    'Tật Ách': {
      bright: 'Phá Quân sáng ở Tật Ách thì thể chất bền, chịu được cường độ cao và hồi phục tốt sau va chạm. Phần cần phòng là thương tích và những chứng cần can thiệp, chứ không phải bệnh lâu ngày. Khám định kỳ đều thì hầu như yên.',
      dim: 'Phá Quân hãm tại Tật Ách thì bệnh phần nhiều phải mổ mới dứt, hay gặp ở răng, xương, đường sinh dục tiết niệu và da. Cũng dễ có tai nạn bất ngờ, va đập, đứt gãy — đến không báo trước. Người này hay bỏ dở đợt điều trị nên bệnh cũ dễ trở lại.',
      advice: 'Theo hết liệu trình điều trị dù đã thấy đỡ, và khám răng cùng kiểm tra tổng quát mỗi năm.',
    },
    'Tài Bạch': {
      bright: 'Phá Quân sáng ở Tài Bạch thì tiền đến sau khi dám phá cái cũ: bỏ nghề cũ, cắt khoản lỗ, đổi cách làm — vừa phá xong thì tiền vào. Người này có gan đầu tư vào chỗ đang xuống giá rồi chờ lên, tính toán mà vẫn dám. Kiếm được thường là những mẻ lớn cách nhau.',
      dim: 'Phá Quân hãm tại Tài Bạch thì tiền hao như nước qua tay, vừa gom được một khoản là có việc làm vỡ. Kỵ nhất là bảo lãnh và cho vay, hầu như cho là mất. Người này dễ dốc hết vốn vào một cửa rồi không còn đường lui.',
      advice: 'Luôn giữ một phần vốn không được phép chạm tới, và tuyệt đối không bảo lãnh hay cho vay khoản lớn.',
    },
    'Tử Tức': {
      bright: 'Phá Quân sáng ở Tử Tức thì con cá tính, phá cách, không đi theo lối cha mẹ nhưng lại có tài riêng và tự mở được đường. Nuôi con này cần rộng tay chứ đừng bó, để con thử thì con nên. Sức sáng tạo của bản thân thuộc lối đột phá, thường nghĩ ra cái người khác chưa dám nghĩ.',
      dim: 'Phá Quân hãm tại Tử Tức thì con khó dạy, ngang và hay làm trái ý, cha mẹ nói một con làm hai. Đường sinh nở cần cẩn trọng, có thể gặp chuyện hư thai hoặc sinh khó, nên khám thai đầy đủ. Ý tưởng của bản thân thì nhiều mà bỏ dở cũng nhiều.',
      advice: 'Cho con khoảng tự do trong giới hạn an toàn thay vì cấm đoán, và mỗi lúc chỉ theo đuổi một dự án đến cùng.',
    },
    'Phu Thê': {
      bright: 'Phá Quân sáng ở Phu Thê thì bạn đời thuộc kiểu khác lạ, không theo khuôn thường, hai người có thể cùng nhau làm những việc người khác không dám. Hôn nhân qua được sóng gió ban đầu thì về sau rất bền, vì cả hai đã thử nhau đủ. Cái hay là không ai giả vờ, có gì nói ngay.',
      dim: 'Phá Quân hãm tại Phu Thê thì hôn nhân dễ tan hợp, cưới gấp rồi lại tính lại, có thể lập gia đình hơn một lần. Người này hay quyết chuyện tình cảm trong lúc xúc động nên về sau phải trả giá. Cần chậm mà chắc, và tránh những quyết định lớn giữa lúc đang cãi nhau.',
      advice: 'Không quyết chuyện cưới hay chia trong vòng một tháng kể từ lúc có biến động cảm xúc.',
    },
    'Huynh Đệ': {
      bright: 'Phá Quân sáng ở Huynh Đệ thì trong anh em có người dám mở đường, đi trước rồi kéo cả nhà theo. Người ấy thường bị nói lúc đầu mà về sau cả họ được nhờ. Bạn thân cũng thuộc kiểu dám thay đổi, cùng mình làm những việc mới.',
      dim: 'Phá Quân hãm tại Huynh Đệ thì anh em ly tán mỗi người một hướng, gặp nhau thưa và ít khi bàn được việc chung. Chuyện chia của cải dễ làm mất luôn tình, được phần mà mất người. Có người trong số họ hay gặp biến động khiến cả nhà phải xoay.',
      advice: 'Việc chia tài sản nên làm sớm khi còn thuận và có người ngoài chứng kiến, đừng để đến lúc đã có mâu thuẫn.',
    },
  },
};
