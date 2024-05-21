

let prog = document.getElementById("prog");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");
let currentTimeDisplay = document.getElementById("currentTime");

song.onloadedmetadata = function () {
  prog.max = song.duration;
  prog.value = song.currentTime;
};

function playPause() {
  if (controlIcon.classList.contains("bi-pause-fill")) {
    song.pause();
    controlIcon.classList.remove("bi-pause-fill");
    controlIcon.classList.add("bi-play-fill");
  } else {
    song.play();
    controlIcon.classList.add("bi-pause-fill");
    controlIcon.classList.remove("bi-play-fill");
  }
}

prog.oninput = function () {
  song.currentTime = prog.value;
  updateProgressBarStyle();
};

song.onplay = function () {
  controlIcon.classList.add("bi-pause-fill");
  controlIcon.classList.remove("bi-play-fill");
  updateProgressBarStyle();
};

song.onpause = function () {
  controlIcon.classList.remove("bi-pause-fill");
  controlIcon.classList.add("bi-play-fill");
  updateProgressBarStyle();
};

song.ontimeupdate = function () {
  prog.value = song.currentTime;
  currentTimeDisplay.innerText = formatTime(song.currentTime);
  updateProgressBarStyle();
};

function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = Math.floor(time % 60);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (hours > 0) {
    return `${hours}:${minutes}:${seconds}`;
  } else {
    return `${minutes}:${seconds}`;
  }
}

function updateProgressBarStyle() {
  if (song.currentTime < song.duration) {
    prog.style.setProperty(
      "--thumb-box-shadow",
      "-10000px 0 0 10000px #F5B078"
    );
  } else {
    prog.style.setProperty(
      "--thumb-box-shadow",
      "-10000px 0 0 20000px #F5B078"
    );
  }
}
