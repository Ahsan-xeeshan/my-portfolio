import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="relative min-h-screen">
      <main className="relative min-h-screen">
        
        {/* Left vertical name */}
        <div
          className="
            hidden
            lg:block
            absolute
            left-[calc(50%-634px)]
            top-1/2
            -translate-y-1/2
            z-0
            whitespace-nowrap
            text-[3rem]
            font-extrabold
            uppercase
            tracking-[3px]
            text-[#4d96ff]
            opacity-[0.07]
            select-none
            [writing-mode:vertical-rl]
            rotate-180
          "
        >
          Nazmul Ahsan
        </div>

        {/* Hero */}
        <div className="relative z-10 mx-auto max-w-6xl">
          <Hero />
        </div>

        {/* Right vertical label */}
        <div
          className="
            hidden
            lg:block
            absolute
            right-[calc(50%-634px)]
            top-1/2
            -translate-y-1/2
            z-0
            whitespace-nowrap
            text-[3rem]
            font-extrabold
            uppercase
            tracking-[3px]
            text-[#4d96ff]
            opacity-[0.07]
            select-none
            [writing-mode:vertical-rl]
          "
        >
          Web Developer
        </div>

      </main>
    </div>
  );
};

export default App;