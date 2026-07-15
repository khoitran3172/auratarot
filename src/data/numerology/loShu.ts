// Luận giải biểu đồ ngày sinh Lo Shu (trường phái Pythagoras).
// Bao gồm: số thiếu, số lặp lại và 8 mũi tên sức mạnh/trống.

import { ArrowId, ArrowReading, ShortReading } from './types';

// Ý nghĩa khi một con số VẮNG MẶT trong biểu đồ ngày sinh — bài học cần bù đắp.
export const missingNumberReadings: Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9, ShortReading> = {
  1: {
    title: 'Thiếu Số 1 — Bài Học Về Tiếng Nói Của Chính Mình',
    description:
      'Vũ trụ đã để trống con số của sự thể hiện bản thân trong biểu đồ của bạn. Bạn có thể thấy khó khăn khi nói ra điều mình thật sự nghĩ, hay ngập ngừng khi cần khẳng định cái tôi trước đám đông. Đây không phải khiếm khuyết, mà là lời mời gọi bạn học cách cất lên tiếng nói riêng.',
    advice: 'Hãy tập diễn đạt suy nghĩ của mình mỗi ngày, dù chỉ qua trang nhật ký hay một cuộc trò chuyện nhỏ.',
  },
  2: {
    title: 'Thiếu Số 2 — Bài Học Về Sự Nhạy Cảm',
    description:
      'Con số của trực giác và sự tinh tế đang vắng bóng trong biểu đồ của bạn. Bạn có thể vô tình bỏ qua cảm xúc của người khác, hoặc khó nhận ra những tín hiệu tinh tế mà trái tim gửi đến. Hành trình của bạn là học cách lắng nghe bằng cả tâm hồn chứ không chỉ bằng lý trí.',
    advice: 'Hãy chậm lại và quan sát cảm xúc của những người xung quanh trước khi phản hồi.',
  },
  3: {
    title: 'Thiếu Số 3 — Bài Học Về Trí Tưởng Tượng',
    description:
      'Khoảng trống ở con số 3 cho thấy trí tưởng tượng và tư duy sáng tạo chưa phải là dòng chảy tự nhiên trong bạn. Bạn có xu hướng nhìn mọi thứ quá thực tế, đôi khi tự giới hạn mình trong những khuôn khổ quen thuộc. Vũ trụ mời bạn mở cánh cửa của những giấc mơ và khả năng mới.',
    advice: 'Hãy nuôi dưỡng óc sáng tạo qua nghệ thuật, sách vở, hay đơn giản là dám hỏi "nếu như...?".',
  },
  4: {
    title: 'Thiếu Số 4 — Bài Học Về Sự Thực Tế',
    description:
      'Con số của trật tự và nền tảng vật chất không hiện diện trong ngày sinh của bạn. Bạn có thể gặp khó khăn với sự ngăn nắp, kỷ luật, hay việc biến ý tưởng thành hành động cụ thể. Bài học của bạn là học cách xây từng viên gạch vững chắc cho ngôi nhà đời mình.',
    advice: 'Hãy bắt đầu với những thói quen nhỏ và đều đặn — chính chúng sẽ dựng nên nền móng lớn.',
  },
  5: {
    title: 'Thiếu Số 5 — Bài Học Về Trái Tim Trung Tâm',
    description:
      'Số 5 nằm ở trung tâm biểu đồ, là nhịp cầu của cảm xúc và khát vọng tự do — và nó đang để trống trong bạn. Bạn có thể thấy khó kết nối cảm xúc của mình với thế giới, hoặc thiếu động lực bứt phá khỏi vùng an toàn. Hành trình của bạn là tìm về trái tim mình và để nó dẫn đường.',
    advice: 'Hãy cho phép bản thân trải nghiệm điều mới mẻ và gọi tên cảm xúc thay vì né tránh chúng.',
  },
  6: {
    title: 'Thiếu Số 6 — Bài Học Về Mái Ấm Và Trách Nhiệm',
    description:
      'Con số của gia đình, tình thương và sự sáng tạo đầy trách nhiệm chưa được khắc vào biểu đồ của bạn. Bạn có thể cần thời gian để học cách gắn bó, chăm sóc và đặt tổ ấm vào vị trí xứng đáng trong tim. Đây là lời nhắc rằng yêu thương cũng là một nghệ thuật cần vun đắp.',
    advice: 'Hãy chủ động dành thời gian cho những người thân yêu, bởi tình cảm lớn lên từ sự hiện diện.',
  },
  7: {
    title: 'Thiếu Số 7 — Bài Học Về Chiều Sâu Tâm Linh',
    description:
      'Số 7 — con số của những bài học qua mất mát và sự thức tỉnh tâm linh — đang vắng mặt trong biểu đồ của bạn. Điều này có nghĩa bạn ít phải trải qua những mất mát lớn để trưởng thành, nhưng cũng dễ lướt qua đời sống nội tâm mà không dừng lại chiêm nghiệm. Vũ trụ mời bạn tự nguyện đi vào chiều sâu thay vì chờ nghịch cảnh dẫn lối.',
    advice: 'Hãy dành những khoảng lặng để thiền định, chiêm nghiệm và kết nối với thế giới bên trong.',
  },
  8: {
    title: 'Thiếu Số 8 — Bài Học Về Logic Và Tiền Bạc',
    description:
      'Con số của tư duy logic và sự khôn ngoan tài chính không xuất hiện trong ngày sinh của bạn. Bạn có thể hay quyết định bằng cảm tính, hoặc lúng túng trong việc quản lý tiền bạc và sắp xếp công việc một cách hệ thống. Bài học của bạn là rèn cho lý trí trở thành người bạn đồng hành đáng tin cậy.',
    advice: 'Hãy tập ghi chép chi tiêu và suy xét kỹ trước những quyết định quan trọng.',
  },
  9: {
    title: 'Thiếu Số 9 — Bài Học Về Lòng Nhân Ái',
    description:
      'Số 9 — con số của lý tưởng và trái tim nhân đạo — chưa hiện diện trong biểu đồ của bạn. Bạn có thể tập trung nhiều vào thế giới nhỏ của riêng mình mà quên rằng tâm hồn sẽ rộng mở hơn khi biết cho đi. Hành trình của bạn là học cách nhìn xa hơn bản thân và ôm lấy những giá trị lớn lao.',
    advice: 'Hãy thử làm một điều tử tế vô điều kiện mỗi tuần — bạn sẽ thấy tâm hồn mình giàu có hơn.',
  },
};

