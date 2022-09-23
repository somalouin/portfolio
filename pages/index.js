function Home() {
  return (
    <div className="flex justify-center py-12 font-mono font-bold text-lg">
      <div className="w-5/6 bg-slate-200 rounded-md py-8">
        <div className="flex grid-cols-2 gap-2 place-content-end px-6">
          <a href="https://github.com/somalouin">
            <img src="/github.png" width={20} height={20} />
          </a>
          <a href="https://www.linkedin.com/in/serge-olivier-malouin-5a89a1193/">
            <img src="/linkedin.png" width={22} height={22} />
          </a>
        </div>

        <h1 className="text-center text-xl pb-20">Portfolio</h1>

        <div className="grid grid-cols-2 gaps-4 place-content-evenly py-6">
          <div className="text-center px-5">
            <p>Serge-Olivier Malouin</p>
            <p className="text-base">Software engineer student</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gaps-4 place-content-evenly py-6">
          <div className="text-center px-5">
            <p>Skills</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
