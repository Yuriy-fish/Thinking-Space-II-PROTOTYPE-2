/**
 * GeoAnalog Matchmaker - Main Application Logic
 * Integrates GIS mapping, 3D Globe, Chart.js radar charts, and MCDA engine
 */

import { PLANETARY_TARGETS, EARTH_ANALOG_SITES } from './data.js';
import { GeoAnalogMatcher } from './matcher.js';

class GeoAnalogApp {
  constructor() {
    this.matcher = new GeoAnalogMatcher();
    this.currentTargetBody = "Moon"; // "Moon" or "Mars"
    this.currentTarget = PLANETARY_TARGETS[0];
    this.currentRankedResults = [];
    this.activeAnalogIndex = 0; // Currently inspected analog index in ranked results
    this.map = null;
    this.markersGroup = null;
    this.radarChart = null;
    this.viewMode = '2d'; // '2d' or '3d'
    this.threeScene = null;
    this.discoveryMarker = null;

    this.weights = {
      mineralogy: 0.35,
      topography: 0.30,
      climate: 0.20,
      mission: 0.15
    };

    this.init();
  }

  init() {
    this.initClock();
    this.initLeafletMap();
    this.initRadarChart();
    this.bindEvents();
    this.populateTargetSelect();
    this.runMatchingScan();
    lucide.createIcons();
  }

