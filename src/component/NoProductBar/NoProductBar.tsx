import { MdOutlineSearchOff } from "react-icons/md";

const NoProductBar = () => {
  return (
    <>
      <div className="mb-8 flex items-center border-t-2 border-[#c29958] bg-background p-4">
        <span className="mr-4">
          <MdOutlineSearchOff size={18} />
        </span>
        <p className="text-sm text-[#515151]">
          No products were found matching your selection.
        </p>
      </div>
    </>
  );
};

export default NoProductBar;
