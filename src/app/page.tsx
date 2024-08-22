import Hero from "@/components/Hero";
import Services from "@/components/services/page";
import Portfolio from "@/components/portfolio/page";
import Team from "@/components/team/page";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
    </>
  );
}
