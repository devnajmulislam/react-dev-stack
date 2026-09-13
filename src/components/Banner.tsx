import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <>
      {/* Banner parent */}
      <div className="grid grid-cols-12 justify-between items-center container mx-auto my-20">
        {/* Banner left site */}
        <div className="col-span-7">
          <h1 className="text-5xl text-slate-900 md:text-6xl font-bold">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-1/2">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          {/* Banner btn container */}
          <div className="mt-8 flex flex-wrap items-center gap-4 ">
            <button className="cursor-pointer rounded-lg bg-gradient-to-r from-orange-500 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:opacity-90">
              Explore Technologies
            </button>
            <button className="cursor-pointer rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Banner right site */}
        <div className="col-span-5 w-full max-w-md lg:max-w-lg flex justify-center">
          <img
            src={BannerImg}
            alt="Banner right site image"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
