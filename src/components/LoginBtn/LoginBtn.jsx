import React from "react";
import { useDispatch } from "react-redux";
import { setShow } from "../../redux/actions/actions";
import { setModalComponent } from "../../redux/actions/actions";
import LogIn from "../Modal/LogIn";

function LoginBtn({ title }) {

  const dispatch = useDispatch();

  const dispatcher = () => {
    dispatch(setShow(true))
    dispatch(setModalComponent(<LogIn />))
  }

  return (
    <button
      type="button"
      className="w-28 h-12 rounded-md bg-neutral-900 focus:outline-none focus:ring focus:ring-pink-500"
      onClick={() => dispatcher()}
    >
      <h1 className="font-sans text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
        {title}
      </h1>
    </button>
  );
}


export default LoginBtn;