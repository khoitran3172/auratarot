import { BirthPlace } from './types';

// Tọa độ lấy theo thành phố tỉnh lỵ của mỗi tỉnh/thành.
// Thứ tự: Hà Nội, TP. Hồ Chí Minh, Đà Nẵng trước, sau đó các tỉnh/thành
// Việt Nam theo alphabet, cuối cùng là các thành phố lớn trên thế giới.
export const birthPlaces: BirthPlace[] = [
  // --- 3 thành phố lớn nhất Việt Nam ---
  { name: 'Hà Nội', lat: 21.028, lon: 105.854 },
  { name: 'TP. Hồ Chí Minh', lat: 10.776, lon: 106.7 },
  { name: 'Đà Nẵng', lat: 16.054, lon: 108.202 },

  // --- Các tỉnh/thành Việt Nam (theo alphabet) ---
  { name: 'An Giang', lat: 10.386, lon: 105.435 }, // Long Xuyên
  { name: 'Bà Rịa - Vũng Tàu', lat: 10.346, lon: 107.084 }, // Vũng Tàu
  { name: 'Bạc Liêu', lat: 9.294, lon: 105.728 },
  { name: 'Bắc Giang', lat: 21.273, lon: 106.195 },
  { name: 'Bắc Kạn', lat: 22.147, lon: 105.835 },
  { name: 'Bắc Ninh', lat: 21.186, lon: 106.076 },
  { name: 'Bến Tre', lat: 10.243, lon: 106.375 },
  { name: 'Bình Dương', lat: 10.98, lon: 106.652 }, // Thủ Dầu Một
  { name: 'Bình Định', lat: 13.776, lon: 109.224 }, // Quy Nhơn
  { name: 'Bình Phước', lat: 11.535, lon: 106.892 }, // Đồng Xoài
  { name: 'Bình Thuận', lat: 10.928, lon: 108.102 }, // Phan Thiết
  { name: 'Cà Mau', lat: 9.177, lon: 105.15 },
  { name: 'Cần Thơ', lat: 10.045, lon: 105.747 },
  { name: 'Cao Bằng', lat: 22.666, lon: 106.258 },
  { name: 'Đắk Lắk', lat: 12.667, lon: 108.038 }, // Buôn Ma Thuột
  { name: 'Đắk Nông', lat: 12.004, lon: 107.691 }, // Gia Nghĩa
  { name: 'Điện Biên', lat: 21.386, lon: 103.017 }, // Điện Biên Phủ
  { name: 'Đồng Nai', lat: 10.957, lon: 106.843 }, // Biên Hòa
  { name: 'Đồng Tháp', lat: 10.46, lon: 105.633 }, // Cao Lãnh
  { name: 'Gia Lai', lat: 13.984, lon: 108.0 }, // Pleiku
  { name: 'Hà Giang', lat: 22.823, lon: 104.984 },
  { name: 'Hà Nam', lat: 20.541, lon: 105.914 }, // Phủ Lý
  { name: 'Hà Tĩnh', lat: 18.343, lon: 105.906 },
  { name: 'Hải Dương', lat: 20.937, lon: 106.315 },
  { name: 'Hải Phòng', lat: 20.845, lon: 106.688 },
  { name: 'Hậu Giang', lat: 9.785, lon: 105.47 }, // Vị Thanh
  { name: 'Hòa Bình', lat: 20.817, lon: 105.337 },
  { name: 'Hưng Yên', lat: 20.646, lon: 106.051 },
  { name: 'Khánh Hòa', lat: 12.239, lon: 109.197 }, // Nha Trang
  { name: 'Kiên Giang', lat: 10.012, lon: 105.081 }, // Rạch Giá
  { name: 'Kon Tum', lat: 14.35, lon: 108.008 },
  { name: 'Lai Châu', lat: 22.396, lon: 103.459 },
  { name: 'Lạng Sơn', lat: 21.853, lon: 106.761 },
  { name: 'Lào Cai', lat: 22.486, lon: 103.971 },
  { name: 'Lâm Đồng', lat: 11.94, lon: 108.458 }, // Đà Lạt
  { name: 'Long An', lat: 10.535, lon: 106.405 }, // Tân An
  { name: 'Nam Định', lat: 20.42, lon: 106.168 },
  { name: 'Nghệ An', lat: 18.679, lon: 105.681 }, // Vinh
  { name: 'Ninh Bình', lat: 20.254, lon: 105.975 },
  { name: 'Ninh Thuận', lat: 11.564, lon: 108.989 }, // Phan Rang - Tháp Chàm
  { name: 'Phú Thọ', lat: 21.323, lon: 105.402 }, // Việt Trì
  { name: 'Phú Yên', lat: 13.096, lon: 109.296 }, // Tuy Hòa
  { name: 'Quảng Bình', lat: 17.466, lon: 106.622 }, // Đồng Hới
  { name: 'Quảng Nam', lat: 15.574, lon: 108.474 }, // Tam Kỳ
  { name: 'Quảng Ngãi', lat: 15.12, lon: 108.792 },
  { name: 'Quảng Ninh', lat: 20.951, lon: 107.078 }, // Hạ Long
  { name: 'Quảng Trị', lat: 16.816, lon: 107.1 }, // Đông Hà
  { name: 'Sóc Trăng', lat: 9.602, lon: 105.974 },
  { name: 'Sơn La', lat: 21.328, lon: 103.914 },
  { name: 'Tây Ninh', lat: 11.31, lon: 106.098 },
  { name: 'Thái Bình', lat: 20.446, lon: 106.336 },
  { name: 'Thái Nguyên', lat: 21.594, lon: 105.848 },
  { name: 'Thanh Hóa', lat: 19.807, lon: 105.776 },
  { name: 'Thừa Thiên Huế', lat: 16.463, lon: 107.585 }, // Huế
  { name: 'Tiền Giang', lat: 10.36, lon: 106.36 }, // Mỹ Tho
  { name: 'Trà Vinh', lat: 9.935, lon: 106.345 },
  { name: 'Tuyên Quang', lat: 21.823, lon: 105.214 },
  { name: 'Vĩnh Long', lat: 10.254, lon: 105.972 },
  { name: 'Vĩnh Phúc', lat: 21.309, lon: 105.605 }, // Vĩnh Yên
  { name: 'Yên Bái', lat: 21.705, lon: 104.871 },

  // --- Thành phố lớn trên thế giới ---
  { name: 'Bangkok', lat: 13.756, lon: 100.502 },
  { name: 'Singapore', lat: 1.352, lon: 103.82 },
  { name: 'Tokyo', lat: 35.69, lon: 139.692 },
  { name: 'Seoul', lat: 37.566, lon: 126.978 },
  { name: 'Beijing', lat: 39.904, lon: 116.407 },
  { name: 'Hong Kong', lat: 22.319, lon: 114.169 },
  { name: 'Taipei', lat: 25.033, lon: 121.565 },
  { name: 'Manila', lat: 14.599, lon: 120.984 },
  { name: 'Jakarta', lat: -6.208, lon: 106.846 },
  { name: 'Kuala Lumpur', lat: 3.139, lon: 101.687 },
  { name: 'New Delhi', lat: 28.614, lon: 77.209 },
  { name: 'Dubai', lat: 25.205, lon: 55.271 },
  { name: 'Moscow', lat: 55.756, lon: 37.617 },
  { name: 'Paris', lat: 48.857, lon: 2.352 },
  { name: 'London', lat: 51.507, lon: -0.128 },
  { name: 'Berlin', lat: 52.52, lon: 13.405 },
  { name: 'Rome', lat: 41.903, lon: 12.496 },
  { name: 'Madrid', lat: 40.417, lon: -3.704 },
  { name: 'New York', lat: 40.713, lon: -74.006 },
  { name: 'Los Angeles', lat: 34.052, lon: -118.244 },
  { name: 'San Francisco', lat: 37.775, lon: -122.419 },
  { name: 'Chicago', lat: 41.878, lon: -87.63 },
  { name: 'Toronto', lat: 43.653, lon: -79.383 },
  { name: 'Sydney', lat: -33.869, lon: 151.209 },
  { name: 'Melbourne', lat: -37.814, lon: 144.963 },
];
