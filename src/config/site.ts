export interface SiteConfig {
  domain: string;
  name: string;
  description: string;
  themeColor: string;
  backgroundColor: string;
}

export const getSiteConfig = (): SiteConfig => {
  return {
    domain: import.meta.env.VITE_SITE_DOMAIN || 'http://localhost:5173',
    name: import.meta.env.VITE_SITE_NAME || 'AI株式診断サービス',
    description: import.meta.env.VITE_SITE_DESCRIPTION || '完全無料・登録不要・クレジットカード不要のAI株式診断サービス。AIが株式市場を分析し、詳細なレポートを数秒で提供。',
    themeColor: '#22D3EE',
    backgroundColor: '#0B1120'
  };
};

export const siteConfig = getSiteConfig();
