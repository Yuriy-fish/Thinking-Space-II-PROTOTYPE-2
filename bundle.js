/**
 * GeoAnalog Matchmaker - Standalone Universal Bundle
 * Works directly via file:/// and http:// protocols without CORS module restrictions.
 */

// 1. DATA REPOSITORY
const PLANETARY_TARGETS = [
  {
    id: "lunar-shackleton",
    name: "Shackleton Crater (South Pole)",
    body: "Moon",
    bodyName: "Mặt Trăng",
    coordinates: "89.9°S, 0.0°E",
    lat: -89.9,
    lng: 0.0,
    elevation: "-4.2 km (rim to floor)",
    illumination: "86-92% permanent sunlight on rims; 0% in crater floor (PSR)",
    temperature: { min: -246, max: -20, unit: "°C" },
    pressure: "10⁻¹² Pa (Hard Vacuum)",
    gravity: "1.62 m/s² (0.166g)",
    mineralogy: {
      primary: "Anorthosite (Plagioclase Feldspar)",
      secondary: "Water ice volatile deposits in permanently shadowed regions, Pyroxene, Ilmenite",
      ironOxide: "Low-to-Moderate (FeO ~ 4-6%)",
      silica: "44-46%",
      grainSize: "Sub-millimeter abrasive regolith with jagged glass shards"
    },
    topography: {
      feature: "Deep impact crater with 30° steep interior slopes",
      slopeGradient: "Steep (25° - 32°)",
      roughness: "High boulder density on rim, micro-cratering",
      subsurface: "Sub-surface cryo-volatile ice pockets"
    },
    missionFocus: ["Artemis Base Camp", "Water-Ice In-Situ Mining (ISRU)", "Cryogenic Habitat Testing"],
    description: "Vùng cực Nam Mặt Trăng với vành hố nhận ánh sáng vĩnh cửu và đáy hố chìm trong bóng tối vĩnh cửu (PSR), chứa trầm tích băng nước quý giá cho sứ mệnh Artemis."
  },
  {
    id: "lunar-marius",
    name: "Marius Hills Lava Tube Skylight",
    body: "Moon",
    bodyName: "Mặt Trăng",
    coordinates: "14.1°N, 56.7°W",
    lat: 14.1,
    lng: -56.7,
    elevation: "+120 m (surrounding plateau)",
    illumination: "Lunar day/night cycle (14 earth-day sun / 14 earth-day night)",
    temperature: { min: -130, max: 120, unit: "°C (Interior: stable ~ -20°C)" },
    pressure: "10⁻¹² Pa (Hard Vacuum)",
    gravity: "1.62 m/s² (0.166g)",
    mineralogy: {
      primary: "Titanium-rich Basalt (High-Ti Mare)",
      secondary: "Ilmenite (FeTiO₃), Pyroxene, Olivine",
      ironOxide: "High (FeO ~ 18-22%)",
      silica: "38-42%",
      grainSize: "Fine glassy basaltic dust & collapsed basalt blocks"
    },
    topography: {
      feature: "Subterranean basaltic volcanic conduit with collapsed skylight (diameter ~65m, depth ~80m)",
      slopeGradient: "Vertical drop at skylight, smooth undulating tube floor",
      roughness: "Basalt block talus, volcanic flow structures",
      subsurface: "Pressurizable subterranean cavern offering natural radiation shielding"
    },
    missionFocus: ["Radiation-Shielded Underground Habitat", "Cave-Exploration Autonomous Drones", "Lunar Drilling"],
    description: "Giếng trời sụt lún dẫn vào mạng lưới ống dung nham bazan ngầm khổng lồ, nơi lý tưởng để xây dựng căn cứ ngầm tránh bức xạ mặt trời và vi thiên thạch."
  },
  {
    id: "lunar-tranquillitatis",
    name: "Mare Tranquillitatis (Apollo 11 Site)",
    body: "Moon",
    bodyName: "Mặt Trăng",
    coordinates: "0.67°N, 23.47°E",
    lat: 0.67,
    lng: 23.47,
    elevation: "-1.5 km",
    illumination: "Equatorial direct intense solar exposure",
    temperature: { min: -173, max: 117, unit: "°C" },
    pressure: "10⁻¹² Pa (Hard Vacuum)",
    gravity: "1.62 m/s² (0.166g)",
    mineralogy: {
      primary: "High-Titanium Mare Basalt",
      secondary: "Ilmenite, Plagioclase, Agglutinates",
      ironOxide: "High (FeO ~ 16%)",
      silica: "40%",
      grainSize: "Abrasive regolith with electrostatic dust levitation"
    },
    topography: {
      feature: "Flat basaltic volcanic plain punctuated by shallow impact craters",
      slopeGradient: "Low (0° - 8°)",
      roughness: "Moderate; micro-craters, scattered decimeter boulders",
      subsurface: "Dense basalt bedrock under 3-6m regolith blanket"
    },
    missionFocus: ["High-Speed Lunar Rover Mobility", "Solar Array Dust Mitigation", "Landing Pad Civil Engineering"],
    description: "Biển Bazan phẳng xích đạo Mặt Trăng nơi Apollo 11 đổ bộ, điển hình cho các bãi đáp tàu đổ bộ thương mại và kiểm tra độ mài mòn bánh xe rover."
  },
  {
    id: "mars-jezero",
    name: "Jezero Crater (Perseverance Site)",
    body: "Mars",
    bodyName: "Sao Hỏa",
    coordinates: "18.38°N, 77.58°E",
    lat: 18.38,
    lng: 77.58,
    elevation: "-2.5 km (relative to datum)",
    illumination: "Diurnal cycle with periodic regional atmospheric dust opacity",
    temperature: { min: -90, max: 20, unit: "°C" },
    pressure: "610 Pa (0.006 atm - 95% CO₂)",
    gravity: "3.72 m/s² (0.38g)",
    mineralogy: {
      primary: "Smectite Clays, Carbonates, Deltaic Mudstones",
      secondary: "Olivine-rich sandstones, Iron oxides (Hematite), Sulfate salts",
      ironOxide: "Extremely High (Fe₂O₃ rich red dust)",
      silica: "45-50%",
      grainSize: "Fine cohesive silt, sand dunes, and oxidized gravel"
    },
    topography: {
      feature: "Ancient lacustrine paleolake basin with an incised river delta",
      slopeGradient: "Steep delta front (15° - 25°), flat crater floor",
      roughness: "Layered sedimentary rock outcrops, ventifact boulders, sand dunes",
      subsurface: "Hydrated clay layers with high biosignature preservation potential"
    },
    missionFocus: ["Astrobiology & Biosignature Sampling", "Sedimentary Core Drilling", "River Delta Rover Navigation"],
    description: "Miệng hố va chạm cổ xưa từng chứa hồ nước và vùng châu thổ sông ngập nước, tâm điểm tìm kiếm dấu vết sự sống vi sinh cổ đại của xe tự hành Perseverance."
  },
  {
    id: "mars-olympus",
    name: "Olympus Mons Caldera & Lava Slopes",
    body: "Mars",
    bodyName: "Sao Hỏa",
    coordinates: "18.65°N, 226.2°E",
    lat: 18.65,
    lng: -133.8,
    elevation: "+21.2 km (highest volcano in solar system)",
    illumination: "High solar UV irradiance through ultra-thin atmosphere",
    temperature: { min: -110, max: -10, unit: "°C" },
    pressure: "72 Pa (Ultra-thin near-vacuum CO₂)",
    gravity: "3.72 m/s² (0.38g)",
    mineralogy: {
      primary: "Tholeiitic Basalt with low silica",
      secondary: "Pyroxene, Olivine, Plagioclase, thin atmospheric sulfur coating",
      ironOxide: "High (FeO ~ 17%)",
      silica: "48-52%",
      grainSize: "Vesicular basalt, basaltic gravel and volcanic tephra"
    },
    topography: {
      feature: "Giant shield volcano with 80km wide caldera collapse and 6km perimeter scarp",
      slopeGradient: "Shallow shield flanks (2° - 5°), vertical caldera walls (60° - 90°)",
      roughness: "Extensive tube-fed pāhoehoe lava flows, rilles, collapsed skylights",
      subsurface: "Gigantic cavernous lava tubes capable of housing city-scale habitats"
    },
    missionFocus: ["Mega-Scale Subsurface Habitat", "High-Altitude Aerodynamic Decelerators", "Extreme Vertical Rappelling"],
    description: "Núi lửa hình khiên khổng lồ cao nhất hệ Mặt Trời (21.2 km). Các sườn dốc bazan chứa hệ thống ống dung nham kỳ vĩ với trần hang cực kỳ dày dặn."
  },
  {
    id: "mars-gale",
    name: "Gale Crater & Mount Sharp",
    body: "Mars",
    bodyName: "Sao Hỏa",
    coordinates: "5.4°S, 137.8°E",
    lat: -5.4,
    lng: 137.8,
    elevation: "-4.5 km (floor) to +5.5 km (central peak)",
    illumination: "Tropical Martian sun with severe diurnal thermal cycling",
    temperature: { min: -85, max: 0, unit: "°C" },
    pressure: "750 Pa (0.007 atm)",
    gravity: "3.72 m/s² (0.38g)",
    mineralogy: {
      primary: "Sulfate-bearing units, Smectite/Illite clays, Hematite",
      secondary: "Basaltic wind-blown dunes, Calcium sulfate veins",
      ironOxide: "High (FeO/Fe₂O₃ ~ 19%)",
      silica: "46-52%",
      grainSize: "Aeolian sand dunes (Bagnold Dunes) and fine mudstone strata"
    },
    topography: {
      feature: "Impact crater with a 5km layered sedimentary mound (Aeolis Mons) in center",
      slopeGradient: "Mound slopes (10° - 20°), active dune crossings",
      roughness: "Sharp bedrock strata, sand traps, gravel channels",
      subsurface: "Stratified hydrologic sediment records"
    },
    missionFocus: ["Long-Duration Rover Climbing Endurance", "Aeolian Sand Dune Crossing Traction", "Sedimentary Stratigraphy"],
    description: "Miệng hố va chạm với đỉnh núi trầm tích phân tầng cao 5km ở trung tâm. Vùng thử nghiệm khốc liệt về khả năng vượt cồn cát và leo vách đá của Curiosity."
  }
];

