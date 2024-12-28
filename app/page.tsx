import AboutMe from "@/components/about-me";
import { ContactMe } from "@/components/contact";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import WhatsAppChat from "@/lib/WhatsAppChat";
import WorkExperience from "@/components/work-experience";
import BackToTop from "@/lib/back-to-top";
import GTranslateWidget from "@/lib/translator";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="w-full max-w-7xl mx-auto">
        <AboutMe />
        <WorkExperience />
        <Services />
      </div>
      <Testimonials />
      <ContactMe />
      <WhatsAppChat />
      <BackToTop />
      <GTranslateWidget />
      <Footer />
    </main>
  );
}
