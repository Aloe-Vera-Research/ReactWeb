import {
  BarChart3,
  Bell,
  BookOpen,
  CloudRain,
  CloudSun,
  Cpu,
  Droplets,
  FileArchive,
  FileCheck2,
  FileText,
  FlaskConical,
  Gauge,
  History,
  Lock,
  Microscope,
  Radio,
  ScanSearch,
  ScrollText,
  Server,
  Smartphone,
  Sprout,
  Sun,
  Thermometer,
  TrendingUp,
  Waves,
  Zap,
} from "lucide-react";

import Eesara from "../assets/images/members/Eesara.jpg";
import Himash from "../assets/images/members/Himash.JPG";
import Amanda from "../assets/images/members/Amanda.jpeg";
import Shehani from "../assets/images/members/Shehani.jpg";
import Supervisor from "../assets/images/members/supervisor.jpeg";
import CoSupervisor from "../assets/images/members/cosupervisor.jpg";

import ProposalPresentation from "../assets/presentations/ProposalPresentation.pdf";
import ProgressPresentation1 from "../assets/presentations/ProgressPresentation1.pdf";
import ProgressPresentation2 from "../assets/presentations/ProgressPresentation2.pdf";

export const project = {
  name: "AloeGreen",
  id: "2025-26J-166",
  title: "Smart Agriculture Support System for Aloe Vera",
  paperTitle: "AloeGreen: Smart IoT-Based System for Aloe Vera",
  institute: "Sri Lanka Institute of Information Technology",
  instituteShort: "SLIIT",
  faculty: "Faculty of Computing",
  department: "Department of Information Technology",
  group: "CoEAI — Centre of Excellence for AI",
  module: "IT4010 Research Project",
  email: "aloegreen166@gmail.com",
  phone: "+94 77 335 5331",
  phoneHref: "+94773355331",
  leaderSite: "https://www.eesara.com",
  leaderSiteLabel: "www.eesara.com",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/domain", label: "Research" },
  { to: "/milestones", label: "Milestones" },
  { to: "/documents", label: "Documents" },
  { to: "/presentations", label: "Presentations" },
  { to: "/about", label: "Team" },
  { to: "/gallery", label: "Gallery" },
];

export const heroStats = [
  {
    value: 1048330,
    label: "Hourly observations",
    note: "in the cleaned yield dataset",
  },
  {
    value: 0.892,
    decimals: 3,
    label: "R² yield prediction",
    note: "XGBoost, best of four models",
  },
  {
    value: 0.998,
    decimals: 3,
    label: "R² temperature forecast",
    note: "recursive multi-step XGBoost",
  },
  {
    value: 10,
    label: "Field parameters",
    note: "sensed live by one ESP32 node",
  },
];

export const techMarquee = [
  "ESP32",
  "MQTT",
  "HiveMQ Cloud",
  "TLS",
  "FastAPI",
  "XGBoost",
  "Random Forest",
  "CNN",
  "TensorFlow",
  "PyTorch",
  "LSTM",
  "React Native",
  "OpenWeatherMap",
];

export const problems = [
  {
    title: "Late disease detection",
    body: "Bacterial soft rot, mealybug infestations and leaf spots are common, yet early detection is hard for growers without technical expertise.",
  },
  {
    title: "Improper fertilizer use",
    body: "Without precise nutrient analysis, growers fall back on traditional practice — and over- or under-fertilize.",
  },
  {
    title: "Uncertain crop yield",
    body: "Yield is estimated by manual observation, so production planning and resource allocation rest on guesswork.",
  },
  {
    title: "Blind to market trends",
    body: "Small-scale farmers often cannot see where prices are heading and sell their harvest at the wrong time.",
  },
];

