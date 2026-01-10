import React from 'react';

const NewsLetter = () => {
    return (
        <div className='lg:w-[1440px] w-full mx-auto bg-gradient-to-r from-blue-800 to-blue-600 rounded-3xl py-12 px-6 md:px-12  text-center text-white  '>
                <h2 className="font-questrial text-2xl md:text-3xl font-semibold mb-2">
                    Ready to Hire Smarter?
                </h2>
                <p className="font-questrial text-sm md:text-base mb-6">
                    Unlock Exclusive Insights. Subscribe to Our Newsletter
                </p>
                <button className=" font-questrial bg-yellow-300 hover:bg-yellow-400 text-blue-900 font-semibold px-6 py-2 rounded-full transition duration-300">
                    Join Now
                </button>
            </div>
    );
};

export default NewsLetter;