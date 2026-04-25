import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import logo from '../assets/Elderly.png';
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";

const Navbar = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const { isLoggedIn, setIsLoggedIn } = props;

    const handleProfileMenuToggle = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };
    const handleMenuItemClick = () => {
        setIsMenuOpen(false);  // Close sidebar
    };

    return (
        <div className='md:flex md:flex-row md:justify-between md:w-11/12 md:h-[50px] md:mt-5 md:mx-auto md:bg-white md:pt-2 md:px-4 md:rounded-3xl flex flex-col justify-between w-11/12 h-[40px] mt-5 mx-auto bg-white pt-2 px-4 rounded-3xl'>
            <Link to="/">
                <img src={logo} alt="Logo" width={180} height={50} className='w-28 md:w-40' loading="lazy" />
            </Link>

            <button 
                className='text-black md:hidden absolute top-4 right-4 z-50 mr-10 mt-3' 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <RxCross1 size={24} /> : <CiMenuFries size={24} />}
            </button>

            <div className='flex flex-row justify-evenly gap-12'>
                <nav className={`fixed inset-y-0 right-0 w-3/4 max-w-xs bg-white shadow-lg md:static md:bg-transparent transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 z-40`}>
                    <ul className='text-black text-lg flex flex-col md:flex-row gap-y-4 md:gap-x-8 p-8 md:p-0'>
                        <li className='hover:scale-110 transition-transform'>
                            <Link to="/" onClick={handleMenuItemClick}>Home</Link>
                        </li>
                        <li className='hover:scale-110 transition-transform'>
                            <Link to="/about" onClick={handleMenuItemClick}>About</Link>
                        </li>
                        <li className='hover:scale-110 transition-transform'>
                            <Link to="/contact" onClick={handleMenuItemClick}>Contact</Link>
                        </li>
                    </ul>
                </nav>

                {/* User Icon for mobile */}
                <button 
                    className='text-black md:hidden absolute top-4 right-4 z-50'
                    onClick={handleProfileMenuToggle}
                >
                    <FaUserCircle size={30} className='cursor-pointer mt-2 bg-white rounded-2xl z-50' />
                </button>

                {/* User Icon for desktop */}
                <div className='hidden md:flex flex-col md:gap-x-4'>
                    <FaUserCircle 
                        size={30} 
                        className='cursor-pointer right-16 bg-white shadow-md rounded-2xl transition-transform transform hover:scale-105 z-50' 
                        onClick={handleProfileMenuToggle} 
                    />
                </div>

                {/* Profile Dropdown Menu */}
                {isProfileMenuOpen && (
                    <div 
                        className={`absolute ${isMenuOpen ? 'top-14 right-4' : 'top-20 right-10'} bg-white shadow-md rounded-md py-2 w-40 transition-transform transform hover:scale-105 z-50`}
                    >
                        <ul className='text-black'>
                            {!isLoggedIn ? (
                                <>
                                    <li className='px-4 py-2 hover:bg-gray-200 transition-colors'>
                                        <Link to="/login" onClick={handleProfileMenuToggle}>Log in</Link>
                                    </li>
                                    <li className='px-4 py-2 hover:bg-gray-200 transition-colors'>
                                        <Link to="/signup" onClick={handleProfileMenuToggle}>Sign up</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className='px-4 py-2 hover:bg-gray-200 transition-colors'>
                                        <Link to="/dashboard" onClick={handleProfileMenuToggle}>Dashboard</Link>
                                    </li>
                                    <li className='px-4 py-2 hover:bg-gray-200 transition-colors'>
                                        <button 
                                            onClick={() => {
                                                setIsLoggedIn(false);
                                                toast.success("Logged Out");
                                                handleProfileMenuToggle();
                                            }}
                                        >
                                            Log Out
                                        </button>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
