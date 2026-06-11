// Luận giải Thiên Đỉnh (MC - Midheaven) — đỉnh sự nghiệp, thiên hướng nghề nghiệp,
// hình ảnh công khai trước xã hội và di sản để đời.

import { SignId } from './types';

export interface McReading {
  title: string;
  description: string;
  advice: string;
}

export const mcInSign: Record<SignId, McReading> = {
  aries: {
    title: 'Thiên Đỉnh tại Bạch Dương (MC in Aries)',
    description:
      'Đỉnh núi sự nghiệp của bạn được khắc bằng ngọn lửa tiên phong: bạn sinh ra để mở đường, khởi xướng và dẫn đầu nơi chưa ai dám bước. Xã hội nhìn bạn như một người can đảm, quyết đoán, đôi khi nóng nảy nhưng luôn tràn đầy sinh khí. Bạn thăng hoa trong những môi trường cạnh tranh, nhịp độ nhanh, nơi thành tích được đo bằng hành động chứ không phải lời nói. Thành tựu tự nhiên của bạn là những "lần đầu tiên" — dự án đầu tiên, công ty đầu tiên, kỷ lục đầu tiên mang dấu tay bạn.',
    advice:
      'Hãy cân nhắc khởi nghiệp, thể thao, quân đội, phẫu thuật, cứu hộ hoặc vai trò trưởng nhóm tiên phong. Học sự bền bỉ để ngọn lửa khởi đầu cháy được đến đích.',
  },
  taurus: {
    title: 'Thiên Đỉnh tại Kim Ngưu (MC in Taurus)',
    description:
      'Sự nghiệp của bạn lớn lên như cây cổ thụ: chậm rãi, chắc chắn, và càng theo năm tháng càng vững vàng giá trị. Xã hội nhìn bạn như một người đáng tin cậy, điềm đạm, có gu thẩm mỹ tinh tế và khả năng biến mọi thứ chạm tay thành của cải bền vững. Bạn hợp với những lĩnh vực gắn liền với giá trị hữu hình: tài chính, đất đai, ẩm thực, nghệ thuật, những sản phẩm đẹp và chất lượng. Di sản của bạn là sự ổn định — những gì bạn xây sẽ còn đứng vững rất lâu sau khi bạn rời đi.',
    advice:
      'Hãy hướng đến ngân hàng, đầu tư, bất động sản, ẩm thực, thiết kế, mỹ thuật hoặc nông nghiệp bền vững. Kiên nhẫn là siêu năng lực nghề nghiệp của bạn — đừng để ai thúc bạn đi nhanh hơn nhịp của đất.',
  },
  gemini: {
    title: 'Thiên Đỉnh tại Song Tử (MC in Gemini)',
    description:
      'Con đường sự nghiệp của bạn được dệt bằng ngôn từ, ý tưởng và những nhịp cầu kết nối. Xã hội nhìn bạn như một người thông minh, hoạt ngôn, linh hoạt — gương mặt có thể xuất hiện ở nhiều lĩnh vực mà ở đâu cũng tỏa sáng bằng trí tuệ nhanh nhạy. Bạn thăng hoa khi công việc cho phép học hỏi không ngừng, giao tiếp đa chiều và thay đổi đề tài liên tục; sự đơn điệu là kẻ thù lớn nhất của tài năng trong bạn. Thành tựu tự nhiên của bạn là lan tỏa tri thức: một bài viết, một bài giảng, một thông điệp khiến hàng ngàn người "à ra thế".',
    advice:
      'Hãy cân nhắc báo chí, truyền thông, viết lách, giảng dạy, marketing, phiên dịch hoặc thương mại. Cho phép mình có hai sự nghiệp song song — đó không phải thiếu tập trung, đó là thiết kế của bạn.',
  },
  cancer: {
    title: 'Thiên Đỉnh tại Cự Giải (MC in Cancer)',
    description:
      'Đỉnh cao sự nghiệp của bạn mang hình dáng một mái nhà: bạn thành công nhất khi công việc nuôi dưỡng, che chở và chăm lo cho con người. Xã hội nhìn bạn như một người ấm áp, tận tâm, có trực giác nhạy bén về nhu cầu của người khác — vị sếp mà nhân viên xem như người thân. Bạn hợp với những lĩnh vực chạm vào đời sống và cảm xúc: chăm sóc sức khỏe, giáo dục, ẩm thực, nhà ở, tâm lý, hoặc kinh doanh gia đình. Di sản của bạn không phải tượng đài lạnh lẽo, mà là những con người đã được bạn nâng đỡ trưởng thành.',
    advice:
      'Hãy hướng đến điều dưỡng, tâm lý, giáo dục mầm non, quản lý nhân sự, nhà hàng - khách sạn hoặc bất động sản gia đình. Trực giác của bạn là cố vấn nghề nghiệp tốt nhất — hãy tin nó.',
  },
  leo: {
    title: 'Thiên Đỉnh tại Sư Tử (MC in Leo)',
    description:
      'Bạn sinh ra với ánh đèn sân khấu chiếu sẵn lên con đường sự nghiệp: định mệnh muốn bạn được nhìn thấy, được tỏa sáng và truyền cảm hứng. Xã hội nhìn bạn như một người cuốn hút, hào phóng, có phong thái của thủ lĩnh bẩm sinh — nơi bạn xuất hiện, không khí lập tức ấm lên. Bạn thăng hoa trong những vai trò sáng tạo, biểu diễn hoặc lãnh đạo, nơi dấu ấn cá nhân được trân trọng thay vì bị hòa tan. Thành tựu tự nhiên của bạn là những tác phẩm và thương hiệu mang đậm chất "bạn", khiến người khác nhớ mãi.',
    advice:
      'Hãy cân nhắc nghệ thuật biểu diễn, giải trí, lãnh đạo doanh nghiệp, xây dựng thương hiệu cá nhân, giáo dục truyền cảm hứng hoặc làm việc với trẻ em. Tỏa sáng để soi đường cho người khác — đó là khi vương miện của bạn đẹp nhất.',
  },
  virgo: {
    title: 'Thiên Đỉnh tại Xử Nữ (MC in Virgo)',
    description:
      'Sự nghiệp của bạn được xây bằng sự tinh xảo: kỹ năng mài giũa, con mắt nhìn ra chi tiết mà người khác bỏ sót, và tinh thần phụng sự âm thầm mà bền bỉ. Xã hội nhìn bạn như một chuyên gia đáng tin — người mà khi việc khó xuất hiện, mọi ánh mắt đều quay về phía bạn. Bạn hợp với những lĩnh vực đòi hỏi chính xác và cải tiến không ngừng: y tế, phân tích, kỹ thuật, biên tập, dinh dưỡng, quản lý chất lượng. Di sản của bạn là những hệ thống vận hành trơn tru và những con người được bạn chữa lành, hướng dẫn bằng tay nghề thật.',
    advice:
      'Hãy hướng đến y dược, phân tích dữ liệu, kiểm toán, biên tập, dinh dưỡng hoặc vận hành doanh nghiệp. Đừng đợi hoàn hảo mới dám nhận công lao — sự tận tụy của bạn xứng đáng được nhìn thấy.',
  },
  libra: {
    title: 'Thiên Đỉnh tại Thiên Bình (MC in Libra)',
    description:
      'Con đường sự nghiệp của bạn là nghệ thuật của sự cân bằng: kết nối con người, hòa giải xung đột và mang cái đẹp vào thế giới. Xã hội nhìn bạn như một người duyên dáng, công tâm, khéo léo — gương mặt ngoại giao mà ai cũng muốn ngồi cùng bàn đàm phán. Bạn thăng hoa khi làm việc theo cặp hoặc đối tác, trong những lĩnh vực đề cao công lý, thẩm mỹ và quan hệ: luật, thiết kế, nghệ thuật, tư vấn, ngoại giao. Thành tựu tự nhiên của bạn là những thỏa thuận tưởng như bất khả thi và những không gian, sản phẩm khiến đời đẹp hơn.',
    advice:
      'Hãy cân nhắc luật sư, hòa giải viên, ngoại giao, thiết kế, thời trang, tư vấn quan hệ công chúng hoặc quản lý đối tác. Học cách quyết đoán — chiếc cân chỉ giá trị khi cuối cùng nó cũng nghiêng về một phía.',
  },
  scorpio: {
    title: 'Thiên Đỉnh tại Thiên Yết (MC in Scorpio)',
    description:
      'Sự nghiệp của bạn là hành trình đi vào những vùng sâu mà người khác né tránh: khủng hoảng, bí mật, quyền lực và sự chuyển hóa. Xã hội nhìn bạn như một người bí ẩn, mãnh liệt và có nội lực đáng nể — kiểu người không nói nhiều nhưng khi hành động thì thay đổi cả cục diện. Bạn thăng hoa trong những lĩnh vực đòi hỏi đào sâu và tái sinh: tâm lý trị liệu, điều tra, tài chính đầu tư, y học chuyên sâu, nghiên cứu, quản trị khủng hoảng. Di sản của bạn là những cuộc lột xác — của tổ chức, của con người, và của chính bạn qua từng lần nghề nghiệp "chết đi sống lại".',
    advice:
      'Hãy hướng đến tâm lý học, điều tra - pháp y, phẫu thuật, đầu tư - quản lý quỹ, nghiên cứu khoa học hoặc chuyển đổi doanh nghiệp. Đừng sợ những giai đoạn đập bỏ làm lại — đó chính là cách bạn thăng tiến.',
  },
  sagittarius: {
    title: 'Thiên Đỉnh tại Nhân Mã (MC in Sagittarius)',
    description:
      'Đỉnh sự nghiệp của bạn nằm ở những chân trời rộng: truyền bá tri thức, mở mang tầm nhìn và kết nối những nền văn hóa, những hệ tư tưởng. Xã hội nhìn bạn như một người lạc quan, phóng khoáng, giàu cảm hứng — người thầy, người dẫn đường khiến kẻ khác muốn lên đường theo. Bạn thăng hoa khi công việc gắn với ý nghĩa lớn và không gian tự do: giáo dục bậc cao, xuất bản, du lịch quốc tế, luật, triết học, truyền thông toàn cầu. Thành tựu tự nhiên của bạn là mở rộng thế giới quan cho nhiều người — mỗi học trò, mỗi độc giả của bạn là một cánh cửa được mở ra.',
    advice:
      'Hãy cân nhắc giảng viên, xuất bản, du lịch - hàng không, luật quốc tế, truyền giáo tri thức hoặc làm việc với đối tác nước ngoài. Chọn công việc cho bạn bầu trời — chiếc lồng đẹp đến mấy cũng sẽ làm bạn héo úa.',
  },
  capricorn: {
    title: 'Thiên Đỉnh tại Ma Kết (MC in Capricorn)',
    description:
      'Thiên Đỉnh nằm đúng cung của chính nó: bạn là người leo núi bẩm sinh, sinh ra để xây dựng sự nghiệp như một công trình thế kỷ. Xã hội nhìn bạn như một người chín chắn, kỷ luật và đầy uy tín — chiếc ghế lãnh đạo dường như được đo ni đóng sẵn cho bạn, dù bạn phải kiên trì leo từng bậc để chạm tới. Bạn thăng hoa trong những cấu trúc rõ ràng có nấc thang thăng tiến: tập đoàn, chính quyền, xây dựng, quản trị, nơi thời gian và nỗ lực được quy đổi thành quyền hạn và sự kính trọng. Di sản của bạn là những định chế, công trình và chuẩn mực còn đứng vững qua nhiều thế hệ.',
    advice:
      'Hãy hướng đến quản lý cấp cao, hành chính công, kiến trúc - xây dựng, tài chính doanh nghiệp hoặc bất kỳ con đường nào có đỉnh rõ ràng để chinh phục. Thành công của bạn đến muộn nhưng ở lại mãi — đừng so nhịp mình với ai.',
  },
  aquarius: {
    title: 'Thiên Đỉnh tại Bảo Bình (MC in Aquarius)',
    description:
      'Con đường sự nghiệp của bạn đi trước thời đại: bạn sinh ra để cách tân, phá vỡ lối mòn và phụng sự những lý tưởng lớn của cộng đồng. Xã hội nhìn bạn như một người độc đáo, trí tuệ và có phần "không giống ai" — chính sự khác biệt ấy là thương hiệu nghề nghiệp của bạn. Bạn thăng hoa trong những lĩnh vực hướng về tương lai và tập thể: công nghệ, khoa học, hoạt động xã hội, tổ chức cộng đồng, những mô hình làm việc phi truyền thống. Thành tựu tự nhiên của bạn là những phát kiến mà ban đầu bị xem là viển vông, rồi mười năm sau cả thế giới làm theo.',
    advice:
      'Hãy cân nhắc công nghệ thông tin, khoa học dữ liệu, hàng không vũ trụ, tổ chức phi lợi nhuận, đổi mới sáng tạo hoặc nghiên cứu xã hội. Đừng gọt mình cho vừa khuôn cũ — nghề của bạn có thể là nghề chưa ai đặt tên.',
  },
  pisces: {
    title: 'Thiên Đỉnh tại Song Ngư (MC in Pisces)',
    description:
      'Sự nghiệp của bạn chảy như một dòng sông: mềm mại, giàu cảm hứng và được dẫn dắt bởi trực giác hơn là bản kế hoạch năm năm. Xã hội nhìn bạn như một tâm hồn nghệ sĩ, nhân hậu và có chiều sâu tâm linh — người mang vào công việc một điều gì đó vượt khỏi cơm áo thường ngày. Bạn thăng hoa trong những lĩnh vực chữa lành và mộng mơ: nghệ thuật, âm nhạc, điện ảnh, tâm linh, y tế, công tác thiện nguyện, nơi lòng trắc ẩn và trí tưởng tượng là tài sản nghề nghiệp. Di sản của bạn không đo bằng chức danh mà bằng những trái tim đã được an ủi và những giấc mơ bạn giúp người khác chạm tới.',
    advice:
      'Hãy hướng đến nghệ thuật, âm nhạc, điện ảnh, trị liệu tâm lý, chăm sóc sức khỏe tinh thần hoặc công tác nhân đạo. Con đường của bạn có thể quanh co — hãy tin dòng sông biết đường ra biển.',
  },
};
