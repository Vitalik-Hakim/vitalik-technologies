export const metadata = {
  title: "Vitalik Technologies | Versatile digital agency",
  description: "At Vitalik Technologies, we are a versatile digital agency committed to creating tailored solutions that drive growth and elevate your brand. Our expert team specializes in web development, digital marketing, branding, and design, ensuring your business reaches its full potential in the digital landscape. We focus on innovation, adaptability, and results, offering a range of services that are both flexible and scalable to meet your unique needs. Whether you're a startup or an established business, we provide strategic support that aligns with your goals, helping you thrive in an ever-changing market.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
{/*       <Testimonials /> */}
      <Cta />
    </>
  );
}
