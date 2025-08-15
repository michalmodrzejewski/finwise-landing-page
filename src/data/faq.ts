import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `Jakie systemy monitoringu oferuje ${siteDetails.siteName}?`,
    answer:
      "Oferujemy kompleksowe systemy CCTV, w tym kamery IP, systemy nagrywania, monitoring domowy i przemysłowy. Wszystkie nasze rozwiązania są dostosowane do indywidualnych potrzeb klienta.",
  },
  {
    question: `Czy ${siteDetails.siteName} wykonuje modernizacje istniejących instalacji?`,
    answer:
      "Tak, specjalizujemy się w adaptacjach i modernizacjach istniejących systemów alarmowych, monitoringu i kontroli dostępu zgodnie z najnowszymi standardami technicznymi.",
  },
  {
    question: "Jakie systemy kontroli dostępu instalujecie?",
    answer:
      "Instalujemy systemy kontroli dostępu z kartami, kodami PIN, biometrią oraz szlabany i słupki wjazdowe. Oferujemy rozwiązania dla obiektów jedno- i wielobudynkowych.",
  },
  {
    question: "Czy świadczycie usługi serwisowe?",
    answer:
      "Oferujemy pełny zakres usług serwisowych - od konserwacji systemów monitoringu po serwis sprzętu radiokomunikacyjnego i sieci komputerowych.",
  },
  {
    question: "Jak długo trwa realizacja projektu?",
    answer:
      "Czas realizacji zależy od skali projektu. Małe instalacje realizujemy w ciągu kilku dni, większe projekty w ciągu 2-4 tygodni. Każdy projekt jest indywidualnie planowany.",
  },
];
