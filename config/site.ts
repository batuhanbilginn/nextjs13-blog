export interface SiteConfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  socialLinks: {
    twitter: string;
    youtube: string;
    github: string;
    linkedin: string;
    instagram: string;
  };
}

const siteConfig: SiteConfig = {
  siteName: "Explorer",
  description:
    "A minimal and lovely travel blog which shares experiences and citiest around the world!",
  currentlyAt: "Budapest",
  socialLinks: {
    twitter: "https://twitter.com/makrdev",
    youtube: "https://youtube.com/@makrdev",
    github: "https://github.com/batuhanbilginn",
    linkedin: "https://linkedin.com/in/batuhanbilgin",
    instagram: "https://instagram.com/batuhanbilginn",
  },
};

export default siteConfig;
