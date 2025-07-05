"use client";

import { useAppKit } from "@reown/appkit/react";
import Image from "next/image";
import React from "react";
import { useAccount } from "wagmi";

const Benefits = () => {
        const { open } = useAppKit();
        const { address, isConnected } = useAccount();
    
        const handleConnect = () => {
            if (!isConnected) {
                open();
            }
        };
    
    return (
        <div id="benifits" className="text-white pt-8 pb-14 md:pt-18 md:pb-32 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-col items-center justify-center text-center mb-2 md:mb-6">
                <h2 className="text-4xl sm:text-[49px] font-bold text-[#94571C] lg:mb-2">
                    Holders’ Benefits
                </h2>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
                <div className="order-2 lg:order-1">
                    <ul className="space-y-6 text-sm sm:text-[20px]">
                        <li>
                            <h4 className="text-[#94571C] sm:text-[25px] font-semibold mb-1">
                                Passive Income
                            </h4>
                            <p className="text-white/90">
                                Earn reflections automatically.
                            </p>
                        </li>

                        <li>
                            <h4 className="text-[#94571C] sm:text-[25px] font-semibold mb-1">
                                Deflationary Growth:
                            </h4>
                            <p className="text-white/90">
                                Token burns increase value.
                            </p>
                        </li>

                        <li>
                            <h4 className="text-[#94571C] sm:text-[25px] font-semibold mb-1">
                                Community Voice:
                            </h4>
                            <p className="text-white/90">
                                Influence key decisions.
                            </p>
                        </li>

                        <li>
                            <h4 className="text-[#94571C] sm:text-[25px] font-semibold mb-1">
                                Security:
                            </h4>
                            <p className="text-white/90">
                                Liquidity locked, regular audits.
                            </p>
                        </li>

                        <li>
                            <h4 className="text-[#94571C] sm:text-[25px] font-semibold mb-1">
                                Charitable Impact:
                            </h4>
                            <p className="text-white/90">
                                Support global causes with every transaction.
                            </p>
                        </li>

                        <li>
                            <p className="text-white/90">
                                Connect your wallet to join shibaglow's presale
                            </p>
                        </li>

                        <li className="mt-[-14px]">
                            <button className="bg-white cursor-pointer py-3 px-6 text-[#301A0D] text-sm sm:text-base font-semibold rounded hover:bg-gray-100 transition w-full sm:w-auto" onClick={handleConnect}>
                            {isConnected
                                ? `${address?.slice(0, 6)}...${address?.slice(
                                      -4
                                  )}`
                                : "CONNECT WALLET"}
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="order-1 lg:order-2 relative w-full h-[300px] sm:h-[558px] mx-auto mb-4">
                    <Image
                        src="/shiba2.png"
                        alt="shiba glow"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Benefits;
