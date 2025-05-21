// Video player script for angst video
window.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('angst-video');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const backwardBtn = document.getElementById('backward-btn');
    const forwardBtn = document.getElementById('forward-btn');
    const controls = document.querySelector('.video-controls');
    const endPopup = document.getElementById('end-popup');
    const character = document.getElementById('character-container');
    const closePopup = document.getElementById('close-popup');
    let hideTimeout;

    // Events for video kontroller
    playBtn.onclick = () => video.play();
    pauseBtn.onclick = () => video.pause();
    backwardBtn.onclick = () => video.currentTime = Math.max(0, video.currentTime - 10);
    forwardBtn.onclick = () => video.currentTime = Math.min(video.duration, video.currentTime + 10);

    // Popup når video er færdig
    video.addEventListener('ended', function() {
        if (endPopup) endPopup.style.display = 'flex';
    });

    // Lukker popup ved at klikke udenfor popupen
    if (endPopup) {
        endPopup.addEventListener('click', function(e) {
            // Lukker popup ved at klikke udenfor popupen
            if (e.target === endPopup) {
                endPopup.style.display = 'none';
            }
        });
    }

    if (closePopup) {
        closePopup.onclick = function() {
            endPopup.style.display = 'none';
        };
    }

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