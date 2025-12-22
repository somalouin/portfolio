interface IExperienceItemProps {
  company: string;
  roles: Array<{
    title: string;
    period: string;
  }>;
}

export const ExperienceItem = ({ company, roles }: IExperienceItemProps) => {
  return (
    <div className="flex flex-col relative items-start min-w-[200px] shrink-0 md:flex-1 md:min-w-0">
      <div className="w-4 h-4 rounded-full bg-black z-10 mb-2"></div>
      <p className="text-sm mb-1">{company}</p>
      {roles.map((role, index) => (
        <div key={index}>
          <h3 className="font-bold text-sm">{role.title}</h3>
          <time className="text-xs">{role.period}</time>
          {index < roles.length - 1 && <br />}
        </div>
      ))}
    </div>
  );
};
