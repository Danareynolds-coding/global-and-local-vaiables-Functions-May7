// lesson14 problem1
// 2 The local var, let and const are undefined when console logged outside of the function
// 3 fix it by removing  second console log that is outside the function 
function calculateTotal(){
    let price=100;
    console.log(price);
}
calculateTotal()
// problem2
function outerFunction(){
    let secret ="Hidden";
    innerFunction()
    function innerFunction() {
        console.log(secret);
    }
}
outerFunction()


// Problem3

function greet(name1, name2){
   console.log("Hello," + name1);
   console.log("Hello," + name2)
}
greet("Bob","Alice")

// problems from teams
// problem 0
function profitPrediction(predictedSales){
     let profitPrediction=predictedSales*.23;
     profitPrediction = Math.round(profitPrediction)
     console.log(profitPrediction + " dollars in predicted profit");
    
}
profitPrediction(2300)//should be $520

// Problem 1
function Acres(squareFeet){
    let Acres=squareFeet/43560;
    Acres=Math.round(Acres)
    console.log(Acres + " acres");
   
}
Acres(300000)//should be 6.89

// problem2 TotalSales

items={
    jeans:20.00,
    shirt: 5.00, 
    socks: 2.00, 
    hat: 8.00, 
    shoes:30.00
}
function totalSales(price, quantity){
    let itemCost = price * quantity;
    console.log(`${itemCost} dollars is cost of items`);
    let tax = itemCost * 0.072;
    console.log(`${tax} dollars in taxes`);
    let totalSales = itemCost + tax;
    console.log(`${totalSales} dollars is the total`);
   }
let price = 20.00; // price of jeans
let quantity = 2;
totalSales(price, quantity);
// problem 3
function distanceTraveled(arg1, arg2, arg3) {
   let totalDistance = 60 * (arg1 + arg2 + arg3);
   
   console.log((arg1)*60 +" miles");
   console.log((arg2)*60 +" miles");
   console.log((arg3)*60 +" miles");
   console.log(`${totalDistance} miles total`);
}
let time = [5, 8, 12];
distanceTraveled.apply(this, time);
// problem4
function tSales(purchaseAmt){
    let stateTax=purchaseAmt *.04;
    let countyTax=purchaseAmt *.02;
    let tax=stateTax +countyTax;
    let tSales=purchaseAmt + tax;
    console.log(`$ ${tSales} dollars in sales`);
    return tSales 
}
tSales(5000.00)
// problem5 MPG

function milesPerGallon(miles, gallons){
milesPerGallon=miles/gallons
milesPerGallon=Math.round(milesPerGallon)
console.log(`${milesPerGallon} miles per gallon`);
}
milesPerGallon(100,5)
// Problem 6 meal tax tip
function mealCost(meal){
    let tax=meal*.07;
    let tip=(tax+ (meal)*.15);
    let mealCost=meal + tax + tip;
    console.log("$" + (meal) + " dollars");
    tax=Math.round(tax);
    console.log("$" + tax + " dollars");
    tip=Math.round(tip);
    console.log("$" + tip + " dollars");
    mealCost=Math.round(mealCost);
    console.log("$" + mealCost + " dollars");
}
mealCost(20.00)

// problem 7 Celcius to fahrenheit
function celciusToFahrenheit(n){
    return celciusToFahrenheit=((n * 9/5)+32);
    console.log(`${n} celcius is ${celciusToFahrenheit} farrenheit.`);
      
}
const n=30;
celciusToFahrenheit(n)


// {notes lesson
// function Local1(){
//     var message="local1's message"
//     console.log(message)
// }
// function local2(){
//     message="local2's message"
//     console.log()
// }
// function outerFunction(){
//     const innerFunction=(p1 =>p1= "I'm scoped to inner function")
//     {
//     let innerVar="Hello";
//     console.log(innerFunction())
//     }
//     innerFunction()
// }
// outerFunction()

