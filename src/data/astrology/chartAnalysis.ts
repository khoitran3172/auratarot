// Luận giải tổng quan bản đồ sao: cân bằng nguyên tố, thể thức,
// hành tinh nghịch hành, Chủ Tinh Bản Đồ và hiện tượng Stellium.

import { PlanetId, SignId } from './types';

export type ElementName = 'Lửa' | 'Đất' | 'Khí' | 'Nước';
export type ModalityName = 'Tiên phong' | 'Kiên định' | 'Linh hoạt';

// Luận giải cân bằng nguyên tố: khi nguyên tố CHIẾM ƯU THẾ và khi THIẾU VẮNG (0 hành tinh)
export const elementReadings: Record<ElementName, { dominant: string; lacking: string }> = {
  'Lửa': {
    dominant:
      'Ngọn lửa nguyên thủy cháy rực trong tinh bàn của bạn, ban cho bạn nhiệt huyết, lòng can đảm và khát khao sống mãnh liệt. Bạn là người hành động theo trực giác bùng cháy, dám mơ lớn và truyền cảm hứng cho người khác chỉ bằng sự hiện diện của mình. Tuy nhiên, ngọn lửa quá lớn đôi khi thiêu đốt cả sự kiên nhẫn — bạn dễ bốc đồng, nóng vội và kiệt sức vì chính nhiệt tình của mình. Hãy học cách giữ lửa cháy đều thay vì bùng lên rồi lụi tàn.',
    lacking:
      'Nguyên tố Lửa vắng bóng trong bản đồ khai sinh của bạn, như một lò sưởi chưa được nhóm. Bạn có thể thấy khó khăn trong việc khơi dậy động lực, tự tin khẳng định mình hay tin tưởng vào trực giác bốc cháy của khoảnh khắc. Đây không phải khiếm khuyết mà là lời mời gọi: vũ trụ muốn bạn chủ động nuôi dưỡng đam mê, tìm những điều khiến trái tim bạn rực sáng. Khi bạn học được cách tự thắp lửa cho mình, ngọn lửa ấy sẽ bền hơn bất kỳ ai.',
  },
  'Đất': {
    dominant:
      'Năng lượng Đất đậm đặc trong tinh bàn khiến bạn vững chãi như núi, thực tế và đáng tin cậy hiếm có. Bạn hiểu giá trị của sự kiên trì, của những thành quả được xây từng viên gạch một, và giác quan của bạn gắn bó sâu sắc với thế giới vật chất hữu hình. Nhưng rễ cắm quá sâu cũng có thể giữ chân bạn — bạn dễ bám víu vào sự an toàn, ngại thay đổi và quên mất rằng tâm hồn cũng cần bay. Hãy nhớ rằng đất màu mỡ nhất là đất biết đón nhận hạt giống mới.',
    lacking:
      'Nguyên tố Đất thưa vắng trong bản đồ của bạn, như thể đôi chân bạn chưa từng thật sự chạm xuống mặt đất. Bạn có thể giàu ý tưởng, cảm xúc hay nhiệt huyết, nhưng việc biến chúng thành hiện thực cụ thể — tiền bạc, thói quen, kỷ luật — lại là thử thách lớn. Vũ trụ mời gọi bạn học nghệ thuật của sự hiện diện: chăm sóc cơ thể, xây dựng nề nếp, hoàn thành từng việc nhỏ. Khi tâm hồn bay bổng của bạn có một mái nhà vững chắc, phép màu mới thật sự bén rễ.',
  },
  'Khí': {
    dominant:
      'Nguyên tố Khí thổi mạnh qua tinh bàn của bạn, ban cho bạn trí tuệ linh hoạt, sự tò mò vô tận và tài năng kết nối con người với ý tưởng. Tâm trí bạn như cánh chim không ngừng bay, nhìn mọi vấn đề từ nhiều góc độ và diễn đạt chúng bằng ngôn từ sắc sảo. Nhưng gió thổi quá nhiều hướng dễ khiến bạn sống trong đầu óc nhiều hơn trong trái tim, phân tích thay vì cảm nhận, và tản mát năng lượng vào quá nhiều mối bận tâm. Hãy thỉnh thoảng để gió lặng, lắng nghe điều cơ thể và cảm xúc muốn nói.',
    lacking:
      'Nguyên tố Khí vắng mặt trong bản đồ khai sinh, khiến bạn cảm nhận thế giới trực tiếp bằng bản năng, cảm xúc hay hành động hơn là qua lăng kính lý trí. Bạn có thể thấy khó diễn đạt thành lời những điều mình biết rõ trong lòng, hoặc khó lùi lại để nhìn vấn đề một cách khách quan. Đây là lời nhắc nhở dịu dàng: hãy luyện tập viết, trò chuyện, đặt câu hỏi — cho tâm trí một khoảng trời để thở. Khi bạn học được ngôn ngữ của gió, thế giới nội tâm phong phú của bạn sẽ tìm được tiếng nói.',
  },
  'Nước': {
    dominant:
      'Dòng nước sâu thẳm chảy xuyên suốt tinh bàn của bạn, ban cho bạn trực giác bén nhạy, lòng trắc ẩn vô bờ và khả năng cảm nhận những điều người khác không nói ra. Bạn sống bằng trái tim, thấu hiểu nỗi đau và niềm vui của thế gian như thể chúng là của chính mình. Nhưng nước không có bờ dễ tràn — bạn có thể bị nhấn chìm bởi cảm xúc của mình lẫn của người khác, mất ranh giới giữa ta và họ. Hãy học cách làm dòng sông có đôi bờ: cảm nhận sâu sắc nhưng vẫn giữ được chính mình.',
    lacking:
      'Nguyên tố Nước khan hiếm trong bản đồ của bạn, như một vùng đất chờ mưa. Bạn có thể thấy khó chạm vào cảm xúc của chính mình, khó bộc lộ sự tổn thương hay tin vào những tri giác không thể chứng minh bằng lý lẽ. Điều này không có nghĩa bạn vô cảm — chỉ là dòng nước trong bạn chảy ngầm, cần được mời gọi lên bề mặt. Hãy cho phép mình khóc, mơ mộng, lắng nghe trực giác; khi bạn mở cửa cho nước về, tâm hồn bạn sẽ trở nên màu mỡ lạ thường.',
  },
};

