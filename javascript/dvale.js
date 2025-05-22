"use strict";
let dvaleTimer;

function nulstilDvaleTimer() {
  clearTimeout(dvaleTimer);
  dvaleTimer = setTimeout(function() {
    window.location.href = "index.html";
  }, 120000); //2 minutter dvale tilstand
}


['mousemove', 'keydown', 'mousedown', 'touchstart'].forEach(event => {
  document.addEventListener(event, nulstilDvaleTimer, true);
});

nulstilDvaleTimer();
