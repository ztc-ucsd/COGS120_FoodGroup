// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
   initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
   //$("a.name").click(nameClick);

   var data = JSON.parse(data.json);
   readJSON('data.json');

   /*$.getJSON("../../data.json", function (json) {
      console.log(json);
      alert(json);
   });*/
   console.log("Javascript connected!");
}

function readJSON(path) {
   var xhr = new XMLHttpRequest();
   xhr.open('GET', path, true);
   xhr.responseType = 'blob';
   xhr.onload = function (e) {
      if (this.status == 200) {
         var file = new File([this.response], 'temp');
         var fileReader = new FileReader();
         fileReader.addEventListener('load', function () {
            //do stuff with fileReader.result
         });
         fileReader.readAsText(file);
      }
   }
   xhr.send();
}

window.onload = function () {

   //var data = JSON.parse(data.json);

   var modal = document.getElementById("myModal");

   // Get the button that opens the modal
   var btn = document.getElementById("addItembtn");

   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];

   // When the user clicks the button, open the modal 
   btn.onclick = function () {
      modal.style.display = "block";
   }

   // When the user clicks on <span> (x), close the modal
   span.onclick = function () {
      modal.style.display = "none";
   }

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function (event) {
      if (event.target == modal) {
         modal.style.display = "none";
      }
   }
};
