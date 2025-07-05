import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-4 sm:px-8 md:px-12 py-4">
      <div className="flex items-center lg:items-start justify-between lg:justify-center lg:gap-20">
        {/* Logo */}
        <Link href="/">
          <Image src="/image.png" alt="Logo" width={134} height={140} className="h-[90px] lg:h-auto w-auto" />
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={30} color="white" /> : <Menu size={30} color="white" />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-12 mt-6">
          <ul className="flex items-center space-x-8 text-white text-[18px] lg:text-[19px] 2xl:text-[22px]">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#about-us">Introduction</Link></li>
            <li><Link href="#sponsors">Sponsors</Link></li>
            <li><Link href="#tokenomics">Tokenomics</Link></li>
            <li><Link href="#roadmap">Roadmap</Link></li>
            <li><Link href="#benefits">Holders' Benefits</Link></li>
          </ul>

          <Link href="/whitepaper">
            <div className="px-7 py-3 flex items-center justify-center bg-white text-[#301A0D] text-[16px] lg:text-[18px] font-semibold rounded">
              WHITEPAPER
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          <ul className="flex flex-col space-y-3 text-white text-[18px] font-medium">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/introduction" onClick={() => setMenuOpen(false)}>Introduction</Link></li>
            <li><Link href="/sponsors" onClick={() => setMenuOpen(false)}>Sponsors</Link></li>
            <li><Link href="/tokenomics" onClick={() => setMenuOpen(false)}>Tokenomics</Link></li>
            <li><Link href="/roadmap" onClick={() => setMenuOpen(false)}>Roadmap</Link></li>
            <li><Link href="/holders-benefits" onClick={() => setMenuOpen(false)}>Holders' Benefits</Link></li>
            <li>
              <Link href="/whitepaper" onClick={() => setMenuOpen(false)}>
                <div className=" flex items-center justify-center bg-white text-[#301A0D] text-[16px] font-semibold rounded-xl">
                  WHITEPAPER
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
