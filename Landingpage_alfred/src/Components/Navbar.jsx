import React from "react";
import Logo from '../assets/3.svg'

const Navbar = () => {
    const navbarItems = [
        {link:"Overview", path:"home"},
        {link:"feature", path:"feature"},
        {link:"About", path:"about"},
        {link:"Pricing", path:"pricing"}
    ]
    return(
        <nav>
            <div>
                <div>
                    <a href="" className="text-2xl font-bold flex items-center space-x-3 text-primary">
                        <img src={Logo} alt="" className="w-20 inline-block items-center"/><span>Alfred</span>
                    </a>
                    <ul className="md:flex space-x-12">
                        {
                            navbarItems.map(({link,path})=> <a key={link} href={path} className="block hover:text-gray-300">{link}</a>)
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar