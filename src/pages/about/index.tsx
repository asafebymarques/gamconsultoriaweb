import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
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
    </>
  );
};

export default AboutPage;
