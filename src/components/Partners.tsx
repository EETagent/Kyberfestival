import { Component, For } from "solid-js";
import { PartnersInterface, PARTNERS } from "../data/partners";

const PartnerItem: Component<{ item: PartnersInterface }> = ({
  item: partner,
}) => {
  return (
    <div
      data-aos="fade"
      data-aos-delay="200"
    >
      <picture>
        <source srcset={partner.logoAVIF} type="image/avif " />
        <img src={partner.logo} alt={partner.organization} class="img-fluid" />
      </picture>
    </div>
  );
};

const Partners: Component = () => {
  return (
    <For each={PARTNERS}>{(partner, i) => <PartnerItem item={partner} />}</For>
  );
};

export {PartnerItem, Partners}