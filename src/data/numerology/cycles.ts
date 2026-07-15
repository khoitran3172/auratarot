// Luận giải các chu kỳ thần số học: Năm Cá Nhân, Đỉnh Cao, Thách Thức, Nợ Nghiệp.
import { ShortReading, KarmicDebtNumber } from './types';

export const personalYearReadings: Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9, ShortReading> = {
  1: {
    title: 'Năm Cá Nhân 1 — Khởi Đầu Mới',
    description:
      'Cánh cửa của một chu kỳ chín năm vừa mở ra trước mắt bạn. Đây là năm của hạt giống — những gì bạn gieo lúc này sẽ định hình cả hành trình phía trước. Vũ trụ đang trao cho bạn nguồn năng lượng tiên phong hiếm có, hãy dám bắt đầu điều bạn từng trì hoãn. Đừng ngoái nhìn quá khứ, bởi con đường mới chỉ hiện ra khi bạn bước tới.',
    advice:
      'Hãy khởi động một dự án, một thói quen hay một chương đời mới ngay trong năm nay. Tin vào trực giác của chính mình thay vì chờ sự cho phép từ người khác.',
  },
  2: {
    title: 'Năm Cá Nhân 2 — Kiên Nhẫn và Kết Nối',
    description:
      'Sau năm gieo hạt, đây là mùa hạt giống âm thầm bén rễ dưới lòng đất. Mọi thứ dường như chậm lại, nhưng đó chính là nhịp điệu mà tâm hồn bạn cần. Năm nay nuôi dưỡng các mối quan hệ, sự hợp tác và những kết nối tinh tế của trái tim. Điều quý giá nhất sẽ đến qua sự lắng nghe, không phải qua sự thúc ép.',
    advice:
      'Hãy kiên nhẫn với tiến độ của mọi việc và dịu dàng với chính mình. Vun đắp tình thân và những mối cộng tác — chúng là tài sản của năm này.',
  },
  3: {
    title: 'Năm Cá Nhân 3 — Nở Hoa Sáng Tạo',
    description:
      'Những gì âm thầm bén rễ nay vươn lên đón ánh sáng — đây là năm của niềm vui, sự thể hiện và sáng tạo. Nguồn cảm hứng trong bạn tuôn chảy mạnh mẽ hơn bao giờ hết, và thế giới muốn nghe tiếng nói riêng của bạn. Các mối quan hệ xã hội nở rộ, mang theo cả cơ hội lẫn tiếng cười. Đừng để sự phân tán cuốn trôi món quà của năm này.',
    advice:
      'Hãy viết, vẽ, nói, hát — thể hiện bản thân theo cách khiến trái tim bạn rung lên. Chọn một vài niềm vui sâu sắc thay vì trăm niềm vui hời hợt.',
  },
  4: {
    title: 'Năm Cá Nhân 4 — Xây Nền Đắp Móng',
    description:
      'Sau mùa nở hoa, vũ trụ mời bạn xắn tay áo lên và xây dựng. Đây là năm của lao động bền bỉ, kỷ luật và những viên gạch đặt xuống mỗi ngày. Thành quả có thể chưa lộng lẫy, nhưng nền móng bạn dựng hôm nay sẽ nâng đỡ mọi giấc mơ về sau. Sức khỏe, tài chính và công việc đều cần được sắp xếp lại một cách vững chãi.',
    advice:
      'Hãy lập kế hoạch cụ thể và trung thành với nó, dù nhỏ nhặt đến đâu. Chăm sóc cơ thể như chăm một ngôi đền — nó là nền móng đầu tiên của bạn.',
  },
  5: {
    title: 'Năm Cá Nhân 5 — Biến Động và Tự Do',
    description:
      'Cơn gió của sự thay đổi đang thổi qua đời bạn, lay động cả những điều tưởng như bất biến. Đây là năm của tự do, phiêu lưu và những ngã rẽ bất ngờ — có thể là chuyến đi xa, công việc mới hay một con người làm thay đổi cách bạn nhìn thế giới. Đừng bám víu, bởi chính sự linh hoạt là chiếc la bàn của năm này. Điều duy nhất cần tránh là sự buông thả không giới hạn.',
    advice:
      'Hãy đón nhận thay đổi như một lời mời thay vì một mối đe dọa. Cho phép mình phiêu lưu, nhưng giữ lại một sợi dây neo vào những giá trị cốt lõi.',
  },
  6: {
    title: 'Năm Cá Nhân 6 — Trách Nhiệm và Tổ Ấm',
    description:
      'Sau cơn gió biến động, năm nay trái tim bạn được gọi trở về mái nhà. Gia đình, tình yêu và những người cần bạn sẽ đứng ở trung tâm mọi câu chuyện. Đây là năm chữa lành các mối quan hệ, làm đẹp tổ ấm và học cách cho đi mà không cạn kiệt chính mình. Trách nhiệm có thể nặng hơn, nhưng nó cũng mang lại cảm giác thuộc về sâu sắc.',
    advice:
      'Hãy dành thời gian trọn vẹn cho những người thân yêu và hàn gắn điều còn dang dở. Nhớ rằng chăm sóc bản thân cũng là một phần của trách nhiệm.',
  },
  7: {
    title: 'Năm Cá Nhân 7 — Nội Quán và Thức Tỉnh',
    description:
      'Đây là năm tâm hồn bạn khao khát sự tĩnh lặng hơn là tiếng vỗ tay. Vũ trụ mời bạn quay vào bên trong — học hỏi, chiêm nghiệm, đặt những câu hỏi lớn về ý nghĩa đời mình. Mọi thứ bên ngoài có thể chậm lại, nhưng bên trong bạn đang diễn ra một cuộc chuyển hóa sâu sắc. Những hiểu biết đến trong năm nay sẽ soi đường cho nhiều năm sau.',
    advice:
      'Hãy dành cho mình những khoảng lặng: đọc sách, thiền định, đi bộ một mình giữa thiên nhiên. Đừng ép mọi việc phải nhanh — sự chín muồi cần bóng tối và thời gian.',
  },
  8: {
    title: 'Năm Cá Nhân 8 — Gặt Hái Thành Tựu',
    description:
      'Mùa gặt đã đến — những nỗ lực bạn gieo suốt bảy năm qua nay kết thành quả ngọt. Đây là năm của quyền lực cá nhân, sự nghiệp, tài chính và sự công nhận. Cơ hội thăng tiến và thịnh vượng sẽ tìm đến những ai dám đứng thẳng và nhận lấy giá trị của mình. Hãy dùng sức mạnh này với sự chính trực, bởi năm 8 cũng là tấm gương phản chiếu cách bạn đối đãi với quyền lực.',
    advice:
      'Hãy mạnh dạn đàm phán, đầu tư và nhận lấy vị trí xứng đáng với bạn. Giữ trái tim rộng lượng khi bàn tay đang đầy — đó là bí mật của thịnh vượng bền lâu.',
  },
  9: {
    title: 'Năm Cá Nhân 9 — Buông Bỏ và Khép Chu Kỳ',
    description:
      'Chu kỳ chín năm đang khép lại, và bạn được mời buông những gì đã hoàn thành sứ mệnh của nó. Có thể là một công việc, một mối quan hệ, một phiên bản cũ của chính bạn — hãy nói lời tạm biệt với lòng biết ơn. Đây cũng là năm của lòng trắc ẩn và sự cho đi, khi trái tim bạn mở rộng ra với thế giới. Không gian bạn dọn trống hôm nay chính là chỗ cho hạt giống mới của năm sau.',
    advice:
      'Hãy hoàn tất những điều dang dở và can đảm buông điều không còn thuộc về mình. Đừng vội bắt đầu cái mới — hãy để mùa đông này làm trọn việc của nó.',
  },
};

