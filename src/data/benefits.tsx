import {
  FiCamera,
  FiShield,
  FiRadio,
  FiWifi,
  FiTruck,
  FiKey,
  FiHome,
  FiSettings,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Systemy CCTV i Monitoring",
    description:
      "Profesjonalne systemy monitoringu wizyjnego dla obiektów przemysłowych, komercyjnych i domowych. Oferujemy kompleksowe rozwiązania z najnowszymi technologiami.",
    bullets: [
      {
        title: "Monitoring obiektów",
        description:
          "Zaawansowane systemy kamer IP z nagrywaniem i analizą obrazu.",
        icon: <FiCamera size={26} />,
      },
      {
        title: "Monitoring domowy",
        description:
          "Bezpieczeństwo Twojego domu z inteligentnymi kamerami i powiadomieniami.",
        icon: <FiHome size={26} />,
      },
      {
        title: "Integracja systemów",
        description:
          "Łączenie monitoringu z innymi systemami bezpieczeństwa w jednej platformie.",
        icon: <FiSettings size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
  {
    title: "Systemy Alarmowe i Kontrola Dostępu",
    description:
      "Nowoczesne systemy zabezpieczeń chroniące Twój majątek. Od prostych rozwiązań po zaawansowane systemy zintegrowane.",
    bullets: [
      {
        title: "Systemy przewodowe i bezprzewodowe",
        description:
          "Elastyczne rozwiązania dostosowane do specyfiki obiektu i wymagań klienta.",
        icon: <FiShield size={26} />,
      },
      {
        title: "Kontrola dostępu",
        description: "Zabezpieczenie wejść z kartami, kodami PIN i biometrią.",
        icon: <FiKey size={26} />,
      },
      {
        title: "Adaptacje i modernizacje",
        description:
          "Ulepszanie istniejących instalacji zgodnie z najnowszymi standardami.",
        icon: <FiSettings size={26} />,
      },
    ],
    imageSrc: "/images/mockup-2.webp",
  },
  {
    title: "Radiokomunikacja i Sieci",
    description:
      "Specjalizujemy się w systemach łączności bezprzewodowej i infrastrukturze sieciowej. Budujemy niezawodne połączenia dla firm i instytucji.",
    bullets: [
      {
        title: "Radiokomunikacja",
        description:
          "Konserwacja i serwis sprzętu łączności, budowa systemów antenowych.",
        icon: <FiRadio size={26} />,
      },
      {
        title: "Sieci komputerowe",
        description: "Przewodowe i bezprzewodowe sieci LAN/WLAN, serwerownie.",
        icon: <FiWifi size={26} />,
      },
      {
        title: "Oświetlenie specjalne",
        description:
          "Belki sygnalizacyjne, generatory dźwięku dla pojazdów uprzywilejowanych.",
        icon: <FiTruck size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
];
