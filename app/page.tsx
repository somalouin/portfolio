import type { Metadata } from "next";
import { AboutSection } from "./_components/AboutSection";
import { ExperienceSection } from "./_components/ExperienceSection";
import { Header } from "./_components/Header";
import { RotatingCube } from "./_components/RotatingCube";
import { StackSection } from "./_components/StackSection";

export const metadata: Metadata = {
  title: "somalouin",
  description: "Serge-Olivier Malouin's portfolio website",
};

export default function Page() {
  return (
    <div className="min-h-full text-black">
      <Header />
      <div className="px-4 py-8">
        <RotatingCube />
      </div>
      <AboutSection />
      <ExperienceSection />
      <StackSection />
    </div>
  );
}
