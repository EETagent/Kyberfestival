import { Accessor, Component, createSignal, Show } from "solid-js";
import { Transition } from "solid-transition-group";

import logo from "../../assets/images/logo.png";

const MenuButton: Component<{
  onClick: VoidFunction;
  isMenuOpened: Accessor<boolean>;
}> = (props) => {
  return (
    <button
      aria-controls="mobile-menu"
      onclick={props.onClick}
      class="transform transition duration-500 hover:scale-110 focus:outline-none"
    >
      <svg
        viewBox="0 0 32 36"
        class="h-10 fill-kyberfestival-bg stroke-kyberfestival-green stroke-2"
      >
        <path
          data-v-21716efb=""
          d="M15.5079 34.8482L1 26.4243V9.57571L15.5079 1.15178L30.5 9.58485V26.4152L15.5079 34.8482Z"
        ></path>
      </svg>
      <div
        class={
          "block absolute  left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }
      >
        {" "}
        <span
          class={`block absolute h-0.5 w-4 text-kyberfestival-green bg-current transform transition duration-500 ease-in-out" ${
            props.isMenuOpened() ? "rotate-45" : "-translate-y-1.5"
          }`}
        ></span>{" "}
        <span
          class={`block absolute h-0.5 w-2 text-kyberfestival-green bg-current transform transition duration-500 ease-in-out" ${
            props.isMenuOpened() ? "opacity-0" : ""
          }`}
        ></span>{" "}
        <span
          class={`block absolute h-0.5 w-4 text-kyberfestival-green bg-current transform transition duration-500 ease-in-out ${
            props.isMenuOpened() ? "-rotate-45" : "translate-y-1.5"
          }`}
        ></span>{" "}
      </div>
    </button>
  );
};

const MenuItem: Component<{
  href: string;
  description: string;
}> = (props) => {
  return (
    <a
      href={props.href}
      class={`whitespace-nowrap text-gray text-gray-600 hover:text-gray-800 py-2 mx-4 rounded-md text-sm uppercase ${"no-underline"}`}
    >
      {props.description}
    </a>
  );
};

const MenuItemCompact: Component<{
  href: string;
  description: string;
  onClick: VoidFunction;
}> = (props) => {
  return (
    <a
      onclick={props.onClick}
      href={props.href}
      class="text-kyberfestival-green hover:bg-kyberfestival-green hover:text-white block mx-10 px-3 py-2 rounded-md text-base uppercase"
    >
      {props.description}
    </a>
  );
};

const Navbar: Component = () => {
  const [isOpened, setIsOpened] = createSignal<boolean>(false);

  return (
    <nav>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center lg:justify-center justify-between h-16">
          <div class="flex items-center">
            <div class="mx-3 flex-shrink-0 order-1 transform transition duration-500 hover:scale-110">
              <a href="/" class="hover:cursor-pointer">
                <img class="h-10 w-10 " src={logo} alt="Root" />
              </a>
            </div>
            <div class="hidden lg:block order-2">
              <div class="flex items-baseline">
                <MenuItem href="/about" description="O konferenci" />
                <MenuItem href="/program" description="Podrobný program" />
                <MenuItem href="/speakers" description="Naši řečníci" />

                <MenuItem href="/tiskovazprava" description="Tisková zpráva" />

                <MenuItem href="/contact" description="Kontakt" />
                <div class="inline-block mx-4">
                  <a href="/">🇨🇿</a>
                  <span>|</span>
                  <a href="/">🇬🇧</a>
                </div>
                <a
                  href="/view"
                  class="btn-custom uppercase text-kyberfestival-green bg-kyberfestival-bg border-solid border-kyberfestival-green border-1 py-1 px-2 mx-4 inline-block relative hover:before:w-full hover:text-kyberfestival-bg"
                >
                  <span>Sledovat</span>
                </a>
              </div>
            </div>
          </div>
          <div class="mx-3 lg:hidden">
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
        {
          <Show when={isOpened()}>
            {
              <div
                class="lg:hidden"
                style="background: repeating-linear-gradient(
              -45deg,
              #f6f5f5,
              #f6f5f5 10px,
              #276678 10px,
              #276678 11px
            );"
              >
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
            }
          </Show>
        }
      </Transition>
    </nav>
  );
};

export default Navbar;
