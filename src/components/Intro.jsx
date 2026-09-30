import HeroImg from "../assets/web-img.png";
import CommentButton from "./CommentButton";
import Review from "./Review";

const Intro = ({ onSendMessage, isTyping }) => {
  return (
    <div className="mx-auto flex flex-col items-center text-center pt-16">
      {/* Hello Badge */}
      <div className="relative inline-block">
        <div className="aura aura-rainbow aura-xs duration-2000 z-50">
          <div className="badge badge-lg bg-base-100 px-5 py-3">
            <p>Hello</p>
          </div>
        </div>

        {/* Decorative lines */}
        <span className="absolute -right-1 -top-1 h-0.5 w-4 rotate-105 bg-blue-500" />
        <span className="absolute -right-2 top-1 h-0.5 w-5 rotate-125 bg-blue-500" />
      </div>

      {/* Heading */}
      <div className="mt-4 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
        <h1>
          I'm <span className="text-(--accent)">Nazmul,</span>
        </h1>

        <h2>Web Developer</h2>
      </div>

      {/* Image + Animation */}
      <div className="relative mt-6 flex h-96 w-96 items-center justify-center">
        {/* Animated outer glow */}
        <div
          className="
            absolute
            h-84
            w-84
            rounded-full
            bg-blue-500/20
            blur-3xl
            animate-pulse
          "
        />

        {/* Rotating ring */}
        <div
          className="
            absolute
            h-64
            w-64
            rounded-full
            border
            border-blue-500/30
            animate-[spin_8s_linear_infinite]
          "
        />

        {/* Second rotating ring */}
        <div
          className="
            absolute
            h-72
            w-72
            rounded-full
            border
            border-dashed
            border-blue-400/20
            animate-[spin_14s_linear_infinite_reverse]
          "
        />

        {/* Image */}
        <img
          src={HeroImg}
          alt="Nazmul - Web Developer"
          className="
            relative
            w-264
            object-contain
            drop-shadow-2xl
          "
        />
        <CommentButton onSendMessage={onSendMessage} isTyping={isTyping} />
        <Review />
      </div>
    </div>
  );
};

export default Intro;
