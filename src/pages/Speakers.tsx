import { Component, createSignal, For } from "solid-js";

import { SPEAKERS } from "../data/speakers";
import Speaker from "../components/Speaker";

const Speakers: Component = () => {
  const [filtered, setFiltered] = createSignal<Set<string>>(new Set());
  const updateFilter = (e: Event, selected: boolean) => {
    const button = e.currentTarget as HTMLButtonElement;
    const organization = button.innerText;
    let tempFiltered = new Set(filtered());
    selected
      ? tempFiltered.delete(organization)
      : tempFiltered.add(organization);
    setFiltered(tempFiltered);
    console.log(tempFiltered);
  };
  const SelectButton: Component<{ item: string }> = ({ item }) => {
    const [selected, setSelected] = createSignal<boolean>(false);

    return (
      <button
        onclick={(e) => {
          updateFilter(e, selected());
          setSelected(!selected());
        }}
        className={`text-center btn-custom btn-custom-navbar ${
          selected() ? "btn-selected" : ""
        } mr-2 mb-2`}
      >
        <span>{item}</span>
      </button>
    );
  };
  return (
    <div className="w-8/10 mx-auto mt-15 flex flex-col">
      <h1 className="text-4xl my-5">Naši řečníci</h1>
      <hr />
      <span className="my-5">Filtruj podle organizace</span>
      <hr />
      <div className="flex flex-row flex-wrap mb-10">
        <For each={["JEDNA", "DVA", "TRI", "CTYRI", "PET", "DLOUHA ORGANIZACE", "ATD"]}>
          {(item) => <SelectButton item={item} />}
        </For>
      </div>
      <div className="flex flex-col"></div>
      <For each={SPEAKERS}>
        {(item, i) => (
          <div className="mb-2">
            <Speaker item={item} right={i() % 2 === 0 ? true : false} />
          </div>
        )}
      </For>
    </div>
  );
};

export default Speakers;
