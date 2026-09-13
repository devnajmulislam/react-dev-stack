import { FaStar } from "react-icons/fa";

const ExpTechCard = ({technologies}) => {
// console.log('from card->',technologies)


  return <div className="grid grid-cols-3 gap-2">
 {
  technologies.map(technology => {
    return  <div className="w-full rounded-[22px] border border-[#e7eef5] bg-white p-7]">
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
   
          <span className="rounded-full border border-[#d5edff] bg-[#f0f9ff] px-4 py-1.5 text-[16px] font-medium text-[#0099e9]">
            {technology.badge}
          </span>
   
      </div>

      {/* Middle */}
      <div className="mt-6">
        <h3 className="text-[27px] font-bold leading-tight text-[#111827]">
          {technology.name}
        </h3>

        <p className="mt-3 text-[17px] leading-7 text-[#657895]">
          {technology.description}
        </p>
      </div>

      {/* Bottom */}
      <div className="mt-6 border-t border-[#edf1f5] pt-3">
        <div className="flex items-center justify-between gap-3">
          {/* Category */}
          <span className="rounded-md bg-[#f3f5f7] px-3 py-1 text-[16px] text-[#52627a]">
            {technology.category}
          </span>

          {/* Level */}
          <span className="text-[16px] text-[#61728f]">
            {technology.difficulty}
          </span>

          {/* Rating */}
          <div className="flex items-center gap-1.5 text-[16px] text-[#334155]">
            <FaStar className="text-[#fbbf24]" size={16} />
            <span>{technology.rating}</span>
          </div>
        </div>

        {/* Button */}
        <button
          type="button"
          className="mt-5 w-full rounded-xl bg-[#080d1d] py-3.5 text-[16px] font-medium text-white transition hover:bg-[#151b2d]"
        >
          Add to Stack
        </button>
      </div>
    </div>
  })
 }
  </div>;
};

export default ExpTechCard;
