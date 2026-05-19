import logoTotusAsset from "@/assets/lideranca/logos/logo-totus-asset.png";
import logoLocamotofacil from "@/assets/lideranca/logos/logo-locamotofacil.png";
import logoLocacarrofacil from "@/assets/lideranca/logos/logo-locacarrofacil.png";
import logoTotusCenografia from "@/assets/lideranca/logos/logo-totus-cenografia.png";
import photoTotusCenografia from "@/assets/lideranca/cases/totus-cenografia-bgs.jpeg";
import photoLigaCancer from "@/assets/lideranca/cases/liga-cancer-henrique-prata.jpeg";
import photoDigtoten from "@/assets/lideranca/cases/digtoten-jack-correa.jpeg";
import photoGpn from "@/assets/lideranca/cases/gpn-tv-brasil.jpeg";
import photoFestival from "@/assets/lideranca/cases/festival-brasilia-music.jpeg";
import photoSaborSaber from "@/assets/lideranca/cases/sabor-do-saber-rubem-alves.jpeg";

export type TimelinePhoto = {
  src: string;
  captionKey: string;
};

export type TimelineEntrySpec = {
  year: string;
  id: string;
  paragraphCount: number;
  siteUrl?: string;
  videoUrl?: string;
  logo?: string;
  logoInvert?: boolean;
  photos?: TimelinePhoto[];
};

/** Config da timeline — paridade com locamotofacil.com.br/lideranca-estrategica */
export const LIDERANCA_TIMELINE_SPEC: TimelineEntrySpec[] = [
  {
    year: "2026",
    id: "y2026",
    paragraphCount: 2,
    siteUrl: "https://totusasset.lovable.app",
    logo: logoTotusAsset,
    logoInvert: true,
  },
  {
    year: "2025",
    id: "y2025",
    paragraphCount: 2,
    siteUrl: "https://www.locamotofacil.com.br",
    logo: logoLocamotofacil,
  },
  {
    year: "2024",
    id: "y2024",
    paragraphCount: 2,
    siteUrl: "https://www.locacarrofacil.com.br",
    logo: logoLocacarrofacil,
  },
  {
    year: "2023",
    id: "y2023",
    paragraphCount: 2,
    videoUrl: "https://player.vimeo.com/video/1190656947?h=1e610e8173",
    logo: logoTotusCenografia,
    photos: [{ src: photoTotusCenografia, captionKey: "leadership.y2023.photo0.caption" }],
  },
  {
    year: "2020",
    id: "y2020",
    paragraphCount: 3,
    videoUrl:
      "https://player.vimeo.com/video/508645636?badge=0&autopause=0&player_id=0&app_id=58479",
    photos: [{ src: photoLigaCancer, captionKey: "leadership.y2020.photo0.caption" }],
  },
  {
    year: "2012",
    id: "y2012",
    paragraphCount: 2,
    videoUrl:
      "https://player.vimeo.com/video/1190655769?badge=0&autopause=0&player_id=0&app_id=58479",
    photos: [{ src: photoDigtoten, captionKey: "leadership.y2012.photo0.caption" }],
  },
  {
    year: "2005",
    id: "y2005",
    paragraphCount: 2,
    videoUrl:
      "https://player.vimeo.com/video/631008048?badge=0&autopause=0&player_id=0&app_id=58479",
    photos: [{ src: photoGpn, captionKey: "leadership.y2005.photo0.caption" }],
  },
  {
    year: "2004",
    id: "y2004",
    paragraphCount: 5,
    videoUrl: "https://player.vimeo.com/video/1192106938",
  },
  {
    year: "2003",
    id: "y2003",
    paragraphCount: 2,
    videoUrl:
      "https://player.vimeo.com/video/570418042?badge=0&autopause=0&player_id=0&app_id=58479",
    photos: [{ src: photoFestival, captionKey: "leadership.y2003.photo0.caption" }],
  },
  {
    year: "1998",
    id: "y1998",
    paragraphCount: 2,
    videoUrl: "https://player.vimeo.com/video/1192092523",
    photos: [{ src: photoSaborSaber, captionKey: "leadership.y1998.photo0.caption" }],
  },
  { year: "1994", id: "y1994", paragraphCount: 2 },
  { year: "1991", id: "y1991", paragraphCount: 2 },
];
