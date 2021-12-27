import { render } from "solid-js/web";

import "./css/index.css";
import "./css/3webicons.css";

import 'virtual:windi.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import App from "./App";
import { Router } from "solid-app-router";

AOS.init({
    duration: 800,
    easing: 'ease',
    once: true
  });

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
