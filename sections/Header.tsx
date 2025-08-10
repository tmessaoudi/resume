import { BurgerMenu } from "../islands/BurgerMenu.tsx";

export const navItems = [
  { href: "#about", label: "About Me" },
  { href: "#experiences", label: "Experiences" },
  { href: "#projects", label: "Side Projects" },
  { href: "/resume/en", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300  bg-transparent`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a href="#about" className="text-xl font-bold">
            Tarek Messaoudi
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
}
