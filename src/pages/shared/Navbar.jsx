import React from "react";
import BannerHero from "../Home/BannerHero";
import frame from '../../assets/frame.png'

const Navbar = () => {
    const style = {
        background: 'linear-gradient(to right, #6797FFAF 10%,  #d5e3ff6d 50%, #f1f4ff)'
    };

    const link = <>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Pricing</a></li>
        <li><a>Consulting</a></li>
        <li><a>AI Coach</a></li>

    </>
    return (
        <header style={style}>
            <div className="navbar w-full  lg:w-[1440px] mx-auto shadow-sm">
                <div className="navbar-start flex py-4 px-4">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>



                    </div>
                    <div className="flex items-center gap-[74px]  ">
                        <div>
                            <img  src={frame} alt="" />

                        </div>
                        <div className="navbar-center hidden lg:flex text-black">
                            <ul className="menu menu-horizontal px-1">
                                {link}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <button className="border border-black text-sm px-5 py-2 rounded-full text-black "> Get started </button>
                </div>
            </div>
            <BannerHero></BannerHero>
        </header>


    );
};

export default Navbar;
