import React from 'react'
import Logo from "../../assets/svgs/logo_white.svg"

function LoginHeader({title}) {
    return (
        <div className="flex flex-row">
          <img src={Logo} alt="Lovey-icon" className="w-12 h-12" />
          <h1 className="font-sans font-bold text-4xl m-auto ml-2 tracking-tighter text-white">{title}</h1>
        </div>
    )
}

export default LoginHeader