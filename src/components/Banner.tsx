import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <>
      {/* Banner parent */}
      <div className="flex justify-between items-center container mx-auto my-10">
        {/* Banner left site */}
        <div>
          <h1 className="text-5xl font-bold">
            Build Your Ideal<span>Development Stack</span>
          </h1>
          <p className="text-2xl py-2">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          {/* Banner btn container */}
          <div className="">
            <button className="btn btn-secondary">Explore Technologies</button>
            <button className="btn">Learn More</button>
          </div>
        </div>

        {/* Banner right site */}
        <div>
          <img src={BannerImg} alt="Banner right site image" />
        </div>
      </div>
    </>
  );
};

export default Banner;
