import { Component } from "solid-js";

const View: Component = () => {
  return (
    <>
      <div className="w-8/10 mx-auto mt-15 flex flex-col items-center md:items-baseline md:text-left">
          <h1
            className="text-2xl md:text-4xl xl:text-6xl md:text-4xl mb-4 text-left relative content-blank after:(top-[120%] absolute w-24 h-0.5 left-0 bg-kyberfestival-green) md:after:left-[-10%] xl:after:w-40" 
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Připojte se k nám | Záznamy
          </h1>
          <hr />
          <div className="mt-5 flex w-full flex-col items-center md:flex-row justify-center">
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
    </>
  );
};

export default View;
