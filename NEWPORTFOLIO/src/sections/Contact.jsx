import { TbBrandGithub, TbBrandLinkedin, TbMail, TbX } from "react-icons/tb";

function Contact() {
  return (
    <section
      id="Contact"
      className=" mx-12"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className="flex flex-col h-full">
        {/* Top Section */}
        <div className="flex items-center flex-col justify-center h-[20%] w-full my-8 gap-12">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl font-extrabold font-display">
            Have a project in mind?{" "}
            <span className="">Lets build something great.</span>
          </h1>
        </div>
        {/* Bottom Section */}
        <div className="flex sm:flex-row flex-col flex-1 gap-8 mb-12 items-center">
          {/* Bottom left Section */}
          <div className="flex flex-col gap-8 justify-center h-full ml-12">
            <div>
              <h2 className="text-2xl font-bold mb-2 flex items-end gap-0.5">
                Let's connect
                <span className="dot-1 inline-block ml-1">.</span>
                <span className="dot-2 inline-block">.</span>
                <span className="dot-3 inline-block">.</span>
              </h2>{" "}
              <p className="text-muted-foreground text-sm">
                Open to freelance projects, full time roles, and interesting
                conversations.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a
                href="https://github.com"
                className="flex items-center gap-4 hover:text-primary transition-colors"
              >
                <TbBrandGithub className="w-8 h-8" />
                <span className="text-xl font-semibold">Github</span>
              </a>
              <a
                href="https://linkedin.com"
                className="flex items-center gap-4 hover:text-primary transition-colors"
              >
                <TbBrandLinkedin className="w-8 h-8" />
                <span className="text-xl font-semibold">Linkedin</span>
              </a>
              <a
                href="mailto:you@gmail.com"
                className="flex items-center gap-4 hover:text-primary transition-colors"
              >
                <TbMail className="w-8 h-8" />
                <span className="text-xl font-semibold">Mail</span>
              </a>
            </div>
          </div>
          {/* Bottom Right Section */}
          <div className="w-full h-full sm:flex-1 flex items-center justify-center ">
            <div className="h-full w-[60%] min-w-70 bg-[#0F4C75] overflow-hidden glow-border shadow-xl shadow-[#0F4C75] text-white">
              <div className="flex justify-center flex-col p-6 gap-6 h-full w-full">
                <h1 className="font-bold sm:text-2xl">Send Message</h1>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="appearance-none outline-none py-2 text-sm bg-transparent border-b border-primary"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="appearance-none outline-none py-2 text-sm bg-transparent border-b border-primary"
                />
                <input
                  type="text"
                  placeholder="Type your Message."
                  className="appearance-none outline-none py-2 text-sm bg-transparent border-b border-primary"
                />
                <button
                  href="#Contact"
                  className="transition-transform duration-400 hover:scale-102 px-4 font-bold py-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
