import Link from "next/link";

export const AboutSection = () => {
  return (
    <div className="py-10 px-4 md:px-8">
      <p className="text-lg font-bold">about</p>
      <p className="text-sm py-2">
        - graduated class of 2024 in software engineering at École de
        technologie supérieure (
        <Link
          href="https://www.etsmtl.ca/"
          target="_blank"
          className="hover:underline transition-[text-decoration] duration-200"
        >
          ÉTS
        </Link>
        ) in Montreal
        <br /> <br />- 2+ years of experience in web and software development
        across interships, jobs and personal projects
        <br />
        <br />- worked mostly full-stack, mainly using js/ts frameworks and
        python, but prefer backend work and database management
      </p>
    </div>
  );
};
