import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const CardAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const card_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".card_section",
      scrub: 2,
      start: "center center",
      end: "+=1200",
      pin: true,
    },
    defaults: {
      ease: "power3.out",
      duration: 1.5,
    },
  });

  card_tl
    .fromTo(
      ".card_component",
      {
        opacity: 0,
        rotateY: 60,
        rotateX: 45,
        transformPerspective: 2300,
        transformOrigin: "center top",
      },
      {
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
      }
    )
    // .fromTo(
    //   ".card_section",
    //   {
    //     opacity: 0,
    //     rotateY: 60,
    //     rotateX: 45,

    //     transformPerspective: 2300,
    //     transformOrigin: "center top",
    //   },
    //   {
    //     opacity: 1,
    //     rotateX: 0,
    //     rotateY: 0,
    //     stagger: 0.2,
    //   }
    // )
    .fromTo(
      ".card_title",
      {
        opacity: 0,
        scale: 1
      },
      {
        opacity: 1,
        scale: 1.2
      }
    ).to(".card_title", {
        scale: 0.7,
        opacity: 1
    }).to(".card_component", {
        opacity: 0
    }).fromTo(".card_border", {
        border: '2px solid transparent'
    }, {
        border: '2px solid white'
    }, "<").fromTo(".slide_contents", {
        y: 1900
    }, {
        y: 0
    })
};
