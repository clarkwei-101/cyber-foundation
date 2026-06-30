// Society Information (Configuration Only - Translations in i18n.ts)
export const societyInfo: {
  name: { en: string; zh: string; short: string }
  tagline: string
  description: string
  founded: string
} = {
  name: {
    en: 'Cyber Foundation',
    zh: '香港科技大学AI×Sci-Fi社',
    short: 'HKUSTSFAIC'
  },
  tagline: 'AI × Science Fiction × Future',
  description: '连接前沿AI技术与想象力驱动的科幻创作',
  founded: '2026'
}

// Navigation Links
export const navLinks: Array<{ label: string; href: string; labelZh: string }> = [
  { label: 'About', href: '/about', labelZh: '社团架构' },
  { label: 'Activities', href: '/activities', labelZh: '活动' },
  { label: 'Projects', href: '/projects', labelZh: '项目' },
  { label: 'Join Us', href: '/join', labelZh: '加入我们' },
  { label: 'Social', href: '/social', labelZh: '官方账号' },
]

// Social Media Links
export const socialLinks: Array<{
  platform: string
  icon: string
  url: string
  color: string
}> = [
  {
    platform: 'Bilibili',
    icon: 'bilibili',
    url: 'https://bilibili.com',
    color: '#00A1D6'
  },
  {
    platform: 'Instagram',
    icon: 'instagram',
    url: 'https://instagram.com',
    color: '#E4405F'
  },
  {
    platform: '小红书',
    icon: 'xiaohongshu',
    url: 'https://xiaohongshu.com',
    color: '#FF2442'
  },
  {
    platform: '抖音',
    icon: 'douyin',
    url: 'https://douyin.com',
    color: '#161616'
  },
  {
    platform: 'YouTube',
    icon: 'youtube',
    url: 'https://youtube.com',
    color: '#FF0000'
  },
  {
    platform: 'GitHub',
    icon: 'github',
    url: 'https://github.com',
    color: '#FFFFFF'
  },
  {
    platform: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://linkedin.com',
    color: '#0A66C2'
  },
]

// Committee Members (Sample Data - Translations in i18n.ts)
export const committeeMembers: Array<{
  name: string
  role: string
  roleZh: string
  category: 'tech' | 'creative' | 'both'
  bio: string
  bioZh: string
}> = [
  {
    name: 'AI Co-Chair',
    role: 'AI Affairs Co-Chair',
    roleZh: 'AI事务联席主席',
    category: 'tech',
    bio: 'Responsible for strategic planning and execution of AI application direction',
    bioZh: '负责AI应用方向的战略规划与执行'
  },
  {
    name: 'Sci-Fi Co-Chair',
    role: 'Sci-Fi Affairs Co-Chair',
    roleZh: '科幻事务联席主席',
    category: 'creative',
    bio: 'Responsible for creative cultivation and event organization of the sci-fi division',
    bioZh: '负责科幻分会的创作培育与活动组织'
  },
  {
    name: 'Secretary',
    role: 'Secretary',
    roleZh: '秘书',
    category: 'both',
    bio: 'Coordinate society operations and handle daily affairs',
    bioZh: '协调社团运作，处理日常事务'
  },
  {
    name: 'Treasurer',
    role: 'Treasurer',
    roleZh: '财务',
    category: 'both',
    bio: 'Manage society budget and financial operations',
    bioZh: '管理社团预算与资金运作'
  },
  {
    name: 'Tech Lead',
    role: 'Technology Lead',
    roleZh: '技术负责人',
    category: 'tech',
    bio: 'Lead technical project development and code review',
    bioZh: '主导技术项目开发与代码审查'
  },
  {
    name: 'Creative Lead',
    role: 'Creative Lead',
    roleZh: '创意负责人',
    category: 'creative',
    bio: 'Plan sci-fi creation and publishing work',
    bioZh: '策划科幻创作与出版工作'
  },
]

// Activities Timeline
export const activities: {
  past: Array<{
    id: number
    title: string
    titleZh: string
    date: string
    description: string
    category: 'tech' | 'creative'
    image: string
  }>
  upcoming: Array<{
    id: number
    title: string
    titleZh: string
    date: string
    description: string
    category: 'tech' | 'creative'
    image: string
  }>
} = {
  past: [
    {
      id: 1,
      title: 'Vibe Coding Workshop #1',
      titleZh: 'Vibe Coding工作坊 第一期',
      date: '2026-09-15',
      description: '使用Cursor构建你的第一个AI应用',
      category: 'tech',
      image: '/images/placeholder.jpg'
    },
    {
      id: 2,
      title: 'Sci-Fi Reading Circle',
      titleZh: '科幻读书会 第一期',
      date: '2026-09-28',
      description: '共读《三体》与科幻文学入门',
      category: 'creative',
      image: '/images/placeholder.jpg'
    },
  ],
  upcoming: [
    {
      id: 3,
      title: 'AI Hackathon 2026',
      titleZh: 'AI黑客松 2026',
      date: '2026-10-20',
      description: '48小时AI应用开发挑战赛',
      category: 'tech',
      image: '/images/placeholder.jpg'
    },
    {
      id: 4,
      title: 'Sci-Fi Writing Workshop #1',
      titleZh: '科幻写作工作坊 第一期',
      date: '2026-10-25',
      description: '短篇小说创作入门：从构想到完稿',
      category: 'creative',
      image: '/images/placeholder.jpg'
    },
  ]
}

// Projects
export const projects: Array<{
  id: number
  name: string
  nameZh: string
  description: string
  status: 'active' | 'completed' | 'planning'
  tech: string[]
  github?: string
  category: 'tech' | 'creative'
}> = [
  {
    id: 1,
    name: 'PvZ AI Agent',
    nameZh: '植物大战僵尸AI',
    description: '使用强化学习训练AI玩家通关游戏',
    status: 'active',
    tech: ['Python', 'PyTorch', 'Gymnasium', 'PPO'],
    github: 'https://github.com',
    category: 'tech'
  },
  {
    id: 2,
    name: 'Digital Circus AI',
    nameZh: '数字马戏团AI模拟',
    description: 'AI驱动的虚拟角色互动模拟系统',
    status: 'active',
    tech: ['Three.js', 'React', 'LLM'],
    github: 'https://github.com',
    category: 'tech'
  },
  {
    id: 3,
    name: 'Sci-Fi Journal',
    nameZh: '科幻期刊网站',
    description: '在线发表与阅读科幻短篇作品',
    status: 'planning',
    tech: ['Next.js', 'MDX', 'Vercel'],
    github: 'https://github.com',
    category: 'creative'
  },
]

// Contact Information
export const contactInfo = {
  email: 'contact@hkustsfaic.org',
  discord: 'https://discord.gg',
  wechat: 'CyberFoundationHK',
}

// Membership Link
export const membershipLink = 'https://forms.example.com/join'
