"use client";

import React from "react";

const AboutUs = () => {
    return (
        <div className="text-white pt-8 pb-14 md:pt-18 md:pb-32 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-col items-center justify-center text-center mb-2 md:mb-6">
                <h2 className="text-4xl sm:text-[49px] font-bold text-[#94571C] mb-2">
                    About Us
                </h2>
                <p className="text-xl sm:text-[30px] font-semibold mb-6">
                    Welcome to ShibaGlow!
                </p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Side - Introduction & Vision */}
                <div>
                    {/* Introduction */}
                    <div className="mb-8">
                        <h3 className="text-lg sm:text-[35px] font-bold text-[#94571C] mb-2">
                            Introduction
                        </h3>
                        <p className="text-sm sm:text-[23px] leading-relaxed text-white/90">
                            ShibaGlow ($GLOW) isn’t just another meme coin—it’s
                            a movement combining viral meme culture with
                            financial rewards and global impact. Built on the
                            Binance Smart Chain (BSC), ShibaGlow is your gateway
                            to a community-focused, hyper-deflationary token
                            that rewards holders and gives back to meaningful
                            causes.
                        </p>
                    </div>

                    {/* Vision */}
                    <div>
                        <h3 className="text-lg sm:text-[35px] font-bold text-[#94571C] mb-2">
                            Vision
                        </h3>
                        <p className="text-sm sm:text-[23px] leading-relaxed text-white/90">
                            To redefine meme coins by blending fun, financial
                            inclusion, and charitable impact, creating a
                            community where everyone can laugh, earn, and make a
                            difference.
                        </p>
                    </div>
                </div>

                {/* Right Side - Core Features */}
                <div>
                    <h3 className="text-xl sm:text-[35px] font-bold text-[#94571C] mb-6">
                        Core Features
                    </h3>

                    <ul className="space-y-6 text-sm sm:text-[20px]">
                        <li>
                            <h4 className="text-[#94571C] sm:text-[25px] font-semibold mb-1">
                                Hyper-Deflationary Mechanics
                            </h4>
                            <p className="text-white/90">
                                Every transaction reduces the total supply,
                                making $GLOW increasingly scarce and valuable.
                            </p>
                        </li>

                        <li>
                            <h4 className="text-[#94571C] sm:text-[25px] font-semibold mb-1">
                                Holder Rewards
                            </h4>
                            <p className="text-white/90">
                                Earn passive income with 5% reflections from
                                every transaction.
                            </p>
                        </li>

                        <li>
                            <h4 className="text-[#94571C] sm:text-[25px] font-semibold mb-1">
                                Charitable Impact
                            </h4>
                            <p className="text-white/90">
                                Support global causes through community-chosen
                                donations.
                            </p>
                        </li>

                        <li>
                            <h4 className="text-[#94571C] sm:text-[25px] font-semibold mb-1">
                                Community Governance
                            </h4>
                            <p className="text-white/90">
                                Participate in key decisions, including burns
                                and charity initiatives.
                            </p>
                        </li>

                        <li>
                            <h4 className="text-[#94571C] sm:text-[25px] font-semibold mb-1">
                                Scalability & Low Fees
                            </h4>
                            <p className="text-white/90">
                                Fast and cost-effective transactions on the
                                Binance Smart Chain.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