export const modules = [
  {
    key: "yield",
    number: "01",
    icon: TrendingUp,
    title: "Yield prediction",
    owner: "Eesara Megasooriya",
    tagline: "How much will this field produce?",
    body: "Regression models estimate Aloe vera yield from irrigation, environmental, plant and temporal variables. Two engineered agronomic features — a water stress index and a heat stress index — capture how the plant responds to its surroundings.",
    points: [
      "Random Forest, XGBoost, RF + XGB ensemble and LSTM compared",
      "Chronological train–test split to preserve temporal consistency",
      "Training-set median imputation to prevent data leakage",
    ],
    stat: { value: "0.892", label: "R² · XGBoost" },
    tags: ["XGBoost", "Feature engineering", "Tabular"],
  },
  {
    key: "forecast",
    number: "02",
    icon: CloudSun,
    title: "Environmental forecasting",
    owner: "Eesara Megasooriya",
    tagline: "What will the field feel like next?",
    body: "Separate XGBoost models forecast temperature, humidity and rainfall from lag and rolling-window features. Each prediction is fed back in recursively to look several steps ahead — and the forecasts flow straight into the yield model.",
    points: [
      "Lag features plus rolling means and standard deviations",
      "Recursive multi-step forecasting strategy",
      "Feeds the forecast-informed yield pipeline",
    ],
    stat: { value: "0.998", label: "R² · temperature" },
    tags: ["Time series", "XGBoost", "Recursive"],
  },
  {
    key: "disease",
    number: "03",
    icon: ScanSearch,
    title: "Disease detection",
    owner: "Himash Rajapaksha",
    tagline: "Is this leaf healthy?",
    body: "A grower photographs a leaf in the mobile app. The image is resized, normalised and enhanced, then classified by a convolutional neural network. The result is linked to a treatment recommendation — and can warn nearby farmers.",
    points: [
      "CNN trained on labelled healthy and diseased leaf images",
      "Treatment guidance attached to every diagnosis",
      "Disease alerts disseminated to nearby farmers",
    ],
    stat: { value: "77%", label: "Accuracy · CNN" },
    tags: ["CNN", "Computer vision", "Alerts"],
  },
  {
    key: "fertilizer",
    number: "04",
    icon: FlaskConical,
    title: "Fertilizer recommendation",
    owner: "Amanda Bandara",
    tagline: "What does this soil need?",
    body: "Nitrogen, phosphorus, potassium, pH, electrical conductivity, soil moisture and soil type become a structured soil profile. A hybrid of rule-based fertilizer calculation and data-driven insight turns it into a fertilizer type and quantity.",
    points: [
      "Hybrid rule-based + machine learning approach",
      "Recommendations refined by environmental context",
      "History tracking for traceable nutrient management",
    ],
    stat: { value: "0.060", label: "MAE · Random Forest" },
    tags: ["Hybrid ML", "Soil profile", "History"],
  },
  {
    key: "price",
    number: "05",
    icon: BarChart3,
    title: "Price forecasting",
    owner: "Shehani Yasodara",
    tagline: "When is the right time to sell?",
    body: "Historical market records are validated, ordered in time and enriched with trend features. Random Forest predicted best; Linear Regression is kept inside the app because its outputs are transparent and easy to explain to growers.",
    points: [
      "Linear Regression, Random Forest, Decision Tree and LSTM compared",
      "Trend-oriented selling-time guidance",
      "Flood and drought risk warnings from live weather",
    ],
    stat: { value: "0.91", label: "R² · Random Forest" },
    tags: ["Market intelligence", "Random Forest", "Interpretable"],
  },
];

export const layers = [
  {
    key: "sensing",
    step: "01",
    icon: Radio,
    title: "Sensing",
    summary: "ESP32 field node",
    items: [
      "Air temperature & humidity",
      "Light intensity & rainfall",
      "Soil moisture, pH & EC",
      "Nitrogen, phosphorus, potassium",
    ],
  },
  {
    key: "communication",
    step: "02",
    icon: Lock,
    title: "Communication",
    summary: "MQTT over TLS",
    items: [
      "HiveMQ Cloud broker",
      "Encrypted, lightweight transport",
      "Store-and-forward buffering",
    ],
  },
  {
    key: "processing",
    step: "03",
    icon: Server,
    title: "Processing",
    summary: "FastAPI backend",
    items: [
      "Data ingestion & preprocessing",
      "Model execution",
      "Module orchestration",
    ],
  },
  {
    key: "application",
    step: "04",
    icon: Smartphone,
    title: "Application",
    summary: "React Native app",
    items: [
      "Live farm conditions",
      "Leaf image upload",
      "Predictions & recommendations",
      "Alerts to nearby farmers",
    ],
  },
];

