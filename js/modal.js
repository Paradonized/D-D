// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("closeBtn");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
     e.preventDefault();
     modal = document.querySelector(e.target.getAttribute("href"));
     modal.style.display = "block";
     document.body.style.overflow = "hidden"; 
     document.body.style.height = "100%"; 
   }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
   spans[i].onclick = function() {
      for (var index in modals) {
        if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
         document.body.style.overflow = "auto"; 
         document.body.style.height = "auto"; 
      }
   }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
   if (event.target.classList.contains('modal')) {
     for (var index in modals) {
         if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
         document.body.style.overflow = "auto"; 
         document.body.style.height = "auto";  
      }
   }
}