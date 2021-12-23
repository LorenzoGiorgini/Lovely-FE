import React from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

function Modal({ setShow, logIn }) {

  return (
    <div className="flex justify-center md:bg-transparent items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-blend-overlay">
      <div className="w-full h-full bg-white md:w-96 md:h-96">
        <div className="flex justify-end">
          <img src="/assets/svgs/close.svg" alt="close btn" className="w-10 h-10" />
        </div>
        <div className="w-full h-full flex flex-col items-center">
            <img src="/assets/imgs/logo_colorful.png" alt="logo" className="w-16 h-16" />
            {logIn? <LogIn /> : <SignUp />}
        </div>
      </div>
    </div>
  );
}



export default Modal;