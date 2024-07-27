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

// function cost (cart){

//     let total = 0;

//     // Convert the cart object into an array
//     const cartArray = Object.entries(cart);

//     for (let i=0; i<cartArray.length; i++){
//         total += cartArray[i][1];
//     }
//     console.log("The Total price of your cart is: $" + total.toFixed(2));
// }

// cost ({"phone": 2500})

function totalMoney(amount, deposit){
    
    if (deposit> 0){
        amount += deposit;
        console.log(`You deposited $${deposit}.`);
        console.log(`You now have $${amount}`);
    return amount;
    }
}
totalMoney(1098787893, 198723429374657236478);


function withdraw(amount, withdraw){

    if (withdraw<=amount){
        amount -= withdraw;
        console.log(`You withdrew $${withdraw}.`);
        console.log(`You now have $${amount}`);
    return amount;
    } else {
        console.log("Insufficient Funds")
    }
}
withdraw(1098787893, 198723429374657236478);


function currentBalance(account){
    account=account;
    console.log(`Your current balance is $${account}`)
    return account
}

currentBalance(9876545678987654)