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
selectedTrackContent.classList.add("track-showcase");
const tracks = document.querySelectorAll("img[data-track]");

for (const track of tracks) {
  const name = track.dataset.track;
  const content = document.getElementById(`${name}-track-content`);
  track.addEventListener("click", () => {
    selectedTrackContent.classList.remove("show");
    selectedTrackContent.classList.remove("track-showcase");
    content.classList.add("show");
    content.classList.add("track-showcase");
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
        [0, "1.6*screenHeight"],
        [0, "-1*screenHeight"],
      ],
    },
  });

  lax.addElements("#wood-panel", {
    scrollY: {
      translateY: [
        [0, "2*screenHeight"],
        [0, "-1*screenHeight"],
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


const _0x9308=['254533CMUXjX','925251JxGqPD','285702AjTHXh','164531ACjqkf','indexOf','1DfgMjX','push','19dyJwMk','11009fQNIOc','1xjAVUa','620252wxcTQU','3XFOcwg','toString','38,38,40,40,37,39,37,39,66,65','keydown','addEventListener','log','114147xPwvNP'];const _0x7ef332=_0x1275;(function(_0x10e6a2,_0x5efaed){const _0x5d21fc=_0x1275;while(!![]){try{const _0x54c2d2=-parseInt(_0x5d21fc(0xd3))*-parseInt(_0x5d21fc(0xce))+-parseInt(_0x5d21fc(0xdc))*parseInt(_0x5d21fc(0xd2))+parseInt(_0x5d21fc(0xdb))+parseInt(_0x5d21fc(0xd4))*parseInt(_0x5d21fc(0xde))+-parseInt(_0x5d21fc(0xd0))*-parseInt(_0x5d21fc(0xd1))+-parseInt(_0x5d21fc(0xdd))+parseInt(_0x5d21fc(0xda));if(_0x54c2d2===_0x5efaed)break;else _0x10e6a2['push'](_0x10e6a2['shift']());}catch(_0x538318){_0x10e6a2['push'](_0x10e6a2['shift']());}}}(_0x9308,0x755e7));function konami(_0x486619){const _0xabeaf3=_0x1275;let _0x47f874=[];const _0x28bc6c=_0xabeaf3(0xd6);return _0x38c2da=>{const _0x50d087=_0xabeaf3;_0x47f874[_0x50d087(0xcf)](_0x38c2da['keyCode']),_0x47f874[_0x50d087(0xd5)]()[_0x50d087(0xdf)](_0x28bc6c)>=0x0&&(_0x486619(),_0x47f874=[]);};}const handler=konami(()=>{const _0x1522f2=_0x1275;console[_0x1522f2(0xd9)]('https://mysterious-merchant.hack.gt/');});function _0x1275(_0xd61f97,_0x3146bf){return _0x1275=function(_0x930896,_0x1275a0){_0x930896=_0x930896-0xce;let _0x10118e=_0x9308[_0x930896];return _0x10118e;},_0x1275(_0xd61f97,_0x3146bf);}window[_0x7ef332(0xd8)](_0x7ef332(0xd7),handler);



