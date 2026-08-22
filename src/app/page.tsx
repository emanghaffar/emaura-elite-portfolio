import About from "@/components/About";
import AddOns from "@/components/AddOns";
import Collaborations from "@/components/Collaborations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import ServicesAuto from "@/components/ServicesAuto";
import WhatsAppButton from "@/components/WhatsAppButton";
import WorkShowcase from "@/components/WorkShowcase";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Collaborations />
        <WorkShowcase />
        <ServicesAuto />
        <Pricing />
        <AddOns />
        <About />
        <Process />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}