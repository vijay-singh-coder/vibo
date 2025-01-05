"use client"
import BgGradient from "@/components/common/bg-gradient";
import Banner from "@/components/home/banner";
import Footer from "@/components/home/footer";
import HowItWorks from "@/components/home/howitworks";
import Pricing from "@/components/home/pricing";
import Seprator from "@/components/seprator";

export default function Home() {
  return (
    <div>
      <BgGradient />
      <Banner />
      <Seprator />
      <HowItWorks />
      <Seprator />
      <Pricing />
      <Seprator />
      <Footer />
    </div>
  );
}
