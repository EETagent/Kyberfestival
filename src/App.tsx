import type { Component } from "solid-js";

import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";

import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Speakers = lazy(() => import("./pages/Speakers"));
const View = lazy(() => import("./pages/View"));
const Countdown = lazy(() => import("./pages/Countdown"));

import memorandum from "./assets/memorandum.pdf";
import program from "./assets/program.pdf";
import tiskovazprava from "./assets/tiskovazprava.pdf";
const PDF = lazy(() => import("./components/PDF"));

const App: Component = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/view" element={<View />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/program" element={<PDF src={program} />} />
        <Route path="/memorandum" element={<PDF src={memorandum} />} />
        <Route path="/tiskovazprava" element={<PDF src={tiskovazprava} />} />
        {/* <Route path="/*all" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};

export default App;
