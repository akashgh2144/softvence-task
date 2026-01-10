import React from 'react';
import { ChevronDown, ChevronUp, ArrowRight, ArrowLeft } from "lucide-react";

const Accordion = () => {




    return (
        <section className="bg-[#f9f9fb] px-6 py-16">
            <div className="lg:w-[1440px] mx-auto text-center w-full">
                <div className='flex justify-start'>
                    <p className="text-[20px] text-blue-700 mb-2">Frequently asked <br /> questions</p>
                </div>
                <h2 className="font-questrial text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
                    Constant collaboration is how we <br /> roll. Let's see if we are a good fit.
                </h2>

                <div className="space-y-4 text-left ">
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 bg-white text-black">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="font-questrial collapse-title text-[25px] font-semibold">01. Why should I choose Humestic?</div>
                        <div className="font-questrial collapse-content text-sm">Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 bg-white text-black">
                        <input type="radio" name="my-accordion-3" />
                        <div className="font-questrial collapse-title text-[25px] font-semibold"> 02. I like your works, how do we start a project?</div>
                        <div className="font-questrial collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                    </div>
                    <div className="collapse  collapse-plus bg-gradient-to-r from-white via-pink-100 to-white border border-base-300 bg-white text-black">
                        <input type="radio" name="my-accordion-3" />
                        <div className="font-questrial collapse-title text-[25px] font-semibold"> 03. What info is required to get a quotation?</div>
                        <div className="font-questrial collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
                </div>

                {/* Testimonial */}
                <div className=" text-left lg:pt-24 bg-gradient-to-r from-white via-pink-100 to-white p-8 rounded-xl shadow">
                    <p className="text-xl  font-medium text-gray-900 italic mb-6">
                        “They thoroughly analyze our industry and target audience, allowing them to
                        develop customized campaigns that effectively reach and engage our customers.
                        Their creative ideas and cutting-edge techniques have helped us stay ahead of
                        the competition.”
                    </p>
                    <div className='flex justify-between items-center'>
                        <div className="flex  space-x-4 -bottom-20 lg:pt-8">
                            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                            <div className='flex flex-col justify-start '>
                                <p className="font-semibold text-gray-800">Michael Kaizer</p>
                                <p className="text-sm text-gray-500">CEO of Basecamp Corp</p>
                            </div>
                        </div>

                        <div className="flex items-center lg:gap-8 justify-end  mt-8">
                            <button className="flex  items-center space-x-2 text-blue-900 border border-blue-900 px-3 py-1 rounded-full hover:bg-blue-900 hover:text-white transition">
                                <ArrowLeft size={16} />
                            </button>
                            <span className="text-sm font-medium text-gray-600">01/05</span>
                            <button className="flex items-center space-x-2 bg-blue-900 text-white px-3 py-1 rounded-full hover:bg-blue-800 transition">
                                <ArrowRight size={16} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordion;