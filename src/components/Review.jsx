import { FaQuoteLeft } from "react-icons/fa";

const Review = () => {
  return (
    <div
      className="
        absolute
        -left-64
        top-32
        text-start
      "
    >
      <FaQuoteLeft
        className="
          mb-3
          text-xl
          text-(--accent)
        "
      />

      <p
        className="
          w-58
          font-open-sans
          text-[12px]
          font-light
          italic
          leading-5
          text-text-secondary
        "
      >
        Nazmul is the secret weapon for any modern SaaS, he transformed our
        complex ideas into a high performance reality.
      </p>

      <p
        className="
          mt-3
          font-open-sans
          text-[13px]
          font-medium
          text-text-primary
        "
      >
        Marc Hawkins - Adobe Director
      </p>
    </div>
  );
};

export default Review;