// Ý nghĩa khi một con số xuất hiện từ 2 lần trở lên — năng lượng được khuếch đại.
export const repeatedNumberReadings: Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9, ShortReading> = {
  1: {
    title: 'Số 1 Lặp Lại — Tiếng Nói Được Khuếch Đại',
    description:
      'Nhiều con số 1 trong biểu đồ cho thấy năng lượng thể hiện bản thân trong bạn rất mạnh mẽ. Bạn có khả năng diễn đạt rõ ràng, cái tôi vững vàng và không ngại đứng ở trung tâm. Nhưng khi quá liều, năng lượng này có thể khiến bạn nói nhiều hơn lắng nghe, hoặc trở nên áp đặt trong mắt người khác.',
    advice: 'Hãy dùng tiếng nói mạnh mẽ của mình để nâng đỡ người khác, và nhớ dành chỗ cho sự im lặng.',
  },
  2: {
    title: 'Số 2 Lặp Lại — Trực Giác Nhân Đôi',
    description:
      'Sự lặp lại của số 2 ban cho bạn độ nhạy cảm và trực giác sắc bén hiếm có. Bạn cảm nhận được những rung động tinh tế mà người khác bỏ lỡ, và thấu hiểu lòng người một cách tự nhiên. Song nếu không giữ ranh giới, bạn dễ bị cuốn vào cảm xúc của người khác đến mức tổn thương chính mình.',
    advice: 'Hãy trân trọng món quà trực giác, nhưng học cách bảo vệ năng lượng của riêng bạn.',
  },
  3: {
    title: 'Số 3 Lặp Lại — Trí Tưởng Tượng Bùng Cháy',
    description:
      'Nhiều số 3 thắp sáng trong bạn một trí tưởng tượng phong phú và tư duy nhạy bén khác thường. Ý tưởng đến với bạn như những vì sao rơi — dồi dào và lấp lánh. Tuy nhiên, khi năng lượng này quá dư thừa, bạn dễ sống trong thế giới mộng tưởng, phóng đại vấn đề hoặc suy nghĩ quá nhiều.',
    advice: 'Hãy chọn một vài ý tưởng tâm đắc nhất và kiên trì biến chúng thành hiện thực.',
  },
  4: {
    title: 'Số 4 Lặp Lại — Nền Móng Vững Chãi',
    description:
      'Số 4 lặp lại cho thấy bạn là người cực kỳ thực tế, ngăn nắp và có đôi bàn tay khéo léo xây dựng. Bạn tin vào lao động chăm chỉ và những giá trị bền vững hơn là may rủi. Nhưng quá nhiều năng lượng này có thể khiến bạn cứng nhắc, cầu toàn và khó chấp nhận sự thay đổi.',
    advice: 'Hãy giữ sự vững vàng của mình, nhưng cho phép cuộc sống đôi lúc được ngẫu hứng.',
  },
  5: {
    title: 'Số 5 Lặp Lại — Ngọn Lửa Cảm Xúc Rực Cháy',
    description:
      'Nhiều số 5 ở trung tâm biểu đồ đồng nghĩa với một trái tim cháy bỏng và khát vọng tự do mãnh liệt. Bạn sống trọn vẹn với cảm xúc, yêu thích trải nghiệm và luôn khao khát chuyển động. Song khi quá liều, ngọn lửa ấy dễ biến thành sự bốc đồng, nôn nóng và khó ở yên với bất cứ điều gì.',
    advice: 'Hãy để đam mê dẫn lối, nhưng học cách neo mình lại trước những quyết định lớn.',
  },
  6: {
    title: 'Số 6 Lặp Lại — Trái Tim Của Tổ Ấm',
    description:
      'Số 6 lặp lại cho thấy tình yêu gia đình và tinh thần trách nhiệm trong bạn sâu đậm khác thường. Bạn là chỗ dựa ấm áp, người luôn dang tay chăm sóc và sáng tạo vì những người mình thương. Nhưng năng lượng dư thừa này có thể khiến bạn lo lắng thái quá, kiểm soát hoặc hy sinh đến quên mất bản thân.',
    advice: 'Hãy nhớ rằng chăm sóc chính mình cũng là một cách yêu thương gia đình.',
  },
  7: {
    title: 'Số 7 Lặp Lại — Linh Hồn Được Tôi Luyện',
    description:
      'Nhiều số 7 báo hiệu một linh hồn được tôi luyện qua những bài học sâu sắc, đôi khi là qua mất mát. Mỗi trải nghiệm ấy đều để lại trong bạn sự thấu suốt và chiều sâu tâm linh mà ít ai có được. Tuy vậy, quá nhiều năng lượng này có thể khiến bạn khép mình, hoài nghi hoặc mang nặng những nỗi buồn cũ.',
    advice: 'Hãy xem mỗi mất mát là một người thầy, và đừng ngại mở lòng đón nhận niềm vui mới.',
  },
  8: {
    title: 'Số 8 Lặp Lại — Bộ Óc Logic Sắc Bén',
    description:
      'Số 8 lặp lại ban cho bạn tư duy logic mạnh mẽ và bản năng nhạy bén với tiền bạc, công việc. Bạn nhìn thấu cấu trúc của vấn đề và biết cách biến nguồn lực thành thành quả. Nhưng khi quá liều, bạn dễ trở nên thực dụng, đặt vật chất lên trên cảm xúc và khắt khe với cả chính mình.',
    advice: 'Hãy dùng sự sắc bén ấy để kiến tạo, nhưng đừng quên đo lường hạnh phúc bằng cả trái tim.',
  },
  9: {
    title: 'Số 9 Lặp Lại — Lý Tưởng Rộng Lớn',
    description:
      'Nhiều số 9 cho thấy bạn mang trong mình lý tưởng cao đẹp và trái tim nhân đạo rộng mở. Bạn mơ về một thế giới tốt đẹp hơn và sẵn lòng cống hiến cho những điều lớn lao. Song năng lượng này khi dư thừa có thể khiến bạn mơ mộng xa rời thực tại, hoặc thất vọng khi đời không như lý tưởng.',
    advice: 'Hãy bắt đầu thay đổi thế giới từ những việc nhỏ trong tầm tay của bạn.',
  },
};

