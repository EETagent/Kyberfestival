import { Component } from "solid-js";

const Copyright: Component = () => {
  return (
    <div class="w-full inline-block py-6 text-center bg-gray-200">
      <span class="mr-2">© {new Date().getFullYear()}</span>
      <a
        class="underline hover:text-blue-800"
        href="mailto:&#118;&#111;&#106;&#116;&#097;&#046;&#106;&#117;&#110;&#103;&#109;&#097;&#110;&#110;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
      >
        Vojtěch Jungmann
      </a>
    </div>
  );
};

export default Copyright;
