# Nhật ký mề đay — React + TailwindCSS (mobile-first)

## Chạy dự án

```bash
npm install
npm run dev
```

Mở URL Vite hiển thị (thường là http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Tính năng
- Ghi nhận thời gian, vị trí, mức ngứa, thời gian tồn tại, yếu tố nghi ngờ, ghi chú.
- Chụp/chọn ảnh từ điện thoại.
- Lịch sử, thống kê 30 ngày, xem và xóa chi tiết.
- Lưu dữ liệu và ảnh trực tiếp vào IndexedDB, không có backend.
- Xuất/nhập JSON (bao gồm ảnh).
- PWA: có thể thêm vào màn hình chính khi triển khai trên HTTPS.

## Lưu ý
- Dữ liệu lưu theo **trình duyệt và thiết bị**, không đồng bộ. Sao lưu JSON định kỳ.
- Khi thử trên điện thoại qua mạng LAN HTTP, tính năng PWA/service worker có thể không hoạt động; triển khai HTTPS để cài đặt.
- Bản này là nhật ký cá nhân, không thay thế chẩn đoán của bác sĩ.
