const navLinks = [
  { href: "#About", label: "About" },
  { href: "#Project", label: "Project" },
  { href: "#Experience", label: "Experience" },
  { href: "#Testmonials", label: "Testmonials" },
];

function NavBar() {
  return (
    <nav className="flex items-center gap-6 px-6 h-16 fixed top-0 left-0 w-full bg-background border-b border-muted-foreground z-50">
      <a
        className="font-syne font-extrabold tracking-tight mx-10 text-2xl"
        href="/"
      >
        MY<span className="text-muted-foreground">.</span>
      </a>
      <div className="md:flex hidden gap-6 items-center ml-auto">
        <ul className="flex gap-6">
          {navLinks.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative pb-1 font-bold text-sm after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-muted-foreground after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className=" px-4 font-bold py-2 mx-6 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
