import Link from "next/link";

export const AboutSection = () => {
  return (
    <div id="about" className="pt-10 py-6">
      <div>
        <p className="text-l font-bold">[ about ]</p>
        <p className="text-sm py-2">
          recently graduated in software engineering at École de technologie
          supérieure (
          <Link href="https://www.etsmtl.ca/" target="_blank">
            ÉTS
          </Link>
          ) in Montreal
          <br /> <br />
          over a year of experience in web and software development across
          interships and projects
          <br />
          <br />
          worked mostly full-stack, mainly using js/ts frameworks and python,
          but prefer backend work
        </p>
      </div>
    </div>
  );
};
