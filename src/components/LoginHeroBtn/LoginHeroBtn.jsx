function LoginHeroBtn({ title, width, height, position, gradient , disabled , type , callback }) {

  return (
    <button
      type={type? type : "button"}
      className={`rounded-full font-sans font-semibold text-white ${width} ${height} ${gradient} ${position}`}
      onClick={callback ? callback : null}
      disabled={disabled}
    >
      {title}
    </button>
  );
}


export default LoginHeroBtn;