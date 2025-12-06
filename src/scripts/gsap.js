import { gsap } from 'gsap';

const myTimeline = gsap.timeline();
myTimeline.from('.gsap-hero', { opacity: 0, y: 200, stagger: 0.15, duration: 0.5 });
