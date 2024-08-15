gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
let sectionOneTl = gsap.timeline();

sectionOneTl
  .from("h1 span:first-child", { x: "-100vw", duration: 1 })
  .from("h1 span:last-child", { x: "100vw", duration: 1 }, "<")
  .from(".content p", {
    opacity: 0,
    rotation: 90,
    position: 0,
    left: 0,
    // rotationZ: 180,
  })
  .from("img", { y: "100vh" });

let sectionTwoTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    toggleActions: "play none none reverse",
    start: "center 80%",
    end: "center 20%",
    markers: true,
  },
});

sectionTwoTl
  .fromTo(
    ".section2 div h2 span:first-child",
    {
      y: "-100vh",
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
    }
  )
  .fromTo(
    ".section2 div h2 span:last-child",
    {
      y: "-100vh",
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
    }
  )
  .from(".section2 p", {
    position: 0,
    rotationY: 90,
  });

let sectionThreeTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "top 80%",
    end: "bottom center",
    markers: true,
  },
});

// sectionThreeTl
//   .from(".section3 div h2", { scale: 50, x: "-100vw", duration: 1 })
//   .fromTo(
//     ".section3 div p span",
//     {
//       y: "100vh",
//     },
//     {
//       y: 0,
//       stagger: 0.2,
//       backgroundColor: "white",
//       color: "black",
//     }
//   );

const itemSections = document.querySelectorAll(".horizontal-sections section");
const itemHorizontal = document.querySelector(".horizontal-sections");
const sectionsWidth = itemSections.offsetWidth;

// sectionThreeTl
//   .from(".section3 div h2", { scale: 50, x: "-100vw", duration: 1 })
//   .fromTo(
//     ".section3 div p span",
//     {
//       y: "100vh",
//     },
//     {
//       y: 0,
//       stagger: 0.2,
//       backgroundColor: "white",
//       color: "black",
//     }
//   )
// gsap
sectionThreeTl
  .from(".section3 div h2", { scale: 50, x: "-100vw", duration: 1 })
  .fromTo(
    ".section3 div p span",
    {
      y: "100vh",
    },
    {
      y: 0,
      stagger: 0.2,
      backgroundColor: "white",
      color: "black",
    }
  )
  .fromTo(
    ".portfolio-item",
    { opacity: 0, x: "100vw" },
    { opacity: 1, x: 0, stagger: 0.1 }
  )
  .to(itemSections, {
    xPercent: -100 * (itemSections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: itemHorizontal,
      pin: true,
      scrub: 1,
      // start: "top",
      end: () => sectionsWidth,
      // markers: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

let sectionFiveTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top",
    // end: "bottom",
    // scrub: true,
    toggleActions: "play paused paused reverse",
  },
});

const contactMe = document.querySelector(".section5 div h2").textContent;
console.log(contactMe.split(""));
const newArr = contactMe.split("");
const sep = document.querySelector(".section5 div h2");
sep.innerHTML = "";

newArr.forEach((el) => {
  const getEl = document.createElement("span");
  getEl.textContent = el;
  //   if (getEl.witdh > 0) sep.append(getEl);
  //   else getEl.style.fontSize = "1rem";
  //   getEl.witdh > 0 ? sep.append(getEl) : (getEl.style.fontSize = "1rem");

  sep.append(getEl);
});

sectionFiveTl
  .from(".section5 h2 span", { y: "-100vh", stagger: 0.1 })
  .fromTo(".section5 div p", { opacity: 0, y: "100vh" }, { opacity: 1, y: 0 })
  .from(".contact-btn", { scale: 0 })
  .from(".section5", { backgroundPositionX: "100vw" });
