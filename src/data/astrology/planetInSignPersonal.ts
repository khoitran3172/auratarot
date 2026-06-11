// Luận giải "hành tinh cá nhân tại cung hoàng đạo" — 5 hành tinh × 12 cung = 60 mục.
// Giọng văn: thần bí, ấm áp, sâu sắc, giàu hình ảnh nhưng không sáo rỗng.

import { SignId, PlanetInSignReading } from './types';

export const planetInSignPersonal: Record<
  'sun' | 'moon' | 'mercury' | 'venus' | 'mars',
  Record<SignId, PlanetInSignReading>
> = {
  sun: {
    aries: {
      title: 'Mặt Trời tại Bạch Dương (Sun in Aries)',
      description:
        'Mặt Trời vượng địa tại Bạch Dương — nơi ngọn lửa khởi nguyên của hoàng đạo bùng cháy mạnh mẽ nhất. Bạn sinh ra để mở đường, để là người đầu tiên bước vào vùng đất chưa ai đặt chân. Bản ngã của bạn gắn liền với hành động: bạn cảm thấy mình sống thật nhất khi đang khởi xướng, đang chiến đấu cho điều mình tin. Sức sống trong bạn tươi mới và trực diện như ánh bình minh, không che giấu, không vòng vo. Mục đích đời bạn là học cách can đảm hiện diện trọn vẹn — và truyền ngọn lửa ấy cho người khác.',
      strengths:
        'Can đảm, quyết đoán, tràn đầy sinh lực tiên phong; bạn có khả năng hiếm có là dám bắt đầu khi người khác còn do dự.',
      challenges:
        'Sự nóng vội và cái tôi bốc đồng có thể khiến bạn lao vào trận chiến chưa cần thiết, bỏ dở những gì đã khởi đầu khi ngọn lửa hứng thú nguội đi.',
      advice:
        'Hãy học nghệ thuật hoàn thành, không chỉ khởi đầu. Trước khi phản ứng, cho mình một hơi thở — lòng can đảm trưởng thành nhất là can đảm biết chờ đúng thời điểm.',
    },
    taurus: {
      title: 'Mặt Trời tại Kim Ngưu (Sun in Taurus)',
      description:
        'Mặt Trời tại Kim Ngưu mang bản ngã của bạn về với đất mẹ — vững chãi, kiên nhẫn và đầy cảm quan. Bạn tìm thấy mục đích sống trong việc xây dựng những điều bền lâu: một mái nhà, một sự nghiệp, một khu vườn của riêng mình. Sức sống của bạn không bùng nổ mà âm ỉ như mạch nước ngầm, nuôi dưỡng mọi thứ quanh bạn một cách lặng lẽ. Bạn trân quý cái đẹp hữu hình — hương vị, chất liệu, âm thanh — và chính giác quan tinh tế ấy là cánh cửa đưa bạn về với chính mình.',
      strengths:
        'Kiên định, đáng tin cậy, có sức bền phi thường; một khi đã cam kết, bạn đi đến cùng với sự điềm tĩnh hiếm ai sánh được.',
      challenges:
        'Sự cố chấp và nỗi sợ thay đổi có thể biến vùng an toàn thành chiếc lồng êm ái; bạn dễ bám víu vào những gì quen thuộc dù chúng không còn nuôi dưỡng mình.',
      advice:
        'Thỉnh thoảng hãy tự hỏi: mình đang kiên định hay đang sợ hãi? Cho phép bản thân buông một thói quen cũ mỗi mùa — đất tốt cũng cần được cày xới.',
    },
    gemini: {
      title: 'Mặt Trời tại Song Tử (Sun in Gemini)',
      description:
        'Mặt Trời tại Song Tử thắp sáng bản ngã của bạn bằng sự tò mò bất tận. Bạn là người đưa tin của hoàng đạo — sinh ra để kết nối, để hỏi, để dịch thế giới này thành ngôn từ. Sức sống của bạn nằm ở chuyển động: của ý tưởng, của câu chuyện, của những cuộc gặp gỡ. Trong bạn luôn có ít nhất hai phiên bản đang trò chuyện cùng nhau, và đó không phải mâu thuẫn — đó là sự phong phú. Mục đích đời bạn là làm cầu nối giữa những thế giới tưởng chừng không chạm vào nhau.',
      strengths:
        'Trí tuệ nhanh nhạy, khả năng thích nghi và giao tiếp xuất sắc; bạn mang lại không khí tươi mới cho bất cứ nơi nào mình xuất hiện.',
      challenges:
        'Năng lượng phân tán dễ khiến bạn biết nhiều thứ nhưng không đào sâu thứ gì; sự bồn chồn nội tâm có thể làm bạn trốn tránh những cảm xúc cần được lắng nghe.',
      advice:
        'Chọn một vài hạt giống và ở lại đủ lâu để thấy chúng nở hoa. Chiều sâu không giết chết sự tự do — nó cho sự tự do một mái nhà.',
    },
    cancer: {
      title: 'Mặt Trời tại Cự Giải (Sun in Cancer)',
      description:
        'Mặt Trời tại Cự Giải đưa bản ngã của bạn về với dòng nước của ký ức và sự chở che. Bạn sống bằng trái tim trước, lý trí sau — và đó là sức mạnh, không phải điểm yếu. Mục đích sống của bạn xoay quanh việc nuôi dưỡng: một gia đình, một cộng đồng, hay bất kỳ ai bước vào vòng tay bạn lúc họ yếu lòng. Như thủy triều, sức sống của bạn lên xuống theo chu kỳ cảm xúc, và bạn cần học cách tôn trọng nhịp điệu ấy. Mái nhà — theo nghĩa rộng nhất — chính là nơi bản ngã bạn tỏa sáng.',
      strengths:
        'Trực giác bén nhạy, lòng trắc ẩn sâu sắc và khả năng tạo cảm giác "thuộc về" cho người khác; bạn nhớ những điều nhỏ bé mà người đời quên.',
      challenges:
        'Sự nhạy cảm dễ biến thành phòng thủ — bạn rút vào chiếc mai của mình, ôm giữ tổn thương cũ và để tâm trạng dẫn dắt quyết định.',
      advice:
        'Hãy nuôi dưỡng chính mình trước khi nuôi dưỡng cả thế giới. Khi cảm xúc dâng cao, đừng vội phản ứng — chờ thủy triều rút rồi hãy nhìn lại bờ cát.',
    },
    leo: {
      title: 'Mặt Trời tại Sư Tử (Sun in Leo)',
      description:
        'Mặt Trời ngự tại chính ngôi nhà của mình — Sư Tử — nên ánh sáng trong bạn rực rỡ và tự nhiên như chính mặt trời giữa trưa. Bạn sinh ra để tỏa sáng, để sáng tạo, để sống một cuộc đời có chất "trình diễn" theo nghĩa đẹp nhất: chân thành, hào phóng và đầy nhiệt huyết. Trái tim là la bàn của bạn; khi nó được chạm đến, bạn có thể truyền cảm hứng cho cả một đám đông. Mục đích đời bạn là dám là chính mình một cách trọn vẹn — và qua đó, cho người khác sự cho phép để họ cũng tỏa sáng.',
      strengths:
        'Lòng hào hiệp, sự ấm áp và năng lực sáng tạo bẩm sinh; bạn có sức hút tự nhiên và lòng trung thành của một vị vua biết yêu thần dân của mình.',
      challenges:
        'Nhu cầu được công nhận có thể trở thành cơn khát không đáy; lòng kiêu hãnh đôi khi khiến bạn khó cúi xuống nhận lỗi hay nhường sân khấu.',
      advice:
        'Hãy tỏa sáng vì niềm vui, không phải vì tràng pháo tay. Ánh sáng đẹp nhất của bạn là khi nó soi rọi cho người khác chứ không chỉ chiếu vào mình.',
    },
    virgo: {
      title: 'Mặt Trời tại Xử Nữ (Sun in Virgo)',
      description:
        'Mặt Trời tại Xử Nữ trao cho bạn một bản ngã tinh luyện — như người thợ kim hoàn của hoàng đạo, bạn tìm thấy ý nghĩa trong việc làm cho mọi thứ tốt hơn, tinh hơn, lành hơn. Sức sống của bạn chảy qua đôi tay và khối óc biết quan sát những chi tiết người khác bỏ qua. Phụng sự là tiếng gọi sâu thẳm của bạn: bạn cảm thấy mình sống có ích nhất khi đang chữa lành, sắp xếp, hoàn thiện một điều gì đó. Đằng sau vẻ khiêm nhường ấy là một trí tuệ phân tích sắc bén và một trái tim tận tụy hiếm có.',
      strengths:
        'Tỉ mỉ, thực tế, đáng tin và có khả năng phân tích vượt trội; bạn biến sự hỗn loạn thành trật tự một cách gần như nghệ thuật.',
      challenges:
        'Chủ nghĩa hoàn hảo dễ quay mũi dao vào chính bạn — tiếng nói phê bình nội tâm có thể che khuất mọi thành tựu bạn đã đạt được.',
      advice:
        'Hãy đối xử với bản thân bằng sự dịu dàng bạn dành cho người mình chăm sóc. "Đủ tốt" đôi khi chính là hoàn hảo theo cách của vũ trụ.',
    },
    libra: {
      title: 'Mặt Trời tại Thiên Bình (Sun in Libra)',
      description:
        'Mặt Trời hãm địa tại Thiên Bình — ánh sáng cá nhân của bạn không chiếu thẳng mà khúc xạ qua những mối quan hệ, như ánh trăng mượn sáng để làm dịu màn đêm. Bạn sinh ra để tạo hòa khí, để tìm điểm cân bằng giữa những thái cực, để mang cái đẹp và lẽ công bằng vào đời sống. Bản ngã của bạn nở hoa trong sự kết nối: qua đối thoại, qua nghệ thuật, qua tình thân. Hành trình sâu sắc nhất của bạn là tìm ra "tôi là ai" mà không cần soi mình qua ánh mắt người khác.',
      strengths:
        'Tinh tế, công tâm, có gu thẩm mỹ và tài ngoại giao thiên bẩm; bạn nhìn thấy được cả hai mặt của mọi vấn đề.',
      challenges:
        'Sự do dự và thói quen làm hài lòng người khác có thể khiến bạn đánh mất tiếng nói riêng; bạn dễ né tránh xung đột đến mức né tránh cả sự thật.',
      advice:
        'Mỗi ngày, hãy đưa ra một quyết định nhỏ chỉ vì bạn muốn thế. Hòa bình thật sự không phải là vắng bóng xung đột, mà là dám trung thực một cách tử tế.',
    },
    scorpio: {
      title: 'Mặt Trời tại Thiên Yết (Sun in Scorpio)',
      description:
        'Mặt Trời tại Thiên Yết chiếu sáng từ đáy vực — bản ngã của bạn được tôi luyện trong những vùng nước sâu mà người khác không dám lặn xuống. Bạn sinh ra với khả năng nhìn xuyên qua lớp mặt nạ, chạm vào sự thật trần trụi của con người và cuộc đời. Sức sống của bạn mãnh liệt và thầm lặng, như magma dưới lòng đất. Mục đích đời bạn gắn với sự chuyển hóa: chết đi và tái sinh nhiều lần trong một kiếp người, mỗi lần trồi lên mạnh mẽ và chân thật hơn.',
      strengths:
        'Ý chí sắt đá, trực giác thấu suốt và lòng trung thành tuyệt đối; trong khủng hoảng, bạn là người vững vàng nhất.',
      challenges:
        'Xu hướng kiểm soát, nghi ngờ và ôm giữ oán hận có thể đầu độc chính nguồn nước nuôi bạn; bạn khó cho phép ai thấy mình tổn thương.',
      advice:
        'Quyền năng lớn nhất của bạn không phải là kiểm soát, mà là dám buông. Hãy chọn một người xứng đáng và cho họ thấy con người thật — sự tổn thương được chia sẻ chính là tái sinh.',
    },
    sagittarius: {
      title: 'Mặt Trời tại Nhân Mã (Sun in Sagittarius)',
      description:
        'Mặt Trời tại Nhân Mã thắp trong bạn ngọn lửa của kẻ hành hương — bản ngã bạn lớn lên cùng những chân trời. Bạn sống để tìm kiếm ý nghĩa: qua những chuyến đi, những triết lý, những nền văn hóa và niềm tin vượt khỏi lũy tre làng của tâm trí. Sức sống của bạn hào sảng, lạc quan và lan tỏa; bạn tin vào điều tốt đẹp ngay cả khi chưa nhìn thấy nó. Mục đích đời bạn là trở thành mũi tên hướng về sự thật lớn hơn — và kể lại hành trình ấy cho những ai còn quẩn quanh.',
      strengths:
        'Lạc quan, phóng khoáng, có tầm nhìn xa và lòng trung thực thẳng như mũi tên; bạn truyền niềm tin vào cuộc sống cho người quanh mình.',
      challenges:
        'Sự thẳng thắn thiếu tinh tế có thể làm tổn thương người khác; lời hứa của bạn đôi khi lớn hơn đôi cánh, và bạn dễ chán những gì đã thành quen thuộc.',
      advice:
        'Tự do sâu nhất không nằm ở chân trời xa mà ở khả năng hiện diện trọn vẹn nơi mình đứng. Hãy để sự thật của bạn đi kèm với lòng trắc ẩn.',
    },
    capricorn: {
      title: 'Mặt Trời tại Ma Kết (Sun in Capricorn)',
      description:
        'Mặt Trời tại Ma Kết trao cho bạn bản ngã của người leo núi — sinh ra với ánh mắt hướng về đỉnh cao và đôi chân hiểu giá trị của từng bước chậm. Bạn tìm thấy ý nghĩa trong thành tựu được xây bằng kỷ luật, trong trách nhiệm được gánh vác trọn vẹn. Thời gian là đồng minh của bạn: bạn thường "già" khi còn trẻ và trẻ lại khi về già, như rượu quý càng ủ càng đậm. Mục đích đời bạn là xây nên những công trình — hữu hình hay vô hình — đứng vững lâu hơn cả đời người.',
      strengths:
        'Kỷ luật, bền bỉ, có trách nhiệm và tầm nhìn chiến lược; bạn là người mà cả tập thể có thể tựa vào khi giông bão.',
      challenges:
        'Bạn dễ đồng nhất giá trị bản thân với thành tích, làm việc đến kiệt sức và quên rằng trái tim cũng cần được thăng chức.',
      advice:
        'Đỉnh núi sẽ vẫn ở đó nếu bạn dừng lại ngắm hoàng hôn. Hãy đo đời mình không chỉ bằng những gì xây được, mà cả bằng những khoảnh khắc bạn thật sự sống.',
    },
    aquarius: {
      title: 'Mặt Trời tại Bảo Bình (Sun in Aquarius)',
      description:
        'Mặt Trời hãm địa tại Bảo Bình — ánh sáng của bạn không thuộc về riêng bạn mà thuộc về tập thể, như ngọn hải đăng chiếu cho cả vùng biển. Bạn sinh ra để nhìn về phía trước, để đặt câu hỏi với những điều "xưa nay vẫn thế", để đứng về phía những ai chưa có tiếng nói. Bản ngã của bạn độc lập và khác biệt một cách tự nhiên; bạn quan sát đời sống với khoảng lùi của một nhà khoa học và trái tim của một nhà nhân văn. Mục đích đời bạn là mang tương lai về gần hơn với hiện tại.',
      strengths:
        'Tư duy độc đáo, lý tưởng nhân văn và sự trung thực trí tuệ; bạn dám khác biệt mà không cần xin phép.',
      challenges:
        'Khoảng cách bạn giữ với thế giới có thể biến thành sự lạnh lùng; bạn yêu nhân loại nhưng đôi khi quên mất con người cụ thể đang đứng cạnh mình.',
      advice:
        'Cách mạng lớn nhất đôi khi là một cái ôm. Hãy để lý tưởng của bạn đi qua trái tim trước khi đi ra thế giới.',
    },
    pisces: {
      title: 'Mặt Trời tại Song Ngư (Sun in Pisces)',
      description:
        'Mặt Trời tại Song Ngư hòa tan bản ngã của bạn vào đại dương chung của muôn loài — ranh giới giữa bạn và thế giới mỏng như màn sương sớm. Bạn cảm nhận được những điều chưa thành lời: nỗi buồn của người lạ, vẻ đẹp ẩn trong điều tầm thường, tiếng gọi của một thực tại lớn hơn. Sức sống của bạn chảy qua trí tưởng tượng, nghệ thuật, tâm linh và lòng trắc ẩn vô điều kiện. Mục đích đời bạn là làm chiếc cầu giữa cõi mộng và cõi thực — mang về trần gian những gì bạn thấy trong giấc mơ.',
      strengths:
        'Trực giác, trí tưởng tượng và lòng từ bi gần như vô hạn; bạn chữa lành người khác chỉ bằng sự hiện diện dịu dàng của mình.',
      challenges:
        'Bạn dễ trốn vào mộng mơ khi thực tại quá thô ráp, dễ hy sinh đến mức tan biến và mơ hồ về ranh giới của chính mình.',
      advice:
        'Lòng trắc ẩn cần một chiếc neo: hãy học nói "không" như một hành động yêu thương chính mình. Mỗi ngày, làm một việc cụ thể để kéo giấc mơ về mặt đất.',
    },
  },

  moon: {
    aries: {
      title: 'Mặt Trăng tại Bạch Dương (Moon in Aries)',
      description:
        'Mặt Trăng tại Bạch Dương cho bạn một đời sống cảm xúc bùng cháy như diêm quẹt — nhanh, nóng và thẳng thắn. Bạn cảm trước, nghĩ sau; khi trái tim lên tiếng, nó không thì thầm mà hô vang. Nhu cầu an toàn nội tâm của bạn gắn liền với sự tự chủ: bạn cần được tự quyết, tự đi, tự đứng dậy theo cách của mình. Cơn giận của bạn đến nhanh và đi cũng nhanh, hiếm khi để lại tro tàn oán hận. Bản năng của bạn là chiến đấu cho mình và cho người mình thương — ngay lập tức, không tính toán.',
      strengths:
        'Cảm xúc trung thực, không thù dai và bản năng bảo vệ mạnh mẽ; bạn hồi phục sau tổn thương nhanh đáng kinh ngạc.',
      challenges:
        'Sự bốc đồng cảm xúc dễ khiến bạn nói những lời làm tổn thương rồi mới kịp nghĩ; bạn khó chịu khi phải kiên nhẫn với nỗi buồn — của mình lẫn của người.',
      advice:
        'Khi cảm xúc bùng lên, hãy chuyển nó thành vận động — chạy, đi bộ, dọn dẹp — trước khi chuyển thành lời nói. Cho phép mình yếu lòng cũng là một dạng can đảm.',
    },
    taurus: {
      title: 'Mặt Trăng tại Kim Ngưu (Moon in Taurus)',
      description:
        'Mặt Trăng vượng địa tại Kim Ngưu — cảm xúc của bạn được nuôi trong mảnh đất màu mỡ và yên bình nhất của hoàng đạo. Nội tâm bạn ổn định như nhịp thở của đất: chậm rãi, sâu và đáng tin. Bạn tìm thấy an toàn trong những điều hữu hình — bữa cơm ấm, chiếc chăn quen, vòng tay không vội vã — và trong sự lặp lại êm đềm của thói quen. Bản năng của bạn là gìn giữ, vun đắp và làm cho mọi thứ quanh mình trở nên dễ chịu. Người ở cạnh bạn thường thấy lòng mình lắng lại, như ngồi dưới tán cây cổ thụ.',
      strengths:
        'Điềm tĩnh, kiên nhẫn và là chỗ dựa cảm xúc vững chắc; bạn biết tận hưởng hiện tại bằng cả năm giác quan.',
      challenges:
        'Bạn dễ bám chặt vào sự quen thuộc đến mức ngại mọi đổi thay cảm xúc, và đôi khi tìm sự an ủi trong vật chất hay ăn uống thay vì đối diện nỗi lòng.',
      advice:
        'An toàn thật sự nằm trong bạn, không nằm trong những thứ bạn sở hữu. Thỉnh thoảng hãy chủ động thay đổi một thói quen nhỏ để nhắc mình rằng thay đổi không đáng sợ.',
    },
    gemini: {
      title: 'Mặt Trăng tại Song Tử (Moon in Gemini)',
      description:
        'Mặt Trăng tại Song Tử khiến cảm xúc của bạn đi qua ngả của ngôn từ — bạn cần nói ra, viết ra, gọi tên được nỗi lòng thì mới thấy nhẹ. Nội tâm bạn linh hoạt và tò mò; tâm trạng có thể đổi như gió chuyển chiều, không phải vì hời hợt mà vì tâm trí bạn luôn tìm góc nhìn mới cho cùng một cảm xúc. Bạn thấy an toàn khi được trò chuyện, được hiểu và được tự do tinh thần. Bản năng đầu tiên của bạn trước mọi biến cố là: hiểu nó, phân tích nó, kể về nó.',
      strengths:
        'Khả năng diễn đạt cảm xúc thành lời tinh tế và sự nhẹ nhõm giúp bạn không chìm quá lâu trong u ám; bạn là người bạn tâm tình thông minh và thú vị.',
      challenges:
        'Bạn dễ "nghĩ về cảm xúc" thay vì thực sự cảm nó — trí óc trở thành nơi trú ẩn để né những nỗi buồn cần được sống cùng.',
      advice:
        'Đôi khi hãy để cơ thể nói thay tâm trí: thở, khóc, im lặng. Không phải cảm xúc nào cũng cần được giải thích — có những nỗi lòng chỉ cần được ở cùng.',
    },
    cancer: {
      title: 'Mặt Trăng tại Cự Giải (Moon in Cancer)',
      description:
        'Mặt Trăng ngự tại chính ngôi nhà của mình — Cự Giải — nên đời sống cảm xúc của bạn sâu thẳm và nguyên vẹn như đại dương dưới ánh trăng rằm. Bạn cảm nhận thế giới qua một trực giác gần như siêu nhiên: bước vào căn phòng, bạn biết ngay ai đang buồn, điều gì chưa được nói ra. Ký ức, gia đình và mái ấm là gốc rễ an toàn của bạn; bạn mang trong mình bản năng chở che của người mẹ, bất kể giới tính. Cảm xúc của bạn lên xuống theo chu kỳ như thủy triều — và khi bạn học cách tin vào nhịp điệu ấy, nó trở thành la bàn không bao giờ sai.',
      strengths:
        'Trực giác mạnh mẽ, trí nhớ cảm xúc sâu và khả năng nuôi dưỡng, vỗ về thiên bẩm; bạn là mái nhà di động cho những người mình thương.',
      challenges:
        'Bạn dễ thấm nỗi buồn của người khác như của mình, dễ tủi thân, ôm giữ tổn thương cũ và rút vào vỏ ốc thay vì nói ra điều mình cần.',
      advice:
        'Hãy phân biệt cảm xúc nào là của mình, cảm xúc nào mình đang "mượn" từ người khác. Nói thẳng nhu cầu của bạn — người thương bạn không thể đọc được suy nghĩ, dù bạn đọc được của họ.',
    },
    leo: {
      title: 'Mặt Trăng tại Sư Tử (Moon in Leo)',
      description:
        'Mặt Trăng tại Sư Tử cho bạn một trái tim ấm như lò sưởi giữa đông — cảm xúc của bạn nồng nhiệt, hào phóng và cần được tỏa sáng. Bạn thấy an toàn khi được yêu thương một cách rõ ràng: được khen, được nhớ đến, được là nhân vật đặc biệt trong lòng ai đó. Nội tâm bạn có chất trẻ thơ đáng quý — vui hết mình, buồn cũng hết mình, và luôn tin rằng đời đáng được ăn mừng. Bản năng của bạn là sưởi ấm: khi người thân buồn, bạn muốn làm điều gì đó lớn lao để họ cười trở lại.',
      strengths:
        'Trái tim trung thành, rộng lượng và khả năng biến đời thường thành lễ hội; tình yêu của bạn khiến người khác cảm thấy mình quan trọng.',
      challenges:
        'Lòng tự ái dễ tổn thương khi không được ghi nhận; bạn có thể "diễn" sự ổn để giữ thể diện thay vì thừa nhận mình đang cần được dỗ dành.',
      advice:
        'Giá trị của bạn không phụ thuộc vào tràng pháo tay. Hãy tập nói "mình đang buồn" một cách giản dị — sự chân thật ấy còn vương giả hơn mọi vẻ kiêu hãnh.',
    },
    virgo: {
      title: 'Mặt Trăng tại Xử Nữ (Moon in Virgo)',
      description:
        'Mặt Trăng tại Xử Nữ khiến bạn cảm thấy an toàn nhất khi mọi thứ trong tầm kiểm soát — ngăn nắp, rõ ràng, có kế hoạch. Bạn yêu thương bằng hành động thầm lặng: pha một ấm trà, sửa một thứ hỏng, nhớ lịch khám của người thân. Cảm xúc của bạn đi qua bộ lọc phân tích; trước khi cho phép mình buồn, bạn muốn hiểu vì sao mình buồn và làm gì để khắc phục. Nội tâm bạn tinh tế và tận tụy, nhưng cũng là nơi tiếng nói tự phê bình vang to nhất những lúc đêm khuya.',
      strengths:
        'Chu đáo, thực tế và đáng tin trong chăm sóc; bạn giúp người khác gỡ rối cảm xúc bằng sự sáng suốt hiếm có.',
      challenges:
        'Bạn dễ lo âu vặt và khắt khe với chính mình; nhu cầu "sửa chữa" mọi thứ khiến bạn khó chỉ đơn giản ngồi cùng nỗi buồn — của mình hay của người.',
      advice:
        'Không phải cảm xúc nào cũng là vấn đề cần giải quyết. Hãy dành cho mình sự bao dung bạn vẫn rộng rãi trao đi — bạn cũng xứng đáng được chăm sóc vô điều kiện.',
    },
    libra: {
      title: 'Mặt Trăng tại Thiên Bình (Moon in Libra)',
      description:
        'Mặt Trăng tại Thiên Bình khiến nội tâm bạn chỉ thật sự yên khi thế giới quanh bạn hòa thuận — một lời nói nặng, một mối quan hệ trục trặc cũng đủ làm mặt hồ lòng bạn gợn sóng. Bạn tìm thấy an toàn trong sự kết nối: được lắng nghe, được đồng hành, được sống giữa cái đẹp và sự nhã nhặn. Bản năng của bạn là làm dịu — bạn tự động trở thành người hòa giải trong mọi căng thẳng. Cảm xúc của bạn tinh tế và có gu, như được phổ nhạc; nhưng chính vì thế, bạn thường giữ những nốt trầm cho riêng mình.',
      strengths:
        'Dịu dàng, công bằng và nhạy bén với cảm xúc người khác; bạn mang lại sự êm ái cho mọi mối quan hệ mình chạm vào.',
      challenges:
        'Bạn dễ né tránh xung đột đến mức nuốt vào những bất mãn chính đáng, và dựa quá nhiều vào người khác để thấy lòng mình cân bằng.',
      advice:
        'Hòa khí mua bằng sự im lặng của bạn là hòa khí giả. Hãy tập nói lên điều mình thật sự cảm thấy — một mối quan hệ lành mạnh chịu được sự trung thực của bạn.',
    },
    scorpio: {
      title: 'Mặt Trăng tại Thiên Yết (Moon in Scorpio)',
      description:
        'Mặt Trăng hãm địa tại Thiên Yết — cảm xúc của bạn không chảy trên bề mặt mà cuộn xoáy dưới đáy sâu, mãnh liệt và toàn tâm toàn ý. Bạn không biết yêu hời hợt, không biết tin nửa vời; với bạn, mọi gắn bó đều là chuyện sinh tử của tâm hồn. Trực giác của bạn sắc như dao — bạn ngửi thấy sự giả dối trước khi nó thành lời. Nhu cầu an toàn của bạn gắn với sự trung thực tuyệt đối và lòng trung thành được chứng minh; một khi đã trao niềm tin, bạn trao cả vực thẳm của mình.',
      strengths:
        'Chiều sâu cảm xúc, sự gắn bó trọn vẹn và khả năng đồng hành cùng người khác qua những vùng tối mà ít ai dám bước vào.',
      challenges:
        'Nỗi sợ bị phản bội khiến bạn kiểm soát, ghen tuông và giấu kín nỗi lòng; tổn thương cũ trong bạn có thể âm ỉ thành oán hận nếu không được chuyển hóa.',
      advice:
        'Tha thứ không phải là quên — đó là quyết định ngừng uống thuốc độc mình tự pha. Hãy chọn ít nhất một người để mở lòng từng lớp một; sự tổn thương được chia sẻ sẽ thành sức mạnh.',
    },
    sagittarius: {
      title: 'Mặt Trăng tại Nhân Mã (Moon in Sagittarius)',
      description:
        'Mặt Trăng tại Nhân Mã cho bạn một nội tâm cần bầu trời rộng — bạn thấy an toàn không phải trong vòng tay ôm chặt mà trong cánh cửa luôn mở. Cảm xúc của bạn lạc quan và hồi phục nhanh; khi buồn, bản năng của bạn là đi: một chuyến xa, một cuốn sách, một triết lý mới giúp nỗi buồn có ý nghĩa. Bạn nuôi dưỡng tâm hồn bằng ý nghĩa và niềm tin — bạn cần tin rằng mọi chuyện xảy ra đều dạy mình điều gì đó. Tiếng cười của bạn là liều thuốc cho chính mình và cho cả những người quanh bạn.',
      strengths:
        'Tinh thần lạc quan bền bỉ, lòng bao dung và khả năng tìm thấy bài học trong nghịch cảnh; bạn nâng tâm trạng của cả căn phòng.',
      challenges:
        'Bạn dễ dùng sự tích cực và những chuyến đi để trốn cảm xúc khó; cam kết gắn bó đôi khi khiến bạn ngột ngạt dù trái tim vẫn khao khát thân mật.',
      advice:
        'Có những nỗi buồn không cần bài học — chỉ cần được cảm nhận. Hãy ở lại với một cảm xúc khó thêm mười phút trước khi xách ba lô lên; tự do thật sự bao gồm cả tự do được buồn.',
    },
    capricorn: {
      title: 'Mặt Trăng tại Ma Kết (Moon in Capricorn)',
      description:
        'Mặt Trăng hãm địa tại Ma Kết — cảm xúc của bạn được giữ sau một bức tường đá xây từ rất sớm, có thể từ một tuổi thơ mà bạn phải trưởng thành trước tuổi. Bạn thấy an toàn khi mọi thứ trong tầm kiểm soát: công việc ổn, tài chính vững, vai trò rõ ràng. Bạn yêu thương bằng trách nhiệm — âm thầm gánh vác, lo liệu, hiện diện đúng lúc — hơn là bằng lời ngọt ngào. Nội tâm bạn sâu sắc và chung thủy hiếm có, chỉ là nó quen vận sơ mi cài khuy kín cổ.',
      strengths:
        'Vững vàng trong khủng hoảng, đáng tin cậy tuyệt đối và có khả năng tự đứng dậy không cần ai nâng; tình cảm của bạn bền như đá núi.',
      challenges:
        'Bạn dễ xem nhu cầu cảm xúc của mình là sự yếu đuối, tự gánh mọi thứ một mình và để người thương đứng ngoài bức tường mà không hay.',
      advice:
        'Cho người khác thấy mình cần họ không làm bạn nhỏ đi — nó làm tình thân lớn lên. Hãy tập nhận sự chăm sóc, không chỉ trao đi; đó cũng là một kỷ luật đáng rèn.',
    },
    aquarius: {
      title: 'Mặt Trăng tại Bảo Bình (Moon in Aquarius)',
      description:
        'Mặt Trăng tại Bảo Bình cho bạn một đời sống cảm xúc được quan sát từ trên cao — như nhà thiên văn ngắm chính bầu trời lòng mình qua kính viễn vọng. Bạn cảm, nhưng đồng thời phân tích cái cảm ấy; khoảng lùi này giúp bạn bình tĩnh lạ thường giữa giông bão của người khác. Bạn thấy an toàn khi được là chính mình không bị phán xét, khi có không gian riêng ngay cả trong những gắn bó sâu đậm. Tình bạn là dưỡng chất của tâm hồn bạn — bạn yêu như một người bạn tri kỷ trước khi là người tình.',
      strengths:
        'Điềm tĩnh, khách quan và bao dung với mọi sự khác biệt; bạn cho người khác tự do làm chính họ — món quà hiếm ai biết trao.',
      challenges:
        'Khoảng cách an toàn của bạn có thể khiến người thương cảm thấy bị đẩy ra xa; bạn dễ "trí thức hóa" cảm xúc thay vì để mình thực sự rung động.',
      advice:
        'Thân mật không phải là mất tự do — hãy thử hạ kính viễn vọng xuống và để một người đến đủ gần. Nói "tôi cảm thấy" thay vì "tôi nghĩ rằng" cũng là một cuộc cách mạng.',
    },
    pisces: {
      title: 'Mặt Trăng tại Song Ngư (Moon in Pisces)',
      description:
        'Mặt Trăng tại Song Ngư khiến tâm hồn bạn như màng lụa mỏng giữa bạn và mọi nỗi niềm của thế gian — bạn thấm cảm xúc của người khác như đất thấm mưa. Trực giác của bạn không chỉ đọc được lòng người mà đôi khi chạm đến những điều ngoài lý giải: giấc mơ báo trước, linh cảm không tên. Bạn thấy an toàn trong những khoảng lặng — âm nhạc, nghệ thuật, cầu nguyện, biển — nơi tâm hồn được hòa vào điều gì đó lớn hơn mình. Lòng trắc ẩn của bạn không có hàng rào; đó vừa là phép màu, vừa là bài học cả đời.',
      strengths:
        'Thấu cảm sâu sắc, trí tưởng tượng phong phú và khả năng chữa lành bằng sự hiện diện dịu dàng; bạn hiểu người khác mà không cần họ nói.',
      challenges:
        'Bạn dễ kiệt sức vì gánh cảm xúc không phải của mình, dễ trốn vào mộng mơ hay những thói quen gây quên để né thực tại thô ráp.',
      advice:
        'Hãy học nghi thức "trả lại": cuối ngày, hình dung mình trả về cho mỗi người nỗi niềm của họ. Ranh giới không làm bạn bớt từ bi — nó giúp lòng từ bi của bạn bền hơn.',
    },
  },

  mercury: {
    aries: {
      title: 'Sao Thủy tại Bạch Dương (Mercury in Aries)',
      description:
        'Sao Thủy tại Bạch Dương cho bạn một tâm trí như tia chớp — ý tưởng đến nhanh, lời nói ra thẳng và quyết định được đưa trong tích tắc. Bạn nghĩ bằng hành động: vừa làm vừa hiểu, học qua va chạm chứ không qua sách hướng dẫn. Trong tranh luận, bạn là chiến binh — sắc bén, trực diện và không ngại châm ngòi cho những cuộc đối thoại người khác né tránh. Lời nói của bạn có lửa, có sức đánh thức; chỉ cần nhớ rằng lửa vừa sưởi ấm vừa có thể làm bỏng.',
      strengths:
        'Tư duy nhanh, quyết đoán và khả năng nói thẳng vào trọng tâm; bạn khơi mào những ý tưởng mới với năng lượng truyền lửa.',
      challenges:
        'Bạn dễ nói trước nghĩ sau, ngắt lời người khác và mất kiên nhẫn với những cuộc trao đổi chậm rãi, nhiều chi tiết.',
      advice:
        'Hãy để người khác nói hết câu — đôi khi nửa câu cuối mới là điều bạn cần nghe. Trước email hay tin nhắn nóng nảy, chờ một giờ rồi đọc lại.',
    },
    taurus: {
      title: 'Sao Thủy tại Kim Ngưu (Mercury in Taurus)',
      description:
        'Sao Thủy tại Kim Ngưu cho bạn một trí tuệ của đất — chậm mà chắc, nghĩ kỹ rồi mới nói, và một khi đã nói thì lời mang trọng lượng. Bạn học tốt nhất qua thực hành và trải nghiệm giác quan: chạm vào, làm thử, lặp lại đến khi thành thạo. Tâm trí bạn không chạy theo mọi ý tưởng mới lấp lánh; nó hỏi một câu giản dị mà sâu sắc: "Điều này có thực sự hữu dụng và bền vững không?". Giọng nói của bạn thường êm và có sức trấn an — người ta tin những gì bạn nói vì bạn không nói thừa.',
      strengths:
        'Tư duy thực tế, trí nhớ bền và lời nói đáng tin cậy; bạn biến ý tưởng trừu tượng thành kế hoạch khả thi.',
      challenges:
        'Bạn dễ cứng nhắc với quan điểm đã định hình và cần nhiều thời gian để tiếp nhận cái mới, đôi khi bỏ lỡ cơ hội vì cân nhắc quá lâu.',
      advice:
        'Mỗi tháng hãy chủ động nghe một quan điểm trái với mình mà không phản bác ngay. Sự chắc chắn quý giá, nhưng tâm trí mở mới là mảnh đất không bao giờ bạc màu.',
    },
    gemini: {
      title: 'Sao Thủy tại Song Tử (Mercury in Gemini)',
      description:
        'Sao Thủy ngự tại chính ngôi nhà của mình — Song Tử — nên tâm trí bạn là một khu chợ ý tưởng sống động không bao giờ đóng cửa. Bạn học nhanh, nói duyên, viết khéo và có khả năng kết nối những mảnh thông tin tưởng chừng rời rạc thành bức tranh bất ngờ. Sự tò mò của bạn không có đáy: một câu hỏi mở ra mười câu hỏi khác, và đó chính là niềm vui sống của bạn. Bạn sinh ra để làm người đưa tin, người kể chuyện, người phiên dịch giữa các thế giới — ngôn từ trong tay bạn là một nhạc cụ.',
      strengths:
        'Lanh lợi, dí dỏm, đa tài trong giao tiếp và học hỏi; bạn khiến những điều phức tạp trở nên dễ hiểu và thú vị.',
      challenges:
        'Tâm trí quá nhanh dễ thành phân tán — nhiều dự án dang dở, nhiều kiến thức rộng mà nông, và đôi khi nói nhiều hơn lắng nghe.',
      advice:
        'Hãy nuôi một "khu vườn sâu" bên cạnh khu chợ rộng: chọn một lĩnh vực để theo đuổi nhiều năm. Im lặng cũng là một dạng đối thoại — hãy thử nó thường hơn.',
    },
    cancer: {
      title: 'Sao Thủy tại Cự Giải (Mercury in Cancer)',
      description:
        'Sao Thủy tại Cự Giải khiến tâm trí bạn suy nghĩ bằng trái tim — bạn không chỉ nghe người ta nói gì mà nghe được cả điều họ không dám nói. Trí nhớ của bạn gắn với cảm xúc: bạn có thể quên con số nhưng không bao giờ quên cảm giác của một khoảnh khắc. Bạn học tốt nhất trong môi trường an toàn, ấm áp, nơi không ai chế giễu câu hỏi của bạn. Lời nói của bạn có khả năng vỗ về hiếm có — khi bạn nói, người ta cảm thấy được ôm. Tư duy của bạn đi theo đường xoắn ốc của trực giác, không theo đường thẳng của logic, và nó thường đến đích sớm hơn.',
      strengths:
        'Lắng nghe sâu, trí nhớ cảm xúc tốt và khả năng giao tiếp đầy thấu cảm; bạn nói được những lời người khác cần nghe đúng lúc.',
      challenges:
        'Bạn dễ tiếp nhận góp ý như công kích cá nhân, và tâm trạng có thể nhuộm màu mọi suy nghĩ khiến nhận định thiếu khách quan.',
      advice:
        'Khi nhận phản hồi, hãy tự nhủ: "Đây là về việc mình làm, không phải về con người mình." Viết nhật ký giúp bạn tách suy nghĩ ra khỏi cơn sóng cảm xúc.',
    },
    leo: {
      title: 'Sao Thủy tại Sư Tử (Mercury in Leo)',
      description:
        'Sao Thủy tại Sư Tử trao cho bạn giọng nói của người kể chuyện bên lửa trại — ấm, vang và có sức hút khiến người ta muốn ngồi lại nghe thêm. Bạn không chỉ truyền đạt thông tin, bạn trình diễn nó: với hình ảnh, với cảm xúc, với cả trái tim đặt vào từng câu chữ. Tư duy của bạn thiên về bức tranh lớn và những ý tưởng truyền cảm hứng; chi tiết vụn vặt khiến bạn ngái ngủ. Bạn học hăng say nhất khi được tỏa sáng — một sân khấu, một lớp học, một dự án mang dấu ấn cá nhân của bạn.',
      strengths:
        'Diễn đạt cuốn hút, tư duy sáng tạo và khả năng truyền cảm hứng qua lời nói; bạn làm cho ý tưởng trở nên sống động và đáng tin.',
      challenges:
        'Lòng kiêu hãnh trí tuệ khiến bạn khó nhận mình sai; bạn dễ nói át người khác và nghe lời khen rõ hơn nghe lời góp ý.',
      advice:
        'Người kể chuyện giỏi nhất cũng là người nghe chuyện giỏi nhất. Thử kết thúc mỗi cuộc trao đổi bằng một câu hỏi thật lòng dành cho người đối diện.',
    },
    virgo: {
      title: 'Sao Thủy tại Xử Nữ (Mercury in Virgo)',
      description:
        'Sao Thủy vừa ngự gia vừa vượng địa tại Xử Nữ — tâm trí bạn là một trong những công cụ tinh xảo nhất của hoàng đạo. Bạn nhìn thấy chi tiết người khác bỏ sót, phát hiện lỗi trong hệ thống chỉ bằng một cái liếc, và có khả năng phân tích rồi sắp xếp mọi thứ thành trật tự sáng rõ. Bạn học bằng cách mổ xẻ: tháo rời vấn đề ra từng mảnh, hiểu từng mảnh, rồi lắp lại hoàn chỉnh hơn. Lời nói của bạn chính xác và hữu dụng — bạn không hứa suông, không nói để lấp khoảng trống.',
      strengths:
        'Phân tích sắc bén, tỉ mỉ, thực tế và có khả năng diễn đạt rõ ràng hiếm có; bạn là người mà ai cũng muốn nhờ rà soát lần cuối.',
      challenges:
        'Tâm trí phê bình của bạn dễ sa vào soi lỗi — ở người khác và khắc nghiệt nhất là ở chính mình; lo âu về chi tiết có thể che mất bức tranh lớn.',
      advice:
        'Trước khi chỉ ra điều chưa ổn, hãy gọi tên một điều đã tốt — với người khác và với chính bạn. Thỉnh thoảng lùi ba bước để hỏi: "Tổng thể này đang đi về đâu?".',
    },
    libra: {
      title: 'Sao Thủy tại Thiên Bình (Mercury in Libra)',
      description:
        'Sao Thủy tại Thiên Bình cho bạn tâm trí của một nhà ngoại giao — bạn tự nhiên nhìn thấy cả hai mặt của mọi vấn đề và có biệt tài diễn đạt sao cho ai nghe cũng thấy được tôn trọng. Tư duy của bạn nở hoa trong đối thoại: bạn nghĩ rõ hơn khi được trao đổi, được phản biện một cách văn minh. Bạn yêu cái đẹp trong ngôn từ — lời nói của bạn thường nhã, cân và dễ nghe như một bản nhạc được phối hài hòa. Công lý và lẽ phải là sợi chỉ đỏ trong cách bạn nhìn nhận thế giới.',
      strengths:
        'Khéo léo, công tâm, giỏi thương lượng và hòa giải; bạn nói được những điều khó nghe theo cách dễ tiếp nhận.',
      challenges:
        'Việc cân nhắc mọi phía khiến bạn do dự kéo dài trước quyết định, và mong muốn được lòng đôi khi làm lời nói của bạn mất đi sự thẳng thắn cần thiết.',
      advice:
        'Đặt cho mình hạn chót khi cần quyết định — cân nhắc thêm không phải lúc nào cũng là cân nhắc tốt hơn. Một sự thật được nói tử tế quý hơn một lời êm tai nửa vời.',
    },
    scorpio: {
      title: 'Sao Thủy tại Thiên Yết (Mercury in Scorpio)',
      description:
        'Sao Thủy tại Thiên Yết cho bạn tâm trí của một thám tử tâm hồn — bạn không nghe bề mặt câu chữ mà nghe động cơ phía sau, không nhìn nụ cười mà nhìn ánh mắt. Tư duy của bạn đào sâu một cách bản năng: nửa vời làm bạn khó chịu, bạn phải hiểu đến tận gốc rễ. Bạn nói ít nhưng mỗi lời như mũi khoan trúng mạch; sự im lặng của bạn cũng là một câu hỏi khiến người đối diện tự khai. Bạn bị hút về những điều ẩn giấu — tâm lý, bí ẩn, những sự thật người đời né tránh — vì bạn biết: ở đó mới có vàng.',
      strengths:
        'Trí tuệ thấu suốt, khả năng nghiên cứu sâu và đọc vị con người chính xác; bạn giữ bí mật như một nấm mồ và được tin cậy vì điều đó.',
      challenges:
        'Sự nghi ngờ có thể khiến bạn thấy âm mưu nơi không có, và lời nói sắc của bạn khi bị tổn thương có thể trở thành vũ khí gây sát thương lâu dài.',
      advice:
        'Không phải ai im lặng cũng đang giấu giếm — đôi khi họ chỉ mệt. Hãy dùng lưỡi dao ngôn từ của bạn để phẫu thuật chữa lành, đừng dùng để trả đũa.',
    },
    sagittarius: {
      title: 'Sao Thủy tại Nhân Mã (Mercury in Sagittarius)',
      description:
        'Sao Thủy hãm địa tại Nhân Mã — tâm trí bạn không sinh ra cho chi tiết vụn mà cho những chân trời ý tưởng. Bạn tư duy bằng bức tranh lớn: triết lý, ý nghĩa, mối liên hệ giữa vạn vật; chính xác từng dấu phẩy không phải sở trường, nhưng nhìn ra hướng đi của cả khu rừng thì hiếm ai bằng bạn. Bạn học qua trải nghiệm và phiêu lưu — một chuyến đi dạy bạn nhiều hơn mười cuốn giáo trình. Lời nói của bạn thẳng, nhiệt và truyền lửa; bạn là người thầy bẩm sinh kể cả khi không đứng lớp.',
      strengths:
        'Tầm nhìn rộng, tư duy lạc quan và khả năng truyền đạt ý nghĩa lớn một cách hào hứng; bạn mở rộng thế giới quan của người đối thoại.',
      challenges:
        'Bạn dễ phóng đại, hứa quá tay, bỏ sót chi tiết quan trọng và đôi khi thẳng đến mức vô tình làm tổn thương người nghe.',
      advice:
        'Trước khi tuyên bố, hãy kiểm tra lại dữ kiện một lần — sự thật lớn cần được chống đỡ bằng sự thật nhỏ. Thẳng thắn cộng thêm một chút dịu dàng sẽ đi xa gấp đôi.',
    },
    capricorn: {
      title: 'Sao Thủy tại Ma Kết (Mercury in Capricorn)',
      description:
        'Sao Thủy tại Ma Kết cho bạn một tâm trí kiến trúc sư — suy nghĩ có cấu trúc, lời nói có mục đích và kế hoạch luôn được dựng trên nền móng thực tế. Bạn học chậm mà chắc, theo kiểu xây tường: viên gạch nào đặt xuống là nằm yên ở đó vĩnh viễn. Trong giao tiếp, bạn không hoa mỹ nhưng đáng tin; người ta tìm đến bạn khi cần lời khuyên nghiêm túc, không phải lời an ủi suông. Tư duy của bạn luôn hỏi: "Điều này dẫn đến đâu trong mười năm nữa?" — và chính tầm nhìn dài hạn ấy là tài sản quý nhất của bạn.',
      strengths:
        'Tư duy chiến lược, kỷ luật trí tuệ và khả năng biến ý tưởng thành lộ trình cụ thể; lời bạn nói ra có trọng lượng của sự đáng tin.',
      challenges:
        'Bạn dễ bi quan, gạt bỏ ý tưởng mới vì "không thực tế" quá sớm, và sự nghiêm nghị trong giao tiếp đôi khi tạo khoảng cách không cần thiết.',
      advice:
        'Hãy cho những ý tưởng "viển vông" năm phút trình bày trước khi phán quyết — vài công trình vĩ đại nhất từng bị gọi là điên rồ. Một chút hài hước không làm sập cấu trúc nào cả.',
    },
    aquarius: {
      title: 'Sao Thủy tại Bảo Bình (Mercury in Aquarius)',
      description:
        'Sao Thủy tại Bảo Bình cho bạn một tâm trí đến từ tương lai — bạn nhìn vấn đề từ những góc không ai nghĩ tới và đặt câu hỏi với chính những tiền đề mà người khác mặc nhiên chấp nhận. Tư duy của bạn khách quan, hệ thống và độc lập một cách kiên cường: đám đông nghĩ gì không phải là lý do để bạn nghĩ theo. Bạn bị hút về khoa học, công nghệ, những ý tưởng cải cách và mọi điều phụng sự bức tranh lớn của nhân loại. Trong tranh luận, bạn lạnh và sáng như sao — không cay cú, chỉ đi tìm chân lý.',
      strengths:
        'Sáng tạo đột phá, tư duy logic khách quan và tầm nhìn vượt thời đại; bạn nhìn thấy giải pháp ở nơi người khác chỉ thấy bế tắc.',
      challenges:
        'Bạn dễ cố chấp với quan điểm của mình một cách nghịch lý — cởi mở với mọi ý tưởng trừ việc mình có thể sai; sự lý trí thuần túy đôi khi bỏ quên yếu tố con người.',
      advice:
        'Chân lý hay nhất là chân lý có chỗ cho trái tim. Khi trình bày ý tưởng mới, hãy bắt đầu từ nơi người nghe đang đứng, đừng bắt họ nhảy thẳng đến tương lai cùng bạn.',
    },
    pisces: {
      title: 'Sao Thủy tại Song Ngư (Mercury in Pisces)',
      description:
        'Sao Thủy hãm địa tại Song Ngư — tâm trí bạn không vận hành bằng logic đường thẳng mà bằng hình ảnh, trực giác và những kết nối mơ hồ nhưng kỳ diệu chính xác. Bạn nghĩ như nhà thơ: một ý tưởng đến với bạn trọn vẹn như giấc mơ, dù việc diễn giải nó thành các bước 1-2-3 có thể khiến bạn lúng túng. Bạn nghe được giữa các dòng chữ, hiểu được điều chưa thành lời, và học tốt nhất qua câu chuyện, âm nhạc, hình ảnh thay vì gạch đầu dòng. Trí tưởng tượng của bạn là một đại dương — và đôi khi, cũng là nơi bạn lạc.',
      strengths:
        'Trực giác ngôn ngữ, trí tưởng tượng phong phú và khả năng giao tiếp đầy chất thơ, chữa lành; bạn hiểu con người sâu hơn mọi dữ liệu.',
      challenges:
        'Suy nghĩ dễ mơ hồ, hay quên chi tiết thực tế và dễ bị cảm xúc hoặc mong ước làm nhòe ranh giới giữa điều có thật và điều mình muốn là thật.',
      advice:
        'Hãy ghi chép — sổ tay là chiếc neo cho tâm trí đại dương của bạn. Trước quyết định quan trọng, kiểm chứng trực giác bằng một vài dữ kiện cụ thể; mơ và đo không loại trừ nhau.',
    },
  },

  venus: {
    aries: {
      title: 'Sao Kim tại Bạch Dương (Venus in Aries)',
      description:
        'Sao Kim hãm địa tại Bạch Dương — nàng thơ của tình yêu khoác áo giáp chiến binh trong bản đồ sao của bạn. Bạn yêu như đánh trận: nhanh, nồng nhiệt, trực diện và không úp mở. Khi tim bạn rung động, cả thế giới biết — bạn không có gen của sự mập mờ. Bạn bị hấp dẫn bởi sự thử thách, sự mới mẻ, ngọn lửa của giai đoạn chinh phục; với bạn, tình yêu phải sống động như một cuộc phiêu lưu. Thẩm mỹ của bạn cũng vậy: táo bạo, rực rỡ, có cá tính — bạn ghét sự nhạt nhòa hơn ghét sự sai.',
      strengths:
        'Chân thành, nhiệt huyết và can đảm trong tình yêu; bạn giữ cho mối quan hệ luôn tươi mới và không bao giờ để người mình yêu phải đoán mò.',
      challenges:
        'Lửa rơm dễ cháy nhanh tàn nhanh — bạn có thể mất hứng khi giai đoạn chinh phục kết thúc, và sự nóng vội khiến tình yêu thiếu thời gian bén rễ.',
      advice:
        'Tình yêu sâu là cuộc phiêu lưu lớn nhất — chỉ là phiêu lưu của chiều sâu thay vì tốc độ. Hãy học tìm sự mới mẻ bên trong một người, thay vì nơi một người mới.',
    },
    taurus: {
      title: 'Sao Kim tại Kim Ngưu (Venus in Taurus)',
      description:
        'Sao Kim ngự tại chính ngôi nhà của mình — Kim Ngưu — nên trong bạn, tình yêu và cái đẹp đạt đến dạng thuần khiết nhất: chậm rãi, trọn vẹn và đầy cảm quan. Bạn yêu bằng cả năm giác quan — qua bữa ăn nấu bằng tâm ý, qua cái chạm tay không vội, qua sự hiện diện bền bỉ ngày này qua tháng khác. Với bạn, tình yêu không phải pháo hoa mà là lò sưởi: ấm lâu, cháy bền và đáng để quay về. Bạn trân quý những giá trị thật — sự chung thủy, sự ổn định, vẻ đẹp mộc mà sang của những điều được làm tử tế.',
      strengths:
        'Chung thủy, ấm áp, kiên định và biết tận hưởng; tình yêu của bạn là nơi người ta được nghỉ ngơi và cảm thấy đủ đầy.',
      challenges:
        'Sự gắn bó dễ nghiêng thành chiếm hữu; bạn có thể ở lại quá lâu trong một mối quan hệ đã cạn chỉ vì ngại thay đổi và sợ mất mát.',
      advice:
        'Yêu một người không có nghĩa là sở hữu họ — bàn tay mở giữ được nhiều hơn bàn tay nắm chặt. Thỉnh thoảng hãy làm mới mối quan hệ bằng một trải nghiệm chưa từng có cùng nhau.',
    },
    gemini: {
      title: 'Sao Kim tại Song Tử (Venus in Gemini)',
      description:
        'Sao Kim tại Song Tử khiến trái tim bạn phải lòng qua ngả của tâm trí — một cuộc trò chuyện thông minh quyến rũ bạn hơn mọi ánh nến. Bạn yêu sự dí dỏm, sự đa dạng, những tin nhắn bất ngờ giữa ngày và người tình đồng thời là người bạn nói chuyện không chán. Tình yêu với bạn cần không khí để thở: sự tự do, sự nhẹ nhõm, tiếng cười. Thẩm mỹ của bạn tươi trẻ và biến hóa — bạn chán sự lặp lại nhanh như chán một câu chuyện đã nghe hai lần.',
      strengths:
        'Duyên dáng, hài hước và giỏi giữ cho tình yêu luôn có chuyện để nói; bạn yêu cả con người lẫn tâm hồn của đối phương.',
      challenges:
        'Sự tò mò của trái tim dễ thành thiếu kiên định — bạn có thể né những cuộc trò chuyện cảm xúc sâu bằng sự hóm hỉnh, và chán khi tình yêu bước vào mùa lặng.',
      advice:
        'Có những chương của tình yêu được viết trong im lặng — đừng vội lật trang. Hãy thử nói về cảm xúc của chính bạn sâu như cách bạn nói về mọi đề tài khác.',
    },
    cancer: {
      title: 'Sao Kim tại Cự Giải (Venus in Cancer)',
      description:
        'Sao Kim tại Cự Giải cho bạn cách yêu của vầng trăng — dịu dàng, chở che và sâu như đáy biển. Bạn yêu bằng sự chăm sóc: nấu cho người ấy bát canh nóng, nhớ những ngày quan trọng, xây một tổ ấm nơi cả hai được là chính mình. Với bạn, tình yêu và cảm giác "nhà" là một; bạn không tìm người tình cho cuối tuần mà tìm người thân cho cả đời. Trái tim bạn có lớp vỏ thận trọng, nhưng một khi ai đó được mời vào trong, họ được yêu trọn vẹn theo cách hiếm có trên đời.',
      strengths:
        'Tận tụy, thủy chung và trực giác bén nhạy với nhu cầu của người mình yêu; tình yêu của bạn nuôi dưỡng và chữa lành.',
      challenges:
        'Bạn dễ tủi thân vì những điều không nói ra, dễ bám víu vì sợ bị bỏ rơi, và đôi khi chăm sóc người khác như một cách để gián tiếp xin được yêu.',
      advice:
        'Hãy nói thẳng điều bạn cần thay vì hy vọng người ấy tự hiểu — yêu cầu không làm tình yêu bớt lãng mạn. Tổ ấm vững nhất xây trên hai người trọn vẹn, không phải hai nửa dựa nhau.',
    },
    leo: {
      title: 'Sao Kim tại Sư Tử (Venus in Leo)',
      description:
        'Sao Kim tại Sư Tử khiến bạn yêu như mặt trời tỏa nắng — rực rỡ, hào phóng và không giấu giếm. Khi yêu, bạn muốn cả thế giới biết; bạn tặng quà lớn, nói lời ngọt và biến những ngày thường thành lễ kỷ niệm. Bạn cần được ngưỡng mộ và trân trọng một cách rõ ràng — với bạn, tình yêu mà không có sự nồng nhiệt thì như sân khấu không đèn. Lòng chung thủy của bạn mang phẩm chất vương giả: một khi đã trao tim, bạn bảo vệ người ấy bằng cả danh dự của mình. Thẩm mỹ của bạn sang trọng, ấm áp và luôn có chút lộng lẫy.',
      strengths:
        'Nồng nhiệt, hào phóng và trung thành; bạn làm cho người mình yêu cảm thấy họ là người đặc biệt nhất thế gian.',
      challenges:
        'Nhu cầu được ngưỡng mộ dễ biến thành đòi hỏi; lòng kiêu hãnh có thể khiến bạn tổn thương sâu vì những điều nhỏ và khó mở lời làm hòa trước.',
      advice:
        'Tình yêu chín muồi không cần khán giả — những khoảnh khắc không ai thấy mới là vàng ròng. Khi tự ái trỗi dậy, hãy hỏi: mình muốn đúng, hay muốn gần nhau?',
    },
    virgo: {
      title: 'Sao Kim tại Xử Nữ (Venus in Virgo)',
      description:
        'Sao Kim hãm địa tại Xử Nữ — tình yêu trong bạn không nói bằng hoa hồng mà bằng những hành động lặng lẽ chính xác: sửa cái kệ hỏng, để sẵn viên thuốc, nhớ rằng người ấy không ăn rau mùi. Yêu, với bạn, là một động từ được chia ở thì hiện tại liên tục. Bạn không phải lòng vẻ hào nhoáng mà phải lòng sự tử tế thật, sự đáng tin và những phẩm chất bền bỉ. Thẩm mỹ của bạn tinh giản và thanh sạch — cái đẹp với bạn nằm ở sự vừa vặn, chỉn chu, không phô trương.',
      strengths:
        'Tận tâm, chu đáo và đáng tin trong tình yêu; bạn yêu bằng sự thật của hành động chứ không bằng lời hứa gió bay.',
      challenges:
        'Con mắt hoàn hảo dễ soi vào người mình yêu — và vào chính mình với câu hỏi "mình đã đủ tốt chưa"; sự phê bình nhỏ giọt có thể bào mòn sự lãng mạn.',
      advice:
        'Người yêu bạn cần được yêu như họ đang là, không phải như phiên bản đã chỉnh sửa. Hãy để mình được chăm sóc ngược lại — nhận cũng là một cách trao.',
    },
    libra: {
      title: 'Sao Kim tại Thiên Bình (Venus in Libra)',
      description:
        'Sao Kim ngự tại ngôi nhà của mình — Thiên Bình — nên bạn mang trong tim nghệ thuật yêu thuần khiết: tinh tế, lãng mạn và đầy nhịp điệu của sự sẻ chia. Với bạn, tình yêu là một điệu khiêu vũ đôi — phải có qua có lại, có lắng nghe và được lắng nghe, có cái đẹp trong cả cách giận hờn. Bạn sinh ra cho sự gắn bó: một mình, bạn vẫn ổn, nhưng có đôi, bạn nở hoa. Gu thẩm mỹ của bạn hài hòa và thanh lịch bẩm sinh; bạn biến mọi không gian, mọi mối quan hệ mình chạm vào trở nên dễ chịu hơn.',
      strengths:
        'Lãng mạn, công bằng, tinh tế và giỏi vun đắp sự hòa hợp; bạn làm cho tình yêu trở nên đẹp như một tác phẩm nghệ thuật.',
      challenges:
        'Nỗi sợ làm mất lòng khiến bạn nhân nhượng quá mức và tích tụ bất mãn ngầm; bạn cũng dễ yêu "ý niệm về tình yêu" hơn là con người thật trước mặt.',
      advice:
        'Một cuộc cãi nhau trung thực đôi khi lành mạnh hơn mười ngày hòa bình giả. Hãy yêu con người thật với những vết xước của họ — đó mới là nghệ thuật đỉnh cao.',
    },
    scorpio: {
      title: 'Sao Kim tại Thiên Yết (Venus in Scorpio)',
      description:
        'Sao Kim hãm địa tại Thiên Yết — tình yêu trong bạn không phải dòng suối mà là vực sâu: mãnh liệt, trọn vẹn và không chấp nhận nửa vời. Bạn không biết yêu hời hợt; hoặc là tất cả, hoặc không gì cả. Bạn khao khát sự thân mật tuyệt đối — không chỉ thể xác mà cả tâm hồn: bạn muốn biết những bí mật, chạm vào những vết sẹo, được tin tưởng đến tận đáy. Tình yêu với bạn là sự chuyển hóa: người yêu bạn thật sự sẽ không bao giờ còn là người cũ. Sức hút của bạn có chất nam châm — lặng lẽ mà không thể cưỡng.',
      strengths:
        'Sâu sắc, chung thủy tuyệt đối và can đảm yêu bằng cả vực thẳm của mình; sự thân mật bạn trao là trải nghiệm hiếm có của một đời người.',
      challenges:
        'Nỗi sợ phản bội sinh ra ghen tuông, kiểm soát và những phép thử lòng âm thầm; khi tổn thương, bạn có thể đóng băng hoặc trả đũa thay vì đối thoại.',
      advice:
        'Tin tưởng là một lựa chọn can đảm, không phải kết quả của việc giám sát. Hãy nói ra nỗi sợ thay vì thử lòng — người xứng đáng sẽ ở lại vì được tin, không phải vì bị giữ.',
    },
    sagittarius: {
      title: 'Sao Kim tại Nhân Mã (Venus in Sagittarius)',
      description:
        'Sao Kim tại Nhân Mã khiến trái tim bạn phải lòng những chân trời — bạn yêu người mở rộng thế giới của bạn, người cùng bạn cười giữa đường xa và bàn về ý nghĩa cuộc đời lúc nửa đêm. Tình yêu với bạn phải là một cuộc phiêu lưu chung, không phải chiếc lồng đôi; bạn cần người yêu đồng thời là bạn đồng hành. Bạn yêu thẳng thắn, hào sảng và không tính toán — khi thương ai, bạn thương cả sự vụng về của họ. Thẩm mỹ của bạn phóng khoáng, đậm hơi thở của những miền đất và nền văn hóa bạn đi qua.',
      strengths:
        'Chân thành, lạc quan, rộng lượng và không chiếm hữu; tình yêu của bạn cho người ta cảm giác được tự do mà vẫn được thương.',
      challenges:
        'Nỗi sợ ràng buộc khiến bạn chùn bước trước cam kết; bạn dễ lý tưởng hóa giai đoạn đầu rồi bồn chồn khi tình yêu cần sự vun trồng lặp lại mỗi ngày.',
      advice:
        'Cam kết không phải là dấu chấm hết của tự do — với đúng người, đó là tấm hộ chiếu sang một lục địa mới. Hãy tìm sự phiêu lưu trong chiều sâu, không chỉ trong khoảng cách.',
    },
    capricorn: {
      title: 'Sao Kim tại Ma Kết (Venus in Capricorn)',
      description:
        'Sao Kim tại Ma Kết cho bạn cách yêu của núi — không ồn ào, không phô trương, nhưng đứng đó qua mọi mùa giông bão. Bạn yêu nghiêm túc và có chủ đích: bạn không hẹn hò để giải trí mà để xây dựng, và một khi cam kết, lời của bạn vững như đá tạc. Bạn thể hiện tình cảm qua sự đáng tin — có mặt đúng lúc, gánh vác không than, lo cho tương lai chung bằng những kế hoạch cụ thể. Bạn bị hấp dẫn bởi sự chín chắn, bản lĩnh và những giá trị bền vững; với bạn, tình yêu đẹp nhất là tình yêu trưởng thành cùng năm tháng, như rượu quý.',
      strengths:
        'Chung thủy, trách nhiệm và bền bỉ; tình yêu của bạn là nơi người ta có thể xây cả một cuộc đời lên trên.',
      challenges:
        'Bạn dè sẻn lời yêu và cử chỉ âu yếm đến mức người thương có thể đói tình cảm giữa sự đủ đầy; nỗi sợ tổn thương khoác áo của sự "thực tế".',
      advice:
        'Sự dịu dàng không phải khoản đầu tư rủi ro — hãy nói lời yêu khi tim bạn nghĩ đến nó, đừng để dành. Đôi khi món quà lớn nhất bạn trao là cho người ấy thấy mình cũng biết yếu lòng.',
    },
    aquarius: {
      title: 'Sao Kim tại Bảo Bình (Venus in Aquarius)',
      description:
        'Sao Kim tại Bảo Bình khiến bạn yêu trước hết bằng tình bạn — người chiếm được tim bạn phải chiếm được tâm trí bạn trước. Bạn cần một tình yêu có không gian thở: hai con người trọn vẹn đi cạnh nhau, không hòa tan, không sở hữu. Cách yêu của bạn khác thường một cách tự nhiên — bạn dị ứng với kịch bản tình yêu sáo mòn và những vai diễn xã hội áp đặt. Bạn trân trọng sự độc đáo của người mình thương hơn vẻ ngoài của họ; với bạn, "lạ" là một lời khen. Tình yêu lý tưởng của bạn vừa thân thiết vừa tự do — như hai vì sao chung một chòm.',
      strengths:
        'Cởi mở, tôn trọng tự do của đối phương và chung thủy theo cách riêng bền bỉ; bạn yêu con người thật, không yêu chiếc mặt nạ.',
      challenges:
        'Sự lý trí và khoảng cách an toàn của bạn có thể khiến người thương thấy lạnh; bạn dễ né những cuộc trò chuyện cảm xúc bằng cách trừu tượng hóa chúng.',
      advice:
        'Thân mật sâu sắc không nuốt chửng tự do của bạn — hãy thử để một người thấy trái tim bạn, không qua bộ lọc của trí tuệ. Đôi khi điều cấp tiến nhất là một lời yêu giản dị.',
    },
    pisces: {
      title: 'Sao Kim tại Song Ngư (Venus in Pisces)',
      description:
        'Sao Kim vượng địa tại Song Ngư — tình yêu trong bạn đạt đến độ tinh khiết của nước nguồn: vô điều kiện, bao dung và đầy chất thơ. Bạn yêu bằng cả tâm hồn, không giữ lại gì; khi thương ai, bạn cảm được niềm vui nỗi buồn của họ như của chính mình. Tình yêu với bạn mang màu nhiệm — bạn tin vào duyên phận, vào sự đồng điệu của hai linh hồn, vào những điều mắt thường không thấy. Thẩm mỹ của bạn mộng ảo và sâu lắng: âm nhạc, nghệ thuật, ánh sáng mờ của hoàng hôn trên mặt nước. Trái tim bạn là một món quà hiếm — và vì thế cần được trao đúng người.',
      strengths:
        'Bao dung, lãng mạn, thấu cảm và có khả năng yêu vô điều kiện; tình yêu của bạn chữa lành những vết thương mà người ấy tưởng đã thành sẹo vĩnh viễn.',
      challenges:
        'Bạn dễ lý tưởng hóa người yêu rồi vỡ mộng, dễ hy sinh đến quên mình và yêu cả những người chỉ biết nhận; ranh giới là bài học khó nhất của bạn.',
      advice:
        'Hãy yêu con người thật, không phải tiềm năng của họ trong tưởng tượng của bạn. Lòng bao dung cần đôi mắt mở — cứu một người không phải là nhiệm vụ của tình yêu.',
    },
  },

  mars: {
    aries: {
      title: 'Sao Hỏa tại Bạch Dương (Mars in Aries)',
      description:
        'Sao Hỏa ngự tại chính ngôi nhà của mình — Bạch Dương — nên năng lượng hành động trong bạn thuần khiết và mạnh mẽ nhất hoàng đạo: thấy là làm, muốn là tiến, ngã là đứng dậy ngay. Bạn không chờ điều kiện hoàn hảo; chính hành động của bạn tạo ra điều kiện. Khi chiến đấu, bạn trực diện và sòng phẳng — đánh nhanh, nói thẳng và không đâm sau lưng ai bao giờ. Dục vọng của bạn nóng và thẳng như chính bạn: bạn theo đuổi điều mình muốn với sự tự tin của ngọn lửa đầu tiên.',
      strengths:
        'Dũng cảm, quyết liệt, hành động tức thì và khả năng tiên phong bẩm sinh; bạn là người nổ phát súng khởi đầu cho mọi cuộc chuyển mình.',
      challenges:
        'Nóng nảy, thiếu kiên nhẫn và dễ bỏ cuộc giữa chừng khi trận chiến kéo dài; cơn giận bùng nhanh của bạn có thể đốt cháy những cây cầu cần giữ.',
      advice:
        'Hãy chọn trận đáng đánh — không phải mọi lá cờ đỏ đều đáng để bạn lao vào. Rèn sức bền bên cạnh tốc độ: người thắng cuộc đua dài không phải kẻ xuất phát nhanh nhất.',
    },
    taurus: {
      title: 'Sao Hỏa tại Kim Ngưu (Mars in Taurus)',
      description:
        'Sao Hỏa hãm địa tại Kim Ngưu — ngọn lửa hành động trong bạn không bùng mà âm ỉ, như lò than giữ nhiệt qua đêm dài. Bạn khởi động chậm, nhưng một khi đã vào guồng thì không gì cản nổi: sức bền của bạn nghiền nát mọi trở ngại bằng sự lì lợm điềm tĩnh. Bạn chiến đấu kiểu phòng thủ kiên cố — hiếm khi gây hấn, nhưng ai đụng đến những gì bạn trân quý sẽ gặp một bức tường thành. Dục vọng của bạn đậm chất cảm quan và bền bỉ: bạn không vồ vập mà thưởng thức, chậm rãi và trọn vẹn.',
      strengths:
        'Sức bền vô địch, quyết tâm sắt đá và khả năng hoàn thành những việc đòi hỏi năm này qua năm khác; bạn làm gì cũng chắc chắn và có kết quả thật.',
      challenges:
        'Sự ì và cố chấp khiến bạn khó đổi hướng kể cả khi con đường cũ đã tắc; cơn giận của bạn hiếm khi nổ nhưng khi nổ thì như núi lửa tích áp lâu năm.',
      advice:
        'Đừng để cơn giận tích lũy thành dung nham — hãy xả áp sớm bằng những cuộc nói chuyện thẳng thắn nhỏ. Thỉnh thoảng tự hỏi: mình đang kiên trì, hay chỉ đang ngại rẽ?',
    },
    gemini: {
      title: 'Sao Hỏa tại Song Tử (Mars in Gemini)',
      description:
        'Sao Hỏa tại Song Tử biến năng lượng chiến đấu của bạn thành vũ khí của ngôn từ và trí tuệ — bạn không đấu bằng nắm đấm mà bằng lập luận sắc như dao mổ. Năng lượng của bạn phân nhánh: bạn làm việc hăng nhất khi có hai ba dự án chạy song song, vì sự đơn điệu là kẻ thù số một của động lực trong bạn. Bạn hành động nhanh, ứng biến giỏi và luôn có phương án B trước khi người khác kịp nghĩ phương án A. Dục vọng của bạn bắt đầu từ tâm trí — sự thông minh và lời nói duyên là chất dẫn lửa mạnh nhất với bạn.',
      strengths:
        'Nhanh nhẹn, linh hoạt, đa nhiệm và bất bại trong tranh luận; bạn giải quyết vấn đề bằng sự khéo léo thay vì sức mạnh thô.',
      challenges:
        'Năng lượng phân tán khiến nhiều việc dang dở; sự bồn chồn làm bạn khó theo một mục tiêu dài hơi, và lưỡi sắc của bạn lúc nóng giận có thể cứa sâu hơn bạn tưởng.',
      advice:
        'Hãy giới hạn số mặt trận mở cùng lúc — ba là đủ cho cả một đạo quân. Khi tức giận, viết ra trước khi nói ra; bản nháp đầu tiên của cơn giận hiếm khi nên được công bố.',
    },
    cancer: {
      title: 'Sao Hỏa tại Cự Giải (Mars in Cancer)',
      description:
        'Sao Hỏa hãm địa tại Cự Giải — ngọn lửa hành động của bạn cháy dưới mặt nước, và đó là một dạng sức mạnh khác thường mà chính bạn đôi khi chưa nhận ra. Bạn không tấn công trực diện mà di chuyển như con sóng: vòng, lựa, kiên trì cho đến khi đá cũng phải mòn. Động lực của bạn gắn chặt với cảm xúc — khi tim bạn đã thuận, bạn làm việc bằng năng lượng phi thường; khi lòng không yên, mọi cỗ máy đều ì. Bạn chiến đấu mãnh liệt nhất không phải cho mình mà cho người mình thương: như gấu mẹ, hiền lành cho đến khi ai đó chạm vào tổ ấm của bạn.',
      strengths:
        'Bản năng bảo vệ mạnh mẽ, sự bền bỉ thầm lặng và trực giác biết chính xác lúc nào nên tiến, lúc nào nên lùi.',
      challenges:
        'Bạn dễ hờn dỗi và gây hấn thụ động thay vì nói thẳng điều khiến mình tức giận; cảm xúc dồn nén lâu ngày có thể trào ra thành những cơn sóng bất ngờ.',
      advice:
        'Cơn giận của bạn là thông tin quý — hãy nói nó ra khi còn là gợn sóng, đừng đợi thành bão. Tập tách quyết định hành động khỏi tâm trạng của ngày hôm đó.',
    },
    leo: {
      title: 'Sao Hỏa tại Sư Tử (Mars in Leo)',
      description:
        'Sao Hỏa tại Sư Tử cho bạn năng lượng hành động của đấng quân vương — bạn không chỉ muốn làm được việc mà muốn làm với phong cách, với dấu ấn, với cả trái tim đặt vào. Động lực của bạn bùng cháy nhất khi công việc mang tên bạn: một dự án sáng tạo, một vai trò dẫn dắt, một sứ mệnh đáng tự hào. Bạn chiến đấu công khai và đường hoàng — khinh thường trò đâm lén — và bảo vệ người của mình với lòng quả cảm của sư tử đầu đàn. Dục vọng của bạn nồng nhiệt và lãng mạn: bạn muốn được khao khát, không chỉ được chấp nhận.',
      strengths:
        'Nhiệt huyết bền, ý chí kiêu hãnh và khả năng lãnh đạo truyền lửa; bạn nâng tầm mọi việc mình chạm vào bằng sự tận tâm trình diễn.',
      challenges:
        'Cái tôi dễ biến mục tiêu chung thành cuộc chiến danh dự cá nhân; bạn khó nhận sai giữa chừng và dễ tự ái khi nỗ lực không được ghi nhận.',
      advice:
        'Hãy để kết quả là vương miện, đừng đòi vương miện trước khi xung trận. Sức mạnh lớn nhất của nhà vua là biết lùi một bước cho đại cục.',
    },
    virgo: {
      title: 'Sao Hỏa tại Xử Nữ (Mars in Virgo)',
      description:
        'Sao Hỏa tại Xử Nữ rèn năng lượng hành động của bạn thành lưỡi dao mổ — chính xác, hiệu quả và không phí một gam sức lực nào. Bạn không lao vào việc; bạn phân tích, lên quy trình rồi thực thi với độ hoàn thiện khiến người khác nể phục. Động lực của bạn đến từ sự hữu ích: bạn làm việc hăng nhất khi biết công sức mình thực sự cải thiện điều gì đó. Bạn chiến đấu bằng dữ kiện và logic, từng bước tháo gỡ lập luận đối phương như tháo một cỗ máy. Với bạn, kỷ luật không phải gông cùm mà là đôi cánh.',
      strengths:
        'Hiệu quả, kỷ luật, khéo léo và bền bỉ trong những việc đòi hỏi độ chính xác; bạn là người biến kế hoạch trên giấy thành hiện thực chạy trơn tru.',
      challenges:
        'Chủ nghĩa hoàn hảo khiến bạn mài giũa mãi không dám ra mắt; bạn dễ làm việc đến kiệt sức và trút sự khó chịu thành những lời phê bình tỉ mẩn.',
      advice:
        'Hoàn thành tốt hơn hoàn hảo — hãy đặt tiêu chuẩn "đủ tốt để ra khơi" cho từng việc. Nghỉ ngơi không phải phần thưởng sau khi xong việc; nó là một phần của quy trình.',
    },
    libra: {
      title: 'Sao Hỏa tại Thiên Bình (Mars in Libra)',
      description:
        'Sao Hỏa hãm địa tại Thiên Bình — chiến binh trong bạn khoác lễ phục của nhà ngoại giao, và đó vừa là cái khó vừa là biệt tài của bạn. Bạn ngần ngại trước xung đột trực diện; bản năng đầu tiên của bạn là cân nhắc mọi phía, tìm giải pháp cùng thắng, giữ cho không ai mất mặt. Sự do dự khi cần quyết đoán là bài học cả đời — nhưng bù lại, khi chiến đấu cho công lý hay cho người khác, bạn sắc bén và kiên cường đến bất ngờ. Bạn hành động hiệu quả nhất khi có đồng minh: năng lượng của bạn nhân đôi trong sự hợp tác.',
      strengths:
        'Tài thương lượng, chiến lược khéo léo và khả năng chiến đấu cho lẽ phải một cách văn minh; bạn thắng những trận mà không cần ai phải thua đau.',
      challenges:
        'Sự do dự và né tránh xung đột khiến bạn trì hoãn quyết định, dồn nén bất mãn và đôi khi hành động vòng vo thay vì nói thẳng điều mình muốn.',
      advice:
        'Quyết định "đủ tốt" hôm nay thắng quyết định hoàn hảo không bao giờ đến. Hãy nhớ: xung đột trung thực, đúng mực là một hình thái của sự công bằng mà bạn tôn thờ.',
    },
    scorpio: {
      title: 'Sao Hỏa tại Thiên Yết (Mars in Scorpio)',
      description:
        'Sao Hỏa ngự gia tại Thiên Yết — đây là một trong những vị trí quyền năng nhất của hành tinh chiến binh: ý chí của bạn không phải ngọn lửa mà là dòng magma, lặng lẽ, nóng rực và không thể ngăn. Bạn không phô trương sức mạnh; bạn tích lũy nó, nhắm mục tiêu và đi đến cùng với sự tập trung của loài săn mồi kiên nhẫn nhất. Khi người khác bỏ cuộc ở vòng ba, bạn mới bắt đầu nóng máy. Bạn chiến đấu bằng chiến lược, bằng sự thấu hiểu điểm yếu đối phương, và không bao giờ để lộ bài. Dục vọng của bạn sâu và mãnh liệt — với bạn, đam mê là sự hòa tan trọn vẹn, không phải trò tiêu khiển.',
      strengths:
        'Ý chí thép, sức tập trung tuyệt đối và khả năng hồi sinh từ tro tàn; nghịch cảnh càng lớn, bạn càng mạnh.',
      challenges:
        'Xu hướng kiểm soát, thù dai và "được ăn cả ngã về không" có thể biến sức mạnh của bạn thành con dao tự cứa; bạn khó buông những trận chiến đã hết ý nghĩa.',
      advice:
        'Hãy dùng quyền năng để chuyển hóa, đừng để trả đũa — báo thù là cách trao cho người cũ quyền điều khiển tương lai của bạn. Học buông một trận chiến cũng là một chiến thắng.',
    },
    sagittarius: {
      title: 'Sao Hỏa tại Nhân Mã (Mars in Sagittarius)',
      description:
        'Sao Hỏa tại Nhân Mã thắp trong bạn năng lượng của mũi tên rời cung — hành động của bạn luôn hướng về một mục tiêu xa và một ý nghĩa lớn. Bạn không thể đổ mồ hôi cho điều mình không tin; nhưng khi đã tin, bạn chiến đấu với nhiệt huyết của người truyền giáo và sức bật của vận động viên. Năng lượng của bạn cần không gian: vận động, xê dịch, những dự án mở ra chân trời thay vì giam mình trong quy trình. Bạn chiến đấu thẳng và quang minh — nói thật vào mặt, không gài bẫy sau lưng — và cơn giận của bạn tan nhanh như mưa rào nhiệt đới.',
      strengths:
        'Nhiệt huyết, lạc quan, dám nghĩ lớn và hành động vì lý tưởng; bạn kéo cả đoàn người về phía trước bằng niềm tin của mình.',
      challenges:
        'Bạn dễ hứa nhiều hơn sức, hành động ẩu vì quá tự tin và bỏ cuộc khi cuộc phiêu lưu biến thành công việc đều đặn cần sự tỉ mỉ.',
      advice:
        'Mũi tên cần được ngắm trước khi buông — hãy dành mười phút lập kế hoạch cho mỗi giờ nhiệt huyết. Học yêu chặng giữa của hành trình, nơi vinh quang chưa thấy mà mồ hôi đã rơi.',
    },
    capricorn: {
      title: 'Sao Hỏa tại Ma Kết (Mars in Capricorn)',
      description:
        'Sao Hỏa vượng địa tại Ma Kết — ngọn lửa chiến binh trong bạn được tôi thành thép: lạnh, bền và định hướng tuyệt đối. Bạn không phung phí năng lượng vào những cơn bốc đồng; mỗi hành động của bạn là một bước tính toán trên con đường lên đỉnh. Tham vọng của bạn có kỷ luật của nhà leo núi chuyên nghiệp: biết khi nào tiến, khi nào dựng trại, khi nào lặng lẽ tích lũy sức cho chặng kế. Bạn chiến đấu bằng sự bền bỉ và thành quả thực — để kết quả nói thay lời. Thời gian không phải kẻ thù của bạn; nó là vũ khí.',
      strengths:
        'Kỷ luật thép, sức bền chiến lược và khả năng biến tham vọng thành thành tựu cụ thể; bạn đáng tin trong mọi trận chiến dài hơi.',
      challenges:
        'Bạn dễ thành nghiện việc, lạnh lùng với cảm xúc của mình và người khác khi đang "trong nhiệm vụ", và khắt khe với bất kỳ ai làm việc kém kỷ luật hơn mình.',
      advice:
        'Hãy ghi vào kế hoạch cả những khoảng nghỉ và những người thân — đỉnh núi không sưởi ấm được ai nếu bạn lên đó một mình. Thành công vĩ đại nhất là thành công còn nguyên sức khỏe và tình thân.',
    },
    aquarius: {
      title: 'Sao Hỏa tại Bảo Bình (Mars in Aquarius)',
      description:
        'Sao Hỏa tại Bảo Bình biến năng lượng chiến đấu của bạn thành dòng điện của cải cách — bạn không đánh trận cho riêng mình mà cho một ý tưởng, một cộng đồng, một tương lai công bằng hơn. Bạn hành động khác người một cách bản năng: khi cả đám đông đi đường mòn, bạn tìm thấy lối tắt chưa ai vẽ trên bản đồ. Sự áp đặt là thuốc nổ với bạn — không gì kích hoạt ý chí phản kháng của bạn nhanh bằng câu "xưa nay vẫn làm thế". Bạn chiến đấu bằng trí tuệ, bằng nguyên tắc và bằng sự bướng bỉnh điềm tĩnh của người biết mình đứng về phía tương lai.',
      strengths:
        'Sáng tạo trong hành động, độc lập kiên cường và khả năng huy động tập thể vì lý tưởng chung; bạn dám làm điều chưa ai dám.',
      challenges:
        'Tinh thần phản kháng dễ thành chống đối vì thói quen — nổi loạn cả với những quy tắc hợp lý; bạn cũng dễ tách cảm xúc khỏi hành động đến mức người cùng chiến tuyến thấy bạn xa cách.',
      advice:
        'Trước khi phá một hàng rào, hãy hỏi vì sao nó được dựng lên. Cuộc cách mạng bền nhất là cuộc cách mạng biết kết nối từng con người, không chỉ phụng sự ý tưởng.',
    },
    pisces: {
      title: 'Sao Hỏa tại Song Ngư (Mars in Pisces)',
      description:
        'Sao Hỏa tại Song Ngư khiến ngọn lửa hành động của bạn cháy dưới nước — không tắt, nhưng chuyển động theo cách riêng: theo dòng, theo cảm hứng, theo những đợt thủy triều của nội tâm. Năng lượng của bạn không đều như máy mà đến theo con sóng: có ngày bạn làm bằng ba người, có ngày cần được trôi tự do. Bạn chiến đấu hiệu quả nhất không bằng đối đầu mà bằng sự mềm mại — như nước, bạn vòng qua chướng ngại, thấm vào khe nứt và cuối cùng làm mòn cả đá. Động lực sâu nhất của bạn là lòng trắc ẩn và cảm hứng: bạn dốc toàn lực khi chiến đấu cho người yếu thế hoặc cho một giấc mơ đẹp.',
      strengths:
        'Trực giác dẫn đường cho hành động, sự linh hoạt mềm mại và năng lượng phi thường khi được cảm hứng hoặc lòng trắc ẩn thắp lên.',
      challenges:
        'Bạn dễ trì hoãn, mơ hồ về mục tiêu, né tránh đối đầu cần thiết và đôi khi để năng lượng rò rỉ vào sự trốn chạy thay vì hành động.',
      advice:
        'Hãy chẻ giấc mơ lớn thành những việc nhỏ làm được hôm nay — nước cần lòng sông để thành dòng chảy. Tập nói "không" trực diện một lần mỗi tuần; sự mềm mại của bạn xứng đáng có xương sống.',
    },
  },
};
