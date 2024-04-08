import React, { useState } from "react";
import Logo from '../assets/3.svg'

/* --------------------------------Importacion de iconos---------------------------------------- */
import { GrLanguage } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const[isMenuOpen,setIsMenuOpen] = useState(false)

    const ToggleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navbarItems = [
        {link:"Overview", path:"home"},
        {link:"feature", path:"feature"},
        {link:"About", path:"about"},
        {link:"Pricing", path:"pricing"}
    ]
    return(
        <>
            <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0">
                <div className="text-lg container mx-auto flex justify-between items-center font-medium">
                    <div className="flex space-x-14 items-center">
                        <a href="" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
                            <img src={Logo} alt="" className="w-10 inline-block items-center"/><span>Alfred</span>
                        </a>
                        <ul className="md:flex space-x-12 hidden">
                            {
                                navbarItems.map(({link,path})=> <a key={link} href={path} className="block hover:text-gray-300">{link}</a>)
                            }
                        </ul>
                    </div>
                    <div className="space-x-12 hidden md:flex items-center">
                        <a href="" className="hidden lg:flex items-center hover:text-secondary"><GrLanguage className="mr-2"/> <span>Language</span></a>
                        <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">Sign-in</button>
                    </div>
                    <div className="md:hidden">
                            <button onClick={ToggleMenuOpen} className="text-white text-lg focus:outline-none focus:text-gray-300">
                                {
                                    isMenuOpen ? (<FaXmark className="w-6 h-6 text-primary"/>) : (<FaBars className="w-6 h-6 text-primary" />)
                                }
                            </button>
                    </div>
                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navbarItems.map(({link,path})=> <a key={link} href={path} className="block hover:text-gray-300">{link}</a>)
                }
            </div>
        </>
    )
}

export default Navbar