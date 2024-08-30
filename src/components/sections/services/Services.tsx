import CardService from "./CardService";

export default function Services() {
  const cardsData = [
    {
      icon: "/icons/icon-brand-recognition.svg",
      title: "Brand Recognition",
      content:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    },
    {
      icon: "/icons/icon-detailed-records.svg",
      title: " Detailed Records",
      content:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      icon: "/icons/icon-fully-customizable.svg",
      title: "Fully Customizable",
      content:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];
  return (
    <section
      className="relative z-[-1] min-h-[80vh] h-fit md:h-fit bg-gray-200 w-full pb-10
    flex flex-col items-center md:pt-0
     "
    >
      <div className="flex flex-col gap-2 items-center w-1/3 md:w-1/2 sm:w-full py-20 ">
        <h3 className="text-2xl font-extrabold">Advanced statistics</h3>
        <h6 className="text-center w-4/5 sm:text-xs">
          Track how your links are perfoming across the web with our advanced
          statistics dashboard
        </h6>
      </div>
      <div
        className="w-4/5 pt-10 relative md:h-fit
        flex justify-evenly items-center gap-10 md:gap-16 md:flex-col"
      >
        {cardsData.map((data, i) => (
          <CardService key={data.title} data={data} offset={i} />
        ))}
        <div className="z-[-1] absolute h-2 w-1/2 md:h-1/2 md:w-2 bg-primary-cyan "></div>
      </div>
    </section>
  );
}