export const sensors = [
  { key: "temp", label: "Air temperature", unit: "°C", base: 29.4, drift: 0.25, decimals: 1, icon: Thermometer },
  { key: "hum", label: "Humidity", unit: "%", base: 71, drift: 0.8, decimals: 0, icon: Droplets },
  { key: "light", label: "Light intensity", unit: "lux", base: 41200, drift: 600, decimals: 0, icon: Sun },
  { key: "rain", label: "Rainfall", unit: "mm", base: 0.4, drift: 0.12, decimals: 1, icon: CloudRain, min: 0 },
  { key: "moist", label: "Soil moisture", unit: "%", base: 23, drift: 0.5, decimals: 0, icon: Waves },
  { key: "ph", label: "Soil pH", unit: "", base: 7.1, drift: 0.04, decimals: 2, icon: Gauge },
  { key: "ec", label: "Conductivity", unit: "mS/cm", base: 1.3, drift: 0.03, decimals: 2, icon: Zap },
  { key: "n", label: "Nitrogen", unit: "mg/kg", base: 42, drift: 0.7, decimals: 0, icon: Sprout },
  { key: "p", label: "Phosphorus", unit: "mg/kg", base: 18, drift: 0.4, decimals: 0, icon: Sprout },
  { key: "k", label: "Potassium", unit: "mg/kg", base: 96, drift: 1.1, decimals: 0, icon: Sprout },
];

export const contributions = [
  {
    icon: CloudSun,
    title: "Forecast-informed yield prediction",
    body: "Short-term environmental forecasts are incorporated into the yield estimation pipeline, so the system estimates yield under the conditions that are coming — not only the ones already recorded.",
  },
  {
    icon: Thermometer,
    title: "Aloe-specific stress indices",
    body: "A water stress index from soil moisture and temperature, and a heat stress index from temperature and humidity, describe plant–environment interactions that generic crop models miss.",
  },
  {
    icon: Cpu,
    title: "Continuous farm data acquisition",
    body: "The IoT node keeps accumulating field data, laying the foundation for model refinement and a farm-specific adaptive prediction system.",
  },
  {
    icon: Bell,
    title: "Community disease alerts",
    body: "A detected disease can notify nearby farmers inside the system, enabling preventive action before an outbreak spreads across cultivation areas.",
  },
  {
    icon: History,
    title: "Traceable fertilizer history",
    body: "Every recommendation and application is kept on record, so growers can review nutrient management patterns over time.",
  },
];

