import ExpTechCard from "./ExpTechCard";
import ExpTechStack from "./ExpTechStack";

const ExpTechnologies = () => {
  return (
    <>
      {/* Technology parent */}
      <div className="container mx-auto">
        <h2 className="text-7xl text-black font-bold py-3">
          Explore the <span>Technologies</span>
        </h2>
        <p className="text-2xl">
          Pick one technology per category to build your ideal stack.
        </p>

        {/* technology two coloums parent */}
        <div className="grid grid-cols-12 gap-4">
          {/* Technology left side */}
          <div className="bg-red-400 col-span-8 ">
            <ExpTechCard/>
          </div>

          {/* Technology right side */}
         <div className="bg-pink-500 col-span-4">
             <ExpTechStack />
         </div>
        </div>
      </div>
    </>
  );
};

export default ExpTechnologies;