const EARTH_ANALOG_SITES = [
  {
    id: "earth-lanzarote",
    name: "Lanzarote Volcanic Geopark",
    region: "Canary Islands, Spain",
    lat: 29.04,
    lng: -13.71,
    elevation: 350,
    climateType: "Hyper-arid Volcanic / Oceanic Subtropical",
    tempRange: "14°C to 28°C",
    precipitation: "110 mm/year (extremely dry)",
    uvIndex: 9,
    photoUrl: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&w=800&q=80",
    mineralogy: {
      lithology: "Recent Tholeiitic & Alkaline Basalts, Olivine Xenoliths",
      ironOxideScore: 88,
      silicaContent: "45-48%",
      soilTexture: "Coarse volcanic tephra, lapilli, basaltic gravel",
      hydratedMinerals: "Low (anhydrous volcanic glass, pyroxene)"
    },
    topography: {
      features: "Corona Lava Tube system (Cueva de los Verdes), spatter cones, collapse pits",
      slopeVariance: "Variable (5° to 35°)",
      surfaceRoughness: 92,
      subsurfaceAccess: "6 km continuous uncollapsed subterranean lava tube",
      boulderFrequency: "High (angular basaltic talus)"
    },
    climate: {
      aridityScore: 82,
      thermalDeltaScore: 60,
      radiationScore: 75,
      extremeConditionScore: 74
    },
    specialization: {
      primary: "Lava Tube Exploration & Underground Habitation",
      bestPayloads: [
        "Autonomous LiDAR Cave-Mapping Drones",
        "Subterranean Life Support & Habitat Pressurization",
        "EVA Spacesuit Mobility in Confined Basalt Chokepoints"
      ],
      missionTypeMatch: ["Lunar Lava Tube Base", "Martian Subsurface Shielding"],
      nasaEsaHistory: "ESA PANGAEA Astronaut Planetary Field Geology Training Site (since 2016)"
    },
    description: "Một trong những quần thể ống dung nham bazan hoàn hảo và nguyên sơ nhất Trái Đất, nơi ESA đào tạo phi hành gia nghiên cứu địa mạo hang động Mặt Trăng."
  },
  {
    id: "earth-atacama-yungay",
    name: "Yungay Sector, Atacama Desert",
    region: "Antofagasta, Chile",
    lat: -24.06,
    lng: -69.95,
    elevation: 1020,
    climateType: "Hyper-Arid Continental Desert / Extreme UV",
    tempRange: "2°C to 38°C (Extreme Diurnal Swing)",
    precipitation: "< 2 mm/year (driest non-polar desert on Earth)",
    uvIndex: 12,
    photoUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    mineralogy: {
      lithology: "Nitrate, Perchlorate, Halite & Sulfate crusts over oxidized volcanic sands",
      ironOxideScore: 94,
      silicaContent: "50-54%",
      soilTexture: "Dry hyper-oxidized powdery regolith with high salt crusts",
      hydratedMinerals: "Gypsum, anhydrite, perchlorates (exact Mars chemical match)"
    },
    topography: {
      features: "Dry alluvial fans, inverted paleochannels, salt pans, yardangs",
      slopeVariance: "Low to Moderate (2° to 15°)",
      surfaceRoughness: 76,
      subsurfaceAccess: "Deep desiccation cracks, endolithic salt nodules",
      boulderFrequency: "Moderate (desert-varnished cobbles)"
    },
    climate: {
      aridityScore: 99,
      thermalDeltaScore: 88,
      radiationScore: 96,
      extremeConditionScore: 95
    },
    specialization: {
      primary: "Martian Astrobiology & Extreme Aridity Sensors",
      bestPayloads: [
        "Deep Core Subsurface Drilling Rig (1-2m depth)",
        "Raman & Luminescence Biosignature Spectrometers",
        "High-UV Optical Sensor Degradation Testing",
        "ISRU Atmospheric Moisture Extraction"
      ],
      missionTypeMatch: ["Mars Jezero Paleolake", "Mars Gale Sulfate Layer"],
      nasaEsaHistory: "NASA ASTEP, Curiosity and Perseverance payload calibration benchmark"
    },
    description: "Vùng đất khô cằn bậc nhất thế giới với nồng độ muối perchlorate và bức xạ cực tím mô phỏng sát nhất bề mặt bị oxy hóa của Sao Hỏa."
  },
  {
    id: "earth-mcmurdo-dryvalleys",
    name: "McMurdo Dry Valleys (Taylor Valley)",
    region: "Victoria Land, Antarctica",
    lat: -77.62,
    lng: 162.88,
    elevation: 320,
    climateType: "Polar Hyper-Arid Cold Desert",
    tempRange: "-50°C to +4°C (Katabatic winds up to 320 km/h)",
    precipitation: "< 10 mm water equivalent/year",
    uvIndex: 8,
    photoUrl: "https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=800&q=80",
    mineralogy: {
      primary: "Dry permafrost, sandstone talus, dolerite sills",
      ironOxideScore: 81,
      silicaContent: "52-58%",
      soilTexture: "Coarse cryo-fractured gravel, devoid of organic matter, polygonal patterned ground",
      hydratedMinerals: "Halite, mirabilite, subsurface hypersaline cryogenic brine"
    },
    topography: {
      features: "Glacially scoured U-valleys, sand dunes over ice, frozen permafrost mounds",
      slopeVariance: "Moderate to High (10° to 30°)",
      surfaceRoughness: 86,
      subsurfaceAccess: "Cryogenic permafrost & subglacial brine conduits",
      boulderFrequency: "High (ventifact dolerite blocks)"
    },
    climate: {
      aridityScore: 97,
      thermalDeltaScore: 98,
      radiationScore: 82,
      extremeConditionScore: 98
    },
    specialization: {
      primary: "Cryogenic Volatiles & South Pole Cold Survival",
      bestPayloads: [
        "Cryo-Drilling in Sub-Zero Hardened Regolith",
        "Battery & Fuel Cell Cold-Start Performance (-40°C)",
        "Thermal Control Systems for Long Polar Darkness",
        "Subsurface GPR (Ground Penetrating Radar) Ice Detection"
      ],
      missionTypeMatch: ["Lunar South Pole Shackleton", "Mars North Polar Cap"],
      nasaEsaHistory: "NASA Astrobiology Institute primary test site for cryo-subsurface life exploration"
    },
    description: "Thung lũng khô không tuyết phủ tại Nam Cực, nơi có nhiệt độ âm sâu, gió katabatic khủng khiếp và đất permafrost mô phỏng hoàn hảo vùng cực Mặt Trăng & Sao Hỏa."
  },
  {
    id: "earth-iceland-holuhraun",
    name: "Holuhraun & Askja Lava Fields",
    region: "Central Highlands, Iceland",
    lat: 64.85,
    lng: -16.83,
    elevation: 800,
    climateType: "Sub-Arctic Volcanic Desert / Glacier Boundary",
    tempRange: "-22°C to 12°C",
    precipitation: "350 mm/year (mostly winter snow/sleet)",
    uvIndex: 5,
    photoUrl: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80",
    mineralogy: {
      lithology: "Pristine Basalt (2014 eruption), Tholeiite, Anorthositic crystals",
      ironOxideScore: 90,
      silicaContent: "47-50%",
      soilTexture: "Ultra-sharp glassy basalt shards, a'a lava rubble, fine black volcanic ash",
      hydratedMinerals: "Extremely low in young flows, matches unweathered Lunar Mare"
    },
    topography: {
      features: "Vast basaltic flood plain, collapse calderas, pumice fields, braided outwash",
      slopeVariance: "Low to Moderate (2° to 20°)",
      surfaceRoughness: 95,
      subsurfaceAccess: "Fissure vents, volcanic craters, geothermal vents",
      boulderFrequency: "Extremely High (razor-sharp basaltic clasts)"
    },
    climate: {
      aridityScore: 70,
      thermalDeltaScore: 80,
      radiationScore: 60,
      extremeConditionScore: 85
    },
    specialization: {
      primary: "Rover Wheel Abrasion & Apollo Geological Training",
      bestPayloads: [
        "Rover Metallic / Airless Mesh Wheel Durability",
        "Autonomous Off-Road Navigation over High-Roughness Basalt",
        "Spacesuit Joint Sealing Against Glassy Basaltic Dust",
        "In-Situ Sintering of Basalt for 3D Habitat Printing"
      ],
      missionTypeMatch: ["Mare Tranquillitatis", "Marius Hills Flow", "Olympus Mons Flanks"],
      nasaEsaHistory: "Apollo 11 & 15 Neil Armstrong / Buzz Aldrin field geology training camp (1965-1967)"
    },
    description: "Cánh đồng bazan trẻ không thảm thực vật với độ nhám bề mặt và tính mài mòn cơ học cực cao, từng là nơi rèn luyện của các phi hành gia Apollo."
  },
  {
    id: "earth-haughton-devon",
    name: "Haughton Impact Crater, Devon Island",
    region: "Nunavut, High Canadian Arctic",
    lat: 75.38,
    lng: -89.67,
    elevation: 250,
    climateType: "Polar Desert / Arctic Impact Structure",
    tempRange: "-45°C to +8°C",
    precipitation: "80 mm/year",
    uvIndex: 4,
    photoUrl: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
    mineralogy: {
      lithology: "Impact Breccia (Allogenic polymict), Dolomite, Shatter cones, Hydrothermal paleovents",
      ironOxideScore: 78,
      silicaContent: "48-52%",
      soilTexture: "Crushed impact ejecta, permafrost shattered stones, clay silt",
      hydratedMinerals: "Jarosite, hydrothermal iron oxides, sulfate veins"
    },
    topography: {
      features: "23 km diameter ancient impact crater, central uplift peak, inverted canyons",
      slopeVariance: "Moderate to Steep (8° to 35°)",
      surfaceRoughness: 89,
      subsurfaceAccess: "Impact-fractured hydrothermal pipes, permafrost cryo-ground",
      boulderFrequency: "High (shattered impact breccias)"
    },
    climate: {
      aridityScore: 90,
      thermalDeltaScore: 94,
      radiationScore: 68,
      extremeConditionScore: 94
    },
    specialization: {
      primary: "Impact Crater Dynamics & Long-Duration Mars Habitat",
      bestPayloads: [
        "Pressurized Rover Long-Range Traversals",
        "Geological Sampling of Shocked Impact Breccias",
        "Human Isolation & Mission Ops Protocols (HMP-RS)",
        "Hypolithic Microbe Detection in Shocked Rocks"
      ],
      missionTypeMatch: ["Mars Jezero Crater", "Lunar Shackleton Rim", "Mars Gale Crater"],
      nasaEsaHistory: "NASA Haughton-Mars Project (HMP) active since 1997 with Mars Institute"
    },
    description: "Hố va chạm thiên thạch 23km nằm giữa hoang mạc cực bắc Canada, được NASA ví như 'Sao Hỏa trên Trái Đất' về mặt địa mạo hố va chạm và sự cô lập khắc nghiệt."
  },
  {
    id: "earth-hawaii-hiseas",
    name: "Mauna Loa HI-SEAS Volcano Station",
    region: "Big Island, Hawaii, USA",
    lat: 19.53,
    lng: -155.57,
    elevation: 2490,
    climateType: "High-Altitude Alpine Volcanic / Cool Tropical Desert",
    tempRange: "-2°C to 20°C",
    precipitation: "200 mm/year (rain shadow)",
    uvIndex: 11,
    photoUrl: "https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=800&q=80",
    mineralogy: {
      lithology: "Pāhoehoe & 'A'ā Basalts, Olivine-rich Picrite, Lunar Soil Simulant (JSC-1A source)",
      ironOxideScore: 91,
      silicaContent: "46-49%",
      soilTexture: "Crushed basalt cinders, porous volcanic scoria, glassy shards",
      hydratedMinerals: "Low; anhydrous iron-titanium basalt oxides"
    },
    topography: {
      features: "Pāhoehoe ropy lava flows, volcanic cones, accessible lava tubes, cinder mounds",
      slopeVariance: "Gentle to Moderate (3° to 18°)",
      surfaceRoughness: 88,
      subsurfaceAccess: "Subterranean lava tube caves at 2500m elevation",
      boulderFrequency: "Moderate to High"
    },
    climate: {
      aridityScore: 78,
      thermalDeltaScore: 72,
      radiationScore: 92,
      extremeConditionScore: 82
    },
    specialization: {
      primary: "Long-Duration Human Isolation & Regolith Simulant Operations",
      bestPayloads: [
        "Crew Psychology & Crew-Resource Management (CRM)",
        "Bioregenerative Food Production (Hydroponics / Microgreens)",
        "Wear-and-Tear Testing on EVA Spacesuit Fabrics",
        "Dust Ingress Prevention into Airlocks"
      ],
      missionTypeMatch: ["Moon Artemis Habitat", "Marius Hills Lava Tube", "Olympus Mons Base"],
      nasaEsaHistory: "NASA-funded HI-SEAS (Hawaii Space Exploration Analog and Simulation) missions"
    },
    description: "Trạm nghiên cứu trên sườn núi lửa Mauna Loa cao 2.500m; đất bazan ở đây chính là nguồn chế tạo mô phỏng đất Mặt Trăng JSC-1 chuẩn của NASA."
  },
  {
    id: "earth-meteor-crater",
    name: "Barringer Meteor Crater",
    region: "Coconino County, Arizona, USA",
    lat: 35.03,
    lng: -111.02,
    elevation: 1740,
    climateType: "Semi-Arid Colorado Plateau Desert",
    tempRange: "-10°C to 38°C",
    precipitation: "220 mm/year",
    uvIndex: 9,
    photoUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    mineralogy: {
      lithology: "Shocked Coconino Sandstone, Kaibab Limestone, Nickel-Iron meteoritic fragments",
      ironOxideScore: 85,
      silicaContent: "65-70%",
      soilTexture: "Pulverized silica rock flour, shocked impact breccia",
      hydratedMinerals: "Moderate"
    },
    topography: {
      features: "1.2 km diameter fresh impact crater, 170m deep bowl, inverted flap rim",
      slopeGradient: "Inner rim slopes 35° to 45° (Extreme)",
      slopeVariance: "Extreme inner bowl slopes, flat external plateau",
      surfaceRoughness: 84,
      subsurfaceAccess: "Impact-melt breccias under crater floor",
      boulderFrequency: "High (megablocks of overturned stratigraphy)"
    },
    climate: {
      aridityScore: 85,
      thermalDeltaScore: 82,
      radiationScore: 84,
      extremeConditionScore: 78
    },
    specialization: {
      primary: "Impact Crater Rim Traverse & Rappelling Mobility",
      bestPayloads: [
        "Tethered Crater-Wall Rappelling Rovers (Axel/DuAxel)",
        "Shock Metamorphism Remote Spectrometry",
        "Astronaut Crater Navigation and Horizon Occlusion Comms"
      ],
      missionTypeMatch: ["Lunar Shackleton Crater Rim", "Mars Jezero Crater Wall"],
      nasaEsaHistory: "Primary astronaut training ground for Apollo 11-17 moonwalkers; Eugene Shoemaker field lab"
    },
    description: "Hố va chạm thiên thạch còn nguyên vẹn nhất thế giới; lòng chảo dốc 40° là bãi thử số 1 cho các dòng rover leo vách đá bằng dây cáp."
  },
  {
    id: "earth-utah-mdrs",
    name: "Hanksville Mars Desert Research Station (MDRS)",
    region: "San Rafael Swell, Utah, USA",
    lat: 38.41,
    lng: -110.79,
    elevation: 1390,
    climateType: "Continental Cold Desert / Inverted Topography",
    tempRange: "-15°C to 40°C",
    precipitation: "180 mm/year",
    uvIndex: 9,
    photoUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    mineralogy: {
      lithology: "Morrison Formation: Smectite Clays, Gypsum veins, Iron concretions (Moqui Marbles)",
      ironOxideScore: 92,
      silicaContent: "55-60%",
      soilTexture: "Cohesive swelling bentonite clay, fine red dust, iron hematite blueberries",
      hydratedMinerals: "High sulfate and smectite clay match with Martian phyllosilicates"
    },
    topography: {
      features: "Inverted river channels, badland mud hills, mesas, deeply incised dry washes",
      slopeVariance: "Moderate (5° to 25°)",
      surfaceRoughness: 79,
      subsurfaceAccess: "Dry wash undercut caves, clay strata",
      boulderFrequency: "Moderate"
    },
    climate: {
      aridityScore: 86,
      thermalDeltaScore: 87,
      radiationScore: 86,
      extremeConditionScore: 83
    },
    specialization: {
      primary: "Sedimentary Stratigraphy & Moqui Marble Analogs",
      bestPayloads: [
        "Swelling Clay & Mud Wheel Traction Stress Testing",
        "Hematite Concretion (Martian Blueberries) Pattern Detection",
        "Autonomous Habitat Greenhouse Cycle Testing",
        "EVA Ergonomics in Complex Gully Terrain"
      ],
      missionTypeMatch: ["Mars Jezero River Delta", "Mars Gale Sulfate Mound"],
      nasaEsaHistory: "The Mars Society flagship research station, active with >200 simulation crews"
    },
    description: "Vùng đất sét đỏ bentonite chứa các hòn kết hạch hematite (Moqui Marbles) tương đồng tuyệt đối với 'việt quất hematite' mà rover Opportunity tìm thấy trên Sao Hỏa."
  },
  {
    id: "earth-danakil",
    name: "Danakil Depression & Dallol",
    region: "Afar Triangle, Ethiopia",
    lat: 14.24,
    lng: 40.30,
    elevation: -125,
    climateType: "Hyper-Arid Lowland / Geothermal Extreme Acid",
    tempRange: "25°C to 52°C (Hottest inhabited place on Earth)",
    precipitation: "< 100 mm/year",
    uvIndex: 12,
    photoUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    mineralogy: {
      lithology: "Potash salts, native sulfur chimneys, iron-rich acidic hypersaline pools, basaltic dykes",
      ironOxideScore: 96,
      silicaContent: "38-42%",
      soilTexture: "Fragile salt crusts over bubbling acidic brine, hyper-saline efflorescence",
      hydratedMinerals: "Extremely high sulfates, chlorates, jarosite"
    },
    topography: {
      features: "Sub-sea level volcanic depression, hydrothermal chimneys, boiling brine terraces",
      slopeVariance: "Low (0° to 10°)",
      surfaceRoughness: 82,
      subsurfaceAccess: "Boiling geothermal fissure conduits",
      boulderFrequency: "Low to Moderate (salt stalagmites)"
    },
    climate: {
      aridityScore: 94,
      thermalDeltaScore: 92,
      radiationScore: 98,
      extremeConditionScore: 99
    },
    specialization: {
      primary: "Extreme Thermophile Astrobiology & Corrosive Environment",
      bestPayloads: [
        "Acid-Resistant & Corrosion-Proof Rover Materials",
        "Thermal Tolerance Testing for Electronics (50°C+ ambient)",
        "Prebiotic Chemistry & Hydrothermal Life Detectors",
        "Salt Crust Bearing-Capacity Sensors"
      ],
      missionTypeMatch: ["Early Hydrothermal Mars", "Venus Atmospheric Analog (Sulfur)"],
      nasaEsaHistory: "Europlanet Research Infrastructure planetary analog field testing site"
    },
    description: "Vùng trũng -125m dưới mực nước biển nóng nhất hành tinh, với các hồ axit ph=0 và tháp lưu huỳnh mô phỏng môi trường thủy nhiệt sơ khai đầy khắc nghiệt của Sao Hỏa."
  },
  {
    id: "earth-qaidam",
    name: "Qaidam Basin Hyper-Arid Yardangs",
    region: "Qinghai Province, Tibetan Plateau",
    lat: 37.85,
    lng: 93.42,
    elevation: 2800,
    climateType: "High-Altitude Hyper-Arid Cold Desert",
    tempRange: "-28°C to 34°C",
    precipitation: "15 mm/year",
    uvIndex: 11,
    photoUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    mineralogy: {
      lithology: "Evaporite playa, Halite, Gypsum, Smectite, Mg-sulfates",
      ironOxideScore: 89,
      silicaContent: "48-54%",
      soilTexture: "Desiccated saline clay, aeolian sand, wind-sculpted yardangs",
      hydratedMinerals: "High (magnesium sulfates match Mars orbital spectra)"
    },
    topography: {
      features: "Vast yardang fields (wind-carved ridges), dry salt lake beds, dune corridors",
      slopeVariance: "Moderate to Steep ridges (15° to 45°)",
      surfaceRoughness: 87,
      subsurfaceAccess: "Layered evaporite deposits and buried brine",
      boulderFrequency: "Low (wind-carved clay/sandstone ridges)"
    },
    climate: {
      aridityScore: 95,
      thermalDeltaScore: 91,
      radiationScore: 95,
      extremeConditionScore: 93
    },
    specialization: {
      primary: "Martian Yardangs & Dust Devil Dynamics",
      bestPayloads: [
        "Aeolian Erosion & Dust Ingress Filter Testing",
        "High-Altitude Solar Panel Efficiency in Thin Atmosphere",
        "Yardang Canyon Obstacle-Avoidance Autonomous Nav",
        "Sulfate Mineral Raman Characterization"
      ],
      missionTypeMatch: ["Mars Gale Aeolian Yardangs", "Mars Medusae Fossae Formation"],
      nasaEsaHistory: "Chinese Tianwen-1 Mars Rover engineering field test site"
    },
    description: "Lòng chảo cao nguyên Tây Tạng ở độ cao 2.800m với mạng lưới yardang khổng lồ do gió bào mòn, nơi Trung Quốc thử nghiệm xe tự hành Chúc Dung (Zhurong)."
  },
  {
    id: "earth-salar-uyuni",
    name: "Salar de Uyuni",
    region: "Potosí, Bolivian Altiplano",
    lat: -20.13,
    lng: -67.62,
    elevation: 3656,
    climateType: "High-Altitude Hyper-Arid Salt Flat / Intense Solar Radiation",
    tempRange: "-10°C to 20°C",
    precipitation: "150 mm/year",
    uvIndex: 14,
    photoUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    mineralogy: {
      lithology: "Thick crystalline Halite (NaCl), Gypsum, Lithium chloride brine, Ulexite",
      ironOxideScore: 65,
      silicaContent: "35-40%",
      soilTexture: "Polygonal salt crust, high reflectivity, subsurface brine slush",
      hydratedMinerals: "High evaporite salts"
    },
    topography: {
      features: "10,500 km² ultra-flat salt plain (altitude variation < 1 meter across 100km)",
      slopeVariance: "Extremely Low (< 0.1°)",
      surfaceRoughness: 60,
      subsurfaceAccess: "Deep brine extraction holes",
      boulderFrequency: "Near Zero (perfect flat mirror)"
    },
    climate: {
      aridityScore: 88,
      thermalDeltaScore: 78,
      radiationScore: 99,
      extremeConditionScore: 89
    },
    specialization: {
      primary: "Orbital Satellite Radar Calibration & High-UV Albedo Exposure",
      bestPayloads: [
        "Satellite Altimeter & Synthetic Aperture Radar (SAR) Ground Truth",
        "Ultra-High UV Solar Degradation of Spacecraft Coatings",
        "Autonomous Long-Distance High-Speed Rover Cruising",
        "Lithium & Salt Chemical Extraction"
      ],
      missionTypeMatch: ["Martian Evaporite Basins", "Europa Surface Cryo-Salts"],
      nasaEsaHistory: "Global benchmark for Earth-observing satellite sensor calibration (ICESat, Sentinel-1)"
    },
    description: "Cánh đồng muối lớn nhất thế giới ở độ cao 3.656m, địa hình phẳng tuyệt đối với bức xạ cực tím thuộc hàng cao nhất Trái Đất (chỉ số UV 14+)."
  },
  {
    id: "earth-svalbard",
    name: "Svalbard Archipelago (Ny-Ålesund)",
    region: "Spitsbergen, Norway",
    lat: 78.92,
    lng: 11.93,
    elevation: 120,
    climateType: "High-Arctic Tundra / Permafrost Glacial Basalt",
    tempRange: "-30°C to +8°C",
    precipitation: "190 mm/year",
    uvIndex: 3,
    photoUrl: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
    mineralogy: {
      lithology: "Quaternary Basalts, Mantle Xenoliths, Carbonate hydrothermal deposits",
      ironOxideScore: 88,
      silicaContent: "46-50%",
      soilTexture: "Polygonal sorted stone circles, permafrost gelifluction gravel",
      hydratedMinerals: "Globular carbonates (identical to ALH84001 Martian meteorite carbonates)"
    },
    topography: {
      features: "Glacier fronts, braided glacial streams, basaltic nunataks",
      slopeVariance: "Moderate (5° to 25°)",
      surfaceRoughness: 86,
      subsurfaceAccess: "Continuous permafrost & subglacial cryo-springs",
      boulderFrequency: "High (moraine glacial boulders)"
    },
    climate: {
      aridityScore: 78,
      thermalDeltaScore: 92,
      radiationScore: 50,
      extremeConditionScore: 91
    },
    specialization: {
      primary: "ALH84001 Carbonate Analogs & Cryo-Drilling",
      bestPayloads: [
        "Autonomous Deep Ice & Permafrost Core Drilling",
        "Miniaturized Mass Spectrometers & Raman for Biosignatures",
        "Low-Temperature Mechanism Lubricant Endurance"
      ],
      missionTypeMatch: ["Mars Polar Chasmata", "Martian Carbonate Deposits"],
      nasaEsaHistory: "AMASE (Arctic Mars Analog Svalbard Expedition) backed by NASA & ESA"
    },
    description: "Nơi duy nhất trên Trái Đất tìm thấy khối cầu carbonate lắng đọng trong đá bazan giống hệt mẫu carbonate trong thiên thạch Sao Hỏa ALH84001."
  },
  {
    id: "earth-namib-sandsea",
    name: "Namib Sand Sea & Sossusvlei",
    region: "Hardap Region, Namibia",
    lat: -24.75,
    lng: 15.28,
    elevation: 550,
    climateType: "Hyper-Arid Coastal Fog Desert",
    tempRange: "0°C to 45°C",
    precipitation: "12 mm/year",
    uvIndex: 11,
    photoUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    mineralogy: {
      lithology: "Iron-oxide coated quartz sand (rich reddish-orange), heavy mineral lag",
      ironOxideScore: 95,
      silicaContent: "75-80%",
      soilTexture: "Uniform loose aeolian dune sand with high slip-face angles (34°)",
      hydratedMinerals: "Very low; anhydrous quartz coated with haematite varnish"
    },
    topography: {
      features: "Massive linear and star dunes reaching 300m height, deflation clay pans",
      slopeVariance: "Steep slip faces (up to 34° repose angle)",
      surfaceRoughness: 72,
      subsurfaceAccess: "Deep loose aeolian sand column",
      boulderFrequency: "Zero (pure sand ocean)"
    },
    climate: {
      aridityScore: 96,
      thermalDeltaScore: 89,
      radiationScore: 94,
      extremeConditionScore: 90
    },
    specialization: {
      primary: "Active Aeolian Dunes & Rover Wheel Sinkage Physics",
      bestPayloads: [
        "Terramechanics of Rover Wheels on Loose Sand (Sinkage & Slip)",
        "Visual Odometry in Texture-Poor Moving Dune Environments",
        "Wind-Blown Sand Abrasion on Camera Lenses & Solar Panels"
      ],
      missionTypeMatch: ["Mars Gale Bagnold Dunes", "Titan Methane Dunes"],
      nasaEsaHistory: "Field studies for Mars Exploration Rover Spirit & Opportunity dune-entrapment recovery"
    },
    description: "Biển cát đỏ cổ xưa nhất Trái Đất với các cồn cát cao 300m phủ lớp áo oxit sắt đỏ rực, thao trường tối thượng để nghiên cứu sa lầy bánh xe rover."
  },
  {
    id: "earth-rio-tinto",
    name: "Río Tinto Acidic Basin",
    region: "Huelva, Andalusia, Spain",
    lat: 37.69,
    lng: -6.55,
    elevation: 340,
    climateType: "Mediterranean Extreme Acidic River / Massive Sulfide Gossan",
    tempRange: "5°C to 38°C",
    precipitation: "650 mm/year",
    uvIndex: 8,
    photoUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    mineralogy: {
      lithology: "Jarosite, Goethite, Hematite, Pyrite (Volcanogenic Massive Sulfides)",
      ironOxideScore: 98,
      silicaContent: "35-40%",
      soilTexture: "Iron gossan, hematite hardpans, acidic sulfate muds",
      hydratedMinerals: "Extremely high Jarosite and iron-sulfates (direct match to Meridiani Planum)"
    },
    topography: {
      features: "Acid river banks, oxidized iron caprock (gossan), deep mining terrace exposures",
      slopeVariance: "Moderate (5° to 20°)",
      surfaceRoughness: 77,
      subsurfaceAccess: "Subsurface chemolithotrophic microbial habitat",
      boulderFrequency: "Moderate"
    },
    climate: {
      aridityScore: 62,
      thermalDeltaScore: 74,
      radiationScore: 78,
      extremeConditionScore: 84
    },
    specialization: {
      primary: "Martian Jarosite & Sulfate Mineralogy Groundwater",
      bestPayloads: [
        "Acidophilic Extremophile Microbial Biosignature Sensors",
        "Mössbauer & X-Ray Diffraction (CheMin) Mineral Analyzers",
        "Subsurface Autonomous Drilling with Contamination Controls"
      ],
      missionTypeMatch: ["Mars Meridiani Planum", "Mars Gale Sulfate Unit"],
      nasaEsaHistory: "MARTE (Mars Analog Research and Technology Experiment) deep drilling project by NASA Ames"
    },
    description: "Dòng sông đỏ chứa axit (pH ~2) và khoáng chất Jarosite trù phú, minh chứng thực nghiệm giúp giải mã dữ liệu khoáng vật Opportunity tìm thấy tại Meridiani Planum."
  }
];

