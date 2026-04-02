const skills = [
  "Html",
  "Css",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJs",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Prisma",
  "Jest",
  "Git",
  "Linux",
];

function Hero() {
  return (
    <div
      style={{ height: "calc(100vh - 64px)", marginTop: "64px" }}
      className="flex max-[900px]:flex-col overflow-hidden justify-between h-screen gap-8 mt-16 mx-12 animate-fade-in animation-delay-100"
    >
      {/*LEFT SECTION*/}
      <div className="flex flex-col flex-1 mt-8 justify-center">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold ">
          Your idea deserves more than a developer. <br /> It deserves an
          engineer who thinks like a founder.
        </h1>
        <p className="text-muted-foreground text-2xl my-6">
          React, Node.js, TypeScript. Full stack, end to end. I build production
          systems that perform under pressure and scale without breaking.
        </p>

        <div className=" flex gap-4 max-[600px]:flex-col">
          <a
            href="#contact"
            className="text-center px-8 py-2 font-bold text-2xl whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
          >
            Contact Me
          </a>
          <button className="relative px-8 py-2 text-2xl font-bold whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-primary border-2 border-primary shadow-lg shadow-primary/25 group overflow-visible">
            <svg
              className="absolute left-0 top-0 w-full h-full pointer-events-none"
              viewBox="0 0 200 60"
              preserveAspectRatio="none"
              style={{ overflow: "visible" }}
            >
              <path
                d="M 1,1 L 199,1 L 199,59 L 1,59 Z"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeDasharray="400 550"
                strokeDashoffset="400"
                strokeLinecap="round"
                className="animated-border-path"
              />
            </svg>
            <span className="relative z-10">Download CV</span>
          </button>
        </div>
      </div>
      {/* RIGHT - image */}

      <div className="flex items-center justify-center w-full lg:w-110">
        <div className="relative">
          <img
            src="/public/my-img.png"
            alt="My photo"
            className="w-60 h-80 lg:w-80 lg:h-125 object-cover object-top"
          />
          {/* border */}
          <div className="absolute -bottom-3 -right-3 w-60 h-80 lg:w-80 lg:h-125 border-2 border-black -z-10"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
