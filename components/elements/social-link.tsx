import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const SocialLink = ({ platform, link }: { platform: string; link: string }) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook size="18" />;
      case "twitter":
        return <Twitter size="18" />;
      case "instagram":
        return <Instagram size="18" />;
      case "youtube":
        return <Youtube size="18" />;
      case "linkedin":
        return <Linkedin size="18" />;
      case "github":
        return <Github size="18" />;
    }
  };

  return <Link href={link}>{getIcon(platform)}</Link>;
};

export default SocialLink;
