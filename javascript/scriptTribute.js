

var modal = document.getElementById('myModal');
var frame = document.getElementsByClassName('iframe')[0];
var modalpic = document.getElementById('img01');

frame.addEventListener('click', function(e) {
  var clicked = e.target;
  if (clicked.className === 'thumbnail img-responsive pics') {
    modal.style.display = "block";
    modalpic.src = clicked.src;
  } else {
    return false;
  }
});