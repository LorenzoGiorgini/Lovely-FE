import React from 'react'

function LoginHeader({title}) {
    return (
        <div className="flex flex-row">
          <img src="assets/svgs/logo_white.svg" alt="Lovey-icon" className="w-12 h-12" />
          <h1 className="font-sans font-bold text-4xl m-auto ml-2 tracking-tighter text-white">{title}</h1>
        </div>
    )
}

export default LoginHeader