/* Results reported in the research paper, Tables II–VI. */
export const results = [
  {
    key: "yield",
    label: "Yield prediction",
    source: "Table II",
    summary:
      "XGBoost led narrowly. Tree-based ensembles captured the non-linear relationships between environmental, soil and temporal features; LSTM did not, indicating that long-term sequential dependencies are less dominant in this dataset.",
    best: "XGBoost",
    metrics: [
      { key: "r2", label: "R²", higherIsBetter: true, max: 1, decimals: 3 },
      { key: "rmse", label: "RMSE", higherIsBetter: false, decimals: 2 },
      { key: "mae", label: "MAE", higherIsBetter: false, decimals: 2 },
    ],
    rows: [
      { name: "Random Forest", r2: 0.889, rmse: 10.15, mae: 8.1 },
      { name: "XGBoost", r2: 0.892, rmse: 10.02, mae: 7.99 },
      { name: "Ensemble (RF + XGB)", r2: 0.891, rmse: 10.06, mae: 8.02 },
      { name: "LSTM", r2: 0.009, rmse: 30.37, mae: 28.32 },
    ],
  },
  {
    key: "forecast",
    label: "Environmental forecasting",
    source: "Table III",
    summary:
      "Temperature and humidity are forecast with very high accuracy. Rainfall is inherently stochastic and much harder to predict from limited local time-series data alone — a limitation the paper states openly.",
    best: "Temperature",
    metrics: [
      { key: "r2", label: "R²", higherIsBetter: true, max: 1, decimals: 3 },
    ],
    rows: [
      { name: "Temperature", r2: 0.998 },
      { name: "Humidity", r2: 0.995 },
      { name: "Rainfall", r2: 0.34 },
    ],
  },
  {
    key: "disease",
    label: "Disease detection",
    source: "Table IV",
    summary:
      "Two independent CNN implementations agree to within a point, which points to robust learned features. Accuracy is moderate because field images vary in lighting, background, leaf orientation and quality.",
    best: "CNN (TensorFlow)",
    metrics: [
      { key: "accuracy", label: "Accuracy", higherIsBetter: true, max: 1, decimals: 2 },
      { key: "precision", label: "Precision", higherIsBetter: true, max: 1, decimals: 2 },
      { key: "recall", label: "Recall", higherIsBetter: true, max: 1, decimals: 2 },
      { key: "f1", label: "F1", higherIsBetter: true, max: 1, decimals: 2 },
    ],
    rows: [
      { name: "CNN (TensorFlow)", accuracy: 0.77, precision: 0.78, recall: 0.77, f1: 0.77 },
      { name: "CNN (PyTorch)", accuracy: 0.76, precision: 0.77, recall: 0.76, f1: 0.76 },
    ],
  },
  {
    key: "price",
    label: "Price forecasting",
    source: "Table V",
    summary:
      "Random Forest achieved the highest R² and the lowest RMSE. Price patterns here are better captured through feature-based learning than through sequential modelling.",
    best: "Random Forest",
    metrics: [
      { key: "r2", label: "R²", higherIsBetter: true, max: 1, decimals: 2 },
      { key: "rmse", label: "RMSE", higherIsBetter: false, decimals: 2 },
    ],
    rows: [
      { name: "Linear Regression", r2: 0.82, rmse: 145.32 },
      { name: "Random Forest", r2: 0.91, rmse: 120.56 },
      { name: "LSTM", r2: 0.79, rmse: 152.47 },
      { name: "Decision Tree", r2: 0.85, rmse: 138.21 },
    ],
  },
  {
    key: "fertilizer",
    label: "Fertilizer recommendation",
    source: "Table VI",
    summary:
      "Random Forest produced the lowest error on both metrics. Linear Regression stayed competitive, suggesting some nutrient relationships remain close to linear.",
    best: "Random Forest",
    metrics: [
      { key: "mae", label: "MAE", higherIsBetter: false, decimals: 4 },
      { key: "rmse", label: "RMSE", higherIsBetter: false, decimals: 4 },
    ],
    rows: [
      { name: "Linear Regression", mae: 0.061728, rmse: 0.094674 },
      { name: "Random Forest", mae: 0.060324, rmse: 0.092321 },
      { name: "LSTM", mae: 0.096262, rmse: 0.118461 },
    ],
  },
];

export const literature = [
  {
    theme: "Yield prediction",
    found: "Ensemble models such as Random Forest and XGBoost outperform traditional regression by capturing non-linear relationships in high-dimensional data.",
    missing: "Most studies rely on static historical datasets and never bring real-time field data or short-term forecasts into the prediction pipeline.",
  },
  {
    theme: "Price forecasting",
    found: "Linear Regression, Support Vector Machines and deep learning models predict commodity prices from historical market data, including in the Sri Lankan context.",
    missing: "These systems are built as standalone modules, disconnected from field-level sensing and crop-specific decision support.",
  },
  {
    theme: "IoT monitoring",
    found: "Sensor networks collect temperature, humidity, soil moisture and light intensity in real time; weather APIs and climate datasets add predictive context.",
    missing: "The focus stays on monitoring and collection, with limited predictive analytics or continuous model refinement from real farm data.",
  },
  {
    theme: "Fertilizer management",
    found: "Machine-learning recommendation systems optimise nutrient use from soil properties and crop requirements, improving efficiency.",
    missing: "They rarely keep a history that lets farmers evaluate past recommendations and outcomes over time.",
  },
  {
    theme: "Disease detection",
    found: "Convolutional neural networks identify plant diseases by learning discriminative visual features from labelled images.",
    missing: "Most stop at classification — no real-time alert dissemination, no integration with wider farm management.",
  },
];

