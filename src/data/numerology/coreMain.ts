import { NumerologyNumber, NumberReading } from './types';

// Luận giải Số Đường Đời (Life Path) — bài học trung tâm và con đường của cả cuộc đời,
// tính từ ngày sinh. Đây là chỉ số quan trọng nhất trong thần số học Pythagoras.
export const lifePathReadings: Record<NumerologyNumber, NumberReading> = {
  1: {
    title: 'Số Đường Đời 1 — Người Tiên Phong',
    description:
      'Bạn đến với cuộc đời này để học cách đứng vững trên đôi chân của chính mình. Con đường của bạn là con đường của người mở lối — nơi chưa ai đi qua, bạn sẽ là người đặt dấu chân đầu tiên. Từ nhỏ, vũ trụ đã liên tục đặt bạn vào những tình huống buộc phải tự quyết định, tự chịu trách nhiệm, để tôi luyện ý chí độc lập trong bạn. Bài học lớn nhất của đường đời này là phân biệt giữa tự tin và tự tôn, giữa dẫn dắt và áp đặt. Khi bạn dám sống đúng với bản sắc riêng mà không cần sự công nhận của đám đông, năng lượng số 1 trong bạn mới thực sự nở hoa. Cuộc đời bạn là lời nhắc rằng mọi hành trình vĩ đại đều bắt đầu từ một người dám bước trước.',
    strengths:
      'Ý chí sắt đá, khả năng khởi xướng và tinh thần tiên phong hiếm có — bạn nhìn thấy cơ hội ở nơi người khác chỉ thấy rủi ro. Bạn có sức hút tự nhiên của một người dẫn đầu.',
    challenges:
      'Cái tôi lớn và nỗi sợ bị phụ thuộc có thể khiến bạn trở nên cứng nhắc, cô độc, khó lắng nghe. Sự nóng vội đôi khi làm bạn bỏ dở những gì mình khởi xướng.',
    advice:
      'Hãy nhớ rằng người dẫn đầu thực thụ không đi một mình — họ đi trước để soi đường cho người khác. Học cách mềm mại trong lắng nghe, và ý chí của bạn sẽ trở thành ngọn đuốc thay vì ngọn lửa thiêu đốt.',
  },
  2: {
    title: 'Số Đường Đời 2 — Người Kiến Tạo Hòa Bình',
    description:
      'Con đường của bạn không ồn ào như những con đường khác, nhưng lại là con đường giữ cho thế giới không tan vỡ. Bạn sinh ra để học nghệ thuật của sự kết nối — lắng nghe những điều chưa nói thành lời, cảm nhận những rung động mà người khác bỏ qua. Vũ trụ trao cho bạn trái tim nhạy cảm như một chiếc la bàn tinh vi, và cả đời bạn là hành trình học cách tin vào chiếc la bàn ấy. Bài học trung tâm của bạn là hiểu rằng dịu dàng không phải yếu đuối, nhường nhịn không phải thua thiệt. Khi bạn đứng giữa những xung đột và mang lại hòa giải, bạn đang làm đúng điều mình sinh ra để làm. Sức mạnh của bạn nằm ở chỗ bạn khiến người khác cảm thấy được thấu hiểu.',
    strengths:
      'Trực giác tinh tế, khả năng thấu cảm và ngoại giao bẩm sinh — bạn hàn gắn được những rạn nứt mà người khác không thể chạm tới. Bạn là người đồng hành đáng tin cậy nhất.',
    challenges:
      'Sự nhạy cảm cao khiến bạn dễ tổn thương, hay do dự và có xu hướng đánh mất chính mình để làm hài lòng người khác. Bạn thường ôm cảm xúc của cả thế giới vào lòng.',
    advice:
      'Hãy học cách nói "không" mà không cảm thấy tội lỗi — hòa bình thật sự phải bắt đầu từ bên trong bạn. Ranh giới lành mạnh chính là món quà bạn tặng cho cả mình lẫn người mình yêu thương.',
  },
  3: {
    title: 'Số Đường Đời 3 — Đứa Con Của Cảm Hứng',
    description:
      'Bạn đến thế giới này mang theo một suối nguồn sáng tạo không bao giờ cạn. Con đường của bạn là học cách biểu đạt — biến những gì rung động bên trong thành lời nói, hình ảnh, âm thanh chạm đến trái tim người khác. Nơi nào có bạn, nơi đó có tiếng cười, có màu sắc, có sự sống động; đó không phải ngẫu nhiên mà là sứ mệnh. Nhưng bài học sâu xa của đường đời 3 là học cách đi đến tận cùng: cảm hứng đến với bạn dễ dàng, còn sự bền bỉ mới là điều bạn phải tôi luyện. Vũ trụ muốn bạn hiểu rằng niềm vui không phải để trốn tránh nỗi buồn, mà để chuyển hóa nó. Khi bạn dám biểu đạt cả những góc tối của mình, nghệ thuật trong bạn mới thực sự có chiều sâu.',
    strengths:
      'Trí tưởng tượng phong phú, tài ăn nói duyên dáng và năng lượng lạc quan lan tỏa — bạn truyền cảm hứng chỉ bằng sự hiện diện của mình.',
    challenges:
      'Bạn dễ phân tán năng lượng vào quá nhiều thứ, bắt đầu rực rỡ nhưng khó kết thúc trọn vẹn. Đôi khi bạn dùng vẻ vui tươi để che giấu những nỗi buồn chưa được chữa lành.',
    advice:
      'Hãy chọn một vài điều thực sự quan trọng và đi cùng chúng đến cùng — chiều sâu sẽ nhân sức mạnh sáng tạo của bạn lên gấp bội. Và đừng sợ những ngày u ám: chúng là mực để bạn viết nên những trang đẹp nhất.',
  },
  4: {
    title: 'Số Đường Đời 4 — Người Xây Nền Móng',
    description:
      'Con đường của bạn được lát bằng những viên gạch của kỷ luật, kiên nhẫn và lao động chân chính. Bạn sinh ra để học cách xây dựng — không phải những lâu đài trên mây, mà những nền móng vững chãi để người khác có thể đứng lên. Vũ trụ hiếm khi trao cho bạn con đường tắt; thay vào đó, nó trao cho bạn khả năng đi đường dài mà không gục ngã. Mỗi thử thách trong đời bạn đều là một bài kiểm tra về sự bền bỉ, và phần thưởng dành cho bạn luôn đến muộn nhưng chắc chắn. Bài học trung tâm của bạn là học cách tin vào tiến trình: những gì được xây chậm rãi và tử tế sẽ đứng vững lâu hơn mọi thứ dựng lên vội vàng. Bạn là người mà thời gian luôn đứng về phía.',
    strengths:
      'Tính kỷ luật, sự đáng tin cậy và khả năng tổ chức xuất sắc — khi bạn hứa, mọi người biết điều đó sẽ thành hiện thực. Bạn biến hỗn loạn thành trật tự.',
    challenges:
      'Sự cứng nhắc và nỗi sợ thay đổi có thể biến khung sườn vững chắc của bạn thành chiếc lồng giam chính mình. Bạn dễ làm việc đến kiệt sức mà quên mất niềm vui.',
    advice:
      'Hãy nhớ rằng ngay cả những cây cầu kiên cố nhất cũng được thiết kế để đung đưa theo gió. Cho phép mình linh hoạt và nghỉ ngơi — đó không phải lười biếng, mà là bảo trì cho công trình quan trọng nhất: chính bạn.',
  },
  5: {
    title: 'Số Đường Đời 5 — Kẻ Lữ Hành Tự Do',
    description:
      'Bạn mang trong mình cơn gió không chịu đứng yên. Con đường của bạn là con đường của trải nghiệm — vũ trụ muốn bạn nếm, chạm, đi, vấp ngã và đứng dậy ở nhiều vùng đất, nhiều vai trò, nhiều phiên bản của chính mình. Sự thay đổi không phải kẻ thù của bạn; nó là người thầy trung thành nhất. Nhưng bài học sâu xa của đường đời 5 nằm ở nghịch lý này: tự do thật sự không phải là không có ràng buộc, mà là dám chọn điều mình gắn bó. Cả đời bạn sẽ học cách phân biệt giữa khao khát khám phá và thói quen chạy trốn. Khi bạn tìm được điều đáng để ở lại — một con người, một lý tưởng, một công việc — sự tự do của bạn sẽ có gốc rễ, và đó là lúc bạn bay cao nhất.',
    strengths:
      'Khả năng thích nghi phi thường, trí tò mò không đáy và sức sống cuốn hút — bạn học nhanh, xoay chuyển giỏi và làm mới mọi không gian mình bước vào.',
    challenges:
      'Sự bồn chồn khiến bạn khó cam kết lâu dài và dễ sa vào những khoái cảm tức thời. Bạn có thể rời đi đúng lúc điều tốt đẹp sắp chín.',
    advice:
      'Trước khi rời bỏ điều gì, hãy tự hỏi: mình đang đi về phía điều mới, hay chỉ đang chạy khỏi điều cũ? Tự do đẹp nhất khi nó là lựa chọn tỉnh thức, không phải phản xạ.',
  },
  6: {
    title: 'Số Đường Đời 6 — Trái Tim Của Mái Ấm',
    description:
      'Bạn sinh ra với một trái tim được đo ni đóng giày cho việc yêu thương. Con đường của bạn xoay quanh gia đình, cộng đồng và trách nhiệm — bạn là người mà mọi người tìm đến khi cần một bờ vai, một bữa cơm ấm, một lời khuyên chân thành. Vũ trụ trao cho bạn khả năng nhìn thấy vẻ đẹp và tiềm năng trong người khác, ngay cả khi chính họ không nhìn thấy. Nhưng bài học trung tâm của đường đời 6 là học cách yêu mà không kiểm soát, chăm sóc mà không hy sinh đến cạn kiệt. Bạn sẽ nhiều lần đứng trước lằn ranh giữa giúp đỡ và gánh thay, giữa hoàn thiện và cầu toàn. Khi bạn hiểu rằng mình không thể rót từ chiếc bình rỗng, tình yêu của bạn mới trở thành suối nguồn bền vững cho tất cả.',
    strengths:
      'Lòng trắc ẩn sâu sắc, tinh thần trách nhiệm và khả năng chữa lành tự nhiên — bạn tạo ra cảm giác "về nhà" cho bất kỳ ai ở gần.',
    challenges:
      'Bạn dễ hy sinh bản thân quá mức, ôm việc của người khác và thất vọng khi sự chăm lo của mình không được đáp lại. Chủ nghĩa hoàn hảo khiến bạn khắt khe với cả mình lẫn người thân.',
    advice:
      'Yêu thương chính mình không phải ích kỷ — đó là điều kiện để yêu thương bền lâu. Hãy để người khác tự đi trên đôi chân của họ; đôi khi món quà lớn nhất là niềm tin, không phải sự bảo bọc.',
  },
  7: {
    title: 'Số Đường Đời 7 — Người Truy Cầu Chân Lý',
    description:
      'Con đường của bạn dẫn vào bên trong — nơi ít người dám đi và càng ít người đi được xa. Bạn sinh ra với một câu hỏi thường trực trong tim: "Sự thật đằng sau tất cả những điều này là gì?" Không có câu trả lời hời hợt nào làm bạn thỏa mãn; bạn cần đào sâu, chiêm nghiệm, kiểm chứng bằng chính trải nghiệm của mình. Vũ trụ ban cho bạn trí tuệ sắc bén và một đời sống nội tâm phong phú như đại dương, nhưng cũng đặt vào bạn bài học về sự kết nối: chân lý tìm được trong cô độc chỉ trọn vẹn khi được sẻ chia. Những khoảng lặng một mình là thánh đường của bạn, nhưng đừng để thánh đường ấy trở thành pháo đài. Hành trình của bạn là hợp nhất lý trí và tâm linh, kiến thức và trí tuệ, hiểu biết và tình thương.',
    strengths:
      'Chiều sâu tư duy, trực giác tâm linh và khả năng phân tích hiếm có — bạn nhìn xuyên qua bề mặt để chạm vào bản chất của vấn đề và con người.',
    challenges:
      'Xu hướng thu mình, hoài nghi và giữ khoảng cách khiến bạn đôi khi lạc lõng giữa những người yêu thương mình. Bạn dễ mắc kẹt trong suy nghĩ thay vì sống trọn khoảnh khắc.',
    advice:
      'Hãy cho phép một vài người bước vào thế giới nội tâm của bạn — sự thấu hiểu bạn khao khát chỉ đến khi bạn dám được nhìn thấy. Chân lý đẹp nhất là chân lý được sống, không chỉ được nghĩ.',
  },
  8: {
    title: 'Số Đường Đời 8 — Bậc Thầy Của Quyền Năng',
    description:
      'Bạn bước vào cuộc đời này để học bài học lớn về quyền lực, tiền bạc và sự cân bằng giữa vật chất với tinh thần. Con đường của bạn thường có biên độ rộng hơn người khác — những đỉnh cao rực rỡ và những lần trắng tay để làm lại từ đầu, bởi vũ trụ muốn bạn hiểu quyền năng từ cả hai phía. Bạn có con mắt nhìn ra giá trị, khả năng tổ chức và tham vọng đủ lớn để biến tầm nhìn thành đế chế. Nhưng bài học trung tâm của số 8 là: quyền lực chỉ bền khi được dùng để nâng đỡ, và tiền bạc chỉ có nghĩa khi phụng sự cho điều lớn hơn chính nó. Khi bạn học được cách cho đi tương xứng với những gì nhận về, dòng chảy thịnh vượng trong đời bạn sẽ không bao giờ ngừng. Bạn sinh ra không phải để giàu có đơn thuần, mà để chứng minh rằng vật chất và đạo đức có thể song hành.',
    strengths:
      'Tầm nhìn chiến lược, năng lực quản trị và sức bật phi thường sau thất bại — bạn có khả năng kiến tạo sự thịnh vượng cho cả mình và những người quanh mình.',
    challenges:
      'Tham vọng có thể biến thành nỗi ám ảnh kiểm soát, khiến bạn đo mọi thứ bằng thước đo thành-bại và bỏ quên những giá trị không mua được. Bạn khó cho phép mình yếu đuối.',
    advice:
      'Hãy định nghĩa lại thành công theo cách của riêng bạn, bao gồm cả sức khỏe, tình thân và sự bình an. Quyền năng lớn nhất của bạn là nâng người khác lên — và nghịch lý thay, đó cũng là con đường đưa bạn lên cao nhất.',
  },
  9: {
    title: 'Số Đường Đời 9 — Tâm Hồn Nhân Loại',
    description:
      'Số 9 là con số cuối cùng của vòng tròn, và bạn mang trong mình sự từng trải của một tâm hồn đã đi qua nhiều bài học. Con đường của bạn là con đường của lòng nhân ái — bạn cảm nhận nỗi đau của người xa lạ như thể đó là chuyện của mình, và không thể ngoảnh mặt trước bất công. Vũ trụ trao cho bạn tầm nhìn rộng vượt khỏi cái tôi cá nhân: bạn nghĩ về cộng đồng, về nhân loại, về những điều lớn hơn một đời người. Nhưng bài học trung tâm của số 9 lại là buông bỏ — cả đời bạn sẽ học cách cho đi mà không giữ lại, kết thúc những chương cũ để nhường chỗ cho khởi đầu mới. Những mất mát trong đời bạn không phải hình phạt, mà là lời mời mở rộng vòng tay hơn nữa. Khi bạn cho đi vô điều kiện, cuộc đời sẽ đáp lại bạn theo những cách không ngờ tới.',
    strengths:
      'Lòng bao dung rộng lớn, lý tưởng cao đẹp và khả năng truyền cảm hứng phụng sự — bạn khiến người khác muốn trở thành phiên bản tử tế hơn của chính họ.',
    challenges:
      'Bạn dễ ôm nỗi đau của thế giới đến kiệt sức, khó buông bỏ quá khứ và đôi khi thất vọng vì hiện thực không đẹp như lý tưởng. Bạn hay quên rằng mình cũng cần được giúp đỡ.',
    advice:
      'Hãy học nghệ thuật buông bỏ với lòng biết ơn — mỗi cánh cửa khép lại đều đang mở ra một cánh cửa khác. Cứu thế giới bắt đầu từ việc không bỏ rơi chính mình.',
  },
  11: {
    title: 'Số Đường Đời 11 — Ngọn Hải Đăng Trực Giác',
    description:
      'Bạn mang một trong ba con số bậc thầy — và điều đó có nghĩa là linh hồn bạn đã chọn một con đường không dễ dàng nhưng phi thường. Số 11 là số của trực giác được nâng lên thành khả năng soi sáng: bạn cảm nhận được những dòng chảy vô hình, những sự thật chưa thành lời, và thường "biết" mọi thứ trước khi lý trí kịp giải thích. Sứ mệnh của bạn là trở thành ngọn hải đăng — không phải kéo thuyền vào bờ, mà tỏa sáng để người khác tự tìm thấy đường. Nhưng rung động cao của số 11 cũng đi kèm áp lực lớn: hệ thần kinh nhạy bén khiến bạn dễ lo âu, căng thẳng, và cảm giác "mình khác biệt" có thể trở thành nỗi cô đơn sâu thẳm. Nhiều giai đoạn bạn sẽ sống ở tần số của số 2 để học sự cân bằng trước khi đủ vững cho tần số 11. Hãy kiên nhẫn với chính mình — ánh sáng của bạn cần thời gian để ổn định trước khi soi xa.',
    strengths:
      'Trực giác gần như tiên tri, độ nhạy tâm linh sâu sắc và khả năng truyền cảm hứng nâng đỡ tinh thần người khác — bạn là chiếc ăng-ten bắt được những tần số mà thế giới bỏ lỡ.',
    challenges:
      'Áp lực của rung động cao khiến bạn dễ căng thẳng, mất ngủ, hoang mang giữa lý tưởng lớn và hiện thực nhỏ bé. Bạn có thể nghi ngờ chính món quà của mình.',
    advice:
      'Hãy chăm sóc hệ thần kinh của bạn như chăm một khu vườn quý: thiền định, thiên nhiên, những nhịp sống chậm. Tin vào trực giác của mình — nó chưa bao giờ là ngẫu nhiên.',
  },
  22: {
    title: 'Số Đường Đời 22 — Kiến Trúc Sư Bậc Thầy',
    description:
      'Bạn mang con số được xem là quyền năng nhất trong thần số học — số của người biến giấc mơ vĩ đại thành công trình hiện hữu. Số 22 hợp nhất tầm nhìn tâm linh của số 11 với khả năng xây dựng thực tế của số 4: bạn không chỉ mơ về một thế giới tốt đẹp hơn, bạn có thể vẽ bản thiết kế và đặt từng viên gạch cho nó. Những gì bạn kiến tạo có tiềm năng vượt qua đời bạn, phụng sự cho nhiều thế hệ. Nhưng chính vì tiềm năng lớn, áp lực của con số này cũng lớn tương xứng: bạn thường cảm thấy mình chưa làm đủ, chưa xứng với điều gì đó lớn lao đang chờ đợi. Nhiều người mang số 22 chọn sống an toàn ở tần số số 4 vì e sợ tầm vóc của chính mình. Bài học của bạn là dám nhận lấy sứ mệnh lớn mà không bị nó nghiền nát — xây từng viên gạch một, nhưng đừng bao giờ quên bản thiết kế của cả thánh đường.',
    strengths:
      'Sự kết hợp hiếm có giữa tầm nhìn lớn và năng lực thực thi kỷ luật — bạn có thể hiện thực hóa những điều người khác cho là bất khả thi, và truyền được niềm tin ấy cho cả tập thể.',
    challenges:
      'Áp lực nội tại khổng lồ dễ dẫn đến kiệt sức, tự trách hoặc ngược lại — trốn tránh tiềm năng của chính mình trong những mục tiêu quá nhỏ. Bạn khó tìm được người thực sự hiểu tầm nhìn của bạn.',
    advice:
      'Đừng cố xây cả thánh đường trong một ngày — sự vĩ đại của bạn nằm ở tính bền bỉ, không phải tốc độ. Hãy tìm những cộng sự đáng tin và cho phép họ san sẻ gánh nặng cùng bạn.',
  },
  33: {
    title: 'Số Đường Đời 33 — Người Thầy Của Yêu Thương',
    description:
      'Bạn mang con số bậc thầy hiếm gặp nhất — số của tình yêu thương được nâng lên thành sứ mệnh chữa lành và dẫn dắt. Số 33 hợp nhất trực giác của 11, khả năng kiến tạo của 22 và trái tim của số 6: con đường của bạn là yêu thương vô điều kiện, không phải như một cảm xúc mà như một cách sống. Những người quanh bạn tự nhiên tìm đến bạn để được lắng nghe, được chữa lành, được nhắc rằng họ xứng đáng — đó không phải gánh nặng ngẫu nhiên, đó là tiếng gọi của linh hồn bạn. Nhưng rung động cực cao của con số này cũng mang theo thử thách khắc nghiệt: bạn dễ hy sinh đến quên mình, gánh nỗi đau của người khác như của chính mình, và mang cảm giác trách nhiệm với cả thế giới. Nhiều giai đoạn bạn sẽ sống ở tần số số 6 để học yêu thương trong giới hạn lành mạnh trước. Khi bạn cân bằng được lòng trắc ẩn với sự tự bảo vệ, bạn trở thành đúng nghĩa một người thầy — dạy bằng chính cách mình sống.',
    strengths:
      'Trái tim trắc ẩn phi thường, khả năng chữa lành và nâng đỡ tâm hồn người khác — sự hiện diện của bạn tự nó đã là một liều thuốc cho những ai tổn thương.',
    challenges:
      'Áp lực rung động cao khiến bạn dễ hy sinh quá mức, ôm trách nhiệm không thuộc về mình và kiệt quệ cảm xúc. Kỳ vọng hoàn hảo về bản thân có thể trở thành bản án tự kết.',
    advice:
      'Bạn không thể chữa lành cả thế giới nếu để chính mình rỉ máu — hãy đặt tên mình vào danh sách những người bạn yêu thương. Người thầy vĩ đại nhất dạy người khác cách tự đứng dậy, không phải đứng thay họ.',
  },
};

