/**
 * GeoAnalog Matchmaker - Planetary & Terrestrial Data Repository
 * Grounded in planetary science and Earth analog research (NASA, ESA, USGS, PSTAR)
 */

export const PLANETARY_TARGETS = [
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

export const EARTH_ANALOG_SITES = [
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
      features: "23 km diameter ancient impact crater, central uplift peak, inverted canyons (Astronaut Canyon)",
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
      lithology: "Shocked Coconino Sandstone, Kaibab Limestone, Nickel-Iron meteoritic fragments, Coesite, Stishovite",
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
      lithology: "Morrison & Dakota Formations: Smectite Clays, Gypsum veins, Sandstone, Iron concretions (Moqui Marbles)",
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
        "Salt Crust Bearing-Capacity Sensors (Preventing Rover Breakthrough)"
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
    precipitation: "150 mm/year (intermittent ephemeral flood)",
    uvIndex: 14,
    photoUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    mineralogy: {
      lithology: "Thick crystalline Halite (NaCl), Gypsum, Lithium chloride brine, Ulexite (borate)",
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
        "Lithium & Salt Chemical Extraction (ISRU analogs)"
      ],
      missionTypeMatch: ["Martian Evaporite Basins", "Europa Surface Cryo-Salts"],
      nasaEsaHistory: "Global benchmark for Earth-observing satellite sensor calibration (ICESat, Sentinel-1)"
    },
    description: "Cánh đồng muối lớn nhất thế giới ở độ cao 3.656m, địa hình phẳng tuyệt đối với bức xạ cực tím thuộc hàng cao nhất Trái Đất (chỉ số UV 14+)."
  },
  {
    id: "earth-svalbard",
    name: "Svalbard Archipelago (Bockfjorden & Ny-Ålesund)",
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
      lithology: "Quaternary Basalts, Mantle Xenoliths (Peridotite), Carbonate hydrothermal deposits",
      ironOxideScore: 88,
      silicaContent: "46-50%",
      soilTexture: "Polygonal sorted stone circles, permafrost gelifluction gravel",
      hydratedMinerals: "Globular carbonates (identical to ALH84001 Martian meteorite carbonates)"
    },
    topography: {
      features: "Glacier fronts, braided glacial streams, basaltic nunataks, patterned cryogenic ground",
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
        "Low-Temperature Mechanism Lubricant Endurance",
        "Sub-Ice Rover Deployment"
      ],
      missionTypeMatch: ["Mars Polar Chasmata", "Martian Carbonate Deposits", "Europa Ice Shell"],
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
      lithology: "Iron-oxide coated quartz sand (rich reddish-orange), heavy mineral lag (magnetite, ilmenite, garnet)",
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
        "Wind-Blown Sand Abrasion on Camera Lenses & Solar Panels",
        "Solar Panel Electrostatic Dust Repulsion Systems"
      ],
      missionTypeMatch: ["Mars Gale Bagnold Dunes", "Titan Methane Dunes (Equatorial)"],
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
      boulderFrequency: "Moderate (gossan cap blocks)"
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
        "Subsurface Autonomous Drilling with Contamination Controls",
        "Corrosion Monitoring on Drilling Bits"
      ],
      missionTypeMatch: ["Mars Meridiani Planum (Opportunity Site)", "Mars Gale Sulfate Unit"],
      nasaEsaHistory: "MARTE (Mars Analog Research and Technology Experiment) deep drilling project by NASA Ames"
    },
    description: "Dòng sông đỏ chứa axit (pH ~2) và khoáng chất Jarosite trù phú, minh chứng thực nghiệm giúp giải mã dữ liệu khoáng vật Opportunity tìm thấy tại Meridiani Planum."
  }
];

export const SATELLITE_DATASETS = [
  {
    name: "Copernicus DEM GLO-30",
    type: "Topography / Digital Elevation Model",
    resolution: "30 meters",
    coverage: "Global Earth",
    provider: "European Space Agency (ESA)",
    utilizedFor: "Slope variance, surface roughness, impact crater morphometry"
  },
  {
    name: "Sentinel-2 MSI (Multispectral)",
    type: "Optical / Mineral Indices",
    resolution: "10-20 meters (13 Spectral Bands)",
    coverage: "Global Earth (5-day revisit)",
    provider: "Copernicus / ESA",
    utilizedFor: "Iron oxide index (B11/B8), Ferric/Ferrous ratio, Clay/Silicate detection"
  },
  {
    name: "ASTER Global Emissivity Dataset (GED)",
    type: "Thermal Infrared Multispectral",
    resolution: "100 meters (5 TIR Bands)",
    coverage: "Global Earth",
    provider: "NASA / METI Japan",
    utilizedFor: "Silica quartz index, basaltic mafic rock discrimination"
  },
  {
    name: "ERA5 Global Climate Reanalysis",
    type: "Atmospheric & Thermal Extreme Dataset",
    resolution: "0.25° grid (~31 km hourly)",
    coverage: "Global Earth (1940-Present)",
    provider: "ECMWF / Copernicus",
    utilizedFor: "Extreme thermal swings, relative humidity minimums, diurnal delta"
  }
];
