import { PlanetId, AspectType, AspectInfo } from './types';

export const aspectInfos: Record<AspectType, AspectInfo> = {
  conjunction: {
    type: 'conjunction',
    name: 'Góc Hợp (Conjunction)',
    angle: 0,
    orb: 8,
    nature: 'trung tính',
    meaning:
      'Hai hành tinh đứng cạnh nhau, năng lượng hòa quyện thành một dòng chảy mạnh mẽ duy nhất. Đây là góc chiếu của sự khuếch đại — hai nguồn lực không thể tách rời, cùng tô đậm một chủ đề trong đời bạn. Tốt hay thách thức tùy vào bản chất của các hành tinh tham gia.',
  },
  sextile: {
    type: 'sextile',
    name: 'Góc Lục Hợp (Sextile)',
    angle: 60,
    orb: 5,
    nature: 'hài hòa',
    meaning:
      'Hai hành tinh nâng đỡ nhau một cách nhẹ nhàng, mở ra những cơ hội và tài năng tiềm ẩn. Năng lượng này như cánh cửa hé mở — thuận lợi nhưng cần bạn chủ động bước qua. Khi được vun đắp, đây là nguồn may mắn êm đềm chảy suốt cuộc đời.',
  },
  square: {
    type: 'square',
    name: 'Góc Vuông (Square)',
    angle: 90,
    orb: 7,
    nature: 'thách thức',
    meaning:
      'Hai hành tinh giằng co nhau, tạo nên ma sát và căng thẳng nội tâm đòi hỏi phải hành động. Đây là góc chiếu của thử thách — nhưng cũng chính là động cơ mạnh mẽ nhất thúc đẩy sự trưởng thành. Vượt qua được sức ép này, bạn rèn nên sức mạnh mà các góc êm đềm không thể trao.',
  },
  trine: {
    type: 'trine',
    name: 'Góc Tam Hợp (Trine)',
    angle: 120,
    orb: 7,
    nature: 'hài hòa',
    meaning:
      'Hai hành tinh cùng nguyên tố chảy vào nhau tự nhiên như suối về sông — đây là góc chiếu may mắn nhất. Tài năng từ góc Tam Hợp đến với bạn dễ dàng, gần như bẩm sinh. Điều cần nhớ là đừng để sự thuận lợi ấy ru ngủ, vì món quà không được dùng sẽ ngủ quên.',
  },
  opposition: {
    type: 'opposition',
    name: 'Góc Xung Đối (Opposition)',
    angle: 180,
    orb: 8,
    nature: 'thách thức',
    meaning:
      'Hai hành tinh đứng ở hai đầu bầu trời, kéo bạn về hai thái cực đối lập. Sự giằng xé này thường hiện ra qua các mối quan hệ — người khác trở thành tấm gương phản chiếu phần bạn chưa nhận ra ở chính mình. Bài học của góc này là tìm điểm cân bằng, để hai cực đối lập trở thành hai cánh của cùng một đôi cánh.',
  },
};

export const planetAspectEnergy: Record<PlanetId, string> = {
  sun: 'bản ngã và sức sống cốt lõi',
  moon: 'thế giới cảm xúc và nhu cầu an toàn',
  mercury: 'tư duy và cách giao tiếp',
  venus: 'tình yêu và cảm nhận cái đẹp',
  mars: 'ý chí hành động và đam mê',
  jupiter: 'niềm tin và khát vọng mở rộng',
  saturn: 'kỷ luật và những bài học trưởng thành',
  uranus: 'khao khát tự do và sự đột phá',
  neptune: 'trực giác mộng mơ và đời sống tâm linh',
  pluto: 'sức mạnh chuyển hóa và tái sinh',
};
