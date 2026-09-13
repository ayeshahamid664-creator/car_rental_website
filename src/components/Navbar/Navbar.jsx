
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import ResponsiveMenu from '../ResponsiveMenu/ResponsiveMenu';
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import CartIcon from '../Cart/CartIcon';
import CartDrawer from '../Cart/CartDrawer';

export const NavLinks = [
    {
        id: "1",
        name: "HOME",
        link: "/",
    },
    {
        id: "2",
        name: "CARS",
        link: "/cars",
    },
    {
        id: "3",
        name: "ABOUT",
        link: "/about",
    },
    {
        id: "4",
        name: "BOOKING",
        link: "/booking",
    },
 
]

const Navbar = ({ theme, setTheme }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const togglemenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <>
            <nav className={`shadow-md duration-300 fixed left-0 right-0 top-0 w-full z-50 ${
                theme === "dark" 
                ? "bg-gray-900 text-white" 
                : "bg-white text-gray-900"
            }`}>
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-0">
                    <div className="flex justify-between items-center">
                        <div>
                            <Link to="/" className="text-3xl font-bold font-serif">Car Rental</Link>
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex items-center gap-8">
                                {
                                    NavLinks.map((data) => (
                                        <li key={data.id} className="py-4">
                                            <Link 
                                                className="inline-block py-2 hover:border-b-2 hover:text-yellow-500 hover:border-yellow-500 transition-colors duration-500 text-lg font-medium" 
                                                to={data.link}
                                            >
                                                {data.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                                <CartIcon onClick={() => setIsCartOpen(true)} />
                                <div>
                                    {
                                        theme === "dark" ? (
                                            <BiSolidSun
                                                onClick={() => setTheme("light")}
                                                className='text-2xl cursor-pointer hover:text-yellow-500 duration-300' 
                                            />
                                        ) : (
                                            <BiSolidMoon
                                                onClick={() => setTheme("dark")}
                                                className='text-2xl cursor-pointer hover:text-yellow-500 duration-300' 
                                            />
                                        )
                                    }
                                </div>
                            </ul>
                        </div>

                        <div className='flex items-center gap-4 md:hidden'>
                            <CartIcon onClick={() => setIsCartOpen(true)} />
                            <div>
                                {
                                    theme === "dark" ? (
                                        <BiSolidSun
                                            onClick={() => setTheme("light")}
                                            className='text-2xl cursor-pointer' 
                                        />
                                    ) : (
                                        <BiSolidMoon
                                            onClick={() => setTheme("dark")}
                                            className='text-2xl cursor-pointer' 
                                        />
                                    )
                                }
                            </div>
                            {showMenu ? (
                                <HiMenuAlt1
                                    onClick={togglemenu}
                                    size={30}
                                    className="cursor-pointer transition-all"
                                />
                            ) : (
                                <HiMenuAlt3
                                    onClick={togglemenu}
                                    size={30}
                                    className="cursor-pointer transition-all"
                                />
                            )}
                        </div>
                    </div>
                </div>
                <ResponsiveMenu showMenu={showMenu} closeMenu={closeMenu} theme={theme} />
            </nav>
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} theme={theme} />
        </>
    )
}

export default Navbar