import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <main className="relative min-h-screen">

        {/* Left vertical name */}

        <div
          className="
            absolute
            left-[calc(50%-634px)]
            top-1/2
            z-0
            hidden
            -translate-y-1/2
            select-none
            whitespace-nowrap
            text-[3rem]
            font-extrabold
            uppercase
            tracking-[3px]
            text-(--accent)
            opacity-[0.07]
            [writing-mode:vertical-rl]
            rotate-180
            lg:block
          "
        >
          Nazmul Ahsan
        </div>

        {/* Hero */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-6xl
          "
        >
          <Hero />
        </div>

        {/* Right vertical label */}

        <div
          className="
            absolute
            right-[calc(50%-634px)]
            top-1/2
            z-0
            hidden
            -translate-y-1/2
            select-none
            whitespace-nowrap
            text-[3rem]
            font-extrabold
            uppercase
            tracking-[3px]
            text-(--accent)
            opacity-[0.07]
            [writing-mode:vertical-rl]
            lg:block
          "
        >
          Web Developer
        </div>

      </main>
    </div>
  );
};

export default App;