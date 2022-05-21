import { Component, For } from "solid-js";
import { PartnersInterface, PARTNERS } from "../../data/partners";

const PartnerItem: Component<{ item: PartnersInterface }> = (props) => {
  return (
    <a
      data-aos="fade"
      data-aos-delay="200"
      href={props.item.website}
      target="_blank"
    >
      <picture>
        <source srcset={props.item.logoAVIF} type="image/avif " />
        <img
          src={props.item.logo}
          alt={props.item.organization}
          class="img-fluid"
        />
      </picture>
    </a>
  );
};

const Partners: Component = () => {
  return (
    <For each={PARTNERS}>{(partner) => <PartnerItem item={partner} />}</For>
  );
};

export { PartnerItem, Partners };
