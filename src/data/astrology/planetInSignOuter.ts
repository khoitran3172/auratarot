// Luận giải "hành tinh tại cung" cho 5 hành tinh vòng ngoài:
// Sao Mộc, Sao Thổ, Sao Thiên Vương, Sao Hải Vương, Sao Diêm Vương.
// Với ba hành tinh thế hệ (Thiên Vương, Hải Vương, Diêm Vương), mỗi mục
// nói cả tầng ý nghĩa thế hệ lẫn cách năng lượng ấy chạm vào đời sống cá nhân.

import { SignId, PlanetInSignReading } from './types';

export const planetInSignOuter: Record<
  'jupiter' | 'saturn' | 'uranus' | 'neptune' | 'pluto',
  Record<SignId, PlanetInSignReading>
> = {
  jupiter: {
    aries: {
      title: 'Sao Mộc tại Bạch Dương (Jupiter in Aries)',
      description:
        'Sao Mộc — vì sao của may mắn và sự mở rộng — bùng cháy trong ngọn lửa tiên phong của Bạch Dương. Vận may đến với bạn khi bạn dám đi trước, dám là người đầu tiên đặt chân lên con đường chưa ai mở. Đức tin của bạn không nằm trong sách vở mà trong hành động: bạn tin rằng cứ bước đi, cánh cửa sẽ tự mở. Tinh thần lạc quan ấy có sức lan tỏa, khiến người khác muốn đứng dậy và đi cùng bạn. Cuộc đời thưởng cho bạn lòng can đảm nhiều hơn là sự chờ đợi.',
      strengths:
        'Lòng dũng cảm tự nhiên, khả năng truyền cảm hứng hành động và nắm bắt cơ hội nhanh hơn người khác. Bạn lớn lên qua mỗi lần dám thử.',
      challenges:
        'Sự bốc đồng có thể khiến bạn mở rộng quá nhanh, hứa quá nhiều, hoặc bỏ dở khi ngọn lửa ban đầu nguội đi. Cái tôi đôi khi che mờ tầm nhìn xa.',
      advice:
        'Hãy giữ ngọn lửa tiên phong nhưng học cách hoàn tất điều mình khởi xướng. May mắn của bạn nhân lên khi can đảm đi cùng kiên trì.',
    },
    taurus: {
      title: 'Sao Mộc tại Kim Ngưu (Jupiter in Taurus)',
      description:
        'Tại Kim Ngưu, Sao Mộc gieo hạt may mắn vào lòng đất — chậm rãi, chắc chắn, và sinh sôi bền bỉ. Bạn có biệt tài làm cho mọi thứ mình chạm vào trở nên trù phú hơn: tài chính, khu vườn, một mối quan hệ, hay chính cảm giác bình yên trong nhà. Triết lý sống của bạn giản dị mà sâu sắc: hạnh phúc là điều có thể chạm vào được — một bữa ăn ngon, một cái ôm, một mùa gặt xứng đáng với công vun trồng. Đức tin của bạn lớn lên qua những gì đã được thử thách bởi thời gian. Vũ trụ ban tặng bạn khả năng biến giá trị thành của cải, cả vật chất lẫn tinh thần.',
      strengths:
        'Trực giác tốt về tiền bạc và giá trị, sự kiên nhẫn để chờ quả chín, và khả năng tận hưởng đời sống một cách trọn vẹn.',
      challenges:
        'Dễ rơi vào hưởng thụ quá độ, tích trữ vì bất an, hoặc bám vào sự an toàn vật chất đến mức ngại thay đổi.',
      advice:
        'Hãy nhớ rằng sự trù phú thật sự cần được luân chuyển. Cho đi một phần những gì bạn gặt được — đó là cách hạt giống may mắn của bạn tiếp tục nảy mầm.',
    },
    gemini: {
      title: 'Sao Mộc tại Song Tử (Jupiter in Gemini)',
      description:
        'Sao Mộc tại Song Tử ở vị trí tù — vì sao của bức tranh lớn phải sống trong vương quốc của những chi tiết lấp lánh. Nhưng chính nghịch lý ấy làm nên món quà của bạn: trí tò mò vô tận, khả năng học hỏi từ mọi cuộc trò chuyện, mọi cuốn sách, mọi ngã rẽ tình cờ. May mắn đến với bạn qua lời nói, chữ viết, những mối quan hệ và thông tin đúng lúc. Triết lý sống của bạn không phải một chân lý duy nhất mà là một tấm thảm dệt từ ngàn mảnh hiểu biết. Bạn là người đưa tin của vũ trụ — mang ý tưởng từ nơi này gieo xuống nơi khác.',
      strengths:
        'Đầu óc nhanh nhạy, tài ăn nói và kết nối, khả năng nhìn thấy nhiều mặt của một vấn đề. Bạn học gì cũng nhanh.',
      challenges:
        'Kiến thức rộng nhưng dễ nông; tâm trí tản mát có thể khiến bạn khó cam kết với một niềm tin hay một con đường đủ lâu để nó đơm hoa.',
      advice:
        'Thỉnh thoảng hãy dừng lại và hỏi: trong ngàn điều mình biết, điều gì mình thật sự tin? Chiều sâu sẽ biến thông tin của bạn thành trí tuệ.',
    },
    cancer: {
      title: 'Sao Mộc tại Cự Giải (Jupiter in Cancer)',
      description:
        'Đây là vị trí vượng địa của Sao Mộc — nơi vì sao nhân từ nhất được nuôi dưỡng trong dòng nước ấm của Cự Giải. Lòng tốt nơi bạn không phải là lựa chọn mà là bản năng: bạn mở rộng bằng cách che chở, làm giàu bằng cách nuôi dưỡng. May mắn của bạn thường đến qua gia đình, mái nhà, đất đai, và những người xem bạn như chốn nương tựa. Đức tin của bạn mang hình dáng của tình mẫu tử vũ trụ — niềm tin rằng đời sống về bản chất là tử tế, rằng ai gieo yêu thương sẽ gặt được chở che. Trái tim bạn càng rộng, ngôi nhà vận mệnh của bạn càng lớn.',
      strengths:
        'Trực giác cảm xúc sâu sắc, khả năng khiến người khác cảm thấy an toàn, và phúc phần tự nhiên trong chuyện nhà cửa, gia đạo.',
      challenges:
        'Dễ bao bọc quá mức, nuông chiều cảm xúc bằng đồ ăn hay sự an toàn quen thuộc, và khó buông những người mình thương dù họ cần tự bay.',
      advice:
        'Hãy nhớ rằng nuôi dưỡng đẹp nhất khi nó giúp người khác đủ mạnh để rời tổ. Tình thương của bạn là phước lành — đừng để nó thành chiếc lồng êm ái.',
    },
    leo: {
      title: 'Sao Mộc tại Sư Tử (Jupiter in Leo)',
      description:
        'Sao Mộc tại Sư Tử là mặt trời gặp vì sao khuếch đại — ánh sáng trong bạn không thể không tỏa ra. Bạn mang trong tim một niềm tin vương giả: rằng đời sống là sân khấu lớn và mỗi người sinh ra để tỏa sáng theo cách riêng. Vận may đến khi bạn dám đứng giữa ánh đèn, dám sáng tạo, dám hào phóng một cách rực rỡ. Sự rộng lượng của bạn có tầm vóc — bạn cho đi như một vị vua ban thưởng, và kỳ lạ thay, càng cho càng được nhận về. Đức tin của bạn là đức tin vào phẩm giá con người, bắt đầu từ phẩm giá của chính mình.',
      strengths:
        'Sức hút tự nhiên, trái tim hào phóng, khả năng truyền lửa và nâng người khác lên cùng mình tỏa sáng.',
      challenges:
        'Niềm kiêu hãnh có thể phình thành tự mãn; nhu cầu được ngưỡng mộ đôi khi khiến bạn phô trương quá đà hoặc khó nghe lời góp ý.',
      advice:
        'Ánh sáng đẹp nhất của bạn là ánh sáng soi đường cho người khác. Hãy để sự vĩ đại của mình phục vụ điều lớn hơn cái tôi.',
    },
    virgo: {
      title: 'Sao Mộc tại Xử Nữ (Jupiter in Virgo)',
      description:
        'Tại Xử Nữ, Sao Mộc ở thế tù — vì sao của tầm nhìn bao la phải cúi xuống nhìn từng chi tiết. Nhưng từ sự khiêm nhường ấy nảy sinh một dạng trí tuệ hiếm có: bạn hiểu rằng điều thiêng liêng ẩn trong những việc nhỏ làm bằng cả tấm lòng. May mắn đến với bạn qua sự tận tụy, qua kỹ năng được mài giũa, qua việc phụng sự âm thầm mà chính xác. Triết lý sống của bạn thực tế và trong lành: cải thiện được một điều nhỏ hôm nay là đã làm thế giới tốt hơn. Đức tin của bạn không ồn ào — nó nằm trong đôi tay chăm chỉ và một tâm trí muốn mọi thứ lành lặn.',
      strengths:
        'Óc phân tích tinh tường, đạo đức làm việc đáng nể, khả năng biến lý tưởng lớn thành quy trình khả thi.',
      challenges:
        'Dễ sa vào cầu toàn, lo lắng vụn vặt, hoặc đánh mất bức tranh lớn vì mải sửa từng dấu phẩy của cuộc đời.',
      advice:
        'Thỉnh thoảng hãy ngẩng lên khỏi danh sách việc cần làm và nhìn cánh rừng thay vì từng chiếc lá. Sự hoàn hảo thật sự bao gồm cả những điều chưa hoàn hảo.',
    },
    libra: {
      title: 'Sao Mộc tại Thiên Bình (Jupiter in Libra)',
      description:
        'Sao Mộc tại Thiên Bình mở rộng trái tim bạn về phía người khác — vận may của bạn luôn mang gương mặt của một mối quan hệ. Bạn lớn lên qua sự gặp gỡ: người bạn đời, cộng sự, người thầy, kẻ đối thoại đều là sứ giả mà vũ trụ gửi đến để mở những cánh cửa bạn không tự mở được. Triết lý sống của bạn xoay quanh công lý và cái đẹp — niềm tin rằng thế giới có thể hài hòa hơn nếu con người đối xử với nhau công bằng và tinh tế hơn. Bạn có tài làm người hòa giải, người kết nối những thái cực. Nơi nào có bạn, nơi đó dễ thở hơn, văn minh hơn.',
      strengths:
        'Duyên ngoại giao, óc thẩm mỹ rộng mở, khả năng nhìn thấy điều tốt ở cả hai phía và đem con người lại gần nhau.',
      challenges:
        'Mong muốn làm hài lòng tất cả có thể khiến bạn do dự, né tránh xung đột cần thiết, hoặc dựa quá nhiều vào người khác để định nghĩa mình.',
      advice:
        'Công bằng với người khác phải bao gồm cả công bằng với chính mình. Hãy dám chọn một phía khi lương tâm đã lên tiếng.',
    },
    scorpio: {
      title: 'Sao Mộc tại Thiên Yết (Jupiter in Scorpio)',
      description:
        'Tại Thiên Yết, Sao Mộc lặn xuống những vùng nước sâu nhất — may mắn của bạn không nằm trên bề mặt mà chôn trong lòng đất như kho báu. Bạn được ban cho lòng can đảm nhìn thẳng vào những điều người khác né tránh: cái chết, dục vọng, tiền bạc chung, những bí mật của tâm hồn. Chính ở những nơi tăm tối ấy, bạn tìm thấy vàng. Đức tin của bạn được tôi luyện qua khủng hoảng — mỗi lần tưởng như mất tất cả, bạn lại trồi lên mạnh mẽ và giàu có hơn về tinh thần. Triết lý sống của bạn: sự thật, dù đau đớn, luôn giải phóng.',
      strengths:
        'Trực giác sắc bén như lưỡi dao, khả năng tái sinh từ mất mát, và tài khai quật giá trị ẩn — trong con người, trong đầu tư, trong chính mình.',
      challenges:
        'Đam mê có thể thành ám ảnh; khát khao kiểm soát và sự nghi ngờ đôi khi khiến bạn khó đón nhận may mắn đến từ sự buông bỏ.',
      advice:
        'Hãy tin rằng không phải bí mật nào cũng cần nắm giữ, không phải quyền lực nào cũng cần kiểm soát. Phước lành lớn nhất của bạn đến khi bạn dám tin tưởng.',
    },
    sagittarius: {
      title: 'Sao Mộc tại Nhân Mã (Jupiter in Sagittarius)',
      description:
        'Đây là ngôi nhà miếu của Sao Mộc — vì sao trở về đúng cung mà nó cai quản, và mọi phẩm chất tốt đẹp nhất của nó nở rộ trong bạn. Tâm hồn bạn sinh ra để hướng về chân trời: du hành, triết học, tín ngưỡng, tri thức bậc cao — tất cả đều là con đường hành hương của bạn. May mắn theo bạn như một người bạn đồng hành trung thành, thường xuất hiện đúng lúc bạn dám đặt niềm tin vào điều lớn hơn mình. Bạn là người mang lửa của ý nghĩa: ở đâu có bạn, ở đó câu hỏi "sống để làm gì" lại được thắp sáng. Sự lạc quan của bạn không ngây thơ — nó là một dạng trí tuệ.',
      strengths:
        'Tinh thần lạc quan bất khuất, tầm nhìn rộng, lòng quảng đại và khả năng truyền niềm tin cho người đang lạc lối.',
      challenges:
        'Dễ hứa nhiều hơn khả năng, phán xét đạo đức quá vội, hoặc rong ruổi mãi mà quên gieo rễ ở đâu cả.',
      advice:
        'Chân trời sẽ luôn ở đó — hãy cho phép mình dừng lại đủ lâu để biến tầm nhìn thành công trình. Tự do đẹp nhất khi nó có mục đích.',
    },
    capricorn: {
      title: 'Sao Mộc tại Ma Kết (Jupiter in Capricorn)',
      description:
        'Tại Ma Kết, Sao Mộc ở thế hãm — sự bao la của nó bị núi đá kỷ luật ghìm lại. Nhưng chớ vội xem đó là thiệt thòi: vận may của bạn là loại vận may bền nhất, được xây bằng đá chứ không bằng gió. Bạn mở rộng theo cách của ngọn núi — chậm, vững, và cuối cùng cao hơn tất cả. Triết lý sống của bạn nghiêm cẩn: phần thưởng phải xứng với công sức, danh tiếng phải xứng với thực lực. Đức tin của bạn không nằm ở phép màu mà ở luật nhân quả — và chính vì thế, những gì bạn đạt được không ai lấy đi được.',
      strengths:
        'Tham vọng có kỷ luật, óc thực tế trong việc nắm bắt cơ hội, uy tín được tích lũy qua năm tháng.',
      challenges:
        'Dễ khắt khe với niềm vui, đo mọi thứ bằng thành tựu, hoặc bi quan đến mức bỏ lỡ những cơ hội đòi hỏi một bước nhảy của niềm tin.',
      advice:
        'Hãy cho phép mình tin vào những điều chưa chứng minh được. Đỉnh núi đẹp hơn nhiều khi bạn còn nhớ cười trên đường leo.',
    },
    aquarius: {
      title: 'Sao Mộc tại Bảo Bình (Jupiter in Aquarius)',
      description:
        'Sao Mộc tại Bảo Bình mở rộng tâm trí bạn về phía nhân loại — đức tin của bạn không dành cho một vị thần riêng mà cho tiềm năng tiến bộ của cả giống loài. May mắn đến với bạn qua bạn bè, cộng đồng, mạng lưới, và những ý tưởng đi trước thời đại. Bạn có khả năng nhìn thấy tương lai trong hiện tại — nơi người khác thấy điều kỳ quặc, bạn thấy điều sắp trở thành bình thường. Triết lý sống của bạn đề cao tự do tư tưởng và tình huynh đệ: chân lý phải thuộc về tất cả, không của riêng ai. Bạn lớn lên mỗi khi phá vỡ được một khuôn mẫu cũ kỹ.',
      strengths:
        'Tư duy cấp tiến, lòng bao dung với mọi khác biệt, khả năng quy tụ những con người xa lạ quanh một lý tưởng chung.',
      challenges:
        'Yêu nhân loại nói chung nhưng đôi khi xa cách với con người cụ thể; lý tưởng có thể trở nên trừu tượng đến lạnh lùng.',
      advice:
        'Hãy nhớ rằng tương lai tốt đẹp được xây từ những hành động tử tế nhỏ trong hiện tại. Cách mạng lớn nhất đôi khi là ngồi xuống lắng nghe một người.',
    },
    pisces: {
      title: 'Sao Mộc tại Song Ngư (Jupiter in Pisces)',
      description:
        'Theo truyền thống cổ điển, Sao Mộc là chủ tinh của Song Ngư — và tại đây, lòng nhân từ của nó tan vào đại dương vô biên. Bạn mang một trái tim không có hàng rào: nỗi đau của người lạ cũng làm bạn xót, niềm vui của kẻ khác cũng làm bạn ấm. Vận may của bạn vận hành theo cách huyền nhiệm — qua giấc mơ, trực giác, lòng trắc ẩn, và những sự tình cờ không thể giải thích. Đức tin của bạn không cần giáo đường: bạn cảm nhận điều thiêng liêng trong âm nhạc, trong nước mắt, trong khoảnh khắc tha thứ. Bạn được che chở bởi chính những gì bạn cho đi mà không tính toán.',
      strengths:
        'Lòng trắc ẩn vô điều kiện, trực giác tâm linh sâu, khả năng chữa lành người khác chỉ bằng sự hiện diện.',
      challenges:
        'Ranh giới mong manh khiến bạn dễ bị lợi dụng, dễ trốn vào mộng tưởng, hoặc hy sinh đến mức tự đánh mất mình.',
      advice:
        'Lòng tốt của bạn là vô tận, nhưng năng lượng thì không. Hãy học cách nói không như một hành động yêu thương — với chính mình.',
    },
  },

  saturn: {
    aries: {
      title: 'Sao Thổ tại Bạch Dương (Saturn in Aries)',
      description:
        'Sao Thổ tại Bạch Dương ở thế hãm — vị thầy của sự kiên nhẫn phải dạy đứa học trò nóng nảy nhất hoàng đạo. Bài học nghiệp quả của bạn xoay quanh ý chí: học cách khẳng định mình mà không cần đối đầu, hành động mà không cần bốc đồng. Thuở đầu đời, bạn có thể cảm thấy sự can đảm của mình bị kìm hãm, như thể mỗi lần muốn xông lên lại có bàn tay vô hình ghì lại. Nhưng chính sức ép ấy rèn nên một thứ quý hơn sự liều lĩnh: lòng dũng cảm có suy xét. Khi trưởng thành, bạn trở thành chiến binh biết chờ đúng thời điểm — và đó là loại chiến binh đáng sợ nhất.',
      strengths:
        'Ý chí được tôi luyện như thép qua lửa, khả năng tự lực và sức bền của người từng phải tự chứng minh mình.',
      challenges:
        'Nỗi sợ thất bại có thể bóp nghẹt sự khởi đầu; bạn dễ dao động giữa kìm nén quá mức và bùng nổ giận dữ dồn nén.',
      advice:
        'Đừng chờ đến khi hoàn toàn sẵn sàng mới hành động — sự sẵn sàng đến từ hành động. Hãy tha thứ cho những bước đi vụng về đầu tiên của mình.',
    },
    taurus: {
      title: 'Sao Thổ tại Kim Ngưu (Saturn in Taurus)',
      description:
        'Sao Thổ tại Kim Ngưu đặt bài học nghiệp quả của bạn vào vùng đất của giá trị và sự an toàn. Có thể bạn lớn lên với cảm giác thiếu thốn — về vật chất, hoặc về sự bảo đảm rằng mình đủ giá trị. Vị thầy nghiêm khắc này dạy bạn xây dựng sự vững chãi từ bên trong: tiền bạc, tài sản, và cả lòng tự trọng đều phải được bồi đắp từng viên gạch một. Bạn không được trao sẵn sự sung túc, nhưng được trao khả năng tạo ra nó — chậm rãi, chắc chắn, không gì lay chuyển nổi. Đến độ chín của đời, những gì bạn sở hữu đều mang dấu vân tay của chính bạn.',
      strengths:
        'Kỷ luật tài chính, sức bền bỉ phi thường, khả năng xây dựng nền móng vật chất và tinh thần vững như bàn thạch.',
      challenges:
        'Nỗi sợ thiếu thốn có thể khiến bạn keo kiệt với bản thân, bám chặt vào sự an toàn, hoặc đo giá trị mình bằng những gì sở hữu.',
      advice:
        'Hãy nhớ: bạn có giá trị trước khi bạn có tài sản. Sự an toàn thật sự là biết rằng dù mất hết, bạn vẫn xây lại được.',
    },
    gemini: {
      title: 'Sao Thổ tại Song Tử (Saturn in Gemini)',
      description:
        'Sao Thổ tại Song Tử đưa kỷ luật vào vương quốc của tâm trí và lời nói. Bài học của bạn là biến suy nghĩ thành cấu trúc: không nói cho vui, mà nói cho đúng; không biết cho rộng, mà biết cho chắc. Thuở nhỏ, bạn có thể từng cảm thấy lời mình không được lắng nghe, việc học hành nặng nề, hoặc tự nghi ngờ trí thông minh của mình. Nhưng chính nỗi nghi ngờ ấy khiến bạn học kỹ hơn, nghĩ sâu hơn người khác. Theo năm tháng, bạn trở thành người mà lời nói có trọng lượng — vì mỗi câu bạn thốt ra đều đã đi qua bộ lọc của sự cẩn trọng.',
      strengths:
        'Tư duy có hệ thống, lời nói đáng tin cậy, khả năng học sâu và truyền đạt những điều phức tạp một cách mạch lạc.',
      challenges:
        'Tự ti về trí tuệ hoặc khả năng diễn đạt; xu hướng suy nghĩ quá nhiều, nghi ngờ chính ý tưởng của mình trước khi ai kịp nghe nó.',
      advice:
        'Tiếng nói của bạn xứng đáng được cất lên. Hãy viết, hãy nói, hãy chia sẻ — sự thành thạo đến từ luyện tập, không phải từ im lặng chờ hoàn hảo.',
    },
    cancer: {
      title: 'Sao Thổ tại Cự Giải (Saturn in Cancer)',
      description:
        'Sao Thổ tại Cự Giải ở thế hãm — bức tường đá dựng giữa dòng nước cảm xúc. Bài học nghiệp quả của bạn nằm ở nơi mềm nhất: gia đình, sự nuôi dưỡng, cảm giác thuộc về. Có thể tuổi thơ của bạn thiếu vắng hơi ấm nào đó — một mái nhà trọn vẹn, một vòng tay vô điều kiện — khiến bạn sớm học cách tự ôm lấy mình. Vị thầy nghiêm khắc này không lấy đi khả năng yêu thương của bạn; ông dạy bạn xây dựng nó một cách có chủ đích. Khi trưởng thành, bạn có thể trở thành chính người che chở mà mình từng mong có — và tổ ấm bạn tạo ra vững chãi hơn bất kỳ tổ ấm nào được trao sẵn.',
      strengths:
        'Sức mạnh cảm xúc thầm lặng, lòng trung thành sâu sắc, khả năng trở thành điểm tựa vững vàng cho gia đình mình kiến tạo.',
      challenges:
        'Bức tường phòng vệ quanh trái tim khiến bạn khó bày tỏ nhu cầu được yêu thương; những tổn thương cũ dễ hóa thành sự lạnh lùng ngoài ý muốn.',
      advice:
        'Cho phép mình được mềm yếu trước người xứng đáng — đó không phải thất bại của bức tường, mà là mục đích của cánh cửa. Hãy nuôi dưỡng đứa trẻ bên trong bạn trước tiên.',
    },
    leo: {
      title: 'Sao Thổ tại Sư Tử (Saturn in Leo)',
      description:
        'Sao Thổ tại Sư Tử ở thế hãm — bóng tối kỷ luật phủ lên mặt trời kiêu hãnh. Bài học của bạn xoay quanh quyền được tỏa sáng: có thể từ nhỏ, sự hồn nhiên và niềm vui thể hiện bản thân của bạn từng bị xem nhẹ, khiến bạn nghi ngờ liệu mình có xứng đáng đứng giữa ánh đèn. Vị thầy này dạy một chân lý khắc nghiệt mà quý giá: ánh sáng thật sự không xin phép ai, nhưng phải được rèn từ thực chất. Bạn không được tỏa sáng dễ dàng — bạn phải kiếm được nó. Và khi đã kiếm được, ánh sáng của bạn có sức nặng của vàng ròng, không phải ánh lấp lánh của kim tuyến.',
      strengths:
        'Sự sáng tạo có kỷ luật, phẩm giá được tôi luyện, khả năng lãnh đạo bằng thực lực thay vì hào quang vay mượn.',
      challenges:
        'Nỗi sợ bị chê cười có thể khiến bạn giấu đi tài năng, kìm nén niềm vui, hoặc khắt khe quá mức với mọi biểu hiện của trái tim mình.',
      advice:
        'Đứa trẻ trong bạn vẫn xứng đáng được chơi đùa và vỗ tay. Hãy sáng tạo vì niềm vui trước, vì sự công nhận sau — đó là cách mặt trời của bạn mọc lại.',
    },
    virgo: {
      title: 'Sao Thổ tại Xử Nữ (Saturn in Virgo)',
      description:
        'Sao Thổ tại Xử Nữ là hai bậc thầy của sự chính xác gặp nhau — kỷ luật nhân đôi, trách nhiệm nhân đôi. Bài học nghiệp quả của bạn nằm ở sự phụng sự và lòng tự chấp nhận: học cách làm việc tận tụy mà không tự hành hạ, hoàn thiện mà không cầu toàn. Bạn có khả năng nhìn thấy mọi lỗi sai — và đáng tiếc, lỗi của chính mình luôn hiện rõ nhất. Vị thầy này rèn bạn thành người thợ cả của đời sống: tỉ mỉ, đáng tin, không gì qua mắt được. Nhưng bài thi cuối cùng của bạn không phải là sự hoàn hảo — mà là lòng khoan dung với những điều chưa hoàn hảo, bắt đầu từ bản thân.',
      strengths:
        'Kỹ năng được mài giũa đến tinh xảo, tinh thần trách nhiệm hiếm có, khả năng tổ chức và chữa lành những hệ thống rối ren.',
      challenges:
        'Tự phê bình khắc nghiệt, lo âu về sức khỏe và công việc, xu hướng làm việc đến kiệt sức để chứng minh giá trị bản thân.',
      advice:
        'Bạn không cần hoàn hảo để xứng đáng được nghỉ ngơi. Hãy đối xử với chính mình bằng sự chu đáo mà bạn vẫn dành cho công việc.',
    },
    libra: {
      title: 'Sao Thổ tại Thiên Bình (Saturn in Libra)',
      description:
        'Đây là vị trí vượng địa của Sao Thổ — vị quan tòa già tìm thấy chiếc cân công lý của mình. Bài học nghiệp quả của bạn xoay quanh sự cam kết và lẽ công bằng: các mối quan hệ trong đời bạn không bao giờ hời hợt, chúng là những lớp học nghiêm túc về trách nhiệm giữa người với người. Hôn nhân, cộng tác, giao ước — bạn có thể đến với chúng muộn hơn người khác, nhưng khi đến, bạn xây chúng bền như đá tạc. Bạn được ban khả năng phán xét điềm tĩnh, nhìn thấu hai mặt của mọi tranh chấp. Theo thời gian, người đời tìm đến bạn như tìm đến một trọng tài mà họ tin tưởng tuyệt đối.',
      strengths:
        'Cảm thức công lý sâu sắc, sự chung thủy trong cam kết, khả năng xây dựng những mối quan hệ và thỏa thuận đứng vững trước thời gian.',
      challenges:
        'Nỗi sợ chọn sai có thể khiến bạn trì hoãn cam kết; bạn dễ gánh trách nhiệm cho sự hài hòa của cả mối quan hệ một mình.',
      advice:
        'Mối quan hệ trưởng thành không phải là không có xung đột, mà là xung đột được giải quyết công bằng. Hãy tin vào khả năng phán đoán của mình — nó đã được tôi luyện kỹ rồi.',
    },
    scorpio: {
      title: 'Sao Thổ tại Thiên Yết (Saturn in Scorpio)',
      description:
        'Sao Thổ tại Thiên Yết đưa bài học nghiệp quả của bạn xuống những tầng sâu nhất của tâm hồn: lòng tin, sự mất mát, quyền lực và những ràng buộc thân mật. Cuộc đời có thể đã sớm dạy bạn rằng tin người là việc nguy hiểm — qua một phản bội, một bí mật gia đình, hay một mất mát không lời giải thích. Vị thầy này rèn bạn trong bóng tối, nhưng không phải để bạn ở lại đó: ông dạy bạn nghệ thuật kiểm soát bản thân thay vì kiểm soát người khác, buông bỏ thay vì siết chặt. Mỗi khủng hoảng bạn đi qua đều để lại một viên đá quý của sự thấu hiểu. Sức mạnh của bạn là loại sức mạnh đã từng xuống đáy vực và leo lên.',
      strengths:
        'Bản lĩnh tâm lý phi thường, khả năng đối diện điều người khác né tránh, sự kiên cường được tôi qua khủng hoảng thực sự.',
      challenges:
        'Khó tin tưởng và khó buông bỏ; nỗi sợ bị tổn thương có thể hóa thành nhu cầu kiểm soát hoặc những bức tường không ai vượt qua nổi.',
      advice:
        'Tổn thương cũ không phải bản án chung thân. Hãy cho phép mình tin lại — từng chút một, với người đã chứng minh — đó là sự chuyển hóa sâu nhất của bạn.',
    },
    sagittarius: {
      title: 'Sao Thổ tại Nhân Mã (Saturn in Sagittarius)',
      description:
        'Sao Thổ tại Nhân Mã đặt kỷ luật lên đôi cánh của niềm tin. Bài học nghiệp quả của bạn là thử thách đức tin: những triết lý vay mượn sẽ lần lượt sụp đổ cho đến khi bạn tự xây được hệ giá trị của riêng mình — bằng trải nghiệm, bằng hoài nghi lành mạnh, bằng cả những lần vỡ mộng. Bạn không được phép tin dễ dãi; vũ trụ đòi bạn kiểm chứng mọi chân lý trước khi ký tên vào nó. Hành trình ấy có thể cô đơn — giữa những người tin nhanh và sống vội, bạn là kẻ hành hương đi chậm. Nhưng đích đến của bạn là thứ hiếm ai có: một niềm tin không gì lay chuyển nổi, vì nó được xây bằng chính đời bạn.',
      strengths:
        'Trí tuệ thực chứng, đạo đức nhất quán, khả năng giảng dạy và dẫn đường bằng những chân lý đã được sống chứ không chỉ được đọc.',
      challenges:
        'Khủng hoảng niềm tin có thể khiến bạn hoài nghi đến cay đắng, hoặc ngược lại bám cứng vào giáo điều như chiếc phao an toàn.',
      advice:
        'Hãy để mỗi lần vỡ mộng là một lần lọc, không phải một lần đóng cửa. Đức tin trưởng thành biết sống chung với câu hỏi.',
    },
    capricorn: {
      title: 'Sao Thổ tại Ma Kết (Saturn in Capricorn)',
      description:
        'Đây là ngôi nhà miếu của Sao Thổ — vị thầy già trở về chính vương quốc đá của mình, và sức mạnh của ông trong bạn là thuần khiết nhất. Bạn sinh ra với hiểu biết bẩm sinh về luật của thời gian: mọi thứ giá trị đều phải được xây, được trả giá, được chờ đợi. Tham vọng của bạn không ồn ào mà như mạch ngầm — bền bỉ chảy suốt nhiều thập kỷ về phía đỉnh núi đã chọn. Tuổi trẻ của bạn có thể nặng nhọc hơn bạn bè, gánh trách nhiệm sớm hơn, già dặn trước tuổi. Nhưng vũ trụ có một giao ước với những người con của Sao Thổ: càng về sau, đời càng nhẹ — vì bạn đã trả trước những món nợ mà người khác trả sau.',
      strengths:
        'Kỷ luật thép, tầm nhìn dài hạn, khả năng gánh vác và xây dựng những công trình — sự nghiệp, gia tộc, di sản — đứng vững hàng thập kỷ.',
      challenges:
        'Dễ đồng nhất bản thân với thành tựu, làm việc đến quên sống, và khắc nghiệt với chính mình như với một người làm công không bao giờ đủ tốt.',
      advice:
        'Đỉnh núi không chạy đi đâu cả. Hãy nhớ rằng bạn leo núi để sống một đời đáng sống — đừng để cuộc leo trở thành toàn bộ cuộc đời.',
    },
    aquarius: {
      title: 'Sao Thổ tại Bảo Bình (Saturn in Aquarius)',
      description:
        'Theo truyền thống cổ điển, Sao Thổ cũng là chủ tinh của Bảo Bình — tại đây, vị thầy già mang gương mặt của nhà kiến trúc sư xã hội. Bài học nghiệp quả của bạn xoay quanh chỗ đứng giữa cộng đồng: bạn có thể từng cảm thấy mình là kẻ ngoài cuộc, khác biệt một cách cô đơn. Nhưng chính khoảng cách ấy cho bạn con mắt nhìn ra những cấu trúc xã hội cần được xây lại. Bạn không nổi loạn ồn ào — bạn cải cách có phương pháp, biến lý tưởng thành thể chế, biến tầm nhìn thành hệ thống vận hành được. Tình bạn và lý tưởng của bạn đều được chọn lọc kỹ và giữ gìn bền bỉ. Bạn là người xây những cây cầu mà thế hệ sau sẽ đi qua.',
      strengths:
        'Tư duy hệ thống sắc bén, lòng trung thành với lý tưởng và bằng hữu, khả năng hiện thực hóa những ý tưởng cấp tiến một cách kỷ luật.',
      challenges:
        'Cảm giác lạc lõng giữa đám đông, sự xa cách cảm xúc, và xu hướng giấu nỗi cô đơn sau lớp vỏ lý trí.',
      advice:
        'Khác biệt của bạn là chức phận, không phải hình phạt. Hãy tìm đến những cộng đồng cùng tần số — ở đó, kẻ ngoài cuộc trở thành người kiến tạo.',
    },
    pisces: {
      title: 'Sao Thổ tại Song Ngư (Saturn in Pisces)',
      description:
        'Sao Thổ tại Song Ngư là nghịch lý đẹp: dựng cấu trúc giữa đại dương, tìm hình hài cho điều vô hình. Bài học nghiệp quả của bạn là đặt ranh giới cho lòng trắc ẩn và kỷ luật cho giấc mơ. Bạn nhạy cảm với nỗi khổ của thế gian, nhưng vị thầy này không cho phép bạn chỉ xót thương suông — ông đòi bạn biến lòng trắc ẩn thành việc làm cụ thể: một bàn tay chìa ra, một công trình nghệ thuật hoàn tất, một thực hành tâm linh đều đặn. Nỗi buồn vô danh đôi khi ghé thăm bạn như sương mù; hãy xem đó là lời nhắc rằng tâm hồn bạn cần được chăm sóc nghiêm túc như thân thể. Khi học xong bài, bạn trở thành người hiếm hoi: vừa mơ được, vừa xây được giấc mơ.',
      strengths:
        'Trí tưởng tượng có kỷ luật, lòng trắc ẩn thực tế, khả năng đem trật tự đến những vùng hỗn mang — trong nghệ thuật, trong chữa lành, trong tâm linh.',
      challenges:
        'Nỗi sợ và u sầu mơ hồ khó gọi tên; xu hướng hy sinh quá mức hoặc trốn tránh trách nhiệm bằng sự mơ màng.',
      advice:
        'Đặt tên cho nỗi sợ là đã thuần hóa được một nửa nó. Hãy cho giấc mơ của bạn một thời khóa biểu — điều huyền nhiệm cũng cần kỷ luật để thành hình.',
    },
  },

  uranus: {
    aries: {
      title: 'Sao Thiên Vương tại Bạch Dương (Uranus in Aries)',
      description:
        'Sao Thiên Vương đi qua Bạch Dương khoảng bảy năm, ghi dấu một thế hệ của những người khai phá — thế hệ tin rằng tương lai không được chờ đợi mà phải được xông vào. Ở tầng tập thể, đây là làn sóng của khởi nghiệp, của cá nhân dám đứng lên một mình thách thức trật tự cũ. Trong đời sống cá nhân, năng lượng ấy chạm vào bạn như một dòng điện ở ý chí: bạn dị ứng với việc bị ra lệnh, và những bước ngoặt lớn của đời bạn thường đến đột ngột, do chính bạn châm ngòi. Tự do với bạn nghĩa là quyền tự khởi xướng. Bạn mang trong mình ngọn lửa của người mở đường không xin phép.',
      strengths:
        'Bản năng tiên phong điện xẹt, lòng can đảm phá vỡ lối mòn, khả năng khởi sự những điều chưa từng có tiền lệ.',
      challenges:
        'Sự bốc đồng cộng hưởng với nổi loạn dễ thành liều lĩnh; bạn có thể đập bỏ những thứ đáng giữ chỉ vì chúng cũ.',
      advice:
        'Hãy hỏi mình: ta nổi loạn vì điều gì, hay chỉ chống lại điều gì? Cách mạng có mục đích mới làm nên thời đại.',
    },
    taurus: {
      title: 'Sao Thiên Vương tại Kim Ngưu (Uranus in Taurus)',
      description:
        'Sao Thiên Vương tại Kim Ngưu ở thế hãm — tia sét đánh xuống mặt đất vững chãi nhất, và chính vì thế tạo ra những chấn động sâu nhất. Thế hệ mang vị trí này chứng kiến và kiến tạo cuộc cách mạng về vật chất: tiền tệ đổi dạng, cách con người sở hữu, canh tác, và định nghĩa giá trị đều bị lật lại từ gốc. Trong đời sống cá nhân, năng lượng ấy chạm vào bạn ở vùng an toàn: tài chính và những giá trị tưởng như bất biến của bạn thỉnh thoảng bị rung lắc, buộc bạn xây lại trên nền mới. Bạn được mời gọi trở thành người cách tân thực tế — đổi mới những gì chạm vào được. Sự vững chãi thật sự của bạn không nằm ở việc giữ nguyên, mà ở khả năng đứng vững qua mọi biến động.',
      strengths:
        'Khả năng cách tân điềm tĩnh, biến ý tưởng đột phá thành kết quả cụ thể, và bản lĩnh làm lại từ đầu khi nền cũ sụp.',
      challenges:
        'Giằng co giữa khát khao ổn định và những biến cố buộc phải thay đổi; dễ bám trụ quá lâu rồi vỡ òa đột ngột.',
      advice:
        'Hãy chủ động đổi mới trước khi đời sống buộc bạn đổi mới. Tài sản bền nhất của bạn là khả năng thích nghi.',
    },
    gemini: {
      title: 'Sao Thiên Vương tại Song Tử (Uranus in Gemini)',
      description:
        'Sao Thiên Vương tại Song Tử đánh dấu một thế hệ của cuộc cách mạng tư duy và truyền thông — những người sinh ra để nối lại dây thần kinh của nhân loại bằng ngôn ngữ mới, công nghệ mới, cách học mới. Ở tầng tập thể, đây là làn sóng phá vỡ độc quyền tri thức: thông tin phải tự do như không khí. Trong đời sống cá nhân, năng lượng ấy khiến tâm trí bạn lóe sáng bất chợt — những ý tưởng đến như sét, những kết nối không ai ngờ tới. Bạn nói chuyện với mọi tầng lớp, học bằng những con đường không ai dạy, và dị ứng với lối tư duy đóng khung. Mỗi cuộc trò chuyện của bạn đều có thể là một cánh cửa mở vào tương lai.',
      strengths:
        'Trí tuệ nhanh như điện, tài tiếp cận ý tưởng mới trước đám đông, khả năng làm cầu nối giữa các thế giới tư tưởng xa lạ.',
      challenges:
        'Tâm trí quá tải và phân mảnh; bạn dễ nhảy từ ý tưởng này sang ý tưởng khác mà không kịp để cái nào bén rễ.',
      advice:
        'Tia sét cần cột thu lôi để thành năng lượng hữu dụng. Hãy chọn vài ý tưởng xứng đáng và dẫn chúng xuống đất.',
    },
    cancer: {
      title: 'Sao Thiên Vương tại Cự Giải (Uranus in Cancer)',
      description:
        'Sao Thiên Vương tại Cự Giải ghi dấu một thế hệ làm cách mạng ngay tại mái nhà — những người định nghĩa lại gia đình, quê hương, và ý nghĩa của sự thuộc về. Ở tầng tập thể, đây là làn sóng rời làng ra phố, phá vỡ khuôn mẫu gia đình truyền thống để tìm những hình thái tổ ấm mới. Trong đời sống cá nhân, năng lượng ấy chạm vào gốc rễ của bạn: đời sống gia đình có thể nhiều biến động, nhiều lần chuyển dời, hoặc đơn giản là bạn không thể sống y như cha mẹ mình đã sống. Trực giác của bạn sắc bén một cách kỳ lạ, đến như những chớp lóe từ vô thức. Tổ ấm của bạn phải là nơi bạn được tự do là chính mình — nếu không, nó chưa phải là nhà.',
      strengths:
        'Trực giác đột phá, sự dũng cảm cảm xúc để rời khỏi khuôn mẫu cũ, khả năng kiến tạo những hình thái gia đình và cộng đồng mới mẻ mà ấm áp.',
      challenges:
        'Cảm giác bất an về gốc rễ, giằng xé giữa nhu cầu được thuộc về và nhu cầu được tự do.',
      advice:
        'Nhà không nhất thiết phải giống bất kỳ ngôi nhà nào từng có. Hãy cho phép mình xây tổ ấm theo bản thiết kế của trái tim bạn.',
    },
    leo: {
      title: 'Sao Thiên Vương tại Sư Tử (Uranus in Leo)',
      description:
        'Sao Thiên Vương tại Sư Tử ở thế hãm — vì sao của tập thể đứng giữa cung của cái tôi rực rỡ, tạo nên một thế hệ khẳng định: mỗi cá nhân là một tác phẩm độc bản. Ở tầng tập thể, đây là làn sóng giải phóng sự thể hiện bản thân — nghệ thuật, tình yêu, sáng tạo đều phá rào. Trong đời sống cá nhân, năng lượng ấy khiến bạn không thể tỏa sáng theo khuôn có sẵn: con đường sáng tạo của bạn phải khác người, tình yêu của bạn phải có không gian thở, và bạn dị ứng với mọi sân khấu dựng sẵn kịch bản. Trái tim bạn nổi loạn một cách vương giả. Bài toán của đời bạn: tỏa sáng độc đáo mà không cần phải một mình.',
      strengths:
        'Sáng tạo độc bản không thể sao chép, sức hút của kẻ dám khác biệt, khả năng truyền cảm hứng tự do cho người khác.',
      challenges:
        'Giằng co giữa khát khao được ngưỡng mộ và khát khao chẳng cần ai; cái tôi nổi loạn đôi khi cô lập chính bạn khỏi tình thân.',
      advice:
        'Khác biệt không có nghĩa là đơn độc. Ánh sáng riêng của bạn đẹp nhất khi hòa vào chòm sao chứ không tách khỏi bầu trời.',
    },
    virgo: {
      title: 'Sao Thiên Vương tại Xử Nữ (Uranus in Virgo)',
      description:
        'Sao Thiên Vương tại Xử Nữ đánh dấu thế hệ cách mạng hóa lao động, sức khỏe và sự phụng sự — những người đưa công nghệ vào đời sống thường nhật, lật lại cách con người làm việc, chữa bệnh, ăn uống. Ở tầng tập thể, đây là làn sóng của y học mới, sinh thái học, và tự động hóa. Trong đời sống cá nhân, năng lượng ấy chạm vào nếp sống hằng ngày của bạn: bạn không chịu nổi quy trình vô nghĩa, luôn nhìn ra cách làm tốt hơn, nhanh hơn, sạch hơn. Cơ thể bạn cũng là phòng thí nghiệm — bạn nhạy với những phương pháp chăm sóc sức khỏe khác thường mà hiệu quả. Món quà của bạn là biến sự đột phá thành điều hữu ích từng ngày.',
      strengths:
        'Óc cải tiến thực tiễn, khả năng nhìn ra lỗi hệ thống mà người trong cuộc không thấy, tài tối ưu hóa mọi quy trình.',
      challenges:
        'Sự bồn chồn trong công việc lặp lại, căng thẳng thần kinh khi mọi thứ thiếu trật tự, và xu hướng phê phán hệ thống đến mức quên xây giải pháp.',
      advice:
        'Đừng chỉ chỉ ra cái sai — hãy là người thiết kế cái đúng. Cuộc cách mạng của bạn nằm trong những cải tiến nhỏ làm thay đổi đời sống lớn.',
    },
    libra: {
      title: 'Sao Thiên Vương tại Thiên Bình (Uranus in Libra)',
      description:
        'Sao Thiên Vương tại Thiên Bình ghi dấu thế hệ định nghĩa lại tình yêu và giao ước — những người sinh ra giữa làn sóng lật lại hôn nhân, bình đẳng trong quan hệ, và công lý xã hội. Ở tầng tập thể, đây là cuộc cách mạng của chiếc cân: mọi quan hệ phải được cân lại trên nguyên tắc tự do và bình đẳng. Trong đời sống cá nhân, năng lượng ấy chạm vào cách bạn yêu và kết giao: bạn cần một mối quan hệ vừa gắn bó vừa không giam cầm, một người bạn đời đồng thời là người bạn tự do. Những gắn kết của bạn có thể bắt đầu hoặc chuyển hướng đột ngột, như thể vũ trụ thỉnh thoảng xáo lại những lá bài quan hệ của bạn. Bạn được mời gọi sáng tạo ra kiểu yêu thương của riêng mình.',
      strengths:
        'Tư duy bình đẳng tự nhiên, sức hấp dẫn của sự khác lạ tinh tế, khả năng giữ tình yêu tươi mới bằng sự tôn trọng tự do của nhau.',
      challenges:
        'Sợ ràng buộc khiến cam kết chập chờn; bạn có thể rời đi đột ngột thay vì ở lại thương lượng lại luật chơi.',
      advice:
        'Tự do trong tình yêu không phải là cửa thoát hiểm luôn mở, mà là giao ước được cả hai tự nguyện viết lại mỗi ngày. Hãy ở lại đủ lâu để viết.',
    },
    scorpio: {
      title: 'Sao Thiên Vương tại Thiên Yết (Uranus in Scorpio)',
      description:
        'Sao Thiên Vương tại Thiên Yết là tia sét đánh xuống vực sâu — thế hệ mang vị trí này sinh ra để phơi bày những điều cấm kỵ: tình dục, cái chết, quyền lực ngầm, những bí mật tài chính và tâm lý của xã hội đều bị kéo ra ánh sáng. Ở tầng tập thể, đây là làn sóng chuyển hóa triệt để — không cải cách nửa vời, mà đập đi xây lại từ móng. Trong đời sống cá nhân, năng lượng ấy cho bạn bản lĩnh đối diện những vùng tối mà người khác né tránh: bạn không sợ khủng hoảng, thậm chí lớn nhanh nhất trong khủng hoảng. Những biến cố đột ngột trong đời thường là cánh cửa tái sinh trá hình. Trực giác của bạn xuyên thấu như tia X — bạn nhìn thấy điều người ta giấu sau lời nói.',
      strengths:
        'Sức mạnh tái sinh phi thường, trực giác xuyên thấu, lòng can đảm chạm vào những sự thật mà xã hội né tránh.',
      challenges:
        'Cường độ cảm xúc dữ dội, xu hướng đập bỏ tất cả khi tổn thương, và sự cố chấp ngầm dưới vẻ ngoài đổi mới.',
      advice:
        'Không phải mọi cuộc lột xác đều cần một trận động đất. Hãy học nghệ thuật chuyển hóa từ tốn — con rắn thay da mà không cần tự thiêu.',
    },
    sagittarius: {
      title: 'Sao Thiên Vương tại Nhân Mã (Uranus in Sagittarius)',
      description:
        'Sao Thiên Vương tại Nhân Mã đánh dấu thế hệ giải phóng niềm tin — những người sinh ra giữa làn sóng toàn cầu hóa tư tưởng, khi biên giới của tôn giáo, giáo dục và văn hóa bị xô đổ. Ở tầng tập thể, đây là cuộc cách mạng của chân trời: chân lý không còn độc quyền của bất kỳ đền đài nào. Trong đời sống cá nhân, năng lượng ấy khiến bạn dị ứng với giáo điều: bạn phải tự tìm ra triết lý sống của mình, thường qua những chuyến đi xa, những nền văn hóa lạ, những người thầy không chính thống. Niềm tin của bạn có thể đổi hướng đột ngột — và mỗi lần như thế, tầm nhìn của bạn lại rộng thêm một khung trời. Bạn là công dân của tương lai, mang hộ chiếu của trí tò mò.',
      strengths:
        'Tư tưởng phóng khoáng vượt biên giới, khả năng tổng hợp những hệ tri thức xa lạ thành tầm nhìn mới, tinh thần phiêu lưu bất tận.',
      challenges:
        'Nổi loạn chống mọi khuôn khổ có thể khiến bạn thiếu điểm tựa; nhiệt huyết với chân lý mới dễ thành cuồng tín kiểu khác.',
      advice:
        'Tự do tư tưởng đẹp nhất khi đi cùng sự khiêm tốn. Hãy nhớ rằng chân trời luôn lùi xa — đó không phải thất bại, mà là lời mời đi tiếp.',
    },
    capricorn: {
      title: 'Sao Thiên Vương tại Ma Kết (Uranus in Capricorn)',
      description:
        'Sao Thiên Vương tại Ma Kết là tia sét đánh vào đỉnh núi quyền lực — thế hệ mang vị trí này sinh ra để cải tổ những cấu trúc tưởng như vĩnh cửu: nhà nước, tập đoàn, định chế, cả khái niệm sự nghiệp. Ở tầng tập thể, đây là làn sóng chứng kiến những đế chế cũ sụp đổ và những trật tự mới được dựng lên. Trong đời sống cá nhân, năng lượng ấy cho bạn con mắt nhìn xuyên qua mọi thẩm quyền: bạn tôn trọng năng lực thật nhưng không cúi đầu trước chức danh rỗng. Con đường sự nghiệp của bạn hiếm khi đi theo nấc thang truyền thống — bạn có thể đập bỏ chính cái thang để xây thang máy. Bạn là nhà cách mạng có kế hoạch: phá vỡ trật tự cũ một cách có trật tự.',
      strengths:
        'Khả năng cải cách hệ thống từ bên trong, tham vọng đi đôi với tầm nhìn đổi mới, bản lĩnh xây dựng cấu trúc mới trên nền đổ nát.',
      challenges:
        'Giằng co giữa khát khao địa vị và khát khao phá vỡ chính hệ thống ban phát địa vị; sự nghiệp có thể trải qua những cú xoay đột ngột.',
      advice:
        'Đừng đợi hệ thống cho phép bạn đổi mới nó. Hãy xây phiên bản tốt hơn — và để kết quả tự thuyết phục.',
    },
    aquarius: {
      title: 'Sao Thiên Vương tại Bảo Bình (Uranus in Aquarius)',
      description:
        'Đây là ngôi nhà miếu của Sao Thiên Vương — vì sao của cách mạng trở về chính cung của nó, và năng lượng đột phá ở đây thuần khiết nhất. Thế hệ mang vị trí này sinh ra giữa làn sóng kết nối nhân loại bằng công nghệ và lý tưởng mới — những người bản năng hiểu rằng tương lai thuộc về mạng lưới, không thuộc về tháp ngà. Ở tầng tập thể, đây là cuộc cách mạng của chính khái niệm cộng đồng. Trong đời sống cá nhân, năng lượng ấy khiến bạn sống trước thời đại của mình: ý tưởng của bạn thường bị xem là viển vông cho đến khi cả thế giới đuổi kịp. Tự do tư tưởng với bạn thiêng liêng như hơi thở. Bạn kết bạn với những tâm hồn đồng điệu vượt mọi ranh giới — tuổi tác, xứ sở, tầng lớp đều không là rào cản.',
      strengths:
        'Tầm nhìn tương lai bẩm sinh, óc sáng chế độc đáo, khả năng quy tụ cộng đồng quanh những lý tưởng tiến bộ.',
      challenges:
        'Sống quá nhiều ở tương lai khiến bạn lạc nhịp với hiện tại; sự lập dị có thể thành bức tường ngăn bạn với hơi ấm đời thường.',
      advice:
        'Tương lai cần bạn, nhưng hiện tại cũng cần bạn. Hãy thỉnh thoảng bước xuống từ vì sao của mình để nắm lấy một bàn tay người.',
    },
    pisces: {
      title: 'Sao Thiên Vương tại Song Ngư (Uranus in Pisces)',
      description:
        'Sao Thiên Vương tại Song Ngư là tia sét lóe lên giữa đại dương sương mù — thế hệ mang vị trí này sinh ra để cách mạng hóa đời sống tâm linh và trí tưởng tượng: tín ngưỡng thoát khỏi đền đài, nghệ thuật hòa vào công nghệ, lòng trắc ẩn tìm những hình thức biểu đạt chưa từng có. Ở tầng tập thể, đây là làn sóng hòa tan ranh giới giữa thực và ảo, giữa khoa học và huyền nhiệm. Trong đời sống cá nhân, năng lượng ấy chạm vào bạn qua trực giác đột khởi: những giấc mơ báo trước, những linh cảm đến như chớp, những trải nghiệm tâm linh không sách vở nào dạy. Con đường tinh thần của bạn không thể đóng khung trong giáo lý — nó là con đường tự do của riêng linh hồn bạn.',
      strengths:
        'Trực giác mang tính khải thị, trí tưởng tượng cách tân, khả năng cảm nhận những dòng chảy vô hình của thời đại trước khi chúng hiện hình.',
      challenges:
        'Ranh giới giữa trực giác và ảo tưởng dễ nhòe; bạn có thể trốn vào thế giới mộng để tránh thực tại cần thay đổi.',
      advice:
        'Hãy kiểm chứng linh cảm bằng đời thực — trực giác thật sẽ không sợ ánh sáng. Tia chớp tâm linh của bạn quý nhất khi soi đường cho người khác.',
    },
  },

  neptune: {
    aries: {
      title: 'Sao Hải Vương tại Bạch Dương (Neptune in Aries)',
      description:
        'Sao Hải Vương đi qua Bạch Dương ghi dấu một thế hệ mơ giấc mơ của người tiên phong — thế hệ mang lý tưởng chiến đấu cho điều thiêng liêng, biến hành động thành lời cầu nguyện. Ở tầng tập thể, đây là làn sóng của những cuộc thập tự chinh tinh thần mới: niềm tin phải được sống bằng hành động, không chỉ bằng chiêm nghiệm. Trong đời sống cá nhân, năng lượng ấy hòa tan ranh giới quanh ý chí của bạn: bạn được truyền cảm hứng mạnh mẽ bởi những lý tưởng anh hùng, nhưng đôi khi khó phân biệt giữa tiếng gọi thiêng liêng và ảo ảnh của cái tôi. Lòng can đảm của bạn có chiều kích tâm linh — bạn chiến đấu hay nhất khi chiến đấu cho điều lớn hơn mình.',
      strengths:
        'Lý tưởng hành động, khả năng truyền cảm hứng hy sinh vì điều cao đẹp, lòng can đảm được tiếp lửa bởi đức tin.',
      challenges:
        'Dễ ảo tưởng về sứ mệnh của mình, hành động bốc đồng nhân danh lý tưởng, hoặc vỡ mộng khi người hùng trong mình va vào thực tế.',
      advice:
        'Hãy để lý tưởng dẫn đường nhưng để thực tế cầm bản đồ. Người chiến binh tâm linh thật sự biết phân biệt giấc mơ đáng chiến đấu và ảo ảnh đáng buông.',
    },
    taurus: {
      title: 'Sao Hải Vương tại Kim Ngưu (Neptune in Taurus)',
      description:
        'Sao Hải Vương tại Kim Ngưu là đại dương thấm vào lòng đất — thế hệ mang vị trí này mơ giấc mơ về một thế giới vật chất được thánh hóa: thiên nhiên là đền thờ, của cải mang ý nghĩa tinh thần, cái đẹp hữu hình là cánh cửa vào điều vô hình. Ở tầng tập thể, đây là làn sóng tìm lại sự thiêng liêng trong đất đai, lương thực, thân thể. Trong đời sống cá nhân, năng lượng ấy cho bạn khả năng cảm nhận điều huyền nhiệm qua giác quan: một mùi hương, một bản nhạc, một khu vườn có thể đưa bạn chạm vào cõi sâu hơn. Nhưng nó cũng làm nhòe ranh giới quanh tiền bạc và giá trị — bạn cần tỉnh táo để không lý tưởng hóa vật chất hay tan biến tài sản vào những giấc mơ đẹp.',
      strengths:
        'Óc thẩm mỹ tinh tế gần như tâm linh, khả năng tìm thấy bình yên trong những điều giản dị, và bàn tay biến vật chất thành nghệ thuật.',
      challenges:
        'Mơ hồ trong chuyện tiền bạc, dễ bị quyến rũ bởi sự xa hoa mang vỏ bọc tinh thần, hoặc trì trệ trong những thói quen êm ái.',
      advice:
        'Hãy để cái đẹp nuôi tâm hồn nhưng giữ sổ sách bằng lý trí. Sự sung túc thiêng liêng nhất là biết đủ.',
    },
    gemini: {
      title: 'Sao Hải Vương tại Song Tử (Neptune in Gemini)',
      description:
        'Sao Hải Vương tại Song Tử là sương mù phủ lên vương quốc ngôn từ — thế hệ mang vị trí này mơ giấc mơ về sự giao tiếp không biên giới: ngôn ngữ trở thành thơ, thông tin trở thành phép màu, và mọi ý tưởng đều có thể nối liền nhân loại. Ở tầng tập thể, đây là làn sóng lãng mạn hóa tri thức và truyền thông. Trong đời sống cá nhân, năng lượng ấy cho bạn một tâm trí thấm đẫm trí tưởng tượng: bạn nghĩ bằng hình ảnh, nói bằng ẩn dụ, và học giỏi nhất khi kiến thức có nhạc tính. Trực giác của bạn vận hành qua lời nói — đôi khi bạn thốt ra điều mình chưa kịp hiểu, mà sau mới thấy đúng. Cái giá phải trả: ranh giới giữa sự thật và câu chuyện đẹp đôi khi mờ đi trong chính tâm trí bạn.',
      strengths:
        'Ngôn từ giàu chất thơ, trí tưởng tượng ngôn ngữ phong phú, khả năng cảm nhận điều người khác không nói thành lời.',
      challenges:
        'Dễ tin vào thông tin mơ hồ, kể chuyện hay đến mức tự thuyết phục cả mình, và tâm trí tản mát như sương khó nắm bắt.',
      advice:
        'Hãy dùng phép màu của ngôn từ để soi sáng, đừng để che phủ. Kiểm chứng trước khi tin, và tin trước khi kể lại.',
    },
    cancer: {
      title: 'Sao Hải Vương tại Cự Giải (Neptune in Cancer)',
      description:
        'Sao Hải Vương tại Cự Giải là đại dương trở về với vầng trăng — thế hệ mang vị trí này mơ giấc mơ về mái nhà lý tưởng, quê hương thiêng liêng, tình mẫu tử như một tôn giáo. Ở tầng tập thể, đây là làn sóng lãng mạn hóa gia đình và cội nguồn, nơi lòng yêu nước và tình quê được nâng thành huyền thoại. Trong đời sống cá nhân, năng lượng ấy cho bạn một trái tim thẩm thấu: bạn cảm nhận bầu không khí cảm xúc của gia đình như da cảm nhận thời tiết, và ký ức tuổi thơ trong bạn được nhuộm màu huyền ảo — vừa đẹp hơn vừa buồn hơn thực tế. Lòng trắc ẩn của bạn sâu nhất với những người thân yêu. Tổ ấm với bạn không chỉ là nơi ở, mà là một cõi tâm linh.',
      strengths:
        'Sự thấu cảm gia đình sâu sắc, khả năng tạo không gian chữa lành cho người thân, trí nhớ cảm xúc giàu chất thơ.',
      challenges:
        'Lý tưởng hóa gia đình hoặc quá khứ đến mức khó chấp nhận thực tại; ranh giới cảm xúc với người thân dễ nhòe thành gánh nặng.',
      advice:
        'Hãy yêu gia đình như họ là, không chỉ như bạn mơ họ là. Tổ ấm thật sự được xây từ sự thật được tha thứ, không từ ảo ảnh được gìn giữ.',
    },
    leo: {
      title: 'Sao Hải Vương tại Sư Tử (Neptune in Leo)',
      description:
        'Sao Hải Vương tại Sư Tử là đại dương phản chiếu mặt trời — thế hệ mang vị trí này mơ giấc mơ vàng son về sự vĩ đại: nghệ thuật trở thành huyền thoại, người nghệ sĩ trở thành thần tượng, và cả một thời đại say men sáng tạo lẫn hào quang. Ở tầng tập thể, đây là làn sóng sinh ra những giấc mộng lớn về vinh quang — cùng những vỡ mộng lớn khi ánh hào quang tan. Trong đời sống cá nhân, năng lượng ấy cho bạn khát khao được tỏa sáng vì điều cao đẹp: bạn không muốn nổi tiếng suông, bạn muốn cuộc đời mình là một tác phẩm có hồn. Trái tim bạn rung động trước cái đẹp sân khấu của đời sống. Bài học của bạn: phân biệt ánh sáng thật của tâm hồn với ánh đèn ảo của sự tung hô.',
      strengths:
        'Cảm hứng sáng tạo dồi dào, trái tim lãng mạn cao thượng, khả năng đem chất huyền thoại vào những gì mình tạo ra.',
      challenges:
        'Dễ say ánh hào quang, lý tưởng hóa bản thân hoặc người mình ngưỡng mộ, và hụt hẫng sâu sắc khi sân khấu tắt đèn.',
      advice:
        'Hãy sáng tạo cho điều bất tử trong bạn, không cho tràng vỗ tay. Ánh sáng không cần khán giả vẫn là ánh sáng.',
    },
    virgo: {
      title: 'Sao Hải Vương tại Xử Nữ (Neptune in Virgo)',
      description:
        'Sao Hải Vương tại Xử Nữ ở thế hãm — đại dương vô biên phải chảy qua những con kênh ngăn nắp. Thế hệ mang vị trí này mơ giấc mơ về sự phụng sự được thánh hóa: lao động là tu tập, chữa lành là thiên chức, sự hoàn hảo của chi tiết là con đường đến điều thiêng liêng. Ở tầng tập thể, đây là làn sóng đặt niềm tin vào khoa học, y tế và việc làm như những hình thức cứu rỗi mới. Trong đời sống cá nhân, năng lượng ấy cho bạn khả năng nhìn thấy điều huyền nhiệm trong việc nhỏ: nấu một bữa ăn bằng cả tấm lòng cũng là một nghi lễ. Nhưng nó cũng dệt sương mù vào sức khỏe và công việc — những lo âu mơ hồ về thân thể, cảm giác phụng sự không bao giờ đủ. Sự tận tụy của bạn cần được bảo vệ khỏi chính nó.',
      strengths:
        'Lòng tận tụy mang tính tâm linh, sự nhạy cảm với những liệu pháp chữa lành tinh tế, khả năng phụng sự âm thầm mà thiêng liêng.',
      challenges:
        'Lo âu mơ hồ về sức khỏe và sự hoàn hảo, hy sinh trong công việc đến mức tan biến, khó phân định đâu là trách nhiệm của mình.',
      advice:
        'Phụng sự không có nghĩa là tự xóa mình. Hãy chăm sóc người chăm sóc — chính là bạn — như một phần của nghi lễ thiêng liêng ấy.',
    },
    libra: {
      title: 'Sao Hải Vương tại Thiên Bình (Neptune in Libra)',
      description:
        'Sao Hải Vương tại Thiên Bình là đại dương soi vào chiếc gương quan hệ — thế hệ mang vị trí này mơ giấc mơ về tình yêu lý tưởng và hòa bình hoàn hảo: linh hồn tri kỷ, thế giới đại đồng, công lý như một bản giao hưởng. Ở tầng tập thể, đây là làn sóng lãng mạn hóa hôn nhân và hòa hợp, sinh ra cả những phong trào hòa bình lẫn những cuộc hôn nhân vỡ mộng vì kỳ vọng quá đẹp. Trong đời sống cá nhân, năng lượng ấy khiến bạn khao khát một tình yêu mang màu định mệnh: người ấy không chỉ là bạn đời mà phải là một nửa linh hồn. Khao khát ấy là món quà — nó khiến bạn yêu sâu và vị tha hiếm có — nhưng cũng là phép thử: học cách yêu một con người thật, với đầy đủ khuyết điểm, mà không ngừng tin vào điều đẹp đẽ.',
      strengths:
        'Tình yêu vị tha, lý tưởng hòa bình chân thành, óc thẩm mỹ thanh thoát và khả năng nhìn thấy phần đẹp nhất trong người khác.',
      challenges:
        'Lý tưởng hóa người yêu rồi vỡ mộng, hy sinh quá mức để giữ hòa khí, và né tránh xung đột bằng sương mù lảng tránh.',
      advice:
        'Tri kỷ không phải người hoàn hảo, mà là người bạn chọn nhìn bằng đôi mắt khoan dung mỗi ngày. Hãy yêu bằng mắt mở.',
    },
    scorpio: {
      title: 'Sao Hải Vương tại Thiên Yết (Neptune in Scorpio)',
      description:
        'Sao Hải Vương tại Thiên Yết là đại dương đổ vào vực thẳm — thế hệ mang vị trí này mơ những giấc mơ sâu và tối: khám phá vô thức, giải thiêng các cấm kỵ về dục vọng và cái chết, tìm sự siêu việt ở những vùng mà các thế hệ trước niêm phong. Ở tầng tập thể, đây là làn sóng vừa khai mở chiều sâu tâm lý nhân loại, vừa đối mặt với những cám dỗ của đam mê và sự lãng quên. Trong đời sống cá nhân, năng lượng ấy cho bạn một đời sống nội tâm mãnh liệt khác thường: bạn không thể yêu hời hợt, không thể tin nửa vời — mọi trải nghiệm đều phải chạm đáy mới thỏa. Trực giác của bạn đọc được những dòng chảy ngầm trong người khác. Hành trình của bạn là đem ánh sáng xuống vực, thay vì để vực nuốt ánh sáng.',
      strengths:
        'Chiều sâu tâm linh hiếm có, khả năng thấu cảm cả những góc tối của con người, sức mạnh chữa lành sinh ra từ việc đã đi qua bóng tối.',
      challenges:
        'Sức hút của những trải nghiệm cực đoan và những con đường lãng quên; cảm xúc mãnh liệt dễ nhấn chìm lý trí.',
      advice:
        'Vực sâu là nơi để khám phá, không phải nơi để định cư. Hãy lặn xuống với dây neo của kỷ luật tinh thần — và nhớ đường trồi lên.',
    },
    sagittarius: {
      title: 'Sao Hải Vương tại Nhân Mã (Neptune in Sagittarius)',
      description:
        'Sao Hải Vương tại Nhân Mã là đại dương hòa vào chân trời — thế hệ mang vị trí này mơ giấc mơ về chân lý không biên giới: tâm linh vượt khỏi tôn giáo, minh triết phương Đông gặp phương Tây, và cả nhân loại cùng hành hương về một ý nghĩa chung. Ở tầng tập thể, đây là làn sóng của những người tìm đạo bằng ba lô và trái tim mở, tin rằng mọi con đường đều dẫn về một đỉnh núi. Trong đời sống cá nhân, năng lượng ấy thắp trong bạn cơn khát ý nghĩa không gì dập tắt nổi: bạn có thể đi qua nhiều niềm tin, nhiều người thầy, nhiều vùng đất — mỗi chặng đều thật, mỗi chặng đều chưa đủ. Đó không phải sự thất lạc; đó là cách linh hồn bạn học. Tầm nhìn của bạn truyền cảm hứng cho người khác dám mơ xa hơn.',
      strengths:
        'Tâm hồn hành hương rộng mở, khả năng tổng hợp minh triết từ nhiều truyền thống, niềm tin lan tỏa vào ý nghĩa của đời sống.',
      challenges:
        'Dễ chạy theo những vị thầy và học thuyết hào nhoáng, lý tưởng hóa phương xa mà bỏ quên hiện tại, hứa với đời nhiều hơn chân mình bước được.',
      advice:
        'Chân lý bạn tìm ở chân trời cuối cùng phải sống được trong căn bếp nhà mình. Hãy kiểm nghiệm mọi minh triết bằng câu hỏi: nó có làm ta tử tế hơn không?',
    },
    capricorn: {
      title: 'Sao Hải Vương tại Ma Kết (Neptune in Capricorn)',
      description:
        'Sao Hải Vương tại Ma Kết là sương mù phủ lên đỉnh núi quyền lực — thế hệ mang vị trí này sinh ra khi nhân loại vừa lý tưởng hóa vừa vỡ mộng về các định chế: những giấc mơ về trật tự hoàn hảo, tập đoàn toàn cầu, thành công như một tôn giáo mới — và sự tan rã âm thầm của chính những đền đài ấy. Ở tầng tập thể, đây là làn sóng học bài học: cấu trúc nào không có linh hồn sẽ tự hòa tan. Trong đời sống cá nhân, năng lượng ấy mời gọi bạn đem giấc mơ vào công trình: bạn khao khát một sự nghiệp có ý nghĩa tinh thần, một thành công không phản bội lý tưởng. Bạn nhìn thấu vẻ hào nhoáng của địa vị — và chính vì thế, bạn được trao khả năng xây những cấu trúc có hồn.',
      strengths:
        'Khả năng kết hợp tầm nhìn lý tưởng với óc xây dựng thực tế, trực giác về sự thật đằng sau các thể chế, tham vọng có chiều sâu tâm linh.',
      challenges:
        'Vỡ mộng về sự nghiệp và thẩm quyền, mơ hồ giữa tham vọng thật của mình và kỳ vọng xã hội thấm vào như sương.',
      advice:
        'Hãy xây sự nghiệp như xây một ngôi đền: nền móng bằng kỷ luật, mái vòm bằng lý tưởng. Thành công không có ý nghĩa chỉ là thất bại được trang trí.',
    },
    aquarius: {
      title: 'Sao Hải Vương tại Bảo Bình (Neptune in Aquarius)',
      description:
        'Sao Hải Vương tại Bảo Bình là đại dương hòa vào bầu trời nhân loại — thế hệ mang vị trí này sinh ra giữa làn sóng kết nối toàn cầu, mơ giấc mơ về tình huynh đệ không biên giới: cộng đồng ảo mà chân tình, công nghệ phục vụ tâm linh, nhân loại như một cơ thể duy nhất. Ở tầng tập thể, đây là thời những lý tưởng đại đồng vừa thăng hoa vừa bị thử thách — giấc mơ kết nối có thể thành ảo ảnh kết nối. Trong đời sống cá nhân, năng lượng ấy cho bạn lòng trắc ẩn mang tầm nhân loại: bạn xót xa cho những con người chưa từng gặp, rung động trước những lý tưởng tập thể. Trực giác của bạn bắt sóng được tinh thần thời đại. Bài học của bạn: giữ cho tình yêu nhân loại không thay thế tình yêu con người cụ thể bên cạnh mình.',
      strengths:
        'Lý tưởng nhân đạo chân thành, trực giác về những chuyển động của thời đại, khả năng mơ những giấc mơ tập thể và truyền chúng đi xa.',
      challenges:
        'Dễ tan vào đám đông và những phong trào mơ hồ, kết nối với tất cả nhưng thân mật với rất ít.',
      advice:
        'Giấc mơ về nhân loại bắt đầu từ một người được bạn lắng nghe trọn vẹn. Hãy đem lý tưởng về gần — gần đến mức chạm được.',
    },
    pisces: {
      title: 'Sao Hải Vương tại Song Ngư (Neptune in Pisces)',
      description:
        'Đây là ngôi nhà miếu của Sao Hải Vương — vì sao của đại dương trở về chính đại dương của nó, và mọi quyền năng huyền nhiệm của nó dâng lên trọn vẹn nhất. Thế hệ mang vị trí này sinh ra giữa làn sóng thức tỉnh tâm linh lớn: ranh giới giữa các tôn giáo, giữa khoa học và huyền học, giữa thực và mộng đều tan chảy — nhân loại cùng lúc khát khao siêu việt và chới với trong ảo ảnh. Trong đời sống cá nhân, năng lượng ấy cho bạn một tâm hồn thấm nước: trực giác như thủy triều, lòng trắc ẩn không bến bờ, khả năng cảm nhận nỗi đau và vẻ đẹp của thế gian như của chính mình. Nghệ thuật, giấc mơ, sự tĩnh lặng là những ngôi đền tự nhiên của bạn. Món quà lớn nhất — và phép thử lớn nhất — của bạn là cùng một thứ: sự không có ranh giới.',
      strengths:
        'Trực giác và lòng trắc ẩn ở mức sâu nhất của hoàng đạo, năng khiếu nghệ thuật và chữa lành thiên bẩm, khả năng chạm vào điều thiêng liêng một cách tự nhiên.',
      challenges:
        'Dễ bị nhấn chìm bởi cảm xúc của thế gian, trốn thực tại vào mộng tưởng hoặc những con đường lãng quên, và tan biến trong nhu cầu của người khác.',
      advice:
        'Hãy xây cho mình những bờ đê dịu dàng: giờ giấc, nghi thức, những khoảng lặng có chủ đích. Đại dương trong bạn là phước lành — khi nó có bờ để trở về.',
    },
  },

  pluto: {
    aries: {
      title: 'Sao Diêm Vương tại Bạch Dương (Pluto in Aries)',
      description:
        'Sao Diêm Vương đi qua Bạch Dương suốt nhiều thập kỷ, tôi luyện một thế hệ của những kẻ khai phá không lùi bước — thế hệ chuyển hóa chính khái niệm về ý chí cá nhân, mở những vùng đất và những con đường chưa ai dám đi. Ở tầng tập thể, đây là làn sóng tái sinh tinh thần tiên phong: cái cũ phải bị đốt đi để cái mới được sinh ra từ tro. Trong đời sống cá nhân, năng lượng ấy đặt vào bạn một ý chí có sức mạnh núi lửa: khi bạn thật sự quyết tâm, gần như không gì cản nổi. Những trận chiến lớn nhất của đời bạn là những trận chiến với chính mình — và mỗi lần thắng, bạn tái sinh thành phiên bản mạnh hơn. Quyền lực của bạn nằm ở lòng can đảm dám bắt đầu lại từ con số không.',
      strengths:
        'Ý chí sinh tồn mãnh liệt, khả năng tự tái tạo sau mọi thất bại, sức mạnh khai phá những con đường chưa có dấu chân.',
      challenges:
        'Cơn giận và ý chí áp đảo có thể thiêu rụi cả những điều đáng giữ; xu hướng biến mọi việc thành cuộc chiến sống còn.',
      advice:
        'Sức mạnh lớn nhất không phải là chinh phục mà là làm chủ ngọn lửa của chính mình. Hãy chọn trận chiến xứng đáng — và tha cho những trận không cần đánh.',
    },
    taurus: {
      title: 'Sao Diêm Vương tại Kim Ngưu (Pluto in Taurus)',
      description:
        'Sao Diêm Vương tại Kim Ngưu ở thế hãm — quyền năng chuyển hóa đối đầu với sức ì của đất, và cuộc giằng co ấy diễn ra quanh những gì con người sở hữu. Thế hệ mang vị trí này chứng kiến và kiến tạo cuộc chuyển hóa tận gốc về của cải: cách tạo ra giá trị, cách phân chia tài nguyên, chính nền móng kinh tế của đời sống đều bị đào lên và đắp lại. Ở tầng tập thể, đây là bài học: không có sự sở hữu nào vĩnh viễn. Trong đời sống cá nhân, năng lượng ấy chạm vào cảm giác an toàn của bạn: những biến cố về tiền bạc, tài sản hay giá trị bản thân có thể buộc bạn xây lại từ móng — và mỗi lần như thế, bạn khám phá ra một sự giàu có không ai tịch thu được: sức bền của chính mình. Bạn có khả năng tích lũy và tái tạo của cải với sức mạnh thầm lặng đáng nể.',
      strengths:
        'Sức bền chuyển hóa phi thường, bản năng sâu sắc về giá trị thật, khả năng gây dựng lại sự sung túc từ đổ nát.',
      challenges:
        'Bám víu vào sở hữu như bám vào sự sống; nỗi sợ mất mát có thể hóa thành chiếm hữu — với tiền bạc lẫn con người.',
      advice:
        'Hãy học bài học của đất: mọi thứ chôn xuống đều có thể nảy mầm. Buông một thứ không phải là mất nó — là gieo nó.',
    },
    gemini: {
      title: 'Sao Diêm Vương tại Song Tử (Pluto in Gemini)',
      description:
        'Sao Diêm Vương tại Song Tử tôi luyện một thế hệ chuyển hóa chính ngôn ngữ và tư duy — những người sinh ra khi sức mạnh của thông tin được khai quật như một quyền lực mới: lời nói có thể lật đổ, ý tưởng có thể tái sinh cả một nền văn minh. Ở tầng tập thể, đây là làn sóng đào sâu vào tầng ngầm của tâm trí, khai sinh những cách hiểu hoàn toàn mới về con người. Trong đời sống cá nhân, năng lượng ấy cho bạn một tâm trí có sức xuyên phá: bạn không thỏa mãn với câu trả lời bề mặt, mọi cuộc trò chuyện với bạn đều có thể bất ngờ chạm đáy. Lời nói của bạn mang trọng lượng khác thường — có thể chữa lành, có thể sát thương. Hành trình của bạn là dùng quyền năng của ngôn từ để khai sáng thay vì thao túng.',
      strengths:
        'Tư duy điều tra sắc bén, khả năng nhìn thấu động cơ sau lời nói, sức mạnh thuyết phục và tái định hình nhận thức người khác.',
      challenges:
        'Lời nói dễ thành vũ khí khi tổn thương; tâm trí ám ảnh với việc biết hết, hiểu hết, kiểm soát mọi thông tin.',
      advice:
        'Tri thức là quyền lực — và quyền lực cần lương tâm. Hãy hỏi trước mỗi lời sắc bén: lời này đào sâu để chữa, hay để cắt?',
    },
    cancer: {
      title: 'Sao Diêm Vương tại Cự Giải (Pluto in Cancer)',
      description:
        'Sao Diêm Vương tại Cự Giải tôi luyện một thế hệ qua sự chuyển hóa tận gốc của mái nhà — những người sinh ra khi gia đình, quê hương, và cảm giác thuộc về bị thử lửa bởi những biến động lớn của lịch sử: ly tán, di cư, những tổ ấm phải dựng lại từ tro. Ở tầng tập thể, đây là bài học về sức mạnh bất tử của sợi dây máu mủ và lòng kiên cường của những người mẹ giữ lửa qua giông bão. Trong đời sống cá nhân, năng lượng ấy đặt chiều sâu khác thường vào đời sống cảm xúc của bạn: gốc rễ gia đình ảnh hưởng bạn mãnh liệt, những khuôn mẫu cảm xúc truyền đời chảy trong bạn như mạch ngầm — và bạn được trao sứ mệnh chuyển hóa chúng. Bạn có thể là người chữa lành những vết thương mà nhiều thế hệ trước để lại.',
      strengths:
        'Sức mạnh cảm xúc sống còn, lòng trung thành bảo vệ người thân đến cùng, khả năng chữa lành những tổn thương gốc rễ của dòng họ.',
      challenges:
        'Những khuôn mẫu cảm xúc gia đình ăn sâu khó gỡ; tình thương dễ pha lẫn kiểm soát, che chở dễ thành ràng buộc.',
      advice:
        'Bạn không phải sống lại vết thương của tổ tiên — bạn được sinh ra để kết thúc nó. Hãy giữ lại tình thương, và cho phép mình buông nỗi đau truyền đời.',
    },
    leo: {
      title: 'Sao Diêm Vương tại Sư Tử (Pluto in Leo)',
      description:
        'Sao Diêm Vương tại Sư Tử tôi luyện một thế hệ chuyển hóa chính khái niệm về cái tôi và quyền lực cá nhân — những người sinh ra giữa thời đại mà cá nhân vươn lên thành trung tâm: quyền được tỏa sáng, được sáng tạo, được tự định nghĩa mình trở thành cuộc cách mạng thầm lặng của cả một thế hệ. Ở tầng tập thể, đây là làn sóng vừa sản sinh những lãnh tụ và nghệ sĩ vĩ đại, vừa học bài học về cái giá của quyền lực cá nhân không kiểm soát. Trong đời sống cá nhân, năng lượng ấy đặt vào bạn nhu cầu sâu thẳm được công nhận là duy nhất: bạn không chỉ muốn sống, bạn muốn để lại dấu vết. Sức sáng tạo của bạn có cường độ tái sinh — những gì bạn tạo ra bằng cả trái tim đều mang một phần bất tử của bạn. Hành trình của bạn là tỏa sáng mà không cần che khuất ai.',
      strengths:
        'Sức sáng tạo mãnh liệt mang dấu ấn cá nhân không thể nhầm lẫn, ý chí tự khẳng định bất khuất, khả năng truyền sức sống cho mọi điều mình chạm vào.',
      challenges:
        'Cái tôi và niềm kiêu hãnh có thể trở thành đấu trường quyền lực; nỗi sợ bị lu mờ dễ biến thành nhu cầu thống trị sân khấu.',
      advice:
        'Vĩ đại thật sự là nâng người khác lên cùng tỏa sáng. Hãy để di sản của bạn là những ngọn lửa bạn đã thắp, không phải những ánh sáng bạn đã che.',
    },
    virgo: {
      title: 'Sao Diêm Vương tại Xử Nữ (Pluto in Virgo)',
      description:
        'Sao Diêm Vương tại Xử Nữ tôi luyện một thế hệ chuyển hóa tận gốc cách con người làm việc, chữa bệnh và phụng sự — những người sinh ra giữa làn sóng cách mạng về y tế, công nghệ, môi trường và đạo đức lao động: chính khái niệm "sức khỏe" và "việc làm" được đào lên và định nghĩa lại. Ở tầng tập thể, đây là thế hệ mang ý thức rằng sự hoàn thiện là một quá trình chuyển hóa không ngừng, và rằng những hệ thống mục ruỗng phải được thanh tẩy từ chi tiết nhỏ nhất. Trong đời sống cá nhân, năng lượng ấy cho bạn con mắt nhìn thấu mọi điểm yếu của hệ thống — và của chính mình. Bạn có khả năng tự cải tạo bền bỉ đáng kinh ngạc: từng thói quen, từng kỹ năng, từng góc khuất đều có thể được bạn chuyển hóa. Sự phụng sự của bạn, khi đặt đúng chỗ, có sức mạnh thay đổi đời người.',
      strengths:
        'Khả năng phân tích và thanh lọc tận gốc, sự tận tụy có chiều sâu chuyển hóa, tài chữa lành và cải tổ những gì hỏng hóc.',
      challenges:
        'Sự cầu toàn mang cường độ ám ảnh; phê phán bản thân có thể trở thành cuộc tự hành xác không hồi kết.',
      advice:
        'Bạn không phải là một dự án cần sửa mãi — bạn là một sinh thể đang lớn. Hãy hướng quyền năng thanh tẩy của mình vào điều phụng sự sự sống, kể cả sự sống của chính bạn.',
    },
    libra: {
      title: 'Sao Diêm Vương tại Thiên Bình (Pluto in Libra)',
      description:
        'Sao Diêm Vương tại Thiên Bình tôi luyện một thế hệ chuyển hóa tận gốc các mối quan hệ và lẽ công bằng — những người sinh ra khi hôn nhân, giao ước và cán cân quyền lực giữa người với người được đem ra mổ xẻ: ly hôn không còn là cấm kỵ, bình đẳng trở thành đòi hỏi, và tình yêu phải được xây lại trên nền trung thực hơn. Ở tầng tập thể, đây là bài học rằng hòa hợp giả tạo phải chết để hòa hợp thật được sinh ra. Trong đời sống cá nhân, năng lượng ấy khiến các mối quan hệ của bạn không bao giờ hời hợt: yêu với bạn là cuộc chuyển hóa song phương, nơi cả hai buộc phải đối diện những phần sâu nhất của nhau. Bạn nhạy bén lạ thường với những bất công và những trò chơi quyền lực ngầm trong mọi quan hệ. Sứ mệnh của bạn: kiến tạo những giao ước công bằng đến tận gốc.',
      strengths:
        'Khả năng nhìn thấu động lực quyền lực trong quan hệ, lòng can đảm tái thiết những gắn kết đổ vỡ, cam kết sâu sắc với công lý thật chứ không phải vẻ ngoài êm đẹp.',
      challenges:
        'Quan hệ dễ thành chiến trường quyền lực ngầm; nỗi sợ mất người mình yêu có thể biến thành kiểm soát tinh vi.',
      advice:
        'Tình yêu sâu nhất không phải là nắm chặt mà là hai người tự do chọn nhau mỗi ngày. Hãy đặt sự trung thực lên bàn cân — nó nặng hơn sự êm ấm giả tạo.',
    },
    scorpio: {
      title: 'Sao Diêm Vương tại Thiên Yết (Pluto in Scorpio)',
      description:
        'Đây là ngôi nhà miếu của Sao Diêm Vương — vì sao của tái sinh trở về chính vực sâu của nó, và quyền năng chuyển hóa tại đây đậm đặc nhất. Thế hệ mang vị trí này sinh ra giữa thời đại đối diện trực tiếp với những điều cấm kỵ tối hậu: khủng hoảng sinh tồn, những đại dịch, sự phơi bày của bóng tối quyền lực — một thế hệ được tôi trong lò lửa để mang khả năng nhìn thẳng vào điều nhân loại sợ nhất. Ở tầng tập thể, sứ mệnh của họ là thanh tẩy và tái sinh những gì mục ruỗng tận gốc. Trong đời sống cá nhân, năng lượng ấy cho bạn một tâm hồn không biết sống nông: mọi trải nghiệm đều được sống ở cường độ tối đa, mọi khủng hoảng đều là một lần lột xác. Bạn chết đi sống lại nhiều lần trong một kiếp — và mỗi lần, con phượng hoàng trong bạn lại bay cao hơn.',
      strengths:
        'Quyền năng tái sinh mạnh nhất hoàng đạo, trực giác đọc thấu mọi lớp mặt nạ, sức mạnh tâm lý có thể đi qua những điều hủy diệt người khác.',
      challenges:
        'Cường độ sống dữ dội có thể thiêu đốt chính mình và người thân; cám dỗ của quyền lực, kiểm soát và những trò chơi sinh tử.',
      advice:
        'Bạn được trao quyền năng của vực sâu — hãy dùng nó để chữa lành, vì đó là mục đích thật của nó. Phượng hoàng không bay lên để trả thù ngọn lửa, mà để làm chứng cho sự sống.',
    },
    sagittarius: {
      title: 'Sao Diêm Vương tại Nhân Mã (Pluto in Sagittarius)',
      description:
        'Sao Diêm Vương tại Nhân Mã tôi luyện một thế hệ chuyển hóa tận gốc niềm tin và chân lý — những người sinh ra giữa thời đại các hệ tư tưởng, tôn giáo và biên giới văn hóa bị đào xới: thế giới thu nhỏ lại, các đức tin va chạm nhau, và câu hỏi "đâu là sự thật" trở thành chiến trường của cả một kỷ nguyên. Ở tầng tập thể, sứ mệnh của thế hệ này là khai tử những giáo điều mục ruỗng và khai sinh một minh triết toàn cầu trung thực hơn. Trong đời sống cá nhân, năng lượng ấy đặt vào bạn cơn khát chân lý mang tính sống còn: bạn không thể sống với một niềm tin vay mượn — mọi triết lý phải được bạn thử lửa mới được giữ lại. Hành trình tìm ý nghĩa của bạn có thể đi qua những vỡ mộng sâu sắc, nhưng mỗi lần đức tin chết đi, một đức tin chân thật hơn lại tái sinh.',
      strengths:
        'Khát vọng chân lý không khoan nhượng, tầm nhìn xuyên qua các hệ tư tưởng, khả năng truyền cảm hứng chuyển hóa niềm tin cho người khác.',
      challenges:
        'Niềm tin dễ mang cường độ cuồng nhiệt; cuộc thập tự chinh cho chân lý của mình có thể giẫm lên chân lý của người khác.',
      advice:
        'Chân lý đủ mạnh không cần được áp đặt. Hãy để hành trình của bạn truyền cảm hứng — và để mỗi người tự tìm ngọn lửa của họ.',
    },
    capricorn: {
      title: 'Sao Diêm Vương tại Ma Kết (Pluto in Capricorn)',
      description:
        'Sao Diêm Vương tại Ma Kết tôi luyện một thế hệ chứng kiến sự chuyển hóa tận gốc của các cấu trúc quyền lực — những người sinh ra khi các định chế tưởng như bất khả xâm phạm: chính quyền, tài chính, tập đoàn, các trật tự cũ — lần lượt bị phơi bày, lung lay và buộc phải tái sinh. Ở tầng tập thể, đây là bài học lớn về thẩm quyền: quyền lực không có liêm chính sẽ tự sụp đổ dưới sức nặng của chính nó. Trong đời sống cá nhân, năng lượng ấy cho bạn tham vọng có chiều sâu khác thường và con mắt nhìn thấu mọi trò chơi quyền lực nơi công sở, xã hội. Bạn không thỏa mãn với địa vị rỗng — bạn muốn thứ quyền lực thật: năng lực, uy tín, công trình đứng vững qua thử thách. Bạn thuộc về những người được giao việc xây lại nền móng cho thời đại mới.',
      strengths:
        'Ý chí xây dựng bền bỉ với chiều sâu chiến lược, khả năng nhìn thấu cấu trúc quyền lực, bản lĩnh gánh vác việc tái thiết những gì sụp đổ.',
      challenges:
        'Tham vọng có thể hóa thành khát quyền lạnh lùng; nỗi sợ mất kiểm soát khiến bạn khó tin tưởng và khó san sẻ quyền hành.',
      advice:
        'Quyền lực bền nhất là quyền lực phục vụ điều lớn hơn mình. Hãy xây như người biết rằng công trình sẽ sống lâu hơn tên tuổi người xây.',
    },
    aquarius: {
      title: 'Sao Diêm Vương tại Bảo Bình (Pluto in Aquarius)',
      description:
        'Sao Diêm Vương tại Bảo Bình tôi luyện một thế hệ chuyển hóa tận gốc khái niệm cộng đồng và tương lai — những người sinh ra giữa thời đại quyền lực được phân tán lại: công nghệ định hình lại xã hội, đám đông tìm lại tiếng nói, và chính ý niệm về nhân loại như một tập thể được đào lên xem xét lại. Ở tầng tập thể, sứ mệnh của thế hệ này là khai tử những hệ thống chia rẽ con người và khai sinh những hình thái cộng đồng công bằng hơn — cuộc cách mạng không của một anh hùng, mà của một mạng lưới. Trong đời sống cá nhân, năng lượng ấy cho bạn niềm xác tín sâu thẳm về tự do và tình bằng hữu: bạn nhạy bén với mọi hình thức áp bức tinh vi, và những nhóm bạn, cộng đồng bạn tham gia đều có thể trở thành nơi bạn trải nghiệm sự chuyển hóa sâu sắc nhất. Bạn mang trong mình hạt giống của trật tự mới.',
      strengths:
        'Tầm nhìn cải tổ xã hội sâu sắc, khả năng kết nối những con người khác biệt thành sức mạnh chung, lòng trung thành mãnh liệt với lý tưởng tự do.',
      challenges:
        'Lý tưởng tập thể có thể trở nên cực đoan; sự nổi loạn chống mọi thẩm quyền đôi khi che giấu chính khát khao quyền lực của mình.',
      advice:
        'Cuộc cách mạng chân chính bắt đầu bằng việc chuyển hóa chính mình. Hãy trở thành kiểu cộng đồng mà bạn muốn thấy trong thế giới.',
    },
    pisces: {
      title: 'Sao Diêm Vương tại Song Ngư (Pluto in Pisces)',
      description:
        'Sao Diêm Vương tại Song Ngư tôi luyện một thế hệ chuyển hóa tận gốc đời sống tâm linh và trí tưởng tượng của nhân loại — những người sinh ra khi chính ranh giới giữa thực và mộng, giữa khoa học và huyền nhiệm, giữa cá nhân và đại dương tập thể được đào xới đến tầng sâu nhất. Ở tầng tập thể, sứ mệnh của thế hệ này là thanh tẩy những ảo ảnh cũ của nhân loại — những niềm tin ru ngủ, những thiên đường giả — để khai sinh một đời sống tinh thần trung thực và sâu sắc hơn. Trong đời sống cá nhân, năng lượng ấy cho bạn một đời sống nội tâm như đáy đại dương: trực giác của bạn chạm tới những tầng mà ngôn từ không với đến, lòng trắc ẩn của bạn có sức mạnh chuyển hóa người khác trong thầm lặng. Những giấc mơ và trải nghiệm tâm linh của bạn không phải trang trí — chúng là nơi diễn ra những cuộc tái sinh thật sự của bạn.',
      strengths:
        'Chiều sâu tâm linh và thấu cảm hiếm có, khả năng chữa lành bằng sự hiện diện, trực giác chạm tới vô thức tập thể.',
      challenges:
        'Dễ bị cuốn vào những dòng xoáy cảm xúc và ảo ảnh tập thể; ranh giới mong manh khiến nỗi đau của thế gian có thể nhấn chìm bạn.',
      advice:
        'Hãy là người lặn sâu có dây neo: thực hành tâm linh đều đặn, ranh giới lành mạnh, đôi chân trên đất. Đại dương trao quyền năng cho người biết kính trọng nó.',
    },
  },
};
