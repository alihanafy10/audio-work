/************************** video */
const video = document.getElementById("myVideo");
const playButton = document.getElementById("playButton");
const pussButton = document.getElementById("pussButton");
const progressBar = document.getElementById("progress");
const progressBarContainer = document.getElementById("progressBar");

pussButton.style.display = "none";
playButton.addEventListener("click", function () {
  console.log("1111111111");
  if (video.paused) {
    video.play();
    playButton.style.display = "none";
    pussButton.style.display = "flex";
  } else {
    video.pause();
    playButton.style.display = "flex";
    pussButton.style.display = "none";
  }
});
pussButton.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playButton.style.display = "none";
    pussButton.style.display = "flex";
  } else {
    video.pause();
    playButton.style.display = "flex";
    pussButton.style.display = "none";
  }
});
video.addEventListener("ended", function () {
  playButton.style.display = "flex";
  pussButton.style.display = "none";
});

video.addEventListener("timeupdate", function () {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.style.width = progress + "%";

  const minutes = Math.floor(video.currentTime / 60);
  const seconds = Math.floor(video.currentTime % 60);
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  videoTimeDisplay.innerHTML = formattedTime + " / ";
});

progressBarContainer.addEventListener("click", function (event) {
  const progressBarWidth = progressBarContainer.offsetWidth;
  const clickPosition = event.offsetX;
  const clickPercentage = (clickPosition / progressBarWidth) * 100;
  const newTime = (clickPercentage / 100) * video.duration;
  video.currentTime = newTime;
});

const videoDurationDisplay = document.getElementById("videoDurationDisplay");

// استعراض قيمة المدة المخزنة في localStorage، إذا لم تكن موجودة، استخدم القيمة الافتراضية.
let storedDuration = localStorage.getItem("videoDuration");
if (!storedDuration) {
  storedDuration = "0:00"; // المدة الافتراضية
}

// عرض المدة المخزنة
videoDurationDisplay.textContent = storedDuration;

video.addEventListener("loadedmetadata", function () {
  const duration = Math.floor(video.duration);
  const minutes = Math.floor(duration / 60);
  const seconds = duration - minutes * 60;
  const formattedDuration = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  videoDurationDisplay.textContent = formattedDuration;

  // حفظ المدة المنسقة في localStorage للاستخدام المستقبلي
  localStorage.setItem("videoDuration", formattedDuration);
});


/********************************************* */
$(".son-link div").on("click", function (e) {
  $(".son-link div").removeClass("active");
  $(this).addClass("active");
  if (e.target.classList.contains("one")) {
    $(".maragaa").addClass("d-none");
    $(".taws.maragaa").removeClass("d-none");
    $(".taws.maragaa").addClass("d-block");
  } else {
    $(".maragaa").removeClass("d-none");
    $(".maragaa").addClass("d-block");
    $(".taws.maragaa").addClass("d-none");
  }
});


