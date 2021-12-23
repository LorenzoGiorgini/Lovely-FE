import React from "react";
import LoginHeroBtn from "../LoginHeroBtn/LoginHeroBtn";

function LoginHero() {
  return (
    <div className="flex items-center justify-center h-4/5 md:h-4/5 lg:h-full">
      <div className="relative">
        <img
          src="/assets/svgs/hero.svg"
          alt="Hero image"
          className="drop-shadow-lg xl:w-[90%] xl:h-[90%] m-auto"
        />
        <LoginHeroBtn title={"Register Now"} />
      </div>
    </div>
  );
}

export default LoginHero;
