import { forwardRef } from "react";

const ButtonGroup = forwardRef(({ options, form, ...rest }, ref) => {
  return (
    <div className="flex mb-3 mt-2">
      {options.map((option, index) => {
        return (
          <button
            key={index + "idx"}
            className={`p-2 mr-2 bg-white rounded-lg ${
              option === form && "outline-none ring ring-pink-500"
            } font-bold text-orange-500 `}
            value={option}
            {...rest}
            ref={ref}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
});

export default ButtonGroup;
