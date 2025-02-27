import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
  
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Being a part of E-Cell has been a game-changer for me. It’s not just a community; it’s a platform that empowers aspiring entrepreneurs to turn their ideas into reality with the right mentorship and resources.",
    name: "Ananya Goswami",
    title: "Ex-Vice President",
  },
  {
    quote:
      "E-Cell has provided me with the exposure and network I needed to grow as an entrepreneur. From insightful sessions to real-world challenges, every experience here has shaped my journey.",
    name: "Nishant Srivastava",
    title: "Ex-Technical Head",
  },
  {
    quote: "The startup ecosystem at E-Cell is truly inspiring. The support, guidance, and opportunities it offers are unparalleled, helping students build, innovate, and take bold steps toward entrepreneurship.",
    name: "Avanya Tyagi",
    title: "Ex- PR Head",
  },
  {
    quote:
      "E-Cell is more than just an organization; it’s a family of like-minded individuals who believe in innovation and collaboration. It has given me the confidence to chase my entrepreneurial dreams.",
    name: "Shreyansh Gupta",
    title: "Ex-Treasurer",
  },
];
