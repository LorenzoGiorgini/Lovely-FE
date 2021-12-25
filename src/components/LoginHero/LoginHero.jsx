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
        <LoginHeroBtn title={"Register Now"} width={"w-36 sm:w-56 md:w-56 lg:w-56"} height={"h-9 sm:h-14 md:h-14 lg:h-14"} position={"absolute top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%]"} />
      </div>
    </div>
  );
}

export default LoginHero;
