import { Link } from "solid-app-router";
import { Component, createSignal, onCleanup, Show } from "solid-js";

const Countdown: Component = () => {
  const [count, setCount] = createSignal(0);
  const final = "Jun 21, 2021 09:00:00";

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const countDown = new Date(final).getTime();
    setCount(countDown - now);
  }, 1000);

  onCleanup(() => clearInterval(timer));

  return (
    <div className="bg-kyberfestival-green flex flex-col items-center justify-center h-screen">
      <Show
        when={count() >= 0}
        fallback={
          <div className="flex flex-col items-center text-center text-white">
            <h1 className="mx-10 text-5xl font-extrabold tracking-tighter uppercase ">
              Odpočet vypršel 🎉
            </h1>
            <span className="mt-5">Záznamy z konference naleznete <Link href="/view">zde</Link></span>
          </div>
        }
      >
        <h1 className="text-5xl font-extrabold tracking-tighter uppercase text-center text-white">
          Odpočet do začátku konference:
        </h1>

        <div className="text-xl flex flex-row mt-3 w-50 text-white justify-around">
          <div className="flex flex-col justify-center text-center mr-10">
            <h1>{Math.floor(count() / day)}</h1>
            DNY
          </div>
          <div className="flex flex-col justify-center text-center mr-10">
            <h1>{Math.floor((count() % day) / hour)}</h1>
            HODINY
          </div>
          <div className="flex flex-col justify-center text-center mr-10">
            <h1>{Math.floor((count() % hour) / minute)}</h1>
            MINUTY
          </div>
          <div className="flex flex-col justify-center text-center">
            <h1>{Math.floor((count() % minute) / second)}</h1>
            SEKUNDY
          </div>
        </div>
      </Show>
    </div>
  );
};

export default Countdown;
