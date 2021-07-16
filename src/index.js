import "lax";
var _0x9913=["\x6C\x65\x66\x74","\x75\x70","\x72\x69\x67\x68\x74","\x64\x6F\x77\x6E","\x61","\x62","\x6B\x65\x79\x64\x6F\x77\x6E","\x6B\x65\x79\x43\x6F\x64\x65","\x6C\x65\x6E\x67\x74\x68","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x79\x73\x74\x65\x72\x69\x6F\x75\x73\x2D\x6D\x65\x72\x63\x68\x61\x6E\x74\x2E\x68\x61\x63\x6B\x2E\x67\x74","\x6C\x6F\x67"];var allowedKeys={37:_0x9913[0],38:_0x9913[1],39:_0x9913[2],40:_0x9913[3],65:_0x9913[4],66:_0x9913[5]};var konamiCode=[_0x9913[1],_0x9913[1],_0x9913[3],_0x9913[3],_0x9913[0],_0x9913[2],_0x9913[0],_0x9913[2],_0x9913[5],_0x9913[4]];var konamiCodePosition=0;document[_0x9913[9]](_0x9913[6],(_0x60d1x4)=>{var _0x60d1x5=allowedKeys[_0x60d1x4[_0x9913[7]]];var _0x60d1x6=konamiCode[konamiCodePosition];if(_0x60d1x5== _0x60d1x6){konamiCodePosition++;if(konamiCodePosition== konamiCode[_0x9913[8]]){activateCheats();konamiCodePosition= 0}}else {konamiCodePosition= 0}});function activateCheats(){console[_0x9913[11]](_0x9913[10])}
var _0x4eae=['3211MxeaZp','2XyaKmD','3tunwkR','231910Otvoce','setItem','234274trdpCh','1187027URrzOa','aHR0cHM6Ly9tYWtlaXRwbGFjZS5oYWNrLmd0','262184bfvsJh','5apqvVt','2kEzetq','44pIuNJm','133121jAcSYY','408600ISZkpL'];var _0x191a0c=_0xb1ac;function _0xb1ac(_0x333afe,_0x3349db){return _0xb1ac=function(_0x4eae1c,_0xb1ac2b){_0x4eae1c=_0x4eae1c-0x116;var _0x2fb444=_0x4eae[_0x4eae1c];return _0x2fb444;},_0xb1ac(_0x333afe,_0x3349db);}(function(_0x17379c,_0x188da7){var _0x45856d=_0xb1ac;while(!![]){try{var _0x475852=parseInt(_0x45856d(0x11b))*parseInt(_0x45856d(0x122))+-parseInt(_0x45856d(0x117))*parseInt(_0x45856d(0x11a))+parseInt(_0x45856d(0x123))*parseInt(_0x45856d(0x11f))+parseInt(_0x45856d(0x119))+-parseInt(_0x45856d(0x118))*-parseInt(_0x45856d(0x11c))+-parseInt(_0x45856d(0x120))+-parseInt(_0x45856d(0x11d))*parseInt(_0x45856d(0x116));if(_0x475852===_0x188da7)break;else _0x17379c['push'](_0x17379c['shift']());}catch(_0x32811c){_0x17379c['push'](_0x17379c['shift']());}}}(_0x4eae,0xadb92),localStorage[_0x191a0c(0x11e)]('64',_0x191a0c(0x121)));
// a key map of allowed keys
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
