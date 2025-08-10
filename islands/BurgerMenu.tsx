import { useSignal } from "@preact/signals";
import { Menu, X } from "lucide-preact";
import { navItems } from "../sections/Header.tsx"

export function BurgerMenu() {
  const isMenuOpen = useSignal(false);

  return (
    <>
      <button
        type="button"
        className="md:hidden p-2 rounded-md focus:outline-none focus:ring"
        onClick={() => isMenuOpen.value = !isMenuOpen.value}
        aria-label="Toggle menu"
      >
        {isMenuOpen.value ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen.value && (
        <nav className="md:hidden absolute top-10 right-3 bg-white p-6  py-4 border rounded-lg">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => isMenuOpen.value = false}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