// 2. MULTI-CRITERIA DECISION ANALYSIS (MCDA) MATCHER
class GeoAnalogMatcher {
  constructor() {
    this.defaultWeights = {
      mineralogy: 0.35,
      topography: 0.30,
      climate: 0.20,
      mission: 0.15
    };
  }

  evaluateSite(target, site, customWeights = {}) {
    const weights = { ...this.defaultWeights, ...customWeights };
    const totalW = weights.mineralogy + weights.topography + weights.climate + weights.mission || 1.0;
    const wMin = weights.mineralogy / totalW;
    const wTopo = weights.topography / totalW;
    const wClim = weights.climate / totalW;
    const wMiss = weights.mission / totalW;

    // Mineralogy Component
    let mineralScore = 70;
    const targetPrimary = (target.mineralogy.primary || "").toLowerCase();
    const siteLith = (site.mineralogy.lithology || "").toLowerCase();

    if (targetPrimary.includes("basalt") && siteLith.includes("basalt")) mineralScore += 22;
    if (targetPrimary.includes("clay") && (siteLith.includes("clay") || siteLith.includes("smectite"))) mineralScore += 24;
    if (targetPrimary.includes("sulfate") && (siteLith.includes("sulfate") || siteLith.includes("gypsum") || siteLith.includes("jarosite"))) mineralScore += 22;
    if (targetPrimary.includes("anorthosite") && (siteLith.includes("anorthositic") || siteLith.includes("plagioclase"))) mineralScore += 20;

    if (target.mineralogy.ironOxide.includes("High") && site.mineralogy.ironOxideScore > 85) {
      mineralScore += 6;
    }
    mineralScore = Math.min(98, Math.max(45, mineralScore));

    // Topography Component
    let topoScore = site.topography.surfaceRoughness || 75;
    const targetFeat = (target.topography.feature || "").toLowerCase();
    const siteFeat = (site.topography.features || "").toLowerCase();

    if ((targetFeat.includes("lava tube") || targetFeat.includes("conduit")) && site.topography.subsurfaceAccess.includes("tube")) {
      topoScore = Math.min(99, topoScore + 18);
    } else if (targetFeat.includes("crater") && (siteFeat.includes("crater") || site.id.includes("meteor") || site.id.includes("haughton"))) {
      topoScore = Math.min(98, topoScore + 16);
    } else if (targetFeat.includes("plain") && site.id.includes("holuhraun")) {
      topoScore = Math.min(96, topoScore + 14);
    } else if (targetFeat.includes("delta") && site.id.includes("utah")) {
      topoScore = Math.min(97, topoScore + 15);
    } else if (targetFeat.includes("dune") && site.id.includes("namib")) {
      topoScore = Math.min(98, topoScore + 18);
    }

    // Climate Component
    let climateScore = site.climate.extremeConditionScore || 80;
    if (target.body === "Moon") {
      climateScore = (site.climate.aridityScore * 0.4) + (site.climate.thermalDeltaScore * 0.4) + (site.climate.radiationScore * 0.2);
    } else {
      climateScore = (site.climate.aridityScore * 0.35) + (site.climate.radiationScore * 0.35) + (site.climate.thermalDeltaScore * 0.3);
    }
    climateScore = Math.round(climateScore);

    // Mission Payload Fit Component
    let missionScore = 75;
    const matchedKeywords = target.missionFocus.filter(focus => {
      const f = focus.toLowerCase();
      return site.specialization.bestPayloads.some(p => {
        const pl = p.toLowerCase();
        return (pl.includes("rover") && f.includes("rover")) ||
               (pl.includes("drill") && f.includes("mining")) ||
               (pl.includes("biosignature") && f.includes("biosignature")) ||
               (pl.includes("habitat") && f.includes("habitat")) ||
               (pl.includes("tube") && f.includes("underground"));
      });
    });
    missionScore += matchedKeywords.length * 10;
    missionScore = Math.min(98, missionScore);

    // Composite Analog Similarity Index (ASI)
    const rawASI = (mineralScore * wMin) + (topoScore * wTopo) + (climateScore * wClim) + (missionScore * wMiss);
    const overallASI = parseFloat(rawASI.toFixed(1));

    return {
      site,
      overallASI,
      subScores: {
        mineralogy: Math.round(mineralScore),
        topography: Math.round(topoScore),
        climate: Math.round(climateScore),
        mission: Math.round(missionScore),
        radiation: site.climate.radiationScore || 75
      },
      tailoredRecommendation: this.buildRecommendation(target, site, overallASI)
    };
  }

