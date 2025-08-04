import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateCardOnScroll() {
    gsap.from(".card", {
        scrollTrigger: {
            trigger: '.card',
            start: 'top 80%',
        },
        opacity: 0,
        duration: 2,
        delay: 1,
        y: 50,
        stagger: 0.2
    })
}