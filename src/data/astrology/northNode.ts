// Luận giải Bắc Giao Điểm (North Node / La Hầu) — hướng tiến hóa của linh hồn.
// Mỗi mục ngầm đối chiếu Nam Giao Điểm (cung/nhà đối diện) — vùng an toàn cũ cần buông bỏ.

import { SignId, HouseNumber } from './types';

export interface NodeReading {
  title: string;
  description: string;
  advice: string;
}

export const northNodeInSign: Record<SignId, NodeReading> = {
  aries: {
    title: 'Bắc Giao Điểm tại Bạch Dương (North Node in Aries)',
    description:
      'Linh hồn bạn đến kiếp này để học cách đứng vững một mình, dám khẳng định cái tôi và can đảm bước đi trên con đường của riêng mình. Với Nam Giao Điểm tại Thiên Bình, bạn mang theo thói quen cũ là luôn nhường nhịn, sống dựa vào sự đồng thuận của người khác và sợ làm mất lòng ai. Bài học tiến hóa là nhận ra rằng hòa khí thật sự chỉ đến khi bạn trung thực với chính mình, chứ không phải khi bạn tự xóa nhòa bản thân. Mỗi lần bạn dám nói "tôi muốn" thay vì "tùy bạn", linh hồn bạn lại tiến thêm một bước trên hành trình định mệnh.',
    advice:
      'Hãy tập đưa ra quyết định mà không hỏi ý kiến tất cả mọi người trước. Sự độc lập của bạn không làm tổn thương các mối quan hệ — nó khiến chúng chân thật hơn.',
  },
  taurus: {
    title: 'Bắc Giao Điểm tại Kim Ngưu (North Node in Taurus)',
    description:
      'Kiếp này, linh hồn bạn được mời gọi xây dựng sự bình yên, ổn định và tự lực — học cách trân trọng những giá trị giản dị, bền vững của đời sống. Nam Giao Điểm tại Thiên Yết để lại trong bạn khuynh hướng cũ là sống trong khủng hoảng, bị cuốn vào những ràng buộc cảm xúc sâu nặng, kiểm soát hoặc phụ thuộc vào nguồn lực của người khác. Bài học là buông bỏ kịch tính, buông bỏ nhu cầu đào sâu vào bóng tối của mọi thứ, để học cách hiện diện an nhiên trong thân thể và trong hiện tại. Khi bạn tự tạo ra sự an toàn vật chất và tinh thần cho chính mình, bạn không còn cần ai khác nắm giữ chìa khóa hạnh phúc của bạn nữa.',
    advice:
      'Hãy vun đắp những thói quen chậm rãi nuôi dưỡng bạn: làm vườn, nấu ăn, tiết kiệm, chạm vào thiên nhiên. Sự đơn giản chính là phép màu bạn đang tìm kiếm.',
  },
  gemini: {
    title: 'Bắc Giao Điểm tại Song Tử (North Node in Gemini)',
    description:
      'Hành trình tiến hóa của bạn nằm ở việc học cách lắng nghe, đặt câu hỏi, kết nối với những con người và ý tưởng ngay xung quanh mình. Nam Giao Điểm tại Nhân Mã khiến bạn quen thuyết giảng chân lý, tin chắc mình đã biết câu trả lời lớn, và luôn muốn phiêu bạt đến chân trời xa thay vì hiện diện ở nơi này. Bài học kiếp này là buông bỏ vai trò "người nắm giữ chân lý" để trở thành người học trò tò mò của cuộc đời. Sự thật không chỉ nằm trên đỉnh núi xa — nó ẩn trong từng cuộc trò chuyện nhỏ, từng góc nhìn khác biệt mà bạn chịu mở lòng đón nhận.',
    advice:
      'Hãy hỏi nhiều hơn nói, và để ý đến những điều kỳ diệu trong đời sống thường nhật. Mỗi người bạn gặp đều mang một mảnh ghép bạn còn thiếu.',
  },
  cancer: {
    title: 'Bắc Giao Điểm tại Cự Giải (North Node in Cancer)',
    description:
      'Linh hồn bạn đến đây để học cách cảm nhận, nuôi dưỡng và cho phép mình được mềm yếu — xây một mái nhà cho trái tim. Nam Giao Điểm tại Ma Kết mang theo ký ức cũ của một kẻ gánh vác: luôn phải mạnh mẽ, kiểm soát, đặt thành tựu và bổn phận lên trên cảm xúc. Bài học tiến hóa là buông bỏ chiếc áo giáp của người "lúc nào cũng ổn", để học cách nương tựa, chăm sóc và được chăm sóc. Giá trị của bạn không đo bằng những gì bạn đạt được, mà bằng tình thương bạn dám trao và dám nhận.',
    advice:
      'Hãy ưu tiên gia đình, tổ ấm và đời sống nội tâm — cho phép mình khóc, nghỉ ngơi và nói ra nhu cầu cảm xúc. Đó không phải yếu đuối, đó là lòng can đảm kiếp này của bạn.',
  },
  leo: {
    title: 'Bắc Giao Điểm tại Sư Tử (North Node in Leo)',
    description:
      'Định mệnh kiếp này mời gọi bạn bước ra ánh sáng, sáng tạo từ trái tim và dám tỏa sáng như chính con người độc nhất của mình. Nam Giao Điểm tại Bảo Bình khiến bạn quen ẩn mình trong đám đông, núp sau lý tưởng tập thể, quan sát cuộc đời từ xa với sự lạnh lùng của lý trí. Bài học là buông bỏ nỗi sợ trở nên "khác biệt một cách nổi bật", buông thói quen hòa tan bản thân vào nhóm để khỏi phải chịu trách nhiệm cho khao khát riêng. Khi bạn dám sống hết mình, chơi hết mình và yêu hết mình, ngọn lửa trong bạn sẽ sưởi ấm cả những người xung quanh.',
    advice:
      'Hãy theo đuổi một điều khiến tim bạn rộn ràng — sân khấu, nghệ thuật, tình yêu, con trẻ — và cho phép mình được nhìn thấy. Thế giới cần ánh sáng riêng của bạn, không phải một bản sao an toàn.',
  },
  virgo: {
    title: 'Bắc Giao Điểm tại Xử Nữ (North Node in Virgo)',
    description:
      'Linh hồn bạn tiến hóa qua sự rèn luyện, trật tự và phụng sự thiết thực — học cách biến lý tưởng thành việc làm cụ thể mỗi ngày. Nam Giao Điểm tại Song Ngư để lại khuynh hướng cũ là trôi dạt trong mơ mộng, trốn vào thế giới tâm linh mơ hồ, hy sinh vô điều kiện rồi tan biến trong nỗi khổ của người khác. Bài học là buông bỏ vai nạn nhân và sự hỗn độn "để vũ trụ lo", để học cách phân định, chọn lọc và chịu trách nhiệm cho từng chi tiết của đời mình. Phép màu thật sự của bạn nằm trong kỷ luật dịu dàng: chữa lành bằng đôi tay, phục vụ bằng kỹ năng, yêu thương bằng hành động cụ thể.',
    advice:
      'Hãy xây dựng nề nếp lành mạnh cho thân và tâm, và giúp người khác theo cách thiết thực thay vì chỉ đồng cảm suông. Mỗi việc nhỏ làm tử tế là một lời cầu nguyện thành hình.',
  },
  libra: {
    title: 'Bắc Giao Điểm tại Thiên Bình (North Node in Libra)',
    description:
      'Kiếp này, linh hồn bạn học nghệ thuật của sự kết nối: lắng nghe, thỏa hiệp, và trao đi mà không tính toán thiệt hơn. Nam Giao Điểm tại Bạch Dương khiến bạn quen sống như một chiến binh đơn độc — phản xạ cũ là "tôi trước đã", hành động bốc đồng và xem mọi mối quan hệ như cuộc cạnh tranh. Bài học tiến hóa là buông bỏ niềm tin rằng cần ai đó tức là yếu đuối, để khám phá rằng trong tấm gương của người khác, bạn nhìn thấy chính mình rõ nhất. Hạnh phúc của bạn kiếp này không nằm ở chiến thắng, mà ở sự cân bằng và những liên minh chân thành.',
    advice:
      'Trước khi quyết định, hãy dừng lại và thật lòng hỏi: "Điều này ảnh hưởng đến người kia thế nào?". Hợp tác không lấy đi sức mạnh của bạn — nó nhân đôi sức mạnh ấy.',
  },
  scorpio: {
    title: 'Bắc Giao Điểm tại Thiên Yết (North Node in Scorpio)',
    description:
      'Linh hồn bạn được mời gọi lặn xuống chiều sâu: học cách tin tưởng, hòa quyện, buông mình vào sự chuyển hóa và tái sinh. Nam Giao Điểm tại Kim Ngưu mang theo thói quen cũ là bám chặt vào của cải, tiện nghi và những gì quen thuộc — sợ thay đổi đến mức thà chịu tù túng còn hơn buông tay. Bài học là buông bỏ sự cố chấp "của tôi, theo cách của tôi", để khám phá rằng sức mạnh thật sự đến khi bạn dám chia sẻ nguồn lực, dám thân mật sâu sắc và dám để đời cũ chết đi. Như con phượng hoàng, bạn sinh ra để bước qua lửa và trở nên rực rỡ hơn sau mỗi lần tan vỡ.',
    advice:
      'Khi cuộc đời đòi bạn buông một điều gì đó, hãy buông — đó là cánh cửa chứ không phải mất mát. Hãy can đảm bước vào những kết nối sâu thay vì chỉ giữ những gì an toàn.',
  },
  sagittarius: {
    title: 'Bắc Giao Điểm tại Nhân Mã (North Node in Sagittarius)',
    description:
      'Định mệnh kiếp này dẫn bạn đến những chân trời rộng: niềm tin, trí tuệ trực giác và hành trình tìm kiếm ý nghĩa lớn của đời mình. Nam Giao Điểm tại Song Tử khiến bạn quen sống trong những mẩu thông tin vụn vặt — nói nhiều, nghe ngóng nhiều, do dự giữa muôn vàn lựa chọn và ý kiến của người xung quanh. Bài học là buông bỏ thói quen lý sự lan man và nhu cầu làm hài lòng mọi cuộc trò chuyện, để dám tin vào tiếng nói trực giác và cam kết với một con đường, một chân lý sống. Khi bạn ngừng hỏi cả thế giới và bắt đầu hỏi bầu trời trong mình, câu trả lời sẽ hiện ra.',
    advice:
      'Hãy đi xa — về địa lý, học vấn hay tâm linh — và chọn một niềm tin đủ lớn để sống theo. Bớt thu thập ý kiến, thêm lắng nghe trực giác.',
  },
  capricorn: {
    title: 'Bắc Giao Điểm tại Ma Kết (North Node in Capricorn)',
    description:
      'Linh hồn bạn đến kiếp này để trưởng thành: học cách tự đứng trên đôi chân mình, đặt mục tiêu dài hạn và gánh vác trách nhiệm với phẩm giá. Nam Giao Điểm tại Cự Giải để lại khuynh hướng cũ là náu mình trong cảm xúc, phụ thuộc vào gia đình và chờ ai đó che chở như một đứa trẻ. Bài học là buông bỏ thói quen để tâm trạng dẫn dắt và việc dùng quá khứ làm cái cớ, để bước ra thế giới như một người kiến tạo có kỷ luật. Khi bạn dám trở thành chỗ dựa thay vì chỉ tìm chỗ dựa, bạn chạm vào sức mạnh đích thực mà định mệnh dành sẵn cho mình.',
    advice:
      'Hãy đặt một mục tiêu lớn cho sự nghiệp hoặc sứ mệnh đời mình và kiên trì leo từng bậc. Cảm xúc là người bạn đồng hành, nhưng đừng để nó cầm lái.',
  },
  aquarius: {
    title: 'Bắc Giao Điểm tại Bảo Bình (North Node in Aquarius)',
    description:
      'Kiếp này, linh hồn bạn học cách phụng sự điều lớn hơn cái tôi: lý tưởng nhân loại, cộng đồng, và tầm nhìn về một tương lai tốt đẹp chung. Nam Giao Điểm tại Sư Tử khiến bạn quen đứng giữa sân khấu — khao khát được vỗ tay, được công nhận, và vô thức biến mọi câu chuyện thành câu chuyện về mình. Bài học là buông bỏ nhu cầu làm nhân vật chính, để khám phá niềm vui sâu xa hơn khi ánh sáng của bạn hòa vào ánh sáng của nhiều người. Khi bạn cho đi mà không cần khán giả, vũ trụ sẽ trao bạn một vương miện khác: sự tự do.',
    advice:
      'Hãy tham gia một cộng đồng, một sứ mệnh xã hội nơi tài năng của bạn phục vụ điều lớn hơn bản thân. Tình bạn bình đẳng sẽ dạy bạn nhiều hơn mọi tràng pháo tay.',
  },
  pisces: {
    title: 'Bắc Giao Điểm tại Song Ngư (North Node in Pisces)',
    description:
      'Hành trình tiến hóa của bạn là học cách buông xuôi theo dòng chảy thiêng liêng: tin tưởng, tha thứ, đồng cảm và để trái tim dẫn đường thay vì danh sách kiểm soát. Nam Giao Điểm tại Xử Nữ mang theo thói quen cũ là cầu toàn, lo âu về từng chi tiết, phê bình bản thân và người khác không ngơi nghỉ. Bài học là buông bỏ ảo tưởng rằng nếu phân tích đủ kỹ thì đời sẽ hoàn hảo, để nhận ra có những điều chỉ chữa lành được bằng lòng trắc ẩn và đức tin. Khi bạn ngừng sửa chữa thế giới và bắt đầu ôm lấy nó như nó vốn là, sự bình an bạn tìm kiếm bấy lâu sẽ tự tìm đến.',
    advice:
      'Hãy dành thời gian cho thiền định, nghệ thuật, hoặc bất cứ điều gì đưa bạn vượt khỏi tâm trí phân tích. Tha thứ cho sự không hoàn hảo — của bạn trước tiên.',
  },
};

