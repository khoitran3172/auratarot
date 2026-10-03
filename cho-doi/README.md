# Chợ Đời — MVP

Game nhập vai đời thường mô phỏng tiểu thương ở Chợ Lớn, chạy theo lịch âm. Phaser 3 + TypeScript + Vite.
Bản web chạy tại **https://aura.id.vn/cho-doi/**. GitHub Actions tự build khi push lên `main` (xem `.github/workflows/deploy.yml` ở thư mục gốc).

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # Vitest cho toàn bộ core
npm run build    # typecheck + build ra dist/
```

## Cấu trúc

- `src/data/` — JSON cấu hình: giá hàng, khách, câu thoại, tin loa phường, sự kiện, `config.json` (mọi con số luật chơi), `strings.vi.json` (toàn bộ chữ UI và cốt truyện). Sửa số ở đây là game đổi theo, không phải đụng code.
- `src/core/` — logic thuần TypeScript, không import Phaser: `Day` (vòng lặp ngày + phiên chợ), `Haggle`, `Customers`, `Economy`, `Luck`, `Debt`, `Gangster`, `Pets`, `Story`, `Calendar`, `Rng` (có seed), `EventBus`, `GameState` (state + migrate save).
- `src/services/` — `SaveService` (interface chung, bản MVP dùng localStorage; đổi sang server hoặc Capacitor Preferences mà không sửa core), `AudioService` (âm thanh tổng hợp bằng WebAudio, dùng tạm).
- `src/view/` — các scene Phaser, actor vẽ bằng hình khối (thay sprite chỉ cần sửa `actors/`), UI dạng DOM overlay (`ui/`).
- `tests/` — test cho từng module core, gồm cả bot chơi liền 10 ngày.

## Ghi chú thiết kế (những chỗ prompt chưa nói rõ, đang chọn tạm)

- Game tự lưu ở đầu mỗi ngày. Mở lại app thì về 4h sáng của ngày đó; tin loa phường và khách giữ nguyên vì random theo seed của từng ngày.
- Mọi tỷ lệ *có rủi ro* đều cộng bonus may mắn rồi kẹp trong 5–95%. Các chiêu chắc ăn (bán theo giá khách, tặng hành…) giữ 100%.
- Anh Tư chỉ bỏ đi khi chiêu "Kể khổ" thất bại (theo bảng chiêu trả giá).
- Chú Tám ghi sổ theo giá chú trả. Bà Tám bỏ đi vì bất kỳ lý do nào đều trừ Uy tín 4.
- Đạt mốc Dẻo miệng 5/10/20 hiện thông báo; câu thoại và chiêu mới cho từng mốc chưa có thiết kế nên chưa làm.
- Chỉ số Dẻo miệng ban đầu theo xuất thân là 3/2/0, chỉnh được trong `config.json`.
