export default function Home() {
  return (
    <>
      <div className="flex justify-center py-8 bg-slate-200 dark:bg-slate-800 font-sans font-bold text-lg text-slate-800 dark:text-slate-200">
        <div className="md:w-2/3 lg:w-1/2 py-8">
          <div className="flex grid-cols-2 gap-4 place-content-end px-6">
            <button
              id="theme-toggle"
              type="button"
              className="dark:bg-slate-400 bg-gray-400 rounded-lg px-2 py-2"
            >
              <img id="theme-icon" width={24} height={24} />
            </button>
          </div>
          <div id="me" className="grid grid-cols-2 place-content-evenly py-8">
            <div className="text-4xl px-5 pb-6">
              <p>Serge-Olivier Malouin</p>
              <p className="text-base"> Back-end developer</p>
            </div>
          </div>

          <div
            id="about"
            className="grid grid-cols-1 place-content-evenly py-10"
          >
            <div className="px-5">
              <p>About</p>
              <p className="text-base">
                Software engineering student at École de technologie supérieure
                in Montreal.
              </p>
            </div>
          </div>

          <div
            id="skills"
            className="grid grid-cols-1 place-content-evenly py-10"
          >
            <div className="px-5">
              <p>Skills</p>
              <p className="text-base">
                I have experience with these technologies
              </p>
              <div className="px-8 pt-8 grid grid-cols-8 place-content-evenly">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              </div>
            </div>
          </div>

          <div
            id="projects"
            className="grid grid-cols-1 place-content-evenly py-10"
          >
            <div className="px-5">
              <p>Projects </p>
              <p className="text-base">Here is a list of my past projects</p>
            </div>
          </div>

          <div
            id="contact"
            className="grid grid-cols-1 place-content-evenly py-10"
          >
            <div className="px-5">
              <p>Contact me</p>
              <div className="flex grid-cols-2 gap-4 py-2">
                <a href="https://github.com/somalouin" target="_blank">
                  <img src="icons/github.png" width={35} height={35} />
                </a>
                <a
                  href="https://www.linkedin.com/in/serge-olivier-malouin-5a89a1193/"
                  target="_blank"
                >
                  <img src="icons/linkedin.png" width={40} height={40} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