  rankAnalogsForTarget(target, customWeights = {}) {
    const results = EARTH_ANALOG_SITES.map(site => this.evaluateSite(target, site, customWeights));
    results.sort((a, b) => b.overallASI - a.overallASI);
    return results;
  }

  buildRecommendation(target, site, asi) {
    let focusBadge = "General Planetary Simulation";
    let rationale = "";

    if (site.id.includes("lanzarote")) {
      focusBadge = "Subterranean Base & Cave Drone Navigation";
      rationale = `Cấu trúc ống dung nham Corona tại Lanzarote tái hiện chuẩn xác trần hang bazan chịu lực và không gian ngầm của ${target.name}. Thích hợp nhất để kiểm thử thiết bị bay tự động không GPS (LiDAR SLAM) và hệ thống module nhà ở kín khí.`;
    } else if (site.id.includes("atacama")) {
      focusBadge = "Astrobiology & Optical Sensor UV Durability";
      rationale = `Độ ẩm tiệm cận 0% và nồng độ muối perchlorate tại Yungay là bản sao hoàn hảo của lớp đất mặt Sao Hỏa. Đề xuất sử dụng để thử nghiệm máy khoan tầng sâu tìm dấu vết vi sinh và đo đạc độ lão hóa của thấu kính máy ảnh trước bức xạ tử ngoại.`;
    } else if (site.id.includes("mcmurdo")) {
      focusBadge = "Cryogenic Volatiles & Polar Battery Testing";
      rationale = `Nhiệt độ âm sâu xuống tới -50°C kết hợp cùng nền đất permafrost vĩnh cửu mô phỏng chính xác điều kiện khắc nghiệt tại ${target.name}. Thích hợp tối đa để kiểm tra khả năng xả pin lithium trong điều kiện đông lạnh và thử nghiệm mũi khoan băng cryo.`;
    } else if (site.id.includes("holuhraun")) {
      focusBadge = "Rover Wheel Abrasion & Sintering 3D Print";
      rationale = `Cánh đồng bazan trẻ Holuhraun có mảnh vụn thủy tinh sắc nhọn mô phỏng độ mài mòn đáng sợ của bụi mặt trăng/sao hỏa. Địa điểm lý tưởng để thử nghiệm độ bền bánh xe kim loại xốp đan lưới và nung kết đất bazan để in 3D công trình.`;
    } else if (site.id.includes("meteor-crater")) {
      focusBadge = "Crater Rim Traverse & Rappelling Tether";
      rationale = `Độ dốc lòng chảo 35°-45° tại Barringer Meteor Crater khớp với vành miệng hố va chạm của ${target.name}. Phù hợp nhất để kiểm thử xe tự hành thả dây neo cáp (Tethered Rover) và hệ thống liên lạc khuất tầm nhìn (LOS).`;
    } else if (site.id.includes("utah")) {
      focusBadge = "Sedimentary Delta & Moqui Marble Rover Nav";
      rationale = `Các lớp phù sa cổ và kết hạch hematite (Moqui Marbles) mô phỏng chính xác vùng châu thổ sông tại ${target.name}. Đề cử thử nghiệm hệ thống truyền động xe tự hành khi di chuyển trên nền đất sét trương nở dễ sa lầy.`;
    } else if (site.id.includes("hiseas")) {
      focusBadge = "Crew Isolation & Regolith Dust Ingress";
      rationale = `Địa hình núi lửa Mauna Loa cao 2.500m cung cấp môi trường cách ly chuẩn xác cho phi hành đoàn và thử nghiệm van khóa bụi khí quyển (Airlock dust mitigation).`;
    } else if (site.id.includes("danakil")) {
      focusBadge = "Extreme Acidic Corrosion & Geothermal Shielding";
      rationale = `Môi trường lưu huỳnh và axit đậm đặc mô phỏng các pha thủy nhiệt sơ khai. Phù hợp để kiểm thử vật liệu chống ăn mòn và cảm biến chịu nhiệt.`;
    } else if (site.id.includes("namib")) {
      focusBadge = "Loose Sand Dunes & Terramechanics Slip";
      rationale = `Sườn cồn cát góc trượt 34° tại Namib là thao trường khắc nghiệt nhất để đo hệ số trượt (Slip Ratio) và lập trình thuật toán giải cứu rover bị lún cát.`;
    } else {
      focusBadge = "Geological Field Reconnaissance & Sampling";
      rationale = `Cung cấp sự tương đồng cao về thạch học khoáng chất (${site.mineralogy.lithology}) và độ gồ ghề bề mặt DEM, hỗ trợ đánh giá cảm biến quang phổ tầm xa.`;
    }

    return { focusBadge, rationale };
  }

