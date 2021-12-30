import { Component } from "solid-js";

const Contact: Component = () => {
  return (
    <div className="w-8/10 mx-auto mt-15 flex flex-col">
      <h1
        className="text-2xl  md:text-4xl xl:text-6xl mb-4 text-left relative content-blank after:(top-[120%] absolute w-24 h-0.5 left-0 bg-kyberfestival-green) md:after:left-[-5%] xl:after:w-40"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {" "}
        Kontaktujte nás
      </h1>
      <hr />
      <div className="flex flex-col md:flex-row justify-center my-8">
        <div data-aos="fade-up" className="mr-10 w-full">
          <form
            id="contact-form"
            data-aos="fade-up"
            data-aos-delay="300"
            action="../../mail/mail.php"
          >
            <div className="flex flex-row">
              <div className="flex flex-col w-full mr-2">
                <label className="" for="fname">
                  Jméno
                </label>
                <input
                  type="text"
                  id="fname"
                  name="forname"
                  className="border-solid border-kyberfestival-green border-2 py-2"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="" for="lname">
                  Přijmení
                </label>
                <input
                  type="text"
                  id="lname"
                  name="surname"
                  className="border-solid border-kyberfestival-green border-2 py-2 "
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label for="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-solid border-kyberfestival-green border-2 py-2 "
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label for="subject">Předmět</label>
              <input
                type="subject"
                id="subject"
                name="subject"
                className="border-solid border-kyberfestival-green border-2 py-2 "
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label for="message">Zpráva</label>
              <textarea
                name="body"
                id="message"
                cols="30"
                rows="4"
                className="border-solid border-kyberfestival-green border-2 py-2 "
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="my-2 btn-custom uppercase text-kyberfestival-bg bg-kyberfestival-green py-2 px-4 inline-block border-none relative hover:before:w-[100%] w-full"
              form="contact-form"
            >
              <span>Odeslat</span>
            </button>
            <input type="hidden" id="lang" name="lang" value="cz" required />
          </form>
        </div>
        <div className="flex flex-col" data-aos="fade-up" data-aos-delay="100">
          <div className="">
            <p className="mb-4 font-weight-bold uppercase">Adresa</p>
            <p className="mb-4">
              Preslova 72/25, 150 21 Praha 5-Smíchov, Česká republika
            </p>
            <p className="mb-4 font-weight-bold uppercase">Telefon</p>
            <p className="mb-4">==== === === ===</p>
            <p className="mb-4 font-weight-bold uppercase">E-mailová adresa</p>
            <p className="mb-4">
              <a href="mailto:&#105;&#110;&#102;&#111;&#064;&#107;&#121;&#098;&#101;&#114;&#102;&#101;&#115;&#116;&#105;&#118;&#097;&#108;&#046;&#101;&#117;">
                &#105;&#110;&#102;&#111;&#064;&#107;&#121;&#098;&#101;&#114;&#102;&#101;&#115;&#116;&#105;&#118;&#097;&#108;&#046;&#101;&#117;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
