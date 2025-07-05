"use client";

const Roadmap = () => {
    const roadmapData = [
        {
            phase: "Phase 1: Launch (Q1 2025)",
            items: [
                "Official Launch On BSC",
                "Liquidity Lock For 5 Years",
                "Community Channels Live",
                "First Burn Event (1%)",
            ],
            position: "right",
        },
        {
            phase: "Phase 2: Growth (Q2 2025)",
            items: [
                "Listings On PancakeSwap, CoinMarketCap, And CoinGecko",
                "Viral Marketing Campaigns",
                "Community-Voted Charitable Donation",
            ],
            position: "left",
        },
        {
            phase: "Phase 3: Expansion (Q3 2025)",
            items: [
                "Launch ShibaGlow Dashboard",
                "Introduce Staking Pools",
                "Begin CEX Listing Discussions",
            ],
            position: "right",
        },
        {
            phase: "Phase 4: Utility (Q4 2025)",
            items: [
                "Launch ShibaGlow Wallet",
                "Gamification And Mini-Games",
                "Partner With Merchants For $GLOW Payment Adoption",
            ],
            position: "left",
        },
    ];

    return (
        <div id="roadmap" className="bg-[#94571C33] text-white py-8 sm:py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <div className="text-center mb-4 lg:mb-8 flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl md:text-[49px] font-bold mb-2">
                        Roadmap
                    </h2>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-white h-9/12 top-[150px]"></div>

                    {roadmapData.map((item, index) => (
                        <div key={index} className="relative mb-16 last:mb-0">
                            {/* Timeline Dot */}
                            <div
                                className={`absolute ${
                                    index == 0
                                        ? "top-[150px]"
                                        : index == 1
                                        ? "top-25"
                                        : "top-20"
                                } left-1/2 transform shadow-[0_0_20px_5px_rgba(255,255,0,0.5)] -translate-x-1/2 w-8 h-8 bg-white rounded-full border-8 border-[#c48f0e] z-10`}
                            ></div>

                            {/* Content Box */}
                            <div
                                className={`w-5/12 ${
                                    item.position === "right"
                                        ? "ml-auto pl-8"
                                        : "mr-auto pr-8"
                                }`}
                            >
                                <div className="bg-[#FFCBCB1A] border border-white rounded-lg p-6 backdrop-blur-sm">
                                    <h3 className="text-white font-bold text-[25px] mb-3">
                                        {item.phase}
                                    </h3>
                                    <ul className="text-white text-[20px] space-y-2 px-10 list-disc">
                                        {item.items.map(
                                            (listItem, itemIndex) => (
                                                <li key={itemIndex}>
                                                    <span className="leading-relaxed">
                                                        {listItem}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile/Tablet Timeline */}
                <div className="lg:hidden">
                                        {roadmapData.map((item, index) => (
                        <div
                            key={index}
                            className="relative mb-8 sm:mb-12 last:mb-0"
                        >
                            {/* Timeline connector for mobile */}
                            {index !== roadmapData.length - 1 && (
                                <div className="absolute left-3 top-20 w-0.5 bg-white h-[120%]"></div>
                            )}

                            {/* Timeline Dot */}
                            <div className="absolute left-0 top-20 w-6 h-6 bg-white rounded-full border-4 border-[#c48f0e] shadow-[0_0_12px_4px_rgba(255,255,0,0.4)] z-10"></div>

                            {/* Content Box */}
                            <div className="ml-10 sm:ml-12">
                                <div className="bg-[#FFCBCB1A] border border-white rounded-lg p-4 sm:p-6 backdrop-blur-sm">
                                    <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
                                        {item.phase}
                                    </h3>
                                    <ul className="text-white text-sm sm:text-base space-y-2 list-disc list-inside">
                                        {item.items.map(
                                            (listItem, itemIndex) => (
                                                <li
                                                    key={itemIndex}
                                                    className="leading-relaxed"
                                                >
                                                    {listItem}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
