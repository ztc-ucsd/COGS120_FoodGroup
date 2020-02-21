var members = [
   {
      "memberName": "Michael Zuazo",
      "html": "allmembers.handlebars",
      "id": "member1"
   },
      {
         "memberName": "Jacus Cortes",
         "html": "allmembers.handlebars",
         "id": "member2"
      },
      {
         "memberName": "Zachary Chan",
         "html": "allmembers.handlebars",
         "id": "member3"
      }
]

var items = [
   {
      "itemName": "Chips",
      "member": "Michael Zuazo"
   }
]

$(document).ready(function () {
   initializePage();
})

function initializePage() {
   /*$("#shopping").html("");

   console.log(items);

   for (var i = 0; i < members.length; ++i) {
      addMember(members[i].memberName);
      for (var j = 0; j < items.length; j++) {
         if (items[j].member == members[i].memberName) {
            addItem(items[j].itemName);
         }
      }
   }
   */
}

function addMember(name) {
   var memberHTML = "<h1 id='sections'><a href='#'>" + name + "</a></h1>";
   $('#shopping').append(memberHTML);
}

function addItem(str) {
   var itemHTML = "<a id='" + str + "'class='alignleft'>" + str + "</a>";
   $("#shopping").append(itemHTML);
}

function confirmItembtn(e) {
   e.preventDefault();
   console.log("pressed");

   var item = {
      "itemName": $('input[name="itemName"]').val(),
      "member": $('select[name="member"]').val(),
   }

   items.push(item);
   var modal = document.getElementById("myModal");
   modal.style.display = "none";
   document.getElementById("addItem").reset();
   initializePage();
}

window.onload = function () {
   var modal = document.getElementById("myModal");
   var btn = document.getElementById("addSectionbtn");
   $("#confirmItembtn").click(confirmItembtn);

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
}