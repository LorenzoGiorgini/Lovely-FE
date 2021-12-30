import React from "react";

const Input = React.forwardRef(({ id, placeholder, errors, ...rest }, ref) => {
  return (
    <>
      <span className="text-pink-500 w-60">{placeholder}</span>
      <input
        type={id}
        id={id}
        placeholder={placeholder}
        className="w-full outline-none text-purple-500 bg-transparent"
        {...rest}
        ref={ref}
      />
      <p className="mt-2  peer-invalid:visible text-red-600">
        {errors}
      </p>
    </>
  );
});


export default Input;