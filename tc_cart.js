"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

  Author: Anthony Arias
   Date:   2/17/1
   
   Filename: tc_cart.js
	
*/
//calculating the running total of the cost of the order 
var orderTotal = 0;

//variable that will contain the HTML code for the contents of the shopping cart
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";

//Created a for loop that loops through the entries in the item array
for (var i = 0; i <= 3; i++) {

    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='item' />" + "</td>";

    // displays the description, price, and quantity ordered of the item
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";

    var itemCost = itemPrice[i] * itemQty[i];

    // displays the cost for the item(s) ordered, completing the table row
    cartHTML += "<td>$" + itemCost + "</td></tr>";

    //adds itemCost variable to ordeTotal variable to keep a running total of the total cost of the customer order.
    orderTotal = itemCost + orderTotal;
}
//completes shopping cart table
cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>";

//This takes the id cart from the div element in the index of my code
document.getElementById("cart").innerHTML = cartHTML;