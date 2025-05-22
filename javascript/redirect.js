
  let adhdReady = false; // Ændres hvis adhd underside er klar til brug 
  let depressionReady = false; // Ændres hvis depression underside er klar til brug
  
  document.getElementById("klik-gif1").onclick = function() {
    window.location.href = 'angst-video.html';
  };

  document.getElementById("klik-gif2").onclick = function() {
    window.location.href = 'angst-video.html';
  }

  document.getElementById("klik-gif3").onclick = function() {
    if (adhdReady == true) {
        window.location.href = 'adhd-video.html';
        console.log("videoen er klar");
    }
    else
    alert("videoen er ikke klar endnu");
    console.log("videoen er ikke klar");
  };


