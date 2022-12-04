//buttons to add to `Order`
var beefAddbtn = document.getElementById("beefAdd-1");
var turkeyAddbtn = document.getElementById("turkeyAdd-2");
var veggieAddbtn = document.getElementById("veggieAdd-3");
var friesAddbtn = document.getElementById("friesAdd-4");
var chipsAddbtn = document.getElementById("chipsAdd-5");
var sodaAddbtn = document.getElementById("sodaAdd-6");
var waterAddbtn = document.getElementById("waterAdd-7");
var fruitSaladAddbtn = document.getElementById("fruitSaladAdd-8");
var cookieAddbtn = document.getElementById("cookieAdd-9");

var submitButton = document.getElementById("submit-btn");
var orderObject = {
    total: 14,
    items: {
        'beef': 3,
        "chicken":2,
    }
} 

/*
? What needs to be stored?
> item_id => qty
*/

function finalTotal() {
    let beefTotal = document.querySelector("#t-1").textContent;
    let turkeyTotal = document.querySelector("#t-2").textContent;
    let veggieTotal = document.querySelector("#t-3").textContent;
    let friesTotal = document.querySelector("#t-4").textContent;
    let chipsTotal = document.querySelector("#t-5").textContent;
    let sodaTotal = document.querySelector("#t-6").textContent;
    let waterTotal = document.querySelector("#t-7").textContent;
    let fruitSaladTotal = document.querySelector("#t-8").textContent;
    let cookieTotal = document.querySelector("#t-9").textContent;

    let beefQty = document.querySelector("#a-1").textContent;
    let turkeyQty = document.querySelector("#a-2").textContent;
    let veggieQty = document.querySelector("#a-3").textContent;
    let friesQty = document.querySelector("#a-4").textContent;
    let chipsQty = document.querySelector("#a-5").textContent;
    let sodaQty = document.querySelector("#a-6").textContent;
    let waterQty = document.querySelector("#a-7").textContent;
    let fruitSaladQty = document.querySelector("#a-8").textContent;
    let cookieQty = document.querySelector("#a-9").textContent;

    let quantities = [beefQty, turkeyQty, veggieQty, friesQty, chipsQty, sodaQty, waterQty, fruitSaladQty, cookieQty, ]

    items.forEach(item => {
        console.log('parsing item:', item)
        orderObject.total += item ? parseInt(item.replace('$', '')) : 0
    }) // "$2.00" => "2.00" => 2


    // let finalTotal = beefTotal + turkeyTotal + veggieTotal + friesTotal + chipsTotal + sodaTotal + waterTotal + cookieTotal + fruitSaladTotal;
    let items = [beefTotal , turkeyTotal , veggieTotal , friesTotal , chipsTotal , sodaTotal , waterTotal , cookieTotal , fruitSaladTotal]

    items.forEach(item => {
        console.log('parsing item:', item)
        orderObject.total += item ? parseInt(item.replace('$', '')) : 0
    }) // "$2.00" => "2.00" => 2

    document.querySelector("#finalTotal").textContent =  '$' + total + ".00"; 
}

function beefOrder() {
    // get quantity from dropdown saves to variable quantity   
    let quantity = qty1.value;
 
    console.log(quantity);
  
    let beefTotal = quantity * 6;
    
    document.querySelector("#a-1").textContent = quantity;
    document.querySelector("#t-1").textContent = '$' + beefTotal + ".00";  
    finalTotal()
}

beefAddbtn.addEventListener("click", beefOrder);

function turkeyOrder() {
    // get quantity from dropdown saves to variable quantity   
    let quantity = qty2.value;
 
    console.log(quantity);
  
    let turkeyTotal = quantity * 5;
    
    document.querySelector("#a-2").textContent = quantity;
    document.querySelector("#t-2").textContent = '$' + turkeyTotal + ".00";  
    finalTotal()

}

turkeyAddbtn.addEventListener("click", turkeyOrder);

