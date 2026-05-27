import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Domain", href: "/domain" },
  { label: "Milestones", href: "/milestones" },
  { label: "Documents", href: "/documents" },
  { label: "Presentations", href: "/presentations" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const currentPath = window.location.pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/images/Aloe.jpg"
            alt="AloeGreen Logo"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-green-100"
          />

          <span className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-green-800">
              AloeGreen
            </span>
            <small className="text-xs font-medium text-gray-500">
              AI-IoT Smart Agriculture
            </small>
          </span>
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center justify-center rounded-xl border border-green-100 p-2 text-green-800 lg:hidden"
          aria-label="Open navigation menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = currentPath === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-green-600 text-white shadow-sm"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>

      {menuOpen && (
        <nav className="border-t border-green-100 bg-white px-6 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => {
              const isActive = currentPath === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-green-600 text-white"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}