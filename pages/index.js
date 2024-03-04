export default function Home() {
  return (
    <>
      <div className="flex justify-center py-8 bg-white dark:bg-zinc-900 text-lg text-slate-00 dark:text-zinc-100">
        <div className="md:w-3/5 lg:w-2/5 xl:w-1/3 min-h-screen max-h-full font-mono">

          <div id="me" className="grid grid-cols-8 py-2">
            <div className="col-start-1 col-end-6 text-xl px-5">
              <p className="font-bold">Serge-Olivier Malouin</p>
            </div>
            <div className="col-start-6 col-end-8 grid grid-cols-3 gap-2">
              <div>
                <button
                  id="theme-toggle"
                  type="button"
                  className="outline outline-2 rounded px-1 py-1"
                >
                  <img id="theme-icon" width={16} height={16} />
                </button>
              </div>
              <a href="https://github.com/somalouin" target="_blank">
                <img id="github" width={25} height={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/serge-olivier-malouin-5a89a1193/"
                target="_blank"
              >
                <img src="icons/linkedin.png" width={25} height={25} />
              </a>
            </div>
          </div>

          <div id="content">

            <div
              id="about"
              className="grid grid-cols-1 place-content-evenly pt-10 py-6"
            >
              <div className="px-5">
                <p className="text-xl py-2 font-bold">about me</p>
                <p className="text-sm">
                  - currently graduating in software engineering at École de technologie supérieure 
                  <a href="https://www.etsmtl.ca/" target="_blank"> (ÉTS)</a> in Montreal
                  <br/> <br/>
                  - over a year of experience in web and software development across interships and projects
                  <br/><br/>
                  - worked in front-end and back-end (most time spent working on back-end)
                </p>
              </div>
            </div>

            <div
              id="experience"
              className="grid grid-cols-1 place-content-evenly py-8"
            >
              <div className="px-5">
                <p className="text-xl py-2 font-bold">experience</p>
                <ol className="relative border-s">                  
                  <li className="mb-10 ms-4">
                      <time className="mb-1 text-sm leading-none text-gray-400 dark:text-gray-500">september 2022 - december 2022</time>
                      <h3 className="text-base">software developer (intership)</h3>
                      <p className="mb-4 text-sm">Intact Insurance</p>
                  </li>
                  <li className="mb-10 ms-4">
                      <time className="mb-1 text-sm leading-none text-gray-400 dark:text-gray-500">april 2021 - august 2021</time>
                      <h3 className="text-base">web developer (intership)</h3>
                      <p className="text-sm">Openmind Technologies inc</p>
                  </li>
                  <li className="mb-10 ms-4">
                      <time className="mb-1 text-sm leading-none text-gray-400 dark:text-gray-500">may 2020 - august 2020</time>
                      <h3 className="text-base">web developer</h3>
                      <p className="text-sm">Openmind Technologies inc</p>
                  </li>
                  <li className="ms-4">
                      <time className="mb-1 text-sm leading-none text-gray-400 dark:text-gray-500">january 2020 - may 2020</time>
                      <h3 className="text-base">web developer (intership)</h3>
                      <p className="text-sm">Openmind Technologies inc</p>
                  </li>
                </ol>
              </div>
            </div>

            <div
              id="stack"
              className="grid grid-cols-1 place-content-evenly py-8"
            >
              <div className="px-5">
                <p className="text-xl py-2 font-bold">tech stack (most to less fluent)</p>

                  <p className="text-sm pt-8">languages</p>
                  <ul className="grid grid-cols-6 gap-6 py-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width={50} height={50} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width={50} height={50} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width={50} height={50} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width={50} height={50} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" width={50} height={50} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" width={50} height={50} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg" width={50} height={50} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg" width={50} height={50} />
                  </ul>

                  <p className="text-sm pt-8">frameworks</p>
                  <ul className="grid grid-cols-6 gap-6 py-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width={50} height={50} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width={50} height={50} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width={50} height={50} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width={50} height={50} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={50} height={50} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" width={50} height={50} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" width={50} height={50} />
                  </ul>

                  <p className="text-sm pt-8">databases</p>
                  <ul className="grid grid-cols-6 gap-6 py-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width={50} height={50} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width={50} height={50} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width={50} height={50} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" width={50} height={50} />
                  </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