export const pinnacleReadings: Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 22 | 33, ShortReading> = {
  1: {
    title: 'Đỉnh Cao 1 — Tự Lập và Tiên Phong',
    description:
      'Giai đoạn này của cuộc đời tôi luyện bạn thành một người dẫn đường độc lập. Cơ hội sẽ đến qua những lần bạn dám tự đứng trên đôi chân mình và mở lối đi riêng. Cá tính và ý chí của bạn được mài sắc qua từng thử thách của sự tự chủ.',
    advice: 'Hãy tin vào khả năng tự quyết của mình và đừng ngại đi trước đám đông.',
  },
  2: {
    title: 'Đỉnh Cao 2 — Hòa Hợp và Nhạy Cảm',
    description:
      'Đây là giai đoạn trái tim bạn học nghệ thuật của sự kết nối. Cơ hội lớn nhất đến từ hợp tác, ngoại giao và khả năng cảm nhận tinh tế những điều không lời. Bạn trở thành nhịp cầu, và chính sự dịu dàng ấy là sức mạnh của bạn.',
    advice: 'Hãy trân trọng vai trò người kết nối và đừng xem sự nhạy cảm là điểm yếu.',
  },
  3: {
    title: 'Đỉnh Cao 3 — Sáng Tạo và Tỏa Sáng',
    description:
      'Giai đoạn này mở ra sân khấu cho tài năng biểu đạt của bạn. Nghệ thuật, giao tiếp và niềm vui sống là những cánh cửa dẫn đến thành công. Cuộc đời mời bạn sống rực rỡ và truyền cảm hứng cho người khác bằng chính ánh sáng của mình.',
    advice: 'Hãy nuôi dưỡng đam mê sáng tạo mỗi ngày và chia sẻ nó rộng rãi thay vì cất giấu.',
  },
  4: {
    title: 'Đỉnh Cao 4 — Xây Dựng và Bền Bỉ',
    description:
      'Đây là giai đoạn bạn dựng nên những công trình vững chãi cho đời mình — sự nghiệp, gia đình, nền tảng tài chính. Cơ hội đến qua lao động kiên trì và sự đáng tin cậy mà bạn tích lũy từng ngày. Thành quả của giai đoạn này chậm mà chắc, và sẽ trường tồn.',
    advice: 'Hãy kiên định với mục tiêu dài hạn và tin rằng từng viên gạch nhỏ đều có ý nghĩa.',
  },
  5: {
    title: 'Đỉnh Cao 5 — Tự Do và Chuyển Hóa',
    description:
      'Giai đoạn này cuộc đời bạn giàu biến động, chuyến đi và những cơ hội bất ngờ. Bạn được học cách thích nghi, mở rộng chân trời và nếm trải sự đa dạng của cuộc sống. Chìa khóa là dùng tự do một cách khôn ngoan để trưởng thành thay vì phân tán.',
    advice: 'Hãy đón nhận mọi đổi thay như bài học, nhưng giữ cho mình một trục giá trị không lay chuyển.',
  },
  6: {
    title: 'Đỉnh Cao 6 — Yêu Thương và Trách Nhiệm',
    description:
      'Đây là giai đoạn của gia đình, cộng đồng và những trái tim cần bạn nâng đỡ. Cơ hội đến qua việc chăm sóc, hàn gắn và tạo dựng sự hài hòa quanh mình. Tình yêu bạn cho đi trong giai đoạn này sẽ trở về gấp nhiều lần.',
    advice: 'Hãy phụng sự bằng trái tim rộng mở, nhưng nhớ giữ ranh giới để không đánh mất chính mình.',
  },
  7: {
    title: 'Đỉnh Cao 7 — Trí Tuệ và Tâm Linh',
    description:
      'Giai đoạn này dẫn bạn vào hành trình đi sâu vào tri thức và thế giới nội tâm. Cơ hội đến qua nghiên cứu, chuyên môn hóa và sự thức tỉnh tâm linh. Bạn có thể cảm thấy tách biệt với đám đông, nhưng chính sự tĩnh lặng ấy sinh ra minh triết.',
    advice: 'Hãy dành thời gian cho học hỏi và chiêm nghiệm — kho báu của giai đoạn này nằm bên trong bạn.',
  },
  8: {
    title: 'Đỉnh Cao 8 — Quyền Lực và Thịnh Vượng',
    description:
      'Đây là giai đoạn của thành tựu vật chất, vị thế và tầm ảnh hưởng. Cơ hội lớn đến trong kinh doanh, quản lý và những vai trò đòi hỏi bản lĩnh. Bài học song hành là dùng quyền lực với sự chính trực và lòng nhân ái.',
    advice: 'Hãy dám nghĩ lớn và nhận lấy vị trí lãnh đạo, nhưng đừng để thành công định nghĩa toàn bộ con người bạn.',
  },
  9: {
    title: 'Đỉnh Cao 9 — Trắc Ẩn và Cống Hiến',
    description:
      'Giai đoạn này trái tim bạn mở rộng ra với nhân loại. Cơ hội đến qua các công việc phụng sự, nghệ thuật giàu cảm xúc và những sứ mệnh lớn hơn bản thân. Bạn học cách cho đi không điều kiện và buông những gắn bó hẹp hòi.',
    advice: 'Hãy để lòng trắc ẩn dẫn đường và tin rằng những gì bạn trao đi sẽ tự tìm đường trở về.',
  },
  11: {
    title: 'Đỉnh Cao 11 — Trực Giác và Soi Sáng',
    description:
      'Đây là giai đoạn tâm linh cường độ cao, khi trực giác của bạn trở thành ngọn đèn cho cả người khác. Cơ hội đến qua những vai trò truyền cảm hứng, chữa lành và nâng đỡ tinh thần. Năng lượng lớn đi kèm sự nhạy cảm lớn — hãy học cách giữ mình cân bằng.',
    advice: 'Hãy tin vào những linh cảm sâu thẳm và chia sẻ ánh sáng của mình một cách khiêm nhường.',
  },
  22: {
    title: 'Đỉnh Cao 22 — Kiến Tạo Vĩ Đại',
    description:
      'Giai đoạn này trao cho bạn khả năng biến giấc mơ lớn thành công trình thực tế. Cơ hội đến qua những dự án tầm vóc, để lại dấu ấn lâu dài cho cộng đồng. Đòi hỏi của nó cũng lớn: kỷ luật thép và tầm nhìn vượt khỏi cái tôi.',
    advice: 'Hãy dám ôm những khát vọng phụng sự số đông và xây chúng từng bước bằng đôi tay thực tế.',
  },
  33: {
    title: 'Đỉnh Cao 33 — Tình Yêu Vô Điều Kiện',
    description:
      'Đây là giai đoạn hiếm hoi của sự phụng sự bằng tình yêu thuần khiết. Cơ hội đến qua việc dạy dỗ, chữa lành và nâng đỡ người khác bằng cả trái tim. Bạn được mời trở thành hiện thân của lòng nhân ái — một sứ mệnh nặng nhưng thiêng liêng.',
    advice: 'Hãy cho đi từ sự đủ đầy bên trong, và nhớ rằng chăm sóc chính mình cũng là một hành động yêu thương.',
  },
};

