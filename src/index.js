import "lax";

const faqs = document.querySelectorAll(".faq");

for (const faq of faqs) {
  const question = faq.querySelector(".question");
  const answer = faq.querySelector(".answer");
  const chevron = question.querySelector("i");
  question.addEventListener("click", () => {
    answer.classList.toggle("hide");
    chevron.classList.toggle("gg-chevron-down");
  });
}

let selectedTrackContent = document.getElementById("general-track-content");
selectedTrackContent.classList.add("show");
const tracks = document.querySelectorAll("img[data-track]");

for (const track of tracks) {
  const name = track.dataset.track;
  const content = document.getElementById(`${name}-track-content`);
  track.addEventListener("click", () => {
    selectedTrackContent.classList.remove("show");
    content.classList.add("show");
    selectedTrackContent = content;
  });
}

const playMovie = () => {
  const scrollJackContainer = document.querySelector(".home-scrolljack-container");

  lax.init();
  lax.addDriver("scrollY", () => window.scrollY);

  lax.addElements("#splash", {
    scrollY: {
      translateY: [
        [0, "0.6*screenHeight", "1.6*screenHeight"],
        [0, "-1*screenWidth/2", "-1*screenWidth"],
      ],
    },
  });

  lax.addElements("#wood-panel", {
    scrollY: {
      translateY: [
        [0, "screenHeight", "2*screenHeight"],
        [0, "-1*screenWidth/2", "-1*screenWidth"],
      ],
      translateX: [[0], ["-elWidth/2"]],
    },
  });

  const staggeredActors = [
    { name: "#front-gate" },
    { name: "#people" },
    { name: "#closest-stalls" },
    { name: "#closer-stalls" },
    { name: "#close-stalls" },
    {
      name: "#far-stalls",
      extra: {
        translateX: [[0], ["-elWidth/2"]],
      },
    },
    {
      name: "#further-stalls",
      extra: {
        translateX: [[0], ["-elWidth/2"]],
      },
    },
    { name: "#furthest-stalls" },
  ];

  const base = 1200;
  const step = 0.15;

  for (let i = 0; i < staggeredActors.length; i++) {
    lax.addElements(staggeredActors[i].name, {
      scrollY: {
        scale: [
          [i * step * base, (i + 1) * 2 * step * base],
          [1, 2],
        ],
        opacity: [
          [i * step * base, (i + 1) * 2 * step * base],
          [1, 0],
        ],
        ...staggeredActors[i].extra,
      },
    });
  }

  const endLength = (staggeredActors.length + 1.5) * 2 * step * base;

  lax.addElements("#ground", {
    scrollY: {
      scale: [
        [staggeredActors.length * step * base, (staggeredActors.length + 2) * 2 * step * base],
        [1, 2],
      ],
      translateY: [
        [staggeredActors.length * step * base, (staggeredActors.length + 2) * 2 * step * base],
        [0, "elHeight/2"]
      ],
      opacity: [
        [staggeredActors.length * step * base, 0.75 * endLength],
        [1, 0]
      ]

    }
  });

  scrollJackContainer.style.height = `${endLength}px`
};

window.onload = () => {
  playMovie();
};
