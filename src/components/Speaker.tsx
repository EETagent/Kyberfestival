import { Component, Show } from "solid-js";
import { SpeakersInterface } from "../data/speakers";

const Speaker: Component<{ item: SpeakersInterface; right?: boolean }> = ({
    item: person,
    right = false,
  }) => {
    return (
      <div className="flex flex-col md:flex-row items-center my-12">
        <div
          className={`md:w-1/2 mb-5 lg:mb-0 ${right ? "md:order-2" : ""}`}
          data-aos="fade"
          data-aos-delay="100"
        >
          <picture>
            <source srcset={person.imageAVIF} type="image/avif" />
            <img src={person.image} alt={person.name} className="img-fluid" />
          </picture>
        </div>
        <div className={`md:w-1/2 ml-auto ${right ? "md:order-1" : ""}`}>
          <div className={`bio ${right ? "md:pr-lg-5" : "md:pl-lg-5"}`}>
            <h2
              className="block mb-4 text-2xl"
              data-aos={`${right ? "fade-right" : "fade-left"}`}
              data-aos-delay="200"
            >
              {person.name}
            </h2>
            <span
              className="uppercase block mb-3"
              data-aos={`${right ? "fade-right" : "fade-left"}`}
              data-aos-delay="300"
            >
              {person.organization}
            </span>
            <p
              className="mb-4"
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
                    className="p-2 fab fa-firefox-browser"
                  ></a>
                </Show>
                <Show when={person.social!.twitter}>
                  <a href={person.social!.twitter} className="p-2 fab fa-twitter"></a>
                </Show>
                <Show when={person.social!.facebook}>
                  <a
                    href={person.social!.facebook}
                    className="p-2 fab fa-facebook"
                  ></a>
                </Show>
              </p>
            </Show>
          </div>
        </div>
      </div>
    );
  };

  export default Speaker;