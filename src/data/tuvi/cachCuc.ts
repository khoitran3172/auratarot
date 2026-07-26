// Phát hiện cách cục trên lá số.
// Nguyên tắc: một cách chỉ THÀNH khi đủ (a) đúng sao (b) đúng cung/độ sáng
// (c) đúng can chi năm sinh với các cách phụ thuộc Tứ Hóa/Lộc Tồn.
// Cách "gần đủ" hoặc bị sát tinh phá thì phải luận hạ một bậc — engine ghi rõ ở `broken`.

import { TuViChartResult, Palace, StarInstance } from './types';
import { CACH_CUC_DATA, CachCucInfo } from './cachCucData';

export interface DetectedCachCuc extends CachCucInfo {
  id: string;
  where: string;   // cung mà cách cục hiện rõ
  broken?: string; // lý do bị phá cách / hạ bậc (nếu có)
}

const mod12 = (x: number) => ((x % 12) + 12) % 12;
const BRIGHT = ['M', 'V', 'D'];

export function detectCachCuc(chart: TuViChartResult): DetectedCachCuc[] {
  const found: DetectedCachCuc[] = [];
  const menh = chart.palaces[0];
  const quan = chart.palaces[4];
  const tai = chart.palaces[8];
  const di = chart.palaces[6];

  // Tam phương tứ chính của Mệnh
  const cluster = [menh, quan, tai, di];
  const clusterStars: StarInstance[] = cluster.flatMap(p => p.stars);
  const inCluster = (id: string) => clusterStars.some(s => s.id === id);
  const hoaInCluster = (t: string) => clusterStars.some(s => s.transformation === t);

  const atMenh = (id: string) => menh.stars.some(s => s.id === id);
  const starAt = (id: string): { palace: Palace; star: StarInstance } | undefined => {
    for (const p of chart.palaces) {
      const s = p.stars.find(x => x.id === id);
      if (s) return { palace: p, star: s };
    }
    return undefined;
  };
  const bright = (id: string): boolean => {
    const f = starAt(id);
    return !!f?.star.brightness && BRIGHT.includes(f.star.brightness);
  };

  const push = (id: string, where: string, broken?: string) => {
    const data = CACH_CUC_DATA[id];
    if (!data) return;
    found.push({ ...data, id, where, broken });
  };

  // Sát tinh nặng trong tam phương — dùng xét phá cách
  const hasKhongKiepCluster = inCluster('DiaKhong') || inCluster('DiaKiep');
  const menhSat = menh.stars.filter(s => s.nature === 'hung' && s.kind === 'phu_tinh').map(s => s.name);

  // ── CÁT CÁCH ──

  // Quân Thần Khánh Hội: Tử Vi thủ Mệnh đắc địa + Tả Phụ & Hữu Bật hội
  if (atMenh('TuVi') && bright('TuVi') && inCluster('TaPhu') && inCluster('HuuBat')) {
    push('quanThanKhanhHoi', 'cung Mệnh',
      hasKhongKiepCluster ? 'Tam phương có Địa Không/Địa Kiếp nên uy lực bị chiết giảm — quyền mà chưa trọn.' : undefined);
  } else if (atMenh('TuVi') && bright('TuVi') && !inCluster('TaPhu') && !inCluster('HuuBat')) {
    push('quanThanKhanhHoi', 'cung Mệnh',
      'Thiếu cả Tả Phụ và Hữu Bật — Tử Vi thành "vua trơ trọi", hữu danh mà thiếu người phò tá. Cách này KHÔNG thành, chỉ nêu để bạn biết chỗ khuyết.');
  }

  // Tử Phủ Vũ Tướng
  if (inCluster('TuVi') && inCluster('ThienPhu') && inCluster('VuKhuc') && inCluster('ThienTuong')) {
    push('tuPhuVuTuong', 'tam phương tứ chính của Mệnh');
  }

  // Phủ Tướng Triều Viên: Phủ & Tướng chầu về Mệnh (ở Tài/Quan, không ở Mệnh)
  const phuAt = starAt('ThienPhu');
  const tuongAt = starAt('ThienTuong');
  if (phuAt && tuongAt && !atMenh('ThienPhu') && !atMenh('ThienTuong')) {
    const bothInTaiQuan = [phuAt.palace.name, tuongAt.palace.name]
      .every(n => n === 'Tài Bạch' || n === 'Quan Lộc');
    if (bothInTaiQuan) push('phuTuongTrieuVien', 'cung Tài Bạch & Quan Lộc');
  }

  // Cơ Nguyệt Đồng Lương
  if (inCluster('ThienCo') && inCluster('ThaiAm') && inCluster('ThienDong') && inCluster('ThienLuong')) {
    push('coNguyetDongLuong', 'tam phương tứ chính của Mệnh');
  }

  // Sát Phá Tham
  if (inCluster('ThatSat') && inCluster('PhaQuan') && inCluster('ThamLang')) {
    push('satPhaTham', 'tam phương tứ chính của Mệnh');
  }

  // Cự Nhật đồng cung tại Dần / Thân
  const duongAt = starAt('ThaiDuong');
  if (duongAt && duongAt.palace.stars.some(s => s.id === 'CuMon') && [2, 8].includes(duongAt.palace.branchIndex)) {
    push('cuNhat', `cung ${duongAt.palace.name} (${duongAt.palace.branchName})`,
      duongAt.palace.branchIndex === 8 ? 'Đóng tại Thân nên lực kém hơn tại Dần một bậc.' : undefined);
  }

  // Nhật Nguyệt Tịnh Minh: cả Nhật & Nguyệt miếu/vượng và cùng hội tam phương
  if (inCluster('ThaiDuong') && inCluster('ThaiAm')) {
    const dB = starAt('ThaiDuong')?.star.brightness;
    const aB = starAt('ThaiAm')?.star.brightness;
    if (dB && aB && ['M', 'V'].includes(dB) && ['M', 'V'].includes(aB)) {
      push('nhatNguyetTinhMinh', 'tam phương tứ chính của Mệnh');
    }
  }

  // Minh Châu Xuất Hải: Thái Âm đắc thế tại Tý ở Mệnh
  if (atMenh('ThaiAm') && menh.branchIndex === 0) {
    push('minhChauXuatHai', 'cung Mệnh (Tý)');
  }

  // Nhật Lệ Trung Thiên: Thái Dương miếu tại Ngọ thủ Mệnh
  if (atMenh('ThaiDuong') && menh.branchIndex === 6) {
    push('nhatLeTrungThien', 'cung Mệnh (Ngọ)');
  }

  // Nguyệt Lãng Thiên Môn: Thái Âm miếu tại Hợi thủ Mệnh
  if (atMenh('ThaiAm') && menh.branchIndex === 11) {
    push('nguyetLangThienMon', 'cung Mệnh (Hợi)');
  }

  // Thạch Trung Ẩn Ngọc: Cự Môn thủ Mệnh tại Tý/Ngọ, sinh năm Tân/Quý
  if (atMenh('CuMon') && [0, 6].includes(menh.branchIndex)) {
    const canName = chart.yearCanChi.split(' ')[0];
    if (canName === 'Tân' || canName === 'Quý') {
      push('thachTrungAnNgoc', `cung Mệnh (${menh.branchName})`,
        atMenh('KinhDuong') ? 'Gặp Kình Dương đồng cung — cổ nhân cảnh báo đây là điều kiện phá cách, ngọc khó lộ sáng.' : undefined);
    }
  }

  // Anh Tinh Nhập Miếu: Phá Quân miếu tại Tý/Ngọ thủ Mệnh
  if (atMenh('PhaQuan') && [0, 6].includes(menh.branchIndex)) {
    push('anhTinhNhapMieu', `cung Mệnh (${menh.branchName})`);
  }

  // Mã Đầu Đới Kiếm: Kình Dương tại Ngọ thủ Mệnh
  if (atMenh('KinhDuong') && menh.branchIndex === 6) {
    push('maDauDoiKiem', 'cung Mệnh (Ngọ)');
  }

  // Hỏa Tham / Linh Tham
  const thamAt = starAt('ThamLang');
  if (thamAt) {
    if (thamAt.palace.stars.some(s => s.id === 'HoaTinh')) {
      push('hoaTham', `cung ${thamAt.palace.name}`);
    }
    if (thamAt.palace.stars.some(s => s.id === 'LinhTinh')) {
      push('linhTham', `cung ${thamAt.palace.name}`);
    }
  }

  // Lộc Mã Giao Trì
  const maAt = starAt('ThienMa');
  if (maAt) {
    const sameAsLoc = maAt.palace.stars.some(s => s.id === 'LocTon' || s.transformation === 'loc');
    if (sameAsLoc) {
      push('locMaGiaoTri', `cung ${maAt.palace.name}`);
    } else if (inCluster('ThienMa') && (inCluster('LocTon') || hoaInCluster('loc'))) {
      push('locMaGiaoTri', 'tam phương tứ chính của Mệnh', 'Lộc và Mã không đồng cung, chỉ hội chiếu nên lực nhẹ hơn.');
    }
  }

  // Tam Kỳ Gia Hội
  if (hoaInCluster('loc') && hoaInCluster('quyen') && hoaInCluster('khoa')) {
    push('tamKyGiaHoi', 'tam phương tứ chính của Mệnh');
  }

  // Khôi Việt Quý Nhân
  if (inCluster('ThienKhoi') && inCluster('ThienViet')) {
    push('khoiVietQuyNhan', 'tam phương tứ chính của Mệnh');
  }

  // Song Lộc
  if (inCluster('LocTon') && hoaInCluster('loc')) {
    push('songLoc', 'tam phương tứ chính của Mệnh');
  }

  // ── HUNG CÁCH ──

  // Mệnh Vô Chính Diệu
  if (!menh.stars.some(s => s.kind === 'chinh_tinh')) {
    const catCount = menh.stars.filter(s => s.nature === 'cat').length;
    push('menhVoChinhDieu', 'cung Mệnh',
      (menh.hasTuan || menh.hasTriet || catCount >= 2)
        ? 'Có Tuần/Triệt hoặc nhiều cát tinh hội — cổ nhân gọi là "phản vi kỳ cách", hậu vận thường tốt hơn tiền vận.'
        : undefined);
  }

  // Cực Cư Mão Dậu: Tử Vi – Tham Lang đồng cung tại Mão/Dậu
  const tuviAt = starAt('TuVi');
  if (tuviAt && tuviAt.palace.stars.some(s => s.id === 'ThamLang') && [3, 9].includes(tuviAt.palace.branchIndex)) {
    push('cucCuMaoDau', `cung ${tuviAt.palace.name} (${tuviAt.palace.branchName})`);
  }

  // Dương Đà Giáp Kỵ: cung bị Kình–Đà kẹp mà có Hóa Kỵ (cung Lộc Tồn luôn bị kẹp)
  const locAt = starAt('LocTon');
  if (locAt && locAt.palace.stars.some(s => s.transformation === 'ky')) {
    push('duongDaGiapKy', `cung ${locAt.palace.name}`);
  }

  // Không Kiếp giáp/thủ Mệnh
  if (atMenh('DiaKhong') || atMenh('DiaKiep')) {
    push('khongKiepGiapMenh', 'cung Mệnh');
  } else {
    const left = chart.palaces.find(p => p.branchIndex === mod12(menh.branchIndex - 1));
    const right = chart.palaces.find(p => p.branchIndex === mod12(menh.branchIndex + 1));
    const pair = [left, right].filter(Boolean) as Palace[];
    const hasKhong = pair.some(p => p.stars.some(s => s.id === 'DiaKhong'));
    const hasKiep = pair.some(p => p.stars.some(s => s.id === 'DiaKiep'));
    if (hasKhong && hasKiep) push('khongKiepGiapMenh', 'hai cung giáp Mệnh');
  }

  // Linh Xương Đà Vũ: 4 sao cùng một cung
  for (const p of chart.palaces) {
    const ids = p.stars.map(s => s.id);
    if (['LinhTinh', 'VanXuong', 'DaLa', 'VuKhuc'].every(id => ids.includes(id))) {
      push('linhXuongDaVu', `cung ${p.name}`);
      break;
    }
  }

  // Nhật Nguyệt Phản Bối: cả Nhật & Nguyệt đều hãm
  if (starAt('ThaiDuong')?.star.brightness === 'H' && starAt('ThaiAm')?.star.brightness === 'H') {
    push('nhatNguyetPhanBoi', 'lá số tổng thể');
  }

  // Phá Quân ám hãm: Phá Quân hãm + đồng cung sát tinh
  const phaAt = starAt('PhaQuan');
  if (phaAt && phaAt.star.brightness === 'H' && phaAt.palace.stars.some(s => s.nature === 'hung' && s.kind === 'phu_tinh')) {
    push('phaQuanAmHam', `cung ${phaAt.palace.name}`);
  }

  // Cảnh báo sát tinh thủ Mệnh (không phải cách cục nhưng nên nêu)
  if (menhSat.length >= 2 && !found.some(f => f.id === 'khongKiepGiapMenh')) {
    found.push({
      id: 'satTinhThuMenh',
      name: 'Sát tinh tụ Mệnh',
      type: 'hung',
      condition: `Cung Mệnh có từ hai sát tinh trở lên (${menhSat.join(', ')}).`,
      meaning: `Cung Mệnh tụ nhiều sát tinh (${menhSat.join(', ')}) khiến bản tính sắc bén, cứng cỏi và chịu đựng giỏi, nhưng đường đời thường phải va đập nhiều hơn người. Cổ nhân nói "sát tinh tụ Mệnh, thành bại đều đậm nét": nếu chế ngự được thì thành người có bản lĩnh khác thường, bằng không dễ chuốc lấy tổn thương và thị phi.`,
      advice: 'Nên rèn sự mềm mỏng và tiết chế nóng nảy; chọn nghề cần bản lĩnh, cạnh tranh thay vì nghề đòi hòa nhã.',
      where: 'cung Mệnh',
    });
  }

  // Sắp xếp: cát cách trước, cách bị phá xuống sau
  return found.sort((a, b) => {
    if (a.type !== b.type) return a.type === 'cat' ? -1 : 1;
    return (a.broken ? 1 : 0) - (b.broken ? 1 : 0);
  });
}
