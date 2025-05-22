let dvaleTimer;

function nulstilDvaleTimer() {
  clearTimeout(dvaleTimer);
  dvaleTimer = setTimeout(function() {
    window.location.href = "index.html";
  }, 2000); 
}