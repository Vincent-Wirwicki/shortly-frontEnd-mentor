"use client";

import useOnResize from "@/hooks/useOnResize";
import Image from "next/image";

export default function CardService({
  data,
  offset,
}: {
  data: { icon: string; title: string; content: string };
  offset: number;
}) {
  const width = useOnResize();
  const { icon, title, content } = data;
  const translateY = offset * 40;

  return (
    <article
      style={{
        transform:
          width <= 768 ? "translateY(0px)" : `translateY(${translateY}px)`,
      }}
      className="bg-neutral-50 relative w-fit md:w-60 h-48 md:h-fit rounded-lg 
      flex flex-col justify-end items-start md:items-center p-6"
    >
      <div
        className="absolute w-20 h-20 md:h-16 md:w-16 top-0 translate-y-[-50%] md:left-1/2 md:translate-x-[-50%]
      rounded-full bg-primary-dark-violet flex justify-center items-center p-5"
      >
        {/* <img src={icon} alt={icon} /> */}
        <Image src={icon} alt="icon" width={50} height={50} />
      </div>
      <div className="pt-14 md:pt-5 text-start md:text-center">
        <h3 className="py-2 font-extrabold">{title}</h3>
        <p
          className="text-xs text-start leading-loose
 md:text-center text-third-gray"
        >
          {content}
        </p>
      </div>
    </article>
  );
}
