import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex justify-evenly pt-20">
      <Link href="https://github.com/somalouin">github</Link>

      <Link href="https://www.linkedin.com/in/serge-olivier-malouin-5a89a1193/">
        linkedin
      </Link>
    </div>
  );
};
