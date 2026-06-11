# 🔮 Aura Tarot

> Không gian chiêm bốc huyền học tối giản — trải bài Tarot, dự báo cung hoàng đạo và bản đồ sao khai sinh, hoạt động **100% offline** ngay trên trình duyệt.

**🌐 Demo trực tiếp: https://khoitran3172.github.io/auratarot/**

![Aura Tarot](https://img.shields.io/badge/React-19-61dafb?logo=react) ![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss) ![License](https://img.shields.io/badge/license-Apache--2.0-green)

---

## 📖 Giới thiệu

Aura Tarot là web app chiêm tinh – tarot tiếng Việt với giao diện "dark mystic" (nền vũ trụ đen tím, nhấn vàng kim). Điểm đặc biệt: **không cần backend, không cần API key, không gửi dữ liệu đi đâu** — toàn bộ luận giải được sinh từ kho dữ liệu tĩnh biên soạn sẵn và engine thiên văn chạy ngay trên trình duyệt. Dữ liệu cá nhân (lịch sử trải bài, nhật ký) lưu trong `localStorage` của từng người dùng.

## ✨ Tính năng

### 🃏 Trải bài Tarot (Reading Room)
- 3 kiểu trải: **1 lá** (lời khuyên nhanh), **3 lá** (Quá khứ – Hiện tại – Tương lai), **10 lá Celtic Cross**
- Trải nghiệm đầy đủ: chọn khía cạnh (Tình yêu / Sự nghiệp / Bản thân / Tài chính / Sức khỏe) → xóc bài → lật từng lá 3D → nhận luận giải chi tiết theo vị trí trải bài
- Lá bài có 2 chiều **xuôi / ngược** với ý nghĩa riêng
- **Chat hỏi đáp** sau khi giải bài: hỏi sâu về một lá cụ thể, xin lời khuyên, hỏi ý nghĩa lá ngược
- **Cộng hưởng trong ngày**: lượt rút đầu tiên mỗi ngày là mỏ neo năng lượng; 2 lượt sau cùng ngày sẽ rút ra những lá mang ý nghĩa tương đồng (trùng lá hoặc cùng chất bài)
- Giới hạn **3 lượt/ngày**, reset lúc 0h giờ địa phương

### ☀️ Dự báo Cung Hoàng Đạo hàng ngày
- Chọn cung hoàng đạo + khía cạnh quan tâm → rút lá bài của ngày → nhận thông điệp kết hợp năng lượng nguyên tố của cung với ý nghĩa lá bài
- Mỗi ngày một thông điệp, tự lưu lại để xem trong ngày, sao chép chia sẻ được

### 🪐 Bản Đồ Sao (Natal Chart) — tính năng lớn nhất
Nhập **ngày / giờ / nơi sinh** → vẽ bánh xe hoàng đạo SVG và luận giải chuyên sâu:

| Thành phần | Chi tiết |
|---|---|
| Vị trí thiên thể | 10 hành tinh (Mặt Trời → Diêm Vương), kinh độ hoàng đạo nhiệt đới chính xác đến phút cung |
| Cung Mọc (ASC) | Tính từ giờ sao địa phương + vĩ độ nơi sinh |
| Thiên Đỉnh (MC) | Đỉnh sự nghiệp & thiên hướng nghề nghiệp |
| Bắc Giao Điểm (☊) | Hướng tiến hóa linh hồn, theo công thức Meeus |
| 12 Nhà | Hệ Whole Sign (Nguyên Cung) tính từ Cung Mọc |
| Góc chiếu | Hợp / Lục hợp / Vuông / Tam hợp / Xung đối với orb chuẩn |
| Nghịch hành ℞ | Tự phát hiện hành tinh nghịch hành lúc chào đời |
| Tổng quan tinh bàn | Big 3, cân bằng Nguyên tố & Thể thức (biểu đồ thanh), Chủ Tinh Bản Đồ, phát hiện Stellium |

Hỗ trợ trường hợp **không rõ giờ sinh** (bỏ qua ASC/MC/Nhà, tính hành tinh theo 12h trưa). Kèm danh sách **88 địa danh** có tọa độ sẵn (đủ 63 tỉnh thành Việt Nam + 25 thành phố quốc tế) và chọn múi giờ.

### 📓 Nhật ký tâm linh (Journal)
- Tự động lưu mọi lượt trải bài; xem lại chi tiết và viết **bút ký chiêm nghiệm** cá nhân
- **Heatmap tần suất** 84 ngày gần nhất + **chuỗi ngày liên tiếp** (streak) tính từ dữ liệu thật
- Lọc theo khía cạnh

### 📚 Thư viện 78 lá Tarot (Encyclopedia)
- Tra cứu đầy đủ 78 lá: Đại Ẩn (Major Arcana) + 4 chất Tiểu Ẩn (Wands / Cups / Swords / Pentacles)
- Mỗi lá: ý nghĩa xuôi/ngược, chiêm tinh tương ứng, lời khuyên

## 🧠 Kho dữ liệu tĩnh

Toàn bộ "trí tuệ" của app nằm trong dữ liệu biên soạn tay (~400KB tiếng Việt):

| Bộ dữ liệu | Số mục | File |
|---|---|---|
| 78 lá Tarot đầy đủ nghĩa | 78 | `src/data/cards.ts` |
| Hành tinh × Cung hoàng đạo | 120 | `src/data/astrology/planetInSign*.ts` |
| Hành tinh × 12 Nhà | 120 | `src/data/astrology/planetInHouse.ts` |
| Cung Mọc | 12 | `src/data/astrology/ascendants.ts` |
| Bắc Giao Điểm (cung + nhà) | 24 | `src/data/astrology/northNode.ts` |
| Thiên Đỉnh × Cung | 12 | `src/data/astrology/midheaven.ts` |
| Nghịch hành / Nguyên tố / Thể thức / Chủ tinh / Stellium | 33 | `src/data/astrology/chartAnalysis.ts` |
| Góc chiếu + năng lượng hành tinh | 15 | `src/data/astrology/aspectData.ts` |
| Địa danh kèm tọa độ | 88 | `src/data/astrology/places.ts` |

## 🛠️ Công nghệ

- **React 19 + TypeScript 5.8 + Vite 6** — SPA, không router (điều hướng bằng state)
- **Tailwind CSS 4** + design system tùy biến (brand-gold / brand-void / glass-card)
- **Motion** (Framer Motion) — hiệu ứng lật bài 3D, chuyển trang
- **[astronomy-engine](https://github.com/cosinekitty/astronomy)** — tính vị trí thiên thể chính xác (đã đối chiếu ephemeris JPL); ASC/MC/Node tự cài đặt theo công thức chuẩn (Meeus)
- **react-markdown** — render luận giải, an toàn XSS
- **Express** — chỉ dùng để serve trang khi self-host / dev (kèm security headers); bản GitHub Pages là static thuần
- **localStorage** — toàn bộ persistence phía người dùng

## 📂 Cấu trúc thư mục

```
aura-tarot/
├── index.html
├── server.ts                  # Express server (dev middleware / self-host)
├── vite.config.ts             # BASE_PATH cho GitHub Pages
├── .github/workflows/deploy.yml  # CI/CD tự động
└── src/
    ├── App.tsx                # Shell + điều hướng 5 tab
    ├── components/
    │   ├── ReadingRoom.tsx    # Trải bài + chat hỏi đáp
    │   ├── DailyHoroscope.tsx # Dự báo ngày
    │   ├── NatalChart.tsx     # Bản đồ sao (lazy-loaded)
    │   ├── TarotJournal.tsx   # Nhật ký + heatmap/streak
    │   └── TarotEncyclopedia.tsx
    ├── data/
    │   ├── cards.ts           # 78 lá Tarot
    │   └── astrology/         # Kho luận giải chiêm tinh (~320 mục)
    └── utils/
        ├── astrology.ts       # Engine: vị trí hành tinh, ASC, MC, Node, nhà, góc chiếu
        └── date.ts            # Ngày địa phương (reset 0h)
```

## 🚀 Chạy local

**Yêu cầu:** Node.js ≥ 20.19 (khuyến nghị 22 LTS)

```bash
npm install

# Cách 1: dev server với hot-reload (cần Node đủ mới)
npm run dev            # http://localhost:3000

# Cách 2: build + chạy production
npx vite build
$env:NODE_ENV="production"; npx tsx server.ts   # Windows PowerShell
```

Không cần file `.env` hay API key nào — app chạy hoàn toàn offline.

```bash
npm run lint   # type-check (tsc --noEmit)
```

## 🔄 Quy trình phát triển & Deploy

**Mô hình nhánh:**

```
main ──────────  production, push = tự động deploy GitHub Pages
 └─ develop ───  nhánh tích hợp
     └─ feature/* , fix/*   # mỗi tính năng một nhánh
```

Quy trình: tạo nhánh từ `develop` → làm xong merge vào `develop` → test ổn merge `develop` vào `main`.

**Deploy tự động:** mỗi lần push lên `main`, GitHub Actions ([deploy.yml](.github/workflows/deploy.yml)) sẽ build với `BASE_PATH=/auratarot/` và đẩy lên GitHub Pages trong ~1 phút. Có SPA fallback (`404.html`).

## 🔐 Ghi chú bảo mật & riêng tư

- Không thu thập dữ liệu — mọi thứ nằm trong `localStorage` trình duyệt của bạn
- Không gọi API bên ngoài lúc runtime (trừ ảnh lá bài)
- Server self-host có sẵn security headers (`X-Frame-Options`, `nosniff`, `Referrer-Policy`...) và validate input
- `npm audit`: 0 lỗ hổng

## 🗺️ Lộ trình (các nhánh đã tạo sẵn)

- [ ] `fix/local-card-images` — đưa ảnh 78 lá bài về local (hiện link từ googleusercontent)
- [ ] `fix/code-splitting` — tách nhỏ bundle chính (hiện ~620KB)
- [ ] `feature/user-question` — cho người dùng tự nhập câu hỏi trước khi trải bài
- [ ] `feature/journal-stats-export` — thống kê lá bài hay gặp + xuất/nhập backup JSON
- [ ] `feature/pwa-offline` — PWA cài được vào màn hình chính, offline hoàn toàn
- [ ] Ý tưởng xa hơn: luận giải góc chiếu viết tay từng cặp, Lilith & Chiron, synastry (so bản đồ đôi lứa), chia sẻ kết quả thành ảnh, bản tiếng Anh

## 📜 Giấy phép

Apache-2.0. Nội dung luận giải tarot/chiêm tinh biên soạn cho mục đích chiêm nghiệm & giải trí — không thay thế tư vấn chuyên môn.

---

*✨ Mọi bản quyền hoàn toàn thuộc về Vũ Trụ.*
