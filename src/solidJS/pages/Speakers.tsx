import { Component, createEffect, createSignal, For } from "solid-js";

import { SPEAKERS } from "../../data/speakers";

import Speaker from "../components/Speaker";

const Speakers: Component = () => {
  const [filtered, setFiltered] = createSignal<Set<string>>(
    new Set(["VŠECHNO"])
  );
  const updateFilter = (e: Event, selected: boolean) => {
    const button = e.currentTarget as HTMLButtonElement;
    const organization = button.innerText;
    const tempFiltered = new Set(filtered());
    selected
      ? tempFiltered.delete(organization)
      : tempFiltered.add(organization);
    setFiltered(tempFiltered);
  };
  const SelectButton: Component<{ item: string }> = (props) => {
    const [selected, setSelected] = createSignal<boolean>(false);
    createEffect(() => {
      filtered().has(props.item) ? setSelected(true) : setSelected(false);
    });
    return (
      <button
        onclick={(e) => {
          updateFilter(e, selected());
        }}
        class={`btn-custom xl:text-xl uppercase text-kyberfestival-green bg-kyberfestival-bg border-solid border-kyberfestival-green border-1 py-1 px-2 inline-block relative not-focus:hover:text-kyberfestival-bg not-focus:hover:before:w-full ${
          selected() ? "text-kyberfestival-bg before:w-full" : ""
        } my-2 xl:my-4 mr-2 xl:mr-4`}
      >
        <span>{props.item}</span>
      </button>
    );
  };
  return (
    <section class="w-8/10 mx-auto mt-15 flex flex-col">
      <h1 class="text-4xl xl:text-6xl my-5 relative after:(content-blank top-[120%] absolute w-24 h-0.5 left-0 bg-kyberfestival-green) md:after:left-[-5%] xl:after:w-40">
        Naši řečníci
      </h1>
      <hr class="mt-2" />
      <span class="my-5">Filtruj podle organizace</span>
      <hr class="mt-2" />
      <div class="flex flex-row flex-wrap mb-10">
        <For
          each={Array.from(
            new Set([
              "VŠECHNO",
              ...SPEAKERS.map((speaker) => speaker.organization.toString()),
            ])
          )}
        >
          {(item) => <SelectButton item={item} />}
        </For>
      </div>
      <For
        each={
          filtered().has("VŠECHNO")
            ? SPEAKERS
            : SPEAKERS.filter((speaker) =>
                filtered().has(speaker.organization.toString())
              )
        }
      >
        {(item, i) => (
          <div class="mb-2">
            <Speaker item={item} right={i() % 2 === 0 ? true : false} />
          </div>
        )}
      </For>
    </section>
  );
};

export default Speakers;
