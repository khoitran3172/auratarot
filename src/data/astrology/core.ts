import { PlanetId, SignId, HouseNumber, PlanetInfo, SignInfo, HouseInfo } from './types';

export const planets: Record<PlanetId, PlanetInfo> = {
  sun: {
    id: 'sun',
    name: 'Mặt Trời',
    englishName: 'Sun',
    glyph: '☉',
    themes: 'Bản ngã, sức sống, ý chí và mục đích sống cốt lõi của bạn.',
  },
  moon: {
    id: 'moon',
    name: 'Mặt Trăng',
    englishName: 'Moon',
    glyph: '☽',
    themes: 'Cảm xúc, trực giác, nhu cầu an toàn và thế giới nội tâm sâu kín.',
  },
  mercury: {
    id: 'mercury',
    name: 'Sao Thủy',
    englishName: 'Mercury',
    glyph: '☿',
    themes: 'Tư duy, giao tiếp, học hỏi và cách bạn xử lý thông tin.',
  },
  venus: {
    id: 'venus',
    name: 'Sao Kim',
    englishName: 'Venus',
    glyph: '♀',
    themes: 'Tình yêu, cái đẹp, giá trị và cách bạn kết nối, yêu thương.',
  },
  mars: {
    id: 'mars',
    name: 'Sao Hỏa',
    englishName: 'Mars',
    glyph: '♂',
    themes: 'Hành động, đam mê, dũng khí và cách bạn theo đuổi điều mình muốn.',
  },
  jupiter: {
    id: 'jupiter',
    name: 'Sao Mộc',
    englishName: 'Jupiter',
    glyph: '♃',
    themes: 'May mắn, mở rộng, niềm tin, triết lý sống và sự trưởng thành.',
  },
  saturn: {
    id: 'saturn',
    name: 'Sao Thổ',
    englishName: 'Saturn',
    glyph: '♄',
    themes: 'Kỷ luật, trách nhiệm, giới hạn và những bài học trưởng thành của đời người.',
  },
  uranus: {
    id: 'uranus',
    name: 'Sao Thiên Vương',
    englishName: 'Uranus',
    glyph: '♅',
    themes: 'Đột phá, tự do, sáng tạo khác biệt và những thay đổi bất ngờ.',
  },
  neptune: {
    id: 'neptune',
    name: 'Sao Hải Vương',
    englishName: 'Neptune',
    glyph: '♆',
    themes: 'Mộng mơ, tâm linh, trực giác huyền bí và lòng trắc ẩn vô bờ.',
  },
  pluto: {
    id: 'pluto',
    name: 'Sao Diêm Vương',
    englishName: 'Pluto',
    glyph: '♇',
    themes: 'Chuyển hóa, quyền năng, tái sinh và những tầng sâu thẳm nhất của tâm hồn.',
  },
};

export const signs: Record<SignId, SignInfo> = {
  aries: {
    id: 'aries',
    name: 'Bạch Dương',
    englishName: 'Aries',
    glyph: '♈',
    element: 'Lửa',
    modality: 'Tiên phong',
    ruler: 'Sao Hỏa',
    traits:
      'Bạch Dương mang ngọn lửa khởi đầu — can đảm, bộc trực và tràn đầy nhiệt huyết. Họ lao về phía trước với bản năng của người tiên phong, không ngại thử thách hay va vấp. Đôi khi nóng vội, nhưng chính sự thẳng thắn ấy khiến họ luôn chân thật và đầy sức sống.',
  },
  taurus: {
    id: 'taurus',
    name: 'Kim Ngưu',
    englishName: 'Taurus',
    glyph: '♉',
    element: 'Đất',
    modality: 'Kiên định',
    ruler: 'Sao Kim',
    traits:
      'Kim Ngưu vững chãi như đất mẹ — kiên nhẫn, đáng tin và trân trọng những giá trị bền lâu. Họ yêu cái đẹp, sự êm ấm và những niềm vui giản dị của giác quan. Một khi đã quyết, họ hiếm khi lay chuyển, dù đôi lúc điều đó hóa thành cố chấp.',
  },
  gemini: {
    id: 'gemini',
    name: 'Song Tử',
    englishName: 'Gemini',
    glyph: '♊',
    element: 'Khí',
    modality: 'Linh hoạt',
    ruler: 'Sao Thủy',
    traits:
      'Song Tử là làn gió tò mò không ngừng chuyển động — lanh lợi, hoạt ngôn và ham học hỏi. Tâm trí họ nhảy múa giữa muôn vàn ý tưởng, luôn khao khát kết nối và trao đổi. Sự đa dạng là hơi thở của họ, dù đôi khi khiến họ khó tập trung vào một điều duy nhất.',
  },
  cancer: {
    id: 'cancer',
    name: 'Cự Giải',
    englishName: 'Cancer',
    glyph: '♋',
    element: 'Nước',
    modality: 'Tiên phong',
    ruler: 'Mặt Trăng',
    traits:
      'Cự Giải mang trái tim của người che chở — nhạy cảm, giàu trực giác và gắn bó sâu sắc với gia đình. Họ nhớ rất lâu, yêu rất sâu và luôn muốn tạo nên một tổ ấm an toàn cho người mình thương. Lớp vỏ cứng bên ngoài chỉ để bảo vệ tâm hồn mềm mại bên trong.',
  },
  leo: {
    id: 'leo',
    name: 'Sư Tử',
    englishName: 'Leo',
    glyph: '♌',
    element: 'Lửa',
    modality: 'Kiên định',
    ruler: 'Mặt Trời',
    traits:
      'Sư Tử tỏa sáng như mặt trời giữa trưa — hào phóng, ấm áp và đầy khí chất vương giả. Họ sống bằng trái tim lớn, yêu sự sáng tạo và khao khát được công nhận. Niềm kiêu hãnh là sức mạnh của họ, miễn là nó không che mờ sự khiêm nhường.',
  },
  virgo: {
    id: 'virgo',
    name: 'Xử Nữ',
    englishName: 'Virgo',
    glyph: '♍',
    element: 'Đất',
    modality: 'Linh hoạt',
    ruler: 'Sao Thủy',
    traits:
      'Xử Nữ là người thợ tỉ mỉ của hoàng đạo — tinh tế, chu đáo và luôn muốn hoàn thiện mọi thứ. Họ phục vụ người khác bằng sự quan tâm thầm lặng và đôi mắt nhìn thấu từng chi tiết. Thử thách của họ là học cách bao dung với chính sự không hoàn hảo.',
  },
  libra: {
    id: 'libra',
    name: 'Thiên Bình',
    englishName: 'Libra',
    glyph: '♎',
    element: 'Khí',
    modality: 'Tiên phong',
    ruler: 'Sao Kim',
    traits:
      'Thiên Bình sinh ra để cân bằng — duyên dáng, công bằng và khéo léo trong mọi mối quan hệ. Họ yêu cái đẹp, sự hài hòa và luôn tìm điểm gặp gỡ giữa những thái cực. Đôi khi do dự vì cân nhắc quá nhiều, nhưng trái tim họ luôn hướng về lẽ phải.',
  },
  scorpio: {
    id: 'scorpio',
    name: 'Bọ Cạp',
    englishName: 'Scorpio',
    glyph: '♏',
    element: 'Nước',
    modality: 'Kiên định',
    ruler: 'Sao Diêm Vương',
    traits:
      'Bọ Cạp là dòng nước sâu thẳm nhất — mãnh liệt, bí ẩn và trung thành tuyệt đối. Họ nhìn xuyên qua bề mặt để chạm tới sự thật ẩn giấu, yêu và ghét đều trọn vẹn. Sức mạnh chuyển hóa giúp họ tái sinh từ chính những đổ vỡ của đời mình.',
  },
  sagittarius: {
    id: 'sagittarius',
    name: 'Nhân Mã',
    englishName: 'Sagittarius',
    glyph: '♐',
    element: 'Lửa',
    modality: 'Linh hoạt',
    ruler: 'Sao Mộc',
    traits:
      'Nhân Mã là mũi tên hướng về chân trời — lạc quan, phóng khoáng và khao khát tự do. Họ tìm kiếm ý nghĩa cuộc đời qua những chuyến đi, tri thức và triết lý sống. Sự thẳng thắn đôi khi vụng về, nhưng tâm hồn họ luôn rộng mở và chân thành.',
  },
  capricorn: {
    id: 'capricorn',
    name: 'Ma Kết',
    englishName: 'Capricorn',
    glyph: '♑',
    element: 'Đất',
    modality: 'Tiên phong',
    ruler: 'Sao Thổ',
    traits:
      'Ma Kết là người leo núi bền bỉ — kỷ luật, tham vọng và đầy trách nhiệm. Họ xây dựng cuộc đời từng viên gạch một, kiên nhẫn chờ ngày đứng trên đỉnh cao. Sau vẻ ngoài nghiêm nghị là một trái tim sâu sắc và sự hài hước khô khan đáng yêu.',
  },
  aquarius: {
    id: 'aquarius',
    name: 'Bảo Bình',
    englishName: 'Aquarius',
    glyph: '♒',
    element: 'Khí',
    modality: 'Kiên định',
    ruler: 'Sao Thiên Vương',
    traits:
      'Bảo Bình là kẻ nhìn về tương lai — độc đáo, nhân văn và không ngại khác biệt. Họ tư duy vượt khuôn khổ, mơ về một thế giới tốt đẹp hơn cho tất cả. Đôi khi xa cách về cảm xúc, nhưng tình bạn của họ rộng lớn và bền vững lạ thường.',
  },
  pisces: {
    id: 'pisces',
    name: 'Song Ngư',
    englishName: 'Pisces',
    glyph: '♓',
    element: 'Nước',
    modality: 'Linh hoạt',
    ruler: 'Sao Hải Vương',
    traits:
      'Song Ngư là đại dương của mộng mơ — giàu trắc ẩn, trực giác và tâm hồn nghệ sĩ. Họ cảm nhận thế giới bằng trái tim, dễ hòa tan ranh giới giữa mình và người khác. Thử thách của họ là giữ đôi chân trên mặt đất khi tâm hồn bay giữa những vì sao.',
  },
};

export const houses: Record<HouseNumber, HouseInfo> = {
  1: {
    number: 1,
    name: 'Nhà 1 - Bản Ngã',
    domain:
      'Nhà 1 là cánh cửa bạn bước ra thế giới — diện mạo, phong thái và ấn tượng đầu tiên bạn để lại. Đây là nơi khắc họa bản sắc cá nhân, cách bạn khởi đầu mọi việc và năng lượng bạn tỏa ra một cách tự nhiên nhất.',
  },
  2: {
    number: 2,
    name: 'Nhà 2 - Tài Sản & Giá Trị',
    domain:
      'Nhà 2 cai quản tiền bạc, của cải và những gì bạn sở hữu. Sâu hơn, nó nói về giá trị bản thân — điều bạn trân quý, cách bạn kiếm sống và cảm giác an toàn vật chất trong tâm hồn bạn.',
  },
  3: {
    number: 3,
    name: 'Nhà 3 - Giao Tiếp & Tư Duy',
    domain:
      'Nhà 3 là vương quốc của lời nói, chữ viết và tư duy hằng ngày. Nó cai quản việc học hành thuở nhỏ, anh chị em, hàng xóm và những chuyến đi ngắn — tất cả những kết nối gần gũi dệt nên đời sống thường nhật của bạn.',
  },
  4: {
    number: 4,
    name: 'Nhà 4 - Gia Đình & Cội Nguồn',
    domain:
      'Nhà 4 là gốc rễ của lá số — mái ấm, gia đình, tổ tiên và nơi tâm hồn bạn tìm về nghỉ ngơi. Nó nói về tuổi thơ, người nuôi dưỡng bạn và nền tảng cảm xúc sâu kín nhất mà bạn xây dựng cuộc đời lên trên.',
  },
  5: {
    number: 5,
    name: 'Nhà 5 - Sáng Tạo & Niềm Vui',
    domain:
      'Nhà 5 là sân khấu của trái tim — tình yêu lãng mạn, sáng tạo nghệ thuật, con cái và những thú vui khiến bạn rạng rỡ. Đây là nơi bạn dám chơi, dám yêu và dám thể hiện chính mình một cách hồn nhiên nhất.',
  },
  6: {
    number: 6,
    name: 'Nhà 6 - Công Việc & Sức Khỏe',
    domain:
      'Nhà 6 cai quản nhịp sống hằng ngày — công việc thường nhật, thói quen, sức khỏe và sự phục vụ. Nó cho thấy cách bạn chăm sóc thân thể, tổ chức cuộc sống và cống hiến qua những việc nhỏ bé nhưng thiết yếu.',
  },
  7: {
    number: 7,
    name: 'Nhà 7 - Hôn Nhân & Đối Tác',
    domain:
      'Nhà 7 là tấm gương đối diện bản ngã — hôn nhân, tình yêu cam kết và mọi mối quan hệ đối tác. Nó hé lộ kiểu người bạn bị hút về, cách bạn cam kết và những bài học bạn học được qua người khác.',
  },
  8: {
    number: 8,
    name: 'Nhà 8 - Chuyển Hóa & Bí Ẩn',
    domain:
      'Nhà 8 là vùng nước sâu của lá số — sự chuyển hóa, tái sinh, tài sản chung và những điều huyền bí. Nó nói về sự gắn kết sâu sắc, khủng hoảng làm ta trưởng thành và sức mạnh hồi sinh từ những kết thúc.',
  },
  9: {
    number: 9,
    name: 'Nhà 9 - Triết Lý & Chân Trời Xa',
    domain:
      'Nhà 9 mở ra những chân trời rộng lớn — du lịch xa, học vấn cao, triết học, tâm linh và niềm tin. Đây là nơi bạn đi tìm ý nghĩa cuộc đời, mở rộng tầm nhìn và xây dựng la bàn đạo đức của riêng mình.',
  },
  10: {
    number: 10,
    name: 'Nhà 10 - Sự Nghiệp & Danh Tiếng',
    domain:
      'Nhà 10 là đỉnh núi của lá số — sự nghiệp, danh tiếng, địa vị xã hội và di sản bạn để lại. Nó cho thấy thiên hướng nghề nghiệp, tham vọng và hình ảnh công chúng mà bạn xây dựng trước thế gian.',
  },
  11: {
    number: 11,
    name: 'Nhà 11 - Bạn Bè & Ước Vọng',
    domain:
      'Nhà 11 cai quản tình bạn, cộng đồng, các nhóm hội và những ước mơ lớn cho tương lai. Đây là nơi bạn tìm thấy những người đồng điệu và góp sức mình cho điều gì đó lớn hơn bản thân.',
  },
  12: {
    number: 12,
    name: 'Nhà 12 - Tiềm Thức & Tâm Linh',
    domain:
      'Nhà 12 là căn phòng bí mật của tâm hồn — tiềm thức, giấc mơ, sự cô tịch và đời sống tâm linh. Nó nói về những gì ẩn giấu, sự buông bỏ và lòng trắc ẩn thầm lặng kết nối bạn với vũ trụ bao la.',
  },
};
