import React from "react";
import LoginHeroBtn from "../LoginHeroBtn/LoginHeroBtn";

function LoginHero() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <img
          src="/assets/svgs/hero.svg"
          alt="Hero image"
          className="drop-shadow-lg w-[80%] h-[80%] m-auto"
        />
        <LoginHeroBtn title={"Register Now"} />
      </div>
    </div>
  );
}

export default LoginHero;
