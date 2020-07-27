// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal-2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn-2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close-2")[0];

// When the user clicks on the button, open the modal
btn.onclick = function(evt) {
  evt.preventDefault();
  modal.style.display = "block";
};

btn2.onclick = function(evt) {
  evt.preventDefault();
  modal2.style.display = "block";
};


// When the user clicks on <span> (x), close the modal
span.onclick = function(evt) {
  evt.preventDefault();
  modal.style.display = "none";
};

span2.onclick = function(evt) {
  evt.preventDefault();
  modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};


