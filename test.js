const fruits = ["apple", "banana", "cherry"];

function fruitGenerator(fruits){
    console.log("Fruits to buy at the grocery store:");
    console.log("===================================");
    
        {fruits ? console.log("Hello") : console.log("There are no fruits... give us some we are hungry")}
    
        for (let i in fruits){
    
        if (i == 0){
            numToBuy = 1 
            console.log("*", fruits[i], ":", numToBuy); 
        } else {
            console.log("*", fruits[i], ":", i); 
        }
        }
    }