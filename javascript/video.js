var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

window.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('angst-video');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const backwardBtn = document.getElementById('backward-btn');
    const forwardBtn = document.getElementById('forward-btn');
    const controls = document.querySelector('.video-controls');
    const endPopup = document.getElementById('end-popup');
    const character = document.getElementById('character-container');
    let hideTimeout;

    // Events for video controls
    playBtn.onclick = () => video.play();
    pauseBtn.onclick = () => video.pause();
    backwardBtn.onclick = () => video.currentTime = Math.max(0, video.currentTime - 10);
    forwardBtn.onclick = () => video.currentTime = Math.min(video.duration, video.currentTime + 10);

    // Fjerne loader når videoen er klar
    video.addEventListener('canplay', function() {
        if (character) character.classList.add('fade-out');
    });

    // Popup når video er færdig
    video.addEventListener('ended', function() {
        if (endPopup) endPopup.style.display = 'flex';
    });

    // gemmer/viser kontrollene
    function showControls() {
        controls.classList.remove('hide');
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            controls.classList.add('hide');
        }, 2000);
    }

    document.addEventListener('mousemove', showControls);
    document.addEventListener('touchstart', showControls);

    // Fjerner kontrollene etter 2 sekunder
    hideTimeout = setTimeout(() => {
        controls.classList.add('hide');
    }, 2000);
});