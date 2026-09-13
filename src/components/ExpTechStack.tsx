import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify/unstyled";

const ExpTechStack = ({ stack, setStack }) => {
  // console.log("stacl=?", stack)

  const handleRemoveStack = (stkSingleTech) => {
    const remainingStack = stack.filter(
      (singleStack) => singleStack.id !== stkSingleTech.id,
    );

    setStack(remainingStack);

    // Should added toaster,now avoid because codes look so messy
    // alert(`${stkSingleTech.name} is deleted!`);

    toast.error(`${stkSingleTech.name} is deleted!`, {
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

  const handleRemoveAll = () => {
    setStack([]);
    toast.warn("Your stack cleared!", {
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
      <div className="py-4">
        <h3 className="text-4xl text-black-700">Your Stack</h3>
        <p className="text-2xl">
          {stack <= 0
            ? "No technologies selected yet."
            : `${stack.length} technologies selected`}
        </p>
        <div>
          <div>
            {stack.map((stkSingleTech) => {
              return (
                <div
                  key={stkSingleTech.id}
                  className="flex w-full items-center justify-between rounded-2xl border border-[#dce5ef] bg-white px-5 py-4 my-2"
                >
                  {/* Left */}
                  <div className="flex items-center gap-4">
                    {/* Logo */}
                    <div className="flex h-12 w-12 items-center justify-center">
                      <img
                        src={stkSingleTech.icon}
                        alt={`${stkSingleTech.name} logo`}
                        className="h-11 w-11 object-contain"
                      />
                    </div>

                    {/* Name + Category */}
                    <div className="flex flex-col">
                      <h3 className="text-[17px] font-bold leading-5 text-[#111827]">
                        {stkSingleTech.name}
                      </h3>

                      <span className="mt-1 text-[13px] font-medium text-[#91a3bc]">
                        {stkSingleTech.category}
                      </span>
                    </div>
                  </div>

                  {/* right */}
                  {/* Remove Button */}
                  <button
                    className="flex h-10 w-10  text-[#94a7c0] transition hover:text-[#475569]"
                    onClick={() => handleRemoveStack(stkSingleTech)}
                  >
                    <RxCross1 size={31} strokeWidth={1.8} />
                  </button>
                </div>
              );
            })}
          </div>

          <p>
            {" "}
            {stack.length <= 0 ? "Your stack is empty." : ""}
            {stack.length > 0 ? (
              <button
                onClick={handleRemoveAll}
                className="btn btn-success text-white"
              >
                Remove All
              </button>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default ExpTechStack;
