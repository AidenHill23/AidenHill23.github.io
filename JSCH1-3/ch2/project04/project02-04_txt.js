/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: 
      Date:   

      Filename: project02-04.js
 */
 




// Function to display a numeric value as a text string in the format $##.## 
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }


 calcTotal();
 document.getElementById("chicken").onchange = calcTotal;
 document.getElementById("halibut").onchange = calcTotal;
 document.getElementById("burger").onchange = calcTotal;
 document.getElementById("salmon").onchange = calcTotal;
 document.getElementById("salad").onchange = calcTotal;



 function calcTotal(){
   let cost = 0;
   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;

   cost += buyChicken ? CHICKEN_PRICE : 0;
   cost += buyHalibut ? HALIBUT_PRICE : 0;
   cost += buyBurger ? BURGER_PRICE : 0;
   cost += buySalmon ? SALMON_PRICE : 0;
   cost += buySalad ? SALAD_PRICE : 0;

   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
   let tax = cost*SALES_TAX;
   document.getElementById("foodTax").innerHTML = formatCurrency(tax);
   let totalCost = cost + tax;
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);

 }
