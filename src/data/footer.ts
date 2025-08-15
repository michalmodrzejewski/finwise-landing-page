import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading:
    "Profesjonalne systemy teleinformatyczne - kompleksowa obsługa instalacji słaboprądowych.",
  quickLinks: [
    {
      text: "O firmie",
      url: "#about",
    },
    {
      text: "Oferta",
      url: "#offer",
    },
    {
      text: "Kontakt",
      url: "#contact",
    },
  ],
  email: "biuro@azcom.net.pl",
  telephone: "+48 511 216 625",
  socials: {
    // github: 'https://github.com',
    // x: 'https://twitter.com/x',
    // twitter: 'https://twitter.com/Twitter',
    // facebook: 'https://facebook.com',
    // youtube: 'https://youtube.com',
    // linkedin: 'https://www.linkedin.com',
    // threads: 'https://www.threads.net',
    // instagram: 'https://www.instagram.com',
  },
};
