   window.products = {
       1: {
           id: 1,
           order: 1,
           'title': 'Product Title 1',
           'price': 'Starting at $500',
           'desc': 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.<br><br>' + '<ul>' + '     <li>Non porta dui euismod nec</li>' + '     <li>Ut tristique ipsum velit</li>' + '     <li>Quisque mollis justo</li>' + '</ul>',
           'uri-stub': '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
           'src': 'img/cereal_b.jpg'
       },
       2: {
           id: 2,
           order: 2,
           'title': 'Product Title 2',
           'price': 'Starting at $1900',
           'desc': 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
           'uri-stub': '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
           'src': 'img/flower_b.jpg'
       },
       3: {
           id: 3,
           order: 3,
           'title': 'Product Title 3',
           'price': 'Starting at $2730',
           'desc': 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
           'uri-stub': '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
           'src': 'img/machine_b.jpg'
       },
       4: {
           id: 4,
           order: 4,
           'title': 'Product Title 4',
           'price': 'Starting at $731',
           'desc': 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
           'uri-stub': '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
           'src': 'img/candy_b.jpg'
       }
   }

   // *************************************************************************

   // get a reference to the modal (pop-up)
   var selectedProduct = document.getElementById('selectedProduct');

   // get a reference to all elements with the class name more (links/buttons)
   var classname = document.getElementsByClassName("more");

   // This function is called when the more info link is clicked
   var myFunction = function(e) {
       // e.target is the <a> and split("-")[1] gets the product number
       var id = e.target.id.split("-")[1];
       // Get a reference to the modal info div in the modal
       var productInfo = document.getElementById('product-info')
           // clear out information from last time
       productInfo.innerHTML = '';
       // Create a <h3> for the title, set the text from the product, add to modal
       var title = document.createElement("h4");
       title.textContent = products[id].title;
       productInfo.appendChild(title);
       // Create a <h4> for the price, set the text from the product, add to modal
       var price = document.createElement("h5");
       price.textContent = products[id].price
       productInfo.appendChild(price);
       // Create a <img> for the image, set src attributes and width add to modal
       var image = document.createElement("IMG");
       image.setAttribute("src", products[id].src);
       image.setAttribute("width", "100%");
       productInfo.appendChild(image);
       // Create a <h4> for the price, set the text from the product, add to modal
       var buyOnline = document.createElement("div");
       buyOnline.innerHTML = 'Buy Online';
       buyOnline.className += " buyIt";
       productInfo.appendChild(buyOnline);
       // Create a <p> for the description, set the text from the product, add to modal
       var desc = document.createElement("p");
       desc.textContent = products[id].desc
       productInfo.appendChild(desc);
       //makes the x appear when function is activated
       document.getElementsByClassName("close")[0].style.visibility = "visible";
       document.getElementById("selectedProduct").style.visibility = "visible";
   };

   // Adds the function above as a click handler for all the more <a>
   for (var i = 0; i < classname.length; i++) {
       classname[i].addEventListener('click', myFunction, false);
   }

   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];
   //Hides the X and the row while no product is selected
   document.getElementsByClassName("close")[0].style.visibility = "hidden";
   document.getElementById("selectedProduct").style.visibility = "hidden";
   // When the user clicks on <span> (x), close the modal/ also reinstate page scroll
   span.onclick = function() {
       selectedProduct.style.display = "none";
   }


   // *************************************************************************



   // Function in order to filter the products by pricing  

   function filterPricing(value) {
       //takes a JSON string (like "[5, 6]" )
       var priceRange = JSON.parse(value);
       //parses the string into an array
       var divs = document.getElementsByClassName("products")[0].children;
       //fetches all children of the div with the "products" class into an array
       for (var i = 0; i < divs.length; i++) {
           //iterates through the array
           var price = parseInt(divs[i].getElementsByClassName("pPrice")[0].outerText
               // gets the <p> element with class "pPrice" and extracts price from string
               .match(/\d+/g)[0]);
           if (price < priceRange[0] || price > priceRange[1]) {
               divs[i].style.display = "none";
           } else {
               divs[i].style.display = "block";
           }
       }
   }

   // *************************************************************************




   //Function creates a popup dialog and displays the state that was Selected

   document.getElementById('my_input').addEventListener('input', function() {
       var options = getOptions(this.list.options);

       if (options.includes(this.value)) {
           alert(this.value);
       }
   });

   function getOptions(HTMLoptions) {
       var options = [];
       for (var i = 0; i < HTMLoptions.length; i++) {
           options.push(HTMLoptions[i].value);
       }
       return options;
   }
