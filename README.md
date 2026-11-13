# 🚀 GeoAnalog Matchmaker
### Nền tảng Trí tuệ Không gian & Đề xuất Địa điểm Mô phỏng Vũ trụ trên Trái Đất (Planetary Analog Recommendation Platform)

Nền tảng Web tương tác ứng dụng **GIS & Viễn thám vệ tinh (Remote Sensing)** giúp các viện nghiên cứu, cơ quan vũ trụ (NASA, ESA) và các công ty NewSpace thương mại tìm kiếm và đối soát **Top 3 địa điểm tương đồng nhất trên Trái Đất** với các tọa độ căn cứ dự kiến trên **Mặt Trăng (Moon)** hoặc **Sao Hỏa (Mars)**.

---

## 🌟 Tính Năng Nổi Bật

1. **Đối soát Đa Thiên Thể (Celestial Body Toggle):**
   - **Mặt Trăng (Luna):** Shackleton Crater (Cực Nam), Marius Hills Lava Tube, Mare Tranquillitatis (Apollo 11).
   - **Sao Hỏa (Ares):** Jezero Crater (Perseverance), Olympus Mons Caldera, Gale Crater (Curiosity).
2. **Thuật toán Phân tích Đa Tiêu chí (MCDA Engine):**
   - Tính toán chỉ số tương đồng tổng hợp **Analog Similarity Index (ASI)** từ 0% đến 100%.
   - Cho phép người dùng tùy biến thanh trượt trọng số (Weights) theo thời gian thực:
     - 🪨 *Khoáng vật & Thạch học (Mineralogy)*
     - 🏔️ *Địa mạo & Độ dốc DEM (Topography)*
     - ❄️ *Khí hậu & Cực hạn nhiệt (Climate)*
     - 🎯 *Độ phù hợp tải trọng sứ mệnh (Mission Payload)*
3. **Trực quan hóa Không gian Song Song (2D GIS + 3D Earth Globe):**
   - Bản đồ 2D tương tác bằng **Leaflet.js** (ảnh vệ tinh độ nét cao + lớp tối chuyên dụng GIS).
   - Quả cầu 3D không gian bằng **Three.js** có ánh sáng khí quyển, lưới tọa độ và điểm ghim radar phát sáng.
4. **Phân tích Đa Chiều (Radar / Spider Chart):**
   - Biểu đồ mạng nhện 5 trục đánh giá chi tiết: Khoáng vật, Địa mạo, Khí hậu, Bức xạ và Khớp tải trọng.
5. **Khảo sát Tọa độ Mới (Autonomous Satellite Discovery):**
   - Không bị giới hạn trong danh sách tĩnh có sẵn. Nhập tọa độ Lat/Lng bất kỳ hoặc bấm nút "🎲 Ngẫu nhiên" để hệ thống tự động trích xuất đặc trưng vệ tinh (Copernicus DEM 30m, Sentinel-2 SWIR Iron Index, ERA5) và chấm điểm đối soát.
6. **Bảng Đối chiếu Sai khác (Side-by-Side Delta Comparison):**
   - So sánh trực quan giữa Mục tiêu Ngoại hành tinh và Trạm Trái Đất, kèm phương án bù trừ kỹ thuật (Technical Mitigation).
7. **Hồ sơ Sứ mệnh Xuất bản (Printable Mission Dossier):**
   - Tạo báo cáo trinh sát chuẩn bị thử nghiệm thiết bị chuyên nghiệp để in hoặc lưu thành file PDF.

---

## 📁 Cấu Trúc Mã Nguồn

```text
geoanalog-matchmaker/
├── index.html           # Giao diện chính, bố cục Mission Control, các Modal đối chiếu & hồ sơ
├── styles.css           # Giao diện tối không gian (Dark Aerospace Theme), radar pings, glassmorphism
├── data.js              # Kho dữ liệu chuẩn khoa học: Hành tinh mục tiêu & 14 Trạm địa cầu
├── matcher.js           # Thuật toán phân tích đa tiêu chí MCDA & mô phỏng viễn thám vệ tinh
├── app.js               # Logic điều phối bản đồ GIS, Three.js 3D Globe, Chart.js radar
├── bundle.js            # Bản đóng gói chạy trực tiếp offline không cần máy chủ web
├── server.ps1           # Máy chủ cục bộ siêu nhẹ viết bằng PowerShell (không cần cài thêm gì)
└── README.md            # Tài liệu dự án
```

---

## ⚡ Hướng Dẫn Chạy Website

### Cách 1 (Khuyên dùng - Nhanh nhất trên Windows):
1. Nhấp chuột phải vào file `server.ps1` chọn **Run with PowerShell** (hoặc mở PowerShell trong thư mục và gõ `.\server.ps1`).
2. Trình duyệt mặc định sẽ tự động mở trang web tại địa chỉ:
   ```text
   http://localhost:8080/
   ```

### Cách 2 (Mở trực tiếp không cần máy chủ):
- Nhấp đúp chuột trực tiếp vào file `index.html` để mở trong bất kỳ trình duyệt nào (Google Chrome, Microsoft Edge, Firefox, Brave). Nhờ có file `bundle.js`, trang web hoạt động hoàn hảo mà không gặp lỗi CORS.

### Cách 3 (Dùng VS Code / Live Server):
- Mở thư mục này trong Visual Studio Code hoặc Antigravity, nhấp chuột phải vào `index.html` và chọn **Open with Live Server**.

---

## 🛠️ Hướng Dẫn Tùy Chỉnh & Phát Triển (Design & Fix)

### 1. Thêm địa điểm mục tiêu Mặt Trăng hoặc Sao Hỏa mới:
Mở file `data.js` (hoặc `bundle.js`), thêm một đối tượng vào mảng `PLANETARY_TARGETS`:
```javascript
{
  id: "mars-valles-marineris",
  name: "Valles Marineris Chasma",
  body: "Mars",
  bodyName: "Sao Hỏa",
  coordinates: "14.0°S, 59.2°W",
  ...
}
```

### 2. Thêm trạm Trái Đất mới:
Thêm đối tượng vào mảng `EARTH_ANALOG_SITES` trong `data.js` (hoặc `bundle.js`):
```javascript
{
  id: "earth-atacama-paranal",
  name: "Cerro Paranal",
  region: "Chile",
  lat: -24.62,
  lng: -70.40,
  ...
}
```

### 3. Tinh chỉnh công thức chấm điểm:
Mở file `matcher.js`, bạn có thể can thiệp trực tiếp vào hàm `evaluateSite()` để thay đổi trọng số hoặc công thức tính điểm tương đồng thạch học, độ dốc hay điều kiện khí hậu.

---

## 🛰️ Nguồn Dữ Liệu Tham Chiếu Khoa Học
- **NASA Planetary Data System (PDS)** & USGS Astrogeology Science Center
- **ESA Copernicus Programme:** Sentinel-2 MSI & Copernicus Global DEM GLO-30
- **NASA / METI:** ASTER Global Emissivity Dataset (GED)
- **ECMWF:** ERA5 Global Climate Reanalysis
