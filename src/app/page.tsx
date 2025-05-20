import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Loading from "@/components/Loading";
import Logo from "@/components/Logo";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";

export default function Home() {
  return (
    <div className="px-20 overflow-x-hidden">
    {/* <Logo/> */}
      <Hero />
      <Card />
      <Loading />
    </div>
  );
}
