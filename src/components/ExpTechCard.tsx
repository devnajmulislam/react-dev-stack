import { FaStar } from "react-icons/fa";
import type { ITechnology } from "..";

interface ExpTechCardProps {
  technologies: ITechnology[];
  handleChooseStack: (technology: ITechnology) => void;
  stack: ITechnology[];
}

const ExpTechCard = ({ technologies, handleChooseStack, stack }: ExpTechCardProps) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {technologies.map((technology) => {
        const isAdded = stack.some((item) => item.id === technology.id);

        return (
          <div
            key={technology.id}
            className="w-full rounded-[28px] border border-[#f1f3f5] bg-white p-7 shadow-sm hover:shadow-md"
          >
            {/* Top */}
            <div className="flex items-start justify-between">
              {/* Technology Logo */}
              <div className="flex h-12 w-12 items-center justify-center">
                <img
                  src={technology.icon}
                  alt={`${technology.name} logo`}
                  className="h-10 w-10 object-contain"
                />
              </div>

              {/* Badge */}

              <span className="rounded-full border border-[#dff1fd] bg-[#f0f8ff] px-4 py-1 text-[15px] font-semibold text-[#00a6fb]">
                {technology.badge}
              </span>
            </div>

            {/* Middle */}
            <div className="mt-6">
              <h3 className="text-[28px] font-bold text-[#111827]">
                {technology.name}
              </h3>

              <p className="mt-3 text-[16px] text-[#6b7280]5]">
                {technology.description}
              </p>
            </div>

            {/* Bottom */}
            <div className="mt-6 border-t border-[#f3f4f6] pt-5">
              <div className="flex items-center justify-between">
                {/* Category */}
                <span className="rounded-lg bg-[#f3f4f6] px-3 py-1.5 text-[14px] font-medium text-[#4b5563]">
                  {technology.category}
                </span>

                {/* Level */}
                <span className="text-[15px] font-medium text-[#6b7280]">
                  {technology.difficulty}
                </span>

                {/* Rating */}
                <div className="flex items-center gap-1.5 text-[15px] font-semibold text-[#111827]">
                  <FaStar className="text-[#fbbf24]" size={16} />
                  <span>{technology.rating}</span>
                </div>
              </div>

              {/* Button */}
              <button
                disabled={isAdded}
                onClick={() => handleChooseStack(technology)}
                className={`mt-6 w-full rounded-2xl py-4 text-[16px] font-semibold ${
                  isAdded
                    ? "bg-[#e5e7eb] text-[#9ca3af] "
                    : "bg-[#0d1322] text-white hover:bg-black "
                }`}
              >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpTechCard;
