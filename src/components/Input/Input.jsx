import { forwardRef } from 'react';

const Input = forwardRef(({ id, placeholder, name, errors , ...rest}, ref) => {
  return (
    <>
      <span className="text-pink-500 w-60">{placeholder}</span>
      <input
        type={id}
        id={id}
        placeholder={placeholder}
        className="w-full outline-none text-purple-500 bg-transparent mt-1 mb-6"
        name={name}
        {...rest}
        ref={ref}
      />
      <span className="flex text-red-500">{errors}</span>
    </>
  );
})


export default Input;