export const challengeReadings: Record<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8, ShortReading> = {
  0: {
    title: 'Thách Thức 0 — Thách Thức Của Sự Lựa Chọn',
    description:
      'Đây là thách thức đặc biệt nhất: không có một bài học cụ thể nào áp đặt lên bạn, mà mọi cánh cửa đều mở. Chính sự tự do ấy lại là thử thách — bạn phải tự chọn con đường và tự chịu trách nhiệm với lựa chọn của mình. Nó đòi hỏi một tâm hồn đã đủ chín để không lạc lối giữa vô vàn khả năng.',
    advice: 'Hãy lắng nghe tiếng gọi sâu nhất bên trong và can đảm quyết định thay vì chờ hoàn cảnh quyết định thay bạn.',
  },
  1: {
    title: 'Thách Thức 1 — Khẳng Định Bản Thân',
    description:
      'Bạn được thử thách trong việc đứng lên vì chính mình giữa những áp lực và ý muốn của người khác. Có thể bạn thường thấy mình bị lấn át hoặc phải kìm nén cá tính. Bài học là tìm ra tiếng nói riêng mà không trở nên cứng đầu hay đối đầu.',
    advice: 'Hãy tập nói điều bạn thật sự nghĩ một cách ôn hòa nhưng kiên định.',
  },
  2: {
    title: 'Thách Thức 2 — Nhạy Cảm Quá Mức',
    description:
      'Trái tim bạn dễ tổn thương trước lời nói, ánh nhìn và sự phán xét của người khác. Thách thức này khiến bạn hay tự ti, dè dặt và sợ va chạm. Bài học là biến sự nhạy cảm thành khả năng thấu cảm, thay vì thành nhà tù của nỗi sợ.',
    advice: 'Hãy nhớ rằng cảm nhận của bạn quý giá, nhưng không phải lời nhận xét nào cũng là sự thật về bạn.',
  },
  3: {
    title: 'Thách Thức 3 — Ngại Thể Hiện',
    description:
      'Bạn mang trong mình khả năng biểu đạt phong phú nhưng lại hay tự kiểm duyệt, sợ bị chê cười. Thách thức này có thể khiến bạn giấu tài năng sau sự im lặng hoặc lời nói xã giao hời hợt. Bài học là dám bộc lộ con người thật và cảm xúc thật của mình.',
    advice: 'Hãy tìm một hình thức sáng tạo khiến bạn thoải mái — viết, vẽ, ca hát — và thực hành đều đặn.',
  },
  4: {
    title: 'Thách Thức 4 — Kỷ Luật và Kiên Trì',
    description:
      'Thách thức này thử bạn ở khả năng làm việc bền bỉ và đi hết con đường đã chọn. Bạn có thể thấy khó chịu với khuôn khổ, hoặc ngược lại tự bó mình trong sự cứng nhắc. Bài học là tìm điểm cân bằng giữa trật tự và sự linh hoạt.',
    advice: 'Hãy chia mục tiêu lớn thành những bước nhỏ và trung thành với chúng mỗi ngày.',
  },
  5: {
    title: 'Thách Thức 5 — Tự Do và Tiết Chế',
    description:
      'Khát khao tự do trong bạn mạnh đến mức có thể cuốn bạn vào sự bốc đồng và những thay đổi liên miên. Thách thức này thử bạn ở khả năng tận hưởng cuộc sống mà không đánh mất phương hướng. Bài học là hiểu rằng tự do đích thực đến từ sự làm chủ chính mình.',
    advice: 'Hãy suy nghĩ kỹ trước những quyết định lớn và cho các cam kết của mình đủ thời gian để nở hoa.',
  },
  6: {
    title: 'Thách Thức 6 — Cầu Toàn và Trách Nhiệm',
    description:
      'Bạn được thử thách trong cách yêu thương: dễ đòi hỏi sự hoàn hảo ở bản thân và người thân, hoặc gánh vác quá nhiều cho người khác. Thách thức này có thể biến tình yêu thành sự kiểm soát. Bài học là chấp nhận sự không hoàn hảo như một phần tự nhiên của con người.',
    advice: 'Hãy cho những người bạn yêu quyền được là chính họ, và cho mình quyền được nghỉ ngơi.',
  },
  7: {
    title: 'Thách Thức 7 — Niềm Tin và Mở Lòng',
    description:
      'Thách thức này khiến bạn dễ thu mình, hoài nghi và giữ khoảng cách với cả những người thương mình. Nỗi cô đơn có thể trở thành thói quen hơn là lựa chọn. Bài học là học cách tin — tin người, tin đời và tin vào dòng chảy lớn hơn đang nâng đỡ bạn.',
    advice: 'Hãy tập chia sẻ cảm xúc thật với một người bạn tin cậy, từng chút một.',
  },
  8: {
    title: 'Thách Thức 8 — Vật Chất và Quyền Lực',
    description:
      'Bạn được thử thách trong mối quan hệ với tiền bạc, địa vị và sự kiểm soát. Có thể bạn quá mải mê theo đuổi thành công, hoặc ngược lại sợ hãi và né tránh sức mạnh của chính mình. Bài học là xem vật chất như công cụ phụng sự cuộc sống, không phải thước đo giá trị con người.',
    advice: 'Hãy theo đuổi thành công bằng sự chính trực và thường xuyên tự hỏi: mình làm điều này vì điều gì?',
  },
};

