import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-full flex items-center justify-center font-mono py-8 bg-white text-black">
      <div id="content" className="px-4 md:w-4/5 lg:w-3/5 xl:w-1/3">
        <div id="me" className="pt-10 py-6">
          <p className="text-xl font-bold">Serge-Olivier</p>
          <p className="text-xl font-bold">Malouin</p>
        </div>

        <div id="about" className="pt-10 py-6">
          <div>
            <p className="text-l font-bold">about</p>
            <p className="text-sm">
              currently graduating in software engineering at École de
              technologie supérieure (
              <a
                href="https://www.etsmtl.ca/"
                target="_blank"
                className="underline"
              >
                ÉTS
              </a>
              ) in Montreal
              <br /> <br />
              over a year of experience in web and software development across
              interships and projects
              <br />
              <br />
              worked in front-end and back-end (most time spent working on
              back-end)
            </p>
          </div>
        </div>
        <div id="experience" className="py-10">
          <div>
            <p className="text-l font-bold">experience</p>
            <section>
              <div className="container max-w-5xl py-2 mx-auto">
                <div className="grid gap-4 mx-2">
                  <div className="relative col-span-12 px-4 space-y-6">
                    <div className="col-span-12 space-y-12 relative px-4 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700">
                      <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-black">
                        <h3 className="font-bold text-sm">
                          web developer (intership 4)
                        </h3>
                        <time className="text-xs">may 2024 - present</time>
                        <p className="mb-4 text-sm">BetterSleep by Ipnos</p>
                      </div>

                      <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-black">
                        <h3 className="font-bold text-sm">
                          software developer (intership 3)
                        </h3>
                        <time className="text-xs">
                          september 2022 - december 2022
                        </time>
                        <p className="mb-4 text-sm">Intact Insurance</p>
                      </div>

                      <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-black">
                        <h3 className="font-bold text-sm">
                          web developer (intership 2)
                        </h3>
                        <time className="text-xs">
                          april 2021 - august 2021
                        </time>
                        <p className="mb-4 text-sm">
                          Openmind Techologies Inc.
                        </p>
                      </div>

                      <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] sm:before:z-[1] before:bg-black">
                        <h3 className="font-bold text-sm">web developer</h3>
                        <time className="text-xs">may 2020 - august 2020</time>
                        <p className="mb-4 text-sm">
                          Openmind Techologies Inc.
                        </p>
                      </div>

                      <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-black">
                        <h3 className="font-bold text-sm">
                          web developer (intership 1)
                        </h3>
                        <time className="text-xs">january 2020 - may 2020</time>
                        <p className="mb-4 text-sm">
                          Openmind Techologies Inc.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div id="stack" className="py-10">
          <div>
            <p className="text-l font-bold">tech stack</p>

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