export const modalityReadings: Record<ModalityName, { dominant: string; lacking: string }> = {
  'Tiên phong': {
    dominant:
      'Năng lượng Tiên phong chiếm ưu thế trong tinh bàn, biến bạn thành người khởi xướng bẩm sinh — nơi bạn đến, những điều mới mẻ bắt đầu. Bạn không chờ thời cơ mà tạo ra thời cơ, dẫn dắt người khác bằng tầm nhìn và sự quyết đoán của mình. Thách thức của bạn nằm ở chặng giữa: bắt đầu thì rực rỡ nhưng duy trì lại dễ chán, và nhiều hạt giống bạn gieo có thể không kịp nảy mầm. Hãy chọn lọc những khởi đầu xứng đáng và ở lại đủ lâu để thấy chúng đơm hoa.',
    lacking:
      'Năng lượng Tiên phong thưa vắng trong bản đồ của bạn, khiến việc tự mình mở ra chương mới đôi khi trở nên nặng nề. Bạn có thể chờ đợi hoàn cảnh hoặc người khác châm ngòi thay vì chủ động bước bước đầu tiên. Nhưng vũ trụ không đòi hỏi bạn phải là người tiên phong ồn ào — chỉ cần bạn tập can đảm nói "tôi sẽ bắt đầu" với những điều nhỏ bé mỗi ngày. Mỗi khởi đầu khiêm tốn ấy chính là nghi thức đánh thức ngọn lửa dẫn đường trong bạn.',
  },
  'Kiên định': {
    dominant:
      'Năng lượng Kiên định thấm đẫm tinh bàn của bạn, ban cho bạn sức bền của đá và lòng trung thành hiếm thấy. Một khi đã chọn con đường, bạn đi đến tận cùng; một khi đã trao trái tim, bạn không dễ rút lại — đó là sức mạnh xây nên những điều trường tồn. Nhưng chính sự vững vàng ấy có thể hóa thành cứng nhắc: bạn khó buông bỏ những gì đã hết duyên, khó thừa nhận rằng có lúc thay đổi mới là trung thành với chính mình. Hãy nhớ rằng cây bền vững nhất là cây biết uốn mình theo gió mà rễ vẫn sâu.',
    lacking:
      'Năng lượng Kiên định khan hiếm trong bản đồ khai sinh, khiến bạn dễ bắt đầu, dễ thích nghi nhưng khó bám trụ khi hành trình trở nên đơn điệu. Cam kết dài hạn — với một mục tiêu, một con người, một thói quen — có thể là bài học lớn của đời bạn. Vũ trụ mời gọi bạn khám phá vẻ đẹp của sự lặp lại: chính những việc làm đều đặn mỗi ngày mới kết tinh thành điều vĩ đại. Hãy chọn một vài điều thật sự quý giá và luyện tập ở lại với chúng.',
  },
  'Linh hoạt': {
    dominant:
      'Năng lượng Linh hoạt tràn ngập tinh bàn, biến bạn thành bậc thầy của sự thích nghi — như nước đổi hình theo bình chứa mà bản chất không hề mất đi. Bạn nhạy bén với thay đổi, học nhanh, xoay chuyển khéo léo giữa các vai trò và luôn tìm được lối ra nơi người khác thấy ngõ cụt. Nhưng khả năng uốn mình vô hạn cũng mang theo câu hỏi: giữa muôn hình vạn trạng ấy, đâu là hình dạng thật của bạn? Hãy xây cho mình một vài điểm neo — giá trị cốt lõi không đổi — để sự linh hoạt trở thành đôi cánh chứ không phải cơn gió cuốn bạn đi.',
    lacking:
      'Năng lượng Linh hoạt vắng bóng trong bản đồ của bạn, khiến những khúc quanh bất ngờ của số phận dễ làm bạn chao đảo hơn người khác. Bạn mạnh mẽ khi mọi thứ theo kế hoạch, nhưng khi vũ trụ đổi hướng gió, việc buông kịch bản cũ có thể rất khó khăn. Đây là lời mời học nghệ thuật của sự mềm mại: thử những điều ngoài thói quen, cho phép kế hoạch dang dở, tin rằng đường vòng đôi khi là đường thiêng. Khi bạn bớt nắm chặt, đôi tay bạn mới rảnh để đón nhận món quà mới.',
  },
};

