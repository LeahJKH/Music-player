import { soundsFiler } from "./module.js"; //imports the object

const soundField = document.querySelector("#sounds-magic");
const btnImgsDiv = document.querySelector("#show-btn-img-div");
const inputBtns = document.querySelector("#btn-inputs");

const btnImgs = document.createElement("img")

// this is the main logic too make it all work telling where to find what and parsing the object through
soundsFiler.sounds.forEach((sound) => {
  const magicSound = btnCreate(sound.name);

  const btnAudio = new Audio(`${soundsFiler.folder}${sound.file}`);
  sound.audioElement = btnAudio;

  magicSound.addEventListener("pointerdown", () => {
    playSound(btnAudio);
    showImg(sound.img, sound.alt);
  });
  soundField.append(magicSound);

  const inputButton = inputCreate(sound.key, sound.name);
  inputBtns.append(inputButton);
});



// This checks which key you press down so that it will display an image and play a sound when the right key is pressed
document.addEventListener("keydown", (event) => {
  const soundObj = soundsFiler.sounds.find((sound) => sound.key === event.key); //this checks if the key exists in the object
  if (soundObj) {
    playSound(soundObj.audioElement);
    showImg(soundObj.img);
  }
});

//this plays the sound
function playSound(audioElement) {
  if (audioElement.paused) {
    audioElement.play();
  } else {
    const newAudioElement = audioElement.cloneNode();
    newAudioElement.play();
  }
}

//this creates the main buttons that you can click onscreen
function btnCreate(name) {
  const btnEl = document.createElement("button");
  btnEl.textContent = name;
  return btnEl;
}

// this dynamically changes the button inputs to that you can show it while still adding too the object
function inputCreate(input, name) {
  const pMaker = document.createElement("p");
  pMaker.textContent = `${input}: ${name} `;
  return pMaker;
}

//this sets up image for each time its called
function showImg(img, alt) {
  btnImgs.id = "showbtnimg"
  btnImgs.src = `imgs/${img}`;
  btnImgs.alt = `${alt}`
  btnImgs.style.display = "flex";
  btnImgsDiv.appendChild(btnImgs)
}
