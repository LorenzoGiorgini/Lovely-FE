import React from 'react'
import LoginHero from '../components/LoginHero/LoginHero'
import NavBarHome from '../components/NavBarHome/NavBarHome'

function Home() {
    return (
        <div className="h-screen overflow-x-hidden overflow-y-hidden bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500">
            <NavBarHome />
            <LoginHero />
        </div>
    )
}


export default Home