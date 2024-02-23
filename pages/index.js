export default function Home() {
  return (
    <>
      <div className="flex justify-center py-8 bg-slate-200 dark:bg-zinc-900 text-lg text-slate-00 dark:text-zinc-400">
        <div className="md:w-4/5 lg:w-4/5 xl:w-1/2 min-h-screen max-h-full font-mono">
          <div id="me" className="grid grid-cols-8 py-8">
            <div className="col-start-1 col-end-6 text-2xl px-5 pb-6">
              <p className="font-bold">Serge-Olivier Malouin</p>
              <p className="text-base py-2"> software engineer</p>
              <div className="flex grid-cols-2 gap-4">
                    <a href="https://github.com/somalouin" target="_blank">
                      <img src="icons/github.png" width={25} height={25} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/serge-olivier-malouin-5a89a1193/"
                      target="_blank"
                    >
                      <img src="icons/linkedin.png" width={25} height={25} />
                    </a>
                </div>
            </div>
            <div className="col-start-8">
              <button
                id="theme-toggle"
                type="button"
                className="dark:bg-slate-200 bg-zinc-400 dark:hover:bg-slate-400 hover:bg-zinc-500 rounded-lg px-2 py-2"
              >
                <img id="theme-icon" width={18} height={18} />
              </button>
            </div>
          </div>
          <div class="relative flex py-5 items-center">
              <div class="flex-grow border-t border-gray-400"></div>
          </div>
          <div id="content">
            <div
              id="about"
              className="grid grid-cols-1 place-content-evenly py-6"
            >
              <div className="px-5">
                <p className="text-xl py-2 font-bold">about me</p>
                <p className="text-base">
                  I am currently graduating in software engineering at École de technologie supérieure (ÉTS) in Montreal
                  <br/> <br/>
                  Over a year in web and software development in front-end and back-end, though, most time spent working on back-end
                </p>
              </div>
            </div>
            <div class="relative flex py-5 items-center">
              <div class="flex-grow border-t border-gray-400"></div>
            </div>
            <div
              id="skills"
              className="grid grid-cols-1 place-content-evenly py-6"
            >
              <div className="px-5">
                <p className="text-xl py-2 font-bold">tech stack</p>
                  <ul className="grid grid-cols-6 gap-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width={45} height={45} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width={45} height={45} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width={45} height={45} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={45} height={45} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width={45} height={45} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width={45} height={45} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" width={45} height={45} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width={45} height={45} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" width={45} height={45} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" width={45} height={45} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width={45} height={45} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width={45} height={45} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" width={45} height={45} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width={45} height={45} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" width={45} height={45} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width={45} height={45} />
                  </ul>
              </div>
            </div>

            {/* <div
              id="projects"
              className="grid grid-cols-1 place-content-evenly py-6"
            >
              <div className="px-5">
                <p className="text-xl py-6">projects </p>
                <p className="text-base">
                  here is a list of my past projects :
                </p>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </>
  );
}
