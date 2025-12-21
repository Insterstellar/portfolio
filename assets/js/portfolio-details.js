/**
 * Portfolio Details Dynamic Content Loader
 * Loads project information based on URL parameter
 */

const portfolioProjects = {
  'hse': {
    title: 'HSE Incident Reporter',
    category: 'Mobile App & Full Stack',
    platform: 'iOS & Android (Flutter)',
    technology: 'Flutter/Dart, Java Spring Boot, MySQL',
    date: 'November 2025',
    github: '',
    playstore: '',
    images: [
      'assets/img/mobileapps/hse/hse1.png',
      'assets/img/mobileapps/hse/hse2.png',
      'assets/img/mobileapps/hse/hse3.png'
    ],
    description: [
      'HSE (Health, Safety & Environment) Incident Reporter is a comprehensive full-stack mobile application designed for workplace safety management. Built with Flutter for cross-platform compatibility and Java Spring Boot backend, it enables workers and safety officers to report and manage incidents efficiently.',
      'The app features offline-first architecture, allowing users to report incidents even without internet connectivity. Once online, reports sync automatically to the central database. With photo attachments, GPS location tracking, and incident management features, it provides a complete solution for workplace safety compliance.'
    ],
    features: [
      'Simple, focused incident reporting interface',
      'My Incidents - View and manage your submitted reports',
      'Advanced search functionality to find incidents quickly',
      'Offline-first architecture - Works without internet connection',
      'Manual sync control - Sync reports when online',
      'Photo attachments - Capture and attach incident evidence',
      'GPS location tracking - Automatic incident location capture',
      'Incident status tracking and updates',
      'Role-based access for workers and safety managers',
      'Push notifications for incident updates'
    ],
    technical: [
      'The mobile app is built with Flutter/Dart ensuring cross-platform compatibility for iOS and Android. Implements offline-first architecture using local SQLite database with automatic background synchronization when network is available.',
      'Java Spring Boot backend provides RESTful APIs for incident management, user authentication, and data synchronization. MySQL database stores incident reports, user data, and media files. The app uses device GPS for automatic location capture and integrates native camera APIs for photo attachments. State management handled with Provider pattern for efficient data flow.'
    ],
    useCases: [
      'Construction workers reporting safety incidents on-site',
      'Manufacturing facilities tracking workplace accidents',
      'Safety officers managing and investigating incidents',
      'Oil and gas industry HSE compliance reporting',
      'Warehouse and logistics incident documentation',
      'Corporate offices tracking near-miss incidents',
      'Regulatory compliance and audit trail maintenance'
    ]
  },
  'inkaura': {
    title: 'LopesStudio - Tattoo Artist Booking',
    category: 'Mobile App & Full Stack',
    platform: 'iOS & Android (Flutter)',
    technology: 'Flutter/Dart, Java Spring Boot, MySQL, Google Maps API',
    date: 'December 2025',
    github: '',
    playstore: '',
    images: [
      'assets/img/mobileapps/tattoo/tattoo1.png',
      'assets/img/mobileapps/tattoo/tattoo2.png',
      'assets/img/mobileapps/tattoo/tattoo3.png'
    ],
    description: [
      'LopesStudio is a comprehensive full-stack mobile application that connects tattoo enthusiasts with skilled artists in their area. Built with Flutter for seamless cross-platform experience and Java Spring Boot backend, it revolutionizes how people discover and book tattoo artists.',
      'The app features a powerful "Near Me" location-based search, allowing users to explore artist portfolios, read authentic reviews, and find the perfect match for their style. With real-time availability updates, secure payment processing, and personalized artist recommendations, LopesStudio makes booking tattoo appointments effortless and inspiring.'
    ],
    features: [
      'Near Me feature - Location-based artist discovery using GPS',
      'Artist portfolios with photo galleries and style specializations',
      'Authentic user reviews and ratings system',
      'Real-time availability calendar and appointment scheduling',
      'Waitlist system for fully booked artists',
      'Secure payment processing and transaction history',
      'Appointment reminders via push notifications',
      'Personalized artist suggestions based on preferences',
      'In-app messaging between clients and artists',
      'Saved favorites and booking history'
    ],
    technical: [
      'The mobile app is built with Flutter/Dart for iOS and Android platforms. Integrates Google Maps API for location-based artist search and distance calculations. State management handled with Provider/Riverpod for efficient data flow and real-time updates.',
      'Java Spring Boot backend provides RESTful APIs for user management, booking system, payment processing, and notification services. MySQL database stores user profiles, artist portfolios, appointments, and reviews. Implements JWT authentication for secure access and real-time WebSocket connections for instant messaging. Payment integration with Stripe/PayPal APIs for secure transactions.'
    ],
    useCases: [
      'Tattoo enthusiasts searching for local artists',
      'First-time clients finding trustworthy artists through reviews',
      'Travelers looking for artists in new cities',
      'Artists managing their schedules and client bookings',
      'Clients tracking appointment history and upcoming sessions',
      'Users discovering new artists based on style preferences',
      'Managing waitlists for popular tattoo artists'
    ]
  },
  'parking': {
    title: 'Parking Spot App',
    category: 'Mobile App & Full Stack',
    platform: 'iOS & Android (Flutter)',
    technology: 'Flutter, Angular, Java Spring Boot, PostgreSQL',
    date: 'March 2023',
    github: 'https://github.com/Insterstellar/ParkingSpotApp',
    playstore: '',
    images: [
      'assets/img/mobileapps/parkingspot/parking.png'
    ],
    description: [
      'A comprehensive full-stack parking management solution that revolutionizes how users find and manage parking spaces. Built with Flutter for cross-platform mobile experience, Angular for administrative dashboard, and Java Spring Boot for robust backend services.',
      'The application provides real-time parking availability, reservation system, payment integration, and analytics dashboard for parking lot managers. Users can search for nearby parking spots, reserve in advance, and receive navigation assistance.'
    ],
    features: [
      'Real-time parking spot availability tracking',
      'Advanced search and filtering by location, price, and amenities',
      'Secure payment integration with multiple payment methods',
      'Reservation system with instant confirmation',
      'Admin dashboard for parking lot management and analytics',
      'Push notifications for booking confirmations and reminders',
      'Navigation integration with Google Maps',
      'User reviews and ratings system'
    ],
    technical: [
      'The mobile app is built using Flutter/Dart, ensuring a consistent experience across iOS and Android platforms. State management is handled using Provider pattern for efficient data flow.',
      'The backend API is developed with Java Spring Boot, implementing RESTful services with JWT authentication. PostgreSQL database stores user information, parking data, and transaction records. The admin dashboard is built with Angular, providing real-time analytics and management tools for parking operators.'
    ],
    useCases: [
      'Urban commuters finding daily parking near their workplace',
      'Event attendees reserving parking spots in advance',
      'Parking lot owners optimizing their space utilization',
      'Cities managing public parking resources efficiently',
      'Shopping mall visitors locating available parking spots'
    ]
  },
  'wifiranger': {
    title: 'WiFi Distance Catcher',
    category: 'Mobile App',
    platform: 'Android & iOS (Flutter + Java)',
    technology: 'Java, Android SDK, Flutter/Dart',
    date: 'January 2023',
    github: 'https://github.com/Insterstellar/wifidistancecatcher',
    playstore: 'https://groups.google.com/g/wifiranger',
    images: [
      'assets/img/mobileapps/wifiranger/newimage.png',
      'assets/img/mobileapps/wifiranger/image2.png'
    ],
    description: [
      'WiFi Distance Catcher is a powerful Android and iOS application that helps users measure and analyze the distance to WiFi access points. Originally developed in Java for Android, it has been enhanced with Flutter for cross-platform compatibility.',
      'The app uses signal strength measurements and advanced algorithms to calculate approximate distances to WiFi sources, making it ideal for network administrators, WiFi enthusiasts, and anyone interested in understanding their wireless environment.'
    ],
    features: [
      'Real-time WiFi signal strength monitoring and visualization',
      'Distance calculation to nearby WiFi access points',
      'Network security analysis and encryption detection',
      'Historical data tracking and signal strength graphs',
      'Support for both 2.4GHz and 5GHz networks',
      'Export functionality for network survey data'
    ],
    technical: [
      'The application leverages Android\'s WiFi Manager API and iOS CoreLocation framework to scan for available networks and retrieve signal strength (RSSI) values. Distance calculations use the log-distance path loss model, accounting for environmental factors.',
      'The Flutter version provides a unified codebase for both platforms while maintaining native performance through platform channels. Data visualization is implemented using charts libraries for intuitive signal strength representation.'
    ],
    useCases: [
      'Network administrators optimizing WiFi access point placement',
      'Home users finding the best location for their router',
      'WiFi troubleshooting and dead zone identification',
      'Security auditing of wireless networks',
      'Educational purposes for learning about wireless signal propagation'
    ]
  },
  'expenses': {
    title: 'Clear Expense Tracker',
    category: 'Mobile App',
    platform: 'iOS & Android (Flutter)',
    technology: 'Flutter/Dart, SQLite, Provider',
    date: 'June 2022',
    github: '',
    playstore: '',
    images: [
      'assets/img/mobileapps/expenses/Group 2.png'
    ],
    description: [
      'Clear Expense Tracker is an intuitive cross-platform mobile application for personal finance management. Built with Flutter, it provides a seamless experience across iOS and Android devices.',
      'The app helps users track their daily expenses, categorize spending, set budgets, and gain insights into their financial habits through visual reports and analytics.'
    ],
    features: [
      'Quick expense entry with customizable categories',
      'Budget planning and tracking with alerts',
      'Visual charts and graphs for spending analysis',
      'Recurring expense management',
      'Multi-currency support',
      'Export data to CSV for further analysis',
      'Dark mode support',
      'Offline functionality with local data storage'
    ],
    technical: [
      'Built entirely with Flutter/Dart for cross-platform compatibility. Uses SQLite for local data persistence, ensuring fast performance and offline capability.',
      'State management implemented using Provider pattern for efficient reactive updates. Charts are rendered using fl_chart package for beautiful data visualization.'
    ],
    useCases: [
      'Individuals tracking personal spending habits',
      'Budget-conscious users managing monthly expenses',
      'Freelancers tracking business expenses',
      'Students managing limited budgets',
      'Families monitoring household expenses'
    ]
  },
  'dreamsafe': {
    title: 'DreamSafe',
    category: 'Mobile App & Full Stack',
    platform: 'iOS & Android (Flutter)',
    technology: 'Flutter/Dart, Java Spring Boot, AI/ML, Firebase, PostgreSQL',
    date: 'August 2025',
    github: '',
    playstore: '',
    images: [
      'assets/img/mobileapps/dreamsafe/Group 2.png'
    ],
    description: [
      'DreamSafe is a comprehensive full-stack mental health application that connects users experiencing nightmares with licensed psychologists. Built with Flutter for cross-platform mobile experience and Python Django backend with AI-powered guidance system.',
      'The app combines secure dream journaling with professional psychological support and AI-trained counseling tools. Users can communicate directly with psychologists who provide personalized coping strategies, while the AI system offers tailored advice based on trained psychological frameworks and user patterns.'
    ],
    features: [
      'Real-time chat with licensed psychologists',
      'AI-powered personalized advice and coping strategies',
      'Secure dream and nightmare journaling with encryption',
      'Pattern recognition and nightmare tracking analytics',
      'Psychologist matching based on specialization',
      'In-app video/voice consultation scheduling',
      'AI-trained recommendations for immediate support',
      'Progress tracking and therapy session history',
      'Biometric authentication (fingerprint/face ID)',
      'Emergency support resources and crisis hotlines'
    ],
    technical: [
      'The mobile app is built with Flutter/Dart for iOS and Android. Java Spring Boot backend handles user authentication, psychologist matching, and communication infrastructure with RESTful APIs. PostgreSQL database stores user data, session records, and chat histories with end-to-end encryption.',
      'AI/ML models trained on psychological frameworks provide context-aware advice and coping mechanisms. Firebase Cloud Messaging enables real-time chat notifications. The AI system uses natural language processing to analyze dream patterns and suggest tailored therapeutic approaches based on cognitive behavioral therapy principles.'
    ],
    useCases: [
      'Individuals seeking help for recurring nightmares',
      'Therapy patients tracking dreams between sessions',
      'People experiencing PTSD-related sleep disturbances',
      'Users needing immediate AI-guided coping strategies',
      'Psychologists monitoring patient progress remotely',
      'Mental health professionals providing teletherapy services'
    ]
  },
  'todo': {
    title: 'Todo Task Manager',
    category: 'Mobile App',
    platform: 'iOS & Android (Flutter)',
    technology: 'Flutter/Dart, Hive, Provider',
    date: 'April 2022',
    github: '',
    playstore: '',
    images: [
      'assets/img/mobileapps/todoapp/Group 2.png'
    ],
    description: [
      'A powerful yet simple cross-platform task management application built with Flutter. Todo Task Manager helps users organize their daily tasks, set priorities, and boost productivity.',
      'The app features a clean, intuitive interface with support for task categorization, deadlines, reminders, and progress tracking.'
    ],
    features: [
      'Create, edit, and delete tasks with ease',
      'Priority levels and color-coded categories',
      'Due date reminders and notifications',
      'Task completion tracking and statistics',
      'Search and filter tasks',
      'Drag-and-drop task reordering',
      'Recurring tasks support',
      'Dark mode and theme customization'
    ],
    technical: [
      'Built with Flutter/Dart for iOS and Android. Uses Hive as a lightweight, fast NoSQL database for local storage.',
      'State management implemented with Provider for reactive UI updates. Local notifications managed through flutter_local_notifications package for timely reminders.'
    ],
    useCases: [
      'Daily task management for professionals',
      'Project planning and milestone tracking',
      'Shopping lists and errands',
      'Study schedules for students',
      'Habit tracking and routine building'
    ]
  },
  'weather': {
    title: 'Weather Route Tracker',
    category: 'Mobile App',
    platform: 'iOS & Android (Flutter)',
    technology: 'Flutter/Dart, Weather API, Google Maps',
    date: 'May 2023',
    github: '',
    playstore: '',
    images: [
      'assets/img/mobileapps/weather/newimage.png'
    ],
    description: [
      'Weather Route Tracker is a cross-platform mobile application that combines weather forecasting with route planning. Built with Flutter, it helps users plan their journeys with weather conditions in mind.',
      'The app provides real-time weather updates along planned routes, helping users make informed decisions about travel timing and preparation.'
    ],
    features: [
      'Real-time weather updates for current location',
      'Route-based weather forecasting',
      '7-day weather forecast with detailed metrics',
      'Weather alerts and severe condition warnings',
      'Interactive map with weather overlay',
      'Multiple location tracking',
      'Weather history and trends',
      'Customizable weather units (metric/imperial)'
    ],
    technical: [
      'Developed with Flutter/Dart for cross-platform support. Integrates OpenWeatherMap API for accurate weather data and forecasts.',
      'Google Maps API provides interactive mapping and route planning capabilities. Location services use GPS for precise positioning and weather tracking along routes.'
    ],
    useCases: [
      'Travelers planning road trips',
      'Outdoor enthusiasts checking hiking conditions',
      'Commuters optimizing their travel times',
      'Delivery drivers planning efficient routes',
      'Event planners checking weather for outdoor activities'
    ]
  },
  'vr': {
    title: 'VR Experience Project',
    category: 'Virtual Reality',
    platform: 'VR Headsets (Quest, PSVR)',
    technology: 'Unity, C#, VR SDK',
    date: 'September 2025',
    github: '',
    demo: '',
    images: [
      'assets/img/projects/newvr.png',
      'assets/img/projects/vr.png'
    ],
    description: [
      'An immersive Virtual Reality experience designed for modern VR headsets including Oculus Quest and PSVR. This project showcases interactive 3D environments and innovative VR mechanics.',
      'The experience demonstrates advanced VR interaction patterns, spatial audio, and optimized performance for wireless and tethered VR systems.'
    ],
    features: [
      'Immersive 3D environments with realistic physics',
      'Hand tracking and controller support',
      'Spatial audio for realistic sound positioning',
      'Interactive objects and puzzles',
      'Optimized performance for smooth VR experience',
      'Teleportation and smooth locomotion options',
      'Cross-platform VR headset support'
    ],
    technical: [
      'Built using Unity game engine with C# scripting. Implements VR SDK integration for multiple headset platforms including Oculus and PlayStation VR.',
      'Performance optimization techniques ensure consistent 90fps frame rate. Spatial audio system uses Unity\'s audio spatializer for immersive sound design.'
    ],
    useCases: [
      'VR gaming and entertainment experiences',
      'Virtual training and simulation environments',
      'Architectural visualization and walkthroughs',
      'Educational VR applications',
      'Virtual showrooms and product demonstrations'
    ]
  },
  'dashboard1': {
    title: 'Parking Analytics Dashboard',
    category: 'Backend & Dashboard',
    platform: 'Web Application',
    technology: 'Angular, Java Spring Boot, MySQL, Chart.js',
    date: 'March 2023',
    github: 'https://github.com/Insterstellar/ParkingSpotDashboard',
    demo: '',
    images: [
      'assets/img/dashboards/dashboard1.png',
      'assets/img/dashboards/dashtwo.png'
    ],
    description: [
      'A comprehensive administrative dashboard for the Parking Spot App, providing real-time analytics and management tools for parking lot operators and administrators.',
      'The dashboard offers detailed insights into parking utilization, revenue tracking, user behavior, and operational metrics through interactive charts and data visualizations.'
    ],
    features: [
      'Real-time parking occupancy monitoring',
      'Revenue and transaction analytics',
      'User activity and behavior tracking',
      'Booking history and reports generation',
      'Parking lot management and configuration',
      'Interactive charts and data visualization',
      'Role-based access control for administrators',
      'Export functionality for reports and data'
    ],
    technical: [
      'Frontend built with Angular framework using TypeScript. Implements responsive design with Angular Material components for consistent UI/UX.',
      'Backend powered by Java Spring Boot RESTful APIs. MySQL database stores operational data with optimized queries for real-time analytics. Chart.js and D3.js libraries provide dynamic data visualizations.'
    ],
    useCases: [
      'Parking lot managers monitoring daily operations',
      'Business owners tracking revenue and performance',
      'Operations teams managing multiple parking locations',
      'Financial analysts reviewing transaction data',
      'Customer service teams accessing booking information'
    ]
  },
  'dashboard2': {
    title: 'Business Analytics Dashboard',
    category: 'Backend & Dashboard',
    platform: 'Web Application',
    technology: 'Angular, Java Spring Boot, MongoDB, D3.js',
    date: 'July 2023',
    github: '',
    demo: '',
    images: [
      'assets/img/dashboards/dashtwo.png'
    ],
    description: [
      'A powerful business intelligence dashboard providing comprehensive analytics and insights across multiple business metrics. Built with modern web technologies for responsive, real-time data visualization.',
      'This dashboard serves as a central hub for monitoring KPIs, tracking performance metrics, and generating actionable business insights through intuitive visual representations.'
    ],
    features: [
      'Customizable dashboard widgets and layouts',
      'Real-time data updates and notifications',
      'Interactive charts with drill-down capabilities',
      'Multi-dimensional data filtering',
      'Scheduled report generation and delivery',
      'Team collaboration and annotation tools',
      'Mobile-responsive design',
      'API integration with third-party services'
    ],
    technical: [
      'Angular-based SPA with lazy loading and code splitting for optimal performance. RxJS handles reactive data streams and real-time updates.',
      'Java Spring Boot backend with WebSocket support for live data push. MongoDB provides flexible schema for diverse data types. D3.js powers custom interactive visualizations and dynamic charts.'
    ],
    useCases: [
      'Executive leadership monitoring company KPIs',
      'Sales teams tracking performance metrics',
      'Marketing analysts measuring campaign effectiveness',
      'Product managers analyzing user engagement',
      'Finance teams reviewing financial metrics'
    ]
  }
};

