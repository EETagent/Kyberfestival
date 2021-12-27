import { Component, createSignal, onCleanup } from "solid-js";

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
    <div
      class="flex flex-col items-center justify-center min-vh-100"
      style="background-color: #276678"
    >
      <h1 className="uppercase text-white">
        Odpočet do začátku konference:
      </h1>
      <div className="flex flex-row mt-2 w-50 text-white justify-around">
        <div className="flex flex-col justify-center text-center">
          <h1 >{Math.floor(count() / day)}</h1>
          DNY
        </div>
        <div className="flex flex-col justify-center text-center">
          <h1 >
            {Math.floor((count() % day) / hour)}
          </h1>
          HODINY
        </div>
        <div className="flex flex-col justify-center text-center">
          <h1>
            {Math.floor((count() % hour) / minute)}
          </h1>
          MINUTY
        </div>
        <div className="flex flex-col justify-center text-center">
          <h1>
            {Math.floor((count() % minute) / second)}
          </h1>
          SEKUNDY
        </div>
      </div>
    </div>
  );
};

export default Countdown;
