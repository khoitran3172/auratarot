# 📋 Kế hoạch phát triển Aura Tarot

> Tài liệu định hướng nội bộ — cập nhật lần cuối: 06/2026.
> **Giai đoạn hiện tại: TẬP TRUNG PHÁT TRIỂN CHỨC NĂNG.** Phần kiếm tiền/hạ tầng chỉ làm khi tính năng đã đủ dày và có traffic.

---

## 🎯 Giai đoạn 1 — Phát triển chức năng (ĐANG LÀM)

Thứ tự ưu tiên theo giá trị/công sức:

1. **Vận hạn (Transits)** — so bầu trời hôm nay với bản đồ sao khai sinh → luận giải "Sao Thổ đang vuông Mặt Trời của bạn". Engine đã tính được, chỉ cần ~50 mục dữ liệu transit. Tạo lý do quay lại mỗi ngày. → nhánh `feature/transits`
2. **Chia sẻ bản đồ sao qua URL** — encode ngày/giờ/nơi sinh vào query param, gửi link là xem được. Zero hạ tầng, tăng trưởng tự nhiên.
3. **Xuất kết quả thành ảnh** (canvas) — bánh xe sao + Big 3 thành ảnh đăng mạng xã hội.
4. **PWA + backup JSON** — cài vào màn hình chính, offline hoàn toàn; xuất/nhập nhật ký. → nhánh `feature/pwa-offline`, `feature/journal-stats-export`
5. **Synastry (so bản đồ đôi lứa)** — nhập 2 người → góc chiếu chéo → luận giải độ hợp. Tính năng "đinh" tiếp theo, rất viral.
6. **Đào sâu chiêm tinh**: luận giải viết tay ~15 cặp góc chiếu quan trọng, Lilith & Chiron, Solar Return.
7. **Tarot mở rộng**: ô nhập câu hỏi riêng (`feature/user-question`), kiểu trải mới (5 lá tình yêu, có/không).

### Nền móng kỹ thuật (xen kẽ giữa các đợt tính năng)
- [ ] `fix/local-card-images` — đưa ảnh 78 lá về local (RỦI RO CAO: link googleusercontent có thể chết bất kỳ lúc nào)
- [ ] `fix/code-splitting` — bundle chính ~620KB; mỗi tính năng mới phải là lazy chunk (pattern NatalChart)
- [ ] Test tự động cho engine thiên văn (đối chiếu ephemeris cố định) chạy trong CI trước deploy
- [ ] Nâng Node local lên 22 LTS để dev mode hoạt động

---

## 💰 Giai đoạn 2 — Kiếm tiền bằng QUẢNG CÁO (CHƯA LÀM — chờ tính năng đủ dày)

**Quyết định đã chốt: thu từ quảng cáo, KHÔNG thu phí người dùng.**

Thực tế doanh thu (traffic Việt Nam, RPM ~0.5–2 USD/1.000 pageview):
- 10k pageview/tháng ≈ 150–500k VNĐ · 100k ≈ 1,5–5 triệu · 1M ≈ 15–50 triệu
- → Bài toán cốt lõi là **kéo traffic**, không phải gắn quảng cáo.

Các bước theo thứ tự bắt buộc:
1. **Mua domain riêng** (~250-300k/năm) — AdSense KHÔNG duyệt subdomain `*.github.io`. GitHub Pages hỗ trợ custom domain miễn phí.
2. **SEO pages** (hạng mục kỹ thuật lớn nhất, sinh traffic chính): thêm router + prerender để mỗi mục dữ liệu thành một trang Google index được:
   - 78 lá tarot → 78 trang (`/la-bai/the-fool`) — search "ý nghĩa lá X" rất nhiều
   - 120 trang "hành tinh × cung", 12 cung mọc, 12 Bắc Giao Điểm... → ~400 trang tiềm năng từ dữ liệu sẵn có
   - Kèm sitemap.xml + meta tags
3. **Analytics** nhẹ tôn trọng riêng tư (GoatCounter/Plausible) để đo traffic thật.
4. Có domain + nội dung được index → **đăng ký Google AdSense**. Traffic >50-100k/tháng → chuyển Ezoic/Mediavine (RPM cao hơn).
5. **Affiliate Shopee/Tiki** song song: link mua bộ bài/sách tarot trong trang thư viện lá bài (hoa hồng 5-10%, tự nhiên hơn banner).

Nguyên tắc đặt quảng cáo: cuối bài luận giải, giữa các thẻ bản đồ sao, trang thư viện. **CẤM**: popup, quảng cáo chen lúc lật bài — phá trải nghiệm là mất retention.

---

## 🏗️ Giai đoạn 3 — Backend (CHỈ KHI CẦN, có thể không bao giờ)

**Quyết định đã chốt: KHÔNG làm backend bây giờ.** Lý do: mọi tính năng giai đoạn 1 chạy thuần client-side; "không tài khoản, dữ liệu không rời thiết bị" là điểm bán hàng; tránh chi phí hosting/bảo trì/trách nhiệm dữ liệu.

Chỉ thêm BE khi chạm **một** trong 3 mốc:
1. Bán subscription (gói vận hạn định kỳ) — client không khóa nổi quyền truy cập theo thời gian
2. Người dùng đòi đồng bộ đa thiết bị (dấu hiệu: phàn nàn mất dữ liệu khi đổi máy)
3. Tính năng cộng đồng (chia sẻ quẻ công khai, bình luận, ghép đôi synastry người lạ)

Khi đó: dùng **Supabase/Firebase** (BaaS, không tự viết server), thiết kế **local-first** — localStorage vẫn là nguồn chính, BE chỉ là bản đồng bộ; người không đăng nhập vẫn dùng đủ mọi thứ. Ước tính ~1-2 tuần công.

---

## 🌳 Quy trình làm việc (nhắc lại)

```
main ────────── production, push = tự deploy GitHub Pages (~1 phút)
 └─ develop ──── nhánh tích hợp
     └─ feature/* , fix/*
```

Nhánh đang có sẵn: `feature/natal-chart` (đã release), `feature/user-question`, `feature/journal-stats-export`, `feature/pwa-offline`, `fix/code-splitting`, `fix/local-card-images`.
