import { AboutSection } from "../components/AboutSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { StackSection } from "../components/StackSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-full flex items-center justify-center font-mono py-8 text-black">
      <div id="content" className="px-4 md:w-3/5 lg:w-1/3 xl:w-1/2">
        <Header />

        <AboutSection />

        <ExperienceSection />

        <StackSection />

        <Footer />
      </div>
    </div>
  );
}
