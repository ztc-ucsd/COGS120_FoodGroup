var section;

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
   initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
   var isin = false;
   var sections = $('#items').find('div'); //Get all sections
   var url = window.location.href;

   url = url.substring(url.lastIndexOf("/"));
   console.log(url.substring(0, 4));
   if (url.substring(0, 4) != "/add") {
      section = window.location.href; //Current section passed through url from '/sections' page

      //reformat from the url to only get section
      var ind = section.lastIndexOf('#') + 1;
      section = section.substring(ind);
      section = section.replace("%20", " ");
      window.name = section;
   }
   section = window.name;
   console.log("Section: " + section);
   if (section != "All Items") {
      //Loop to remove items that aren't in the current section
      for (var i = 0; i < sections.length; i++) {
         console.log("s: " + sections[i].id);
         console.log(sections[i].id != section);
         if (sections[i].id != section) {
            document.getElementById(sections[i].id).innerHTML = "";
            //$('#' + sections[i].id).html("");
         }
      }

      //THE ADD ITEM FORM STILL HAS ALL THE CATEGORIES SO WE STILL NEED TO ONLY SHOW THE CATEGORIES FOR THE CURRENT SECTION
      //Working now
      var options = $('select[name="category"] option'); //All category options in list
      var categories = $("#" + section + " h2").toArray(); //Categories in the section

      for (var i = 0; i < options.length; i++) {
         for (var j = 0; j < categories.length; j++) {
            console.log("o: " + options[i].value + " c: " + categories[j].innerText); //debug prints
            console.log(options[i].value == categories[j].innerText);                 //debug prints
            if (options[i].value == categories[j].innerText) {
               isin = true;
               break;
            }
         }
         if (!isin) {
            $('select option[value="' + options[i].value + '"]').remove();
         }
         isin = false;
      }
   }

   $('.sect').val(section);

   $('.item').click(itemClick);
}

function confirmItembtn(e) {
   /*console.log("btn press");
   e.preventDefault();
   
   var item = {
      "itemName": $('input[name="itemName"]').val(),
      "section": "Fridge",
      "category": $('select[name="category"]').val(),
      "expiration": $('input[name="expiration"]').val(),
      "notification": $('input[name="notification"]').val(),
      "shared": "TRUE"
   }

   data.items.push(item);
   var modal = document.getElementById("myModal");
   modal.style.display = "none";
   document.getElementById("addItemForm").reset();
   initializePage();*/
}

function confirmMemberbtn(e) {
   e.preventDefault();
   
   var modal = document.getElementById("myModal");
   var name = document.getElementsByName("itemName")[0].value;
   var category = document.getElementsByName("category")[0].value;
   var notification = document.getElementsByName("notification")[0].value;
   addItem(name, "1 day");
   modal.style.display = "none";
}

function itemClick(e) {
   e.preventDefault();

   var ind;
   var itemName = e.target.id;
   console.log("item clicked: " + itemName);
   var modal = document.getElementById("itemClick");

   //$('#itemClickHeader').html(itemName);
   $('input[name="itemName"]').val(itemName);
   $('input[name="category"]').val();
   $('input[name="expiration"]').val();
   $('input[name="notification"]').val();

   //Delete item if button is clicked
   $('#deleteItemBtn').click = function deleteItem(e) {
      alert("delete");
      $(itemName).remove();
      items[ind] = 0;
   }

   modal.style.display = "block";
   var span = document.getElementsByClassName("close")[1];
   span.onclick = function () {
      modal.style.display = "none";
   }
}

window.onload = function () {

   var modal = document.getElementById("myModal");
   var itemInfo = document.getElementById("itemClick");
   var catModal = document.getElementById("newCat");

   // Get the button that opens the modal
   var itembtn = document.getElementById("addItembtn");
   var catbtn = document.getElementById("addCatbtn");

   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];

   // When the user clicks the button, open the modal 
   itembtn.onclick = function () {
      modal.style.display = "block";
   }

   catbtn.onclick = function () {
      catModal.style.display = "block";
   }

   // When the user clicks on <span> (x), close the modal
   span.onclick = function () {
      modal.style.display = "none";
      itemInfo.style.display = "none";
      catModal.style.display = "none";
   }

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function (event) {
      if (event.target == modal) {
         modal.style.display = "none";
      } else if (event.target == itemInfo) {
         itemInfo.style.display = "none";
      } else if (event.target === catModal) {
         catModal.style.display = "none";
      }
   }

   //$("#confirmItembtn").click(confirmItembtn);
};
