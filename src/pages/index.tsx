import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Blog as BlogEntity } from "@/types/blog";
import { getBlogs } from "./blog/utils/getBlogs";

export async function getStaticProps() {
  const blogsData = await getBlogs();
  return {
    props: {
      blogsData
    }
  };
}

export default function Home(props: { blogsData: [] }) {
  const blogs = props.blogsData.map((blogData) => BlogEntity.fromMap(blogData))

  /**
   *  <Pricing />
      <Blog blogs={blogs}/>
      <Testimonials />
   */

  return (
    <>
      <ToastContainer />
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Contact />
    </>
  );
}
