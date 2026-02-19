export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
    gallery?: string[]; // Optional array for additional project images
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'Northface Technology Hub',
        category: 'Web Design',
        description: 'Modern tech company website with dark theme and electric blue accents. Features clean geometric layouts and professional corporate branding.',
        image: '/images/portfolio_project_1.png',
        tags: ['Web Design', 'UI/UX', 'Branding'],
        gallery: [
            '/images/northface_dashboard.png',
            '/images/northface_mobile.png',
            '/images/northface_services.png'
        ]
    },
    {
        id: '2',
        title: 'Lifeline Conductive Therapy',
        category: 'Web Design',
        description: 'Healthcare therapy business website with professional medical branding and clean modern interface.',
        image: '/images/portfolio_project_2.png',
        tags: ['Web Design', 'Healthcare', 'UI/UX'],
        gallery: [
            '/images/lif_about.png',
            '/images/lif_service.png'
        ]
    },
    {
        id: '3',
        title: 'SWRVN Clothing',
        category: 'Web Design',
        description: 'Streetwear e-commerce platform with bold red and black color scheme and urban fashion aesthetic.',
        image: '/images/portfolio_project_3.png',
        tags: ['E-commerce', 'Web Design', 'Fashion'],
        gallery: [
            '/images/swv_collection.png',
            '/images/swv_product.png'
        ]
    },
    {
        id: '4',
        title: 'Nexus Corporate Identity',
        category: 'Branding',
        description: 'Complete brand identity system with teal and cyan color palette for professional business.',
        image: '/images/portfolio_project_4.png',
        tags: ['Branding', 'Identity', 'Print Design'],
        gallery: [
            '/images/nex_guide.png',
            '/images/nex_stationery.png'
        ]
    },
    {
        id: '5',
        title: 'Creative Agency Portfolio',
        category: 'Web Design',
        description: 'Dynamic agency website with vibrant orange accents and modern tech startup aesthetic.',
        image: '/images/portfolio_project_5.png',
        tags: ['Web Design', 'Agency', 'UI/UX'],
        gallery: [
            '/images/agy_team.png',
            '/images/agy_process.png'
        ]
    },
    {
        id: '6',
        title: 'Neo-Lumina E-commerce',

        category: 'Web Design',
        description: 'Modern e-commerce platform with dark theme and electric blue call-to-action elements.',
        image: '/images/portfolio_project_6.png',
        tags: ['E-commerce', 'Web Design', 'UI/UX'],
        gallery: [
            '/images/neo_cart.png',
            '/images/neo_product.png'
        ]
    },
    {
        id: '7',
        title: 'Quantum Fintech App',
        category: 'App Design',
        description: 'Modern fintech mobile app UI design with dark theme, clean dashboard interface, and financial data visualization.',
        image: '/images/portfolio_project_7.png',
        tags: ['App Design', 'Fintech', 'UI/UX'],
        gallery: [
            '/images/qtm_transfer.png',
            '/images/qtm_stats.png'
        ]
    },
    {
        id: '8',
        title: 'Velvet Fork Restaurant',
        category: 'Web Design',
        description: 'Elegant dark-themed restaurant website with digital menu and reservation system.',
        image: '/images/portfolio_project_8.png',
        tags: ['Web Design', 'Hospitality', 'UI/UX'],
        gallery: [
            '/images/vlf_menu.png',
            '/images/vlf_reserve.png'
        ]
    },
    {
        id: '9',
        title: 'Apollo Fitness Tracker',
        category: 'App Design',
        description: 'High-energy fitness app interface with workout tracking and health analytics dashboard.',
        image: '/images/portfolio_project_9.png',
        tags: ['App Design', 'Health', 'UI/UX'],
        gallery: [
            '/images/apl_activity.png',
            '/images/apl_map.png'
        ]
    },
    {
        id: '10',
        title: 'Onyx Real Estate',
        category: 'Web Design',
        description: 'Luxury real estate property listing platform with high-end dark aesthetic and immersive gallery view.',
        image: '/images/portfolio_project_10.png',
        tags: ['Web Design', 'Real Estate', 'UI/UX'],
        gallery: [
            '/images/onx_interior.png',
            '/images/onx_agent.png'
        ]
    },
    {
        id: '11',
        title: 'Flux Logo Collection',
        category: 'Graphic Design',
        description: 'Minimalist geometric logo collection showcasing modern brand identity design principles.',
        image: '/images/portfolio_graphic_1.png',
        tags: ['Logo Design', 'Branding', 'Identity'],
        gallery: [
            '/images/flx_sheet.png',
            '/images/flx_sign.png'
        ]
    },
    {
        id: '12',
        title: 'Vortex Event Posters',
        category: 'Graphic Design',
        description: 'Series of modern event posters featuring bold typography and vibrant gradient visuals.',
        image: '/images/portfolio_graphic_2.png',
        tags: ['Print Design', 'Events', 'Typography'],
        gallery: [
            '/images/vrx_poster.png',
            '/images/vrx_street.png'
        ]
    },
];
