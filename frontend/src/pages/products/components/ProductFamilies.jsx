import { ArrowRight, ChevronRight, Sprout } from "lucide-react";
import React from "react";

const ProductFamilies = () => {
  const cards = [
    {
      icon: <Sprout className="w-full h-full" />,
      heading: "Signature Wellness Solution",
      paragraph:
        "Our thoughfully crafted blends designed to support your everyday nutriaton and enery",
      redirectText: "View Products",
      redirectLink: "/asdf",
    },

    {
      icon: <Sprout className="w-full h-full" />,
      heading: "Signature Wellness Solution",
      paragraph:
        "Our thoughfully crafted blends designed to support your everyday nutriaton and enery",
      redirectText: "View Products",
      redirectLink: "/asdf",
    },
    {
      icon: <Sprout className="w-full h-full" />,
      heading: "Signature Wellness Solution",
      paragraph:
        "Our thoughfully crafted blends designed to support your everyday nutriaton and enery",
      redirectText: "View Products",
      redirectLink: "/asdf",
    },
  ];

  const info = [
    {
      icon: <Sprout className="w-full h-full" />,
      heading: "Nature Inspired",
      paragraph: "Rooted in nature, crafted with care",
    },
    {
      icon: <Sprout className="w-full h-full" />,
      heading: "Nature Inspired",
      paragraph: "Rooted in nature, crafted with care",
    },
    {
      icon: <Sprout className="w-full h-full" />,
      heading: "Nature Inspired",
      paragraph: "Rooted in nature, crafted with care",
    },
    {
      icon: <Sprout className="w-full h-full" />,
      heading: "Nature Inspired",
      paragraph: "Rooted in nature, crafted with care",
    },
  ];

  return (
    <div className="px-10">
      <div className="flex gap-20  h-auto">
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </div>
      <div className="grid my-4 grid-cols-4 place-items-center gap-4 w-full g py-[30px] rounded-xl bg-[#F5F4EA] ">
        {info.map((inf, i) =>{return (
          <div className={`${i !== 0 && 'border-s-2 w-full flex justify-center'}`}>
          <Infocard info={inf} />
          </div>
        )})}
      </div>
    </div>
  );
};


const Infocard = ({ info }) => {
  return (
    <div className="flex w-max px-2 items-center gap-4">
      {" "}
      <div className="w-[50px] h-[50px]  e p-2 flex justify-center items-center rounded-full">
        {info.icon}
      </div>
      <div>
        <h1 className="font-bold  text-xl">{info.heading}</h1>

        <p className="text-sm ">{info.paragraph}</p>
      </div>
    </div>
  );
};

const Card = ({ card }) => {
  console.log();
  return (
    <>
      <div className="w-full  py-6 ps-6 bg-[#F5F4EA] rounded-2xl">
        <div className="w-1/2">
          <div className="w-[50px]  bg-white p-2 flex justify-center items-center rounded-full">
            {card.icon}
          </div>
          <h1 className="font-bold py-4 text-xl">{card.heading}</h1>
          <div className="w-12 md:w-16 h-[2px] bg-[#4d8745] mb-6 md:mb-8"></div>

          <p className="text-sm pb-13">{card.paragraph}</p>

          <div className="flex text-sm items-center gap-5">
            <span className="font-semibold">{card.redirectText}</span>
            <a
              className="bg-primary-400 rounded-full p-2"
              href={card.redirectLink}
              >
              <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFamilies;