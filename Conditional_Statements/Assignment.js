
 // QUESTION 1 — ACCESS CONTROL


let role = "manager";
let loginTime = 15;  // 3 PM

let access;

if (role === "admin") {
    access = "Access Granted (Admin)";
}
else if (role === "manager" && loginTime >= 9 && loginTime <= 18) {
    access = "Access Granted (Manager within working hours)";
}
else {
    access = "Access Denied";
}

console.log(access);




 // QUESTION 2 — DISCOUNT BASED ON PURCHASE AMOUNT
 

let amount = 7500;
let discount;

if (amount >= 10000) {
    discount = 25;
} 
else if (amount >= 5000) {
    discount = 15;
}
else if (amount >= 2000) {
    discount = 10;
}
else {
    discount = 0;
}

console.log("Discount:", discount + "%");




 // QUESTION 3 — ORDER STATUS MESSAGE (SWITCH)
 

let status = "SHIPPED";
let message;

switch (status) {
    case "PENDING":
        message = "Your order is pending.";
        break;
    case "DISPATCHED":
        message = "Your order has been dispatched.";
        break;
    case "SHIPPED":
        message = "Your order is shipped.";
        break;
    case "DELIVERED":
        message = "Your order has been delivered.";
        break;
    case "CANCELLED":
        message = "Your order was cancelled.";
        break;
    default:
        message = "Invalid order status.";
}

console.log(message);




 // QUESTION 4 — BLOCK USER IF ATTEMPTS > 5 (TERNARY)


let attempts = 6;
let result = attempts > 5 ? "User Blocked" : "Allowed";

console.log(result);




 // QUESTION 5 — PAYMENT VALIDATION (IF / ELSE IF)
 

let paymentMethod = "WALLET";
let amountPay = 500;
let walletBalance = 300;

let paymentResult;

if (paymentMethod === "UPI") {

    if (amountPay >= 1 && amountPay <= 100000) {
        paymentResult = "UPI Payment Successful";
    } 
    
    else {
        paymentResult = "UPI amount must be between ₹1 and ₹1,00,000";
    }
}

else if (paymentMethod === "CARD") {

    if (amountPay >= 100) {
        paymentResult = "Card Payment Successful";
    } 
    
    else {
        paymentResult = "Minimum card payment is ₹100";
    }
}

else if (paymentMethod === "WALLET") {

    if (walletBalance >= amountPay) {
        paymentResult = "Wallet Payment Successful";
    } 
    
    else {
        paymentResult = "Insufficient Wallet Balance";
    }
}

else {
    paymentResult = "Invalid Payment Method";
}

console.log(paymentResult);