  initClock() {
    const updateTime = () => {
      const now = new Date();
      const utcString = now.toUTCString().split(' ')[4];
      const clockEl = document.getElementById('utc-clock');
      if (clockEl) clockEl.textContent = utcString;
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  /* ------------------- TARGET MANAGEMENT ------------------- */

  populateTargetSelect() {
    const select = document.getElementById('target-select');
    select.innerHTML = '';

    const filtered = PLANETARY_TARGETS.filter(t => t.body === this.currentTargetBody);
    filtered.forEach(t => {
      const option = document.createElement('option');
      option.value = t.id;
      option.textContent = `${t.name} (${t.coordinates})`;
      select.appendChild(option);
    });

    if (filtered.length > 0) {
      this.currentTarget = filtered[0];
      select.value = this.currentTarget.id;
      this.updateTargetCard(this.currentTarget);
    }
  }

  setTargetBody(body) {
    this.currentTargetBody = body;
    const tabMoon = document.getElementById('tab-moon');
    const tabMars = document.getElementById('tab-mars');

    if (body === 'Moon') {
      tabMoon.className = 'target-tab active-moon flex-1 md:flex-none px-5 py-2 rounded-lg text-xs font-bold flex items-center justify-center space-x-2';
      tabMars.className = 'target-tab flex-1 md:flex-none px-5 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-slate-200 flex items-center justify-center space-x-2';
    } else {
      tabMars.className = 'target-tab active-mars flex-1 md:flex-none px-5 py-2 rounded-lg text-xs font-bold flex items-center justify-center space-x-2';
      tabMoon.className = 'target-tab flex-1 md:flex-none px-5 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-slate-200 flex items-center justify-center space-x-2';
    }

    this.populateTargetSelect();
    this.runMatchingScan();
  }

  updateTargetCard(target) {
    document.getElementById('target-title').textContent = target.name;
    document.getElementById('target-coords').textContent = `${target.coordinates} | ${target.elevation}`;
    document.getElementById('target-description').textContent = target.description;
    document.getElementById('target-temp').textContent = `${target.temperature.min}°C đến ${target.temperature.max}°C`;
    document.getElementById('target-pressure').textContent = target.pressure;
    document.getElementById('target-mineral').textContent = target.mineralogy.primary;
    document.getElementById('target-topo').textContent = target.topography.feature;

    const badge = document.getElementById('target-body-badge');
    badge.textContent = target.body.toUpperCase();
    if (target.body === 'Mars') {
      badge.className = 'px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-300 border border-red-500/30';
    } else {
      badge.className = 'px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30';
    }

    const tagsContainer = document.getElementById('target-focus-tags');
    tagsContainer.innerHTML = '';
    target.missionFocus.forEach(focus => {
      const tag = document.createElement('span');
      tag.className = 'px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-700 text-cyan-300';
      tag.textContent = focus;
      tagsContainer.appendChild(tag);
    });
  }

  /* ------------------- LEAFLET MAP INITIALIZATION ------------------- */

  initLeafletMap() {
    // Dark matter basemap + ESRI Satellite overlay
    this.map = L.map('earth-map', {
      center: [20, 0],
      zoom: 2,
      minZoom: 1.8,
      maxZoom: 16,
      zoomControl: false
    });

    L.control.zoom({ position: 'bottomright' }).addTo(this.map);

    // Hybrid Esri Satellite imagery
    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Earthstar Geographics',
      maxZoom: 18
    });

    // Dark carto layer for high-contrast GIS
    const darkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; CartoDB & OpenStreetMap',
      subdomains: 'abcd',
      maxZoom: 19
    });

    // Default to satellite layer with dark opacity blend
    satelliteLayer.addTo(this.map);

    const baseLayers = {
      "Vệ Tinh Độ Phân Giải Cao": satelliteLayer,
      "Bản Đồ Tối Chuyên Dụng GIS": darkLayer
    };

    L.control.layers(baseLayers, null, { position: 'topright' }).addTo(this.map);
    this.markersGroup = L.layerGroup().addTo(this.map);
  }

  renderMapMarkers() {
    if (!this.markersGroup) return;
    this.markersGroup.clearLayers();

    this.currentRankedResults.forEach((result, index) => {
      const site = result.site;
      const rank = index + 1;
      const isTop3 = rank <= 3;

      let rankClass = "rank-other";
      if (rank === 1) rankClass = "rank-1";
      else if (rank === 2) rankClass = "rank-2";
      else if (rank === 3) rankClass = "rank-3";

      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div class="pulsing-pin ${rankClass}">
            <div class="dot"></div>
            ${isTop3 ? '<div class="ring"></div>' : ''}
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      const marker = L.marker([site.lat, site.lng], { icon: customIcon });

      const popupContent = `
        <div class="text-xs p-1 space-y-1.5 font-sans min-w-[200px]">
          <div class="flex items-center justify-between">
            <span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${rank === 1 ? 'bg-emerald-500/20 text-emerald-400' : rank <= 3 ? 'bg-sky-500/20 text-sky-400' : 'bg-slate-800 text-slate-300'}">
              HẠNG #${rank}
            </span>
            <span class="font-mono font-black text-cyan-300 text-sm">${result.overallASI}% ASI</span>
          </div>
          <h4 class="font-bold text-white text-sm leading-tight">${site.name}</h4>
          <p class="text-[11px] text-slate-400 font-mono">${site.region}</p>
          <div class="text-[10px] text-cyan-200 bg-slate-900/80 p-1.5 rounded border border-slate-700/60 font-mono">
            🎯 ${result.tailoredRecommendation.focusBadge}
          </div>
          <button class="w-full mt-1.5 py-1 px-2 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-[11px] transition" onclick="window.selectAnalogByIndex(${index})">
            Xem Phân Tích Chi Tiết
          </button>
        </div>
      `;

      marker.bindPopup(popupContent);
      marker.on('click', () => {
        this.selectAnalog(index);
      });

      this.markersGroup.addLayer(marker);
    });

    // Make selectAnalogByIndex accessible to popup buttons
    window.selectAnalogByIndex = (idx) => {
      this.selectAnalog(idx);
    };
  }

  /* ------------------- CHART.JS RADAR CHART ------------------- */

  initRadarChart() {
    const ctx = document.getElementById('radarChart').getContext('2d');
    this.radarChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          'Khoáng Vật Học',
          'Địa Mạo & DEM',
          'Khí Hậu Cực Đoan',
          'Chịu Bức Xạ & Khí Quyển',
          'Khớp Tải Trọng Thử Nghiệm'
        ],
        datasets: [{
          label: 'Chỉ số tương đồng (%)',
          data: [85, 88, 75, 80, 90],
          backgroundColor: 'rgba(0, 240, 255, 0.25)',
          borderColor: '#00f0ff',
          borderWidth: 2,
          pointBackgroundColor: '#ffffff',
          pointBorderColor: '#00f0ff',
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: 'rgba(56, 189, 248, 0.15)' },
            grid: { color: 'rgba(56, 189, 248, 0.15)' },
            pointLabels: {
              color: '#94a3b8',
              font: { family: 'JetBrains Mono', size: 9, weight: 'bold' }
            },
            ticks: {
              color: '#64748b',
              backdropColor: 'transparent',
              stepSize: 20,
              min: 0,
              max: 100,
              font: { size: 8 }
            }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  updateRadarChart(result) {
    if (!this.radarChart) return;
    const scores = result.subScores;
    this.radarChart.data.datasets[0].data = [
      scores.mineralogy,
      scores.topography,
      scores.climate,
      scores.radiation,
      scores.mission
    ];
    this.radarChart.data.datasets[0].label = `${result.site.name} (ASI ${result.overallASI}%)`;
    this.radarChart.update();
  }

  /* ------------------- MATCHING PIPELINE EXECUTION ------------------- */

  runMatchingScan() {
    const statusEl = document.getElementById('telemetry-status');
    if (statusEl) statusEl.textContent = 'SCANNING SATELLITE RASTER...';

    this.currentRankedResults = this.matcher.rankAnalogsForTarget(this.currentTarget, this.weights);
    this.renderTopCards();
    this.renderMapMarkers();

    // Default inspect the #1 Top Analog
    this.selectAnalog(0);

    // Update telemetry status
    setTimeout(() => {
      if (statusEl) statusEl.textContent = 'STATUS: MATCHED & OPTIMIZED';
      this.addTelemetryLog(`[${new Date().toISOString().split('T')[1].slice(0, 8)}] Đã đối soát thành công 14 trạm địa cầu với ${this.currentTarget.name}. Điểm số tối ưu: ${this.currentRankedResults[0].site.name} (${this.currentRankedResults[0].overallASI}% ASI).`);
    }, 400);
  }

  renderTopCards() {
    const container = document.getElementById('top-analogs-list');
    container.innerHTML = '';

    const top3 = this.currentRankedResults.slice(0, 3);
    top3.forEach((res, index) => {
      const site = res.site;
      const rank = index + 1;

      const card = document.createElement('div');
      card.className = `glass-panel p-3.5 space-y-2 cursor-pointer transition-all duration-200 ${this.activeAnalogIndex === index ? 'glass-panel-highlight border-cyan-400 bg-sky-950/40' : 'hover:border-sky-500/50'}`;
      card.onclick = () => this.selectAnalog(index);

      let badgeBg = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      if (rank === 2) badgeBg = 'bg-sky-500/20 text-sky-300 border-sky-500/40';
      if (rank === 3) badgeBg = 'bg-amber-500/20 text-amber-300 border-amber-500/40';

      card.innerHTML = `
        <div class="flex items-start justify-between">
          <div class="flex items-center space-x-2">
            <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${badgeBg}">
              TOP #${rank}
            </span>
            <span class="text-xs font-mono text-slate-400">${site.region}</span>
          </div>
          <div class="flex items-baseline space-x-1">
            <span class="asi-score-pill text-lg font-black text-cyan-300 font-mono">${res.overallASI}%</span>
            <span class="text-[9px] font-mono text-slate-500">ASI</span>
          </div>
        </div>

        <div class="flex gap-3 items-center">
          <img src="${site.photoUrl}" alt="${site.name}" class="w-16 h-14 object-cover rounded-lg border border-slate-700/80 shadow">
          <div class="flex-1 min-w-0">
            <h4 class="text-sm font-bold text-white truncate">${site.name}</h4>
            <p class="text-[11px] text-slate-300 truncate">${site.mineralogy.lithology}</p>
            <div class="flex items-center space-x-3 text-[10px] font-mono text-slate-400 mt-1">
              <span>Độ cao: ${site.elevation}m</span>
              <span>•</span>
              <span class="text-amber-300">${site.tempRange}</span>
            </div>
          </div>
        </div>

        <div class="pt-1 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
          <span class="text-cyan-300 font-mono text-[10px] truncate max-w-[240px]">
            ⚡ ${res.tailoredRecommendation.focusBadge}
          </span>
          <span class="text-slate-400 hover:text-cyan-300 flex items-center space-x-1 font-mono text-[10px]">
            <span>Chi tiết</span>
            <i data-lucide="chevron-right" class="w-3 h-3"></i>
          </span>
        </div>
      `;

      container.appendChild(card);
    });

    lucide.createIcons();
  }

  selectAnalog(index) {
    this.activeAnalogIndex = index;
    const result = this.currentRankedResults[index];
    if (!result) return;

    const site = result.site;
    const rank = index + 1;

    // Update highlights on Top Cards
    this.renderTopCards();

    // Update Active Inspection Panel
    document.getElementById('inspect-title').textContent = site.name;
    document.getElementById('inspect-region').textContent = `${site.region} (${site.lat.toFixed(2)}°, ${site.lng.toFixed(2)}°)`;
    document.getElementById('inspect-score').textContent = `${result.overallASI}%`;

    const rankBadge = document.getElementById('inspect-rank-badge');
    rankBadge.textContent = `HẠNG #${rank}`;
    if (rank === 1) rankBadge.className = 'px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
    else if (rank === 2) rankBadge.className = 'px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30';
    else if (rank === 3) rankBadge.className = 'px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30';
    else rankBadge.className = 'px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700';

    document.getElementById('inspect-recommendation-badge').textContent = result.tailoredRecommendation.focusBadge;
    document.getElementById('inspect-recommendation-text').textContent = result.tailoredRecommendation.rationale;

    // Update Radar Chart
    this.updateRadarChart(result);

    // Pan map to site
    if (this.map) {
      this.map.flyTo([site.lat, site.lng], 6, {
        duration: 1.2
      });
    }
  }

  addTelemetryLog(text) {
    const logBox = document.getElementById('telemetry-log');
    if (!logBox) return;
    const entry = document.createElement('div');
    entry.className = 'text-slate-300 font-mono';
    entry.textContent = text;
    logBox.appendChild(entry);
    logBox.scrollTop = logBox.scrollHeight;
  }

  /* ------------------- AUTONOMOUS SATELLITE DISCOVERY ------------------- */

  runCustomScan() {
    const latInput = document.getElementById('input-custom-lat');
    const lngInput = document.getElementById('input-custom-lng');
    const lat = parseFloat(latInput.value);
    const lng = parseFloat(lngInput.value);

    if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      alert("Vui lòng nhập vĩ độ hợp lệ (-90 đến 90) và kinh độ (-180 đến 180).");
      return;
    }

    const discovery = this.matcher.scanCustomCoordinates(this.currentTarget, lat, lng);
    const resultBox = document.getElementById('discovery-result-box');
    resultBox.classList.remove('hidden');

    document.getElementById('disc-score').textContent = `${discovery.overallASI}% ASI`;
    document.getElementById('disc-details').innerHTML = `
      <strong>${discovery.discoveryClassification}</strong><br>
      • Độ cao Copernicus: ${discovery.rasterReadings.copernicusElevation}<br>
      • Phổ Fe Sentinel-2: ${discovery.rasterReadings.sentinelSWIRRatio}<br>
      • Biên độ nhiệt ERA5: ${discovery.rasterReadings.era5ThermalSpread}<br>
      • Đánh giá khoáng ASTER: ${discovery.rasterReadings.asterSilicaClassification}
    `;

    // Drop temporary discovery marker on map
    if (this.discoveryMarker) {
      this.map.removeLayer(this.discoveryMarker);
    }

    const discIcon = L.divIcon({
      className: 'custom-leaflet-marker',
      html: `
        <div class="pulsing-pin" style="filter: drop-shadow(0 0 10px #c084fc);">
          <div class="dot" style="background: #a855f7; border-color: #f3e8ff;"></div>
          <div class="ring" style="border-color: #c084fc;"></div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });

    this.discoveryMarker = L.marker([lat, lng], { icon: discIcon }).addTo(this.map);
    this.discoveryMarker.bindPopup(`
      <div class="text-xs p-1 font-mono text-purple-200">
        <span class="font-bold text-white">📡 ĐIỂM KHẢO SÁT VỆ TINH MỚI</span><br>
        Tọa độ: ${lat.toFixed(3)}°, ${lng.toFixed(3)}°<br>
        Tương đồng với ${this.currentTarget.name}: <span class="text-cyan-300 font-bold">${discovery.overallASI}% ASI</span>
      </div>
    `).openPopup();

    this.map.flyTo([lat, lng], 5);
    this.addTelemetryLog(`[DISCOVERY] Quét tọa độ (${lat.toFixed(2)}, ${lng.toFixed(2)}): ASI = ${discovery.overallASI}% | ${discovery.rasterReadings.asterSilicaClassification}`);
  }

  pickRandomUntappedCoordinates() {
    const untappedPresets = [
      { lat: 14.24, lng: 40.30, name: "Danakil Depression, Ethiopia" },
      { lat: 37.85, lng: 93.42, name: "Qaidam Basin Yardangs, Tibet" },
      { lat: -20.13, lng: -67.62, name: "Salar de Uyuni, Bolivia" },
      { lat: -24.75, lng: 15.28, name: "Namib Sand Sea, Namibia" },
      { lat: 21.12, lng: -11.40, name: "Richat Structure, Mauritania" },
      { lat: 79.43, lng: -90.75, name: "Axel Heiberg Cold Springs, Nunavut" },
      { lat: 56.05, lng: 160.64, name: "Klyuchevskaya Sopka, Kamchatka" }
    ];

    const chosen = untappedPresets[Math.floor(Math.random() * untappedPresets.length)];
    document.getElementById('input-custom-lat').value = chosen.lat;
    document.getElementById('input-custom-lng').value = chosen.lng;
    this.runCustomScan();
  }

  /* ------------------- MODAL: COMPARISON DRAWER ------------------- */

  openComparisonModal() {
    const activeRes = this.currentRankedResults[this.activeAnalogIndex];
    if (!activeRes) return;
    const target = this.currentTarget;
    const site = activeRes.site;

    // Set modal headers
    document.getElementById('modal-target-body-badge').textContent = target.body.toUpperCase();
    document.getElementById('modal-target-name').textContent = target.name;
    document.getElementById('modal-target-coords').textContent = target.coordinates;
    document.getElementById('modal-target-temp').textContent = `${target.temperature.min}°C đến ${target.temperature.max}°C`;
    document.getElementById('modal-target-pressure').textContent = target.pressure;
    document.getElementById('modal-target-mineral').textContent = target.mineralogy.primary;
    document.getElementById('modal-target-roughness').textContent = target.topography.feature;

    document.getElementById('modal-analog-score-badge').textContent = `${activeRes.overallASI}% MATCH`;
    document.getElementById('modal-analog-name').textContent = site.name;
    document.getElementById('modal-analog-region').textContent = `${site.region} (${site.lat}°, ${site.lng}°)`;
    document.getElementById('modal-analog-temp').textContent = site.tempRange;
    document.getElementById('modal-analog-aridity').textContent = site.precipitation;
    document.getElementById('modal-analog-lith').textContent = site.mineralogy.lithology;
    document.getElementById('modal-analog-tube').textContent = site.topography.features;

    // Delta Table Rows
    const tbody = document.getElementById('modal-delta-rows');
    tbody.innerHTML = `
      <tr>
        <td class="p-2.5 font-bold text-slate-300">Thạch học & Khoáng chất</td>
        <td class="p-2.5 text-slate-400">${target.mineralogy.primary}</td>
        <td class="p-2.5 text-slate-300">${site.mineralogy.lithology}</td>
        <td class="p-2.5 text-emerald-400">Tương thích 92% (Basalt/Oxit Fe tương ứng)</td>
      </tr>
      <tr>
        <td class="p-2.5 font-bold text-slate-300">Độ gồ ghề bề mặt DEM</td>
        <td class="p-2.5 text-slate-400">${target.topography.slopeGradient}</td>
        <td class="p-2.5 text-slate-300">${site.topography.slopeVariance}</td>
        <td class="p-2.5 text-sky-400">Khớp độ dốc leo dốc của Rover</td>
      </tr>
      <tr>
        <td class="p-2.5 font-bold text-slate-300">Áp suất Khí quyển</td>
        <td class="p-2.5 text-slate-400">${target.pressure}</td>
        <td class="p-2.5 text-slate-300">101.3 kPa (Mặt biển Trái Đất)</td>
        <td class="p-2.5 text-amber-400">Sai khác lớn -> Cần buồng hút chân không bổ trợ</td>
      </tr>
      <tr>
        <td class="p-2.5 font-bold text-slate-300">Bức xạ & Chỉ số UV</td>
        <td class="p-2.5 text-slate-400">Bức xạ vũ trụ toàn phần (GCR/SPE)</td>
        <td class="p-2.5 text-slate-300">UV Index: ${site.uvIndex}/14 (Khí quyển lọc bớt)</td>
        <td class="p-2.5 text-cyan-400">Sử dụng máy phát nguồn bức xạ mô phỏng tại trạm</td>
      </tr>
      <tr>
        <td class="p-2.5 font-bold text-slate-300">Trọng lực</td>
        <td class="p-2.5 text-slate-400">${target.gravity}</td>
        <td class="p-2.5 text-slate-300">9.81 m/s² (1g)</td>
        <td class="p-2.5 text-sky-300">Dùng hệ thống cần cẩu giảm trọng tải trọng 5/6 (Moon)</td>
      </tr>
    `;

    document.getElementById('compare-modal').classList.remove('hidden');
  }

  /* ------------------- MODAL: PRINTABLE DOSSIER ------------------- */

  openDossierModal() {
    const target = this.currentTarget;
    const topAnalogs = this.currentRankedResults.slice(0, 3);
    const content = document.getElementById('dossier-printable-content');

    content.innerHTML = `
      <div class="border-b border-sky-500/40 pb-3 flex justify-between items-center">
        <div>
          <span class="text-cyan-400 font-bold tracking-widest text-sm">BÁO CÁO TRINH SÁT ĐỊA ĐIỂM MÔ PHỎNG HÀNH TINH</span>
          <h2 class="text-lg text-white font-bold">${target.name.toUpperCase()} RECONNAISSANCE DOSSIER</h2>
        </div>
        <div class="text-right text-[11px] text-slate-400">
          <div>DOCUMENT ID: GEO-ANALOG-${Date.now().toString().slice(-6)}</div>
          <div>DATE: ${new Date().toISOString().split('T')[0]}</div>
        </div>
      </div>

      <div class="space-y-2">
        <h4 class="text-cyan-300 font-bold uppercase text-[11px]">1. MỤC TIÊU SỨ MỆNH NGOẠI HÀNH TINH (MISSION TARGET)</h4>
        <div class="grid grid-cols-2 gap-2 bg-slate-950 p-3 rounded border border-slate-800 text-[11px]">
          <div>• Thiên thể: <strong>${target.body} (${target.bodyName})</strong></div>
          <div>• Tọa độ: <strong>${target.coordinates}</strong></div>
          <div>• Biên độ nhiệt: <strong>${target.temperature.min}°C đến ${target.temperature.max}°C</strong></div>
          <div>• Khí quyển: <strong>${target.pressure}</strong></div>
          <div>• Thạch học: <strong>${target.mineralogy.primary}</strong></div>
          <div>• Mục tiêu: <strong>${target.missionFocus.join(', ')}</strong></div>
        </div>
      </div>

      <div class="space-y-2">
        <h4 class="text-amber-300 font-bold uppercase text-[11px]">2. TOP 3 ĐỊA ĐIỂM TRÁI ĐẤT PHÙ HỢP NHẤT ĐƯỢC ĐỀ XUẤT (TOP 3 ANALOG CANDIDATES)</h4>
        <div class="space-y-2">
          ${topAnalogs.map((res, i) => `
            <div class="bg-slate-950 p-3 rounded border border-slate-800 text-[11px]">
              <div class="flex justify-between items-center font-bold text-white mb-1">
                <span>HẠNG #${i+1}: ${res.site.name} (${res.site.region})</span>
                <span class="text-cyan-300 font-mono">${res.overallASI}% ASI MATCH</span>
              </div>
              <p class="text-slate-400">• Thạch học đối ứng: ${res.site.mineralogy.lithology}</p>
              <p class="text-slate-400">• Đặc trưng DEM: ${res.site.topography.features}</p>
              <p class="text-emerald-300 font-bold mt-1">✔ Khuyến nghị thử nghiệm: ${res.tailoredRecommendation.focusBadge}</p>
              <p class="text-slate-300 text-[10px] mt-0.5">${res.tailoredRecommendation.rationale}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="space-y-2">
        <h4 class="text-purple-300 font-bold uppercase text-[11px]">3. KHUYẾN NGHỊ THỦ TỤC VẬN HÀNH THỬ NGHIỆM PHẦN CỨNG (OPERATIONAL PROTOCOL)</h4>
        <ul class="list-disc list-inside space-y-1 text-slate-300 text-[11px] bg-slate-950 p-3 rounded border border-slate-800">
          <li>Giai đoạn 1: Đo lường hệ số trượt và độ mòn bánh xe kim loại/lưới lò xo trên đá bazan sắc nhọn.</li>
          <li>Giai đoạn 2: Kiểm thử hệ thống SLAM dẫn đường tự động trong điều kiện thiếu tín hiệu GPS và ánh sáng hẹp.</li>
          <li>Giai đoạn 3: Phân tích phổ Raman hiện trường và quy trình tránh nhiễm khuẩn sinh học chéo (Planetary Protection).</li>
          <li>Giai đoạn 4: Đánh giá suy hao pin và chu trình nhiệt với vật liệu mô phỏng đất bề mặt.</li>
        </ul>
      </div>
    `;

    document.getElementById('dossier-modal').classList.remove('hidden');
  }

  /* ------------------- 3D GLOBE INITIALIZATION (Three.js) ------------------- */

  init3DGlobe() {
    const container = document.getElementById('globe-canvas-container');
    if (this.threeScene) return; // already initialized

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 2.8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Earth Sphere
    const sphereGeo = new THREE.SphereGeometry(1, 48, 48);
    
    // Create Earth texture using dynamic canvas procedural landmasses
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    // Deep blue oceans
    ctx.fillStyle = '#0a192f';
    ctx.fillRect(0, 0, 1024, 512);
    
    // Stylized glowing cyber continents
    ctx.fillStyle = '#1e3a8a';
    for (let i = 0; i < 60; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * 1024, Math.random() * 512, Math.random() * 70 + 20, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Grid lines for geospatial styling
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
    ctx.lineWidth = 1;
    for (let x = 0; x < 1024; x += 64) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 512); ctx.stroke();
    }
    for (let y = 0; y < 512; y += 64) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1024, y); ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshPhongMaterial({
      map: texture,
      emissive: 0x051025,
      shininess: 15
    });

    const earthMesh = new THREE.Mesh(sphereGeo, material);
    scene.appendChild(earthMesh);

    // Atmospheric halo
    const haloGeo = new THREE.SphereGeometry(1.04, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.12,
      side: THREE.BackSide
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    scene.appendChild(haloMesh);

    // Add Analog Markers onto 3D Globe
    EARTH_ANALOG_SITES.forEach((site) => {
      const phi = (90 - site.lat) * (Math.PI / 180);
      const theta = (site.lng + 180) * (Math.PI / 180);

      const r = 1.02;
      const x = -(r * Math.sin(phi) * Math.cos(theta));
      const z = (r * Math.sin(phi) * Math.sin(theta));
      const y = (r * Math.cos(phi));

      const pinGeo = new THREE.SphereGeometry(0.022, 16, 16);
      const pinMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
      const pin = new THREE.Mesh(pinGeo, pinMat);
      pin.position.set(x, y, z);
      earthMesh.add(pin);
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0x7dd3fc, 0.8);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    // Mouse drag interaction
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => { isDragging = false; });

    container.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;

      earthMesh.rotation.y += deltaX * 0.005;
      earthMesh.rotation.x += deltaY * 0.005;

      prevMousePos = { x: e.clientX, y: e.clientY };
    });

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      if (!isDragging) {
        earthMesh.rotation.y += 0.0015;
      }
      renderer.render(scene, camera);
    };
    animate();

    this.threeScene = { scene, camera, renderer, earthMesh };
  }

  /* ------------------- EVENT BINDINGS ------------------- */

  bindEvents() {
    // Body switchers
    document.getElementById('tab-moon').addEventListener('click', () => this.setTargetBody('Moon'));
    document.getElementById('tab-mars').addEventListener('click', () => this.setTargetBody('Mars'));

    // Target selector dropdown
    document.getElementById('target-select').addEventListener('change', (e) => {
      const selected = PLANETARY_TARGETS.find(t => t.id === e.target.value);
      if (selected) {
        this.currentTarget = selected;
        this.updateTargetCard(selected);
        this.runMatchingScan();
      }
    });

    // Weight sliders
    const updateWeightUI = () => {
      const minVal = parseInt(document.getElementById('slider-w-mineral').value);
      const topoVal = parseInt(document.getElementById('slider-w-topo').value);
      const climVal = parseInt(document.getElementById('slider-w-climate').value);
      const missVal = parseInt(document.getElementById('slider-w-mission').value);

      document.getElementById('label-w-mineral').textContent = `${minVal}%`;
      document.getElementById('label-w-topo').textContent = `${topoVal}%`;
      document.getElementById('label-w-climate').textContent = `${climVal}%`;
      document.getElementById('label-w-mission').textContent = `${missVal}%`;

      this.weights = {
        mineralogy: minVal / 100,
        topography: topoVal / 100,
        climate: climVal / 100,
        mission: missVal / 100
      };
    };

    ['slider-w-mineral', 'slider-w-topo', 'slider-w-climate', 'slider-w-mission'].forEach(id => {
      document.getElementById(id).addEventListener('input', () => {
        updateWeightUI();
        this.runMatchingScan();
      });
    });

    // Reset weights
    document.getElementById('btn-reset-weights').addEventListener('click', () => {
      document.getElementById('slider-w-mineral').value = 35;
      document.getElementById('slider-w-topo').value = 30;
      document.getElementById('slider-w-climate').value = 20;
      document.getElementById('slider-w-mission').value = 15;
      updateWeightUI();
      this.runMatchingScan();
    });

    // Re-run scan button
    document.getElementById('btn-run-scan').addEventListener('click', () => {
      this.runMatchingScan();
    });

    // Deep discovery scanner
    document.getElementById('btn-scan-custom').addEventListener('click', () => {
      this.runCustomScan();
    });

    document.getElementById('btn-quick-untapped').addEventListener('click', () => {
      this.pickRandomUntappedCoordinates();
    });

    // Map bounds fit button
    document.getElementById('btn-fit-bounds').addEventListener('click', () => {
      if (this.map) {
        this.map.setView([20, 0], 2);
      }
    });

    // Focus active site map button
    document.getElementById('btn-focus-map').addEventListener('click', () => {
      const active = this.currentRankedResults[this.activeAnalogIndex];
      if (active && this.map) {
        this.map.flyTo([active.site.lat, active.site.lng], 7);
      }
    });

    // Compare Delta Modal
    document.getElementById('btn-compare-delta').addEventListener('click', () => {
      this.openComparisonModal();
    });
    document.getElementById('btn-close-compare').addEventListener('click', () => {
      document.getElementById('compare-modal').classList.add('hidden');
    });
    document.getElementById('btn-close-compare-2').addEventListener('click', () => {
      document.getElementById('compare-modal').classList.add('hidden');
    });

    // Guide Modal
    document.getElementById('btn-open-guide').addEventListener('click', () => {
      document.getElementById('guide-modal').classList.remove('hidden');
    });
    document.getElementById('btn-close-guide').addEventListener('click', () => {
      document.getElementById('guide-modal').classList.add('hidden');
    });
    document.getElementById('btn-close-guide-2').addEventListener('click', () => {
      document.getElementById('guide-modal').classList.add('hidden');
    });

    // Dossier Modal
    document.getElementById('btn-open-dossier').addEventListener('click', () => {
      this.openDossierModal();
    });
    document.getElementById('btn-close-dossier').addEventListener('click', () => {
      document.getElementById('dossier-modal').classList.add('hidden');
    });
    document.getElementById('btn-close-dossier-2').addEventListener('click', () => {
      document.getElementById('dossier-modal').classList.add('hidden');
    });
    document.getElementById('btn-print-dossier').addEventListener('click', () => {
      window.print();
    });

    // View Mode Toggle (2D GIS vs 3D Globe)
    const btn2d = document.getElementById('view-mode-2d');
    const btn3d = document.getElementById('view-mode-3d');
    const map2dEl = document.getElementById('earth-map');
    const globe3dEl = document.getElementById('globe-canvas-container');

    btn2d.addEventListener('click', () => {
      this.viewMode = '2d';
      btn2d.className = 'px-2.5 py-1 rounded bg-cyan-600 text-white font-medium flex items-center space-x-1';
      btn3d.className = 'px-2.5 py-1 rounded text-slate-400 hover:text-slate-200 flex items-center space-x-1';
      map2dEl.classList.remove('hidden');
      globe3dEl.classList.add('hidden');
      if (this.map) this.map.invalidateSize();
    });

    btn3d.addEventListener('click', () => {
      this.viewMode = '3d';
      btn3d.className = 'px-2.5 py-1 rounded bg-cyan-600 text-white font-medium flex items-center space-x-1';
      btn2d.className = 'px-2.5 py-1 rounded text-slate-400 hover:text-slate-200 flex items-center space-x-1';
      map2dEl.classList.add('hidden');
      globe3dEl.classList.remove('hidden');
      this.init3DGlobe();
    });
  }
}

// Boot application upon DOM load
document.addEventListener('DOMContentLoaded', () => {
  new GeoAnalogApp();
});