function veggieOrder() {
    // get quantity from dropdown saves to variable quantity   
    let quantity = qty3.value;
 
    console.log(quantity);
  
    let veggieTotal = quantity * 5;
    
    document.querySelector("#a-3").textContent = quantity;
    document.querySelector("#t-3").textContent = '$' + veggieTotal + ".00";   
    finalTotal()
}

veggieAddbtn.addEventListener("click", veggieOrder);

function friesOrder() {
    // get quantity from dropdown saves to variable quantity   
    let quantity = qty4.value;
 
    console.log(quantity);
  
    let friesTotal = quantity * 2;
    
    document.querySelector("#a-4").textContent = quantity;
    document.querySelector("#t-4").textContent = '$' + friesTotal + ".00";   
    finalTotal()
}

friesAddbtn.addEventListener("click", friesOrder);

function chipsOrder() {
    // get quantity from dropdown saves to variable quantity   
    let quantity = qty5.value;
 
    console.log(quantity);
  
    let chipsTotal = quantity * 1;
    
    document.querySelector("#a-5").textContent = quantity;
    document.querySelector("#t-5").textContent = '$' + chipsTotal+  ".00";    
    finalTotal()
}

chipsAddbtn.addEventListener("click", chipsOrder);

function sodaOrder() { 
    // get quantity from dropdown saves to variable quantity
    let quantity = qty6.value;

    console.log(quantity);

    let sodaTotal = quantity * 2;

    document.querySelector("#a-6").textContent = quantity;
    document.querySelector("#t-6").textContent = '$' + sodaTotal + ".00";  
    finalTotal()
}

sodaAddbtn.addEventListener("click", sodaOrder);

function waterOrder() {
    // get quantity from dropdown saves to variable quantity
    let quantity = qty7.value;

    console.log(quantity);

    let waterTotal = quantity * 1;

    document.querySelector("#a-7").textContent = quantity;
    document.querySelector("#t-7").textContent ='$' +  waterTotal + ".00";  

    finalTotal()
}

waterAddbtn.addEventListener("click", waterOrder);
       
function cookieOrder() {
    // get quantity from dropdown saves to variable quantity
    let quantity = qty9.value;

    console.log(quantity);

    let cookieTotal = quantity * 2;

    document.querySelector("#a-9").textContent = quantity;
    document.querySelector("#t-9").textContent = '$' + cookieTotal + ".00"; 

    finalTotal()
}

cookieAddbtn.addEventListener("click", cookieOrder);

function fruitSaladOrder() {
    // get quantity from dropdown saves to variable quantity
    let quantity = qty8.value;

    console.log(quantity);

    let fruitSaladTotal = quantity * 2;

    document.querySelector("#a-8").textContent = quantity;
    document.querySelector("#t-8").textContent = '$' + fruitSaladTotal + ".00"; 

    finalTotal()
}


fruitSaladAddbtn.addEventListener("click", fruitSaladOrder);

/*
var beefAddbtn = document.getElementById("beefAdd-1");
var turkeyAddbtn = document.getElementById("turkeyAdd-2");
var veggieAddbtn = document.getElementById("veggieAdd-3");
var friesAddbtn = document.getElementById("friesAdd-4");
var chipsAddbtn = document.getElementById("chipsAdd-5");
var sodaAddbtn = document.getElementById("sodaAdd-6");
var waterAddbtn = document.getElementById("waterAdd-7");
var cookieAddbtn = document.getElementById("cookieAdd-9");
var fruitSaladAddbtn = document.getElementById("fruitSaladAdd-8");
*/

submitButton.addEventListener("click", ()=>{
    let beef_amount = document.querySelector("#a-1").textContent
    let beef_total = document.querySelector("#t-1").textContent // '$1.00'
    // let beef_total = parseInt(document.querySelector("#t-1").textContent.replace('.00', '').replace('$',''))


});


// finalTotal();


/*

var qty1El = document.getElementById('qty1');


qty1El.addEventListener("click", showIt)

function showIt() {
    console.log('one');
}
*/