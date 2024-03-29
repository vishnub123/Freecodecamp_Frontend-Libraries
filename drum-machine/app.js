const Qbtn = document.getElementById("Qbtn");
const QAudio = document.getElementById("Q");
const info = document.getElementById("info");

Qbtn.addEventListener("click", function () {
  QAudio.play();
  info.innerHTML = "Q Clicked";
});

const Wbtn = document.getElementById("Wbtn");
const WAudio = document.getElementById("W");

Wbtn.addEventListener("click", function () {
  WAudio.play();
  info.innerHTML = "W Clicked";
});

const Ebtn = document.getElementById("Ebtn");
const EAudio = document.getElementById("E");

Ebtn.addEventListener("click", function () {
  EAudio.play();
  info.innerHTML = "E Clicked";
});

const Abtn = document.getElementById("Abtn");
const AAudio = document.getElementById("A");

Abtn.addEventListener("click", function () {
  AAudio.play();
  info.innerHTML = "A Clicked";
});

const Sbtn = document.getElementById("Sbtn");
const SAudio = document.getElementById("S");

Sbtn.addEventListener("click", function () {
  SAudio.play();
  info.innerHTML = "S Clicked";
});

const Dbtn = document.getElementById("Dbtn");
const DAudio = document.getElementById("D");

Dbtn.addEventListener("click", function () {
  DAudio.play();
  info.innerHTML = "D Clicked";
});

const Zbtn = document.getElementById("Zbtn");
const ZAudio = document.getElementById("Z");

Zbtn.addEventListener("click", function () {
  ZAudio.play();
  info.innerHTML = "Z Clicked";
});

const Xbtn = document.getElementById("Xbtn");
const XAudio = document.getElementById("X");

Xbtn.addEventListener("click", function () {
  XAudio.play();
  info.innerHTML = "X Clicked";
});

const Cbtn = document.getElementById("Cbtn");
const CAudio = document.getElementById("C");

Cbtn.addEventListener("click", function () {
  CAudio.play();
  info.innerHTML = "C Clicked";
});

document.addEventListener("keydown", function (event) {
  // Check if the pressed key is "q" (key code 81)
  if (event.keyCode === 81) {
    // Play the audio
    QAudio.play();
    info.innerHTML = "Q Pressed";
  } else if (event.keyCode === 87) {
    // Play the audio
    WAudio.play();
    info.innerHTML = "E Pressed";
  } else if (event.keyCode === 69) {
    // Play the audio
    EAudio.play();
    info.innerHTML = "E Pressed";
  } else if (event.keyCode === 65) {
    // Play the audio
    AAudio.play();
    info.innerHTML = "A Pressed";
  } else if (event.keyCode === 83) {
    // Play the audio
    SAudio.play();
    info.innerHTML = "S Pressed";
  } else if (event.keyCode === 68) {
    // Play the audio
    DAudio.play();
    info.innerHTML = "D Pressed";
  } else if (event.keyCode === 90) {
    // Play the audio
    ZAudio.play();
    info.innerHTML = "Z Pressed";
  } else if (event.keyCode === 88) {
    // Play the audio
    XAudio.play();
    info.innerHTML = "X Pressed";
  } else if (event.keyCode === 67) {
    // Play the audio
    CAudio.play();
    info.innerHTML = "C Pressed";
  }
});
