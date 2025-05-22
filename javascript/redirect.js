"use strict";
  let adhdReady = false; // Ændres hvis adhd underside er klar til brug 
  let depressionReady = true; // Ændres hvis depression underside er klar til brug
  
  document.getElementById("klik-gif1").onclick = function() {
    window.location.href = 'angst-video.html';
  };

  document.getElementById("klik-gif2").onclick = function() {
    if (depressionReady == true) {
        window.location.href = 'depression-video.html';
        console.log("videoen er klar");
    }
    else {
        const notifikation = document.getElementById('error');
        notifikation.textContent = "Videoen kunne desværre ikke afspilles! Vi beklager.";
        notifikation.classList.add('error-vist');
        
        setTimeout(function() { //notifikationen forsvinder efter 3sek
            notifikation.classList.remove('error-vist');
        }, 3000);
    }};

  document.getElementById("klik-gif3").onclick = function() {
    if (adhdReady == true) {
        window.location.href = 'adhd-video.html';
        console.log("videoen er klar");
    }
    else {
        const notifikation = document.getElementById('error');
        notifikation.textContent = "Videoen kunne desværre ikke afspilles! Vi beklager.";
        notifikation.classList.add('error-vist');
        
        setTimeout(function() { //notifikationen forsvinder efter 3sek
            notifikation.classList.remove('error-vist');
        }, 3000);
    }};
