import HeroImg from "../assets/web-img.png";
import CommentButton from "./CommentButton";
import ResumeBillboard from "./ResumeBillboard";

const Intro = ({ onSendMessage, isTyping }) => {
  return (
    <div className="mx-auto flex flex-col items-center pt-16 text-center">
      {/* Hello Badge */}

      <div className="relative inline-block">
        <div className="aura aura-rainbow aura-xs z-50 duration-2000">
          <div
            className="
              badge
              badge-lg
              border
              border-border
              bg-surface
              px-5
              py-3
              text-text-primary
              shadow-sm
            "
          >
            <p>Hello</p>
          </div>
        </div>

        {/* Decorative lines */}

        <span
          className="
            absolute
            -right-1
            -top-1
            h-0.5
            w-4
            rotate-105
            bg-(--accent)
          "
        />

        <span
          className="
            absolute
            -right-2
            top-1
            h-0.5
            w-5
            rotate-125
            bg-(--accent)
          "
        />
      </div>

      {/* Heading */}

      <div
        className="
          mt-4
          text-5xl
          font-bold
          leading-tight
          text-text-primary
          sm:text-6xl
          lg:text-7xl
        "
      >
        <h1>
          I'm <span className="text-(--accent)">Nazmul,</span>
        </h1>

        <h2>Web Developer</h2>
      </div>

      {/* Image + Animation */}

      <div
        className="
          relative
          mt-6
          flex
          h-96
          w-full
          max-w-96
          items-center
          justify-center
        "
      >
        {/* Animated outer glow */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            h-72
            w-72
            rounded-full
            bg-(--accent)/20
            blur-3xl
            animate-pulse
            sm:h-84
            sm:w-84
          "
        />

        {/* Rotating ring */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            h-56
            w-56
            rounded-full
            border
            border-(--accent)/30
            animate-[spin_8s_linear_infinite]
            sm:h-64
            sm:w-64
          "
        />

        {/* Second rotating ring */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            h-64
            w-64
            rounded-full
            border
            border-dashed
            border-(--accent)/20
            animate-[spin_14s_linear_infinite_reverse]
            sm:h-72
            sm:w-72
          "
        />

        {/* Image */}

        <img
          src={HeroImg}
          alt="Nazmul - Web Developer"
          className="
            relative
            z-10
            w-72
            max-w-[85vw]
            object-contain
            drop-shadow-2xl
            sm:w-80
            md:w-96
          "
        />

        {/* Comment Button */}

        <CommentButton onSendMessage={onSendMessage} isTyping={isTyping} />

        {/* Resume Billboard */}

        <ResumeBillboard />
      </div>
    </div>
  );
};

export default Intro;
