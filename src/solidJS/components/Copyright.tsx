import { Component } from "solid-js";

import githubIcon from "../../assets/images/github.svg";

const Copyright: Component = () => {
  return (
    <div class="w-full flex py-6 text-center bg-gray-200 items-center justify-center">
      <span class="mr-2">© {new Date().getFullYear()}</span>
      <a
        class="underline hover:text-blue-800"
        href="mailto:&#118;&#111;&#106;&#116;&#097;&#046;&#106;&#117;&#110;&#103;&#109;&#097;&#110;&#110;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
      >
        Vojtěch Jungmann
      </a>
      <span class="mx-2">|</span>
      <a
        class="flex items-center underline"
        target="_blank"
        href="https://github.com/EETagent/Kyberfestival"
      >
        <span class="hover:text-blue-800">GitHub</span>{" "}
        <img alt="GitHub" class="ml-2 w-8 h-auto" src={githubIcon}></img>
      </a>
    </div>
  );
};

export default Copyright;
