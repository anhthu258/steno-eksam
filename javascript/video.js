const video = document.getElementById('angst-video');
    document.getElementById('play-btn').onclick = () => video.play();
    document.getElementById('pause-btn').onclick = () => video.pause();
    document.getElementById('backward-btn').onclick = () => video.currentTime = Math.max(0, video.currentTime - 10);
    document.getElementById('forward-btn').onclick = () => video.currentTime = Math.min(video.duration, video.currentTime + 10);
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


window.addEventListener('DOMContentLoaded', function() {
    const controls = document.querySelector('.video-controls');
    let hideTimeout;

    function showControls() {
        controls.classList.remove('hide');
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            controls.classList.add('hide');
        }, 2000); // 2 seconds after last interaction
    }

    document.addEventListener('mousemove', showControls);
    document.addEventListener('touchstart', showControls);

    // Hide controls initially after 2 seconds
    hideTimeout = setTimeout(() => {
        controls.classList.add('hide');
    }, 2000);

    const video = document.getElementById('angst-video');
    const endPopup = document.getElementById('end-popup');
    video.addEventListener('ended', function() {
        if (endPopup) endPopup.style.display = 'flex';
    });
    
});