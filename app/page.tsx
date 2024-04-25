
import Image from "next/image";
import Header from "../components/header/header";
import Slider from "@/components/slider/Slider";
import SurpriseSlider from "@/components/surpriseSlider/SurpriseSlider";
import Category from "@/components/category/category";
import Banners from "@/components/banners/banner";

export default function Home() {
  return (
      <main>
      <Slider />
      <SurpriseSlider />
      <Category />
      <Banners />
      </main>
  );
}
