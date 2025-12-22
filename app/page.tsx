import type { Metadata } from "next";
import { AboutSection } from "./_components/AboutSection";
import { ExperienceSection } from "./_components/ExperienceSection";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { StackSection } from "./_components/StackSection";

export const metadata: Metadata = {
  title: "somalouin",
  description: "Serge-Olivier Malouin's portfolio website",
};

export default function Page() {
  return (
    <div className="min-h-full flex items-center justify-center font-mono py-8 text-black">
      <div className="px-4 md:w-3/5 lg:w-1/3 xl:w-1/3">
        <Header />
        <AboutSection />
        <ExperienceSection />
        <StackSection />
        <Footer />
      </div>
    </div>
  );
}
