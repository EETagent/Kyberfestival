import { Component, createSignal, For, onCleanup, onMount } from "solid-js";

import { ProgramInterface, PROGRAM } from "../data/program";
import { SPEAKERS } from "../data/speakers";
import { Partners } from "../components/Partners";

import { Container, tsParticles } from "tsparticles";

import { Link } from "solid-app-router";

import Speaker from "../components/Speaker";

import PARTICLES from "../data/particles";

import program from "../assets/documents/program.pdf?url";
import programFallback from "../assets/documents/program.html?url";

const Program: Component<{
  item: ProgramInterface;
  borderTop?: boolean;
}> = ({ item, borderTop }) => {
  return (
    <div
      className={`w-full py-5 border-gray-400 border-b-1 ${
        borderTop ? "border-t-1" : ""
      }`}
      data-aos="fade"
      data-aos-delay="400"
    >
      <div className="flex flex-row items-stretch my-4">
        <div className="w-1/4  mb-3 md:md-0">
          <span className="text-bold text-2xl">{item.start}</span>{" "}
          <span>{item.end}</span>
        </div>
        <div className="w-3/4">
          <h2 className="">{item.text}</h2>
        </div>
      </div>
    </div>
  );
};

const Home: Component = () => {
  const SABLIK = SPEAKERS.find((e) => e.name === "Radko Sáblík")!;
  const REHKA = SPEAKERS.find((e) => e.name === "Karel Řehka")!;
  const PAVEL = SPEAKERS.find((e) => e.name === "Petr Pavel")!;

  const [particles, setParticles] = createSignal<Container>();

  onCleanup(() => {
    particles()!.destroy();
  });

  onMount(() => {
    tsParticles.load("tsparticles", PARTICLES).then(() => {
      setParticles(tsParticles.domItem(0));
      particles()?.play();
    });
  });

  return (
    <>
      <div className="w-8/10 mx-auto">
        <div id="tsparticles" className="absolute h-screen"></div>
        <div className="mt-20 h-[80vh] flex flex-col  items-center md:items-baseline">
          <span
            className="mb-3 md:text-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Konference kybernetické bezpečnosti
          </span>
          <h1
            className="mb-4 text-4xl md:text-7xl font-bold"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Kyberfestival 2021
          </h1>
          <span
            className="font-bold mb-3 text-2xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Celetná 13, Staré město
          </span>
          <span className="mb-5 text-2xl" data-aos="fade-up" data-aos-delay="300">
            21.6.-22.6.
          </span>
          <div className="flex flex-row">
            <Link
              className="btn-custom mr-4"
              href="/view"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span>Sledovat</span>
            </Link>
            <Link
              className="btn-custom"
              href="/memorandum"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span>Memorandum</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row mb-5">
            <div className="md:w-1/2" data-aos="fade-up" data-aos-delay="100">
              <div className="text-6xl">
                <h2>Řečníci</h2>
              </div>
            </div>
            <div
              className="md:w-1/2 mt-5 md:pl-5"
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
        </div>
        <div className="flex flex-col my-15">
          <div className="flex flex-col md:flex-row mb-5">
            <div className="md:w-6/10" data-aos="fade-up">
              <div className="text-6xl">
                <h2>Program konference</h2>
              </div>
            </div>
            <div
              className="md:w-4/10 mt-5 md:pl-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p>
                Podrobný plán obou konferenčních dnů v PDF ke stažení{" "}
                <a href={program} className="text-blue-600 underline">
                  zde
                </a>
                , případně pro mobilní telefony{" "}
                <a href={programFallback} className="text-blue-600 underline">
                  HTML verze
                </a>{" "}
              </p>
            </div>
          </div>
          <For each={PROGRAM}>
            {(days, i) => (
              <div className="flex flex-col items-stretch">
                <h3 className="mt-5 text-2xl">
                  Den {i() == 0 ? "první" : "druhý"}
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
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row mb-5">
            <div className="md:w-6/10">
              <div className="text-6xl" data-aos="fade-up">
                <h2>Partneři</h2>
              </div>
            </div>
            <div
              className="md:w-4/10 mt-5 md:pl-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p>
                Bez pomoci našich partnerů by se mohla konference těžko v
                takovém rozsahu uskutečnit. Děkujeme Karlově univerzitě za
                poskytnutí fyzických prostor ke konání akce.
              </p>
            </div>
          </div>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 mb-5">
            <Partners />
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="500"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
