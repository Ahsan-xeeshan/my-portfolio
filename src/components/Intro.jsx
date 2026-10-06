import HeroImg from "../assets/web-img.png";
import CommentButton from "./CommentButton";
import ResumeBillboard from "./ResumeBillboard";

const Intro = ({ onSendMessage, isTyping }) => {
  return (
    <div
      className="
        mx-auto
        flex
        min-h-full
        w-full
        max-w-7xl
        flex-col
        items-center
        justify-center
        px-4
        py-8
        text-center

        sm:px-6
        sm:py-10

        md:justify-start
        md:px-8
        md:pt-36
        md:pb-0

        lg:px-10
      "
    >
      {/* =========================
          Hello Badge
      ========================== */}

      <div className="relative inline-block shrink-0">
        <div className="aura aura-rainbow aura-xs z-5 duration-2000">
          <div
            className="
              badge
              badge-md
              border
              border-border
              bg-surface
              px-4
              py-2
              text-text-primary
              shadow-sm
              sm:badge-lg
              sm:px-5
              sm:py-3
            "
          >
            <p>Hello</p>
          </div>
        </div>

        {/* Decorative Lines */}

        <span
          className="
            absolute
            -right-1
            -top-1
            h-0.5
            w-3
            rotate-105
            bg-(--accent)
            sm:w-4
          "
        />

        <span
          className="
            absolute
            -right-2
            top-1
            h-0.5
            w-4
            rotate-125
            bg-(--accent)
            sm:w-5
          "
        />
      </div>

      {/* =========================
          Heading
      ========================== */}

      <div
        className="
          mt-4
          w-full
          shrink-0
          text-4xl
          font-bold
          leading-[1.08]
          text-text-primary

          sm:mt-5
          sm:text-5xl

          md:text-6xl

          lg:text-7xl
        "
      >
        <h1>
          I'm <span className="text-(--accent)">Nazmul,</span>
        </h1>

        <h2>Web Developer</h2>
      </div>

      {/* =========================
          Mobile Buttons
      ========================== */}

      <div
        className="
          mt-6
          flex
          w-full
          justify-center
          md:hidden
        "
      >
        <CommentButton
          onSendMessage={onSendMessage}
          isTyping={isTyping}
        />
      </div>

      {/* =========================
          Desktop Image
      ========================== */}

    <div
  className="
    relative
    mt-4
    hidden
    h-72
    w-full
    max-w-72
    items-center
    justify-center

    md:flex
    md:h-80
    md:max-w-80

    lg:h-88
    lg:max-w-88
  "
>
        {/* Outer Glow */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            h-60
            w-60
            rounded-full
            bg-(--accent)/20
            blur-3xl
            animate-pulse

            md:h-72
            md:w-72
          "
        />

        {/* Rotating Ring */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            h-52
            w-52
            rounded-full
            border
            border-(--accent)/30
            animate-[spin_8s_linear_infinite]

            md:h-56
            md:w-56
          "
        />

        {/* Dashed Ring */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            h-60
            w-60
            rounded-full
            border
            border-dashed
            border-(--accent)/20
            animate-[spin_14s_linear_infinite_reverse]

            md:h-64
            md:w-64
          "
        />

        {/* Image */}

        <img
          src={HeroImg}
          alt="Nazmul - Web Developer"
          className="
            relative
            z-10
            w-64
            object-contain
            drop-shadow-2xl

            md:w-80

            lg:w-96
          "
        />

        {/* Desktop Buttons */}

        <CommentButton
          onSendMessage={onSendMessage}
          isTyping={isTyping}
        />

        {/* Resume Billboard */}

        <ResumeBillboard />
      </div>
    </div>
  );
};

export default Intro;