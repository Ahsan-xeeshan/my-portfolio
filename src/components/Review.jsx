import { FaQuoteLeft } from "react-icons/fa";
const Review = () => {
  return (
    <div className="absolute top-32 -left-64  text-start">
      <FaQuoteLeft className="text-(--accent) text-xl mb-3" />
      <p className="text-[12px] font-light w-58 italic font-open-sans">
        Nazmul is the secret weapon for any modern SaaS, he transformed our
        complex ideas into a high performance reality.
      </p>
      <p className="text-[13px] font-medium font-open-sans mt-3">
        Marc Hawkins - Adobe Director
      </p>
    </div>
  );
};

export default Review;