export const objectives = {
  main: "Develop an integrated, crop-specific AI–IoT decision-support platform that helps Aloe vera growers in Sri Lanka monitor their fields, anticipate conditions, protect plant health, manage nutrients and time their sales.",
  question:
    "How can a smart agricultural support system integrating disease detection, weather-based yield prediction, fertilizer management, and market price forecasting enhance Aloe Vera cultivation and improve farmer decision-making in Sri Lanka?",
  subs: [
    {
      icon: TrendingUp,
      title: "Predict yield under future conditions",
      body: "Estimate Aloe vera yield from live and historical data, and feed short-term environmental forecasts into the estimate.",
    },
    {
      icon: ScanSearch,
      title: "Detect leaf disease from a photo",
      body: "Classify leaf images with a CNN, attach treatment guidance and warn neighbouring farmers early.",
    },
    {
      icon: FlaskConical,
      title: "Recommend the right fertilizer",
      body: "Turn sensed soil nutrients into a fertilizer type, dosage and timing, with a traceable history.",
    },
    {
      icon: BarChart3,
      title: "Forecast market prices",
      body: "Project price trends from historical market records and translate them into selling-time guidance.",
    },
  ],
};

export const datasets = [
  { module: "Yield prediction", type: "Structured tabular", inputs: "Soil, irrigation, climate, plant and temporal features", grain: "Hourly" },
  { module: "Environmental forecasting", type: "Time-series tabular", inputs: "Temperature, humidity, rainfall, lag and rolling features", grain: "Hourly" },
  { module: "Disease detection", type: "Image data", inputs: "Aloe vera leaf images", grain: "Per image" },
  { module: "Fertilizer recommendation", type: "Structured tabular", inputs: "N, P, K, pH, EC, soil moisture, soil type", grain: "Per sample" },
  { module: "Price forecasting", type: "Time-series tabular", inputs: "Historical price and trend features", grain: "Time-ordered" },
];

export const methodology = [
  {
    title: "Sense the field",
    body: "An ESP32-based device carries sensors for air temperature, humidity, light intensity, rainfall, soil moisture, pH, electrical conductivity and nitrogen, phosphorus and potassium. Readings are collected continuously rather than sampled by hand.",
  },
  {
    title: "Move the data securely",
    body: "Readings travel over the MQTT protocol through HiveMQ Cloud with TLS encryption — secure, lightweight communication suited to real-time agricultural monitoring.",
  },
  {
    title: "Clean and engineer features",
    body: "Records with missing timestamps or targets and duplicates are removed, leaving 1,048,330 hourly observations for yield. Time features, lag and rolling statistics, and the water and heat stress indices are derived. Splits are chronological and imputation uses training-set medians.",
  },
  {
    title: "Train and compare models",
    body: "Each module evaluates several candidates — tree ensembles, linear models, LSTM and CNNs — on the metrics that fit its task: MAE, RMSE and R² for regression; accuracy, precision, recall and F1 for classification.",
  },
  {
    title: "Serve and orchestrate",
    body: "A FastAPI backend ingests data, runs the models and orchestrates the modules, chaining environmental forecasts into the yield prediction pipeline.",
  },
  {
    title: "Deliver to the grower",
    body: "A React Native mobile app shows live farm conditions, accepts leaf photos, and presents predictions, recommendations, disease alerts and fertilizer history.",
  },
];

export const technologies = [
  {
    group: "Hardware & IoT",
    items: ["ESP32 microcontroller", "Temperature & humidity sensing", "Light & rainfall sensing", "Soil moisture, pH & EC probes", "NPK nutrient sensing"],
  },
  {
    group: "Connectivity",
    items: ["MQTT protocol", "HiveMQ Cloud", "TLS encryption", "OpenWeatherMap API"],
  },
  {
    group: "Machine learning",
    items: ["XGBoost", "Random Forest", "Decision Tree", "Linear Regression", "LSTM", "CNN (TensorFlow, PyTorch)"],
  },
  {
    group: "Platform",
    items: ["FastAPI backend", "React Native mobile app", "Python data pipelines"],
  },
];

export const nonFunctional = [
  "Secure API communication and data storage",
  "Real-time sensor data processing within seconds",
  "Store-and-forward buffering during network failures",
  "A simple mobile dashboard built for farmers",
];

