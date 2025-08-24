import React from "react";
import { ArrowDownIcon } from "./icons/ArrowDownIcon";

interface SwapDirectionButtonProps {
  onClick: () => void;
}

const SwapDirectionButton: React.FC<SwapDirectionButtonProps> = ({ onClick }) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <button
        onClick={onClick}
        className="w-12 h-12 bg-slate-700 border-4 border-slate-800/50 rounded-full flex items-center justify-center text-gray-400 hover:bg-slate-600 hover:rotate-180 transition-all duration-300"
      >
        <ArrowDownIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SwapDirectionButton;