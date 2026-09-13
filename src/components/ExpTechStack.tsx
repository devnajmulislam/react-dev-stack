import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify/unstyled";

import type { ITechnology } from "..";
import type { Dispatch, SetStateAction } from "react";


interface ExpTechStackProps {
  stack: ITechnology[];
  setStack: Dispatch<SetStateAction<ITechnology[]>>;
}

const ExpTechStack = ({ stack, setStack }:ExpTechStackProps) => {

  const handleRemoveStack = (stkSingleTech: ITechnology) => {
    const remainingStack = stack.filter(
      (singleStack) => singleStack.id !== stkSingleTech.id,
    );

    setStack(remainingStack);

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
      <div className="w-full max-w-md rounded-3xl border border-[#edf2f7] bg-white p-6 shadow-sm">
        {/* Stack header */}
        <div className="mb-5">
          <h3 className="text-2xl font-bold text-gray-900">Your Stack</h3>
          <p className="mt-0.5 text-sm font-medium text-gray-400">
            {stack.length === 0
              ? "No technologies selected yet."
              : `${stack.length} technologies selected`}
          </p>
        </div>
        {/* stack technologies container */}
        <div>
          <div>
            {stack.map((stkSingleTech) => {
              return (
                <div
                  key={stkSingleTech.id}
                  className="flex w-full items-center justify-between rounded-2xl border border-[#e2e8f0] bg-white px-4 py-3.5 my-2 transition hover:border-gray-300"
                >
                  {/* Left */}
                  <div className="flex items-center gap-3.5">
                    {/* Logo */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 p-2">
                      <img
                        src={stkSingleTech.icon}
                        alt={`${stkSingleTech.name} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    {/* Name and Category */}
                    <div className="flex flex-col">
                      <h3 className="text-sm font-bold  text-gray-900">
                        {stkSingleTech.name}
                      </h3>

                      <span className="mt-1 text-xs font-medium text-gray-400">
                        {stkSingleTech.category}
                      </span>
                    </div>
                  </div>

                  {/* right */}
                  {/* Remove Button */}
                  <button
                    className="flex h-8 w-8 items-center justify-center text-gray-400 transition hover:text-gray-600"
                    onClick={() => handleRemoveStack(stkSingleTech)}
                  >
                    <RxCross1 size={31} strokeWidth={1.8} />
                  </button>
                </div>
              );
            })}
          </div>
          {/* Remove button and empty page when doesn't choose any stack */}
          <div className="pt-6">
            {" "}
            {stack.length <= 0 ? (
              <div className="flex h-36 w-full items-center justify-center rounded-2xl border border-dashed border-[#e2e8f0] p-6 text-center text-sm font-medium text-gray-400">
                Your stack is empty.
              </div>
            ) : (
              ""
            )}
            {stack.length > 0 ? (
              <button
                onClick={handleRemoveAll}
                className="w-full rounded-full border border-red-200 py-3 text-center text-sm font-semibold text-rose-500 transition hover:bg-rose-50"
              >
                Remove All
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpTechStack;
