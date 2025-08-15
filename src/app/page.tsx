import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Benefits />

        <Section
          id="about"
          title="O firmie"
          description="Poznaj naszą firmę i doświadczenie w branży teleinformatycznej."
        >
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Jesteśmy firmą świadczącą usługi w zakresie instalacji
              słaboprądowych. Od wielu lat działamy na rynku w obszarze ochrony
              przeciwpożarowej lasów, radiokomunikacji, instalacji alarmowych,
              automatyki oraz monitoringu.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Wieloletnie doświadczenie, odpowiednie szkolenia oraz
              profesjonalny sprzęt pozwalają zapewnić naszym Klientom
              kompleksową obsługę podczas doradztwa, montażu oraz serwisu.
              Współpracujemy z instytucjami, przedsiębiorstwami oraz klientami
              indywidualnymi.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Ty Tworzysz ideę, my ją realizujemy
                </h4>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Technologia jest naszą pasją
                </h4>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Od lat pracujemy na Twoją satysfakcję
                </h4>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="testimonials"
          title="Co mówią nasi klienci"
          description="Poznaj opinie tych, którzy nam zaufali."
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />

        <CTA />

        <Section
          id="contact"
          title="Contact"
          description="Get in touch with us for any questions or support."
        >
          <Contact />
        </Section>
      </Container>
    </>
  );
};

export default HomePage;
