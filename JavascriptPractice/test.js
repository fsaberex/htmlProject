/*
    MAKING A SHOPPING APPLICATION

    * get the name of a customer
    * see how many flight tickets, hotel nights, and adventures/outings they want to buy
    * 
    * check if there's a discount (the customer should put in a code; if that code fails they don't get the discount)
    * Discount code: when you buy three items, you get 50% off (of those three items)
    * Apply a tax and show us the total and subtotal
    * 
    * use conditionals, confirm/prompt/alert, arethmetic, and assign your variables
    * 
    
*/


const customerName = prompt("Please enter your name.");
const tickets = prompt("Please enter how many flight tickets you would like to buy.");
const hotelNights = prompt("Please enter how many nights you would like to stay.");
const outings = prompt("Please enter how many outings you will be taking.")
const discountCode = prompt("Do you have a discount code?");

confirm("Your name is " + customerName + ".\nYou wish to purchase " + tickets + " Tickets.\nYou wish to stay " + hotelNights + " nights.\nYou are going on " + outings + " outings.\nThe discount code provided is: " + discountCode + "\nIs this information correct?");

const ticketPrice = 150;
const hotelNightPrice = 275;
const outingsPrice = 143.67;
const tax = 0.06;


if(discountCode === "code50"){

    alert("Congratulations! You qualify for 50% off every 3 items you purchase!");

    let ticketsDiscounted = (tickets - (tickets % 3)) * (ticketPrice * .5);
    let leftoverTickets = tickets % 3;

    let nightsDiscounted = (hotelNights - (hotelNights % 3))*(hotelNightPrice*.5);
    let leftoverNights = hotelNights % 3;

    let outingsDiscounted = (outings - (outings % 3)) * (outingsPrice * .5);
    let leftoverOutings = outings % 3;

    let discountedItems = ticketsDiscounted + nightsDiscounted + outingsDiscounted;
    let leftoverItems = leftoverTickets + leftoverNights + leftoverOutings;
    
    if((leftoverItems % 3) >= 1){
        if(leftoverOutings === 2){
            let leftoverOutingsDiscount = (leftoverOutings * outingsPrice) * .5;
            if(leftoverTickets >= 1){
                let leftoverTicketsDiscount = (ticketPrice * .5);
                let leftoverDiscount = leftoverOutingsDiscount + leftoverTicketsDiscount;
                let totalDiscount = discountedItems + leftoverDiscount;
                let totalPrice = totalDiscount + ((leftoverTickets - 1) * ticketPrice) + (leftoverOutings * outingsPrice);
                let totalTax = totalPrice + (totalPrice * tax);

                alert("Your total price is: $" + totalTax);
            }

            else{

            }
        }

        if(leftoverTickets === 2 && leftoverOutings < 1){

        }

        if(leftoverNights === 2 && (leftoverOutings < 1 || leftoverTickets < 1)){

        }
    }

    else{
        let leftoverTotal = ((leftoverTickets * ticketPrice) + (leftoverNights * hotelNightPrice)  + (leftoverOutings * outingsPrice)) * .5;

        let totalPrice = (leftoverTotal + discountedItems); 
        let totalTax = totalPrice + (totalPrice * tax);

        alert("Your total price is: $" + totalTax);
    }

}

else{
    let totalPrice = ((tickets * ticketPrice) + (hotelNights * hotelNightPrice) + (outings * outingsPrice));
    let totalTax = totalPrice + (totalPrice * tax);

    alert("Your total price is: $" + totalTax);
}

