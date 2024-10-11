const Experience = () => {
  return (
    <div id="experience" className="py-10">
      <div>
        <p className="text-l font-bold">[experience]</p>
        <section>
          <div className="container max-w-5xl py-2 mx-auto">
            <div className="grid gap-4 mx-2">
              <div className="relative col-span-12 px-4 space-y-6">
                <div className="col-span-12 space-y-12 relative px-4 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700">
                  <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-black">
                    <p className="mb-4 text-sm">Sinistar</p>
                    <h3 className="font-bold text-sm">full stack developer</h3>
                    <time className="text-xs">september 2024 - now</time>
                  </div>
                  <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-black">
                    <p className="mb-4 text-sm">BetterSleep by Ipnos</p>
                    <h3 className="font-bold text-sm">
                      full stack developer (intership 4)
                    </h3>
                    <time className="text-xs">may 2024 - august 2024</time>
                  </div>
                  <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-black">
                    <p className="mb-4 text-sm">Intact Insurance</p>
                    <h3 className="font-bold text-sm">
                      software developer (intership 3)
                    </h3>
                    <time className="text-xs">
                      september 2022 - december 2022
                    </time>
                  </div>
                  <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-black">
                    <p className="mb-4 text-sm">Openmind Techologies Inc.</p>
                    <h3 className="font-bold text-sm">
                      full stack developer (intership 2)
                    </h3>
                    <time className="text-xs">april 2021 - august 2021</time>
                    <br />
                    <h3 className="font-bold text-sm">full stack developer</h3>
                    <time className="text-xs">may 2020 - august 2020</time>
                    <br />
                    <h3 className="font-bold text-sm">
                      full stack developer (intership 1)
                    </h3>
                    <time className="text-xs">january 2020 - may 2020</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
