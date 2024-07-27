// // function to greet user
// function greet(name){
//     return "Hello, " + name + " Welcome to Shopazon, please login and add items to your shopping cart"; 
// }
// user = 'Daniel';
// console.log(greet(user));

// //Requesting user to log in
// function addItems(loggedIn){
//     if (loggedIn){
//         console.log("You are logged in, Please add your items to the cart.");
//     }
//     else {
//         console.log("Please login first to add items to your cart.")
//     }
// }
// addItems(true,false)



// //displaying the items in the cart
// function display(cart){
//     for(let i = 0; i < cart.length; i++){
//         console.log("Here are the items in your cart: ");
//         console.log(cart[i]);
//     }
// }
// display (["phone", "tablet", "computer", "bluetooth", "belt", "cap", "phone", "mouse"])



// const cart = { "phone": 2500 };

function cost (cart){

    let total = 0;

    // Convert the cart object into an array
    const cartArray = Object.entries(cart);

    for (let i=0; i<cartArray.length; i++){
        total += cartArray[i][1];
    }
    console.log("The Total price of your cart is: $" + total.toFixed(2));
}

cost ({"phone": 2500})