export const northNodeInHouse: Record<HouseNumber, NodeReading> = {
  1: {
    title: 'Bắc Giao Điểm tại Nhà 1',
    description:
      'Linh hồn bạn đến kiếp này để khám phá và khẳng định bản sắc riêng: trở thành chính mình một cách trọn vẹn, không vay mượn. Nam Giao Điểm tại Nhà 7 cho thấy thói quen cũ là định nghĩa bản thân qua người khác — sống vì hôn nhân, vì đối tác, luôn cần một "nửa kia" mới thấy mình đủ đầy. Bài học là buông bỏ sự phụ thuộc vào các mối quan hệ như tấm gương duy nhất, để học cách tự đứng, tự quyết và tự yêu lấy hình hài định mệnh đã trao. Khi bạn dám hiện diện như một cá thể trọn vẹn, những mối quan hệ đến với bạn cũng sẽ lành mạnh và bình đẳng hơn.',
    advice:
      'Hãy theo đuổi những dự án mang dấu ấn cá nhân và tập nói "không" khi cần. Bạn không sinh ra để làm cái bóng của bất kỳ ai.',
  },
  2: {
    title: 'Bắc Giao Điểm tại Nhà 2',
    description:
      'Bài học tiến hóa của bạn nằm ở việc xây dựng giá trị tự thân: tài chính độc lập, lòng tự trọng vững chãi và một hệ giá trị của riêng mình. Nam Giao Điểm tại Nhà 8 để lại khuynh hướng cũ là sống nhờ nguồn lực của người khác — tiền bạc chung, quyền lực ngầm, những ràng buộc tâm lý sâu và kịch tính khủng hoảng. Linh hồn bạn cần buông thói quen vay mượn sức mạnh từ bên ngoài, để kiên nhẫn vun trồng khu vườn của chính mình. Sự giàu có đích thực kiếp này không đến từ thừa kế hay hòa quyện với ai, mà từ những gì bạn tự tay tạo dựng.',
    advice:
      'Hãy tự chủ tài chính và liệt kê những giá trị bạn không bao giờ đánh đổi. Hãy hỏi "mình có thể tự tạo ra điều này không?" trước khi tìm đến nguồn lực của người khác.',
  },
  3: {
    title: 'Bắc Giao Điểm tại Nhà 3',
    description:
      'Định mệnh kiếp này đặt bạn vào vai người học trò và người kết nối: lắng nghe, giao tiếp, học hỏi từ môi trường gần gũi — anh chị em, hàng xóm, cộng đồng quanh mình. Nam Giao Điểm tại Nhà 9 khiến bạn quen đóng vai người thầy nắm chân lý, mải mê với triết lý xa xôi và những chuyến viễn du trốn tránh thực tại. Bài học là buông bỏ sự tự tin rằng mình "đã hiểu hết", để khiêm tốn đặt câu hỏi và thật sự hiện diện trong những cuộc đối thoại đời thường. Trí tuệ kiếp này của bạn không nằm trong sách thánh hiền, mà trong khả năng diễn đạt và lắng nghe từng con người cụ thể.',
    advice:
      'Hãy viết, dạy, trò chuyện và xây dựng nhịp cầu trong chính khu phố tâm hồn của bạn. Sự tò mò chân thành đáng giá hơn mọi tuyên ngôn chân lý.',
  },
  4: {
    title: 'Bắc Giao Điểm tại Nhà 4',
    description:
      'Linh hồn bạn đến đây để xây tổ ấm — theo nghĩa rộng nhất: gốc rễ, gia đình, đời sống nội tâm và cảm giác thuộc về. Nam Giao Điểm tại Nhà 10 cho thấy kiếp trước bạn đã sống trọn cho sự nghiệp, danh vọng và hình ảnh xã hội, đến mức quên mất trái tim mình cần một nơi để về. Bài học là buông bỏ thói quen đo giá trị bản thân bằng chức danh và thành tích, buông nỗi ám ảnh "phải được xã hội công nhận". Khi bạn dám đầu tư cho mái nhà, cho người thân và cho thế giới cảm xúc bên trong, bạn sẽ tìm thấy thành tựu sâu lắng nhất của kiếp này.',
    advice:
      'Hãy ưu tiên thời gian cho gia đình và chăm sóc đời sống tinh thần như một sự nghiệp thật sự. Tổ ấm vững thì mọi đỉnh cao khác mới có ý nghĩa.',
  },
  5: {
    title: 'Bắc Giao Điểm tại Nhà 5',
    description:
      'Hành trình tiến hóa của bạn là dám sống như một người sáng tạo: yêu say đắm, chơi hồn nhiên, làm nghệ thuật, và đặt dấu ấn cá nhân lên cuộc đời. Nam Giao Điểm tại Nhà 11 khiến bạn quen ẩn mình giữa bạn bè và những lý tưởng nhóm — an toàn trong đám đông nhưng chưa bao giờ thật sự bước lên sân khấu của riêng mình. Bài học là buông bỏ thói quen sống theo kỳ vọng tập thể và nỗi sợ nổi bật, để cho trái tim được rung động và bàn tay được sáng tạo. Niềm vui không phải phần thưởng xa xỉ — kiếp này, niềm vui chính là con đường tu tập của bạn.',
    advice:
      'Hãy bắt đầu một dự án sáng tạo mang tên bạn, và đừng ngại thể hiện tình cảm một cách rực rỡ. Cứ chơi đùa — vũ trụ đang mỉm cười cùng bạn.',
  },
  6: {
    title: 'Bắc Giao Điểm tại Nhà 6',
    description:
      'Linh hồn bạn học bài học của sự tận tụy thiết thực: kỷ luật hằng ngày, chăm sóc sức khỏe, hoàn thiện kỹ năng và phụng sự bằng việc làm cụ thể. Nam Giao Điểm tại Nhà 12 để lại khuynh hướng cũ là trốn vào cõi mộng — mơ màng, trì hoãn, tự cô lập hoặc tan biến trong những nỗi buồn không tên. Bài học là buông bỏ thói quen lánh đời và chờ đợi phép màu, để hiểu rằng thiêng liêng ẩn trong từng việc nhỏ làm trọn vẹn: bữa ăn lành, giấc ngủ đủ, lời hứa giữ đúng. Khi bạn đưa đôi chân chạm đất, đôi cánh tâm hồn bạn mới thật sự biết bay.',
    advice:
      'Hãy xây dựng thời gian biểu lành mạnh và chọn một công việc phụng sự cụ thể cho người khác. Trật tự nhỏ mỗi ngày là liều thuốc cho tâm hồn mộng mơ của bạn.',
  },
  7: {
    title: 'Bắc Giao Điểm tại Nhà 7',
    description:
      'Định mệnh kiếp này dạy bạn nghệ thuật của sự kết đôi: hợp tác, cam kết, và mở lòng để người khác thật sự bước vào đời mình. Nam Giao Điểm tại Nhà 1 khiến bạn quen làm chiến binh đơn độc — tự lo, tự quyết, tin rằng "muốn nhanh thì đi một mình" và vô thức đẩy người khác ra xa. Bài học là buông bỏ chiếc khiên độc lập tuyệt đối, buông thói quen đặt cái tôi lên trước mọi mối quan hệ. Khi bạn dám lắng nghe, nhường một bước và cam kết thật lòng, bạn sẽ khám phá rằng tình thân không làm bạn nhỏ đi — nó hoàn thiện những phần bạn không thể tự thấy.',
    advice:
      'Hãy thực hành hỏi ý và san sẻ quyết định với người đồng hành thay vì tự làm tất cả. Mối quan hệ chính là ngôi đền tu học của bạn kiếp này.',
  },
  8: {
    title: 'Bắc Giao Điểm tại Nhà 8',
    description:
      'Linh hồn bạn được mời gọi đi vào chiều sâu của sự hòa quyện: thân mật thật sự, chia sẻ nguồn lực, và những cuộc chuyển hóa lột xác. Nam Giao Điểm tại Nhà 2 cho thấy thói quen cũ là bám víu vào tài sản, tiện nghi và sự an toàn vật chất — thà giữ chặt thứ đã cũ còn hơn mạo hiểm với điều chưa biết. Bài học là buông bỏ tâm lý tích trữ và nỗi sợ mất mát, để học cách tin tưởng, đầu tư vào người khác và để dòng đời tái sinh mình. Mỗi lần bạn dám buông một chỗ bám, vũ trụ lại trao cho bạn một sức mạnh sâu hơn của cải.',
    advice:
      'Hãy can đảm mở lòng trong những mối quan hệ sâu sắc và học cách quản lý nguồn lực chung. Đừng hỏi "mình sẽ mất gì?" — hãy hỏi "mình sẽ được tái sinh thành ai?".',
  },
  9: {
    title: 'Bắc Giao Điểm tại Nhà 9',
    description:
      'Hành trình kiếp này đưa bạn ra khỏi vùng quen thuộc để tìm chân lý lớn: học vấn cao, hành trình xa, triết lý sống và tiếng gọi của niềm tin. Nam Giao Điểm tại Nhà 3 khiến bạn quen quẩn quanh trong những thông tin vụn vặt, lời bàn tán của môi trường gần và sự do dự "để hỏi thêm vài người nữa". Bài học là buông bỏ thói quen sống bằng dữ kiện bề mặt và ý kiến đám đông, để dám tin vào trực giác và cam kết với một tầm nhìn rộng hơn. Khi tâm trí bạn ngẩng lên khỏi những con chữ nhỏ, bầu trời ý nghĩa sẽ mở ra đúng như định mệnh đã hứa.',
    advice:
      'Hãy lên đường — du học, hành hương, hay đơn giản là theo đuổi một hệ tư tưởng khiến bạn lớn lên. Tin vào la bàn bên trong nhiều hơn những lời xì xào bên ngoài.',
  },
  10: {
    title: 'Bắc Giao Điểm tại Nhà 10',
    description:
      'Linh hồn bạn đến kiếp này để bước ra ánh sáng công cộng: xây dựng sự nghiệp, gánh vác trách nhiệm xã hội và để lại dấu ấn trước thế gian. Nam Giao Điểm tại Nhà 4 để lại khuynh hướng cũ là náu mình trong tổ ấm — phụ thuộc gia đình, viện dẫn quá khứ, và dùng sự an toàn cảm xúc làm lý do không dám vươn xa. Bài học là buông bỏ vai đứa trẻ được che chở để trở thành người trưởng thành kiến tạo, dám nhận lấy vị trí lãnh đạo mà cuộc đời đã dọn sẵn. Khi bạn leo lên ngọn núi của mình với lòng chính trực, chính gia đình và gốc rễ của bạn cũng được nâng lên cùng.',
    advice:
      'Hãy đặt mục tiêu sự nghiệp rõ ràng và dám nhận trách nhiệm trước công chúng. Đừng để sự êm ấm của vùng quen thuộc ru ngủ tiếng gọi định mệnh.',
  },
  11: {
    title: 'Bắc Giao Điểm tại Nhà 11',
    description:
      'Bài học tiến hóa của bạn là hòa ánh sáng cá nhân vào ngọn lửa chung: tình bạn, cộng đồng, lý tưởng xã hội và những giấc mơ về tương lai nhân loại. Nam Giao Điểm tại Nhà 5 khiến bạn quen làm nhân vật chính — cần được ngưỡng mộ, yêu theo kiểu chiếm hữu, và đôi khi mải mê với cuộc vui riêng mà quên bức tranh lớn. Linh hồn bạn cần buông nhu cầu được vỗ tay, buông những màn kịch tình ái lấy mình làm trung tâm, để khám phá niềm hạnh phúc bền hơn của sự cộng hưởng. Khi bạn cống hiến tài năng cho một điều lớn hơn bản thân, tên bạn sẽ được khắc vào những trái tim, không chỉ trên những tấm bảng vàng.',
    advice:
      'Hãy gia nhập hoặc khởi xướng một cộng đồng phục vụ lý tưởng bạn tin tưởng. Hãy để tình bạn bình đẳng thay thế nhu cầu được tôn sùng.',
  },
  12: {
    title: 'Bắc Giao Điểm tại Nhà 12',
    description:
      'Linh hồn bạn đến kiếp này để học sự buông xuôi thiêng liêng: đời sống tâm linh, lòng trắc ẩn vô điều kiện, và khả năng tin vào dòng chảy lớn hơn mọi kế hoạch. Nam Giao Điểm tại Nhà 6 để lại thói quen cũ của người lo toan: kiểm soát từng chi tiết, làm việc đến kiệt sức, phê phán bản thân vì mọi điều chưa hoàn hảo. Bài học là buông bỏ ảo tưởng rằng chỉ cần cố gắng đủ nhiều thì mọi thứ sẽ trong tầm tay, để học cách nghỉ ngơi, thiền định và phụng sự từ sự tĩnh lặng. Khi bạn ngừng quản lý cuộc đời như một danh sách việc cần làm, ân sủng sẽ tìm được đường chảy vào tim bạn.',
    advice:
      'Hãy dành thời gian đều đặn cho tĩnh lặng — thiền, cầu nguyện, nghệ thuật, hoặc phụng sự thầm lặng. Tin rằng có những điều vũ trụ làm tốt hơn khi bạn thôi nắm chặt.',
  },
};