export const futureWork = [
  "Expand datasets across more regions, conditions and cultivation practices",
  "Improve rainfall forecasting with extra meteorological variables and external weather services",
  "Train on larger, more varied field images and explore lightweight on-device models",
  "Add edge computing so inference can run on the IoT device with poor connectivity",
  "Adaptive fertilizer recommendations that learn from historical outcomes",
  "Irrigation scheduling, pest monitoring and crop health trend analysis",
];

export const plans = [
  {
    name: "Free plan",
    price: "Free",
    note: "For individual growers getting started",
  },
  {
    name: "Premium plan",
    price: "Rs. 6,000",
    per: "per month",
    note: "For Aloe vera farmers and entrepreneurs",
    featured: true,
  },
];

export const members = [
  {
    name: "Eesara Megasooriya",
    formal: "Megasooriya G.M.M.A.E.",
    id: "IT22337962",
    role: "Group leader",
    component: "Yield prediction & environmental forecasting",
    bio: "Works on the predictive core: feature engineering, model comparison and the forecast-informed yield pipeline.",
    email: "it22337962@my.sliit.lk",
    site: "https://www.eesara.com",
    siteLabel: "www.eesara.com",
    image: Eesara,
    icon: TrendingUp,
    leader: true,
  },
  {
    name: "Himash Rajapaksha",
    formal: "Rajapaksha H.B.",
    id: "IT22909664",
    role: "Member",
    component: "Disease detection & treatment recommendation",
    bio: "Builds the leaf-image CNN, the treatment guidance attached to each diagnosis, and the alerts sent to nearby farmers.",
    email: "it22909664@my.sliit.lk",
    image: Himash,
    icon: ScanSearch,
  },
  {
    name: "Amanda Bandara",
    formal: "Bandara H.M.A.I.",
    id: "IT22338020",
    role: "Member",
    component: "Fertilizer recommendation & nutrient management",
    bio: "Designs the hybrid rule-based and data-driven fertilizer logic and the history tracking behind traceable nutrient plans.",
    email: "it22338020@my.sliit.lk",
    image: Amanda,
    icon: FlaskConical,
  },
  {
    name: "Shehani Yasodara",
    formal: "Yasodara S.A.D.S.",
    id: "IT22360946",
    role: "Member",
    component: "Price forecasting & market intelligence",
    bio: "Models market price trends and turns them into selling-time guidance, profit analysis and weather-risk warnings.",
    email: "it22360946@my.sliit.lk",
    image: Shehani,
    icon: BarChart3,
  },
];

export const supervisors = [
  {
    label: "Supervisor",
    name: "Ms. Jenny Krishara",
    position: "Senior Lecturer",
    email: "jenny.k@sliit.lk",
    bio: "Provides academic direction, research guidance, technical review and continuous evaluation throughout the development of AloeGreen.",
    image: Supervisor,
  },
  {
    label: "Co-supervisor",
    name: "Dr. Dinuka Wijendra",
    position: "Assistant Professor",
    email: "dinuka.w@sliit.lk",
    bio: "Supports research refinement, technical decision-making, academic quality and the overall alignment of the proposed solution.",
    image: CoSupervisor,
  },
];

export const milestones = [
  {
    number: "01",
    title: "Project proposal",
    date: "10 September 2025",
    body: "The research problem, scope and proposed solution were defined and defended: an integrated smart system for Aloe vera, where earlier work had treated disease, yield and market analysis separately.",
    highlights: [
      "Research question and gap established",
      "Four individual components scoped",
      "System diagram and commercialization plan",
    ],
    deck: ProposalPresentation,
  },
  {
    number: "02",
    title: "Progress presentation 1",
    date: "5 January 2026",
    body: "Each member presented a working prototype of their component, the user requirements it addresses, and feedback gathered from growers during the field visit.",
    highlights: [
      "Prototypes for all four components",
      "Field visit and farmer feedback",
      "Real-time IoT data collection demonstrated",
    ],
    deck: ProgressPresentation1,
  },
  {
    number: "03",
    title: "Progress presentation 2",
    date: "12 March 2026",
    body: "The integrated system was reviewed: architecture, non-functional qualities such as secure communication and store-and-forward buffering, and the updated commercialization model.",
    highlights: [
      "Integrated system architecture",
      "Non-functional requirements addressed",
      "Model evaluation and results",
    ],
    deck: ProgressPresentation2,
  },
  {
    number: "04",
    title: "Final assessment",
    date: "4 May 2026",
    body: "Final academic evaluation of the mobile application, IoT implementation, predictive modules, documentation, website and overall research contribution.",
    highlights: [
      "Complete system evaluation",
      "Final research documentation",
      "Integrated platform presentation",
    ],
  },
  {
    number: "05",
    title: "Viva & demonstration",
    date: "4 May 2026",
    body: "The closing viva and live demonstration covering the research problem, literature foundation, methodology, implementation, results and practical significance.",
    highlights: [
      "Research contribution explained",
      "Live platform demonstration",
      "Academic question and answer session",
    ],
  },
];