// Luận giải hành tinh NGHỊCH HÀNH (retrograde) trong bản đồ khai sinh —
// năng lượng hướng nội, bài học được nội tâm hóa.
export const retrogradeReadings: Record<Exclude<PlanetId, 'sun' | 'moon'>, string> = {
  mercury:
    'Sao Thủy nghịch hành lúc bạn chào đời khiến tâm trí bạn vận hành theo nhịp riêng — bạn suy ngẫm sâu trước khi cất lời, và những ý nghĩ quý giá nhất thường đến trong tĩnh lặng. Đừng so mình với những người nói nhanh nghĩ nhanh; trí tuệ của bạn là loại rượu cần thời gian ủ. Viết lách, nhật ký và những cuộc đối thoại nội tâm là nơi tiếng nói thật của bạn tỏa sáng.',
  venus:
    'Sao Kim nghịch hành khi bạn sinh ra đặt cho bạn bài học định nghĩa lại tình yêu và giá trị bản thân từ bên trong. Bạn có thể yêu sâu sắc nhưng kín đáo, và thường tự hỏi liệu mình có xứng đáng được yêu thương — câu trả lời, vũ trụ muốn bạn tự tìm thấy, là có. Khi bạn ngừng đo giá trị mình bằng ánh mắt người khác, trái tim bạn sẽ nở hoa theo cách không ai bắt chước được.',
  mars:
    'Sao Hỏa nghịch hành lúc khai sinh khiến ngọn lửa hành động của bạn cháy vào trong thay vì bùng ra ngoài. Bạn không thuộc kiểu người lao thẳng vào trận chiến; sức mạnh của bạn là loại âm ỉ, chiến lược, biết chờ đúng thời điểm. Bài học của bạn là cho phép cơn giận và khát vọng được lên tiếng lành mạnh — bởi ngọn lửa bị nén lâu ngày sẽ tự thiêu đốt chủ nhân của nó.',
  jupiter:
    'Sao Mộc nghịch hành trong bản đồ khai sinh cho thấy may mắn và sự trù phú của bạn không đến từ bên ngoài mà được khai quật từ bên trong. Bạn không dễ tin vào những chân lý vay mượn; niềm tin của bạn phải được tự mình trải nghiệm và kiểm chứng. Đó là con đường dài hơn, nhưng minh triết bạn gặt hái sẽ thuộc về bạn trọn vẹn, không ai lấy đi được.',
  saturn:
    'Sao Thổ nghịch hành lúc bạn chào đời khiến vị thầy nghiêm khắc này giảng bài từ bên trong: bạn là người tự đặt ra kỷ luật và cũng tự phán xét mình khắt khe nhất. Có thể bạn lớn lên thiếu một hình mẫu uy quyền vững chãi, nên phải tự học cách làm trụ cột cho chính mình. Hãy dịu dàng hơn với bản thân — thẩm quyền thật sự của bạn được xây từ lòng tự trọng, không phải từ sự tự trừng phạt.',
  uranus:
    'Sao Thiên Vương nghịch hành khi bạn sinh ra gieo vào bạn một cuộc cách mạng thầm lặng. Bề ngoài bạn có thể trông tuân thủ, nhưng bên trong là một tinh thần độc lập đang âm thầm tháo gỡ từng khuôn mẫu cũ. Sự thức tỉnh của bạn diễn ra theo từng đợt sóng ngầm — và khi nó trồi lên, sự thay đổi bạn mang đến sẽ sâu sắc hơn mọi cuộc nổi loạn ồn ào.',
  neptune:
    'Sao Hải Vương nghịch hành trong tinh bàn khiến đời sống tâm linh và trí tưởng tượng của bạn là một thánh đường riêng tư, ít khi phô bày. Bạn nhìn xuyên qua ảo ảnh mà người khác say mê, đôi khi vì thế mà thấy mình lạc lõng giữa những giấc mơ tập thể. Hãy tin vào tầm nhìn nội tại ấy — bạn sinh ra để mơ những giấc mơ trung thực hơn, không phải để tỉnh giấc một mình.',
  pluto:
    'Sao Diêm Vương nghịch hành lúc khai sinh đưa hành trình chuyển hóa của bạn vào những tầng sâu kín nhất của tâm hồn. Quyền năng của bạn không thể hiện qua việc kiểm soát thế giới bên ngoài, mà qua những lần bạn lặng lẽ chết đi và tái sinh từ bên trong. Mỗi bóng tối bạn dám đối diện trong chính mình sẽ trở thành ngọn đuốc soi đường cho người khác.',
};

