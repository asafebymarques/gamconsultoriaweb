import AboutSection from "@/components/About/AboutSection";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Gam Consultoria",
  description: "A GAM Consultoria se destaca como referência em excelência e inovação na indústria de Tecnologia da Informação com um compromisso inabalável com a qualidade, eficiência e vanguarda tecnológica, nossa empresa tem constantemente superado expectativas e estabelecido novos padrões no setor. Conheça como criamos valor por meio da tecnologia em www.gamconsultoria.com.br e conecte-se conosco @gamconsultoria nas redes sociais.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre Nós"
        description="A GAM Consultoria se destaca como referência em excelência e inovação na indústria de Tecnologia da Informação com um compromisso inabalável com a qualidade, eficiência e vanguarda tecnológica, nossa empresa tem constantemente superado expectativas e estabelecido novos padrões no setor. Conheça como criamos valor por meio da tecnologia em www.gamconsultoria.com.br e conecte-se conosco @gamconsultoria nas redes sociais."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSection />
    </>
  );
};

export default AboutPage;
