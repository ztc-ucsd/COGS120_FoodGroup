var data;
var section;

/**
   define javascript object var to hold the items data,
   loop through it to display items and categories correctly in initializePage
*/

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
   if (url.substring(0, 8) != "/addItem") {
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
      for (var i = 0; i < sections.length; i++) {
         if (sections[i].id != section) {
            $('#' + sections[i].id).html("");
         }
      }
   }

   $('#sect').val(section);

   //THE ADD ITEM FORM STILL HAS ALL THE CATEGORIES SO WE STILL NEED TO ONLY SHOW THE CATEGORIES FOR THE CURRENT SECTION
   /*var options = $('select[name="category"] option'); //All category options in list
   var categories = $("#" + section + " h2").text(); //Categories in the section
   
   for (var i = 0; i < options.length; i++) {
      for (var j = 0; j < categories.length; j++) {
         console.log("o: " + options[i].value + "c: " + categories[j].text());
         if (options[i] == categories[j]) {
            isin = true;
            break;
         }
      }
      if (!isin) {
         $('select option[value="' + options[i] + '"]').remove();
      }
      isin = false;
   }
   console.log("options: " + options[0].value);*/

   $('.item').click(itemClick);
}

function addItem(str, exp) {
   var itemHTML = "<li class='item'><a href='#' id='" + str + "'class='alignleft'>" + str +
                  "</a><a class='alignright'>" + exp + "</a></li>";
   $("#items").append(itemHTML);
}

function addCategory(cat) {
   var catHTML = "<li class=category><a id='" + cat + "'>" + cat + "</a></li>";
   $("#items").append(catHTML);
}

function confirmItembtn(e) {
   console.log("btn press");
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
   initializePage();
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
   var modal = document.getElementById("itemClick");

   //$('#itemClickHeader').html(itemName);
   for (ind = 0; ind < items.length; ++ind) {
      if (itemName == items[ind].itemName)
         break;
   }
   $('input[name="itemName"]').val(itemName);
   $('input[name="category"]').val(items[ind].category);
   $('input[name="expiration"]').val(items[ind].expiration);
   $('input[name="notification"]').val(items[ind].notification);

   //Delete item if button is clicked
   $('#deleteItemBtn').click = function deleteItem(e) {
      alert("delete");
      $(itemName).remove();
      items[ind] = 0;
   }

   modal.style.display = "block";

}

window.onload = function () {

   //var data = JSON.parse(data.json);

   var modal = document.getElementById("myModal");
   var itemInfo = document.getElementById("itemClick");

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
      itemInfo.style.display = "none";
   }

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function (event) {
      if (event.target == modal) {
         modal.style.display = "none";
      } else if (event.target == itemInfo) {
         itemInfo.style.display = "none";
      }
   }

   //$("#confirmItembtn").click(confirmItembtn);
};
