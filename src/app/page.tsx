import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Boost from "@/components/sections/boost/Boost";
import Hero from "@/components/sections/hero/Hero";
import Services from "@/components/sections/services/Services";
import ShortenUrl from "@/components/sections/shortenUrl/ShortenUrl";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden">
        <Hero />
        {/* <FormUrl /> */}
        <ShortenUrl />
        <Services />
        <Boost />
        <Footer />
      </main>
    </>
  );
}
