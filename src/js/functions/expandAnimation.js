import gsap from "gsap";

const expandAnimation = (uSection, lSection, quotation, details) => {
      const translateBy = lSection.offsetHeight;

      const tl = gsap
            .timeline({
                  defaults: { ease: "power2.out", duration: 0.7 },
            })
            .paused(true)
            .reversed(true);

      tl.fromTo(
            uSection,
            { y: 0 },
            {
                  y: -translateBy,
            }
      )
            .fromTo(
                  lSection,
                  { y: 0 },
                  {
                        y: -translateBy,
                  },
                  "<"
            )
            .set(quotation, {
                  maxHeight: 0,
            })
            .fromTo(
                  details,
                  { yPercent: 100, autoAlpha: 0 },
                  {
                        yPercent: 0,
                        autoAlpha: 1,
                        stagger: 0.1,
                        clearProps: "all",
                  },
                  "-=.5"
            );

      return tl;
};

export default expandAnimation;
