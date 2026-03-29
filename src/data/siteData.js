export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Barlow Condensed",
    body: "Inter",
    display: "Barlow Condensed",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "smooth",
  serviceCardStyle: "overlay",
  projectGridStyle: "bento",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "stats", "services", "projects", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "The Poolman",
    legalName: "The Poolman Zimbabwe",
    tagline: "Your Pool. Our Passion.",
    description:
      "Harare's trusted swimming pool specialists. From crystal-clear maintenance to complete installations, we keep Zimbabwe's pools pristine, safe, and summer-ready all year round.",
    phone: "+263 77 307 7052",
    phoneRaw: "+263773077052",
    whatsappNumber: "263773077052",
    email: "info@thepoolman.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.8,
    ratingRounded: 5,
    reviewCount: 42,
    established: "2015",
    yearsExperience: "10+",
    projectsCompleted: "2,500+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "7:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "the-poolman-cookie-consent",
    socialLinks: {
      facebook: "https://www.facebook.com/thepoolmanzw",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "The",
    logoLine2: "Poolman",
  },

  hero: {
    badge: "Harare's Pool Specialists",
    titleParts: [
      { text: "Your Pool " },
      { text: "Our Passion.", highlight: true },
    ],
    subtitle:
      "Crystal-clear water. Flawless equipment. Expert hands. We do not just maintain pools, we transform backyards into private paradises. Harare's most trusted pool team since 2015.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondary: "Our Services",
    trustBadge: "Free Pool Assessment",
    backgroundImages: [
      { url: "/images/pool/pool-1.jpg", alt: "Sparkling swimming pool maintained by The Poolman" },
      { url: "/images/pool/pool-2.jpg", alt: "Pool cleaning and maintenance in progress" },
      { url: "/images/pool/pool-3.jpg", alt: "Beautiful residential pool installation" },
    ],
  },

  stats: [
    { number: "2500", label: "Pools Serviced" },
    { number: "10", label: "Years Experience" },
    { number: "42", label: "5-Star Reviews" },
    { number: "15", label: "Expert Technicians" },
  ],

  servicesPreview: [
    {
      iconName: "Drop",
      title: "Pool Cleaning",
      desc: "Weekly and once-off deep cleaning. Skimming, vacuuming, brushing, filter backwash. We leave your pool sparkling every single time.",
    },
    {
      iconName: "Wrench",
      title: "Pool Maintenance",
      desc: "Scheduled maintenance contracts that keep your pool chemistry balanced, equipment running, and water crystal clear year-round.",
    },
    {
      iconName: "Hammer",
      title: "Pool Repairs",
      desc: "Cracked tiles, leaking pipes, faulty pumps, broken filters. We diagnose fast and fix right the first time. No guesswork.",
    },
    {
      iconName: "HardHat",
      title: "Pool Installation",
      desc: "From design to the first splash. Complete pool construction including plumbing, tiling, coping, and equipment installation.",
    },
    {
      iconName: "Flask",
      title: "Water Testing",
      desc: "Professional water chemistry analysis. pH, chlorine, alkalinity, stabilizer, calcium hardness. We balance what matters.",
    },
    {
      iconName: "Package",
      title: "Equipment Supply",
      desc: "Pumps, filters, chlorinators, cleaners, chemicals. We source and install only proven, reliable pool equipment brands.",
    },
  ],

  featuredProjects: [
    {
      image: "/images/pool/pool-4.jpg",
      title: "Borrowdale Luxury Pool Build",
      category: "Installation",
    },
    {
      image: "/images/pool/pool-5.jpg",
      title: "Commercial Pool Restoration",
      category: "Renovation",
    },
    {
      image: "/images/pool/pool-6.jpg",
      title: "Mount Pleasant Infinity Edge",
      category: "Premium Build",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Why Harare " },
      { text: "Trusts", highlight: true },
      { text: " The Poolman" },
    ],
    image: "/images/pool/pool-7.jpg",
    imageAlt: "The Poolman team servicing a residential pool in Harare",
    experienceYears: "2,500+",
    experienceLabel: "Pools Serviced",
    points: [
      {
        title: "Same-Day Response",
        desc: "Green pool emergency? Pump failure? We respond within hours, not days. Most issues resolved on the first visit.",
      },
      {
        title: "Certified Technicians",
        desc: "Our team is trained in water chemistry, equipment diagnostics, and pool construction. Not handymen — specialists.",
      },
      {
        title: "Transparent Pricing",
        desc: "No surprise invoices. We quote before we start, explain what needs doing and why, and stick to the agreed price.",
      },
      {
        title: "Quality Chemicals & Parts",
        desc: "We use only proven brands for chemicals and replacement parts. Your pool deserves better than generic chemicals from the hardware store.",
      },
    ],
  },

  homeCta: {
    backgroundImage: "/images/pool/pool-8.jpg",
    backgroundAlt: "Crystal clear pool water shimmering in Harare sunlight",
    titleParts: [
      { text: "Ready for a " },
      { text: "Crystal Clear", highlight: true },
      { text: " Pool?" },
    ],
    subtitle:
      "Whether it is a weekly clean, a full renovation, or a brand new installation, The Poolman has you covered. Get your free assessment today.",
    ctaPrimary: "Get Free Assessment",
    whatsappText:
      "Hi Poolman! I would like to get a quote for pool services.",
  },

  homeTestimonials: [
    {
      name: "Sarah Chikwanda",
      role: "Borrowdale Homeowner",
      text: "Our pool went from green nightmare to crystal clear in one visit. The Poolman team is punctual, professional, and knows their chemistry. Best pool service in Harare by far.",
      rating: 5,
    },
    {
      name: "James Moyo",
      role: "Lodge Owner",
      text: "We have a commercial pool that needs daily attention. The Poolman handles our weekly service contract flawlessly. Our guests always comment on the water quality.",
      rating: 5,
    },
    {
      name: "Tendai Makoni",
      role: "Mount Pleasant Resident",
      text: "They built our pool from scratch. Design, construction, tiling, equipment. Finished on time and on budget. That never happens in Harare. Highly recommend.",
      rating: 5,
    },
  ],

  // ====== ABOUT PAGE ======
  about: {
    heroTitle: [
      { text: "Born by " },
      { text: "The Pool.", highlight: true },
      { text: " Built on Trust." },
    ],
    heroSubtitle:
      "The Poolman started with one technician and a passion for clean water. A decade later, we are Harare's most trusted pool service company, maintaining over 200 pools monthly.",
    storyImage: "/images/pool/pool-9.jpg",
    storyImageAlt: "The Poolman team at work on a pool installation",
    storyProjectCount: "2,500+",
    storyProjectLabel: "Pools Serviced",
    storyTitle: "From One Pool to Two Thousand. And Still Obsessed with Perfection.",
    storyParagraphs: [
      "The Poolman was founded in 2015 by a team of pool enthusiasts who were tired of watching Harare's beautiful pools fall into disrepair because of unreliable service providers. We started with a simple promise: show up on time, do the job right, and leave the pool sparkling.",
      "That promise built our reputation. Word of mouth spread through Borrowdale, Mount Pleasant, Highlands, and eventually across all of Harare. Residential pools, commercial pools, lodge pools, school pools. Every one gets the same obsessive attention to detail.",
      "Today we maintain over 200 pools on regular contracts, employ 15 certified technicians, and have completed more than 50 full pool installations. We have grown, but the promise remains the same: your pool, treated like it is our own.",
    ],
    mission:
      "To keep every pool in Harare clean, safe, and beautiful. We exist because pool owners deserve a service provider they can trust completely — someone who shows up, communicates clearly, and delivers results you can see.",
    vision:
      "To be the undisputed standard for pool services in Zimbabwe. Not the cheapest — the best. A company that pool owners recommend without hesitation because the results speak for themselves.",
    values: [
      {
        iconName: "Drop",
        title: "Crystal Clear Standards",
        desc: "We do not leave until the water is perfect. Every visit. No exceptions.",
      },
      {
        iconName: "Clock",
        title: "Reliability",
        desc: "We show up when we say we will. Punctuality is not a bonus — it is the baseline.",
      },
      {
        iconName: "ShieldCheck",
        title: "Honesty",
        desc: "We tell you what your pool actually needs, not what inflates the invoice.",
      },
      {
        iconName: "Wrench",
        title: "Expertise",
        desc: "Every technician is trained in water chemistry, equipment repair, and pool construction.",
      },
      {
        iconName: "Heart",
        title: "Care",
        desc: "We treat every pool like it is our own backyard. That pride shows in the results.",
      },
      {
        iconName: "Star",
        title: "Excellence",
        desc: "Good enough is not in our vocabulary. We chase perfection on every service call.",
      },
    ],
    team: [
      {
        name: "The Poolman Team",
        role: "Founder & Lead Technician",
        image: "/images/pool/pool-10.jpg",
      },
      {
        name: "Technical Crew",
        role: "Senior Pool Technicians",
        image: "/images/pool/pool-11.jpg",
      },
      {
        name: "Installation Team",
        role: "Construction Specialists",
        image: "/images/pool/pool-12.jpg",
      },
      {
        name: "Water Lab",
        role: "Chemistry & Testing Division",
        image: "/images/pool/pool-13.jpg",
      },
    ],
    milestones: [
      {
        year: "2015",
        title: "The Poolman Founded",
        desc: "Started with one van, one technician, and a promise to do pool service differently in Harare.",
      },
      {
        year: "2017",
        title: "100 Regular Clients",
        desc: "Hit 100 pools on monthly maintenance contracts. Reputation built entirely through referrals.",
      },
      {
        year: "2019",
        title: "First Pool Installation",
        desc: "Expanded from maintenance into full pool construction. Completed our first ground-up build in Borrowdale.",
      },
      {
        year: "2021",
        title: "Commercial Contracts",
        desc: "Began servicing hotels, lodges, and schools across Harare. Commercial division launched.",
      },
      {
        year: "2023",
        title: "200+ Monthly Clients",
        desc: "Crossed 200 pools on regular service contracts. Team grew to 15 certified technicians.",
      },
      {
        year: "2025",
        title: "Expansion & Innovation",
        desc: "Launched automated water monitoring pilots and expanded service area to Chinhoyi and Kariba.",
      },
    ],
    ctaTitle: "Your Pool Deserves Better",
    ctaSubtitle:
      "Stop settling for inconsistent pool service. Get a free assessment and see the Poolman difference for yourself.",
    ctaCta: "Book Free Assessment",
  },

  // ====== SERVICES PAGE ======
  services: {
    heroTitle: [
      { text: "Every Pool. " },
      { text: "Every", highlight: true },
      { text: " Service." },
    ],
    heroSubtitle:
      "From a simple weekly clean to a complete pool installation, we handle everything in-house with certified technicians and proven methods.",
    items: [
      {
        iconName: "Drop",
        title: "Pool Cleaning",
        slug: "pool-cleaning",
        image: "/images/pool/pool-4.jpg",
        desc: "Our signature service. We do not just skim the surface — we deep clean your pool from waterline to drain. Brushing walls, vacuuming floors, cleaning skimmer baskets, backwashing filters, and testing water chemistry. Every visit leaves your pool guest-ready.",
        features: [
          "Surface skimming and debris removal",
          "Wall and floor brushing",
          "Vacuum cleaning — manual and automatic",
          "Skimmer basket and pump strainer cleaning",
          "Filter backwash and rinse cycle",
          "Water chemistry testing and balancing",
        ],
      },
      {
        iconName: "Wrench",
        title: "Pool Maintenance",
        slug: "pool-maintenance",
        image: "/images/pool/pool-5.jpg",
        desc: "Scheduled maintenance contracts that give you peace of mind. We visit weekly or bi-weekly, manage your chemical balance, inspect equipment, and catch problems before they become expensive. Your pool stays crystal clear without you lifting a finger.",
        features: [
          "Weekly or bi-weekly scheduled visits",
          "Chemical balancing — pH, chlorine, alkalinity, stabilizer",
          "Equipment inspection and preventive maintenance",
          "Filter cleaning and media replacement scheduling",
          "Seasonal preparation — winterizing and spring opening",
          "Monthly water analysis report",
        ],
      },
      {
        iconName: "Hammer",
        title: "Pool Repairs",
        slug: "pool-repairs",
        image: "/images/pool/pool-6.jpg",
        desc: "Leaks, cracks, broken pumps, failing filters, faulty lights — we fix it all. Our diagnostic approach means we find the root cause, not just patch symptoms. Most repairs completed on the first visit with parts we carry in our service vehicles.",
        features: [
          "Leak detection and repair",
          "Pump motor replacement and rewinding",
          "Filter valve and multiport repair",
          "Tile replacement and re-grouting",
          "Pipe repair and re-plumbing",
          "Pool light replacement and wiring",
        ],
      },
      {
        iconName: "HardHat",
        title: "Pool Installation",
        slug: "pool-installation",
        image: "/images/pool/pool-7.jpg",
        desc: "From concept to completion. We design, excavate, construct, plumb, tile, and commission your new swimming pool. Concrete or fibreglass. Residential or commercial. Every installation includes a full equipment package and a 12-month workmanship warranty.",
        features: [
          "Custom design and 3D visualization",
          "Excavation and structural shell construction",
          "Plumbing and filtration system installation",
          "Tiling, coping, and deck finishing",
          "Equipment commissioning and handover training",
          "12-month construction warranty",
        ],
      },
      {
        iconName: "Flask",
        title: "Water Testing & Treatment",
        slug: "water-testing",
        image: "/images/pool/pool-8.jpg",
        desc: "Professional-grade water analysis that goes beyond basic test strips. We measure pH, free chlorine, combined chlorine, total alkalinity, calcium hardness, cyanuric acid, and more. Then we create a precise treatment plan to bring everything into perfect balance.",
        features: [
          "7-parameter professional water testing",
          "Algae identification and targeted treatment",
          "Salt chlorinator calibration",
          "Phosphate and metal testing",
          "Green pool recovery treatment",
          "Written water report and treatment plan",
        ],
      },
      {
        iconName: "Package",
        title: "Equipment Supply",
        slug: "equipment-supply",
        image: "/images/pool/pool-9.jpg",
        desc: "We source, supply, and install pool equipment from trusted brands. Pumps, sand filters, cartridge filters, salt chlorinators, automatic cleaners, pool covers, heat pumps, and all the chemicals you need. Bought from us means installed by us, with a warranty.",
        features: [
          "Pool pumps — single and variable speed",
          "Sand filters and cartridge filter systems",
          "Salt water chlorinators",
          "Automatic pool cleaners — suction and robotic",
          "Pool covers — safety and thermal",
          "Full chemical supply — chlorine, acid, algaecide, stabilizer",
        ],
      },
    ],
    ctaTitle: "Need Pool Help?",
    ctaSubtitle:
      "Whatever your pool needs, we have the expertise and equipment to handle it. Get a free assessment and honest quote.",
  },

  // ====== PROJECTS PAGE ======
  projects: {
    heroTitle: [
      { text: "Pools We Have " },
      { text: "Transformed", highlight: true },
    ],
    heroSubtitle:
      "Before and after. Green to clean. Empty hole to backyard paradise. These are real projects from real Harare pools.",
    categories: [
      "All",
      "Installation",
      "Renovation",
      "Commercial",
      "Green Recovery",
      "Equipment Upgrade",
    ],
    items: [
      {
        id: 1,
        title: "Borrowdale Luxury Pool Build",
        category: "Installation",
        location: "Borrowdale, Harare",
        year: "2024",
        image: "/images/pool/pool-4.jpg",
        desc: "Complete 10m x 5m residential pool with infinity edge, mosaic tiling, LED lighting, and a variable speed pump system. Built from excavation to first swim in 8 weeks.",
        services: ["Pool Installation", "Equipment Supply"],
      },
      {
        id: 2,
        title: "Hotel Pool Restoration",
        category: "Commercial",
        location: "Avondale, Harare",
        year: "2024",
        image: "/images/pool/pool-5.jpg",
        desc: "Full renovation of a 25m commercial hotel pool. New tiling, re-plumbing, upgraded filtration system, and commercial salt chlorinator installation. Zero downtime for hotel guests.",
        services: ["Pool Repairs", "Equipment Supply"],
      },
      {
        id: 3,
        title: "Mount Pleasant Infinity Edge",
        category: "Installation",
        location: "Mount Pleasant, Harare",
        year: "2023",
        image: "/images/pool/pool-6.jpg",
        desc: "Premium residential infinity edge pool overlooking a natural garden. Custom design with vanishing edge, underwater bench seating, and automated chemical dosing system.",
        services: ["Pool Installation", "Water Testing"],
      },
      {
        id: 4,
        title: "Green Pool Emergency Recovery",
        category: "Green Recovery",
        location: "Highlands, Harare",
        year: "2024",
        image: "/images/pool/pool-10.jpg",
        desc: "Severely neglected pool with heavy algae, cloudy water, and failed pump. Complete recovery in 72 hours: new pump, chemical shock treatment, filter media replacement, and water rebalancing.",
        services: ["Pool Cleaning", "Pool Repairs", "Water Testing"],
      },
      {
        id: 5,
        title: "School Pool Equipment Upgrade",
        category: "Equipment Upgrade",
        location: "Chisipite, Harare",
        year: "2023",
        image: "/images/pool/pool-11.jpg",
        desc: "Full equipment overhaul for a school swimming pool. Replaced aging pump, installed new sand filter, added salt chlorinator, and set up automated dosing to reduce staff maintenance burden.",
        services: ["Equipment Supply", "Pool Maintenance"],
      },
      {
        id: 6,
        title: "Lodge Pool Renovation",
        category: "Renovation",
        location: "Domboshava, Harare",
        year: "2024",
        image: "/images/pool/pool-12.jpg",
        desc: "Complete facelift for a safari lodge pool. Re-tiled with natural stone, installed heat pump for year-round use, added deck-level overflow system, and upgraded to energy-efficient pump.",
        services: ["Pool Repairs", "Pool Installation"],
      },
      {
        id: 7,
        title: "Residential Plunge Pool Build",
        category: "Installation",
        location: "Greystone Park, Harare",
        year: "2025",
        image: "/images/pool/pool-13.jpg",
        desc: "Compact 4m x 3m plunge pool for a townhouse courtyard. Maximized limited space with clever design, integrated bench seating, and space-saving equipment room. Proof that small pools can be luxurious.",
        services: ["Pool Installation"],
      },
      {
        id: 8,
        title: "Commercial Complex Pool Maintenance",
        category: "Commercial",
        location: "Eastlea, Harare",
        year: "2025",
        image: "/images/pool/pool-14.jpg",
        desc: "Ongoing weekly maintenance contract for a residential complex with two pools and a children's splash pad. 52 visits per year, zero green-water incidents since we took over.",
        services: ["Pool Maintenance", "Water Testing"],
      },
    ],
  },

  // ====== REVIEWS PAGE ======
  reviews: {
    heroTitle: [
      { text: "What Pool Owners " },
      { text: "Say", highlight: true },
    ],
    heroSubtitle:
      "Real reviews from real pool owners across Harare. We let our water quality do the talking.",
    ratingBreakdown: [
      { stars: 5, count: 32 },
      { stars: 4, count: 8 },
      { stars: 3, count: 2 },
      { stars: 2, count: 0 },
      { stars: 1, count: 0 },
    ],
    items: [
      {
        name: "Sarah Chikwanda",
        role: "Borrowdale Homeowner",
        text: "Our pool went from green nightmare to crystal clear in one visit. The Poolman team is punctual, professional, and knows their chemistry. I have recommended them to every neighbour on our street.",
        rating: 5,
        date: "1 month ago",
        project: "Pool Cleaning",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c",
      },
      {
        name: "James Moyo",
        role: "Lodge Owner",
        text: "We have a commercial pool that needs daily attention. The Poolman handles our weekly service contract flawlessly. Our guests always comment on the water quality. Best decision we made.",
        rating: 5,
        date: "1 month ago",
        project: "Pool Maintenance",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c",
      },
      {
        name: "Tendai Makoni",
        role: "Mount Pleasant Resident",
        text: "They built our pool from scratch. Design, construction, tiling, equipment. Finished on time and on budget. That never happens in Harare. Highly recommend The Poolman for installations.",
        rating: 5,
        date: "2 months ago",
        project: "Pool Installation",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c",
      },
      {
        name: "Patricia Nyamande",
        role: "Highlands Homeowner",
        text: "My pump died on a Saturday afternoon before a party. Called The Poolman and they had a replacement installed within 3 hours. That kind of service does not exist anywhere else in Harare.",
        rating: 5,
        date: "2 months ago",
        project: "Pool Repairs",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c",
      },
      {
        name: "Robert Chigwedere",
        role: "School Facilities Manager",
        text: "The Poolman maintains our school pool. Water is always safe, equipment is always running, and they handle all the chemical compliance documentation for us. Professional outfit.",
        rating: 5,
        date: "3 months ago",
        project: "Pool Maintenance",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c",
      },
      {
        name: "Grace Mutasa",
        role: "Avondale Resident",
        text: "I switched from another pool company after years of mediocre service. The Poolman difference was obvious from the first visit. They actually test the water, explain what they are doing, and leave it sparkling.",
        rating: 5,
        date: "3 months ago",
        project: "Pool Cleaning",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c",
      },
      {
        name: "Brian Hungwe",
        role: "Real Estate Developer",
        text: "We use The Poolman for all our residential development pools. They handle installation, commissioning, and then the ongoing maintenance contracts for homeowners. Turnkey solution that works.",
        rating: 4,
        date: "4 months ago",
        project: "Pool Installation",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c",
      },
      {
        name: "Chenai Mapfumo",
        role: "Homeowner",
        text: "Transparent pricing, no hidden fees, always on time. The Poolman restored my confidence in pool service companies. They do exactly what they say they will do.",
        rating: 5,
        date: "5 months ago",
        project: "Pool Maintenance",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c",
      },
      {
        name: "David Mushonga",
        role: "Bed & Breakfast Owner",
        text: "Crystal clear pool every single day. Our B&B reviews specifically mention the pool quality now. The Poolman is worth every cent of the maintenance contract.",
        rating: 5,
        date: "6 months ago",
        project: "Pool Maintenance",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c",
      },
      {
        name: "Tinashe Chirara",
        role: "Greystone Park Homeowner",
        text: "Had them build a plunge pool in our courtyard. Small space, big challenge. They nailed the design and execution. Now it is our favourite spot in the house. Amazing craftsmanship.",
        rating: 5,
        date: "7 months ago",
        project: "Pool Installation",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c",
      },
    ],
    ctaTitle: "Join Harare's Happiest Pool Owners",
    ctaSubtitle:
      "Your pool deserves the same obsessive care. Get a free assessment and see why our clients never switch.",
    ctaCta: "Get Free Assessment",
    ctaWhatsappText:
      "Hi Poolman! I read your reviews and want to book a pool assessment.",
  },

  // ====== CONTACT PAGE ======
  contact: {
    heroTitle: [
      { text: "Let's Make Your " },
      { text: "Pool Perfect.", highlight: true },
    ],
    heroSubtitle:
      "Whether it is a quick question about water chemistry or a full pool installation quote, we are here to help. We respond within 2 hours during business hours.",
    formTitle: "Send Us a Message",
    formSubtitle:
      "Describe your pool situation and we will get back to you with an honest assessment and quote.",
  },

  // ====== CAREERS PAGE ======
  careers: {
    heroTitle: [
      { text: "Join the " },
      { text: "Poolman", highlight: true },
      { text: " Team" },
    ],
    heroSubtitle:
      "We are growing and looking for passionate pool professionals who take pride in delivering perfect results every time.",
    heroImage: "/images/pool/pool-14.jpg",
    cultureTitle: "Why Work With Us?",
    cultureItems: [
      {
        iconName: "Wrench",
        title: "Learn From the Best",
        desc: "Work alongside experienced pool technicians who will teach you water chemistry, equipment repair, and pool construction.",
      },
      {
        iconName: "Rocket",
        title: "Career Growth",
        desc: "From junior technician to team lead to branch manager. We promote from within and invest in training.",
      },
      {
        iconName: "Heart",
        title: "Outdoor Work",
        desc: "No cubicle. No office politics. You work poolside in the Harare sunshine, making backyards beautiful.",
      },
    ],
    cultureImage: "/images/pool/pool-14.jpg",
    cultureImageAlt: "The Poolman team working on a pool installation",
    cultureTagline: "Not Just a Job. A Craft.",
    cultureTaglineDesc:
      "Our technicians take pride in leaving every pool sparkling. It is not just work — it is craftsmanship with water.",
    benefits: [
      {
        iconName: "CurrencyDollar",
        title: "Competitive Pay",
        desc: "Industry-leading compensation with performance bonuses for client satisfaction scores.",
      },
      {
        iconName: "GraduationCap",
        title: "Training Provided",
        desc: "Full training in water chemistry, equipment repair, and pool construction. No experience required for junior roles.",
      },
      {
        iconName: "Car",
        title: "Company Vehicle",
        desc: "All field technicians receive a fully equipped service vehicle for client visits.",
      },
      {
        iconName: "Users",
        title: "Great Team",
        desc: "Small team, big camaraderie. Monthly braais, team outings, and genuine respect for each other.",
      },
      {
        iconName: "ShieldCheck",
        title: "Job Security",
        desc: "Pools need maintenance 52 weeks a year. Recession-proof work with steady demand.",
      },
      {
        iconName: "Star",
        title: "Pride in Your Work",
        desc: "Every pool you leave sparkling is a visible result of your skill. Instant job satisfaction.",
      },
    ],
    positions: [
      {
        id: 1,
        title: "Senior Pool Technician",
        department: "Field Services",
        type: "Full-Time",
        location: "Harare",
        description:
          "Experienced pool technician to manage a route of 30+ pools per week. Must be able to diagnose equipment issues, balance water chemistry, and handle client communication professionally.",
        requirements: [
          "3+ years pool maintenance experience",
          "Water chemistry certification or equivalent knowledge",
          "Equipment troubleshooting and repair skills",
          "Valid driver's licence",
          "Strong client communication skills",
        ],
      },
      {
        id: 2,
        title: "Junior Pool Technician",
        department: "Field Services",
        type: "Full-Time",
        location: "Harare",
        description:
          "Entry-level position for someone eager to learn the pool trade. Full training provided. You will shadow senior technicians and gradually build your own client route.",
        requirements: [
          "Willingness to learn and work hard",
          "Basic mechanical aptitude",
          "Valid driver's licence (or willingness to obtain)",
          "Professional appearance and attitude",
          "Comfortable working outdoors",
        ],
      },
      {
        id: 3,
        title: "Pool Construction Foreman",
        department: "Installations",
        type: "Full-Time",
        location: "Harare",
        description:
          "Lead our pool construction crew on new installations. Must have experience in concrete pool construction, plumbing, and project management.",
        requirements: [
          "5+ years construction experience (pool construction preferred)",
          "Knowledge of pool plumbing and hydraulics",
          "Ability to manage a crew of 6-8 workers",
          "Experience reading construction drawings",
          "Strong project management and scheduling skills",
        ],
      },
    ],
    generalApplicationTitle: "Passionate About Pools?",
    generalApplicationSubtitle:
      "We are always looking for reliable, detail-oriented people to join our team. Send us your CV even if you do not see a perfect match above.",
    generalApplicationCta: "Send Your CV",
  },

  // ====== GALLERY PAGE ======
  gallery: {
    heroTitle: [
      { text: "Pool " },
      { text: "Perfection", highlight: true },
      { text: " in Every Shot" },
    ],
    heroSubtitle:
      "Real pools. Real projects. Real results. Browse our portfolio of installations, renovations, and weekly maintenance work across Harare.",
    categories: [
      "All",
      "Installations",
      "Maintenance",
      "Renovations",
      "Equipment",
      "Before & After",
    ],
    items: [
      { id: 1, image: "/images/pool/pool-1.jpg", category: "Maintenance", title: "Weekly clean in progress" },
      { id: 2, image: "/images/pool/pool-2.jpg", category: "Maintenance", title: "Water testing and balancing" },
      { id: 3, image: "/images/pool/pool-3.jpg", category: "Installations", title: "Completed residential pool" },
      { id: 4, image: "/images/pool/pool-4.jpg", category: "Installations", title: "Borrowdale luxury build" },
      { id: 5, image: "/images/pool/pool-5.jpg", category: "Renovations", title: "Hotel pool restoration" },
      { id: 6, image: "/images/pool/pool-6.jpg", category: "Installations", title: "Infinity edge masterpiece" },
      { id: 7, image: "/images/pool/pool-7.jpg", category: "Maintenance", title: "Commercial pool service" },
      { id: 8, image: "/images/pool/pool-8.jpg", category: "Maintenance", title: "Crystal clear results" },
      { id: 9, image: "/images/pool/pool-9.jpg", category: "Installations", title: "Construction in progress" },
      { id: 10, image: "/images/pool/pool-10.jpg", category: "Before & After", title: "Green to clean recovery" },
      { id: 11, image: "/images/pool/pool-11.jpg", category: "Equipment", title: "New filtration system" },
      { id: 12, image: "/images/pool/pool-12.jpg", category: "Renovations", title: "Lodge pool facelift" },
      { id: 13, image: "/images/pool/pool-13.jpg", category: "Installations", title: "Plunge pool build" },
      { id: 14, image: "/images/pool/pool-14.jpg", category: "Equipment", title: "Pump installation" },
      { id: 15, image: "/images/pool/pool-15.jpg", category: "Maintenance", title: "Filter backwash day" },
      { id: 16, image: "/images/pool/pool-16.jpg", category: "Before & After", title: "Complete transformation" },
    ],
  },
  footer: {
    description:
      "Harare's trusted swimming pool specialists. Crystal-clear maintenance, expert repairs, and complete pool installations since 2015.",
    copyright: "The Poolman Zimbabwe",
  },
};

export default siteData;
