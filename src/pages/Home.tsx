import { Component, createSignal, For, onCleanup, onMount } from "solid-js";

import { ProgramInterface, PROGRAM } from "../data/program";
import { SPEAKERS } from "../data/speakers";
import { Partners } from "../components/Partners";

import { loadSlim } from "tsparticles-slim";
import { Container, tsParticles } from "tsparticles-engine";

import { Link } from "solid-app-router";

import Speaker from "../components/Speaker";

import PARTICLES from "../data/particles";

import program from "../assets/documents/program.pdf?url";
import programFallback from "../assets/documents/program.html?url";

const Program: Component<{
  item: ProgramInterface;
  borderTop?: boolean;
}> = (props) => {
  return (
    <div
      class={`w-full py-5 border-gray-400 border-b-1 ${
        props.borderTop ? "border-t-1" : ""
      }`}
      data-aos="fade"
      data-aos-delay="400"
    >
      <div class="flex flex-row items-stretch my-4">
        <div class="w-1/4 mb-3 md:md-0">
          <span class="text-bold text-2xl xl:text-4xl">{props.item.start}</span>{" "}
          <span>{props.item.end}</span>
        </div>
        <div class="w-3/4">
          <h2 class="xl:text-2xl">{props.item.text}</h2>
        </div>
      </div>
    </div>
  );
};

const Home: Component = () => {
  const SABLIK = SPEAKERS.find((e) => e.name === "Radko Sáblík");
  const REHKA = SPEAKERS.find((e) => e.name === "Karel Řehka");
  const PAVEL = SPEAKERS.find((e) => e.name === "Petr Pavel");

  const [particles, setParticles] = createSignal<Container>();

  onCleanup(() => {
    particles()?.destroy();
  });

  onMount(async () => {
    loadSlim(tsParticles);
    await tsParticles.load("tsparticles", PARTICLES);
    setParticles(tsParticles.domItem(0));
    particles()?.play();
  });

  return (
    <div class="w-8/10 mx-auto">
      <div
        id="tsparticles"
        class="top-0 left-0 -z-30 select-none absolute h-screen"
      ></div>
      <section class="mt-15 min-h-screen flex flex-col  items-center md:items-baseline">
        <h3
          class="mb-5 text-center xl:mb-10 md:text-2xl xl:text-4xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Konference kybernetické bezpečnosti
        </h3>
        <h1
          class="text-center md:text-left font-bold xl:mb-10 text-4xl md:text-7xl xl:text-8xl font-bold"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Kyberfestival 2021
        </h1>
        <p
          class="my-10 w-4/5 text-sm leading-6 text-center md:text-left"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Kybernetická bezpečnost se nejlépe učí v komunitách, a my máme zájem
          vytvořit v České republice právě takovou samoučící se komunitu, jejíž
          základ budou tvořit studenti středních škol, ale která bude mít přesah
          a provázanost i se studenty podobně zaměřenými (nadanými) na
          základních a vysokých školách.{" "}
          <span class="hidden md:block">
            Chceme proto síťovat střední školy, jejich ředitele, učitele i
            studenty. Chceme vymyslet projekty a soutěže, na kterých budeme
            dlouhodobě spolupracovat.
          </span>
        </p>
        <h3
          class="text-center md:text-left mb-5 xl:mb-10 font-bold text-2xl xl:text-4xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Celetná 13, Staré město
        </h3>
        <h3
          class="mb-5 xl:mb-10 text-2xl xl:text-4xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          21.6.-22.6.
        </h3>
        <div class="flex flex-row">
          <Link
            class="md:text-xl btn-custom uppercase text-kyberfestival-bg bg-kyberfestival-green py-2 px-4 inline-block border-none relative hover:before:w-full mr-4"
            href="/view"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span>Sledovat</span>
          </Link>
          <Link
            class="md:text-xl btn-custom uppercase text-kyberfestival-bg bg-kyberfestival-green py-2 px-4 inline-block border-none relative hover:before:w-full"
            href="/memorandum"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span>Memorandum</span>
          </Link>
        </div>
      </section>
      <section class="flex flex-col">
        <div class="flex flex-col md:flex-row mb-5">
          <div class="md:w-1/2" data-aos="fade-up" data-aos-delay="100">
            <div class="text-6xl">
              <h2 class="relative after:(content-blank top-[120%] absolute w-24 h-0.5 left-0 bg-kyberfestival-green) md:after:left-[-15%] xl:after:w-40">
                Řečníci
              </h2>
            </div>
          </div>
          <div
            class="md:w-1/2 mt-5 md:pl-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p>
              Zhlédněte výstupy významných osobností a expertů z oboru. Seznam
              všech řečníků <Link href="/speakers">zde</Link>
            </p>
          </div>
        </div>
        <Speaker right={false} item={SABLIK}></Speaker>
        <Speaker right={true} item={REHKA}></Speaker>
        <Speaker right={false} item={PAVEL}></Speaker>
      </section>
      <section class="flex flex-col my-15">
        <div class="flex flex-col md:flex-row mb-5">
          <div class="md:w-6/10" data-aos="fade-up">
            <div class="text-6xl">
              <h2 class="relative after:(content-blank top-[120%] absolute w-24 h-0.5 left-0 bg-kyberfestival-green) md:after:left-[-15%] xl:after:w-40">
                Program konference
              </h2>
            </div>
          </div>
          <div
            class="md:w-4/10 mt-10 md:pl-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>
              Podrobný plán obou konferenčních dnů v PDF ke stažení{" "}
              <a
                rel="external"
                href={program}
                class="text-blue-600 hover:text-blue-800 underline"
              >
                zde
              </a>
              , případně pro mobilní telefony{" "}
              <a
                rel="external"
                href={programFallback}
                class="text-blue-600 hover:text-blue-800 underline"
              >
                HTML verze
              </a>{" "}
            </p>
          </div>
        </div>
        <For each={PROGRAM}>
          {(days, i) => (
            <div class="flex flex-col items-stretch">
              <h3 class="mt-5 text-2xl xl:text-4xl">
                Den {i() === 0 ? "první" : "druhý"}
              </h3>
              <For each={days}>
                {(programItem, i) => (
                  <Program
                    item={programItem}
                    borderTop={i() === 0 ? true : false}
                  />
                )}
              </For>
            </div>
          )}
        </For>
      </section>
      <section class="flex flex-col">
        <div class="flex flex-col md:flex-row mb-5">
          <div class="md:w-6/10">
            <div class="text-6xl" data-aos="fade-up">
              <h2 class="relative after:(content-blank top-[120%] absolute w-24 h-0.5 left-0 bg-kyberfestival-green) md:after:left-[-15%] xl:after:w-40">
                Partneři
              </h2>
            </div>
          </div>
          <div
            class="md:w-4/10 mt-5 md:pl-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>
              Bez pomoci našich partnerů by se mohla konference těžko v takovém
              rozsahu uskutečnit. Děkujeme Karlově univerzitě za poskytnutí
              fyzických prostor ke konání akce.
            </p>
          </div>
        </div>
        <div class="grid gap-6 grid-cols-2 md:grid-cols-3 mb-5">
          <Partners />
        </div>
        <div class="row" data-aos="fade-up" data-aos-delay="500"></div>
      </section>
    </div>
  );
};

export default Home;
