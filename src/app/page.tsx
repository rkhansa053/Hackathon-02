import UpperHeader, { Header } from "@/components/header";
import Hero, { Essentials, Main, NikeApp } from "@/components/hero";
import { Main2 } from "@/components/hero";
import { DontMiss } from "@/components/hero";
import { Footer2 } from "@/components/hero";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Main/>
      <Main2/>
      <NikeApp/>
      <DontMiss/>
      <Essentials/>
      <Footer2/>
    </div>
  );
}
