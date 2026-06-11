import { SignId, AscendantReading } from './types';

export const ascendantReadings: Record<SignId, AscendantReading> = {
  aries: {
    title: 'Cung Mọc Bạch Dương (Aries Rising)',
    description:
      'Bạn bước vào căn phòng như một tia lửa — nhanh, thẳng và đầy năng lượng. Dáng vẻ của bạn thường toát lên sự dứt khoát: bước đi nhanh nhẹn, ánh mắt trực diện, đôi khi nét mặt mang chút sắc bén đặc trưng của Sao Hỏa. Người mới gặp thấy bạn tự tin, quyết đoán, thậm chí hơi nóng vội — bạn là người mở lời trước, hành động trước. Bạn tiếp cận cuộc sống như một cuộc phiêu lưu cần chinh phục ngay lập tức, không thích chờ đợi hay vòng vo. Tinh thần tiên phong ấy khiến bạn luôn trẻ trung, dù năm tháng có trôi qua.',
    advice:
      'Hãy giữ ngọn lửa tiên phong ấy, nhưng học cách hít thở sâu trước khi lao đi — sự kiên nhẫn sẽ biến dũng khí của bạn thành chiến thắng bền lâu.',
  },
  taurus: {
    title: 'Cung Mọc Kim Ngưu (Taurus Rising)',
    description:
      'Bạn hiện diện như một khu vườn yên bình — điềm tĩnh, vững chãi và dễ chịu. Diện mạo của bạn thường mang nét đầy đặn, ấm áp của Sao Kim: giọng nói êm, cử chỉ khoan thai, gu thẩm mỹ tinh tế trong cách ăn mặc. Ấn tượng đầu tiên bạn để lại là sự đáng tin cậy — người ta cảm thấy an toàn và được xoa dịu khi ở cạnh bạn. Bạn tiếp cận cuộc sống một cách từ tốn, chắc chắn, ưu tiên sự ổn định và những giá trị bền vững. Bạn không vội, vì bạn biết những điều đẹp đẽ nhất đều cần thời gian để chín.',
    advice:
      'Sự vững vàng là món quà của bạn, nhưng đừng để nó hóa thành bức tường — thỉnh thoảng hãy cho phép cuộc đời làm bạn ngạc nhiên.',
  },
  gemini: {
    title: 'Cung Mọc Song Tử (Gemini Rising)',
    description:
      'Bạn xuất hiện như một làn gió tươi mới — linh hoạt, lanh lợi và đầy tò mò. Đôi mắt bạn thường sáng và chuyển động nhanh, nụ cười sẵn trên môi, tay hay phụ họa khi nói chuyện. Người mới gặp lập tức bị cuốn vào câu chuyện của bạn: bạn hỏi, bạn kể, bạn pha trò — không khí quanh bạn không bao giờ tẻ nhạt. Bạn tiếp cận cuộc sống bằng trí óc, luôn muốn hiểu, muốn thử, muốn kết nối với nhiều người và nhiều ý tưởng cùng lúc. Sự trẻ trung trong tâm hồn khiến bạn trông trẻ hơn tuổi rất lâu.',
    advice:
      'Trí tò mò là đôi cánh của bạn — chỉ cần thỉnh thoảng đậu lại đủ lâu để một điều gì đó kịp bén rễ trong tim.',
  },
  cancer: {
    title: 'Cung Mọc Cự Giải (Cancer Rising)',
    description:
      'Bạn bước vào thế giới với ánh trăng dịu dàng trong mắt — mềm mại, ý tứ và đầy quan tâm. Gương mặt bạn thường tròn trịa, biểu cảm phong phú, dễ lộ cảm xúc dù bạn cố giấu. Ấn tượng đầu tiên người khác nhận được là sự ấm áp gần gũi như người thân — họ thấy được lắng nghe, được chăm sóc khi ở bên bạn. Bạn tiếp cận cuộc sống bằng trực giác và cảm xúc, thận trọng dò nước trước khi bước, và luôn cần một "mái nhà" an toàn để lui về. Khi đã tin ai, bạn ôm trọn người đó vào vùng che chở của mình.',
    advice:
      'Trái tim rộng mở là sức mạnh của bạn — hãy nhớ chăm sóc chính mình dịu dàng như cách bạn vẫn chăm sóc mọi người.',
  },
  leo: {
    title: 'Cung Mọc Sư Tử (Leo Rising)',
    description:
      'Bạn bước vào đâu, ánh đèn sân khấu dường như theo đến đó — rạng rỡ, ấm áp và đầy khí chất. Mái tóc thường là điểm nhấn của bạn như bờm sư tử, dáng đi thẳng và phong thái tự tin bẩm sinh. Người mới gặp thấy bạn nồng nhiệt, hào phóng và cuốn hút — bạn khiến họ cảm thấy đặc biệt chỉ bằng một nụ cười. Bạn tiếp cận cuộc sống như một vở kịch lớn mà mình là nhân vật chính: sống hết mình, yêu hết lòng và không ngại tỏa sáng. Niềm kiêu hãnh giúp bạn đứng vững, miễn là nó đi cùng trái tim bao dung.',
    advice:
      'Cứ tỏa sáng như mặt trời của bạn — và hãy nhớ rằng ánh sáng đẹp nhất là ánh sáng biết soi ấm cho người khác cùng rực rỡ.',
  },
  virgo: {
    title: 'Cung Mọc Xử Nữ (Virgo Rising)',
    description:
      'Bạn hiện diện một cách chỉn chu và tinh tế — gọn gàng, nhã nhặn, không phô trương nhưng khó quên. Diện mạo của bạn thường thanh thoát, ánh mắt quan sát kỹ lưỡng, trang phục được chăm chút đến từng chi tiết nhỏ. Ấn tượng đầu tiên bạn để lại là sự thông minh điềm đạm và đáng tin — người ta cảm thấy bạn là người "biết việc". Bạn tiếp cận cuộc sống bằng sự phân tích và mong muốn hoàn thiện: quan sát trước, sắp xếp rồi mới hành động. Sự khiêm tốn của bạn đôi khi che mất tài năng thật sự bên trong.',
    advice:
      'Đôi mắt tinh tường của bạn nhìn thấy mọi vết nứt — hãy dùng nó để thấy cả những điều đã đủ đẹp, kể cả ở chính mình.',
  },
  libra: {
    title: 'Cung Mọc Thiên Bình (Libra Rising)',
    description:
      'Bạn bước vào thế giới với nét duyên dáng của Sao Kim — hài hòa, lịch thiệp và dễ mến lạ thường. Gương mặt bạn thường cân đối với nụ cười dịu, phong cách ăn mặc trang nhã và có gu thẩm mỹ tự nhiên. Người mới gặp lập tức thấy thoải mái: bạn biết lắng nghe, biết nhường lời và khéo léo làm dịu mọi căng thẳng. Bạn tiếp cận cuộc sống qua lăng kính của các mối quan hệ, luôn tìm kiếm sự cân bằng và công bằng trong mọi việc. Thế giới quanh bạn vì thế thường êm đẹp hơn — dù đôi khi bạn quên hỏi chính mình muốn gì.',
    advice:
      'Sự hài hòa bạn mang đến là món quà quý — nhưng đừng quên rằng nói "không" đúng lúc cũng là một cách giữ cán cân thăng bằng.',
  },
  scorpio: {
    title: 'Cung Mọc Bọ Cạp (Scorpio Rising)',
    description:
      'Bạn hiện diện với một sức hút bí ẩn khó gọi tên — trầm lặng, sâu thẳm và đầy nội lực. Ánh mắt là vũ khí của bạn: xuyên thấu, mãnh liệt, khiến người đối diện cảm giác bị nhìn thấu tâm can. Ấn tượng đầu tiên bạn để lại thường là sự dè dặt đầy quyền lực — người ta vừa tò mò vừa nể, cảm nhận được chiều sâu phía sau vẻ ngoài kín đáo. Bạn tiếp cận cuộc sống như một thám tử của tâm hồn: quan sát, dò xét, chỉ trao lòng tin khi đã chắc chắn. Một khi cam kết, bạn dấn thân trọn vẹn với cường độ ít ai sánh được.',
    advice:
      'Chiều sâu của bạn là kho báu — hãy can đảm hé mở nó với những người xứng đáng, vì sự tổn thương được chia sẻ chính là khởi đầu của chuyển hóa.',
  },
  sagittarius: {
    title: 'Cung Mọc Nhân Mã (Sagittarius Rising)',
    description:
      'Bạn bước vào đời như một mũi tên vừa rời cung — phóng khoáng, lạc quan và tràn đầy sức sống. Dáng vẻ của bạn thường cao ráo hoặc rắn rỏi, nụ cười rộng mở, điệu bộ thoải mái không câu nệ. Người mới gặp thấy bạn vui vẻ, thẳng thắn và truyền cảm hứng — ở cạnh bạn, mọi chuyện dường như đều có lối ra. Bạn tiếp cận cuộc sống như một hành trình khám phá bất tận: luôn hướng về chân trời mới, tin rằng ngày mai chắc chắn tươi sáng hơn hôm nay. Tự do là hơi thở của bạn, và niềm tin là la bàn dẫn đường.',
    advice:
      'Cứ nhắm về những chân trời xa — chỉ cần thỉnh thoảng dừng chân để trân trọng mảnh đất đang đứng và những người đang đồng hành.',
  },
  capricorn: {
    title: 'Cung Mọc Ma Kết (Capricorn Rising)',
    description:
      'Bạn hiện diện với phong thái chững chạc vượt tuổi — nghiêm túc, đáng tin và toát lên uy tín tự nhiên. Diện mạo của bạn thường mang nét góc cạnh, thanh lịch kiểu cổ điển, cử chỉ chừng mực và có chủ đích. Ấn tượng đầu tiên bạn để lại là sự chuyên nghiệp: người ta tin rằng giao việc cho bạn là yên tâm. Bạn tiếp cận cuộc sống như leo một ngọn núi dài — có kế hoạch, có kỷ luật và sẵn sàng trả giá bằng nỗ lực bền bỉ. Điều thú vị là bạn càng lớn tuổi càng nhẹ nhõm, như thể thời gian trả lại cho bạn tuổi trẻ.',
    advice:
      'Đỉnh núi sẽ chờ bạn, vì bạn chắc chắn sẽ tới — hãy cho phép mình cười nhiều hơn và nghỉ ngơi trên những chặng dừng của hành trình.',
  },
  aquarius: {
    title: 'Cung Mọc Bảo Bình (Aquarius Rising)',
    description:
      'Bạn xuất hiện với một nét khác biệt không thể trộn lẫn — độc đáo, thông thái và thân thiện theo cách rất riêng. Phong cách của bạn thường phá cách, ánh mắt sáng và xa xăm như đang nhìn thấy điều người khác chưa thấy. Ấn tượng đầu tiên bạn để lại là sự thú vị: cởi mở với tất cả mọi người nhưng vẫn giữ một khoảng trời bí ẩn của riêng mình. Bạn tiếp cận cuộc sống bằng lý trí và tầm nhìn — quan sát thế giới từ trên cao, đặt câu hỏi với mọi khuôn mẫu và mơ về những điều tốt đẹp hơn cho cộng đồng. Tự do tư tưởng là điều bạn không bao giờ đánh đổi.',
    advice:
      'Hãy cứ khác biệt, vì thế giới cần góc nhìn của bạn — và đừng quên rằng trái tim cũng có những chân lý mà lý trí không chạm tới được.',
  },
  pisces: {
    title: 'Cung Mọc Song Ngư (Pisces Rising)',
    description:
      'Bạn hiện diện như một màn sương huyền ảo — dịu dàng, mơ màng và đầy trắc ẩn. Đôi mắt bạn thường to, sâu và ướt át như mặt hồ, toàn thân toát lên vẻ mềm mại khiến người khác muốn che chở. Ấn tượng đầu tiên bạn để lại là sự dễ gần kỳ lạ: người lạ cũng sẵn lòng trút bầu tâm sự, vì họ cảm thấy được bạn thấu hiểu không lời. Bạn tiếp cận cuộc sống bằng trực giác và cảm nhận, trôi theo dòng chảy hơn là bơi ngược, dễ hòa mình vào tâm trạng của môi trường xung quanh. Tâm hồn bạn là cây cầu nối giữa cõi thực và cõi mộng.',
    advice:
      'Lòng trắc ẩn của bạn là phép màu — hãy dựng cho mình một bến neo vững chãi để cho đi mà không tan biến vào nỗi buồn của người khác.',
  },
};
