import type { PortfolioData, AITool } from './types';

const aiTools: AITool[] = [
  {
    name: 'Midjourney',
    iconUrl: 'https://gptnews.com.br/wp-content/uploads/2025/07/Midjourney-GPTNEWS.png',
    category: ['Image'],
    link: 'https://www.midjourney.com/',
  },
  {
    name: 'ChatGPT',
    iconUrl: 'https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg',
    category: ['Assistant'],
    link: 'https://openai.com/chatgpt',
  },
  {
    name: 'HeyGen',
    iconUrl: 'https://app.heygen.com/icons/heygen/wordmark/svg/HeyGen_Logo_Prism_Black.svg',
    category: ['Video'],
    link: 'https://app.heygen.com/invite/GJLG6C6C',
  },
  {
    name: 'Zapier',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Zapier-logo.png',
    category: ['Automation'],
    link: 'https://zapier.com/',
  },
  {
    name: 'Make',
    iconUrl: 'https://logosandtypes.com/wp-content/uploads/2022/04/Make.png',
    category: ['Automation'],
    link: 'https://www.make.com/en/register?pc=aiunboxed',
  },
  {
    name: 'n8n',
    iconUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png',
    category: ['Automation'],
    link: 'https://n8n.io/',
  },
  {
    name: 'Higgsfield',
    iconUrl: 'https://media.licdn.com/dms/image/v2/D4D0BAQHRtj-PrkO-xA/company-logo_200_200/B4DZXtWv90HAAM-/0/1743443919176/higgsfield_logo?e=2147483647&v=beta&t=mUEAFS35tdP_mYBWVun5740_fxCWrzqmxA20slKrmq4',
    category: ['Image', 'Video'],
    link: 'https://goto.higgsfield.ai/vPKGNd',
  },
  {
    name: 'Gemini',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/1200px-Google_Gemini_logo.svg.png',
    category: ['Assistant'],
    link: 'https://gemini.google.com/',
  },
  {
    name: 'Claude',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/2048px-Claude_AI_symbol.svg.png',
    category: ['Assistant'],
    link: 'https://claude.ai/',
  },
  {
    name: 'Ausynclab',
    iconUrl: 'https://ausynclab.io/_next/image?url=%2Fimages%2Flogo.png&w=96&q=100',
    category: ['Audio'],
    link: 'https://ausynclab.io?ref=aff-fs7d-xt506',
  },
];


export const PORTFOLIO_DATA: PortfolioData = {
  name: 'AI Unboxed',
  subtitle: 'Mở Hộp AI',
  brand: 'AI Unboxed | Mở Hộp AI',
  tagline: 'Kết nối ý tưởng với công cụ AI, sáng tạo hình ảnh, video và tự động hoá.',
  email: 'phtrieummo@gmail.com',
  avatarUrl: 'https://ai-unboxed.com/assets/ai-logo-BfORuCYA.png',
  socials: {
    instagram: 'https://www.instagram.com/ai_unb0xed/',
    tiktok: 'https://www.tiktok.com/@aiunbo_xed',
    youtube: 'https://www.youtube.com/@M%E1%BB%9FH%E1%BB%99pAI',
  },
  community: { name: 'Cộng đồng chia sẻ kiến thức AI', url: 'https://www.skool.com/ai-unboxed-1490/about?ref=9873511ed8174b1c844ad1678f8cbc16', icon: 'Skool' },
  resources: [
    { name: 'Blog cá nhân', url: 'https://ai-unboxed.com/', icon: 'Globe' },
  ],
  copyright: '© 2025 AI Unboxed — Mở Hộp AI',
  showcase: [
    {
        title: '3D & Texture AI Effect',
        imageUrl: 'https://assets.skool.com/f/a59d2bd844594b988b4934f97c036510/d6a5b332771b4f0e9972c9b5b7406e257859b61a9a9348149daae6330d5c34be',
    },
    {
        title: 'AI Model',
        imageUrl: 'https://assets.skool.com/f/a59d2bd844594b988b4934f97c036510/f24f304dffd4490aa7042b5f587326e3f07503b06ba0471983d51a5f2f329d42',
    },
    {
        title: 'Outfit Switch & Multi-Pose',
        imageUrl: 'https://assets.skool.com/f/a59d2bd844594b988b4934f97c036510/f2a8d7ee9ef64299874ae3676274dfd0dddd7abf579d4749821db356cd0f2a52',
    },
    {
        title: 'Tạo AI Agent Cơ Bản',
        imageUrl: 'https://assets.skool.com/f/a59d2bd844594b988b4934f97c036510/017d0bd9dd11496093816e46e4a52f6f06689aa3c4584864a6cbebd556395d33',
    },
    {
        title: 'AI Clone Yourself',
        imageUrl: 'https://assets.skool.com/f/a59d2bd844594b988b4934f97c036510/5897480c4f76489da83a742ce6b7abf415d863c915884d07a51a82c1dfbb54bf',
    }
  ],
  aiTools,
};