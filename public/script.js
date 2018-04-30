var ShoppingCart = function () {

   // an array with all of our cart items
   var cartData = {
      cart: [],
   }
   var total = 0;
   

   var updateCart = function () {
      $(".cart-list").empty();

      var source = $('#cart-item-template').html();
      var template = Handlebars.compile(source);
      var newHTML = template(cartData);
      $('.cart-list').append(newHTML);

      $(".total").empty();

      var source = $('#cart-item-template').html();
      var template = Handlebars.compile(source);
      var newHTML = template(cartData);
      $('.cart-list').append(newHTML);
   }


   var addItem = function (itemName, itemPrice) {
      var item = {
         name: itemName,
         price: itemPrice
      }
      cartData.cart.push(item);
   }
   
   var calculateTotal = function() {
      total = 0;
      var cartArr = cartData.cart;
      for (let index = 0; index < cartArr.length; index++) {
         total += cartArr[index].price;
      }
   }

   var clearCart = function () {
      cartData.cart = [];
      updateCart();
   }

   return {
      updateCart: updateCart,
      addItem: addItem,
      calculateTotal: calculateTotal,
      clearCart: clearCart
   }
};

var app = ShoppingCart();

// update the cart as soon as the page loads!
app.updateCart();


//--------EVENTS---------

$('.view-cart').on('click', function () {
   $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
   var $itemName = $(this).closest('.item').data().name;
   var $itemPrice = $(this).closest('.item').data().price;

   app.addItem($itemName, $itemPrice);
   app.calculateTotal();
   app.updateCart();
});

$('.clear-cart').on('click', function () {
   app.clearCart();
});