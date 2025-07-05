"use client";

import React, { useState, useEffect } from "react";
import localFont from "next/font/local";
import { useAppKit } from "@reown/appkit/react";
import { useAccount, useDisconnect } from "wagmi";

const customFont = localFont({
    src: [
        {
            path: "../../public/fonts/GROBOLD.woff",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-grobold",
    display: "swap",
});

const Hero = () => {
    const { open } = useAppKit();
    const { address, isConnected } = useAccount();

    const handleConnect = () => {
        if (!isConnected) {
            open();
        }
    };

    const [timeLeft, setTimeLeft] = useState({
        days: 14,
        hours: 23,
        minutes: 59,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev;
                if (seconds > 0) seconds--;
                else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else if (days > 0) {
                    days--;
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) return null;

    return (
        <div className="2xl:mt-8 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-14 py-6 sm:py-8 md:py-10 relative overflow-hidden">
            {/* Floating Visual Elements */}
            <div className="absolute top-14 right-8 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-yellow-400 rounded-full opacity-30 shadow-xl"></div>
            <div className="absolute bottom-16 left-8 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-400 rounded-full opacity-20"></div>
            <div className="absolute top-1/3 left-1/4 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-amber-300 rounded-full opacity-15"></div>

            {/* Main Content */}
            <div className="relative z-10 text-center sm:text-left text-white w-full max-w-[1440px] mx-auto">
                <div className="max-w-full sm:max-w-[600px] md:max-w-[800px] xl:max-w-[1100px]">
                    {/* Heading */}
                    <h1
                        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-black mb-5 leading-tight ${customFont.className}`}
                    >
                        <span>The Meme Coin</span>
                        <span className="block">for Community</span>
                        <span className="block">Fun and Financial</span>
                        <span className="block">Rewards</span>
                    </h1>

                    {/* Subtitles */}
                    <div className="mb-6 sm:mb-8 lg:max-w-[700px]">
                        <p className="text-base sm:text-lg md:text-xl xl:text-2xl mb-1">
                            Fortune Favors the Bold: ShibaGlow's Presale™
                        </p>
                        <p className="text-base sm:text-lg md:text-xl xl:text-2xl opacity-90">
                            Turn $100 into $100,000 with ShibaGlow — the 1000x
                            meme coin that's about to make you laugh all the way
                            to the bank!
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full mt-8 gap-8 lg:gap-4">
                    {/* Connect Wallet */}
                    <div className="order-2 lg:order-1 flex-shrink-0 text-center lg:text-left">
                        <p className="text-sm sm:text-base md:text-lg mb-3">
                            Connect Your Wallet To Join ShibaGlow's Presale
                        </p>
                        <button
                            className="bg-white cursor-pointer py-3 px-6 text-[#301A0D] text-sm sm:text-base font-semibold rounded hover:bg-gray-100 transition w-full sm:w-auto"
                            onClick={handleConnect}
                        >
                            {isConnected
                                ? `${address?.slice(0, 6)}...${address?.slice(
                                      -4
                                  )}`
                                : "CONNECT WALLET"}
                        </button>
                    </div>

                    {/* Countdown */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="grid grid-cols-4 gap-4">
                            {["Days", "Hours", "Minutes", "Seconds"].map(
                                (label, index) => {
                                    const value = [
                                        timeLeft.days,
                                        timeLeft.hours,
                                        timeLeft.minutes,
                                        timeLeft.seconds,
                                    ][index];
                                    return (
                                        <div
                                            key={label}
                                            className="text-center"
                                        >
                                            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-[#94571C4D] py-3 lg:py-5 px-2 lg:px-3 rounded-lg">
                                                {value
                                                    .toString()
                                                    .padStart(2, "0")}
                                            </div>
                                            <div className="text-xs sm:text-sm font-medium">
                                                {label}
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
