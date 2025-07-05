import Image from "next/image";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Sponsors from "@/components/Sponsors";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Benefits from "@/components/Benifits";
import Footer from "@/components/Footer";
import Wrapper from "@/web3/Wrapper";
import Head from "next/head";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "400", "600", "700"],
    display: "swap",
});

export default function Home() {
    return (
        <Wrapper>
            <div className={`bg-[#231105] ${poppins.className}`}>
                <Head>
                    <title>ShibaGlow</title>
                    <meta name="description" content="ShibaGlow - The ultimate meme token for the Shiba Inu community." />
                </Head>
                <Navbar />
                <Hero />
                <AboutUs />
                <Sponsors />
                <Tokenomics />
                <Roadmap />
                <Benefits />
                <Footer />
            </div>
        </Wrapper>
    );
}
