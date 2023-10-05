const soundsFiler = {
  folder: "audio/",
  sounds: [
    {
      file: "obama.mp3",
      name: "obama!",
      key: "x",
      img: "obamna.jfif",
    },
    {
      file: "sus.mp3",
      name: "impostor",
      key: "c",
      img: "germ.jfif",
    },
    {
      file: "Bonk.wav",
      name: "Bonkers",
      key: "b",
      img: "bonk.png",
    },
    {
      file: "vine-boom.mp3",
      name: "boom",
      key: "v",
      img: "boom.png",
    },
    {
      file: "pluh.mp3",
      name: "Pluh!!!",
      key: "n",
      img: "pluh.png",
    },
    {
      file: "wow.mp3",
      name: "WooooW",
      key: "m",
      img: "Wow.jpg",
    },
    {
      file: "bup.mp3",
      name: "bup",
      key: "p",
      img: "Bup.png",
    },
    {
      file: "Scream.mp3",
      name: "scream",
      key: "z",
      img: "AHHH.jfif",
    },
  ],
};

const soundField = document.querySelector("#sounds-magic");
const btnImgs = document.querySelector("#showbtnimg");
const inputBtns = document.querySelector("#btn-inputs");

soundsFiler.sounds.forEach((sound) => {
  const magicSound = btnCreate(sound.name);

  const btnAudio = new Audio(`${soundsFiler.folder}${sound.file}`);
  sound.audioElement = btnAudio;

  magicSound.addEventListener("pointerdown", () => {
    playSound(btnAudio);
    showImg(sound.img);
  });
  soundField.append(magicSound);
});

soundsFiler.sounds.forEach((sound) => {
  const inputButton = inputCreate(sound.key, sound.name);
  inputBtns.append(inputButton);
});

document.addEventListener("keydown", (event) => {
  const soundObj = soundsFiler.sounds.find((sound) => sound.key === event.key);
  if (soundObj) {
    playSound(soundObj.audioElement);
    showImg(soundObj.img);
  }
});

function playSound(audioElement) {
  if (audioElement.paused) {
    audioElement.play();
  } else {
    const newAudioElement = audioElement.cloneNode();
    newAudioElement.play();
  }
}

function btnCreate(name) {
  const btnEl = document.createElement("button");
  btnEl.textContent = name;
  return btnEl;
}
function inputCreate(input, name) {
  const pMaker = document.createElement("p");
  pMaker.textContent = `${input}: ${name} `;
  return pMaker;
}

function showImg(img) {
  const imgFile = "imgs/";
  btnImgs.src = `${imgFile}${img}`;
  btnImgs.style.display = "flex";
}
