import { Component, For } from "solid-js";
import { PartnersInterface, PARTNERS } from "../data/partners";

const PartnerItem: Component<{ item: PartnersInterface }> = ({
  item: partner,
}) => {
  return (
    <a
      data-aos="fade"
      data-aos-delay="200"
      href={partner.website}
      target="_blank"
    >
      <picture>
        <source srcset={partner.logoAVIF} type="image/avif " />
        <img src={partner.logo} alt={partner.organization} className="img-fluid" />
      </picture>
    </a>
  );
};

const Partners: Component = () => {
  return (
    <For each={PARTNERS}>{(partner, i) => <PartnerItem item={partner} />}</For>
  );
};

export {PartnerItem, Partners}