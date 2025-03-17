import { gsap } from "gsap";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, TextPlugin);

// gsap.to("h1", {
//     duration: 1,
//     x: 100,
//     ease: "bounce"
// });

gsap.to(".bgi", {
  duration: 10,
  rotation: "+=360",
  repeat: -1,
  ease: "linear",
});
