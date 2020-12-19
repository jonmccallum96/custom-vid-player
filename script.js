const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const container = document.getElementById('container');
const body = document.querySelector('body');


//ONPLAY

function playVideo(vid) {
  vid.play();
  container.style.height = '80%';
  body.style.backgroundColor = '#222'
}

//ONPAUSE
function pauseVideo(vid) {
  vid.pause();
}


//TOGGLE VIDEO PLAY / PAUSE
function toggleVideo() {
  video.paused ? playVideo(video) : pauseVideo(video);
  togglePlayIcon();
}

//TOGGLE PLAY ICON
function togglePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  }
}

//UPDATE TIMESTAMP & PROGRESS BAR
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let mins = Math.floor(video.currentTime / 60);

  if (mins < 10) {
    mins = '0' + String(mins);
  }

  let secs = Math.floor(video.currentTime % 60);

  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

//CONTROL VID TIME WITH SLIDER
function setVideoTime() {
  video.currentTime = (progress.value * video.duration) / 100;
}

//STOP PLAYBACK
function stopVideo() {
  video.currentTime = 0;
  pauseVideo(video);
  container.style.height = '40%';
  body.style.backgroundColor = '#666'
}


//EVENT LISTENERS
video.addEventListener('click', toggleVideo);
video.addEventListener('pause', togglePlayIcon);
video.addEventListener('play', togglePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideo)

stopBtn.addEventListener('click', stopVideo)

progress.addEventListener('change', setVideoTime)