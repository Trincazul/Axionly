import type { Project, TeamMember, Testimonial, Stat, ProcessStep } from '@/types';

export const stats: Stat[] = [
  { value: '8', labelKey: 'stats.years', suffix: '+' },
  { value: '200', labelKey: 'stats.projects', suffix: '+' },
  { value: '50', labelKey: 'stats.clients', suffix: '+' },
  { value: '99.9', labelKey: 'stats.uptime', suffix: '%' },
];

export const projects: Project[] = [
  {
    id: 'financeflow',
    titleKey: 'portfolio.financeFlow',
    descKey: 'portfolio.financeFlowDesc',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'mediconnect',
    titleKey: 'portfolio.mediConnect',
    descKey: 'portfolio.mediConnectDesc',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    tags: ['Next.js', 'Python', 'FHIR', 'AWS'],
  },
  {
    id: 'logitrack',
    titleKey: 'portfolio.logiTrack',
    descKey: 'portfolio.logiTrackDesc',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    tags: ['React Native', 'Go', 'MongoDB', 'IoT'],
  },
  {
    id: 'edusphere',
    titleKey: 'portfolio.eduSphere',
    descKey: 'portfolio.eduSphereDesc',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
    tags: ['Vue.js', 'Django', 'WebRTC', 'ML'],
  },
  {
    id: 'shopnex',
    titleKey: 'portfolio.shopNex',
    descKey: 'portfolio.shopNexDesc',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: ['Next.js', 'Stripe', 'Elasticsearch', 'Redis'],
  },
  {
    id: 'greengrid',
    titleKey: 'portfolio.greenGrid',
    descKey: 'portfolio.greenGridDesc',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
    tags: ['React', 'Python', 'IoT', 'TensorFlow'],
  },
  {
    id: 'datavault',
    titleKey: 'portfolio.dataVault',
    descKey: 'portfolio.dataVaultDesc',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tags: ['Spark', 'Kafka', 'React', 'Snowflake'],
  },
  {
    id: 'cloudsync',
    titleKey: 'portfolio.cloudSync',
    descKey: 'portfolio.cloudSyncDesc',
    category: 'cloud',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
    tags: ['Terraform', 'AWS', 'Docker', 'K8s'],
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Marcus Whitfield',
    roleKey: 'team.ceo',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: '2',
    name: 'Sophia Reyes',
    roleKey: 'team.cto',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: '3',
    name: 'Daniel Okafor',
    roleKey: 'team.leadDev',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: '4',
    name: 'Elena Marchetti',
    roleKey: 'team.uxLead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: '5',
    name: 'James Park',
    roleKey: 'team.cloudArch',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: '6',
    name: 'Amara Johnson',
    roleKey: 'team.pm',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quoteKey: 'testimonials.t1',
    name: 'Richard Harmon',
    roleKey: 'CTO',
    company: 'NovaPay Financial',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: '2',
    quoteKey: 'testimonials.t2',
    name: 'Dr. Amelia Chen',
    roleKey: 'CEO',
    company: 'HealthBridge Inc.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: '3',
    quoteKey: 'testimonials.t3',
    name: 'Carlos Mendoza',
    roleKey: 'VP Operations',
    company: 'SwiftRoute Logistics',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: '4',
    quoteKey: 'testimonials.t4',
    name: 'Sarah Blackwood',
    roleKey: 'Founder',
    company: 'Lumina Ventures',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: '5',
    quoteKey: 'testimonials.t5',
    name: 'Thomas Zhang',
    roleKey: 'Head of Engineering',
    company: 'MarketPulse',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: '6',
    quoteKey: 'testimonials.t6',
    name: 'Patricia Wells',
    roleKey: 'CIO',
    company: 'Orion Enterprises',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
  },
];

export const processSteps: ProcessStep[] = [
  { number: '01', titleKey: 'process.step1', descKey: 'process.step1Desc', icon: 'Search' },
  { number: '02', titleKey: 'process.step2', descKey: 'process.step2Desc', icon: 'PenTool' },
  { number: '03', titleKey: 'process.step3', descKey: 'process.step3Desc', icon: 'Code2' },
  { number: '04', titleKey: 'process.step4', descKey: 'process.step4Desc', icon: 'Rocket' },
];

export const techStackItems = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Go', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'Terraform', category: 'DevOps' },
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'GraphQL', category: 'API' },
  { name: 'Kafka', category: 'Streaming' },
  { name: 'Elasticsearch', category: 'Search' },
];

export const servicesList = [
  { id: 'custom', titleKey: 'services.customSoftware', descKey: 'services.customSoftwareDesc', icon: 'Blocks' },
  { id: 'web', titleKey: 'services.webApps', descKey: 'services.webAppsDesc', icon: 'Globe' },
  { id: 'mobile', titleKey: 'services.mobile', descKey: 'services.mobileDesc', icon: 'Smartphone' },
  { id: 'cloud', titleKey: 'services.cloud', descKey: 'services.cloudDesc', icon: 'Cloud' },
  { id: 'api', titleKey: 'services.api', descKey: 'services.apiDesc', icon: 'Webhook' },
  { id: 'ai', titleKey: 'services.ai', descKey: 'services.aiDesc', icon: 'BrainCircuit' },
];
