var popUp = document.getElementById('modal');
var btn = document.getElementById('close');
var blackOver = document.getElementById('blackOverlay');

window.setTimeout(function() {
  popUp.style.display = 'block';
  blackOver.style.display = 'block';
}, 3000);

btn.addEventListener('click', function() {
  modal.style.display = 'none';
  blackOver.style.display = 'none';
});
