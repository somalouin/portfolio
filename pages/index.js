export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center font-mono py-8 bg-white dark:bg-black text-slate-00 dark:text-zinc-100">
        
        <div id="content" className="px-4 md:w-3/5 lg:w-2/5 xl:w-1/3">
          
          <div
            id="me"
            className="pt-10 py-6"
          >
            <p className="text-xl font-bold">Serge-Olivier Malouin</p>
            <div>
              <button
                id="theme-toggle"
                type="button"
              >
                <img id="theme-icon" width={16} height={16} />
              </button>
            </div>
          </div>

          <div
            id="about"
            className="pt-10 py-6"
          >
            <div>
              <p className="text-l font-bold">about</p>
              <p className="text-sm">
                currently graduating in software engineering at École de technologie supérieure 
                <a href="https://www.etsmtl.ca/" target="_blank"> (ÉTS)</a> in Montreal
                <br/> <br/>
                over a year of experience in web and software development across interships and projects
                <br/><br/>
                worked in front-end and back-end (most time spent working on back-end)
              </p>
            </div>
          </div>

          <div
            id="experience"
            className="py-10"
          >
            <div>
              <p className="text-l font-bold">experience</p>
              <section>
                <div class="container max-w-5xl py-2 mx-auto">
                  <div class="grid gap-4 mx-4">

                    <div class="relative col-span-12 px-4 space-y-6">
                      <div class="col-span-12 space-y-12 relative px-4 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:dark:bg-gray-600 before:bg-gray-700">
                        
                        <div class="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-black before:dark:bg-white">
                          <h3 class="font-bold text-sm"> software developer (intership 3) </h3>
                          <time class="text-xs dark:text-gray-400">september 2022 - december 2022</time>
                          <p className="mb-4 text-sm">Intact Insurance</p>
                        </div>

                        <div class="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-black before:dark:bg-white">
                          <h3 class="font-bold text-sm"> web developer (intership 2) </h3>
                          <time class="text-xs dark:text-gray-400">april 2021 - august 2021</time>
                          <p className="mb-4 text-sm">Openmind Techologies Inc.</p>
                        </div>

                        <div class="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] sm:before:z-[1] before:bg-black before:dark:bg-white">
                          <h3 class="font-bold text-sm">web developer</h3>
                          <time class="text-xs dark:text-gray-400">may 2020 - august 2020</time>
                          <p className="mb-4 text-sm">Openmind Techologies Inc.</p>
                        </div>

                        <div class="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-black before:dark:bg-white">
                          <h3 class="font-bold text-sm">web developer (intership 1)</h3>
                          <time class="text-xs dark:text-gray-400">january 2020 - may 2020</time>
                          <p className="mb-4 text-sm">Openmind Techologies Inc.</p>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </section>
            </div>
          </div>

          <div
            id="stack"
            className="py-10"
          >
            <div>
              <p className="text-l font-bold">tech stack</p>

                <p className="text-sm pt-2">&gt; languages</p>
                <ul className="grid grid-cols-8">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width={35} height={35} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width={35} height={35} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width={35} height={35} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width={35} height={35} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" width={35} height={35} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" width={35} height={35} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg" width={35} height={35} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width={35} height={35} />
                </ul>

                <p className="text-sm pt-6">&gt; frameworks</p>
                <ul className="grid grid-cols-8">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width={35} height={35} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" width={35} height={35} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width={35} height={35} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width={35} height={35} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={35} height={35} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" width={35} height={35} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" width={35} height={35} />
                </ul>

                <p className="text-sm pt-6">&gt; databases</p>
                <ul className="grid grid-cols-8">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width={35} height={35} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width={35} height={35} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width={35} height={35} />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" width={35} height={35} />
                </ul>
            </div>
          </div>

          <div
            id="links"
            className="py-10"
          >
            <div>
              <p className="text-l font-bold"> links</p>
              <div className="grid grid-cols-8 gap-2 place-content-evenly">
                <div className="col-start-1 col-end-3">
                  <a href="https://github.com/somalouin" 
                    target="_blank"  
                    className="text-sm">
                    github
                  </a>
                </div>
                <div className="col-start-3 col-end-5">
                  <a
                    href="https://www.linkedin.com/in/serge-olivier-malouin-5a89a1193/"
                    target="_blank"
                    className="text-sm"
                  >
                    linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
