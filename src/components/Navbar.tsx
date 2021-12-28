import { Link, NavLink, useNavigate } from "solid-app-router";
import { Component, createSignal, Show } from "solid-js";

import logo from "../assets/images/logo.png";

const MenuButtonBurger: Component = () => {
  return (
    <svg
      className="block h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
};

const MenuButtonCross: Component = () => {
  return (
    <svg
      className="block h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
};

const MenuItem: Component<{
  href: string;
  description: string;
}> = ({ href, description }) => {
  return (
    <Link
      href={href}
      className={`whitespace-nowrap text-gray text-gray-600 hover:text-gray-800 px-3 py-2 mr-4 rounded-md text-sm uppercase ${
        "no-underline" 
      }`}
    >
      {description}
    </Link>
  );
};

const Navbar: Component = () => {
  const [isOpen, setIsOpen] = createSignal<boolean>(false);

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center lg:justify-center justify-between h-16">
          <div className="flex items-center">
            <div className="ml-3 mr-3 flex-shrink-0 order-1 transform transition duration-500 hover:scale-110">
              <Link href="/" className="hover:cursor-pointer">
                <img className="h-10 w-10 " src={logo} alt="Root" />
              </Link>
            </div>
            <div className="hidden lg:block order-2">
              <div className="flex items-baseline">
                <MenuItem
                  href="/about"
                  description="O konferenci"
                />
                <MenuItem
                  href="/program"
                  description="Podrobný program"
                />
                <MenuItem
                  href="/speakers"
                  description="Naši řečníci"
                />

                <MenuItem
                  href="/tiskovazprava"
                  description="Tisková zpráva"
                />

                <MenuItem
                  href="/kontakt"
                  description="Kontakt"
                />
                <Link href="/view" className="btn-custom uppercase text-kyberfestival-green bg-kyberfestival-bg border-solid border-kyberfestival-green border-1  py-1 px-2 inline-block relative hover:before:w-[100%] hover:text-kyberfestival-bg">
                  <span>Sledovat</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <a
              onClick={() => setIsOpen(!isOpen())}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Otevřít hlavní menu</span>
              <Show when={isOpen()} fallback={() => <MenuButtonCross />}>
                <MenuButtonBurger />
              </Show>
            </a>
          </div>
        </div>
      </div>
      <Show when={isOpen()}>
        <div
          className="lg:hidden"
          style="background: repeating-linear-gradient(
              -45deg,
              #f6f5f5,
              #f6f5f5 10px,
              #276678 10px,
              #276678 11px
            );"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              onClick={() => setIsOpen(!isOpen())}
              href="/about"
              className="text-kyberfestival-green hover:bg-kyberfestival-green hover:text-white block mx-10 px-3 py-2 rounded-md text-base  uppercase"
            >
              O konferenci
            </Link>

            <Link
              onClick={() => setIsOpen(!isOpen())}
              href="/program"
              className="text-kyberfestival-green hover:bg-kyberfestival-green hover:text-white mx-10 block px-3 py-2 rounded-md text-base  uppercase"
            >
              Podrobný program
            </Link>

            <Link
              onClick={() => setIsOpen(!isOpen())}
              href="/speakers"
              className="text-kyberfestival-green hover:bg-kyberfestival-green hover:text-white mx-10 block px-3 py-2 rounded-md text-base  uppercase"
            >
              Naši řečníci
            </Link>

            <Link
              onClick={() => setIsOpen(!isOpen())}
              href="/tiskovazprava"
              className="text-kyberfestival-green hover:bg-kyberfestival-green hover:text-white mx-10 block px-3 py-2 rounded-md text-base  uppercase"
            >
              Kontakt
            </Link>

            <Link
              onClick={() => setIsOpen(!isOpen())}
              href="/view"
              className="text-kyberfestival-green hover:bg-kyberfestival-green hover:text-white mx-10 block px-3 py-2 rounded-md text-base  uppercase"
            >
              Sledovat
            </Link>
          </div>
        </div>
      </Show>
    </nav>
  );
};

export default Navbar;
