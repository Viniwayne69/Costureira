export type LinkId = "course" | "whatsapp" | "instagram" | "location";

export type LinkVariant = "pink" | "white" | "blue";

export type HazelinkItem = {
  id: LinkId;
  title: string;
  description: string;
  href: string;
  variant: LinkVariant;
  ariaLabel: string;
};

export const linkTargets: Record<LinkId, string> = {
  course: "https://pay.kiwify.com.br/Si6u7ad",
  whatsapp: "https://chat.whatsapp.com/LGx9bfk9rguELeP8m3jmff?s=cl&p=i&mlu=4&amv=1",
  instagram: "https://www.instagram.com/cursosdecosturavanessamuniz/",
  location: "https://maps.app.goo.gl/bPbAeXgu3Znknatu9",
};

export const navigationCards: HazelinkItem[] = [
  {
    id: "course",
    title: "Nosso curso",
    description: "Aprenda corte e costura com método e prática",
    href: linkTargets.course,
    variant: "pink",
    ariaLabel: "Pedir informações sobre o curso de costura da VM",
  },
  {
    id: "whatsapp",
    title: "WhatsApp da VM",
    description: "Fale com a equipe e tire suas dúvidas",
    href: linkTargets.whatsapp,
    variant: "white",
    ariaLabel: "Abrir o WhatsApp oficial da VM Costura",
  },
  {
    id: "instagram",
    title: "Instagram",
    description: "Veja novidades, bastidores e inspirações",
    href: linkTargets.instagram,
    variant: "white",
    ariaLabel: "Abrir o Instagram da Vanessa Muniz Atelier",
  },
  {
    id: "location",
    title: "Localização",
    description: "Abra o endereço da VM no Google Maps",
    href: linkTargets.location,
    variant: "blue",
    ariaLabel: "Abrir a localização da VM Costura no mapa",
  },
];

export const quickLinks = navigationCards;