// Luận giải Số Sứ Mệnh (Expression/Destiny) — tài năng thiên bẩm và điều bạn sinh ra
// để hoàn thành, tính từ họ tên khai sinh đầy đủ.
export const expressionReadings: Record<NumerologyNumber, NumberReading> = {
  1: {
    title: 'Số Sứ Mệnh 1 — Người Khai Phá Con Đường Mới',
    description:
      'Họ tên của bạn mang rung động của người mở đường. Tài năng thiên bẩm của bạn là khả năng khởi xướng: nhìn thấy điều chưa tồn tại và có đủ can đảm để bắt đầu nó từ con số không. Bạn sinh ra để đứng ở vị trí dẫn dắt — trong công việc, trong gia đình, hay trong bất kỳ tập thể nào bạn thuộc về, sớm muộn mọi người cũng sẽ nhìn về phía bạn chờ một quyết định. Sứ mệnh của bạn là dùng ý chí và tính sáng tạo độc đáo ấy để tạo ra những điều mới mẻ, thay vì đi lại lối mòn của người khác. Khi bạn dám ký tên mình lên những gì mình tạo ra, bạn đang hoàn thành đúng điều mình được sinh ra để làm.',
    strengths:
      'Tư duy độc lập, quyết đoán và nguồn năng lượng khởi tạo dồi dào — bạn giỏi nhất khi được toàn quyền với ý tưởng của mình.',
    challenges:
      'Bạn khó làm việc dưới quyền người khác và dễ mất kiên nhẫn với những ai chậm hơn mình. Tính hiếu thắng có thể biến đồng đội thành đối thủ.',
    advice:
      'Hãy chọn những sân chơi cho phép bạn tiên phong, nhưng nhớ rằng di sản lớn nhất của người mở đường là những người đi tiếp con đường ấy. Nâng đỡ người sau chính là cách bạn nhân đôi dấu ấn của mình.',
  },
  2: {
    title: 'Số Sứ Mệnh 2 — Nhịp Cầu Của Những Trái Tim',
    description:
      'Tên của bạn rung lên tần số của sự kết nối. Tài năng thiên bẩm của bạn là cảm nhận được con người — bạn đọc được không khí của căn phòng, nghe được điều ẩn sau lời nói, và biết chính xác khi nào cần một lời động viên hay một khoảng lặng. Bạn sinh ra để làm nhịp cầu: giữa những con người, những quan điểm, những thế giới tưởng chừng không thể gặp nhau. Sứ mệnh của bạn thường không đứng dưới ánh đèn sân khấu, nhưng không có bạn, sân khấu ấy sẽ sụp đổ — bạn là người cộng sự, người cố vấn, người giữ nhịp mà mọi đội nhóm thành công đều cần. Hoàn thành sứ mệnh này đòi hỏi bạn trân trọng giá trị của chính mình, ngay cả khi nó thầm lặng.',
    strengths:
      'Khả năng lắng nghe, hợp tác và hòa giải thiên bẩm — bạn làm việc nhóm giỏi hơn hầu hết mọi người và khiến các mối quan hệ quanh mình trở nên êm ái.',
    challenges:
      'Bạn dễ đánh giá thấp bản thân vì đóng góp của mình không ồn ào, và có xu hướng nhún nhường cả khi cần lên tiếng.',
    advice:
      'Sự thầm lặng của bạn là sức mạnh, không phải sự vô hình — hãy học cách ghi nhận và nói lên giá trị của mình. Thế giới cần những nhịp cầu vững chãi hơn là thêm những ngọn tháp cao.',
  },
  3: {
    title: 'Số Sứ Mệnh 3 — Người Kể Chuyện Của Vũ Trụ',
    description:
      'Họ tên của bạn mang tần số của sự biểu đạt — bạn sinh ra để sáng tạo và truyền đạt. Tài năng thiên bẩm của bạn nằm ở ngôn từ, hình ảnh, âm thanh và khiếu hài hước: bạn có khả năng biến những ý tưởng khô khan thành câu chuyện sống động, biến nỗi buồn thành cái đẹp, biến một buổi gặp gỡ nhạt nhòa thành kỷ niệm đáng nhớ. Sứ mệnh của bạn là mang niềm vui và cảm hứng đến cho thế giới thông qua sự sáng tạo của mình — dù đó là nghệ thuật, viết lách, giảng dạy hay đơn giản là cách bạn trò chuyện. Điều bạn cần hoàn thành không phải là trở nên nổi tiếng, mà là không để suối nguồn trong bạn bị chôn vùi bởi sự tự nghi ngờ hay những bận rộn tầm thường.',
    strengths:
      'Óc sáng tạo dồi dào, tài giao tiếp truyền cảm và sức hút tự nhiên — bạn thắp sáng mọi không gian và diễn đạt được những điều người khác chỉ biết cảm nhận.',
    challenges:
      'Năng lượng sáng tạo phân tán khiến bạn dễ dang dở; nỗi sợ bị đánh giá có thể khiến bạn giấu đi chính tài năng mình cần trao tặng.',
    advice:
      'Hãy tạo ra đều đặn, dù nhỏ — một trang viết, một bản phác thảo, một câu chuyện kể mỗi ngày. Món quà chưa được trao đi là món quà chưa tồn tại.',
  },
  4: {
    title: 'Số Sứ Mệnh 4 — Bàn Tay Kiến Thiết',
    description:
      'Tên của bạn mang rung động của người xây dựng. Tài năng thiên bẩm của bạn là biến ý tưởng thành hệ thống, biến hỗn loạn thành quy trình, biến ước mơ mơ hồ thành kế hoạch có ngày tháng cụ thể. Ở đâu cần sự chính xác, bền bỉ và đáng tin cậy, ở đó bạn tỏa sáng — bạn là người mà cả tập thể yên tâm giao phó phần nền móng. Sứ mệnh của bạn là kiến tạo những cấu trúc trường tồn: một sự nghiệp vững chắc, một gia đình ổn định, những công trình và hệ thống còn phục vụ người khác rất lâu sau khi bạn hoàn thành chúng. Thế giới đầy những kẻ mộng mơ; điều thế giới thiếu là những người như bạn — người khiến giấc mơ đứng vững được trên mặt đất.',
    strengths:
      'Kỷ luật, tỉ mỉ và năng lực tổ chức hiếm có — chất lượng công việc của bạn là thứ danh tiếng không cần quảng cáo.',
    challenges:
      'Bạn dễ mắc kẹt trong chi tiết mà quên bức tranh lớn, và sự cầu toàn có thể khiến bạn khắt khe với người làm việc cùng.',
    advice:
      'Thỉnh thoảng hãy lùi lại để nhìn toàn cảnh công trình mình đang xây — và tự hào về nó. Sự hoàn hảo không nằm ở việc không có sai sót, mà ở việc công trình ấy phục vụ được con người.',
  },
  5: {
    title: 'Số Sứ Mệnh 5 — Sứ Giả Của Đổi Thay',
    description:
      'Họ tên của bạn rung động ở tần số của tự do và chuyển động. Tài năng thiên bẩm của bạn là sự linh hoạt: bạn học nhanh, thích nghi giỏi, giao tiếp khéo và có khả năng làm nhiều việc khác nhau mà việc nào cũng có màu sắc riêng. Bạn sinh ra để làm sứ giả của sự thay đổi — người mang những ý tưởng mới, trải nghiệm mới, luồng gió mới đến những nơi đang trì trệ. Sứ mệnh của bạn thường gắn với việc kết nối các thế giới: du lịch, truyền thông, kinh doanh, giảng dạy, bất cứ điều gì cho phép bạn chạm vào nhiều con người và nhiều vùng trời. Điều bạn cần hoàn thành là dùng sự đa dạng ấy có chủ đích — trở thành dòng sông có hướng chảy, thay vì cơn gió thổi khắp nơi mà không đọng lại gì.',
    strengths:
      'Đa tài, ứng biến nhanh và tài giao tiếp cuốn hút — bạn là người hiếm hoi có thể trò chuyện được với mọi kiểu người và tỏa sáng trong sự thay đổi.',
    challenges:
      'Bạn dễ chán, dễ nhảy việc và có nguy cơ trở thành người biết mọi thứ một chút nhưng không tinh sâu điều gì.',
    advice:
      'Hãy chọn một vài lĩnh vực làm trục chính và để những trải nghiệm khác quay quanh nó. Tự do có định hướng chính là dạng tự do quyền năng nhất.',
  },
  6: {
    title: 'Số Sứ Mệnh 6 — Người Gìn Giữ Yêu Thương',
    description:
      'Tên của bạn mang tần số của sự chăm sóc và trách nhiệm. Tài năng thiên bẩm của bạn là khả năng nuôi dưỡng — con người, mối quan hệ, không gian sống, cộng đồng — bất cứ điều gì qua tay bạn đều trở nên ấm áp và lành lặn hơn. Bạn có con mắt thẩm mỹ tinh tế và trái tim biết rung động trước cái đẹp lẫn nỗi đau. Sứ mệnh của bạn là kiến tạo sự hài hòa: trở thành điểm tựa cho gia đình, người chữa lành trong cộng đồng, người mang cái đẹp và sự tử tế vào những nơi mình hiện diện. Những nghề gắn với chăm sóc, giáo dục, nghệ thuật hay phụng sự cộng đồng đều là mảnh đất để tài năng của bạn đơm hoa. Hoàn thành sứ mệnh này nghĩa là yêu thương một cách khôn ngoan — đủ rộng để ôm lấy người khác, đủ sâu để không bỏ quên chính mình.',
    strengths:
      'Trái tim tận tụy, óc thẩm mỹ và khả năng tạo dựng sự hài hòa — mọi người tự nhiên tin tưởng và tìm đến bạn khi cần được nâng đỡ.',
    challenges:
      'Bạn dễ ôm đồm trách nhiệm của người khác và can thiệp quá sâu vào cuộc sống của những người mình yêu thương.',
    advice:
      'Hãy giúp người khác mạnh lên thay vì khiến họ phụ thuộc vào bạn. Và nhớ rằng chăm sóc bản thân cũng là một phần của sứ mệnh, không phải phần thưởng phải giành lấy.',
  },
  7: {
    title: 'Số Sứ Mệnh 7 — Nhà Hiền Triết Thầm Lặng',
    description:
      'Họ tên của bạn rung động ở tần số của trí tuệ và chiều sâu. Tài năng thiên bẩm của bạn là khả năng đào sâu: phân tích, nghiên cứu, chiêm nghiệm — bạn không chấp nhận bề mặt của bất cứ điều gì, và chính sự "khó thỏa mãn" ấy là món quà quý nhất của bạn. Bạn sinh ra để trở thành chuyên gia, người tìm ra sự thật, người kết nối tri thức với minh triết. Sứ mệnh của bạn là khai mở những hiểu biết sâu sắc — trong khoa học, tâm linh, nghệ thuật hay bất kỳ lĩnh vực nào bạn chọn dâng hiến trí tuệ mình — rồi chia sẻ chúng theo cách riêng của bạn. Thế giới ồn ào cần những người như bạn: người dám ngồi yên đủ lâu để nghe được điều sâu thẳm, và đủ can đảm để nói lên nó.',
    strengths:
      'Trí tuệ phân tích sắc bén, trực giác sâu và khả năng tập trung nghiên cứu hiếm có — trong lĩnh vực mình chọn, bạn có thể đạt đến trình độ bậc thầy.',
    challenges:
      'Bạn dễ tách mình khỏi thế giới và giữ những hiểu biết quý giá cho riêng mình vì nghĩ rằng không ai hiểu nổi.',
    advice:
      'Tri thức của bạn là ngọn đèn — đừng đặt nó dưới đáy thùng. Hãy tìm cách chia sẻ điều mình biết, dù chỉ với một vài người thực sự lắng nghe.',
  },
  8: {
    title: 'Số Sứ Mệnh 8 — Nhà Kiến Tạo Thịnh Vượng',
    description:
      'Tên của bạn mang rung động của quyền năng và sự sung túc. Tài năng thiên bẩm của bạn là con mắt nhìn ra giá trị: bạn biết điều gì đáng đầu tư, ai đáng tin cậy, hệ thống nào sẽ sinh lời — và bạn có bản lĩnh để đưa ra những quyết định lớn mà người khác né tránh. Bạn sinh ra để quản trị và kiến tạo thịnh vượng: dẫn dắt tổ chức, xây dựng sự nghiệp có tầm vóc, biến nguồn lực thành thành quả cụ thể. Sứ mệnh của bạn không dừng ở việc làm giàu cho bản thân — bạn được trao khả năng này để tạo ra công ăn việc làm, cơ hội và sự sung túc lan tỏa cho nhiều người. Khi của cải qua tay bạn trở thành phương tiện nâng đỡ người khác, bạn đang sống đúng tần số cao nhất của con số này.',
    strengths:
      'Bản lĩnh lãnh đạo, đầu óc kinh doanh và khả năng ra quyết định dưới áp lực — bạn được sinh ra cho những vị trí điều hành và những ván cờ lớn.',
    challenges:
      'Bạn dễ bị cuốn vào vòng xoáy thành tích và quyền lực, đánh đổi sức khỏe và các mối quan hệ cho những cột mốc không bao giờ thấy đủ.',
    advice:
      'Hãy xây đế chế của bạn, nhưng đừng để nó xây tường quanh trái tim bạn. Thước đo cuối cùng của sự thịnh vượng là những gì bạn cho đi được.',
  },
  9: {
    title: 'Số Sứ Mệnh 9 — Trái Tim Dâng Hiến',
    description:
      'Họ tên của bạn rung động ở tần số cao nhất của các số đơn — tần số của lòng nhân ái và sự cống hiến. Tài năng thiên bẩm của bạn là khả năng chạm đến con người ở tầng sâu nhất: bạn hiểu nỗi đau, tha thứ được những điều khó tha thứ, và có sức truyền cảm hứng khiến người khác tin vào điều tốt đẹp. Bạn sinh ra để phụng sự một điều lớn hơn bản thân mình — qua nghệ thuật, giáo dục, chữa lành, hoạt động cộng đồng hay bất kỳ con đường nào cho phép trái tim bạn lan tỏa. Sứ mệnh của bạn là để lại thế giới này tử tế hơn một chút so với khi bạn đến. Điều đó không đòi hỏi những nghĩa cử vĩ đại — nó bắt đầu từ cách bạn đối xử với từng con người đi ngang đời mình.',
    strengths:
      'Lòng trắc ẩn bao la, tầm nhìn nhân văn và sức lay động lòng người — bạn có khả năng khiến người lạ tin tưởng và người tuyệt vọng hy vọng.',
    challenges:
      'Bạn dễ cho đi đến cạn kiệt, và nỗi thất vọng về nhân tình thế thái có thể khiến trái tim rộng lớn của bạn khép lại.',
    advice:
      'Cống hiến bền vững cần một trái tim được chăm sóc — hãy cho phép mình nhận lại. Đừng đợi cơ hội vĩ đại; sự tử tế mỗi ngày chính là sứ mệnh đang được hoàn thành.',
  },
  11: {
    title: 'Số Sứ Mệnh 11 — Người Truyền Ánh Sáng',
    description:
      'Họ tên của bạn mang rung động bậc thầy — tài năng thiên bẩm của bạn là trực giác và khả năng khai sáng người khác. Bạn có chiếc ăng-ten tinh nhạy bắt được những điều vô hình: cảm xúc chưa nói, xu hướng chưa thành hình, những sự thật tinh thần mà đám đông chưa chạm tới. Bạn sinh ra để truyền cảm hứng và nâng cao nhận thức — qua giảng dạy, nghệ thuật, chữa lành, tư vấn hay bất kỳ con đường nào cho phép ánh sáng trong bạn chạm đến người khác. Nhưng sứ mệnh bậc thầy luôn đi kèm áp lực bậc thầy: độ nhạy cảm cao khiến bạn dễ dao động, tự nghi ngờ, và cảm thấy khoảng cách giữa điều mình cảm nhận với điều mình làm được. Hành trình của bạn là học cách neo nguồn năng lượng tinh tế ấy vào hành động cụ thể — để trực giác không chỉ là món quà bạn có, mà là món quà bạn trao đi.',
    strengths:
      'Trực giác vượt trội, sức hút tinh thần và khả năng thức tỉnh điều tốt đẹp nhất trong người khác — lời nói của bạn thường chạm đến nơi lý lẽ không tới được.',
    challenges:
      'Rung động cao khiến bạn dễ căng thẳng, thiếu thực tế và dằn vặt giữa lý tưởng với đời thường. Bạn có thể trốn trong tần số số 2 vì sợ tỏa sáng.',
    advice:
      'Hãy biến trực giác thành hành động nhỏ mỗi ngày — viết ra, nói ra, làm ra. Ánh sáng chỉ trở thành ngọn hải đăng khi nó dám đứng ở nơi được nhìn thấy.',
  },
  22: {
    title: 'Số Sứ Mệnh 22 — Người Hiện Thực Hóa Giấc Mơ Lớn',
    description:
      'Họ tên của bạn mang rung động mạnh mẽ nhất trong các con số — tài năng thiên bẩm của bạn là biến những tầm nhìn vĩ đại thành hiện thực hữu hình. Bạn có đồng thời hai món quà hiếm khi đi cùng nhau: trí tưởng tượng của người mơ mộng và đôi tay của người xây dựng. Bạn sinh ra để tạo nên những công trình có tầm vóc — doanh nghiệp, tổ chức, hệ thống, phong trào — những thứ phục vụ được nhiều người và tồn tại lâu hơn một đời người. Nhưng con số bậc thầy này đòi hỏi bạn gánh được sức nặng của chính tiềm năng mình: cảm giác "mình sinh ra cho điều gì đó lớn lao" vừa là động lực vừa là áp lực đè nặng, và nhiều người mang số 22 loay hoay cả nửa đời trước khi dám nhận sứ mệnh. Hãy bắt đầu từ những công trình vừa tầm tay — mỗi thành quả nhỏ được hoàn thành trọn vẹn là một bậc thang đưa bạn đến tầm vóc thật của mình.',
    strengths:
      'Tầm nhìn chiến lược kết hợp năng lực thực thi phi thường — bạn có thể quy tụ con người, nguồn lực và niềm tin quanh một mục tiêu tưởng như bất khả thi.',
    challenges:
      'Áp lực từ tiềm năng khổng lồ dễ khiến bạn tê liệt vì cầu toàn, kiệt sức vì ôm việc, hoặc thu nhỏ mình trong những mục tiêu an toàn của số 4.',
    advice:
      'Giấc mơ lớn được xây bằng những viên gạch nhỏ đặt xuống mỗi ngày — hãy cứ đặt viên gạch hôm nay. Và học cách ủy thác: kiến trúc sư bậc thầy không tự tay xây một mình.',
  },
  33: {
    title: 'Số Sứ Mệnh 33 — Người Chữa Lành Bằng Yêu Thương',
    description:
      'Họ tên của bạn mang rung động bậc thầy hiếm gặp nhất — tài năng thiên bẩm của bạn là yêu thương ở mức độ có thể chữa lành và chuyển hóa con người. Nơi bạn hiện diện, người ta thấy an toàn hơn để yếu đuối, để thật, để bắt đầu lại; đó là một năng lực không sách vở nào dạy được. Bạn sinh ra để trở thành người thầy theo nghĩa rộng nhất: dẫn dắt, nuôi dưỡng và nâng đỡ tâm hồn người khác — qua giáo dục, chữa lành, nghệ thuật hay đơn giản là cách bạn sống giữa cộng đồng của mình. Nhưng tần số cực cao của con số này cũng là thử thách khắc nghiệt nhất: bạn dễ gánh nỗi đau không thuộc về mình, đặt nhu cầu của cả thế giới lên trước hơi thở của chính mình. Sứ mệnh của bạn chỉ trọn vẹn khi bạn học được rằng người chữa lành vĩ đại nhất là người biết tự chữa lành trước tiên.',
    strengths:
      'Khả năng chữa lành và dạy dỗ bằng chính sự hiện diện, trái tim vô điều kiện và sức ảnh hưởng tinh thần sâu rộng — bạn thay đổi cuộc đời người khác mà đôi khi không hề hay biết.',
    challenges:
      'Áp lực rung động cao dễ đẩy bạn vào hy sinh cực đoan, kiệt quệ cảm xúc và cảm giác tội lỗi mỗi khi ưu tiên bản thân.',
    advice:
      'Hãy coi việc chăm sóc chính mình là một phần thiêng liêng của sứ mệnh, không phải sự phản bội nó. Tình yêu thương của bạn là ngọn lửa quý — hãy giữ cho nó cháy bền, đừng để nó thiêu rụi chính người mang lửa.',
  },
};
