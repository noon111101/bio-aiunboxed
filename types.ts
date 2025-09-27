
export interface SocialLinks {
  instagram: string;
  tiktok: string;
  youtube: string;
}

export interface ResourceLink {
  name: string;
  url: string;
  icon: 'Skool' | 'Globe' | 'Mail';
}

export interface ShowcaseItem {
    title: string;
    imageUrl: string;
}

export type AIToolCategory = 'Image' | 'Video' | 'Automation' | 'Assistant' | 'Audio';

export interface AITool {
  name: string;
  iconUrl: string;
  category: AIToolCategory[];
  link: string;
}

export interface PortfolioData {
  name: string;
  subtitle: string;
  brand: string;
  tagline: string;
  email: string;
  avatarUrl: string;
  socials: SocialLinks;
  community: ResourceLink;
  resources: ResourceLink[];
  copyright: string;
  showcase: ShowcaseItem[];
  aiTools: AITool[];
}