const proposalDir = "/documents/Proposal%20Doc";

export const documents = [
  {
    name: "Topic Assessment Form",
    category: "Project charter",
    note: "The approved topic assessment for project 2025-26J-166: research problem, nature of the solution, objectives, novelty and each member's component.",
    type: "PDF",
    icon: ScrollText,
    href: "/documents/TAF_25-26J-166.pdf",
  },
  {
    name: "Research paper",
    category: "Publication",
    note: "“AloeGreen: Smart IoT-Based System for Aloe Vera” — the full paper with architecture, methodology, results for every module and future work.",
    type: "PDF",
    icon: Microscope,
    href: "/documents/Smart%20IOT-Based%20System%20For%20Aloe%20Vera%20-%20Research%20Paper.pdf",
    featured: true,
  },
  {
    name: "Proposal documents — full set",
    category: "Research proposal",
    note: "All four individual research proposals in one compressed package.",
    type: "ZIP",
    icon: FileArchive,
    href: "/documents/ProposalDoc.zip",
    download: "AloeGreen-Proposal-Documents.zip",
  },
  {
    name: "Checklist documents",
    category: "Assessment material",
    note: "Assessment checklists and evaluation forms from the project review process.",
    type: "Document set",
    icon: FileCheck2,
    href: null,
  },
  {
    name: "Final report",
    category: "Final submission",
    note: "The complete final research report: background, methodology, implementation, results and conclusion.",
    type: "PDF",
    icon: BookOpen,
    href: null,
  },
];

export const proposals = [
  { member: "Eesara Megasooriya", id: "IT22337962", topic: "Yield prediction & forecasting", href: `${proposalDir}/IT22337962_Research_Proposal.pdf` },
  { member: "Himash Rajapaksha", id: "IT22909664", topic: "Disease detection", href: `${proposalDir}/IT22909664_Research_Proposal.pdf` },
  { member: "Amanda Bandara", id: "IT22338020", topic: "Fertilizer recommendation", href: `${proposalDir}/IT22338020_Research_Proposal.pdf` },
  { member: "Shehani Yasodara", id: "IT22360946", topic: "Price forecasting", href: `${proposalDir}/IT22360946_Reserach_Propsal.pdf` },
];

export const presentations = [
  {
    number: "01",
    name: "Proposal presentation",
    date: "10 September 2025",
    slides: 29,
    body: "The problem, shortcomings of previous research, the research question, system diagram, and each member's proposed component with evaluation and ethics plans.",
    href: ProposalPresentation,
    fileName: "AloeGreen-Proposal-Presentation.pdf",
  },
  {
    number: "02",
    name: "Progress presentation 1",
    date: "5 January 2026",
    slides: 17,
    body: "Prototype walkthroughs for yield forecasting, disease detection, price forecasting and fertilizer planning, with user requirements and farmer feedback.",
    href: ProgressPresentation1,
    fileName: "AloeGreen-Progress-Presentation-1.pdf",
  },
  {
    number: "03",
    name: "Progress presentation 2",
    date: "12 March 2026",
    slides: 14,
    body: "Observed issues in the field, the integrated system diagram, non-functional focus, commercialization and the project Gantt chart.",
    href: ProgressPresentation2,
    fileName: "AloeGreen-Progress-Presentation-2.pdf",
  },
  {
    number: "04",
    name: "Final presentation",
    date: "4 May 2026",
    slides: null,
    body: "The complete overview of the research problem, methodology, platform implementation, model results and final contribution.",
    href: null,
    fileName: null,
  },
];

export const docIcon = FileText;
