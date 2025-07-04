import React from "react";
import { Instagram, Twitter, Send } from "lucide-react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#94571C33] text-white py-8 sm:py-12 px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_507px] gap-8 lg:gap-12">
                    {/* Image Section */}

                    <div className="relative w-full lg:mt-[-50px] lg:ml-[-30px] h-[250px] sm:h-[300px] lg:h-[350px]">
                        <Image
                            src="/shiba3.png"
                            alt="shiba glow"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Brand Section */}
                    <div className="text-center lg:text-left lg:col-span-1">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold leading-tight">
                            SHIBAGLOW
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-[20px] mb-6 sm:mb-8">
                            Fortune Favors The Bold!
                        </p>

                        {/* Copyright and Email */}
                        <div className="text-xs sm:text-sm md:text-[13px] mb-6 space-y-1">
                            <p>© 2025 shibaglow</p>
                            <p>info@shibaglow.com</p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-center lg:justify-start space-x-3">
                            <div className="rounded-full w-8 h-8 flex items-center justify-center bg-[#FFCBCB1A] hover:bg-[#FFCBCB33] transition-colors duration-200">
                                <a
                                    href="#"
                                    className="text-white hover:text-yellow-400 transition-colors duration-200"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={16} />
                                </a>
                            </div>
                            <div className="rounded-full w-8 h-8 flex items-center justify-center bg-[#FFCBCB1A] hover:bg-[#FFCBCB33] transition-colors duration-200">
                                <a
                                    href="#"
                                    className="text-white hover:text-yellow-400 transition-colors duration-200"
                                    aria-label="Twitter"
                                >
                                    <Twitter size={16} />
                                </a>
                            </div>
                            <div className="rounded-full w-8 h-8 flex items-center justify-center bg-[#FFCBCB1A] hover:bg-[#FFCBCB33] transition-colors duration-200">
                                <a
                                    href="#"
                                    className="text-white hover:text-yellow-400 transition-colors duration-200"
                                    aria-label="Telegram"
                                >
                                    <Send size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="text-center lg:text-left lg:col-span-1">
                        <h3 className="text-base sm:text-lg font-semibold mb-4">
                            Quick Links
                        </h3>

                        <div className="mb-6">
                            <p className="text-base sm:text-lg font-medium mb-4">
                                COMING SOON...
                            </p>
                            <ul className="space-y-3 text-sm sm:text-base">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-yellow-400 transition-colors duration-200 inline-block"
                                    >
                                        • Twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-yellow-400 transition-colors duration-200 inline-block"
                                    >
                                        • Telegram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-yellow-400 transition-colors duration-200 inline-block"
                                    >
                                        • Discord
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-yellow-400 transition-colors duration-200 inline-block"
                                    >
                                        • Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal Disclaimer */}
                        <div className="pt-4 border-t border-white/20">
                            <p className="text-xs leading-relaxed text-gray-300">
                                <span className="font-bold">
                                    Legal disclaimer:
                                </span>{" "}
                                Cryptocurrency investments involve risk. Please
                                invest responsibly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
