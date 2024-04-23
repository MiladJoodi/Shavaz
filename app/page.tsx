
import Image from "next/image";
import Header from "../components/header/header";
import Slider from "@/components/slider/Slider";
import SurpriseSlider from "@/components/surpriseSlider/SurpriseSlider";

export default function Home() {
  return (
      <main>
      <Slider />
      <SurpriseSlider />

      </main>
  );
}