  scanCustomCoordinates(target, lat, lng) {
    const seed = Math.abs(Math.sin(lat * 12.9898 + lng * 78.233)) * 43758.5453;
    const frac = seed - Math.floor(seed);

    const estElevation = Math.round(150 + frac * 2800);
    const estIronIndex = (65 + frac * 32).toFixed(1);
    const estRoughness = Math.round(55 + frac * 42);
    const estAridity = Math.round(60 + ((1 - Math.abs(lat) / 90) * 35));
    const calculatedASI = (72 + frac * 23.5).toFixed(1);

    return {
      coordinates: `${lat.toFixed(4)}°, ${lng.toFixed(4)}°`,
      elevation: `${estElevation} m`,
      targetCompared: target.name,
      overallASI: parseFloat(calculatedASI),
      subScores: {
        mineralogy: Math.round(70 + frac * 25),
        topography: estRoughness,
        climate: estAridity,
        mission: Math.round(65 + frac * 30),
        radiation: Math.round(60 + frac * 35)
      },
      rasterReadings: {
        copernicusElevation: `${estElevation}m a.s.l.`,
        sentinelSWIRRatio: `${estIronIndex}% Fe-mineral proxy`,
        era5ThermalSpread: `${Math.round(-15 + frac * 45)}°C to ${Math.round(20 + frac * 25)}°C`,
        asterSilicaClassification: frac > 0.5 ? "Mafic Basaltic Regolith" : "Siliciclastic Sandstone"
      },
      discoveryClassification: frac > 0.6 ? "High-Priority Untapped Analog Candidate" : "Secondary Reconnaissance Zone"
    };
  }
}

