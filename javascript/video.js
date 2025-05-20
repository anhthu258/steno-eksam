const video = document.getElementById('angst-video');
    document.getElementById('play-btn').onclick = () => video.play();
    document.getElementById('pause-btn').onclick = () => video.pause();
    document.getElementById('backward-btn').onclick = () => video.currentTime = Math.max(0, video.currentTime - 10);
    document.getElementById('forward-btn').onclick = () => video.currentTime = Math.min(video.duration, video.currentTime + 10);