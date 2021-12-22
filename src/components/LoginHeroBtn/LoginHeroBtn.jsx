import React from 'react'

function LoginHeroBtn({ title }) {
    return (
        <button type="button" className="rounded-full font-sans font-semibold text-white h-14 w-56 bg-gradient-to-l from-orange-500 to-pink-500 absolute top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          {title}
        </button>
    )
}


export default LoginHeroBtn