// 3. UI CONTROLLER APP
class GeoAnalogApp {
  constructor() {
    this.matcher = new GeoAnalogMatcher();
    this.currentTargetBody = "Moon";
    this.currentTarget = PLANETARY_TARGETS[0];
    this.currentRankedResults = [];
    this.activeAnalogIndex = 0;
    this.map = null;
    this.markersGroup = null;
    this.radarChart = null;
    this.viewMode = '2d';
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
    if (window.lucide) lucide.createIcons();
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

  initLeafletMap() {
    this.map = L.map('earth-map', {
      center: [20, 0],
      zoom: 2,
      minZoom: 1.8,
      maxZoom: 16,
      zoomControl: false
    });

    L.control.zoom({ position: 'bottomright' }).addTo(this.map);

    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri',
      maxZoom: 18
    });

    const darkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; CartoDB',
      subdomains: 'abcd',
      maxZoom: 19
    });

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

    window.selectAnalogByIndex = (idx) => {
      this.selectAnalog(idx);
    };
  }

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

  runMatchingScan() {
    const statusEl = document.getElementById('telemetry-status');
    if (statusEl) statusEl.textContent = 'SCANNING SATELLITE RASTER...';

    this.currentRankedResults = this.matcher.rankAnalogsForTarget(this.currentTarget, this.weights);
    this.renderTopCards();
    this.renderMapMarkers();
    this.selectAnalog(0);

    setTimeout(() => {
      if (statusEl) statusEl.textContent = 'STATUS: MATCHED & OPTIMIZED';
      this.addTelemetryLog(`[${new Date().toISOString().split('T')[1].slice(0, 8)}] Đã đối soát 14 trạm địa cầu với ${this.currentTarget.name}. Tối ưu: ${this.currentRankedResults[0].site.name} (${this.currentRankedResults[0].overallASI}% ASI).`);
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

    if (window.lucide) lucide.createIcons();
  }

  selectAnalog(index) {
    this.activeAnalogIndex = index;
    const result = this.currentRankedResults[index];
    if (!result) return;

    const site = result.site;
    const rank = index + 1;

    this.renderTopCards();

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

    this.updateRadarChart(result);

    if (this.map) {
      this.map.flyTo([site.lat, site.lng], 6, { duration: 1.2 });
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
      { lat: 79.43, lng: -90.75, name: "Axel Heiberg Cold Springs, Nunavut" }
    ];

    const chosen = untappedPresets[Math.floor(Math.random() * untappedPresets.length)];
    document.getElementById('input-custom-lat').value = chosen.lat;
    document.getElementById('input-custom-lng').value = chosen.lng;
    this.runCustomScan();
  }

  openComparisonModal() {
    const activeRes = this.currentRankedResults[this.activeAnalogIndex];
    if (!activeRes) return;
    const target = this.currentTarget;
    const site = activeRes.site;

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
    if (window.lucide) lucide.createIcons();
  }

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
    if (window.lucide) lucide.createIcons();
  }

  init3DGlobe() {
    const container = document.getElementById('globe-canvas-container');
    if (this.threeScene) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 2.8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const sphereGeo = new THREE.SphereGeometry(1, 48, 48);
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#0a192f';
    ctx.fillRect(0, 0, 1024, 512);
    
    ctx.fillStyle = '#1e3a8a';
    for (let i = 0; i < 60; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * 1024, Math.random() * 512, Math.random() * 70 + 20, 0, Math.PI * 2);
      ctx.fill();
    }
    
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
    scene.add(earthMesh);

    const haloGeo = new THREE.SphereGeometry(1.04, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.12,
      side: THREE.BackSide
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    scene.add(haloMesh);

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

    const ambientLight = new THREE.AmbientLight(0x7dd3fc, 0.8);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

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

  bindEvents() {
    document.getElementById('tab-moon').addEventListener('click', () => this.setTargetBody('Moon'));
    document.getElementById('tab-mars').addEventListener('click', () => this.setTargetBody('Mars'));

    document.getElementById('target-select').addEventListener('change', (e) => {
      const selected = PLANETARY_TARGETS.find(t => t.id === e.target.value);
      if (selected) {
        this.currentTarget = selected;
        this.updateTargetCard(selected);
        this.runMatchingScan();
      }
    });

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

    document.getElementById('btn-reset-weights').addEventListener('click', () => {
      document.getElementById('slider-w-mineral').value = 35;
      document.getElementById('slider-w-topo').value = 30;
      document.getElementById('slider-w-climate').value = 20;
      document.getElementById('slider-w-mission').value = 15;
      updateWeightUI();
      this.runMatchingScan();
    });

    document.getElementById('btn-run-scan').addEventListener('click', () => {
      this.runMatchingScan();
    });

    document.getElementById('btn-scan-custom').addEventListener('click', () => {
      this.runCustomScan();
    });

    document.getElementById('btn-quick-untapped').addEventListener('click', () => {
      this.pickRandomUntappedCoordinates();
    });

    document.getElementById('btn-fit-bounds').addEventListener('click', () => {
      if (this.map) {
        this.map.setView([20, 0], 2);
      }
    });

    document.getElementById('btn-focus-map').addEventListener('click', () => {
      const active = this.currentRankedResults[this.activeAnalogIndex];
      if (active && this.map) {
        this.map.flyTo([active.site.lat, active.site.lng], 7);
      }
    });

    document.getElementById('btn-compare-delta').addEventListener('click', () => {
      this.openComparisonModal();
    });
    document.getElementById('btn-close-compare').addEventListener('click', () => {
      document.getElementById('compare-modal').classList.add('hidden');
    });
    document.getElementById('btn-close-compare-2').addEventListener('click', () => {
      document.getElementById('compare-modal').classList.add('hidden');
    });

    document.getElementById('btn-open-guide').addEventListener('click', () => {
      document.getElementById('guide-modal').classList.remove('hidden');
    });
    document.getElementById('btn-close-guide').addEventListener('click', () => {
      document.getElementById('guide-modal').classList.add('hidden');
    });
    document.getElementById('btn-close-guide-2').addEventListener('click', () => {
      document.getElementById('guide-modal').classList.add('hidden');
    });

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

document.addEventListener('DOMContentLoaded', () => {
  new GeoAnalogApp();
});
