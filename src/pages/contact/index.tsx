'use client'
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {

  return (
    <>
      <Breadcrumb
        pageName="Contate-nos"
        description="Se você tiver alguma dúvida, sugestão ou desejar mais informações sobre nossos serviços, não hesite em entrar em contato conosco. Nossa equipe está pronta para atendê-lo e oferecer a melhor solução para suas necessidades."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
