import { Link } from "solid-app-router";
import { Accessor, Component, createSignal } from "solid-js";
import { Transition } from "solid-transition-group";

import logo from "../assets/images/logo.png";

const MenuButton: Component<{
  onClick: VoidFunction;
  isMenuOpened: Accessor<boolean>;
}> = ({ onClick, isMenuOpened }) => {
  return (
    <button
      aria-controls="mobile-menu"
      onclick={onClick}
      className="transform transition duration-500 hover:scale-110 focus:outline-none"
    >
      <svg
        viewBox="0 0 32 36"
        className="h-10 fill-kyberfestival-bg stroke-kyberfestival-green stroke-2"
      >
        <path
          data-v-21716efb=""
          d="M15.5079 34.8482L1 26.4243V9.57571L15.5079 1.15178L30.5 9.58485V26.4152L15.5079 34.8482Z"
        ></path>
      </svg>
      <div
        className={`block absolute  left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        {" "}
        <span
          className={`block absolute h-0.5 w-4 text-kyberfestival-green bg-current transform transition duration-500 ease-in-out" ${
            isMenuOpened() ? "rotate-45" : "-translate-y-1.5"
          }`}
        ></span>{" "}
        <span
          className={`block absolute h-0.5 w-2 text-kyberfestival-green bg-current transform transition duration-500 ease-in-out" ${
            isMenuOpened() ? "opacity-0" : ""
          }`}
        ></span>{" "}
        <span
          className={`block absolute h-0.5 w-4 text-kyberfestival-green bg-current transform transition duration-500 ease-in-out ${
            isMenuOpened() ? "-rotate-45" : "translate-y-1.5"
          }`}
        ></span>{" "}
      </div>
    </button>
  );
};

const MenuItem: Component<{
  href: string;
  description: string;
}> = ({ href, description }) => {
  return (
    <Link
      href={href}
      className={`whitespace-nowrap text-gray text-gray-600 hover:text-gray-800 py-2 mx-4 rounded-md text-sm uppercase ${"no-underline"}`}
    >
      {description}
    </Link>
  );
};

const MenuItemCompact: Component<{
  href: string;
  description: string;
  onClick: VoidFunction;
}> = ({ href, description, onClick }) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className="text-kyberfestival-green hover:bg-kyberfestival-green hover:text-white block mx-10 px-3 py-2 rounded-md text-base uppercase"
    >
      {description}
    </Link>
  );
};

const Navbar: Component = () => {
  const [isOpened, setIsOpened] = createSignal<boolean>(false);

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center lg:justify-center justify-between h-16">
          <div className="flex items-center">
            <div className="mx-3 flex-shrink-0 order-1 transform transition duration-500 hover:scale-110">
              <Link href="/" className="hover:cursor-pointer">
                <img className="h-10 w-10 " src={logo} alt="Root" />
              </Link>
            </div>
            <div className="hidden lg:block order-2">
              <div className="flex items-baseline">
                <MenuItem href="/about" description="O konferenci" />
                <MenuItem href="/program" description="Podrobný program" />
                <MenuItem href="/speakers" description="Naši řečníci" />

                <MenuItem href="/tiskovazprava" description="Tisková zpráva" />

                <MenuItem href="/contact" description="Kontakt" />
                <div className="inline-block mx-4">
                  <Link href="/">🇨🇿</Link>
                  <span>|</span>
                  <Link href="/">🇬🇧</Link>
                </div>
                <Link
                  href="/view"
                  className="btn-custom uppercase text-kyberfestival-green bg-kyberfestival-bg border-solid border-kyberfestival-green border-1 py-1 px-2 mx-4 inline-block relative hover:before:w-full hover:text-kyberfestival-bg"
                >
                  <span>Sledovat</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mx-3 lg:hidden">
            <MenuButton
              onClick={() => setIsOpened(!isOpened())}
              isMenuOpened={isOpened}
            />
          </div>
        </div>
      </div>
      <Transition
        onEnter={(el, done) => {
          const a = el.animate([{ opacity: 0 }, { opacity: 100 }], {
            duration: 600,
          });
          a.finished.then(done);
        }}
        onExit={(el, done) => {
          const a = el.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 0,
          });
          a.finished.then(done);
        }}
      >
        {isOpened() && (
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
              <MenuItemCompact
                onClick={() => setIsOpened(!isOpened())}
                href="/about"
                description="O konferenci"
              />
              <MenuItemCompact
                onClick={() => setIsOpened(!isOpened())}
                href="/program"
                description="Podrobný program"
              />
              <MenuItemCompact
                onClick={() => setIsOpened(!isOpened())}
                href="/speakers"
                description="Naši řečnící"
              />
              <MenuItemCompact
                onClick={() => setIsOpened(!isOpened())}
                href="/contact"
                description="Kontakt"
              />

              <MenuItemCompact
                onClick={() => setIsOpened(!isOpened())}
                href="/view"
                description="Sledovat"
              />
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
