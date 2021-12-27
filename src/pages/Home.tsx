import {
  Component,
  createSignal,
  For,
  onCleanup,
  onMount,
  Show,
} from "solid-js";

import { ProgramInterface, PROGRAM } from "../data/program";
import { SpeakersInterface, SPEAKERS } from "../data/speakers";

import { Partners } from "../components/Partners";

import { Container, tsParticles } from "tsparticles";

import { Link } from "solid-app-router";

const ProgramItem: Component<{
  item: ProgramInterface;
  borderTop?: boolean;
}> = ({ item, borderTop }) => {
  return (
    <div
      class={`w-full py-5 border-gray-400 border-b-1 ${
        borderTop ? "border-t-1" : ""
      }`}
      data-aos="fade"
      data-aos-delay="400"
    >
      <div class="flex flex-row items-stretch my-4">
        <div class="w-1/4  mb-3 md:md-0">
          <span class="text-bold text-2xl">{item.start}</span>{" "}
          <span>{item.end}</span>
        </div>
        <div class="w-3/4">
          <h2 class="">{item.text}</h2>
        </div>
      </div>
    </div>
  );
};

const SpeakerItem: Component<{ item: SpeakersInterface; right?: boolean }> = ({
  item: person,
  right = false,
}) => {
  return (
    <div class="flex flex-col md:flex-row items-center my-12">
      <div
        class={`md:w-1/2 mb-5 lg:mb-0 ${right ? "md:order-2" : ""}`}
        data-aos="fade"
        data-aos-delay="100"
      >
        <picture>
          <source srcset={person.imageAVIF} type="image/avif" />
          <img src={person.image} alt={person.name} class="img-fluid" />
        </picture>
      </div>
      <div class={`md:w-1/2 ml-auto ${right ? "md:order-1" : ""}`}>
        <div class={`bio ${right ? "md:pr-lg-5" : "md:pl-lg-5"}`}>
          <h2
            class="block mb-4 text-2xl"
            data-aos={`${right ? "fade-right" : "fade-left"}`}
            data-aos-delay="200"
          >
            {person.name}
          </h2>
          <span
            class="uppercase block mb-3"
            data-aos={`${right ? "fade-right" : "fade-left"}`}
            data-aos-delay="300"
          >
            {person.organization}
          </span>
          <p
            class="mb-4"
            data-aos={`${right ? "fade-right" : "fade-left"}`}
            data-aos-delay="400"
          >
            {person.description}
          </p>
          <Show when={person.social}>
            <p
              data-aos={`${right ? "fade-right" : "fade-left"}`}
              data-aos-delay="500"
            >
              Více o řečníkovi &mdash;
              <Show when={person.social!.web}>
                <a
                  href={person.social!.web}
                  class="p-2 fab fa-firefox-browser"
                ></a>
              </Show>
              <Show when={person.social!.twitter}>
                <a href={person.social!.twitter} class="p-2 fab fa-twitter"></a>
              </Show>
              <Show when={person.social!.facebook}>
                <a
                  href={person.social!.facebook}
                  class="p-2 fab fa-facebook"
                ></a>
              </Show>
            </p>
          </Show>
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
    tsParticles
      .load("tsparticles", {
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#276678",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#276678",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        fullScreen: true,
        retina_detect: true,
      })
      .then(() => {
        setParticles(tsParticles.domItem(0));
        particles()?.play();
      });
  });

  return (
    <>
      <div class="w-8/10 mx-auto">
        <div class="mt-15 flex flex-row justify-center text-center md:text-left md:justify-start h-screen">
          <div class="my-20 flex flex-col  items-center md:items-baseline">
            <span
              class="mb-3 md:text-2xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Konference kybernetické bezpečnosti
            </span>
            <h1
              class="mb-4 text-4xl md:text-7xl font-bold"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Kyberfestival 2021
            </h1>
            <span
              class="font-bold mb-3 text-2xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Celetná 13, Staré město
            </span>
            <span class="mb-5 text-2xl" data-aos="fade-up" data-aos-delay="300">
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
        </div>
        <div className="flex flex-col">
          <div class="flex flex-col md:flex-row mb-5">
            <div class="md:w-1/2" data-aos="fade-up" data-aos-delay="100">
              <div class="text-6xl">
                <h2>Řečníci</h2>
              </div>
            </div>
            <div
              class="md:w-1/2 mt-5 md:pl-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p>
                Zhlédněte výstupy významných osobností a expertů z oboru. Seznam
                všech řečníků <a href="speakers.html">zde</a>
              </p>
            </div>
          </div>
          <SpeakerItem right={false} item={SABLIK}></SpeakerItem>
          <SpeakerItem right={true} item={REHKA}></SpeakerItem>
          <SpeakerItem right={false} item={PAVEL}></SpeakerItem>
        </div>
        <div class="flex flex-col my-15">
          <div class="flex flex-col md:flex-row mb-5">
            <div class="md:w-6/10" data-aos="fade-up">
              <div class="text-6xl">
                <h2>Program konference</h2>
              </div>
            </div>
            <div
              class="md:w-4/10 mt-5 md:pl-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p>
                Podrobný plán obou konferenčních dnů v PDF ke stažení{" "}
                <a href="program.pdf">zde</a>, případně pro mobilní telefony{" "}
                <a href="program.html">HTML verze</a>{" "}
              </p>
            </div>
          </div>
          <For each={PROGRAM}>
            {(days, i) => (
              <div class="flex flex-col items-stretch">
                <h3 class="mt-5 text-2xl">
                  Den {i() == 0 ? "první" : "druhý"}
                </h3>
                <For each={days}>
                  {(programItem, i) => (
                    <ProgramItem
                      item={programItem}
                      borderTop={i() === 0 ? true : false}
                    />
                  )}
                </For>
              </div>
            )}
          </For>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col md:flex-row mb-5">
            <div class="md:w-6/10">
              <div class="text-6xl" data-aos="fade-up">
                <h2>Partneři</h2>
              </div>
            </div>
            <div
              class="md:w-4/10 mt-5 md:pl-5"
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
          <div class="grid gap-6 grid-cols-2 md:grid-cols-3 mb-5">
            <Partners />
          </div>
          <div class="row" data-aos="fade-up" data-aos-delay="500"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
