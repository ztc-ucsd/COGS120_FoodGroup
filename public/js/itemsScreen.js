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
   var items = [
      {
         "itemName": "Milk",
         "section": "Fridge",
         "category": "Dairy",
         "expiration": "1 weeks",
         "notification": "3 day",
         "shared": "TRUE"
      },
      {
         "itemName": "Chedder",
         "section": "Fridge",
         "category": "Dairy",
         "expiration": "2 weeks",
         "notification": "3 day",
         "shared": "TRUE"
      },
      {
         "itemName": "Greek Yogurt",
         "section": "Fridge",
         "category": "Dairy",
         "expiration": "2 weeks",
         "notification": "1 day",
         "shared": "TRUE"
      },
      {
         "itemName": "Apples",
         "section": "Fridge",
         "category": "Fruit",
         "expiration": "2 weeks",
         "notification": "1 day",
         "shared": "TRUE"
      },
      {
         "itemName": "Carrots",
         "section": "Fridge",
         "category": "Vegetable",
         "expiration": "2 weeks",
         "notification": "4 day",
         "shared": "TRUE"
      },
      {
         "itemName": "Doritos",
         "section": "Pantry",
         "category": "Snack",
         "expiration": "11 monts",
         "notification": "1 day",
         "shared": "TRUE"
      }
   ]

   var categories = [
      {
         "categoryName": "Dairy",
         "section": "Fridge"
      },
      {
         "categoryName": "Fruit",
         "section": "Fridge"
      },
      {
         "categoryName": "Vegetable",
         "section": "Fridge"
      }
   ]
   //$("a.name").click(nameClick);

   //var data = JSON.parse(data.json);
   //readJSON('../data.json');

   /*$.getJSON("../../data.json", function (json) {
      console.log(json);
      alert(json);
   });*/

   for (var i = 0; i < categories.length; ++i) {
      addCategory(categories[i].categoryName);
      for (var j = 0; j < items.length; j++) {
         if (items[j].category == categories[i].categoryName) {
            addItem(items[j].itemName, items[j].expiration);
         }
      }
   }

   $("#confirmItembtn").click(confirmItembtn);
}

function addItem(str, exp) {
   var ul = document.getElementById("items");
   var liitem = document.createElement("li");
   var aleft = document.createElement("a");
   var aright = document.createElement("a");
   liitem.setAttribute("class", "item");
   aleft.setAttribute("class", "alignleft");
   aleft.appendChild(document.createTextNode(str));
   aright.setAttribute("class", "alignright");
   aright.appendChild(document.createTextNode(exp));
   liitem.appendChild(aleft);
   liitem.appendChild(aright);
   ul.appendChild(liitem);
}

function addCategory(cat) {
   var ul = document.getElementById("items");
   var li = document.createElement("li");
   var aleft = document.createElement("a");
   li.setAttribute("class", "category");
   aleft.setAttribute("class", "alignleft");
   aleft.appendChild(document.createTextNode(cat));
   li.appendChild(aleft);
   ul.appendChild(li);
}

function confirmItembtn(e) {
   e.preventDefault();
   
   var modal = document.getElementById("myModal");
   var name = document.getElementsByName("itemName")[0].value;
   var category = document.getElementsByName("category")[0].value;
   var notification = document.getElementsByName("notification")[0].value;
   addItem(name, "1 day");
   modal.style.display = "none";
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