// Luận giải 8 mũi tên trong biểu đồ ngày sinh.
export const arrowReadings: Record<ArrowId, ArrowReading> = {
  determination: {
    name: 'Mũi Tên Quyết Tâm',
    digits: [1, 5, 9],
    full:
      'Đường chéo 1-5-9 rực sáng trong biểu đồ của bạn, ban cho bạn ý chí sắt đá và lòng kiên định hiếm có. Một khi đã đặt mục tiêu, bạn sẽ đi đến cùng bất chấp chông gai. Hãy nhớ rằng sức mạnh này cũng cần đi kèm sự mềm mỏng để không trở thành cố chấp.',
    empty:
      'Đường chéo 1-5-9 để trống cho thấy bạn dễ trì hoãn và bỏ cuộc giữa chừng khi gặp trở ngại. Nguồn năng lượng quyết tâm chưa tự nhiên chảy trong bạn, nên mọi mục tiêu lớn đều cần được chia nhỏ. Hãy rèn ý chí từng chút một — mỗi việc nhỏ hoàn thành là một viên gạch xây nên nghị lực.',
  },
  spirituality: {
    name: 'Mũi Tên Tâm Linh',
    digits: [3, 5, 7],
    full:
      'Đường chéo 3-5-7 trọn vẹn ban cho bạn sự bình an nội tại và khả năng kết nối sâu sắc với thế giới vô hình. Dù giông bão ngoài kia có lớn đến đâu, bên trong bạn vẫn có một khoảng lặng vững chãi. Đây là món quà quý giá — hãy chia sẻ sự an yên ấy với những người xung quanh.',
    empty:
      'Khi cả 3, 5 và 7 đều vắng mặt, bạn có xu hướng hoài nghi những gì không thể chứng minh bằng mắt thường. Đời sống tâm linh với bạn còn là vùng đất xa lạ, và điều đó đôi khi khiến tâm hồn thiếu một điểm tựa. Hãy thử mở lòng với thiền định hay những khoảnh khắc tĩnh lặng — niềm tin có thể lớn lên từ đó.',
  },
  intellect: {
    name: 'Mũi Tên Trí Tuệ',
    digits: [3, 6, 9],
    full:
      'Hàng số 3-6-9 đầy đủ chứng tỏ bạn sở hữu một đầu óc sáng láng, tư duy nhanh nhạy và trí nhớ tốt. Bạn học hỏi dễ dàng và nhìn ra bản chất vấn đề trước nhiều người. Hãy dùng ánh sáng trí tuệ này để soi đường không chỉ cho mình mà cho cả những người quanh bạn.',
    empty:
      'Hàng 3-6-9 để trống không có nghĩa bạn kém cỏi, mà cho thấy tư duy trừu tượng chưa phải thế mạnh tự nhiên. Bạn cần rèn luyện đầu óc qua việc đọc, học và suy ngẫm đều đặn hơn người khác. Kiên trì mài giũa, trí tuệ của bạn sẽ tỏa sáng theo cách riêng của nó.',
  },
  emotionalBalance: {
    name: 'Mũi Tên Cân Bằng Cảm Xúc',
    digits: [2, 5, 8],
    full:
      'Hàng số 2-5-8 trọn vẹn ban cho bạn trí tuệ cảm xúc cao và tâm hồn điềm tĩnh đáng ngưỡng mộ. Bạn thấu hiểu cảm xúc của mình lẫn người khác, và hiếm khi để sóng gió cuốn trôi lý trí. Chính sự cân bằng này khiến mọi người tìm đến bạn như tìm một bến đỗ an lành.',
    empty:
      'Khi 2, 5 và 8 cùng vắng bóng, cảm xúc của bạn dễ thất thường như thời tiết — lúc nắng lúc mưa khó đoán. Bạn có thể phản ứng mạnh trước những điều nhỏ nhặt rồi lại tự trách mình sau đó. Hãy học cách gọi tên cảm xúc và hít thở sâu trước khi phản hồi — sự bình thản là kỹ năng có thể rèn được.',
  },
  practicality: {
    name: 'Mũi Tên Thực Tế',
    digits: [1, 4, 7],
    full:
      'Hàng số 1-4-7 đầy đủ cho thấy bạn có đôi tay và khối óc của người kiến tạo. Bạn khéo léo trong việc xây dựng đời sống vật chất, biết biến ý tưởng thành những giá trị hữu hình. Nền tảng vững chắc bạn dựng nên hôm nay sẽ là chỗ dựa cho cả những giấc mơ lớn ngày mai.',
    empty:
      'Hàng 1-4-7 để trống cho thấy bạn thiên về mơ mộng hơn là thực tế. Những ý tưởng đẹp đẽ trong đầu bạn thường khó chạm đất vì thiếu kế hoạch cụ thể và sự bền bỉ vật chất. Hãy tập biến mỗi giấc mơ thành từng bước hành động nhỏ — đó là cách mộng và thực gặp nhau.',
  },
  planning: {
    name: 'Mũi Tên Kế Hoạch',
    digits: [1, 2, 3],
    full:
      'Hàng số 1-2-3 trọn vẹn ban cho bạn óc tổ chức và khả năng hoạch định xuất sắc. Bạn nhìn thấy con đường từ điểm khởi đầu đến đích, và biết sắp xếp mọi thứ vào đúng vị trí của nó. Với bạn, thành công không phải may mắn mà là kết quả của một bản đồ được vẽ kỹ lưỡng.',
    empty:
      'Khi 1, 2 và 3 cùng để trống, bạn dễ sống thiếu định hướng, để dòng đời đưa đẩy thay vì tự cầm lái. Các dự định thường dở dang vì thiếu một kế hoạch rõ ràng ngay từ đầu. Hãy tập viết ra mục tiêu và chia nó thành từng chặng nhỏ — chiếc la bàn đơn giản ấy sẽ thay đổi hành trình của bạn.',
  },
  willpower: {
    name: 'Mũi Tên Ý Chí',
    digits: [4, 5, 6],
    full:
      'Hàng số 4-5-6 đầy đủ chứng tỏ bạn sở hữu nghị lực bền bỉ đáng nể. Khó khăn với bạn không phải rào cản mà là thử thách để tôi luyện, và bạn hiếm khi buông xuôi giữa đường. Sức bền ấy chính là ngọn lửa âm ỉ đưa bạn đi xa hơn những người chỉ bùng cháy nhất thời.',
    empty:
      'Hàng 4-5-6 để trống cho thấy ý chí của bạn dễ dao động trước sóng gió và lời bàn tán của người đời. Bạn có thể bắt đầu đầy hứng khởi nhưng nhanh chóng nản lòng khi kết quả chưa đến. Hãy chọn những cam kết nhỏ và giữ lời với chính mình — nghị lực được xây từ những lần không bỏ cuộc.',
  },
  action: {
    name: 'Mũi Tên Hành Động',
    digits: [7, 8, 9],
    full:
      'Hàng số 7-8-9 trọn vẹn biến bạn thành con người của hành động — năng động, quyết đoán và luôn sẵn sàng bắt tay vào việc. Trong khi người khác còn cân nhắc, bạn đã đi được nửa chặng đường. Chỉ cần nhớ đôi lúc dừng lại nhìn bản đồ, để tốc độ của bạn luôn đúng hướng.',
    empty:
      'Khi 7, 8 và 9 cùng vắng mặt, bạn có xu hướng chần chừ, suy tính mãi mà chưa dám bước. Nhiều cơ hội đẹp có thể lướt qua chỉ vì bạn chờ một thời điểm "hoàn hảo" không bao giờ đến. Hãy nhớ rằng bước chân đầu tiên vụng về vẫn quý hơn ngàn dự định nằm yên trên giấy.',
  },
};
