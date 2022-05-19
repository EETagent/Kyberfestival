import { Link, useNavigate } from "solid-app-router";
import { Component, onCleanup } from "solid-js";

const NotFound: Component = () => {
  const navigate = useNavigate();

  const redirect = setTimeout(() => navigate("/"), 4500);

  onCleanup(() => {
    clearTimeout(redirect);
  });

  return (
    <section class="my-20 min-w-screen flex flex-col items-center justify-center">
      <h1 class="text-4xl md:text-5xl xl:text-6xl mb-4 text-left relative after:(content-blank top-[120%] absolute w-24 h-0.5 left-0 md:after:left-[-5%] bg-kyberfestival-green) xl:after:w-40">
        Stránka nenalezena :(
      </h1>
      <Link
        href="/"
        class="my-4 text-xl btn-custom uppercase text-kyberfestival-green bg-kyberfestival-bg border-solid border-kyberfestival-green border-1 py-1 px-2 mx-4 inline-block relative hover:before:w-full hover:text-kyberfestival-bg"
      >
        <span>Zpět na hlavní web</span>
      </Link>
    </section>
  );
};

export default NotFound;
