import type { Component } from "solid-js";

import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";

import Navbar from "./components/Navbar";
import Copyright from "./components/Copyright";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Speakers = lazy(() => import("./pages/Speakers"));
const View = lazy(() => import("./pages/View"));
const Contact = lazy(() => import("./pages/Contact"));
const Countdown = lazy(() => import("./pages/Countdown"));

import memorandum from "./assets/documents/memorandum.pdf";
import program from "./assets/documents/program.pdf";
import tiskovazprava from "./assets/documents/tiskovazprava.pdf";
import memorandumFallback from "./assets/documents/memorandum.html?url";
import programFallback from "./assets/documents/program.html?url";
import tiskovazpravaFallback from "./assets/documents/tiskovazprava.html?url";

const PDF = lazy(() => import("./components/PDF"));

const App: Component = () => {
  return (
    <div class="flex flex-col h-screen">
      <header>
        <Navbar />
      </header>
      <main class="flex-1 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/program"
            element={<PDF src={program} srcFallback={memorandumFallback} />}
          />
          <Route path="/speakers" element={<Speakers />} />
          <Route
            path="/tiskovazprava"
            element={
              <PDF src={tiskovazprava} srcFallback={tiskovazpravaFallback} />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/view" element={<View />} />
          <Route
            path="/memorandum"
            element={<PDF src={memorandum} srcFallback={programFallback} />}
          />

          <Route path="/countdown" element={<Countdown />} />
          {/* <Route path="/*all" element={<NotFound />} /> */}
        </Routes>
      </main>
      <footer>
        <Copyright />
      </footer>
    </div>
  );
};

export default App;