// Chủ quản hiện đại của 12 cung (để tìm Chủ Tinh Bản Đồ = hành tinh chủ quản Cung Mọc)
export const signRuler: Record<SignId, PlanetId> = {
  aries: 'mars',
  taurus: 'venus',
  gemini: 'mercury',
  cancer: 'moon',
  leo: 'sun',
  virgo: 'mercury',
  libra: 'venus',
  scorpio: 'pluto',
  sagittarius: 'jupiter',
  capricorn: 'saturn',
  aquarius: 'uranus',
  pisces: 'neptune',
};

// Ý nghĩa khi hành tinh X là Chủ Tinh Bản Đồ (chart ruler) — sứ giả dẫn đường cả tinh bàn
export const chartRulerReadings: Record<PlanetId, string> = {
  sun:
    'Mặt Trời là Chủ Tinh Bản Đồ của bạn — cả tinh bàn xoay quanh hành trình tỏa sáng và trở thành chính mình một cách trọn vẹn. Cuộc đời bạn nhuốm màu của sự tự khẳng định, sáng tạo và phẩm giá; bạn sinh ra không phải để ẩn mình. Hãy quan sát Mặt Trời nằm ở cung và nhà nào trong bản đồ — đó chính là sân khấu mà số phận mời bạn bước lên.',
  moon:
    'Mặt Trăng là Chủ Tinh Bản Đồ của bạn — đời bạn chảy theo nhịp thủy triều của cảm xúc, ký ức và nhu cầu được nuôi dưỡng. Trực giác là la bàn đáng tin nhất của bạn, và sự an toàn nội tâm là nền móng cho mọi thành tựu bên ngoài. Hãy theo dõi vị trí cung và nhà của Mặt Trăng — nơi ấy hé lộ điều trái tim bạn thật sự cần để cảm thấy như được về nhà.',
  mercury:
    'Sao Thủy là Chủ Tinh Bản Đồ của bạn — bạn là sứ giả, người dệt chữ và bắc cầu giữa các thế giới. Cả cuộc đời bạn nhuốm màu của sự tò mò, học hỏi và trao đổi; tâm trí linh hoạt chính là chiếc chìa khóa vạn năng của bạn. Hãy chú ý cung và nhà nơi Sao Thủy trú ngụ — đó là lĩnh vực mà tiếng nói và trí tuệ của bạn được vũ trụ giao sứ mệnh.',
  venus:
    'Sao Kim là Chủ Tinh Bản Đồ của bạn — cuộc đời bạn được dẫn lối bởi cái đẹp, tình yêu và nghệ thuật kết nối. Bạn có thiên khiếu làm dịu, hòa giải và mang vẻ duyên dáng vào bất cứ nơi nào mình hiện diện. Hãy quan sát vị trí cung và nhà của Sao Kim trong bản đồ — nơi ấy chỉ ra con đường mà trái tim và thẩm mỹ của bạn sẽ nở hoa rực rỡ nhất.',
  mars:
    'Sao Hỏa là Chủ Tinh Bản Đồ của bạn — cả tinh bàn được thắp sáng bởi ý chí, lòng can đảm và khát khao chinh phục. Bạn sinh ra để hành động, để mở đường, và năng lượng của bạn cần một sứ mệnh xứng đáng để khỏi quay vào trong thành sự bồn chồn. Hãy theo dõi cung và nhà nơi Sao Hỏa đóng quân — đó là chiến trường thiêng nơi ngọn lửa của bạn được tôi luyện thành sức mạnh.',
  jupiter:
    'Sao Mộc là Chủ Tinh Bản Đồ của bạn — đời bạn được dẫn dắt bởi niềm tin, khát vọng mở rộng và cuộc tìm kiếm ý nghĩa lớn lao. Bạn mang trong mình tinh thần của kẻ hành hương: luôn hướng về chân trời xa hơn, chân lý sâu hơn. Hãy chú ý vị trí cung và nhà của Sao Mộc — nơi ấy là cánh cổng mà may mắn và minh triết của bạn tuôn chảy dồi dào nhất.',
  saturn:
    'Sao Thổ là Chủ Tinh Bản Đồ của bạn — cuộc đời bạn là công trình được xây bằng kỷ luật, kiên nhẫn và tinh thần trách nhiệm. Những gì bạn đạt được có thể đến muộn hơn người khác, nhưng sẽ vững bền như đá tảng; thời gian luôn đứng về phía bạn. Hãy quan sát cung và nhà nơi Sao Thổ ngự trị — đó là ngọn núi mà số phận giao bạn leo, và cũng là nơi bạn trở thành bậc thầy.',
  uranus:
    'Sao Thiên Vương là Chủ Tinh Bản Đồ của bạn — bạn sinh ra để khác biệt, để đánh thức và để phá vỡ những khuôn mẫu đã cũ mòn. Cuộc đời bạn nhuốm màu của những bước ngoặt bất ngờ và tầm nhìn đi trước thời đại; sự tự do là hơi thở của bạn. Hãy theo dõi vị trí cung và nhà của Sao Thiên Vương — nơi ấy chỉ ra lĩnh vực mà tia chớp thiên tài của bạn sẽ giáng xuống.',
  neptune:
    'Sao Hải Vương là Chủ Tinh Bản Đồ của bạn — đời bạn được dệt từ giấc mơ, trực giác và lòng trắc ẩn không biên giới. Bạn là người mang nhạy cảm của nghệ sĩ và tâm hồn của nhà huyền môn, dễ hòa tan vào những điều lớn hơn bản thân mình. Hãy chú ý cung và nhà nơi Sao Hải Vương cư ngụ — đó là đại dương mà bạn được mời lặn xuống, miễn là đừng quên đường trở lại bờ.',
  pluto:
    'Sao Diêm Vương là Chủ Tinh Bản Đồ của bạn — cuộc đời bạn là chuỗi những lần lột xác, chết đi và tái sinh mạnh mẽ hơn. Bạn mang chiều sâu và cường độ mà người khác vừa e dè vừa bị cuốn hút; quyền năng thật của bạn nằm ở khả năng chuyển hóa bóng tối thành ánh sáng. Hãy quan sát vị trí cung và nhà của Sao Diêm Vương — nơi ấy là lò luyện kim thiêng liêng của linh hồn bạn.',
};

// Luận giải Stellium (3+ hành tinh tụ hội cùng một cung) — template chung,
// sẽ được ghép với tên cung cụ thể lúc runtime.
export const stelliumTemplate: string =
  'Khi ba hành tinh trở lên tụ hội trong cùng một cung, vũ trụ đã đặt vào đó một vùng năng lượng đậm đặc khác thường — như nhiều ngọn nến cùng thắp trong một căn phòng của tâm hồn bạn. Đây vừa là siêu năng lực vừa là điểm dễ mất cân bằng: những phẩm chất của cung ấy trở thành màu sắc chủ đạo nhuộm lên cả con người bạn, đôi khi mạnh đến mức lấn át những tiếng nói khác trong tinh bàn. Bạn được mời gọi làm chủ nguồn năng lượng tập trung này thay vì để nó cuốn mình đi — bởi khi được điều phối khéo léo, chính nơi tụ tinh ấy sẽ là món quà lớn nhất bạn mang đến cho thế gian. Hãy ý thức nuôi dưỡng những vùng trời còn lại của bản đồ, để ánh sáng rực rỡ này không che khuất sự trọn vẹn của bạn.';
