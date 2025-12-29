import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[var(--background)] py-4 px-4 md:px-8">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xl font-bold">Serge-Olivier Malouin</p>
        </div>
        <nav className="flex gap-6">
          <Link
            href="https://github.com/somalouin"
            target="_blank"
            className="hover:underline transition-[text-decoration] duration-200"
          >
            github
          </Link>
          <Link
            href="https://www.linkedin.com/in/serge-olivier-malouin-b-eng-5a89a1193/"
            target="_blank"
            className="hover:underline transition-[text-decoration] duration-200"
          >
            linkedin
          </Link>
        </nav>
      </div>
    </header>
  );
};
