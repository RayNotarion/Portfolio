import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/RayNotarion",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/RayNotarion",
    icon: FaGithub,
  },
  {
    name: "JobStreet",
    url: "https://ph.jobstreet.com/profiles/raymund-notarion-1F3TqRjj1W",
    icon: MdWork,
  },
];
