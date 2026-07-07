import { ArrowRight, Leaf, Sprout } from "lucide-react";

const TOPIC_CARDS = [
  {
    id: "nutrition",
    heading: "Nutrition",
    description: "Daily nutrition habits for a stronger you.",
    image: "/images/nutrition.png",
    link: "#",
  },
  {
    id: "family",
    heading: "Family Wellness",
    description: "Healthy routines and real-life tips for the whole family.",
    image: "/images/family-wellness.png",
    link: "#",
  },
  {
    id: "kids",
    heading: "Kids Wellness",
    description: "Supporting growing children with the right nutrition.",
    image: "/images/kids-wellness.png",
    link: "#",
  },
  {
    id: "aging",
    heading: "Healthy Aging",
    description: "Wellness advice for graceful, healthy aging.",
    image: "/images/healthy-aging.png",
    link: "#",
  },
  {
    id: "natural",
    heading: "Natural Living",
    description: "Nature-inspired practices for a cleaner, greener lifestyle.",
    image: "/images/natural-living.png",
    link: "#",
  },
  {
    id: "recipes",
    heading: "Recipes & Habits",
    description: "Simple recipes and habits that build a better you.",
    image: "/images/recipes-habits.png",
    link: "#",
  },
];

export default function ExploreByTopic() {
  return (
    <section className="bg-[#faf7f1] py-10 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#44703b]">
            <Leaf size={14} />
            Explore By Topic
          </div>

          <h2 className="font-serif text-3xl font-bold leading-tight text-[#1d3d1f] sm:text-4xl md:text-5xl lg:text-6xl">
            Find What Matters
            <br className="sm:hidden" />
            To You
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 md:text-base">
            Wellness looks different for every family. Explore topics that help
            you make informed choices for a healthier life.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {TOPIC_CARDS.map((card) => (
            <TopicCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TopicCard({ card }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#ece5d9] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* IMAGE */}

      <div className="relative">

        <img
          src={card.image}
          alt={card.heading}
          className="
            h-28
            w-full
            object-cover

            sm:h-36
            md:h-48
            lg:h-60
          "
        />

        {/* ICON */}

        <div
          className="
            absolute
            -bottom-5
            left-3

            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full
            bg-white
            shadow

            sm:h-12
            sm:w-12

            lg:left-5
            lg:h-16
            lg:w-16
          "
        >
          <Sprout
            strokeWidth={1.5}
            className="
              h-5
              w-5
              text-[#3f6f3f]

              sm:h-6
              sm:w-6

              lg:h-8
              lg:w-8
            "
          />
        </div>
      </div>

      {/* CONTENT */}

      <div
        className="
          px-3
          pb-3
          pt-7

          sm:px-4
          sm:pt-8

          lg:px-7
          lg:pb-7
          lg:pt-10
        "
      >
        <h3
          className="
            font-serif
            text-[17px]
            font-semibold
            leading-tight
            text-[#173d22]

            sm:text-xl

            lg:text-[34px]
          "
        >
          {card.heading}
        </h3>

        <div className="my-2 h-[2px] w-7 bg-[#c2a45c] lg:my-4 lg:w-10" />

        <p
          className="
            text-[11px]
            leading-5
            text-gray-600

            sm:text-xs

            lg:text-base
            lg:leading-7
          "
        >
          {card.description}
        </p>

        <a
          href={card.link}
          className="
            mt-3
            inline-flex
            items-center
            gap-1
            text-[11px]
            font-semibold
            text-[#1c3e1e]

            transition-colors

            hover:text-[#4d8745]

            lg:mt-6
            lg:gap-2
            lg:text-base
          "
        >
          Explore Articles

          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
}