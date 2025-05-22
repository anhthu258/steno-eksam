
"use strict";
  document.addEventListener('DOMContentLoaded', function() {
    const bogImg = document.getElementById('bogLukket');
    if (bogImg) {
      bogImg.style.cursor = "pointer";
      bogImg.addEventListener('click', function() {
      document.querySelectorAll('.bog-lukket p').forEach(p => p.style.display = 'none');
        bogImg.classList.add('zooming');
        setTimeout(function() {
          window.location.href = 'kapitler.html';
        }, 1200); 
      });
    }
  });

  