// Remove dashboard2 as it's merged with dashboard1
delete portfolioProjects.dashboard2;

// Get project ID from URL parameter
function getProjectId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('project');
}

// Load project data
function loadProjectData() {
  const projectId = getProjectId();
  const project = portfolioProjects[projectId];

  if (!project) {
    // If project not found, redirect to home
    window.location.href = 'index.html#portfolio';
    return;
  }

  // Set page title
  document.title = `${project.title} - Ronald Monday`;
  document.getElementById('project-title').textContent = project.title;

  // Load images into slider
  const slider = document.getElementById('image-slider');
  slider.innerHTML = project.images.map(img => `
    <div class="swiper-slide">
      <img src="${img}" alt="${project.title}">
    </div>
  `).join('');

  // Load project info
  const projectInfo = document.getElementById('project-info');
  const infoItems = [
    { label: 'Category', value: project.category },
    { label: 'Platform', value: project.platform },
    { label: 'Technology', value: project.technology },
    { label: 'Date', value: project.date }
  ];

  if (project.github) {
    infoItems.push({ label: 'GitHub', value: `<a href="${project.github}" target="_blank">View Repository</a>` });
  } else if (project.github === '') {
    infoItems.push({ label: 'GitHub', value: '<span style="color: #999;">Private</span>' });
  }
  if (project.playstore) {
    infoItems.push({ label: 'Play Store', value: `<a href="${project.playstore}" target="_blank">View on Store (register for closed testing)</a>` });
  } else if (project.playstore === '') {
    infoItems.push({ label: 'Play Store', value: '<span style="color: #999;">Private</span>' });
  }
  if (project.demo) {
    infoItems.push({ label: 'Demo', value: `<a href="${project.demo}" target="_blank">View Demo</a>` });
  } else if (project.demo === '') {
    infoItems.push({ label: 'Demo', value: '<span style="color: #999;">Private</span>' });
  }

  projectInfo.innerHTML = infoItems.map(item => 
    `<li><strong>${item.label}:</strong> ${item.value}</li>`
  ).join('');

  // Load description
  const description = document.getElementById('project-description');
  description.innerHTML = project.description.map(p => `<p>${p}</p>`).join('');

  // Load key features
  const features = document.getElementById('key-features');
  features.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');

  // Load technical details
  const technical = document.getElementById('technical-details');
  technical.innerHTML = project.technical.map(p => `<p>${p}</p>`).join('');

  // Load use cases
  const useCases = document.getElementById('use-cases');
  useCases.innerHTML = project.useCases.map(u => `<li>${u}</li>`).join('');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', loadProjectData);
