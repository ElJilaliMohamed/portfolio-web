import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const init = () => {
  const tl = gsap.timeline();
  tl.from('.gsap-hero', { opacity: 0, y: 200, stagger: 0.15, duration: 0.5 });

  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    '.one-item',
    { y: 200, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,

      scrollTrigger: {
        start: '-225px',
        trigger: '.items-horizontal',
      },
    }
  );
};
init();