export const karmicDebtReadings: Record<KarmicDebtNumber, ShortReading> = {
  13: {
    title: 'Nợ Nghiệp 13 — Bài Học Của Lao Động',
    description:
      'Con số này gợi rằng trong một kiếp nào đó, bạn từng buông trôi trách nhiệm và để người khác gánh phần việc của mình. Kiếp này, cuộc đời sẽ đặt trước bạn những công việc đòi hỏi nỗ lực gấp bội — không phải để trừng phạt, mà để bạn học lại giá trị thiêng liêng của lao động. Con đường tắt nào cũng sẽ dẫn về vạch xuất phát, còn sự bền bỉ sẽ mở ra thành tựu vững chắc hơn người thường. Khi bạn ôm lấy kỷ luật, món nợ hóa thành món quà.',
    advice:
      'Hãy làm việc có kế hoạch, đi từng bước và đừng tìm lối tắt. Chính sự cần mẫn hôm nay là nghi lễ hóa giải nghiệp xưa.',
  },
  14: {
    title: 'Nợ Nghiệp 14 — Bài Học Của Tiết Chế',
    description:
      'Con số này mang dấu vết của một tiền kiếp từng lạm dụng tự do, buông mình theo dục vọng và bỏ mặc những ràng buộc với người khác. Kiếp này, bạn dễ bị cuốn vào cám dỗ, sự thay đổi liên miên và cảm giác không thể ở yên một chỗ. Bài học của bạn là tiết chế — học cách tận hưởng cuộc sống trong chừng mực và giữ trọn những cam kết đã trao. Khi bạn làm chủ được ham muốn, tự do đích thực mới thật sự thuộc về bạn.',
    advice:
      'Hãy đặt cho mình những giới hạn lành mạnh và trung thành với các cam kết quan trọng. Sự điều độ chính là chìa khóa mở cánh cửa nghiệp này.',
  },
  16: {
    title: 'Nợ Nghiệp 16 — Bài Học Của Khiêm Nhường',
    description:
      'Con số này nhắc về một tiền kiếp mà cái tôi kiêu hãnh và những mối tình sai lầm đã gây tổn thương cho người khác. Kiếp này, cuộc đời có thể mang đến những lần đổ vỡ bất ngờ — trong tình cảm, danh vọng hay niềm tin — mỗi lần như một cuộc thanh tẩy. Đừng xem đó là bi kịch: mỗi lần sụp đổ là một lần bạn được tái sinh gần hơn với con người chân thật của mình. Bài học của bạn là khiêm nhường, buông cái tôi để trái tim được nâng lên.',
    advice:
      'Hãy đón nhận những đổ vỡ như lời mời trưởng thành thay vì oán trách. Sống chân thành, khiêm tốn trong tình yêu — đó là cách bạn trả món nợ này.',
  },
  19: {
    title: 'Nợ Nghiệp 19 — Bài Học Của Sự Nương Tựa',
    description:
      'Con số này gợi về một tiền kiếp từng dùng quyền lực cho lợi ích riêng, phớt lờ nỗi đau của những người dưới tay mình. Kiếp này, bạn thường thấy mình phải tự xoay xở một mình, như thể sự giúp đỡ luôn đến muộn. Bài học kép của bạn là vừa đứng vững trên đôi chân mình, vừa học cách mở lòng đón nhận và nương tựa người khác. Khi bạn hiểu rằng không ai là một hòn đảo, món nợ này sẽ được hóa giải.',
    advice:
      'Hãy tự lập nhưng đừng tự cô lập — tập nhờ giúp đỡ và trân trọng những bàn tay chìa ra với bạn. Cho đi quyền lực bằng sự phụng sự là cách chữa lành sâu nhất.',
  },
};

export const personalMonthIntro: string =
  'Tháng Cá Nhân là nhịp điệu nhỏ hơn bên trong Năm Cá Nhân của bạn, cho biết chủ đề năng lượng chi phối từng tháng. Hiểu con số này giúp bạn chọn đúng thời điểm để khởi động, nghỉ ngơi hay gặt hái trong dòng chảy của năm.';

export const personalDayIntro: string =
  'Ngày Cá Nhân là nhịp rung tinh tế nhất trong chu kỳ số học, hé lộ sắc thái năng lượng của từng ngày bạn đang sống. Nó như chiếc la bàn nhỏ giúp bạn thuận theo dòng chảy của ngày hôm nay thay vì đi ngược lại nó.';
