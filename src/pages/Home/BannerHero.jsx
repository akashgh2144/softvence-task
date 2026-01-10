import React from 'react';

import image from '../../assets/image.png'
import image2 from '../../assets/image (1).png'
import art from '../../assets/atr.png'
import table from '../../assets/backup_table.png'

const BannerHero = () => {
    return (
        <section className="  lg:w-[1440px] mx-auto pt-12 lg:h-[850px] h-full w-full px-6 lg:px-0">
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 items-center lg:gap-12">

                {/* Left Section */}
                <div>
                    <h1 className="font-questrial text-4xl md:text-6xl font-bold text-[#1c1c1c] leading-tight">
                        Your AI- <br />
                        <span className="block">Powered</span>
                        Sales Coach
                    </h1>

                    <div className='flex gap-2 lg:gap-6 pt-4 lg:pt-6'>
                        <img className='lg:w-[204px] w-[100px] h-full' src={image2} alt="" />
                        <p className="text-gray-500 mt-6 text-[20px] md:w-3/4 font-questrial">
                            Get real-time coaching, script <br /> suggestions, and deal-closing <br />
                            strategies powered by advanced AI <br /> technology.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center lg:gap-10 mt-10">
                        <div className="flex items-center gap-4">
                            <div className="bg-white p-3 rounded-xl shadow-md">
                                <img
                                    src={table}
                                    alt="Protection Icon"
                                    className="w-10 h-10 object-cover rounded"
                                />
                            </div>
                            <div>
                                <p className="text-lg font-bold text-[#1c1c1c]">2000+</p>
                                <p className="text-sm text-gray-500">Your protection</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-white p-3 rounded-xl shadow-md">
                                <img
                                    src={art}
                                    alt="Tailored Icon"
                                    className="w-10 h-10 object-cover rounded"
                                />
                            </div>
                            <div>
                                <p className="text-lg font-bold text-[#1c1c1c]">7001+</p>
                                <p className="text-sm text-gray-500">Provide tailored</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="relative">
                    {/* Robot Image with custom shape */}
                    <div className="rounded-[60px_0px_60px_0px] overflow-hidden lg:w-[583px] w-full py-4 lg:py-0 mx-auto">
                        <img
                            src={image}
                            alt="AI Robot"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Floating Stats Box */}
                    <div className="lg:absolute lg:bottom-[-50px] lg:right-[350px] px-6 lg:px-14  bg-white rounded-xl lg:p-14 shadow-lg py-10  w-full lg:w-[467px] ">
                        <div className=" font-questrial flex justify-between text-[#1c1c1c] font-semibold text-xl">
                            <p className='font-questrial text-[50px]'>721+</p>
                            <p className='font-questrial text-[50px]'>1000+</p>
                        </div>
                        <p className="text-black pt-4 font-semibold text-[28px] pb-4">
                            Growth is our priority.
                        </p>
                        <p className="text-gray-500 text-[17px] mt-1 border-t pt-2">
                            As a full-service business agency, we specialize in helping
                            companies of all sizes optimize their operations
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerHero;
