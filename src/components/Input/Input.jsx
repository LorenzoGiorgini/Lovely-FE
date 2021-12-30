

const Input = ({ id, placeholder }) => {
  return (
    <>
      <span className="text-pink-500 w-60">{placeholder}</span>
      <input
        type={id}
        id={id}
        placeholder={placeholder}
        className="w-full outline-none text-purple-500 bg-transparent"
       
      />
    </>
  );
}


export default Input;