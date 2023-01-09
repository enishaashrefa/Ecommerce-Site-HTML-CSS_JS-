

const swiper = new Swiper('.swiper', {

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  }


});




//search

document.querySelector("#myInput").addEventListener('input', filterList);
function filterList() {
  const searchInput = document.querySelector('#myInput');
  const filter = searchInput.value.toLowerCase();

  const listItem = document.querySelectorAll('.list-item');
  listItem.forEach((item) => {
    let text = item.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = '';
    }
    else {
      item.style.display = 'none';
    }
  })
}

//search



// function search(){
//   let inp = document.getElementById("myInput").value.toUpperCase();
//   let item = document.querySelectorAll(".featured .item");
//   let l = document.querySelectorAll(".featured .item h3");
//   for (var i = 0; i<=l.length; i++){
//     let a = item[i].querySelectorAll(".featured .item h3");

//     let value = a.innerHTML || a.innerText || a.textContent;

//     if(value.toUpperCase().indexOf(inp) > -1){
//         item[i].style.display= "";
//     }
//     else {
//       item[i].style.display= "none";
//     }
//   }
// }



// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// function filterFunction() {
//   var input, filter, ul, li, a, i;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   div = document.getElementById("myDropdown");
//   a = div.getElementsByTagName("a");
//   for (i = 0; i < a.length; i++) {
//     txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }


/////search updated code

// const listItems = [
//   {name: 'shirt'},
//   {name: 'makeup'},
//   {name: 'lip balm'},
//   {name: 'sports'}

// ];
// const list = document.getElementById('list');

// function setList(group){
//   clearList();
//   for(const listItem of group){
//       const litem = document.createElement('li');
//       litem.classList.add('list-group-item');
//       const text = document.createTextNode(listItem.name);
//       litem.appendChild(text);
//       list.appendChild(litem);

//   }

//   if(group.length == 0){
//     notAvailable();
//   }

// }
// function clearList(){
//   while(list.firstChild){
//     list.removeChild(list.firstChild);
//   }
// }

// function notAvailable(){
//   const litem = document.createElement('li');
//   litem.classList.add('list-group-item');
//   const text = document.createTextNode("No result");
//   litem.appendChild(text);
//   list.appendChild(litem);

// }

// function relevant(value, searchTerm){
//   if( value === searchTerm){
//     return 2;
//   }
//   else if(value.startsWith(term)){
//     return 1;
//   }
//   else if(value.includes(searchTerm)){
//     return 0;
//   }
//   else {
//     return -1;
//   }

// }

// const searchInput = document.getElementById('myInput');


// searchInput.addEventListener('input', (event) => {
//   const value =event.target.value;
//  if(value && value.trim().length > 0){
//       value = value.trim().toLowerCase();
//       setList(listItems.filter(listItem => {
//           return listItem.name.includes(value);

//       }).sort((listItemA, listItemB)=> {
//           return relevant(listItemA.name, value) - relevant(listItemB.name, value);


//       }));
//  }
//  else {
//   clearList();
//  }
// });



//search



// var users = [
//   'Goku',
//   'Naruto',
//   'Ichigo',
//   'Flash',
//   'Batman',
//   'Sherlock Holmes',
//   'Khaleesi',
//   'Steve Fox'
// ];

// ul = document.getElementById("search-items");



// var render_lists = function(lists){
//   var li = "";
//   for(index in lists){
//     li += "<li>" + lists[index] + "</li>";
//   }
//   ul.innerHTML = li;
// }

// render_lists(users);


// input = document.getElementById('myInput');

// var filterUsers = function(event){
//   keyword = input.value.toLowerCase();
//   filtered_users = users.filter(function(user){
//         user = user.toLowerCase();
//        return user.indexOf(keyword) > -1; 
//   });
  
//   render_lists(filtered_users);
// }

// input.addEventListener('keyup', filterUsers);


// function myfun(){
//   ul.style.display = "";
// }



//sidebar
var sidebar = document.getElementById("navbar");

function openmenu() {
  sidebar.style.left = "0";
}

function closemenu() {
  sidebar.style.left = "-200px";
}



var txt = getElementById('li2');

var cur_ele = getElementByClassName('current');

function changeCurrency() {
  cur_ele.innerHTML = txt.textContent;

}




var btntxt = document.getElementById('btn-text');
btntxt.innerHTML = "Added To Cart";


// search

//shop-products

let shopItem = document.getElementById("shop");



// let item_data = [
//   {
//     id: "ddddhhh",
//     name: "books",
//     price: 45,
//     des: "lrem ipsum",
//     img: "assets\trending\books.jpg",
//  },
//   {
//     id: "dddjhdhhh",
//     name: "olive oil",
//     price: 45,
//     des: "lrem ipsum",
//     img: "assets\trending\oil.jpg",
//   },
//   {
//     id: "ddiddhhh",
//     name: "T shirt",
//     price: 45,
//     des: "lrem ipsum",
//     img: "assets\trending\shirt.jpg",
//   },
//   {

//     id: "dddjhhh",
//     name: "lip balm",
//     price: 45,
//     des: "lrem ipsum",
//     img: "assets\trending\lipBalm.jpg",
//   },
// ];

// const shop_gen = () => {

//   return (shopItem.innerHTML =
//   `
//       <div class="shop-item">
//          <img width="200" src="assets\trending\books.jpg" alt="">
//           <div class="product-details">
//               <h3>Books</h3>
//               <p>Lorem ipsum</p>
//               <div class="price">
//                   <h4>BDT. 45</h4>
//                   <div class="buttons">
//                       <div class="qty">0</div>
//                       <i class="ri-add-line"></i>
        
//                   </div>
//               </div>
//           </div>
//      </div>
  
    
    
//     ` ) ;

// };

// shop_gen();



