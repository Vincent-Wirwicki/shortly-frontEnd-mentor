import { Button } from "../../ui/button";

export default function Hero() {
  return (
    <section
      className="relative w-4/5 md:w-11/12 h-screen sm:h-1/2
    flex flex-row justify-between items-center 
    md:flex-col-reverse md:justify-center sm:gap-2  sm:pt-10 sm:pb-20"
    >
      <div
        className="absolute z-10 md:pos-unset
      w-1/2 lg:w-3/4 md:w-11/12
      flex flex-col gap-2 md:items-center"
      >
        <h1
          className="font-extrabold md:text-center leading-normal text-primary-dark-violet
        text-6xl lg:text-4xl md:text-5xl sm:text-3xl
        w-5/6 lg:w-full md:w-3/4 "
        >
          More than just shorter links
        </h1>
        <h3 className="leading-relaxed w-3/5 md:w-3/4 md:text-center sm:text-xs text-third-gray">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing
        </h3>
        <Button className="w-1/4 md:w-1/3 xs:w-1/2 mt-5 bg-primary-cyan hover:bg-primary-cyan-light rounded-3xl p-5">
          Get Started
        </Button>
      </div>
      <div className="absolute z-[-1] left-1/2 w-full md:pos-unset md:translate-x-20 md:translate-y-[-50px] sm:translate-y-0">
        <img
          className="object-fill"
          src="/illustration-working.svg"
          alt="illustration-working"
        />
      </div>
    </section>
  );
}

// bg-hero bg-no-repeat bg-[center_left_150%] md:bg-[center_top_10%] md:bg-[length:85%_45%] sm:bg-contains
