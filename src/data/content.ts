import type { Project, ServiceItem, ProcessStep, Testimonial, FAQItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_luxury_interior_1790618743878.jpg';
export const BEFORE_IMAGE = '/src/assets/images/before_kitchen_space_1790618758201.jpg';
export const AFTER_IMAGE = '/src/assets/images/after_kitchen_space_1790618769792.jpg';
export const ABOUT_DETAIL_IMAGE = '/src/assets/images/about_architectural_detail_1790618781785.jpg';
export const PROJECT_HILLSIDE_IMAGE = '/src/assets/images/project_hillside_residence_1790618792429.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'hillside-residence',
    title: 'The Hillside Residence',
    subtitle: 'Monumental Primary Sanctuary & Minimalist Pavilions',
    location: 'San Antonio, TX',
    category: 'Residential Interior Architecture',
    year: '2026',
    coverImage: PROJECT_HILLSIDE_IMAGE,
    heroImage: PROJECT_HILLSIDE_IMAGE,
    gallery: [
      PROJECT_HILLSIDE_IMAGE,
      HERO_IMAGE,
      AFTER_IMAGE,
      ABOUT_DETAIL_IMAGE,
    ],
    description: 'Perched along the Texas Hill Country ridge, this 7,800 sq ft residence balances bold brutalist concrete massing with quiet Japanese-inspired interior sanctuary spaces. Natural limestone finishes and floor-to-ceiling frameless glazing dissolve boundaries between the home and the rugged plateau.',
    approach: 'We framed vistas toward native live oaks while utilizing deep overhangs and fluted charcoal oak millwork to modulate intense southern light into soft, diffused daylight. Every proportion responds to human intimacy within monumental scale.',
    materials: [
      'Honed Texas Cordova Limestone',
      'Charred Shou Sugi Ban Cedar',
      'Monolithic Belgian Linen',
      'Aged Patinated Bronze Hardware',
      'Continuous Micro-cement Flooring'
    ],
    specs: {
      area: '7,800 SF',
      duration: '18 Months',
      scope: 'Full Interior Architecture & Custom Millwork'
    }
  },
  {
    id: 'olmos-park-pavilion',
    title: 'Olmos Park Estate',
    subtitle: 'Mid-Century Refinement & Double-Height Living',
    location: 'San Antonio, TX',
    category: 'Full Home Renovation',
    year: '2025',
    coverImage: HERO_IMAGE,
    heroImage: HERO_IMAGE,
    gallery: [
      HERO_IMAGE,
      AFTER_IMAGE,
      PROJECT_HILLSIDE_IMAGE,
      ABOUT_DETAIL_IMAGE
    ],
    description: 'A transformative restoration of a 1968 mid-century architectural jewel in historic Olmos Park. Preserving the original steel and glass bones, our studio stripped away decades of disjointed additions to reveal an expansive, light-filled double-height living environment.',
    approach: 'The central hearth was re-imagined as a freestanding 22-foot monolithic honed limestone chimney breast that anchors the open volume. Custom low-slung upholstery in oatmeal bouclé grounds the conversation pit.',
    materials: [
      'Honed Roman Travertine',
      'Smoked European White Oak',
      'Matte Black Architectural Steel',
      'Textured Calce Cruda Limewash Plaster'
    ],
    specs: {
      area: '5,400 SF',
      duration: '14 Months',
      scope: 'Complete Interior Reconfiguration & Bespoke Furniture'
    }
  },
  {
    id: 'dominion-kitchen-sanctuary',
    title: 'The Monolith Culinary Gallery',
    subtitle: 'Calacatta Viola & Concealed Architectural Joinery',
    location: 'The Dominion, TX',
    category: 'Kitchen & Living Architecture',
    year: '2026',
    coverImage: AFTER_IMAGE,
    heroImage: AFTER_IMAGE,
    gallery: [
      AFTER_IMAGE,
      BEFORE_IMAGE,
      HERO_IMAGE,
      ABOUT_DETAIL_IMAGE
    ],
    description: 'Replacing an antiquated, segmented 1990s kitchen, this project engineered a sculptural centerpiece culinary gallery. A single 14-foot block of Italian Calacatta Viola marble anchors the room, framed by seamless handleless cabinetry that conceals prep pantries and appliances.',
    approach: 'We designed the kitchen not as a utilitarian service zone, but as an architectural gallery piece that bridges the dining room and outdoor terrace with invisible storage solutions and rhythmic timber detailing.',
    materials: [
      'Italian Calacatta Viola Marble',
      'Wire-brushed Charcoal Oak',
      'Architectural Dark Bronze Tapware',
      'Integrated Linear LED Architectural Channels'
    ],
    specs: {
      area: '1,200 SF',
      duration: '6 Months',
      scope: 'Complete Gut Renovation & Structural Re-framing'
    }
  },
  {
    id: 'alamo-heights-courtyard',
    title: 'Alamo Heights Courtyard Villa',
    subtitle: 'Limewash Plaster, Daylight & Sculptural Furniture',
    location: 'Alamo Heights, TX',
    category: 'Residential Interior',
    year: '2025',
    coverImage: ABOUT_DETAIL_IMAGE,
    heroImage: ABOUT_DETAIL_IMAGE,
    gallery: [
      ABOUT_DETAIL_IMAGE,
      PROJECT_HILLSIDE_IMAGE,
      HERO_IMAGE,
      AFTER_IMAGE
    ],
    description: 'A serene urban retreat organized around a central reflecting courtyard. Each space unfolds with quiet material honesty: hand-troweled lime plaster walls catch soft shadows throughout the day, while custom Pierre Jeanneret inspired seating evokes understated heritage.',
    approach: 'Emphasizing tactile serenity, we eliminated extraneous ornamentation, relying solely on natural light gradients, shadow play, and authentic textures to establish emotional calm.',
    materials: [
      'Hand-applied Roman Clay Plaster',
      'Solid Fluted Travertine',
      'Raw Belgian Linen Drapery',
      'Hand-cast Bronze Sconces'
    ],
    specs: {
      area: '4,100 SF',
      duration: '11 Months',
      scope: 'Interior Architecture, Custom Joinery & Art Curation'
    }
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: '01',
    number: '01',
    title: 'Full Home Design',
    subtitle: 'Comprehensive Ground-Up Interior Architecture',
    description: 'From blueprint inception through final turnkey installation. We collaborate with architects, builders, and structural engineers to shape cohesive interior architecture, material palettes, ceiling topologies, and lighting strategies.',
    deliverables: ['Interior Architectural Plans', 'Comprehensive Millwork Schedules', 'Finishes & Fixtures Specifications', 'Builder Site Coordination'],
    image: HERO_IMAGE
  },
  {
    id: '02',
    number: '02',
    title: 'Residential Interiors',
    subtitle: 'Spatial Reimagination & High-End Renovation',
    description: 'Reconfiguring existing architectural footprints into expansive, intentional living environments that honor structural integrity while introducing contemporary luxury and timeless elegance.',
    deliverables: ['Demolition & Framing Plans', 'Material Selection & Procurement', 'Custom Door & Molding Profiles', 'Window Treatment Engineering'],
    image: PROJECT_HILLSIDE_IMAGE
  },
  {
    id: '03',
    number: '03',
    title: 'Kitchen & Living',
    subtitle: 'Monumental Culinary & Social Spaces',
    description: 'Designing bespoke kitchens as monolithic architectural centerpieces. We specialize in bookmatched marble islands, hidden appliance suites, custom fluted cabinetry, and fluid transitions into living spaces.',
    deliverables: ['Cabinetry Elevations (1:20 scale)', 'Stone Scribing & Vein Alignment', 'Appliance Integration Schemes', 'Task & Accent Lighting Plans'],
    image: AFTER_IMAGE
  },
  {
    id: '04',
    number: '04',
    title: 'Bedroom & Bath',
    subtitle: 'Private Sanctuary & Spa Environments',
    description: 'Crafting intimate personal suites focused on tactile restorative calm. Monolithic stone tubs, curbless steam showers, walk-in dressing suites with concealed ambient illumination, and acoustic serenity.',
    deliverables: ['Stone & Tile Layout Details', 'Plumbing Rough-in Schedules', 'Custom Vanities & Dressing Suites', 'Acoustic Wall Paneling'],
    image: ABOUT_DETAIL_IMAGE
  },
  {
    id: '05',
    number: '05',
    title: 'Space Planning',
    subtitle: 'Circulation, Proportion & Sightlines',
    description: 'Rigorous spatial mathematics that govern sightlines, human circulation, focal anchors, and natural daylight orientation. We ensure every square foot serves intentional living.',
    deliverables: ['Furniture Layout Drawings', 'Sightline & Circulation Analysis', 'Clearance Studies', 'Scale Mockups'],
    image: HERO_IMAGE
  },
  {
    id: '06',
    number: '06',
    title: 'Custom Furniture',
    subtitle: 'One-of-a-Kind Architectural Pieces',
    description: 'Commissioned bespoke furnishings crafted by master stone masons, bronze casters, and timber artisans. Each piece is proportioned specifically to anchor your home’s architectural dimensions.',
    deliverables: ['Custom Fabrication Drawings', 'Material Samples & Prototyping', 'Artisan Studio Oversight', 'White-Glove Delivery & Placement'],
    image: ABOUT_DETAIL_IMAGE
  },
  {
    id: '07',
    number: '07',
    title: 'Interior Styling',
    subtitle: 'Curated Objects, Rare Books & Fine Art',
    description: 'The final layer that breathes soul into architecture. We source vintage European furniture, sculptural ceramics, museum-grade textiles, and advise on private art collections.',
    deliverables: ['Art Curation & Acquisition', 'Sculptural Object Placement', 'Textile & Rug Sourcing', 'Turnkey Accessorizing'],
    image: PROJECT_HILLSIDE_IMAGE
  },
  {
    id: '08',
    number: '08',
    title: '3D Visualization',
    subtitle: 'Photorealistic Architectural Pre-renders',
    description: 'Immersive, physically accurate 3D renderings and lighting simulations before construction commences. Experience materiality, shadow movement, and custom joinery with absolute fidelity.',
    deliverables: ['High-Resolution 4K Renderings', 'Natural Sun-Study Animations', 'Materiality Explorations', 'Virtual Space Walkthroughs'],
    image: AFTER_IMAGE
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation',
    duration: 'Week 1 — 2',
    summary: 'Discovery of lifestyle, site conditions, architectural scope, and aesthetic aspirations.',
    details: [
      'In-depth on-site architectural walkthrough and structural assessment',
      'Exploration of your daily rituals, entertaining style, and functional priorities',
      'Establishment of preliminary project budget, timeline milestones, and regulatory requirements'
    ]
  },
  {
    number: '02',
    title: 'Concept',
    duration: 'Week 3 — 5',
    summary: 'Formulating the overarching design philosophy, material moodboards, and spatial narrative.',
    details: [
      'Curated tactile material trays featuring stone slabs, timber finishes, and woven textiles',
      'Preliminary spatial planning sketches and circulation studies',
      'Directional mood presentations defining light, tone, and architectural character'
    ]
  },
  {
    number: '03',
    title: 'Design Development',
    duration: 'Week 6 — 10',
    summary: 'Detailed CAD drawings, millwork construction documents, and full fixture specification.',
    details: [
      'Complete architectural drawing package for builders and trade specialists',
      'Detailed joinery elevations, stone fabrication drawings, and electrical layouts',
      'Comprehensive specification binders covering every appliance, fixture, and finish'
    ]
  },
  {
    number: '04',
    title: 'Visualization',
    duration: 'Week 11 — 13',
    summary: 'Photorealistic 3D simulations showing materials, lighting, and custom furniture in situ.',
    details: [
      'Photorealistic perspective renderings under day and evening lighting conditions',
      'Physical finish reviews alongside 3D renderings to guarantee chromatic cohesion',
      'Final client sign-off on all finishes and bespoke furniture commissions'
    ]
  },
  {
    number: '05',
    title: 'Transformation',
    duration: 'Project Specific',
    summary: 'Rigorous site supervision, artisan oversight, and white-glove turnkey installation.',
    details: [
      'Weekly construction site quality audits and trade coordination',
      'Direct oversight of stone fabrication, millwork installation, and fixture alignment',
      'White-glove turnkey styling, furniture placement, and final private reveal'
    ]
  }
];

