import { Component, mergeProps, Show } from "solid-js";
import { SpeakersInterface } from "../data/speakers";

const Speaker: Component<{
  item: SpeakersInterface | undefined;
  right?: boolean;
}> = (_props) => {
  const props = mergeProps({ right: false }, _props);
  return (
    // eslint-disable-next-line solid/reactivity
    props.item && (
      <div class="flex flex-col md:flex-row items-center my-12">
        <div
          class={`md:w-1/2 mb-5 lg:mb-0 ${props.right ? "md:order-2" : ""}`}
          data-aos="fade"
          data-aos-delay="100"
        >
          <picture>
            <source srcset={props.item.imageAVIF} type="image/avif" />
            <img
              src={props.item.image}
              alt={props.item.name}
              class="img-fluid"
            />
          </picture>
        </div>
        <div class={`md:w-1/2 ml-auto ${props.right ? "md:order-1" : ""}`}>
          <div class={`bio ${props.right ? "md:pr-lg-5" : "md:pl-lg-5"}`}>
            <h2
              class="mb-4 text-2xl xl:text-4xl block"
              data-aos={`${props.right ? "fade-right" : "fade-left"}`}
              data-aos-delay="200"
            >
              {props.item.name}
            </h2>
            <span
              class="mb-4 xl:text-2xl uppercase block "
              data-aos={`${props.right ? "fade-right" : "fade-left"}`}
              data-aos-delay="300"
            >
              {props.item.role}
            </span>
            <p
              class="mb-4 xl:text-xl"
              data-aos={`${props.right ? "fade-right" : "fade-left"}`}
              data-aos-delay="400"
            >
              {props.item.description}
            </p>
            <Show when={props.item.social}>
              <p
                data-aos={`${props.right ? "fade-right" : "fade-left"}`}
                data-aos-delay="500"
              >
                Více o řečníkovi &mdash;
                <Show when={props.item.social?.web}>
                  <a
                    href={props.item.social?.web}
                    target="_blank"
                    class="p-2 fab fa-firefox-browser hover:text-blue-800"
                  ></a>
                </Show>
                <Show when={props.item.social?.twitter}>
                  <a
                    href={props.item.social?.twitter}
                    target="_blank"
                    class="p-2 fab fa-twitter hover:text-blue-800"
                  ></a>
                </Show>
                <Show when={props.item.social?.facebook}>
                  <a
                    href={props.item.social?.facebook}
                    target="_blank"
                    class="p-2 fab fa-facebook hover:text-blue-800"
                  ></a>
                </Show>
              </p>
            </Show>
          </div>
        </div>
      </div>
    )
  );
};

export default Speaker;
