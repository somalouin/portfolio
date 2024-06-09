import Image from "next/image";
import About from "../components/about";
import Experience from "../components/experience";

export default function Home() {
  return (
    <div className="min-h-full flex items-center justify-center font-mono py-8 bg-white text-black">
      <div id="content" className="px-4 md:w-4/5 lg:w-3/5 xl:w-1/3">
        <div id="me" className="pt-10 py-6">
          <p className="text-xl font-bold">Serge-Olivier</p>
          <p className="text-xl font-bold">Malouin</p>
        </div>
        <About />
        <Experience />
        <div id="stack" className="py-10">
          <div>
            <p className="text-xl font-bold">tech stack</p>

            <p className="text-sm pt-2">languages</p>
            <ul className="px-4 py-2 grid grid-cols-8 gap-6">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                width={40}
                height={40}
                alt="typescript"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                width={40}
                height={40}
                alt="javascript"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                width={40}
                height={40}
                alt="python"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                width={40}
                height={40}
                alt="java"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg"
                width={40}
                height={40}
                alt="csharp"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
                width={40}
                height={40}
                alt="golang"
              />
            </ul>

            <p className="text-sm pt-6">frameworks</p>
            <ul className="px-4 py-2 grid grid-cols-8 gap-6">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                width={40}
                height={40}
                alt="nodejs"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                width={40}
                height={40}
                alt="nextjs"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                width={40}
                height={40}
                alt="reactjs"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                width={40}
                height={40}
                alt="tailwindcss"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                width={40}
                height={40}
                alt="vuejs"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg"
                width={40}
                height={40}
                alt="spring"
              />
            </ul>

            <p className="text-sm pt-6">databases</p>
            <ul className="px-4 py-2 grid grid-cols-8 gap-6">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                width={40}
                height={40}
                alt="mongodb"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                width={40}
                height={40}
                alt="postgresql"
                className=""
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                width={40}
                height={40}
                alt="mysql"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
                width={40}
                height={40}
                alt="oracle"
              />
            </ul>
          </div>
        </div>
        <div className="flex justify-evenly pt-20">
          <a
            href="https://github.com/somalouin"
            target="_blank"
            className="text-sm underline"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/serge-olivier-malouin-5a89a1193/"
            target="_blank"
            className="text-sm underline"
          >
            linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
