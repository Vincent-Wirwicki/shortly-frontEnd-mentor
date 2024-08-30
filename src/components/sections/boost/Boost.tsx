import { Button } from "@/components/ui/button";

export default function Boost() {
  return (
    <section
      className="w-full h-[20vh] flex flex-col items-center justify-center gap-5 bg-primary-dark-violet
    bg-boost-desk md:bg-boost-mobile bg-no-repeat bg-cover"
    >
      <h3 className="font-extrabold text-neutral-200 text-4xl">
        Boost your links today
      </h3>
      <Button className="bg-primary-cyan hover:bg-primary-cyan-light rounded-3xl font-extrabold text-lg">
        Get started
      </Button>
    </section>
  );
}
