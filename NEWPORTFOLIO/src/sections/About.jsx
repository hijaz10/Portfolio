import { Code2, Compass, Users, Network } from "lucide-react";
/*
const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing code that is simple to understand, easy to maintain, and built to last.',
  },
  {
    icon: Compass,
    title: 'Mastery',
    description:
      'A commitment to refining the craft of software engineering through precision, discipline, and continuous improvement.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'Building great software through open communication, shared ideas, and strong collaboration.',
  },
  {
    icon: Network,
    title: 'Architecture',
    description:
      'Designing software with architecture in mind — building systems that scale, evolve, and remain resilient over time.',
  },
];

I build fast.
I build clean.
I build things that last.
*/
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

function About() {
  return (
    <section id="About" className="mx-12 scroll-mt-16 flex h-screen">
      {/* Top Section */}
      <div>
        <div className="flex flex-col h-[20%] w-full items-center justify-center mb-12 gap-4">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            About Me
          </span>
          <h2 className="font-display text-5xl font-bold italic">
            <span>I build fast. I build clean. I build things that last.</span>
          </h2>
        </div>
        {/* Bottom Section */}
        <div className="flex justify-between">
          {/* Bottom Left Section */}
          <div className=" text-2xl flex-1 font-display font-semibold">
            <p>
              I'm <span className="font-bold">Muhammad Yakubu</span> a developer
              who builds clean, modern web apps using React, NodeJS, and
              TypeScript. I enjoy turning ideas into smooth, functional
              experiences that feel as good as they look.
            </p>
            <br />
            <p>
              I'm constantly learning and improving, I focus on writing simple,
              scalable code and creating products people actually enjoy using.
              I'm open to opportunities to collaborate, contribute, and bring
              ideas to life.
            </p>
          </div>
          {/* Bottom Right Section */}
          <div className="flex-1 mt-6">
            <div className="flex justify-center items-center h-full">
              <div className="animate-fade-in animation-delay-600">
                <div className="relative overflow-hidden h-70">
                  {/* fade top */}
                  <div className="absolute left-0 right-0 top-0 h-16 bg-linear-to-b from-background to-transparent z-10" />
                  {/* fade bottom */}
                  <div className="absolute left-0 right-0 bottom-0 h-16 bg-linear-to-t from-background to-transparent z-10" />

                  <div className="flex flex-col animate-marquee-vertical">
                    {[...skills, ...skills].map((skill, idx) => (
                      <div key={idx} className="py-3 text-center">
                        <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
