import AboutMe from "@/components/about-me";
import { ContactMe } from "@/components/contact";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import WorkExperience from "@/components/work-experience";
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
      <Footer />
    </main>
  );
}
