import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setShow } from "../../redux/actions/actions";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

function Modal({ logIn }) {

  const dispatch = useDispatch() 

  const {homeModal} = useSelector(state => state.home);

  return (
    <div className="flex justify-center md:bg-transparent font-sans text-white font-bold items-center overflow-x-hidden overflow-y-auto fixed inset-0 bg-blend-overlay"
    onClick={() => dispatch(setShow(false))}
    >
      <div className={`w-full h-full bg-neutral-900 md:w-96 md:h-96 z-40 drop-shadow-2xl rounded-lg overflow-hidden scale-up-center`}
       onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <img
            src="/assets/svgs/close.svg"
            alt="close btn"
            className="w-10 h-10 cursor-pointer"
            onClick={() => dispatch(setShow(false))}
          />
        </div>
        <div className="w-full h-full flex flex-col items-center">
          <img
            src="/assets/imgs/logo_colorful.png"
            alt="logo"
            className="w-16 h-16"
          />
          {logIn ? <LogIn /> : <SignUp />}
        </div>
      </div>
    </div>
  );
}


export default Modal;