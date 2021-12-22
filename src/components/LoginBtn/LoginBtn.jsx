import React from 'react'

function LoginBtn({ title }) {
    return (
        <button type="button" className="w-28 h-12 rounded-md bg-black focus:outline-none focus:ring focus:ring-pink-500">
          <h1 className="font-sans text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
            {title}
          </h1>
        </button>
    )
}

export default LoginBtn