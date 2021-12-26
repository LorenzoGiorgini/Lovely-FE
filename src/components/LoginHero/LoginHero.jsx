import React from "react";
import Lottie from "react-lottie";
import LoginHeroBtn from "../LoginHeroBtn/LoginHeroBtn";

import { useDispatch } from "react-redux";
import { setModalComponent, setShow } from "../../redux/actions/actions";
import SignUp from "../Modal/SignUp";

import animationData from "./login-hero.json";

function LoginHero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const dispatch = useDispatch();

  const dispatcher = () => {
    dispatch(setShow(true))
    dispatch(setModalComponent(<SignUp />))
  }

  return (
    <div className="flex items-center justify-center h-full w-full md:h-full lg:h-full">
      <div className="relative h-4/5 md:h-4/5 lg:h-full">
        <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
        <LoginHeroBtn
          title={"Register Now"}
          width={"w-36 sm:w-56 md:w-56 lg:w-56"}
          height={"h-9 sm:h-14 md:h-14 lg:h-14"}
          position={
            "absolute top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%]"
          }
          gradient={"bg-gradient-to-l from-orange-500 to-pink-500"}
          callback={dispatcher}
        />
      </div>
    </div>
  );
}

export default LoginHero;
