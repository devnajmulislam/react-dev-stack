import { use, useState } from "react";
import ExpTechCard from "./ExpTechCard";
import ExpTechStack from "./ExpTechStack";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify/unstyled";

const ExpTechnologies = ({technologiesPromise}) => {
// get technologies data 
  const technologies = use(technologiesPromise);
  // console.log('technologies -> ',technologies)

  // ALL STATS
  const [stack, setStack] = useState([])
  // const [isSelected, setIsSelected] = useState(false)

  // ALL HANDLERS
const handleChooseStack = (technology) =>{
  // setIsSelected(true)
  if(stack.find((element)=> element.name === technology.name)){
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
const stackTechnologies = [...stack, technology]


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


}

// console.log("stack", stack);
// console.log('length',stack.length)

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
          <div className=" col-span-8 ">
            <ExpTechCard technologies={technologies} handleChooseStack={handleChooseStack}/>
          </div>

          {/* Technology right side */}
          <div className=" col-span-4">
            <ExpTechStack stack={stack}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpTechnologies;
