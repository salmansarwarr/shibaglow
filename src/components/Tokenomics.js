'use client'

import Image from "next/image";
import React from "react";

const Tokenomics = () => {
    return (
        <div className="text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
            {/* Header Section */}
            <div className="text-center mb-4 lg:mb-8 flex flex-col items-center">
                <h2 className="text-3xl sm:text-4xl md:text-[49px] font-bold text-[#94571C] mb-2">
                    Tokenomics
                </h2>
                <p className="text-base sm:text-lg md:text-[30px] max-w-[719px] text-white">
                    1 Trillion SGLOW
                </p>
            </div>

            {/* Image Section */}
            <div className="w-full max-w-4xl mx-auto mb-6 sm:mb-8 relative">
                <div className="relative w-full h-38 ml-4 md:ml-10 lg:ml-16 sm:h-64 md:h-80 lg:h-96 xl:h-[389px]">
                    <Image
                        src='/tokenomics.png'
                        alt='tokenomics'
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Transaction Fees Section */}
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-[25px] mb-4 sm:mb-6 md:mb-8 font-semibold text-center">
                    Transaction Fees:
                </p>
                
                {/* Desktop/Tablet Layout */}
                <div className="hidden sm:flex sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 text-sm sm:text-base md:text-lg lg:text-[18px] w-full justify-center">
                    <ul className="list-disc space-y-2 sm:space-y-3 md:space-y-4">
                        <li>5% Reflections to holders</li>
                        <li>2% Liquidity for price stability</li>
                    </ul>
                    <ul className="list-disc space-y-2 sm:space-y-3 md:space-y-4">
                        <li>2% Burn to reduce supply</li>
                        <li>1% Charity for global causes</li>
                    </ul>
                </div>

                {/* Mobile Layout */}
                <div className="sm:hidden w-full max-w-sm">
                    <ul className="list-disc space-y-3 text-sm ml-4">
                        <li>5% Reflections to holders</li>
                        <li>2% Liquidity for price stability</li>
                        <li>2% Burn to reduce supply</li>
                        <li>1% Charity for global causes</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;