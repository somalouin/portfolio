import { experiences } from "../_constants/experiences";
import { ExperienceItem } from "./ExperienceItem";

export const ExperienceSection = () => {
  return (
    <div className="py-10 w-full px-4 md:px-8">
      <p className="text-lg font-bold">experience</p>
      <section className="pt-4">
        <div className="relative w-full overflow-x-auto overflow-y-visible">
          <div className="flex flex-row gap-8 md:gap-12 relative min-w-fit">
            <div className="absolute top-2 left-2 md:left-4 right-4 md:right-8 h-0.5 bg-gray-700"></div>
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                company={exp.company}
                roles={exp.roles}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