export const STATS = [
  {
    value: 12,
    suffix: '+',
    label: 'Years of Practice',
    note: 'Demo placeholder metric'
  },
  {
    value: 140,
    suffix: '+',
    label: 'Residential Projects',
    note: 'Demo placeholder metric'
  },
  {
    value: 28,
    suffix: '',
    label: 'Design Awards',
    note: 'Demo placeholder metric'
  },
  {
    value: 99,
    suffix: '%',
    label: 'Client Referrals',
    note: 'Demo placeholder metric'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Valmont Studio transformed our Hill Country property from an echoing stone shell into a deeply serene, warm architectural home. Their command of natural light and raw stone detailing is unmatched.',
    author: 'Julian & Claire Montgomery',
    role: 'Homeowners',
    location: 'Hill Country, Texas',
    project: 'Full Estate Architecture & Interior Renovation',
    year: '2026'
  },
  {
    id: 't-2',
    quote: 'Working with Valmont was an exercise in pure precision. Their architectural drawings left zero room for ambiguity on the job site. The finished culinary space feels like an art gallery.',
    author: 'Marcus Vance',
    role: 'Developer & Private Resident',
    location: 'The Dominion, San Antonio',
    project: 'Monolithic Kitchen & Living Transformation',
    year: '2025'
  },
  {
    id: 't-3',
    quote: 'They eliminated the visual noise and clutter of traditional luxury, replacing it with timeless textures, custom bronze fixtures, and breathtaking sightlines. Every morning feels like a restorative retreat.',
    author: 'Elena Rostova',
    role: 'Architect & Collector',
    location: 'Olmos Park, Texas',
    project: 'Mid-Century Architectural Restoration',
    year: '2025'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How does the design process work?',
    answer: 'Our process is structured into five intentional phases: Consultation, Concept, Design Development, 3D Visualization, and Transformation. From initial lifestyle discovery to final white-glove placement, we provide comprehensive oversight, detailed CAD documentation, and direct builder coordination to ensure effortless execution.'
  },
  {
    question: 'Do you offer in-person consultations?',
    answer: 'Yes. We begin every project with an in-depth private consultation and architectural walkthrough at your property. This allows us to inspect structural orientation, natural daylight paths, and ceiling heights while discussing your aesthetic vision and functional requirements.'
  },
  {
    question: 'Do you work with existing furniture or heirloom pieces?',
    answer: 'Absolutely. We believe soulful homes often feature a curated dialogue between contemporary architectural lines and storied provenance. During the concept phase, we evaluate your existing artwork, antiques, or heirloom pieces and thoughtfully integrate them into the new architectural narrative.'
  },
  {
    question: 'Can you work within a specific project budget?',
    answer: 'Yes. Transparency is a cornerstone of our studio. We establish a clear, itemized budget framework during the early concept phase, detailing architectural fees, construction allocations, custom millwork, and furnishings. We manage procurement meticulously to honor agreed milestones.'
  },
  {
    question: 'Do you provide 3D visualization and virtual walkthroughs?',
    answer: 'Yes. Every project includes photorealistic 3D architectural renderings and lighting studies before any construction commences. This eliminates guesswork, allowing you to preview how natural sunlight interacts with your chosen stone, timber, and fabrics.'
  },
  {
    question: 'What geographical areas do you serve?',
    answer: 'Our primary studio is located in San Antonio, Texas, serving Olmos Park, Alamo Heights, The Dominion, Boerne, and the Texas Hill Country. We also accept select residential commissions across Austin, Houston, Dallas, and destination homes nationwide.'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'post-1',
    image: HERO_IMAGE,
    title: 'Honed limestone and morning light',
    tag: '@valmont.studio'
  },
  {
    id: 'post-2',
    image: AFTER_IMAGE,
    title: 'The Monolith Island in Calacatta Viola',
    tag: '@valmont.studio'
  },
  {
    id: 'post-3',
    image: ABOUT_DETAIL_IMAGE,
    title: 'Tactile materiality and linen shadows',
    tag: '@valmont.studio'
  },
  {
    id: 'post-4',
    image: PROJECT_HILLSIDE_IMAGE,
    title: 'Sanctuary bedroom overlooking the ridge',
    tag: '@valmont.studio'
  }
];
