import { use, useState } from "react";
import ExpTechCard from "./ExpTechCard";
import ExpTechStack from "./ExpTechStack";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify/unstyled";

const ExpTechnologies = ({ technologiesPromise }) => {
  // get technologies data
  const technologies = use(technologiesPromise);

  // ALL STATS
  const [stack, setStack] = useState([]);

  // ALL HANDLERS
  const handleChooseStack = (technology) => {
    const alreadyExists = stack.some((item) => item.id === technology.id);

    if (alreadyExists) {
      alert("Already exist");
    }

    if (stack.find((element) => element.name === technology.name)) {
      // return alert(`${technology.name} already added in your stack!`)

      return toast.error(`${technology.name} already added in your stack!`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
    const stackTechnologies = [...stack, technology];

    setStack(stackTechnologies);

    // alert(`${technology.name} added in your Stack.`)

    toast.success(`${technology.name} added in your Stack.`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  return (
    <>
      {/* Technology parent */}
      <div className="container mx-auto">
        {/* Technologies section heading and descripton */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900">
            Explore the <span className="text-pink-500">Technologies</span>
          </h2>
          <p className="text-slate-500 md:text-lg mt-4">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* technology two coloums parent */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Technology left side */}
          <div className="lg:col-span-8">
            <ExpTechCard
              technologies={technologies}
              handleChooseStack={handleChooseStack}
              stack={stack}
            />
          </div>

          {/* Technology right side */}
          <div className="lg:col-span-4">
            <ExpTechStack stack={stack} setStack={setStack} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpTechnologies;
