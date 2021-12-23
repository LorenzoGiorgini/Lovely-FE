import React from "react";
import { useDispatch } from "react-redux";
import { setShow } from "../../redux/actions/actions";

function LoginHeroBtn({ title }) {

  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="rounded-full font-sans font-semibold text-white h-9 w-36 sm:h-14 sm:w-56 md:h-14 md:w-56 lg:h-14 lg:w-56 bg-gradient-to-l from-orange-500 to-pink-500 absolute top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      onClick={() => dispatch(setShow(true))}
    >
      {title}
    </button>
  );
}


export default LoginHeroBtn;