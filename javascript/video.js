"use strict";
// Video player script for angst video
window.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('angst-video');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const backwardBtn = document.getElementById('backward-btn');
    const forwardBtn = document.getElementById('forward-btn');
    const controls = document.querySelector('.video-controls');
    let hideTimeout;

    // Toggle play/pause knap synlighed
    function updatePlayPauseButtons() {
        if (video.paused) {
            playBtn.style.display = 'inline-block';
            pauseBtn.style.display = 'none';
        } else {
            playBtn.style.display = 'none';
            pauseBtn.style.display = 'inline-block';
        }
    }

    // Initial state
    updatePlayPauseButtons();

    // Events for video kontroller
    playBtn.onclick = () => {
        video.play();
        updatePlayPauseButtons();
    };
    pauseBtn.onclick = () => {
        video.pause();
        updatePlayPauseButtons();
    };
    backwardBtn.onclick = () => video.currentTime = Math.max(0, video.currentTime - 10);
    forwardBtn.onclick = () => video.currentTime = Math.min(video.duration, video.currentTime + 10);

    // Update buttons on play/pause events
    video.addEventListener('play', updatePlayPauseButtons);
    video.addEventListener('pause', updatePlayPauseButtons);

    video.addEventListener('ended', function() {
    window.location.href = 'quiz.html';
});

    document.addEventListener('mousemove', showControls);
    document.addEventListener('touchstart', showControls);
});

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  const video = document.getElementById("angst-video");
  if (video) {
    video.muted = false; // Unmute videoen
    video.play();        // start videoen med lyd
  }
}