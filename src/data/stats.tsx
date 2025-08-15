import { BsShieldFill, BsCameraVideoFill, BsTools } from "react-icons/bs";

import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "15+",
    icon: <BsShieldFill size={34} className="text-blue-500" />,
    description:
      "Lat doświadczenia w branży teleinformatycznej i systemach bezpieczeństwa.",
  },
  {
    title: "500+",
    icon: <BsCameraVideoFill size={34} className="text-green-600" />,
    description:
      "Zrealizowanych projektów systemów monitoringu i kontroli dostępu.",
  },
  {
    title: "24/7",
    icon: <BsTools size={34} className="text-orange-500" />,
    description:
      "Wsparcie techniczne i serwis dla wszystkich naszych instalacji.",
  },
];
