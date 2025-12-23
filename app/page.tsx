import type { Metadata } from "next";
import { AboutSection } from "./_components/AboutSection";
import { ExperienceSection } from "./_components/ExperienceSection";
import { Header } from "./_components/Header";
import { StackSection } from "./_components/StackSection";

export const metadata: Metadata = {
  title: "somalouin",
  description: "Serge-Olivier Malouin's portfolio website",
};

export default function Page() {
  return (
    <div className="min-h-full text-black">
      <Header />
      <div className="pt-10">
        <AboutSection />
        <ExperienceSection />
        <StackSection />
      </div>
    </div>
  );
}
