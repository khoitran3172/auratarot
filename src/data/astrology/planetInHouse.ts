// Luận giải "hành tinh tại nhà" — 10 hành tinh × 12 nhà = 120 mục.
// Giọng văn thần bí, ấm áp, sâu sắc; xưng "bạn".

import { PlanetId, HouseNumber, PlanetInHouseReading } from './types';

export const planetInHouse: Record<PlanetId, Record<HouseNumber, PlanetInHouseReading>> = {
  sun: {
    1: {
      title: 'Mặt Trời tại Nhà 1',
      description:
        'Mặt Trời tỏa sáng ngay tại cánh cửa đầu tiên của bản đồ sao, khiến bạn bước vào thế gian với một hào quang khó lẫn. Bản ngã, sức sống và ý chí của bạn hiện rõ trên gương mặt, trong dáng đi, trong cách bạn cất tiếng nói. Người khác cảm nhận được sự hiện diện của bạn ngay cả khi bạn im lặng, bởi ánh sáng bên trong luôn tìm đường tràn ra ngoài. Hành trình của bạn là học cách trở thành chính mình một cách trọn vẹn và không xin lỗi vì điều đó.',
      advice:
        'Hãy tự tin dẫn dắt và thể hiện bản thân, nhưng nhớ chừa không gian để người khác cũng được tỏa sáng. Ánh sáng đẹp nhất là ánh sáng biết soi đường cho người bên cạnh.',
    },
    2: {
      title: 'Mặt Trời tại Nhà 2',
      description:
        'Ánh sáng bản ngã của bạn đậu xuống mảnh đất của tài sản và giá trị, nơi lòng tự trọng gắn liền với những gì bạn xây dựng được bằng đôi tay mình. Bạn tìm thấy ý nghĩa cuộc sống qua việc tạo dựng sự vững vàng vật chất và khẳng định giá trị riêng. Tiền bạc với bạn không chỉ là con số, mà là thước đo của sự tự chủ và phẩm giá. Khi bạn sống đúng với những giá trị cốt lõi của mình, sự sung túc tự nhiên tìm đến.',
      advice:
        'Hãy xây dựng tài chính bằng chính tài năng của bạn, nhưng đừng để con số trong tài khoản định nghĩa con người bạn. Giá trị thật của bạn nằm ở bên trong, không nằm trong ví.',
    },
    3: {
      title: 'Mặt Trời tại Nhà 3',
      description:
        'Mặt Trời thắp sáng căn nhà của ngôn từ và tri thức, biến bạn thành người mang ánh sáng qua lời nói. Tâm trí bạn linh hoạt, tò mò không ngừng, và bạn cảm thấy sống động nhất khi được học hỏi, viết lách, trò chuyện và kết nối. Anh chị em, hàng xóm và những chuyến đi gần đều đóng vai trò quan trọng trong câu chuyện đời bạn. Tiếng nói của bạn có sức nặng — người khác lắng nghe khi bạn cất lời.',
      advice:
        'Hãy dùng khả năng giao tiếp để truyền cảm hứng thay vì chỉ trao đổi thông tin. Học một điều mới mỗi ngày chính là cách bạn nuôi dưỡng ngọn lửa bên trong.',
    },
    4: {
      title: 'Mặt Trời tại Nhà 4',
      description:
        'Ánh sáng cốt lõi của bạn ẩn sâu nơi gốc rễ — gia đình, tổ ấm và thế giới nội tâm. Bạn có thể không phô trương trước đám đông, nhưng trong mái nhà của mình, bạn là ngọn lửa giữ ấm cho tất cả. Quá khứ, dòng họ và nơi chốn bạn thuộc về mang ý nghĩa thiêng liêng với bạn. Hành trình của bạn là tìm về cội nguồn để hiểu mình thật sự là ai, rồi từ nền móng vững chắc đó mà vươn lên.',
      advice:
        'Hãy đầu tư cho tổ ấm và chữa lành những vết thương gia đình cũ — đó là nền móng cho mọi thành tựu khác. Đừng quên rằng "nhà" trước hết là nơi trú ngụ bên trong chính bạn.',
    },
    5: {
      title: 'Mặt Trời tại Nhà 5',
      description:
        'Mặt Trời trở về chính ngôi nhà của nó — nhà của sáng tạo, niềm vui và tình yêu — nên ánh sáng nơi đây rực rỡ gấp bội. Bạn sinh ra để sáng tạo, để yêu hết mình, để chơi đùa với cuộc đời như một nghệ sĩ chơi với màu sắc. Trái tim bạn trẻ trung dù năm tháng có trôi, và con cái, nghệ thuật hay những cuộc tình lãng mạn đều là nơi bạn tìm thấy chính mình. Khi bạn dám thể hiện bản thân một cách hồn nhiên, vũ trụ vỗ tay tán thưởng.',
      advice:
        'Hãy dành chỗ cho ít nhất một hoạt động sáng tạo trong đời sống thường nhật. Niềm vui không phải phần thưởng sau công việc — với bạn, nó chính là nguồn năng lượng sống.',
    },
    6: {
      title: 'Mặt Trời tại Nhà 6',
      description:
        'Ánh sáng bản ngã của bạn tỏa rạng qua sự tận tụy — trong công việc hằng ngày, trong việc chăm sóc sức khỏe và phụng sự người khác. Bạn tìm thấy ý nghĩa không ở những điều hào nhoáng, mà trong từng việc nhỏ được làm chỉn chu, trọn vẹn. Cơ thể bạn là ngôi đền cần được lắng nghe, và nhịp sống đều đặn chính là nghi lễ thiêng liêng của bạn. Khi được hữu ích, bạn cảm thấy mình thật sự sống.',
      advice:
        'Hãy xây dựng thói quen lành mạnh và tìm công việc cho bạn cảm giác phụng sự có ý nghĩa. Nhưng nhớ rằng giá trị của bạn không chỉ đo bằng năng suất — nghỉ ngơi cũng là một phần của sứ mệnh.',
    },
    7: {
      title: 'Mặt Trời tại Nhà 7',
      description:
        'Mặt Trời của bạn tỏa sáng trong tấm gương của những mối quan hệ — hôn nhân, đối tác, những cái bắt tay định mệnh. Bạn khám phá bản thân rõ nhất qua người đối diện, và cuộc đời bạn thường xoay quanh nghệ thuật kết nối một-một. Người bạn đời hay cộng sự không chỉ là người đồng hành, mà là tấm gương phản chiếu giúp bạn trưởng thành. Bạn có tài hòa giải và mang ánh sáng vào những mối liên kết.',
      advice:
        'Hãy trân trọng các mối quan hệ nhưng đừng đánh mất mình trong người khác. Trước khi tìm "một nửa", hãy chắc rằng bạn đã là một phiên bản trọn vẹn của chính mình.',
    },
    8: {
      title: 'Mặt Trời tại Nhà 8',
      description:
        'Ánh sáng của bạn chiếu rọi vào những vùng sâu thẳm nhất — nơi của chuyển hóa, bí ẩn và những điều người đời né tránh. Bạn không sợ bóng tối; ngược lại, bạn được sinh ra để đi xuyên qua nó và trở về mạnh mẽ hơn. Cuộc đời bạn có những lần "chết đi sống lại" về mặt tinh thần, mỗi lần lột xác là một lần bản ngã được tinh luyện. Tài sản chung, sự thân mật sâu sắc và những sự thật ẩn giấu là lãnh địa của bạn.',
      advice:
        'Hãy đón nhận những giai đoạn chuyển hóa thay vì chống cự — chúng là cách vũ trụ tái sinh bạn. Học cách tin tưởng và buông bỏ là chìa khóa mở ra sức mạnh thật sự của bạn.',
    },
    9: {
      title: 'Mặt Trời tại Nhà 9',
      description:
        'Mặt Trời của bạn rong ruổi nơi chân trời xa — căn nhà của triết lý, học vấn cao và những chuyến viễn du. Tâm hồn bạn là tâm hồn của kẻ hành hương, luôn khao khát ý nghĩa lớn hơn đằng sau mọi trải nghiệm. Bạn tỏa sáng khi được mở rộng tầm nhìn: qua sách vở, qua những nền văn hóa khác, qua những câu hỏi lớn về cuộc đời. Niềm tin của bạn chính là ngọn đuốc soi đường, và bạn có khả năng truyền lửa ấy cho người khác.',
      advice:
        'Hãy đi xa, học rộng và đừng bao giờ ngừng đặt câu hỏi. Nhưng nhớ rằng chân lý đẹp nhất là chân lý bạn sống được, không chỉ là chân lý bạn thuyết giảng.',
    },
    10: {
      title: 'Mặt Trời tại Nhà 10',
      description:
        'Mặt Trời đứng trên đỉnh cao nhất của bản đồ sao, như mặt trời giữa trưa — bạn được sinh ra để được nhìn thấy. Sự nghiệp, danh tiếng và vị thế xã hội là sân khấu nơi bản ngã của bạn tìm thấy hình hài. Bạn mang tham vọng tự nhiên và ý thức rõ về dấu ấn mình muốn để lại cho đời. Con đường có thể đòi hỏi nhiều năm leo núi, nhưng đỉnh cao đã được viết sẵn trong ánh sáng của bạn.',
      advice:
        'Hãy theo đuổi sự nghiệp phản ánh đúng con người thật của bạn, đừng chỉ chạy theo hào quang. Thành công bền vững nhất là khi danh tiếng và nhân cách cùng nhìn về một hướng.',
    },
    11: {
      title: 'Mặt Trời tại Nhà 11',
      description:
        'Ánh sáng của bạn hòa vào ánh sáng của tập thể — bạn bè, cộng đồng và những lý tưởng lớn lao. Bạn tỏa sáng nhất khi đứng giữa những người cùng chí hướng, cùng mơ về một tương lai tốt đẹp hơn. Tình bạn với bạn không phải chuyện xã giao, mà là những liên minh tâm hồn. Bạn có khả năng quy tụ con người quanh một tầm nhìn, và ước mơ của bạn thường vượt ra khỏi lợi ích cá nhân.',
      advice:
        'Hãy tham gia vào những cộng đồng nuôi dưỡng lý tưởng của bạn và dám đặt những mục tiêu dài hạn táo bạo. Khi bạn cho đi vì tập thể, vũ trụ sẽ trả lại qua chính những kết nối ấy.',
    },
    12: {
      title: 'Mặt Trời tại Nhà 12',
      description:
        'Mặt Trời của bạn ẩn sau bức màn của tiềm thức — ánh sáng ấy không phô ra ngoài, mà tỏa dịu dàng từ những chiều sâu vô hình. Bạn mang một đời sống nội tâm phong phú, nhạy cảm với những dòng chảy tâm linh mà người khác không nhận ra. Đôi khi bạn cảm thấy mình vô hình giữa đám đông, nhưng đó là vì sứ mệnh của bạn nằm ở phía sau hậu trường: chữa lành, thấu cảm, kết nối với những điều thiêng liêng. Sự cô tịch với bạn không phải nhà tù, mà là thánh đường.',
      advice:
        'Hãy dành thời gian thiền định, sáng tạo hay phụng sự thầm lặng — đó là nơi bạn nạp lại ánh sáng. Đừng sợ những khoảng lặng một mình; chính ở đó bạn gặp được con người thật của mình.',
    },
  },

  moon: {
    1: {
      title: 'Mặt Trăng tại Nhà 1',
      description:
        'Mặt Trăng treo ngay nơi cánh cửa bản ngã, khiến cảm xúc của bạn hiện rõ như thủy triều trên gương mặt. Bạn phản ứng với thế giới trước hết bằng trái tim, và người khác cảm nhận được sự dịu dàng, nhạy cảm tỏa ra từ bạn ngay lần gặp đầu. Tâm trạng bạn thay đổi theo từng pha trăng, và trực giác là người dẫn đường thầm lặng trong mọi quyết định. Bạn mang năng lượng nuôi dưỡng tự nhiên khiến người khác muốn tựa vào.',
      advice:
        'Hãy tôn trọng nhịp cảm xúc của mình nhưng đừng để tâm trạng nhất thời điều khiển những lựa chọn lớn. Học cách gọi tên cảm xúc trước khi hành động theo nó.',
    },
    2: {
      title: 'Mặt Trăng tại Nhà 2',
      description:
        'Trái tim bạn tìm sự bình yên nơi những điều vững chắc — tài chính ổn định, đồ vật thân quen, cảm giác đủ đầy. An toàn vật chất với bạn không phải lòng tham, mà là nhu cầu cảm xúc sâu xa như hơi thở. Thu nhập của bạn có thể lên xuống như thủy triều, thường gắn với những công việc chăm sóc, nuôi dưỡng hay phục vụ cộng đồng. Khi ví đầy, lòng bạn yên; khi giá trị bản thân được công nhận, bạn nở hoa.',
      advice:
        'Hãy xây một khoản dự phòng để trái tim được an — nhưng cũng tự hỏi liệu bạn đang mua sắm vì cần, hay vì đang xoa dịu một nỗi trống trải. Sự đủ đầy thật sự bắt đầu từ bên trong.',
    },
    3: {
      title: 'Mặt Trăng tại Nhà 3',
      description:
        'Mặt Trăng ngụ nơi căn nhà của ngôn từ, khiến lời nói của bạn luôn thấm đẫm cảm xúc. Bạn tư duy bằng trái tim, học bằng trực giác, và có khả năng trò chuyện chạm đến những điều người khác giấu kín. Mối liên kết với anh chị em, hàng xóm và môi trường quen thuộc nuôi dưỡng tâm hồn bạn sâu sắc. Viết lách, kể chuyện hay tâm sự là cách bạn tiêu hóa thế giới nội tâm của mình.',
      advice:
        'Hãy viết nhật ký hoặc tìm một người để trút lòng thường xuyên — cảm xúc của bạn cần được nói ra để không hóa thành mây mù. Lắng nghe người khác bằng trái tim chính là món quà của bạn.',
    },
    4: {
      title: 'Mặt Trăng tại Nhà 4',
      description:
        'Mặt Trăng trở về đúng ngôi nhà của nó — mái ấm, gốc rễ, gia đình — nên trái tim bạn gắn bó với tổ ấm bằng sợi dây thiêng liêng nhất. Ngôi nhà với bạn không chỉ là nơi ở, mà là nơi linh hồn được sạc đầy. Ký ức tuổi thơ, hình bóng người mẹ và truyền thống gia đình in dấu đậm sâu trong con người bạn. Bạn có bản năng chăm sóc, vun vén khiến bất cứ nơi nào bạn đến cũng dần hóa thành "nhà".',
      advice:
        'Hãy tạo cho mình một góc bình yên trong nhà — đó là liều thuốc tinh thần quý nhất của bạn. Chữa lành mối quan hệ với gia đình gốc sẽ giải phóng nguồn năng lượng to lớn trong bạn.',
    },
    5: {
      title: 'Mặt Trăng tại Nhà 5',
      description:
        'Trái tim bạn đập theo nhịp của niềm vui, sáng tạo và tình yêu lãng mạn. Cảm xúc của bạn cần được biểu đạt qua nghệ thuật, qua những cuộc chơi, qua việc yêu và được yêu một cách trọn vẹn. Bạn yêu bằng cả tâm hồn của một đứa trẻ — hồn nhiên, mãnh liệt và đầy tưởng tượng. Con cái hay những "đứa con tinh thần" mang đến cho bạn sự thỏa nguyện cảm xúc sâu xa.',
      advice:
        'Hãy cho phép mình chơi đùa và sáng tạo mà không cần lý do — đó là cách trái tim bạn tự chữa lành. Trong tình yêu, hãy mở lòng nhưng đừng biến người yêu thành nguồn an toàn duy nhất.',
    },
    6: {
      title: 'Mặt Trăng tại Nhà 6',
      description:
        'Mặt Trăng cư ngụ nơi nhà của lao động và sức khỏe, khiến cảm xúc và cơ thể bạn liên thông như hai mạch nước ngầm. Khi lòng bất an, dạ dày và giấc ngủ của bạn lên tiếng trước tiên. Bạn tìm thấy bình yên trong những nhịp điệu đều đặn: công việc quen thuộc, chăm sóc người khác, hoàn thiện từng chi tiết nhỏ. Phụng sự là cách trái tim bạn bày tỏ tình thương.',
      advice:
        'Hãy lắng nghe cơ thể như lắng nghe một người bạn — nó luôn nói thật về cảm xúc của bạn. Xây dựng thói quen ăn ngủ điều độ chính là cách chăm sóc tâm hồn thiết thực nhất.',
    },
    7: {
      title: 'Mặt Trăng tại Nhà 7',
      description:
        'Trái tim bạn tìm bến đỗ nơi những mối quan hệ một-một — hôn nhân, tình thân, sự đồng hành. Bạn nhạy bén lạ kỳ với cảm xúc của người đối diện, đôi khi cảm nhận được nỗi lòng họ trước cả khi họ mở lời. Sự gắn bó mang lại cho bạn cảm giác an toàn, và bạn có thiên hướng chăm sóc, nuôi dưỡng người bạn đời. Nhưng tấm gương quan hệ cũng dạy bạn bài học về ranh giới của trái tim.',
      advice:
        'Hãy yêu thương hết lòng nhưng giữ cho mình một khoảng trời riêng. Bình yên của bạn không nên hoàn toàn phụ thuộc vào tâm trạng của người khác.',
    },
    8: {
      title: 'Mặt Trăng tại Nhà 8',
      description:
        'Mặt Trăng lặn xuống vùng nước sâu nhất của bản đồ sao — nơi của bí ẩn, chuyển hóa và những cảm xúc mãnh liệt không lời. Bạn cảm nhận cuộc sống ở cường độ mà ít ai chịu đựng nổi: yêu là yêu tận đáy, đau là đau thấu xương. Trực giác của bạn xuyên qua mọi lớp mặt nạ, nhìn thấy những điều ẩn giấu trong lòng người. Mỗi khủng hoảng cảm xúc đi qua đều để lại trong bạn một phiên bản sâu sắc và mạnh mẽ hơn.',
      advice:
        'Đừng sợ chiều sâu cảm xúc của mình — đó là món quà, không phải lời nguyền. Hãy tìm những không gian an toàn (trị liệu, viết lách, người tri kỷ) để dòng nước ngầm ấy được chảy ra ánh sáng.',
    },
    9: {
      title: 'Mặt Trăng tại Nhà 9',
      description:
        'Trái tim bạn là trái tim của kẻ lữ hành — chỉ thấy bình yên khi tâm hồn được mở rộng về phía chân trời. Những chuyến đi xa, triết lý sống và các nền văn hóa khác nuôi dưỡng cảm xúc của bạn như mưa nuôi đất. Niềm tin với bạn không phải lý thuyết, mà là cảm nhận — bạn "thấy" chân lý bằng trực giác trước khi hiểu nó bằng lý trí. Bạn có thể tìm thấy "nhà" ở một miền đất xa lạ.',
      advice:
        'Hãy cho mình những chuyến đi, dù xa hay gần, mỗi khi tâm hồn thấy tù túng. Nuôi dưỡng một triết lý sống riêng sẽ là chiếc neo cảm xúc vững vàng nhất của bạn.',
    },
    10: {
      title: 'Mặt Trăng tại Nhà 10',
      description:
        'Mặt Trăng treo trên đỉnh trời sự nghiệp, khiến đời sống cảm xúc của bạn gắn chặt với con đường công danh. Bạn khao khát được công chúng ghi nhận, và sự nghiệp của bạn thường mang màu sắc chăm sóc, nuôi dưỡng hay phục vụ cộng đồng. Công chúng cảm nhận được sự chân thành nơi bạn, vì trái tim bạn hiển hiện trong từng việc bạn làm. Hình ảnh người mẹ hay một người nâng đỡ có ảnh hưởng lớn đến hướng đi sự nghiệp của bạn.',
      advice:
        'Hãy chọn sự nghiệp khiến trái tim bạn thấy "đúng", không chỉ khiến lý lịch đẹp lên. Đừng để thành công nghề nghiệp trở thành cách duy nhất để bạn cảm thấy mình có giá trị.',
    },
    11: {
      title: 'Mặt Trăng tại Nhà 11',
      description:
        'Trái tim bạn tìm thấy mái ấm giữa bạn bè và cộng đồng — tình bạn với bạn thiêng liêng chẳng kém tình thân. Bạn nhạy cảm với nhịp đập của tập thể, biết khi nào nhóm cần được vỗ về, khi nào cần được khích lệ. Những ước mơ của bạn thấm đẫm cảm xúc, thường hướng về việc chăm lo cho nhiều người. Vòng tròn bạn bè của bạn có thể đổi thay theo từng mùa trăng, nhưng những kết nối chân thành sẽ ở lại.',
      advice:
        'Hãy nuôi dưỡng những tình bạn cho bạn cảm giác thuộc về — đó là gia đình thứ hai của tâm hồn bạn. Đừng ngại chia sẻ ước mơ với cộng đồng; sự đồng cảm của họ sẽ tiếp sức cho bạn.',
    },
    12: {
      title: 'Mặt Trăng tại Nhà 12',
      description:
        'Mặt Trăng ẩn mình sau tấm voan của tiềm thức, khiến đời sống cảm xúc của bạn sâu kín như đại dương đêm. Bạn cảm nhận được những dòng chảy vô hình — nỗi buồn của căn phòng, tâm trạng của người lạ — như thể ranh giới giữa bạn và thế giới mỏng hơn người thường. Giấc mơ của bạn sống động và mang thông điệp; trực giác của bạn gần với khả năng ngoại cảm. Sự cô tịch là nơi trái tim bạn được tắm gội và hồi sinh.',
      advice:
        'Hãy dành những khoảng lặng định kỳ để "xả" những cảm xúc bạn vô tình hấp thụ từ người khác. Thiền, nước và nghệ thuật là ba người bạn chữa lành trung thành nhất của bạn.',
    },
  },

  mercury: {
    1: {
      title: 'Sao Thủy tại Nhà 1',
      description:
        'Sao Thủy đứng ngay cánh cửa bản ngã, biến bạn thành hiện thân của tư duy nhanh nhạy và lời nói linh hoạt. Người khác nhận ra trí tuệ của bạn ngay từ những câu nói đầu tiên — bạn quan sát, phân tích và phản ứng với tốc độ của gió. Sự tò mò là hơi thở của bạn; đứng yên về mặt trí tuệ khiến bạn ngột ngạt. Bạn diễn đạt bản thân chủ yếu qua ngôn từ, và đôi tay, ánh mắt của bạn cũng biết "nói".',
      advice:
        'Hãy dùng tài ăn nói để mở cửa, nhưng nhớ rằng lắng nghe cũng là một nửa của giao tiếp. Cho tâm trí những kỳ nghỉ ngắn để nó không tự đốt cháy mình.',
    },
    2: {
      title: 'Sao Thủy tại Nhà 2',
      description:
        'Tư duy của bạn đậu xuống mảnh đất tài chính, ban cho bạn cái đầu nhạy bén với tiền bạc và giá trị. Bạn có khả năng kiếm sống bằng trí tuệ: viết, nói, dạy, buôn bán, đàm phán. Mọi quyết định chi tiêu đều đi qua bộ lọc phân tích của bạn, và bạn giỏi nhìn ra giá trị thật đằng sau lớp vỏ. Với bạn, kiến thức chính là một dạng tài sản — và bạn không ngừng tích lũy nó.',
      advice:
        'Hãy biến kỹ năng giao tiếp và kiến thức thành nguồn thu nhập — đó là mỏ vàng của bạn. Nhưng đừng phân tích quá lâu đến mức bỏ lỡ cơ hội; đôi khi quyết định tốt là quyết định kịp lúc.',
    },
    3: {
      title: 'Sao Thủy tại Nhà 3',
      description:
        'Sao Thủy trở về đúng ngôi nhà của nó — giao tiếp, học tập, kết nối — nên tâm trí bạn hoạt động như một dòng suối không bao giờ ngừng chảy. Bạn học nhanh, nói giỏi, viết tốt, và có thể trò chuyện về mọi chủ đề với sự duyên dáng tự nhiên. Anh chị em, bạn học, hàng xóm là những nhân vật quan trọng trong câu chuyện đời bạn. Thế giới với bạn là một thư viện khổng lồ, và bạn muốn đọc hết từng trang.',
      advice:
        'Hãy chọn một vài lĩnh vực để đào sâu thay vì lướt qua tất cả — chiều sâu sẽ biến sự thông minh của bạn thành trí tuệ. Viết lách đều đặn là cách tuyệt vời để sắp xếp dòng suy nghĩ dồi dào ấy.',
    },
    4: {
      title: 'Sao Thủy tại Nhà 4',
      description:
        'Tâm trí bạn cắm rễ nơi mái ấm — bạn suy nghĩ sâu sắc về gia đình, nguồn cội và những điều thuộc về bên trong. Tuổi thơ của bạn có thể đầy sách vở, những cuộc trò chuyện quanh mâm cơm, hoặc những lần chuyển nhà. Bạn làm việc trí óc hiệu quả nhất trong không gian riêng tư, quen thuộc. Ký ức của bạn sắc bén lạ thường, và bạn có thể là người gìn giữ câu chuyện, gia phả của dòng họ.',
      advice:
        'Hãy tạo một góc làm việc yên tĩnh trong nhà — đó là nơi trí tuệ bạn thăng hoa. Trò chuyện cởi mở với người thân sẽ hóa giải nhiều khúc mắc mà im lặng chỉ làm dày thêm.',
    },
    5: {
      title: 'Sao Thủy tại Nhà 5',
      description:
        'Tư duy của bạn nhảy múa trong căn nhà của sáng tạo và niềm vui — bạn suy nghĩ như một nghệ sĩ và chơi đùa như một nhà thông thái. Ngôn từ trong tay bạn trở thành trò chơi: bạn có duyên kể chuyện, pha trò, viết lách sáng tạo. Trong tình yêu, bạn bị quyến rũ bởi trí tuệ — một cuộc trò chuyện thú vị với bạn còn lãng mạn hơn ngàn bông hồng. Với con trẻ, bạn là người bạn lớn biết lắng nghe và khơi gợi.',
      advice:
        'Hãy để sự sáng tạo dẫn dắt việc học và để việc học nuôi dưỡng sáng tạo — đó là vòng tròn vàng của bạn. Đừng chỉ nói về những dự định nghệ thuật; hãy bắt tay viết trang đầu tiên.',
    },
    6: {
      title: 'Sao Thủy tại Nhà 6',
      description:
        'Sao Thủy ngụ nơi nhà của công việc và sức khỏe, ban cho bạn bộ óc của người tổ chức bẩm sinh. Bạn nhìn thấy chi tiết mà người khác bỏ qua, giỏi phân tích quy trình và tìm cách làm mọi việc hiệu quả hơn. Công việc đòi hỏi sự tỉ mỉ, dữ liệu, ngôn ngữ hay kỹ năng là sân chơi của bạn. Tâm trí và cơ thể bạn liên kết chặt — lo âu thường biểu hiện qua hệ thần kinh và tiêu hóa.',
      advice:
        'Hãy dùng tài phân tích để phục vụ công việc, nhưng tắt chế độ "soi lỗi" khi về với chính mình. Một danh sách việc cần làm rõ ràng sẽ giải phóng tâm trí bạn khỏi vòng xoáy lo nghĩ.',
    },
    7: {
      title: 'Sao Thủy tại Nhà 7',
      description:
        'Tâm trí bạn tìm thấy chính nó trong đối thoại — các mối quan hệ với bạn được xây bằng những cuộc trò chuyện. Bạn cần một người bạn đời có thể nói chuyện hàng giờ không chán, một tri kỷ của trí tuệ. Bạn có tài thương lượng, hòa giải và nhìn vấn đề từ góc độ của người khác. Hôn nhân hay hợp tác với bạn trước hết là sự gặp gỡ của hai tâm trí.',
      advice:
        'Hãy chọn người đồng hành biết trò chuyện và biết lắng nghe — với bạn, im lặng kéo dài là dấu hiệu báo động. Trong tranh luận, hãy nhớ mục tiêu là thấu hiểu nhau, không phải thắng cuộc.',
    },
    8: {
      title: 'Sao Thủy tại Nhà 8',
      description:
        'Tư duy của bạn lặn sâu vào vùng nước của bí ẩn và chuyển hóa — bạn không hứng thú với bề mặt, chỉ say mê những gì ẩn giấu bên dưới. Bạn có bộ óc của nhà điều tra: tâm lý học, huyền học, tài chính sâu, những động cơ thầm kín của con người đều cuốn hút bạn. Lời nói của bạn có sức xuyên thấu, đôi khi khiến người khác giật mình vì bị "đọc vị". Bạn giữ bí mật giỏi và hiểu sức mạnh của thông tin.',
      advice:
        'Hãy dùng khả năng thấu thị để chữa lành chứ đừng để thao túng — ranh giới ấy mỏng nhưng quyết định tất cả. Nghiên cứu sâu một lĩnh vực bí ẩn sẽ cho tâm trí bạn vùng đất xứng tầm.',
    },
    9: {
      title: 'Sao Thủy tại Nhà 9',
      description:
        'Tâm trí bạn mang đôi cánh của kẻ viễn du — bạn suy nghĩ bằng những bức tranh lớn, những câu hỏi về ý nghĩa và chân lý. Học vấn cao, ngoại ngữ, triết học, xuất bản hay du lịch là những con đường tự nhiên của bạn. Bạn có tài biến kiến thức phức tạp thành câu chuyện dễ hiểu, là người thầy bẩm sinh. Mỗi nền văn hóa mới, mỗi cuốn sách hay đều mở thêm một cánh cửa trong tâm trí bạn.',
      advice:
        'Hãy học một ngoại ngữ, đi một chuyến xa, hay theo đuổi tấm bằng bạn vẫn ấp ủ — tâm trí bạn cần chân trời rộng. Nhưng nhớ kiểm chứng chi tiết trước khi tuyên bố chân lý; bức tranh lớn vẫn cần những nét vẽ đúng.',
    },
    10: {
      title: 'Sao Thủy tại Nhà 10',
      description:
        'Sao Thủy tỏa sáng trên đỉnh sự nghiệp — trí tuệ và tài giao tiếp chính là danh thiếp của bạn trước xã hội. Bạn được sinh ra cho những nghề nghiệp của ngôn từ và tư duy: truyền thông, giảng dạy, viết lách, kinh doanh, phân tích. Danh tiếng của bạn gắn liền với những gì bạn nói và viết ra công chúng. Sự nghiệp của bạn có thể rẽ nhiều nhánh, vì tâm trí ấy không chịu đóng khung trong một vai trò duy nhất.',
      advice:
        'Hãy xây dựng thương hiệu cá nhân qua tiếng nói chuyên môn của bạn — chia sẻ kiến thức chính là thang máy sự nghiệp. Chọn lời cẩn trọng nơi công cộng, vì ngôn từ của bạn vang xa hơn bạn nghĩ.',
    },
    11: {
      title: 'Sao Thủy tại Nhà 11',
      description:
        'Tâm trí bạn nở hoa giữa cộng đồng — bạn tư duy tốt nhất khi được trao đổi, tranh luận, cộng hưởng với nhiều bộ óc khác. Bạn bè của bạn thường là những người thông minh, thú vị, đến từ nhiều thế giới khác nhau. Bạn có tài kết nối con người và ý tưởng, là mạch máu thông tin của bất kỳ nhóm nào. Những ý tưởng về tương lai, công nghệ và đổi mới xã hội chảy tự nhiên trong bạn.',
      advice:
        'Hãy tham gia những cộng đồng trí tuệ — câu lạc bộ, diễn đàn, mạng lưới chuyên môn — nơi ý tưởng của bạn được mài sắc. Một ý tưởng lớn cần đồng minh; đừng giữ nó một mình.',
    },
    12: {
      title: 'Sao Thủy tại Nhà 12',
      description:
        'Tâm trí bạn vận hành trong miền sương khói của tiềm thức — những ý tưởng hay nhất đến với bạn trong im lặng, trong mơ, trong khoảnh khắc lơ đãng. Bạn suy nghĩ bằng hình ảnh, biểu tượng và trực giác nhiều hơn logic thuần túy. Có những điều bạn biết mà không giải thích được vì sao mình biết. Bạn diễn đạt nội tâm tốt nhất qua thơ ca, nghệ thuật hay những trang viết riêng tư.',
      advice:
        'Hãy ghi lại giấc mơ và những ý nghĩ thoáng qua — tiềm thức của bạn là cố vấn khôn ngoan đang thì thầm. Khi tâm trí mù sương, một mình trong yên tĩnh sẽ giúp bạn nghe rõ hơn bất kỳ lời khuyên nào.',
    },
  },

  venus: {
    1: {
      title: 'Sao Kim tại Nhà 1',
      description:
        'Sao Kim khoác lên bạn tấm áo của sự duyên dáng — vẻ quyến rũ của bạn tự nhiên như hoa tỏa hương, không cần cố gắng. Người khác bị thu hút bởi sự ấm áp, thẩm mỹ và cách bạn làm mọi thứ trở nên dễ chịu hơn. Bạn yêu cái đẹp và mang cái đẹp vào chính diện mạo, phong thái của mình. Hòa khí là bản năng của bạn; bạn dễ được lòng người và biết làm dịu những căng thẳng quanh mình.',
      advice:
        'Hãy dùng sự duyên dáng để kết nối, nhưng đừng đánh đổi nhu cầu thật của mình chỉ để được yêu thích. Đẹp lòng người không quý bằng thật lòng mình.',
    },
    2: {
      title: 'Sao Kim tại Nhà 2',
      description:
        'Sao Kim trở về ngôi nhà tài sản của nó, ban cho bạn mối duyên tự nhiên với tiền bạc và những điều xa hoa. Bạn có gu thẩm mỹ tinh tế và khả năng thu hút tài lộc qua nghệ thuật, sắc đẹp, ngoại giao hay những gì mang lại niềm vui cho người khác. Bạn trân trọng chất lượng hơn số lượng, và biết tận hưởng thành quả lao động của mình. Giá trị bản thân và tình yêu trong bạn đan quyện — khi thấy mình xứng đáng, bạn thu hút sự sung túc.',
      advice:
        'Hãy đầu tư vào những thứ vừa đẹp vừa bền giá trị, và cho phép mình tận hưởng không tội lỗi. Nhưng cẩn thận với chi tiêu cảm xúc — niềm vui mua sắm tan nhanh hơn hóa đơn.',
    },
    3: {
      title: 'Sao Kim tại Nhà 3',
      description:
        'Sao Kim rót mật vào lời nói của bạn — giọng điệu, từ ngữ và cách diễn đạt của bạn mang sự ngọt ngào khiến người nghe muốn nán lại. Bạn có tài ngoại giao bẩm sinh, biết nói điều khó nghe một cách dễ chịu. Tình yêu đến với bạn qua những cuộc trò chuyện, tin nhắn, qua môi trường học tập hay khu phố quen. Quan hệ với anh chị em và những người xung quanh thường êm đẹp nhờ sự khéo léo của bạn.',
      advice:
        'Hãy dùng lời nói để gieo sự tử tế — một câu nói đẹp của bạn có thể là điều ấm áp nhất ai đó nhận trong ngày. Viết thư, viết lời yêu thương; ngôn từ là bó hoa bạn trao tặng đời.',
    },
    4: {
      title: 'Sao Kim tại Nhà 4',
      description:
        'Sao Kim trải thảm hoa nơi tổ ấm của bạn — ngôi nhà với bạn phải đẹp, êm ái và đầy yêu thương, như một ốc đảo giữa thế gian. Bạn có tài biến bất kỳ không gian nào thành nơi ấm cúng, và gia đình là nguồn hạnh phúc sâu xa của bạn. Tình yêu trong bạn lớn lên từ những giá trị gia đình; bạn yêu theo kiểu vun vén, xây tổ. Tuổi xế chiều của bạn hứa hẹn êm đềm và sung túc.',
      advice:
        'Hãy chăm chút không gian sống — một mái nhà đẹp nuôi dưỡng tâm hồn bạn từng ngày. Đừng ngại mở cửa đón bạn bè về nhà; tổ ấm của bạn sinh ra để chia sẻ hơi ấm.',
    },
    5: {
      title: 'Sao Kim tại Nhà 5',
      description:
        'Sao Kim nhảy múa trong căn nhà của tình yêu và sáng tạo — đây là vị trí của trái tim biết yêu đời say đắm. Tình yêu lãng mạn với bạn là một nghệ thuật: bạn yêu cái đẹp của sự tán tỉnh, của những buổi hẹn hò, của cảm giác rung động. Tài năng nghệ thuật chảy trong bạn tự nhiên — âm nhạc, hội họa, thời trang hay bất kỳ hình thức nào của cái đẹp. Niềm vui không phải xa xỉ phẩm với bạn; nó là dưỡng chất của linh hồn.',
      advice:
        'Hãy sáng tạo và yêu thương một cách hào phóng — đó là cách bạn tỏa sáng nhất. Nhưng trong tình yêu, hãy tìm người trân trọng trái tim bạn, không chỉ say vẻ lấp lánh của nó.',
    },
    6: {
      title: 'Sao Kim tại Nhà 6',
      description:
        'Sao Kim mang cái đẹp vào đời sống thường nhật của bạn — bạn tìm thấy niềm vui trong những điều nhỏ bé: bàn làm việc gọn gàng, tách trà thơm, công việc được làm chỉn chu. Bạn yêu qua hành động phục vụ: chăm sóc, giúp đỡ, làm cuộc sống của người mình thương dễ chịu hơn. Môi trường làm việc hài hòa quan trọng với bạn như không khí; xung đột nơi công sở làm bạn héo úa. Tình yêu có thể nảy nở từ chính nơi làm việc.',
      advice:
        'Hãy đưa cái đẹp vào thói quen hằng ngày — đó là cách bạn biến đời thường thành nghi lễ. Nhớ rằng chăm sóc bản thân cũng là một công việc xứng đáng được làm chỉn chu.',
    },
    7: {
      title: 'Sao Kim tại Nhà 7',
      description:
        'Sao Kim ngự trị nơi ngôi nhà của hôn nhân — vị trí của những mối lương duyên đẹp. Tình yêu đôi lứa là một trong những chủ đề trung tâm của đời bạn, và bạn mang năng khiếu tự nhiên trong việc xây dựng quan hệ hài hòa. Bạn thu hút những người bạn đời duyên dáng, dễ mến, và hôn nhân thường mang lại may mắn cho bạn. Hợp tác, đối tác kinh doanh cũng được Sao Kim ban phước — bạn làm việc đôi tốt hơn làm việc đơn.',
      advice:
        'Hãy tin vào duyên lành của mình trong các mối quan hệ, nhưng đừng né tránh xung đột cần thiết — hòa bình thật sự được xây bằng sự chân thành, không phải sự nhún nhường.',
    },
    8: {
      title: 'Sao Kim tại Nhà 8',
      description:
        'Sao Kim lặn xuống vùng nước sâu của đam mê — bạn không thể yêu hời hợt, trái tim bạn chỉ thỏa mãn với sự hòa quyện trọn vẹn của hai linh hồn. Tình yêu với bạn là sự chuyển hóa: mỗi mối tình sâu sắc đều thay đổi con người bạn từ gốc rễ. Bạn có duyên với tài sản chung — thừa kế, hôn nhân, đầu tư chung có thể mang lại tài lộc. Sức hút của bạn mang màu huyền bí, khiến người khác vừa say vừa không thể lý giải.',
      advice:
        'Hãy yêu sâu nhưng giữ lại chủ quyền của tâm hồn mình — hòa quyện không có nghĩa là hòa tan. Trong tài chính chung, sự minh bạch là nền móng của tin tưởng.',
    },
    9: {
      title: 'Sao Kim tại Nhà 9',
      description:
        'Sao Kim mang trái tim bạn đi xa — bạn yêu những chân trời mới, những nền văn hóa lạ, những con người mở rộng thế giới quan của bạn. Tình yêu có thể đến từ phương xa: một người ngoại quốc, một người gặp trong chuyến du lịch, một tâm hồn khác biệt về gốc gác. Bạn say mê cái đẹp của tri thức và triết lý; với bạn, một tư tưởng đẹp cũng quyến rũ như một gương mặt đẹp. May mắn mỉm cười với bạn nơi đất khách.',
      advice:
        'Hãy đi và mở lòng — tình yêu và may mắn của bạn thường chờ ở những nơi xa vùng an toàn. Yêu một người khác biệt là cơ hội để trái tim bạn rộng thêm một chân trời.',
    },
    10: {
      title: 'Sao Kim tại Nhà 10',
      description:
        'Sao Kim tỏa sáng trên đỉnh sự nghiệp, ban cho bạn hình ảnh công chúng duyên dáng và được yêu mến. Bạn có thể thành công trong những lĩnh vực của cái đẹp và sự hài hòa: nghệ thuật, thiết kế, ngoại giao, làm đẹp, quan hệ công chúng. Cấp trên và những người quyền lực thường có thiện cảm với bạn, mở đường thăng tiến êm ái hơn người khác. Danh tiếng của bạn gắn với sự dễ mến — người ta nhớ đến bạn như một người làm việc cùng thật dễ chịu.',
      advice:
        'Hãy chọn sự nghiệp cho phép bạn tạo ra cái đẹp hoặc sự kết nối — đó là nơi tài năng bạn nở rộ. Sự dễ mến mở cửa, nhưng năng lực mới giữ bạn ở lại trong căn phòng ấy.',
    },
    11: {
      title: 'Sao Kim tại Nhà 11',
      description:
        'Sao Kim gieo hoa vào vườn bạn hữu của bạn — bạn được trời ban những tình bạn đẹp, và bạn bè thường là nguồn may mắn, niềm vui lớn của đời bạn. Bạn hòa nhập tự nhiên vào mọi nhóm, là chất keo gắn kết những con người khác biệt. Tình yêu có thể nở ra từ tình bạn, hoặc qua những vòng tròn xã hội, cộng đồng bạn tham gia. Ước mơ của bạn thường hướng về cái đẹp chung: một thế giới hài hòa, tử tế hơn.',
      advice:
        'Hãy đầu tư vào tình bạn như đầu tư vào kho báu — mạng lưới yêu thương ấy sẽ nâng bạn lên trong mọi mùa của cuộc đời. Đừng ngại để một tình bạn đẹp lớn dần thành điều sâu sắc hơn.',
    },
    12: {
      title: 'Sao Kim tại Nhà 12',
      description:
        'Sao Kim ẩn mình sau tấm màn tiềm thức — tình yêu trong bạn mang chiều kích tâm linh, lặng lẽ và bao la như biển đêm. Bạn yêu theo cách của người cho đi không cần đáp lại, đôi khi gắn với những mối tình thầm kín hoặc hy sinh trong lặng im. Cái đẹp với bạn nằm ở những điều vô hình: một giai điệu, một giấc mơ, một khoảnh khắc thiêng liêng. Lòng trắc ẩn của bạn không biên giới — bạn có thể yêu thương cả những điều thế gian ruồng bỏ.',
      advice:
        'Hãy để tình thương của bạn chảy vào nghệ thuật, thiện nguyện hay đời sống tâm linh — những nơi nó được trân quý. Nhưng nhớ rằng bạn cũng xứng đáng được yêu công khai, giữa ban ngày, không chỉ trong bóng tối của hy sinh.',
    },
  },

  mars: {
    1: {
      title: 'Sao Hỏa tại Nhà 1',
      description:
        'Sao Hỏa thắp lửa ngay cánh cửa bản ngã — bạn bước vào đời với năng lượng của một chiến binh, trực diện, can đảm và không chờ ai cho phép. Người khác cảm nhận được sức mạnh và sự quyết liệt của bạn từ ánh mắt đầu tiên. Bạn hành động trước, suy tính sau; chần chừ với bạn còn khó chịu hơn thất bại. Cơ thể bạn cần vận động như lửa cần oxy — năng lượng ấy nếu không được dùng sẽ quay vào trong thành sự bồn chồn.',
      advice:
        'Hãy cho ngọn lửa ấy việc để làm: thể thao, dự án, thử thách — và nó sẽ là động cơ thay vì đám cháy. Tập đếm đến mười trước khi phản ứng; sự dũng cảm lớn nhất đôi khi là kiềm chế.',
    },
    2: {
      title: 'Sao Hỏa tại Nhà 2',
      description:
        'Ngọn lửa hành động của bạn cháy trên mảnh đất tài chính — bạn kiếm tiền bằng sự xông xáo và bảo vệ những gì thuộc về mình với bản năng của chiến binh. Bạn không ngồi chờ tài lộc; bạn đi săn nó. Thu nhập của bạn gắn với nỗ lực cá nhân, sự cạnh tranh, đôi khi với nghề nghiệp đòi hỏi can đảm hay thể lực. Tiền vào nhanh nhưng cũng có thể ra nhanh, vì bạn chi tiêu quyết đoán như cách bạn kiếm.',
      advice:
        'Hãy biến sự máu lửa thành những dự án sinh lời, nhưng cài một "phanh" tự động cho chi tiêu bốc đồng. Kiên nhẫn tích lũy là kỹ năng chiến binh ít người nói tới nhưng quyết định trận chiến dài hơi.',
    },
    3: {
      title: 'Sao Hỏa tại Nhà 3',
      description:
        'Sao Hỏa nạp lửa vào lời nói của bạn — ngôn từ của bạn thẳng, nhanh và sắc như mũi tên. Bạn tranh luận với niềm hăng say của một đấu sĩ và học tập với tốc độ của người đang chạy đua. Tâm trí bạn không biết mệt, luôn tìm kiếm thử thách trí tuệ mới. Quan hệ với anh chị em hay người xung quanh có thể nhiều va chạm, nhưng cũng đầy sức sống và sự thẳng thắn quý giá.',
      advice:
        'Hãy dùng lời nói sắc bén để bảo vệ điều đúng, không phải để ghi điểm trong những trận khẩu chiến vô nghĩa. Viết ra điều khiến bạn giận trước khi nói — giấy chịu được lửa tốt hơn lòng người.',
    },
    4: {
      title: 'Sao Hỏa tại Nhà 4',
      description:
        'Ngọn lửa Sao Hỏa cháy nơi gốc rễ — bên dưới vẻ ngoài của bạn là một lò năng lượng gắn với gia đình và thế giới nội tâm. Bạn bảo vệ tổ ấm và người thân với sự quyết liệt của loài hổ mẹ. Tuổi thơ của bạn có thể từng chứng kiến những căng thẳng trong nhà, và bài học của bạn là chuyển hóa di sản nóng nảy ấy thành sức mạnh xây dựng. Bạn làm việc nhà, sửa sang, kiến tạo không gian sống với năng lượng dồi dào.',
      advice:
        'Hãy cho năng lượng ấy lối ra lành mạnh ngay trong nhà: nấu nướng, làm vườn, sửa chữa, tập luyện. Khi cơn giận gia đình trỗi dậy, hãy nhớ bạn đang xây tổ ấm, không phải chiến trường.',
    },
    5: {
      title: 'Sao Hỏa tại Nhà 5',
      description:
        'Sao Hỏa bùng cháy trong căn nhà của đam mê và sáng tạo — bạn yêu nồng nhiệt, chơi hết mình và sáng tạo với năng lượng của núi lửa. Trong tình yêu, bạn là người chủ động chinh phục; sự rụt rè không có trong từ điển trái tim bạn. Nghệ thuật của bạn cần chuyển động và cường độ — sân khấu, vũ đạo, thể thao, bất cứ điều gì khiến tim đập nhanh. Với con cái, bạn là nguồn năng lượng và lòng can đảm truyền lại.',
      advice:
        'Hãy theo đuổi đam mê với tất cả ngọn lửa, nhưng nhớ rằng tình yêu là khu vườn cần chăm, không phải pháo đài cần chiếm. Hoàn thành tác phẩm quan trọng hơn là khởi đầu thêm mười cái mới.',
    },
    6: {
      title: 'Sao Hỏa tại Nhà 6',
      description:
        'Ngọn lửa hành động của bạn cháy đều trong công việc hằng ngày — bạn là người lao động không biết mỏi, làm việc với cường độ khiến đồng nghiệp nể phục. Bạn tấn công danh sách công việc như chiến binh tấn công thành lũy, và sự trì trệ của người khác có thể khiến bạn sốt ruột. Sức khỏe của bạn gắn liền với vận động; ngồi yên quá lâu làm năng lượng ứ đọng thành cáu gắt hay viêm nhiễm. Bạn có tài xử lý khủng hoảng nơi công sở.',
      advice:
        'Hãy tập thể dục đều đặn như một nghi lễ — đó là van xả thiêng liêng của bạn. Trong công việc, hãy nhớ không phải ai cũng chạy được tốc độ của bạn; kiên nhẫn cũng là một loại sức mạnh.',
    },
    7: {
      title: 'Sao Hỏa tại Nhà 7',
      description:
        'Sao Hỏa bước vào ngôi nhà của hôn nhân, mang theo cả lửa ấm lẫn lửa cháy — các mối quan hệ của bạn không bao giờ nhạt nhẽo. Bạn bị thu hút bởi những người mạnh mẽ, quyết đoán, và chính trong quan hệ một-một, bạn học những bài học lớn nhất về sự giận dữ và đối thoại. Xung đột với bạn không phải dấu chấm hết, mà là cách hai cá tính thật chạm vào nhau. Bạn cũng có tài đấu tranh cho người khác — luật sư, người đại diện, người bảo vệ.',
      advice:
        'Hãy chọn người dám "đấu" với bạn một cách công bằng và làm hòa một cách chân thành. Học nghệ thuật cãi nhau đúng cách — tấn công vấn đề, đừng tấn công người mình thương.',
    },
    8: {
      title: 'Sao Hỏa tại Nhà 8',
      description:
        'Sao Hỏa trở về vùng đất cổ xưa của nó — nhà của chuyển hóa và sức mạnh ngầm. Năng lượng của bạn không bùng nổ ra ngoài mà nén lại như magma, tạo nên ý chí bền bỉ đáng sợ. Bạn không ngại đối mặt với khủng hoảng; ngược lại, bạn mạnh nhất khi mọi thứ sụp đổ và cần ai đó đi xuyên qua đống tro tàn. Đam mê của bạn sâu và mãnh liệt, đòi hỏi sự thân mật trọn vẹn cả thể xác lẫn linh hồn.',
      advice:
        'Hãy dùng ý chí thép ấy cho những cuộc chuyển hóa lớn — cai thói quen xấu, tái thiết cuộc đời, nghiên cứu sâu. Đừng nuôi hận thầm lặng; hãy cho cơn giận một nghi lễ giải phóng lành mạnh.',
    },
    9: {
      title: 'Sao Hỏa tại Nhà 9',
      description:
        'Ngọn lửa của bạn cháy về phía chân trời — bạn theo đuổi niềm tin và lý tưởng với năng lượng của một thập tự quân. Du lịch mạo hiểm, học vấn đầy tham vọng, những cuộc tranh luận triết lý nảy lửa đều là sân chơi của bạn. Bạn không chỉ tin — bạn chiến đấu cho điều mình tin, và có khả năng truyền lửa lý tưởng cho người khác. Những vùng đất xa và nền văn hóa lạ kích hoạt lòng can đảm trong bạn.',
      advice:
        'Hãy lên đường, theo đuổi tấm bằng hay sứ mệnh khiến máu bạn sôi lên — đó là nơi bạn sống động nhất. Nhưng nhớ rằng người khác cũng có chân lý của họ; nhiệt huyết đừng biến thành cuồng tín.',
    },
    10: {
      title: 'Sao Hỏa tại Nhà 10',
      description:
        'Sao Hỏa cắm cờ trên đỉnh sự nghiệp — bạn leo lên bằng chính sức mình, với tham vọng cháy bỏng và tinh thần không lùi bước. Bạn được sinh ra để dẫn đầu, để cạnh tranh, để chinh phục những mục tiêu mà người khác cho là quá sức. Sự nghiệp của bạn hợp với môi trường thử thách: kinh doanh, thể thao, kỹ thuật, quân đội, hay bất kỳ đấu trường nào có bảng xếp hạng. Người đời nhìn bạn như một người làm được việc — và điều đó đúng.',
      advice:
        'Hãy đặt mục tiêu lớn và tấn công từng bước một — sự nghiệp của bạn là cuộc marathon của những cú nước rút. Đừng để tham vọng đốt cháy những mối quan hệ trên đường đi; bạn sẽ cần họ trên đỉnh.',
    },
    11: {
      title: 'Sao Hỏa tại Nhà 11',
      description:
        'Ngọn lửa của bạn cháy giữa đám đông — bạn là người châm ngòi cho tập thể, biến những giấc mơ chung thành kế hoạch hành động. Trong nhóm bạn, bạn thường là người nói "làm thôi" khi mọi người còn đang bàn. Bạn bè của bạn năng động, thẳng thắn, đôi khi va chạm với bạn nhưng luôn đầy sức sống. Lý tưởng xã hội của bạn không nằm trên giấy — bạn xuống đường, xắn tay, hành động vì nó.',
      advice:
        'Hãy dẫn dắt những dự án cộng đồng cần người tiên phong — đó là sứ mệnh tự nhiên của bạn. Nhưng trong tập thể, hãy học chờ đồng đội; đến đích cùng nhau quý hơn đến trước một mình.',
    },
    12: {
      title: 'Sao Hỏa tại Nhà 12',
      description:
        'Sao Hỏa ẩn mình sau bức màn tiềm thức — sức mạnh của bạn vận hành trong thầm lặng, như dòng hải lưu mạnh mẽ dưới mặt biển phẳng. Bạn không phô trương ý chí, nhưng những ai xem thường bạn đều ngạc nhiên trước nội lực ấy. Cơn giận của bạn có xu hướng quay vào trong thay vì bộc lộ, và bài học của bạn là nhận diện rồi giải phóng nó một cách lành mạnh. Bạn chiến đấu tốt nhất cho những điều vô hình: người yếu thế, lý tưởng thầm lặng, các cuộc chiến nội tâm.',
      advice:
        'Hãy cho năng lượng ngầm ấy những lối ra: thiền động, bơi lội, yoga, nghệ thuật, phụng sự thầm lặng. Nhận diện cơn giận của mình sớm — cảm xúc bị chôn không chết, nó chỉ chờ ngày trồi lên.',
    },
  },

  jupiter: {
    1: {
      title: 'Sao Mộc tại Nhà 1',
      description:
        'Sao Mộc — hành tinh của may mắn — đứng ngay cánh cửa cuộc đời bạn, ban cho bạn sự lạc quan tỏa ra như nắng ấm. Người khác cảm thấy được nâng đỡ chỉ bằng sự hiện diện của bạn; bạn mang theo mình niềm tin rằng mọi chuyện rồi sẽ ổn, và lạ thay, với bạn chúng thường ổn thật. Tầm nhìn của bạn rộng, nụ cười của bạn hào phóng, và cuộc đời đáp lại bằng những cánh cửa mở. Bạn sinh ra để sống lớn — nghĩ lớn, mơ lớn, yêu đời lớn.',
      advice:
        'Hãy tin vào ngôi sao may mắn của mình, nhưng nhớ may mắn yêu người có chuẩn bị. Cẩn thận với sự thái quá — kể cả lạc quan cũng cần một mỏ neo thực tế.',
    },
    2: {
      title: 'Sao Mộc tại Nhà 2',
      description:
        'Hành tinh của sự sung túc gieo hạt vào mảnh đất tài chính của bạn — đây là một trong những dấu hiệu cổ điển của phúc lộc về tiền bạc. Bạn có khả năng thu hút tài lộc qua tầm nhìn rộng, sự hào phóng và niềm tin vào giá trị của mình. Tiền đến với bạn qua nhiều nguồn, thường gắn với giáo dục, nước ngoài, xuất bản hay những ngành nghề mở rộng. Bạn tin rằng vũ trụ đủ đầy — và niềm tin ấy chính là nam châm.',
      advice:
        'Hãy cho đi một phần những gì bạn nhận — dòng chảy hào phóng ấy chính là bí mật tài lộc của bạn. Nhưng vì tiền đến dễ, hãy học giữ: sự sung túc bền vững cần cả phước lành lẫn kế hoạch.',
    },
    3: {
      title: 'Sao Mộc tại Nhà 3',
      description:
        'Sao Mộc mở rộng căn nhà của tư duy và ngôn từ — tâm trí bạn là bầu trời, luôn nhìn thấy bức tranh lớn đằng sau những mảnh ghép nhỏ. Bạn nói chuyện có sức truyền cảm hứng, kể chuyện có hồn, và việc học với bạn là niềm vui chứ không phải gánh nặng. Lời nói của bạn mang may mắn — những cơ hội lớn thường đến qua một cuộc trò chuyện, một lá thư, một người quen gần. Anh chị em hay hàng xóm có thể là quý nhân của đời bạn.',
      advice:
        'Hãy chia sẻ kiến thức rộng rãi — dạy, viết, kể — vì khi cho đi hiểu biết, bạn nhận lại cơ hội. Nhưng nhớ kiểm tra chi tiết; bức tranh lớn của bạn cần khung được đóng đinh chắc.',
    },
    4: {
      title: 'Sao Mộc tại Nhà 4',
      description:
        'Hành tinh phúc lành đậu xuống gốc rễ của bạn — gia đình, tổ ấm và đời sống nội tâm là kho báu lớn của đời bạn. Bạn có thể sinh ra trong một gia đình rộng lượng, hoặc chính bạn sẽ xây nên một mái ấm đầy tiếng cười và lòng hiếu khách. Càng về sau, cuộc đời bạn càng nở rộ — tuổi trung niên và xế chiều hứa hẹn sung túc, an nhiên. Trong sâu thẳm, bạn mang một niềm tin nền tảng rằng mình được che chở.',
      advice:
        'Hãy đầu tư vào nhà đất và vun đắp gia đình — đó là nơi may mắn của bạn sinh sôi. Mở cửa nhà đón bạn bè; tổ ấm của bạn càng rộng lòng, phước càng đầy.',
    },
    5: {
      title: 'Sao Mộc tại Nhà 5',
      description:
        'Sao Mộc bừng nở trong căn nhà của niềm vui — bạn được trời ban khả năng tận hưởng cuộc sống và lan tỏa hạnh phúc ấy cho người khác. Sáng tạo của bạn mang tầm vóc lớn: bạn không vẽ bức tranh nhỏ, bạn mơ những kiệt tác. Tình yêu đến với bạn hào phóng và rực rỡ; con cái (hoặc những "đứa con tinh thần") là nguồn phước lành đặc biệt. Trái tim bạn trẻ mãi, và vận may thường tìm đến khi bạn đang chơi, đang yêu, đang sáng tạo.',
      advice:
        'Hãy dám mơ lớn trong nghệ thuật và tình yêu — vũ trụ thưởng cho sự hào phóng của trái tim bạn. Chỉ cần nhớ: đam mê cần điểm dừng, may rủi cần giới hạn, nhất là trong những cuộc vui đỏ đen.',
    },
    6: {
      title: 'Sao Mộc tại Nhà 6',
      description:
        'Hành tinh của sự mở rộng bước vào đời sống thường nhật — bạn tìm thấy ý nghĩa lớn trong những công việc nhỏ, và chính điều đó khiến bạn được quý trọng nơi làm việc. Đồng nghiệp xem bạn như nguồn năng lượng tích cực; cơ hội nghề nghiệp đến với bạn qua sự tận tụy được ghi nhận. Bạn có phước về sức khỏe khi sống điều độ, và niềm vui phụng sự là liều thuốc bổ tự nhiên của bạn. Công việc của bạn có xu hướng ngày càng mở rộng về quy mô và ý nghĩa.',
      advice:
        'Hãy làm việc với tinh thần phụng sự — sự thăng tiến của bạn đến từ đó, không từ sự bon chen. Cẩn thận với sự "mở rộng" của vòng eo; Sao Mộc ở đây cũng yêu đồ ăn ngon lắm đấy.',
    },
    7: {
      title: 'Sao Mộc tại Nhà 7',
      description:
        'Sao Mộc ban phước cho ngôi nhà hôn nhân của bạn — các mối quan hệ một-một là cánh cổng may mắn lớn của đời bạn. Người bạn đời hay cộng sự thường mang đến cho bạn sự mở rộng: tri thức, tài lộc, những chân trời mới. Bạn bị thu hút bởi những người rộng lượng, học thức, có thể khác biệt về văn hóa hay xuất thân. Hôn nhân với bạn không phải chiếc lồng mà là con thuyền — cùng nhau đi xa hơn một mình.',
      advice:
        'Hãy chọn người đồng hành cùng bạn lớn lên, không chỉ cùng bạn ổn định. Trong hợp tác, sự rộng lượng của bạn là tài sản — nhưng hãy đọc kỹ hợp đồng trước khi tin trọn.',
    },
    8: {
      title: 'Sao Mộc tại Nhà 8',
      description:
        'Hành tinh phúc lành lặn vào vùng nước sâu của chuyển hóa — bạn được che chở ngay cả trong những khủng hoảng lớn nhất của cuộc đời. Mỗi lần "lột xác", bạn trồi lên với nhiều hơn: nhiều hiểu biết, nhiều sức mạnh, đôi khi nhiều tài sản. Bạn có duyên với của cải chung: thừa kế, đầu tư, tài chính đối tác thường thuận lợi. Tâm hồn bạn khao khát những chân lý sâu xa — tâm lý học, huyền học, những bí ẩn của sống và chết đều mở ra với bạn.',
      advice:
        'Hãy tin rằng mỗi kết thúc trong đời bạn đều giấu một món quà — kinh nghiệm cho thấy điều đó luôn đúng với bạn. Học về đầu tư và tài chính sâu; đó là vùng đất phước của bạn.',
    },
    9: {
      title: 'Sao Mộc tại Nhà 9',
      description:
        'Sao Mộc trở về vương quốc của chính nó — triết lý, viễn du và tri thức cao — nên phước lành nơi đây nhân đôi. Bạn là kẻ hành hương bẩm sinh: tâm hồn bạn chỉ thật sự thở được khi đang mở rộng, đang học, đang đi. Học vấn cao, nước ngoài, xuất bản, giảng dạy hay tâm linh là những con đường trải hoa của bạn. Niềm tin của bạn lớn và lan tỏa — bạn có khả năng trở thành người thầy, người truyền cảm hứng cho nhiều người.',
      advice:
        'Hãy đi xa và học cao — mỗi chuyến đi, mỗi tấm bằng đều là khoản đầu tư sinh lời gấp bội với bạn. Chia sẻ điều bạn ngộ ra, nhưng để người khác tự tìm chân lý của họ.',
    },
    10: {
      title: 'Sao Mộc tại Nhà 10',
      description:
        'Hành tinh may mắn tỏa sáng trên đỉnh sự nghiệp — con đường công danh của bạn được trải bằng những cơ hội mà người khác phải tìm cả đời. Quý nhân xuất hiện đúng lúc, cánh cửa mở đúng khi bạn gõ. Bạn hợp với sự nghiệp mang tầm nhìn lớn: giáo dục, luật, quốc tế, lãnh đạo, truyền cảm hứng. Danh tiếng của bạn gắn với sự rộng lượng và chính trực — người đời tin bạn, và niềm tin ấy chính là vương miện của bạn.',
      advice:
        'Hãy nhắm cao hơn mức bạn nghĩ mình xứng đáng — bản đồ sao của bạn chịu được độ cao ấy. Khi thành công, hãy kéo người khác lên cùng; đó là cách giữ cho ngôi sao may mắn tiếp tục sáng.',
    },
    11: {
      title: 'Sao Mộc tại Nhà 11',
      description:
        'Sao Mộc gieo phước vào vườn bạn hữu — bạn bè và cộng đồng là mỏ vàng của đời bạn. Bạn quen biết rộng, và trong mạng lưới ấy luôn có những quý nhân sẵn lòng mở cửa cho bạn. Những giấc mơ của bạn lớn và có xu hướng... thành thật, bởi bạn dám mơ và vũ trụ dường như chiều lòng. Bạn hợp với những tổ chức, phong trào mang lý tưởng lớn — nơi tầm nhìn của bạn tìm thấy đồng minh.',
      advice:
        'Hãy mở rộng vòng tròn quan hệ một cách chân thành — mỗi người bạn mới là một cánh cửa tiềm năng. Viết ước mơ của bạn ra giấy; với vị trí này, đó gần như là một lời đặt hàng với vũ trụ.',
    },
    12: {
      title: 'Sao Mộc tại Nhà 12',
      description:
        'Sao Mộc ẩn mình sau bức màn vô hình — bạn có một "thiên thần hộ mệnh" theo cách nói của chiêm tinh cổ: sự che chở xuất hiện đúng những lúc bạn tưởng như cùng đường. May mắn của bạn vận hành thầm lặng, qua trực giác, giấc mơ và những sự tình cờ kỳ diệu. Đời sống tâm linh là kho báu thật của bạn; càng đi vào trong, bạn càng tìm thấy sự giàu có không gì mua được. Lòng trắc ẩn của bạn bao la, và phụng sự thầm lặng mang lại cho bạn phước lành gấp bội.',
      advice:
        'Hãy nuôi dưỡng đời sống nội tâm — thiền, cầu nguyện, lòng biết ơn — đó là tài khoản tiết kiệm tâm linh của bạn. Khi bế tắc, hãy buông và tin; sự che chở của bạn thật hơn bạn nghĩ.',
    },
  },

  saturn: {
    1: {
      title: 'Sao Thổ tại Nhà 1',
      description:
        'Sao Thổ — người thầy nghiêm khắc — đứng ngay cánh cửa bản ngã, đặt lên vai bạn cảm giác trách nhiệm từ rất sớm. Bạn có thể từng cảm thấy mình "già trước tuổi", nghiêm túc và dè dặt hơn bạn bè đồng trang lứa. Nhưng đây là vị trí của những con người được tôi luyện: theo năm tháng, sự chín chắn ấy hóa thành uy tín, sự đáng tin và một bản lĩnh không gì lay chuyển. Cuộc đời bạn vận hành ngược chiều kim đồng hồ — càng lớn tuổi, bạn càng tự do và rạng rỡ.',
      advice:
        'Hãy kiên nhẫn với chính mình — bạn là loại rượu quý cần thời gian. Đừng để sự tự phê bình trở thành nhà tù; nghiêm khắc với việc, nhưng dịu dàng với người làm việc ấy.',
    },
    2: {
      title: 'Sao Thổ tại Nhà 2',
      description:
        'Người thầy kỷ luật cai quản mảnh đất tài chính của bạn — tiền bạc với bạn không bao giờ là chuyện may rủi, mà là công trình xây bằng mồ hôi và thời gian. Thuở đầu đời có thể chật vật hay mang nỗi lo thiếu thốn, nhưng chính điều đó rèn cho bạn kỹ năng quản lý mà ít ai có. Bạn xây dựng tài sản chậm mà chắc, như người xây tường đá: từng viên một, nhưng đứng vững trăm năm. Bài học sâu xa hơn nằm ở giá trị bản thân — học tin rằng mình xứng đáng.',
      advice:
        'Hãy tiếp tục tích lũy bền bỉ — về dài hạn, ít ai vững hơn bạn. Nhưng song song đó, hãy làm việc với nỗi sợ thiếu thốn: bạn được phép tận hưởng thành quả của chính mình.',
    },
    3: {
      title: 'Sao Thổ tại Nhà 3',
      description:
        'Sao Thổ đặt sức nặng lên ngôi nhà của tư duy và lời nói — bạn suy nghĩ kỹ trước khi nói, và mỗi lời bạn thốt ra đều có trọng lượng. Thuở nhỏ, bạn có thể từng ngại phát biểu, sợ nói sai, hay cảm thấy việc học là gánh nặng. Nhưng chính sự cẩn trọng ấy tôi luyện nên một tâm trí có chiều sâu hiếm có: bạn không biết nhiều thứ hời hợt, bạn hiểu ít thứ một cách tường tận. Lời nói của bạn, khi cất lên, được người khác lắng nghe.',
      advice:
        'Hãy tin rằng sự chậm rãi trong tư duy là độ sâu, không phải khiếm khuyết. Luyện tập diễn đạt thường xuyên — kỹ năng nói của bạn là cơ bắp, càng tập càng mạnh.',
    },
    4: {
      title: 'Sao Thổ tại Nhà 4',
      description:
        'Người thầy nghiêm khắc ngự nơi gốc rễ — tuổi thơ của bạn có thể mang màu trầm: gia đình nghiêm khắc, thiếu vắng hơi ấm, hay trách nhiệm đến quá sớm. Nhưng Sao Thổ không lấy đi mà không trao lại: bạn được giao sứ mệnh tự xây nền móng cho chính mình, và mái ấm bạn tạo ra sau này sẽ vững như bàn thạch. Bạn là người mà gia đình tựa vào, trụ cột thầm lặng của dòng họ. Sự bình an nội tâm của bạn không được cho sẵn — nó được xây, từng viên gạch một, và vì thế không ai phá nổi.',
      advice:
        'Hãy chữa lành với quá khứ bằng sự thấu hiểu thay vì oán trách — cha mẹ bạn cũng có những Sao Thổ của riêng họ. Xây tổ ấm theo định nghĩa của bạn, không theo khuôn cũ.',
    },
    5: {
      title: 'Sao Thổ tại Nhà 5',
      description:
        'Sao Thổ bước vào căn nhà của niềm vui — và đây là nghịch lý đẹp của đời bạn: bạn học cách chơi một cách nghiêm túc. Thuở đầu, bạn có thể thấy khó thả lỏng, khó yêu hồn nhiên, khó sáng tạo mà không tự phán xét. Nhưng khi trưởng thành, chính kỷ luật ấy biến tài năng của bạn thành tác phẩm thật — trong khi người khác mơ, bạn hoàn thành. Tình yêu của bạn chín muộn nhưng bền; niềm vui của bạn giản dị nhưng thật.',
      advice:
        'Hãy cho phép mình vụng về khi chơi và sáng tạo — không ai chấm điểm trái tim cả. Tài năng của bạn cần thời gian và rèn luyện; đừng bỏ cuộc chỉ vì nó không nở sớm.',
    },
    6: {
      title: 'Sao Thổ tại Nhà 6',
      description:
        'Người thầy kỷ luật cai quản đời sống thường nhật của bạn — công việc, sức khỏe, thói quen đều mang dấu ấn của sự nghiêm cẩn. Bạn là người lao động tận tâm bậc nhất: trách nhiệm, tỉ mỉ, không bao giờ làm qua loa. Đồng nghiệp và cấp trên dần nhận ra bạn là người không thể thay thế. Cơ thể bạn là người thầy nghiêm khắc — nó đòi hỏi điều độ và sẽ lên tiếng rõ ràng khi bạn vắt kiệt nó.',
      advice:
        'Hãy xây dựng thói quen chăm sóc sức khỏe như xây sự nghiệp — đều đặn và dài hạn. Học nói "không" với việc quá tải; tận tụy không có nghĩa là gánh thay phần của cả thế giới.',
    },
    7: {
      title: 'Sao Thổ tại Nhà 7',
      description:
        'Sao Thổ ngồi nơi ngôi nhà hôn nhân — các mối quan hệ của bạn là trường học lớn nhất đời, nơi những bài học sâu sắc nhất về cam kết được dạy. Bạn không yêu vội; bạn thận trọng, đôi khi sợ ràng buộc hoặc ngược lại, gắn bó với những người mang năng lượng nghiêm nghị, chững chạc. Tình yêu của bạn có thể đến muộn hay trải qua thử thách, nhưng một khi đã cam kết, đó là loại cam kết khắc vào đá. Hôn nhân của bạn được xây để trường tồn.',
      advice:
        'Đừng sợ sự ràng buộc — với bạn, cam kết không phải gông xiềng mà là nền móng. Hãy chọn người cùng bạn xây dựng nghiêm túc, và nhớ nói lời yêu thương; đá cũng cần nắng ấm.',
    },
    8: {
      title: 'Sao Thổ tại Nhà 8',
      description:
        'Người thầy nghiêm khắc canh giữ vùng nước sâu của chuyển hóa — bạn học những bài học về buông bỏ, tin tưởng và sự thân mật một cách chậm rãi nhưng triệt để. Bạn có thể e dè trước việc mở lòng hoàn toàn, trao quyền kiểm soát hay hòa quyện với người khác — và đó chính là hành trình tu luyện của bạn. Về tài sản chung, bạn thận trọng và có trách nhiệm, là người quản lý đáng tin của những gì được giao phó. Mỗi khủng hoảng bạn đi qua đều được chưng cất thành minh triết.',
      advice:
        'Hãy cho phép mình tin tưởng từng chút một — sự thân mật là kỹ năng, và bạn học được nó. Quản lý nợ và tài chính chung minh bạch; đó là vùng bạn được tôi luyện để xuất sắc.',
    },
    9: {
      title: 'Sao Thổ tại Nhà 9',
      description:
        'Sao Thổ ngự nơi căn nhà của triết lý — niềm tin của bạn không đến từ sách vở hay lời giảng, mà được tôi luyện qua trải nghiệm thật. Bạn hoài nghi những chân lý dễ dãi, đặt câu hỏi nơi người khác chỉ gật đầu — và chính vì thế, khi bạn tin điều gì, niềm tin ấy vững như núi. Học vấn của bạn có thể đến muộn hay đầy thử thách, nhưng kiến thức bạn đạt được là loại kiến thức có rễ. Bạn có tiềm năng trở thành người thầy thực thụ — người dạy bằng chính cuộc đời mình.',
      advice:
        'Hãy kiên trì với con đường học vấn dù nó dài hơn của người khác — tấm bằng của bạn được đúc bằng vàng thật. Cho phép mình tin vào điều chưa chứng minh được; đôi khi đó gọi là hy vọng.',
    },
    10: {
      title: 'Sao Thổ tại Nhà 10',
      description:
        'Sao Thổ trở về ngai vàng của nó — đỉnh cao sự nghiệp — và đây là vị trí của những người xây dựng đế chế bằng thời gian. Con đường công danh của bạn không có thang máy, chỉ có cầu thang — nhưng mỗi bậc bạn bước đều vững vĩnh viễn. Bạn mang tham vọng nghiêm túc và ý thức trách nhiệm với di sản mình để lại. Thành công của bạn đến muộn hơn người khác nhưng cao hơn và bền hơn; tuổi tác chỉ làm bạn thêm uy tín.',
      advice:
        'Hãy chơi ván cờ dài — sự nghiệp của bạn là công trình ba mươi năm, không phải ba năm. Khi lên đỉnh, hãy nhớ vì sao mình leo; quyền lực không có ý nghĩa sẽ rất lạnh.',
    },
    11: {
      title: 'Sao Thổ tại Nhà 11',
      description:
        'Người thầy kỷ luật bước vào vườn bạn hữu — bạn không kết bạn ồ ạt, mà chọn lọc như chọn đá xây nhà. Vòng tròn của bạn nhỏ nhưng quý: những tình bạn của bạn được thử qua thời gian và sóng gió, bền chặt hàng thập kỷ. Trong tập thể, bạn thường là người gánh trách nhiệm, người biến lý tưởng bay bổng của nhóm thành kế hoạch khả thi. Ước mơ của bạn không viển vông — chúng có thời hạn, có lộ trình, và vì thế chúng thành sự thật.',
      advice:
        'Hãy trân quý vài người bạn thật thay vì trăm người quen — đó là triết lý đúng với bạn. Đặt mục tiêu dài hạn cho ước mơ lớn nhất và bám trụ; thời gian là đồng minh của bạn.',
    },
    12: {
      title: 'Sao Thổ tại Nhà 12',
      description:
        'Sao Thổ ẩn sau tấm màn tiềm thức — những nỗi sợ và gánh nặng của bạn thường vô hình, khó gọi tên, như có một người gác cổng nghiêm khắc sống trong những giấc mơ. Bạn có thể mang cảm giác trách nhiệm với những điều không ai thấy: nghiệp xưa, nỗi đau thầm, những bổn phận tâm linh. Nhưng đây cũng là vị trí của sức mạnh nội tâm phi thường — khi bạn dám đối diện bóng tối của mình, bạn trở thành chỗ dựa cho cả những người đang lạc trong bóng tối của họ. Sự cô tịch là tu viện nơi bạn rèn nên minh triết.',
      advice:
        'Hãy gọi tên những nỗi sợ vô hình — viết, trị liệu, thiền định — vì điều được gọi tên sẽ mất quyền lực ngầm. Kỷ luật tâm linh đều đặn là chiếc chìa khóa giải phóng bạn.',
    },
  },

  uranus: {
    1: {
      title: 'Sao Thiên Vương tại Nhà 1',
      description:
        'Hành tinh của sấm sét đứng ngay cánh cửa bản ngã — bạn sinh ra để khác biệt, và mọi nỗ lực "giống mọi người" đều phản bội thiết kế gốc của bạn. Người khác cảm nhận ở bạn điều gì đó độc đáo, khó đoán, một luồng điện không lẫn vào đâu. Bạn cần tự do như cần không khí; mọi chiếc khuôn đều khiến bạn muốn đập vỡ. Cuộc đời bạn có những khúc quanh đột ngột — và chính chúng đưa bạn đến đúng nơi cần đến.',
      advice:
        'Hãy ngừng xin lỗi vì sự khác biệt — nó là món quà bạn mang đến cho thế giới. Nhưng hãy phân biệt nổi loạn có mục đích với nổi loạn theo phản xạ; tự do thật sự bao gồm cả tự do được bình thường.',
    },
    2: {
      title: 'Sao Thiên Vương tại Nhà 2',
      description:
        'Luồng điện đột phá chạy qua mảnh đất tài chính — tiền bạc của bạn không đi đường thẳng mà đi đường zíc zắc: những cú tăng bất ngờ, những khúc ngoặt không báo trước. Bạn kiếm tiền tốt nhất bằng những cách độc đáo: công nghệ, sáng kiến, nghề tự do, những lĩnh vực chưa ai khai phá. Hệ giá trị của bạn cũng khác thường — bạn định nghĩa "giàu có" theo cách riêng, đôi khi coi tự do quý hơn két sắt. Cuộc đời dạy bạn rằng sự an toàn thật nằm ở khả năng thích nghi.',
      advice:
        'Hãy đa dạng hóa nguồn thu nhập và giữ một quỹ dự phòng — với đồ thị tài chính của bạn, đó là dây an toàn cần thiết. Tin vào những ý tưởng kiếm tiền "điên rồ" của mình, nhưng thử nghiệm nhỏ trước khi đặt cược lớn.',
    },
    3: {
      title: 'Sao Thiên Vương tại Nhà 3',
      description:
        'Sấm sét đánh vào ngôi nhà của tư duy — bộ óc của bạn vận hành ở tần số khác: những ý tưởng đến như tia chớp, những kết nối mà người khác cần bản đồ thì bạn thấy ngay tức khắc. Bạn học theo cách riêng, thường chán phương pháp truyền thống, và có khả năng nhìn vấn đề từ góc không ai nghĩ tới. Lời nói của bạn có thể gây sốc, đánh thức, mở mắt người nghe. Bạn là người mang những ý tưởng của tương lai về hiện tại.',
      advice:
        'Hãy ghi lại những tia chớp ý tưởng ngay khi chúng lóe lên — chúng không quay lại lần hai. Khi chia sẻ ý tưởng đột phá, hãy kiên nhẫn: người khác cần thời gian để bắt kịp tần số của bạn.',
    },
    4: {
      title: 'Sao Thiên Vương tại Nhà 4',
      description:
        'Hành tinh của biến động cắm rễ nơi gốc gác — gia đình hay tuổi thơ của bạn có thể mang điều gì đó khác thường: những lần chuyển nhà đột ngột, một gia đình không theo khuôn mẫu, hay cảm giác mình là "người lạ" trong chính tổ ấm. Bài học của bạn là tự định nghĩa "nhà" theo cách riêng — và bạn có quyền làm điều đó. Khái niệm gia đình của bạn rộng hơn huyết thống: nhà là nơi bạn được là chính mình trọn vẹn. Sự tự do nội tâm chính là gốc rễ thật của bạn.',
      advice:
        'Hãy tạo một tổ ấm phản ánh con người độc đáo của bạn, đừng sao chép mô hình của ai. Làm hòa với sự khác thường của gốc gác mình — chính nó đã rèn nên sự tự do trong bạn.',
    },
    5: {
      title: 'Sao Thiên Vương tại Nhà 5',
      description:
        'Luồng điện sáng tạo chạy qua căn nhà của nghệ thuật và tình yêu — bạn sáng tạo những thứ chưa từng tồn tại và yêu theo cách chưa ai dạy. Nghệ thuật của bạn mang dấu ấn tiên phong: thử nghiệm, phá cách, đi trước thời đại. Tình yêu của bạn cần sự mới mẻ và tự do; những mối tình của bạn thường bắt đầu bất ngờ, khác thường, và người yêu bạn phải là người bạn thân trước đã. Niềm vui của bạn nằm ở những trải nghiệm độc nhất, không lặp lại.',
      advice:
        'Hãy sáng tạo mà không cần xin phép truyền thống — khán giả của bạn ở tương lai. Trong tình yêu, hãy tìm người trao bạn cả sự gắn bó lẫn bầu trời; bạn cần cả hai, và điều đó chính đáng.',
    },
    6: {
      title: 'Sao Thiên Vương tại Nhà 6',
      description:
        'Sấm sét đánh vào đời sống thường nhật — bạn không sinh ra cho chiếc đồng hồ bấm giờ và văn phòng bốn bức tường. Nhịp làm việc của bạn theo cảm hứng: những đợt bùng nổ năng suất phi thường xen kẽ nhu cầu đổi gió. Bạn giỏi cải tiến quy trình, nhìn ra cách làm thông minh hơn mà mọi người vì quen mà không thấy. Cơ thể bạn cũng "điện" — hệ thần kinh nhạy, cần sự đa dạng trong vận động và những kỹ thuật chăm sóc sức khỏe mới mẻ.',
      advice:
        'Hãy tìm công việc cho bạn sự linh hoạt — làm tự do, làm từ xa, hay vai trò đổi mới sáng tạo. Với sức khỏe, hãy giữ vài thói quen neo (ngủ, ăn) làm trục giữa những biến tấu của bạn.',
    },
    7: {
      title: 'Sao Thiên Vương tại Nhà 7',
      description:
        'Hành tinh tự do bước vào ngôi nhà của cam kết — và nghịch lý ấy chính là hành trình của bạn: học cách gắn bó mà không mất mình. Bạn bị thu hút bởi những con người khác thường, độc lập, mang luồng điện riêng. Các mối quan hệ của bạn có thể bắt đầu hoặc chuyển hướng đột ngột, và mô hình quan hệ của bạn không nhất thiết theo khuôn truyền thống. Người bạn đời lý tưởng của bạn vừa là tri kỷ, vừa là người bạn tốt nhất, vừa tôn trọng khoảng trời riêng của bạn.',
      advice:
        'Hãy thẳng thắn về nhu cầu tự do ngay từ đầu — người phù hợp sẽ không thấy đó là mối đe dọa. Cam kết với bạn không phải chiếc lồng; hãy cùng nhau thiết kế một mối quan hệ có cửa sổ mở.',
    },
    8: {
      title: 'Sao Thiên Vương tại Nhà 8',
      description:
        'Sấm sét đánh vào vùng nước sâu nhất — những chuyển hóa của đời bạn đến đột ngột như động đất: bất ngờ, triệt để, không thể đảo ngược. Nhưng chính bạn được trang bị để tái sinh nhanh hơn bất kỳ ai — bạn buông cái cũ và ôm cái mới với sự dứt khoát đáng kinh ngạc. Bạn bị cuốn hút bởi những bí ẩn qua lăng kính khoa học: tâm lý học hiện đại, chiêm tinh, năng lượng, những vùng tri thức giao thoa. Tài chính chung của bạn có thể biến động — cần sự tỉnh táo và linh hoạt.',
      advice:
        'Khi cơn địa chấn đời đến, đừng bám vào đống đổ nát — tài năng của bạn là xây lại nhanh và đẹp hơn. Với tài sản chung và đầu tư, tránh những cú đặt cược "được ăn cả".',
    },
    9: {
      title: 'Sao Thiên Vương tại Nhà 9',
      description:
        'Luồng điện đột phá chạy qua căn nhà của niềm tin — bạn không thừa kế chân lý từ ai; bạn đập vỡ những giáo điều cũ và tự xây thế giới quan của riêng mình. Triết lý của bạn độc đáo, pha trộn những nguồn tưởng như không liên quan: khoa học và tâm linh, cổ xưa và vị lai. Những chuyến đi của bạn thường bất ngờ và thay đổi cuộc đời; những nền văn hóa lạ đánh thức trong bạn các phiên bản mới của chính mình. Bạn có thể là người mang tư tưởng cách mạng đến cho cộng đồng.',
      advice:
        'Hãy cứ chất vấn mọi giáo điều — nhưng giữ lòng khiêm tốn rằng chân lý của bạn cũng đang tiến hóa. Một chuyến đi không kế hoạch thỉnh thoảng chính là liều thuốc thức tỉnh bạn cần.',
    },
    10: {
      title: 'Sao Thiên Vương tại Nhà 10',
      description:
        'Sấm sét đánh trên đỉnh sự nghiệp — con đường công danh của bạn không phải đường thẳng mà là chuỗi những bước nhảy lượng tử: đổi nghề đột ngột, thăng tiến bất ngờ, những khúc quanh không ai đoán nổi. Bạn sinh ra để làm việc trong những lĩnh vực của tương lai: công nghệ, đổi mới, khoa học, cải cách xã hội — hoặc để cách mạng hóa bất kỳ ngành nào bạn bước vào. Bạn không leo thang sẵn có; bạn dựng thang của riêng mình. Danh tiếng của bạn gắn với sự tiên phong.',
      advice:
        'Đừng hoảng khi sự nghiệp rẽ ngoặt — với bạn, đó là cách vũ trụ tái định tuyến về đúng đường. Xây dựng kỹ năng độc đáo không ai thay thế được; đó là sự ổn định kiểu Thiên Vương.',
    },
    11: {
      title: 'Sao Thiên Vương tại Nhà 11',
      description:
        'Hành tinh cách mạng trở về chính ngôi nhà của nó — bạn bè, cộng đồng và những lý tưởng tương lai — nên năng lượng nơi đây thuần khiết và mạnh mẽ. Bạn bè của bạn là một bộ sưu tập những con người độc đáo từ mọi chân trời, và bạn kết nối họ thành mạng lưới của sự đổi thay. Bạn nhìn thấy tương lai trước người khác và mang trong mình khát vọng cải tạo xã hội chân thành. Những phong trào, cộng đồng tiến bộ là nơi bạn thuộc về.',
      advice:
        'Hãy tìm "bộ lạc" của mình — những người cùng tần số đổi mới — và cùng nhau kiến tạo. Lý tưởng lớn cần bước đi nhỏ; hãy bắt đầu cuộc cách mạng từ chính khu phố của bạn.',
    },
    12: {
      title: 'Sao Thiên Vương tại Nhà 12',
      description:
        'Sấm sét ẩn sau bức màn tiềm thức — những thức tỉnh của bạn đến từ bên trong, bất ngờ như tia chớp giữa đêm: một giấc mơ làm đổi hướng cuộc đời, một trực giác lóe lên đúng khoảnh khắc quyết định. Bạn mang trong tiềm thức những ý tưởng đi trước thời đại mà chính bạn đôi khi chưa hiểu hết. Sự nổi loạn của bạn diễn ra thầm lặng, trong thế giới nội tâm, trước khi hiện ra ngoài đời. Tự do tối thượng mà bạn tìm kiếm là tự do của tâm thức.',
      advice:
        'Hãy tin những tia chớp trực giác — chúng là trí tuệ của tiềm thức đã đi trước lý trí nhiều bước. Thiền định và những khoảng cô tịch là nơi các đột phá lớn nhất của bạn ra đời.',
    },
  },

  neptune: {
    1: {
      title: 'Sao Hải Vương tại Nhà 1',
      description:
        'Làn sương huyền ảo của Hải Vương phủ lên cánh cửa bản ngã — bạn mang một khí chất mơ màng, khó nắm bắt, như thể được dệt từ chất liệu của giấc mơ. Người khác nhìn vào bạn và thấy điều họ muốn thấy; bạn là tấm gương dịu dàng phản chiếu tâm hồn người đối diện. Sự nhạy cảm của bạn vượt xa người thường — bạn thẩm thấu cảm xúc, không khí, năng lượng của môi trường quanh mình. Ranh giới giữa bạn và thế giới mỏng như sương — đó vừa là món quà thấu cảm, vừa là bài học về tự bảo vệ.',
      advice:
        'Hãy học dựng những ranh giới dịu dàng — biết mình kết thúc ở đâu và người khác bắt đầu ở đâu. Nghệ thuật, nước và thiên nhiên là nơi bạn tìm lại đường nét của chính mình.',
    },
    2: {
      title: 'Sao Hải Vương tại Nhà 2',
      description:
        'Làn sương mơ phủ lên mảnh đất tài chính — tiền bạc với bạn là thứ trừu tượng, dễ chảy qua kẽ tay như nước. Bạn không tham, nhưng cũng không rành chuyện giữ; đầu óc bạn vốn hướng về những giá trị không đếm được. Bạn có khả năng kiếm sống từ trí tưởng tượng: nghệ thuật, âm nhạc, chữa lành, tâm linh, từ thiện. Bài học của bạn là gắn ý nghĩa thiêng liêng với vật chất — tiền cũng là một dạng năng lượng, và nó có thể phụng sự giấc mơ của bạn.',
      advice:
        'Hãy đặt hệ thống tự động cho tài chính — chuyển khoản tiết kiệm định kỳ, hóa đơn tự trả — để giấc mơ không bị hóa đơn đánh thức. Cẩn trọng với những lời mời đầu tư quá đẹp; sự cả tin là gót chân của bạn.',
    },
    3: {
      title: 'Sao Hải Vương tại Nhà 3',
      description:
        'Sương mù huyền ảo len vào ngôi nhà của tư duy — bạn không suy nghĩ bằng đường thẳng mà bằng hình ảnh, giai điệu, liên tưởng. Ngôn từ của bạn mang chất thơ tự nhiên; bạn có thể diễn tả những điều người khác chỉ cảm mà không nói nổi. Trực giác của bạn thường biết câu trả lời trước khi logic tìm ra đường. Việc học của bạn cần cảm hứng — bạn không nhồi được kiến thức khô, nhưng thẩm thấu tuyệt vời những gì chạm vào tâm hồn.',
      advice:
        'Hãy viết, làm thơ, kể chuyện — ngôn từ của bạn có khả năng chữa lành người đọc. Khi cần quyết định quan trọng, hãy kiểm tra lại thông tin bằng giấy trắng mực đen; sương mù đẹp nhưng dễ lạc.',
    },
    4: {
      title: 'Sao Hải Vương tại Nhà 4',
      description:
        'Làn sương thiêng phủ lên gốc rễ — gia đình và tuổi thơ của bạn nhuốm màu huyền hoặc: có thể là những ký ức mơ hồ, một người thân như cơn gió khó nắm, hay một tổ ấm thấm đẫm âm nhạc, tôn giáo, lòng trắc ẩn. Bạn mang trong mình nỗi hoài niệm về một "mái nhà hoàn hảo" có thể chưa từng tồn tại — và hành trình của bạn là nhận ra mái nhà ấy nằm trong tâm hồn. Ngôi nhà lý tưởng của bạn là một thánh đường nhỏ: yên tĩnh, gần nước, đầy nhạc và những giấc mơ.',
      advice:
        'Hãy biến không gian sống thành nơi trú ẩn tâm linh — nến, nhạc, một góc thiền. Nhìn gia đình bằng mắt thực tế đi kèm lòng trắc ẩn; tha thứ cho quá khứ không hoàn hảo là món quà bạn tặng chính mình.',
    },
    5: {
      title: 'Sao Hải Vương tại Nhà 5',
      description:
        'Hải Vương rót chất mơ vào căn nhà của sáng tạo và tình yêu — trí tưởng tượng của bạn là đại dương không đáy, nơi nghệ thuật thuần khiết nhất được sinh ra. Bạn sáng tạo như người nhập đồng: âm nhạc, hội họa, điện ảnh, thơ ca chảy qua bạn hơn là từ bạn. Trong tình yêu, bạn là kẻ lãng mạn tuyệt đối — bạn yêu cả con người lẫn giấc mơ về con người ấy. Bài học của trái tim bạn là yêu người thật, không chỉ yêu bức tranh mình vẽ về họ.',
      advice:
        'Hãy trao trí tưởng tượng cho nghệ thuật — nó là kênh xứng đáng nhất với đại dương trong bạn. Trong tình yêu, thỉnh thoảng hãy lau ống kính: người trước mặt đẹp theo cách thật của họ, không cần lớp sương của bạn.',
    },
    6: {
      title: 'Sao Hải Vương tại Nhà 6',
      description:
        'Làn sương huyền ảo phủ lên đời sống thường nhật — bạn không sinh ra cho những bảng tính và quy trình cứng nhắc; công việc của bạn cần có linh hồn. Bạn làm việc tốt nhất khi cảm thấy đang phụng sự điều gì lớn hơn: chữa lành, giúp đỡ, sáng tạo, xoa dịu. Cơ thể bạn nhạy cảm lạ thường — nó hấp thụ căng thẳng của môi trường, vì thế sức khỏe của bạn gắn chặt với trạng thái tinh thần. Những liệu pháp nhẹ nhàng — thiền, yoga, âm nhạc, nước — hợp với bạn hơn các biện pháp mạnh.',
      advice:
        'Hãy tìm công việc nuôi dưỡng tâm hồn, vì với bạn, công việc vô nghĩa là bệnh tật chờ ngày phát. Giữ nhịp sinh hoạt nhẹ nhàng đều đặn — cơ thể mơ màng của bạn cần chiếc neo ấy.',
    },
    7: {
      title: 'Sao Hải Vương tại Nhà 7',
      description:
        'Hải Vương dệt sương vào ngôi nhà hôn nhân — bạn tìm kiếm trong tình yêu một sự hòa quyện linh hồn, một "định mệnh" vượt trên những mối quan hệ trần thế. Bạn yêu với lòng tận hiến của một tín đồ và nhìn thấy phiên bản đẹp nhất của người mình thương — đôi khi đẹp hơn cả sự thật. Bài học của bạn là phân biệt tình yêu vô điều kiện với sự hy sinh vô điều kiện: cứu rỗi không phải nền móng của hôn nhân. Khi tỉnh táo chọn đúng người, tình yêu của bạn thật sự chạm tới chiều thiêng liêng mà ít ai biết đến.',
      advice:
        'Hãy yêu bằng cả trái tim nhưng nhìn bằng mắt mở — người xứng đáng không cần bạn đeo kính màu hồng. Cảnh giác với vai "người cứu rỗi"; bạn là người yêu, không phải phao cứu sinh.',
    },
    8: {
      title: 'Sao Hải Vương tại Nhà 8',
      description:
        'Làn sương thiêng lan vào vùng nước sâu nhất — nơi Hải Vương gặp nhà của bí ẩn, ranh giới giữa các thế giới trở nên trong suốt với bạn. Trực giác của bạn về những điều ẩn giấu gần như siêu nhiên: bạn cảm nhận được những dòng chảy ngầm trong lòng người, những sự thật chưa ai nói ra. Sự thân mật với bạn là trải nghiệm tâm linh — hòa quyện với người mình yêu là cách bạn chạm vào cái vô hạn. Những chủ đề về sống chết, kiếp trước, thế giới bên kia không làm bạn sợ mà gọi mời bạn.',
      advice:
        'Hãy phát triển trực giác qua những con đường có kỷ luật — thiền, trị liệu, nghiên cứu tâm linh nghiêm túc. Trong tài chính chung, hãy minh bạch tuyệt đối và tránh những thỏa thuận mập mờ.',
    },
    9: {
      title: 'Sao Hải Vương tại Nhà 9',
      description:
        'Hải Vương bơi trong căn nhà của niềm tin — tâm hồn bạn khao khát cái thiêng liêng như cá khao khát biển. Tôn giáo, tâm linh, huyền học hay bất kỳ con đường nào dẫn đến sự hợp nhất với cái vô hạn đều vẫy gọi bạn. Bạn không cần chứng minh để tin — đức tin của bạn là trải nghiệm trực tiếp, những khoảnh khắc chạm vào điều không tên. Những chuyến đi của bạn mang màu hành hương; biển cả, đền đài và những miền đất thiêng gọi tên bạn.',
      advice:
        'Hãy theo đuổi con đường tâm linh, nhưng giữ đôi chân trên đất — vị thầy chân chính không bao giờ yêu cầu bạn ngừng suy nghĩ. Một chuyến hành hương, dù chỉ về với biển, sẽ tái sinh tâm hồn bạn.',
    },
    10: {
      title: 'Sao Hải Vương tại Nhà 10',
      description:
        'Làn sương huyền ảo phủ trên đỉnh sự nghiệp — con đường công danh của bạn không hiện rõ như của người khác, và chính sự mơ hồ ấy là lời mời gọi: bạn không sinh ra cho một chức danh, mà cho một sứ mệnh. Bạn tỏa sáng trong những nghề nghiệp của trí tưởng tượng và lòng trắc ẩn: nghệ thuật, điện ảnh, âm nhạc, chữa lành, tâm linh, thiện nguyện. Hình ảnh công chúng của bạn mang sức cuốn hút khó lý giải — người ta phóng chiếu lên bạn những giấc mơ của họ. Khi sự nghiệp và lý tưởng hòa làm một, bạn thành dòng nước không gì cản nổi.',
      advice:
        'Đừng hoảng nếu chưa thấy rõ "nghề" của mình — hãy đi theo điều khiến tâm hồn bạn rung lên, con đường sẽ hiện dần dưới chân. Chọn cộng sự minh bạch để bù cho làn sương của bạn.',
    },
    11: {
      title: 'Sao Hải Vương tại Nhà 11',
      description:
        'Hải Vương hòa vào dòng chảy của cộng đồng — bạn mơ những giấc mơ không phải cho riêng mình mà cho cả nhân loại. Lý tưởng của bạn mang màu sắc utopia: một thế giới từ bi hơn, đẹp hơn, hợp nhất hơn. Bạn bè của bạn thường là những tâm hồn nghệ sĩ, mơ mộng, tâm linh — và tình bạn của bạn có chất keo của sự thấu cảm sâu. Bạn có khả năng cảm nhận giấc mơ chung của đám đông và trở thành tiếng nói cho những khát vọng không lời ấy.',
      advice:
        'Hãy tham gia những cộng đồng phụng sự — thiện nguyện, nghệ thuật, tâm linh — nơi giấc mơ của bạn có đôi tay. Nhưng chọn bạn mà tin; lòng tốt của bạn cần đi cùng đôi mắt tỉnh.',
    },
    12: {
      title: 'Sao Hải Vương tại Nhà 12',
      description:
        'Hải Vương trở về đại dương quê hương của nó — ngôi nhà của tiềm thức và cõi vô hình — nên dòng tâm linh trong bạn chảy thuần khiết và sâu thẳm nhất. Bạn là người của hai thế giới: một chân trong đời thực, một chân trong cõi mộng, và những giấc mơ của bạn thường mang thông điệp thật. Lòng trắc ẩn của bạn không có đáy — bạn cảm được nỗi đau của những người không quen, thậm chí của cả thế giới. Sự cô tịch không làm bạn cô đơn; đó là nơi bạn về với nguồn cội thiêng liêng của mình.',
      advice:
        'Hãy coi thiền định, nghệ thuật hay cầu nguyện là hơi thở hằng ngày — bạn cần về nguồn thường xuyên để không bị thế gian làm cạn. Ngủ đủ và ghi lại giấc mơ; đêm là lúc bạn nhận thư của vũ trụ.',
    },
  },

  pluto: {
    1: {
      title: 'Sao Diêm Vương tại Nhà 1',
      description:
        'Quyền năng của Diêm Vương khắc vào chính bản ngã bạn — bạn bước vào đời với một cường độ mà người khác cảm nhận được trước cả khi bạn nói. Ánh mắt bạn xuyên thấu, sự hiện diện của bạn có sức nặng, và người đối diện hoặc bị hút vào hoặc dè chừng — hiếm khi dửng dưng. Cuộc đời bạn là chuỗi những lần lột xác: bạn không lớn lên tuyến tính mà tái sinh từng giai đoạn, mỗi phiên bản mạnh hơn phiên bản trước. Sức mạnh ý chí của bạn, khi được khai mở, gần như vô hạn.',
      advice:
        'Hãy dùng cường độ ấy để chuyển hóa chính mình trước khi muốn thay đổi thế giới. Học buông quyền kiểm soát trong những việc nhỏ — sức mạnh thật là biết khi nào không cần dùng sức.',
    },
    2: {
      title: 'Sao Diêm Vương tại Nhà 2',
      description:
        'Quyền năng chuyển hóa cắm sâu vào mảnh đất tài chính — tiền bạc với bạn không bao giờ chỉ là tiền: nó là quyền lực, sự sống còn, biểu tượng của khả năng tự chủ. Tài chính của bạn có thể trải qua những chu kỳ mất–được kịch tính, và mỗi lần "cháy túi rồi gây dựng lại" đều khai quật trong bạn những nguồn lực không ngờ. Bạn có bản năng nhìn ra giá trị ẩn — món đầu tư bị bỏ quên, tài năng chưa ai khai phá. Bài học sâu nhất: giá trị thật của bạn không thể bị tước đoạt bởi bất kỳ biến cố nào.',
      advice:
        'Hãy xây dựng tài chính bằng tầm nhìn dài hạn và đừng để tiền trở thành thước đo quyền lực trong các mối quan hệ. Khi mất mát xảy ra, nhớ rằng bạn là người tái sinh giỏi nhất vòng hoàng đạo.',
    },
    3: {
      title: 'Sao Diêm Vương tại Nhà 3',
      description:
        'Quyền năng Diêm Vương nạp vào ngôn từ của bạn — lời nói của bạn có sức xuyên phá: bạn không nói chuyện phiếm, bạn đào đến tận lõi của vấn đề. Tâm trí bạn là tâm trí của thám tử: nghi ngờ bề mặt, truy tìm động cơ, không yên cho đến khi chạm vào sự thật. Bạn có khả năng thuyết phục gần như thôi miên khi thật sự tin vào điều mình nói. Những cuộc trò chuyện sâu sắc có thể thay đổi cuộc đời bạn — và lời của bạn cũng có thể chuyển hóa cuộc đời người khác.',
      advice:
        'Hãy dùng sức mạnh ngôn từ để chữa lành và khai sáng — nó đủ sắc để làm cả hai chiều. Trong giao tiếp thường ngày, hãy cho phép vài cuộc trò chuyện chỉ nhẹ nhàng vui vẻ; không phải mọi tảng băng đều cần lặn xuống.',
    },
    4: {
      title: 'Sao Diêm Vương tại Nhà 4',
      description:
        'Quyền năng chuyển hóa nằm nơi gốc rễ — gia đình và tuổi thơ của bạn có thể chứa những dòng chảy ngầm mãnh liệt: bí mật gia tộc, những cuộc tranh đấu quyền lực thầm lặng, hay những biến cố làm rung chuyển nền móng. Bạn được trao sứ mệnh của người chuyển hóa dòng họ: chữa lành những mẫu hình cũ để chúng dừng lại ở thế hệ bạn. Thế giới nội tâm của bạn sâu như giếng cổ, và khi bạn dám soi xuống đáy, bạn tìm thấy kho báu của tổ tiên. Mái ấm bạn tự xây sẽ là pháo đài của sự tái sinh.',
      advice:
        'Hãy can đảm nhìn vào lịch sử gia đình với đôi mắt thấu hiểu — gọi tên những điều chưa ai dám gọi là bước đầu của chữa lành. Trị liệu hay viết về tuổi thơ có thể giải phóng năng lượng khổng lồ trong bạn.',
    },
    5: {
      title: 'Sao Diêm Vương tại Nhà 5',
      description:
        'Quyền năng Diêm Vương bùng cháy trong căn nhà của đam mê — bạn yêu và sáng tạo với cường độ của núi lửa: tất cả hoặc không gì cả. Tình yêu với bạn là sự chuyển hóa — mỗi mối tình lớn đều thiêu rụi một phiên bản cũ của bạn và sinh ra phiên bản mới. Nghệ thuật của bạn mang sức ám ảnh: nó không giải trí, nó khuấy động, nó chạm vào những vùng người xem giấu kín. Con cái hay những sáng tạo của bạn cũng là tác nhân chuyển hóa sâu sắc cuộc đời bạn.',
      advice:
        'Hãy trao đam mê ấy cho sáng tạo — nghệ thuật là núi lửa được phép phun trào an toàn. Trong tình yêu, đam mê đừng biến thành chiếm hữu; người mình thương là ngọn lửa đồng hành, không phải tài sản.',
    },
    6: {
      title: 'Sao Diêm Vương tại Nhà 6',
      description:
        'Quyền năng chuyển hóa vận hành trong đời sống thường nhật — bạn không "làm việc", bạn cống hiến với sự tập trung ám ảnh, và những gì bạn chạm vào đều được tái cấu trúc tận gốc. Bạn có tài nhìn ra ung nhọt của hệ thống — quy trình mục ruỗng, vấn đề bị che đậy — và can đảm phẫu thuật nó. Sức khỏe của bạn gắn với chuyển hóa: cơ thể bạn phản ánh trung thực những gì tâm lý dồn nén, và có khả năng tự phục hồi đáng kinh ngạc khi bạn thay đổi lối sống. Công việc của bạn lý tưởng nhất khi mang tính chữa lành, nghiên cứu hay cải tổ.',
      advice:
        'Hãy chọn công việc xứng đáng với cường độ của bạn — sự ám ảnh đặt sai chỗ sẽ thành kiệt sức. Lắng nghe cơ thể như lắng nghe lời tiên tri; nó biết trước tâm trí bạn rất lâu.',
    },
    7: {
      title: 'Sao Diêm Vương tại Nhà 7',
      description:
        'Quyền năng Diêm Vương ngự nơi ngôi nhà hôn nhân — các mối quan hệ một-một là lò luyện kim lớn nhất của đời bạn. Bạn không thể yêu hời hợt: bạn bị hút về những kết nối định mệnh, mãnh liệt, nơi hai con người nhìn thấu nhau đến tận xương tủy. Trong quan hệ, những chủ đề về quyền lực, tin tưởng và kiểm soát sẽ trồi lên để được chữa lành — người bạn đời là tấm gương phản chiếu những phần sâu kín nhất của bạn. Hôn nhân với bạn là con đường tu: qua người kia, bạn được tái sinh.',
      advice:
        'Hãy chọn người dám đi vào chiều sâu cùng bạn và giữ sự cân bằng quyền lực — yêu nhau là nắm tay, không phải nắm quyền. Khi xung đột, hãy hỏi "mình đang sợ mất gì?" trước khi phản ứng.',
    },
    8: {
      title: 'Sao Diêm Vương tại Nhà 8',
      description:
        'Diêm Vương trở về vương quốc của chính nó — nhà của chuyển hóa, bí ẩn và sức mạnh ngầm — nên quyền năng nơi đây đậm đặc nhất. Bạn là người của những chiều sâu: tâm lý, huyền học, tài chính lớn, những bí mật của sống và chết đều là lãnh địa tự nhiên của bạn. Cuộc đời bạn được đánh dấu bằng những cuộc tái sinh trọn vẹn — bạn biết cảm giác mất tất cả và dựng lại từ tro, và chính điều đó cho bạn sự không sợ hãi hiếm có. Người khác tìm đến bạn trong khủng hoảng của họ, vì họ cảm nhận được: bạn đã đi qua bóng tối và biết đường ra.',
      advice:
        'Hãy nhận lấy vai trò người dẫn đường qua khủng hoảng — trị liệu, cố vấn, chữa lành — đó là nơi quyền năng của bạn phụng sự cao nhất. Buông bỏ là siêu năng lực của bạn; hãy dùng nó thường xuyên hơn.',
    },
    9: {
      title: 'Sao Diêm Vương tại Nhà 9',
      description:
        'Quyền năng chuyển hóa thấm vào căn nhà của niềm tin — với bạn, chân lý không phải món trang sức mà là vấn đề sống còn. Bạn truy tìm ý nghĩa cuộc đời với sự khốc liệt của kẻ đào kho báu: đập vỡ những niềm tin nông cạn, đào xuyên qua giáo điều, cho đến khi chạm vào điều cốt lõi. Thế giới quan của bạn sẽ chết đi sống lại vài lần trong đời — và mỗi lần tái sinh, nó sâu sắc hơn. Những chuyến đi xa và tri thức cao có sức mạnh chuyển hóa bạn tận gốc rễ; và khi bạn giảng về điều mình tin, lời bạn có lửa.',
      advice:
        'Hãy theo đuổi tri thức chuyển hóa con người — tâm lý học chiều sâu, triết học, huyền học — đó là con đường của bạn. Nhưng nhớ: niềm tin mãnh liệt nhất cũng cần chừa cửa cho sự thay đổi.',
    },
    10: {
      title: 'Sao Diêm Vương tại Nhà 10',
      description:
        'Quyền năng Diêm Vương tỏa trên đỉnh sự nghiệp — bạn được sinh ra để nắm giữ quyền lực thật và tạo ảnh hưởng sâu rộng lên thế giới. Con đường công danh của bạn có thể trải qua những lần sụp đổ và tái thiết ngoạn mục — mỗi lần "chết nghề" là một lần định hướng lại về đúng sứ mệnh. Bạn không hợp với những vai trò trang trí; bạn cần công việc cho phép bạn chuyển hóa hệ thống, tổ chức hay cuộc đời người khác một cách thực chất. Người đời cảm nhận được trọng lượng của bạn — bạn không cần ồn ào để có uy quyền.',
      advice:
        'Hãy theo đuổi quyền lực với câu hỏi thường trực: "để phụng sự điều gì?" — đó là la bàn giữ bạn khỏi vực. Sự liêm chính là tài sản nghề nghiệp quý nhất của bạn; mất gì cũng dựng lại được, trừ nó.',
    },
    11: {
      title: 'Sao Diêm Vương tại Nhà 11',
      description:
        'Quyền năng chuyển hóa chảy vào dòng cộng đồng — bạn không tham gia nhóm để xã giao; bạn đến để cùng kiến tạo những thay đổi thực chất. Tình bạn của bạn ít mà sâu, thường là những kết nối định mệnh làm thay đổi quỹ đạo đời nhau. Bạn nhìn thấu động lực ngầm của các tập thể — ai thật sự nắm quyền, dòng chảy nào đang vận hành dưới bề mặt. Lý tưởng của bạn mang tầm chuyển hóa xã hội: bạn không muốn sơn lại bức tường, bạn muốn xây lại nền móng.',
      advice:
        'Hãy gắn bó với những cộng đồng có chiều sâu và mục đích thật — đám đông ồn ào làm bạn cạn năng lượng. Trong nhóm, dùng sự thấu thị để gắn kết, đừng để nó thành công cụ thao túng.',
    },
    12: {
      title: 'Sao Diêm Vương tại Nhà 12',
      description:
        'Quyền năng Diêm Vương chìm vào đại dương tiềm thức — sức mạnh lớn nhất của bạn nằm ở những tầng sâu mà chính bạn phải hành trình cả đời để khám phá. Bạn mang trong vô thức những dòng năng lượng cổ xưa: nỗi sợ không tên, sức mạnh chưa khai mở, di sản tâm linh của nhiều thế hệ. Hành trình của bạn là cuộc khảo cổ nội tâm — mỗi bóng tối được đưa ra ánh sáng đều hóa thành quyền năng chữa lành. Bạn có khả năng thấu cảm với những vùng tối của nhân loại, và chính vì thế, có thể trở thành người chữa lành thầm lặng phi thường.',
      advice:
        'Hãy làm việc với tiềm thức một cách có hướng dẫn — thiền sâu, trị liệu, phân tích giấc mơ — kho báu của bạn cần được khai quật cẩn trọng. Đừng sợ bóng tối trong mình; nó chỉ là sức mạnh chưa được gọi tên.',
    },
  },
};
