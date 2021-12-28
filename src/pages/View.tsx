import { Component } from "solid-js";

const View: Component = () => {
  return (
    <>
      <div className="w-8/10 h-full mx-auto">
        <div className="flex flex-col items-center md:items-baseline md:text-left">
          <h1
            className="mt-15 text-2xl md:text-4xl mb-4 text-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Připojte se k nám | Záznamy
          </h1>
          <hr />
          <div className="mt-5 mx-8 flex w-full flex-col items-center md:flex-row justify-around">
            <iframe
            className="mb-10 md:mr-10 md:mb-0 w-[40vh] md:w-[75vh] h-[50vh]"
              src="https://www.youtube.com/embed/VnT4jh6z8xM"
              title="YouTube video player"
              data-aos="fade-up"
              data-aos-delay="300"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <iframe
            className="w-[40vh] md:w-[75vh] h-[50vh]"
              src="https://www.youtube.com/embed/ErHbi4Frwok"
              title="YouTube video player"
              data-aos="fade-up"
              data-aos-delay="300"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
