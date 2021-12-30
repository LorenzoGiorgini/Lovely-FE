

const Input = ({ id, placeholder, name , value, handleForm }) => {
  return (
    <>
      <span className="text-pink-500 w-60">{placeholder}</span>
      <input
        type={id}
        id={id}
        placeholder={placeholder}
        className="w-full outline-none text-purple-500 bg-transparent mt-1 mb-6"
        name={name}
        value={value}
        onChange={(e) => handleForm(e)}
      />
    </>
  );
}


export default Input;