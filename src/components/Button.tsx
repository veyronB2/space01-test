import React from "react";

const Button = ({
  text,
  onClick,
}: {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <button
      className="mt-5 w-36 bg-blue-600 text-white  py-3 px-8 rounded  hover:cursor-pointer hover:outline-none hover:drop-shadow-sm transition-all duration-200 ease-in-out  hover:ring-1 hover:ring-blue-600 hover:bg-transparent hover:text-blue-600"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default React.memo(Button);
