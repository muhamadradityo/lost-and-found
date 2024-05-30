import React from 'react'
import NavBar from '../components/Layouts/NavBar'
import Footer from '../components/Layouts/Footer'

const Layout = ({ children, isAuth, isOnlyLogo, isSearchEnabled, buatPostinganOptions }) => {
    return (
        <div className='flex flex-col min-h-screen overflow-hidden text-black'>
            <NavBar isAuth={isAuth} isOnlyLogo={isOnlyLogo} isSearchEnabled={isSearchEnabled} buatPostinganOptions={buatPostinganOptions} />
            <main className="h-full items-start">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout