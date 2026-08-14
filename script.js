let menu_bar = document.querySelector("#nav-dialog");
let cross = document.querySelectorAll(".cross");

cross.forEach((e) => {
  e.addEventListener("click", function () {
    menu_bar.classList.toggle("hidden");
  });
});

function linemov_animation() {
  gsap.to("#line1", {
    x: 20,
    scrollTrigger: {
      trigger: "#line1",
      scroller: "body",
      markers: false,
      start: "top 80%",
      end: "top 40%",
      scrub: 5,
    },
  });

  gsap.to("#line2", {
    x: -200,
    scrollTrigger: {
      trigger: "#line2",
      scroller: "body",
      markers: false,
      start: "top 80%",
      end: "top top",
      scrub: 5,
    },
  });

  gsap.to("#line3", {
    x: 20,
    scrollTrigger: {
      trigger: "#line3",
      scroller: "body",
      markers: false,
      start: "top 85%",
      end: "top 40%",
      scrub: 5,
    },
  });

  gsap.to("#line4", {
    x: "-10%",
    scrollTrigger: {
      trigger: "#line4",
      scroller: "body",
      markers: false,
      start: "top 90%",
      end: "+=1000",
      scrub: 5,
    },
  });
}

function faq() {
  const dtElements = document.querySelectorAll("dt");

  const faqButtons = document.querySelectorAll("#faq button");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentAnswer = document.getElementById(
        button.getAttribute("aria-controls"),
      );
      const currentArrow = button.querySelector("i");
      const isOpen = button.getAttribute("aria-expanded") === "true";

      // Close all FAQs
      faqButtons.forEach((btn) => {
        const answer = document.getElementById(
          btn.getAttribute("aria-controls"),
        );
        const arrow = btn.querySelector("i");

        answer.classList.add("hidden");
        arrow.classList.remove("-rotate-180");
        btn.setAttribute("aria-expanded", "false");
      });

      // Open the clicked FAQ if it wasn't already open
      if (!isOpen) {
        currentAnswer.classList.remove("hidden");
        currentArrow.classList.add("-rotate-180");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
}

linemov_animation();
faq();
