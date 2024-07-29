function calculateDiscount(price, customer) {


    if (customer === "regular") {
        return "You got 10% discount on your purchase " + price * 0.1;
    }
    else if (customer === "member") {
        return "You got 20% discount on your purchase " + price * 0.2;
    }

    else {
        return "Please select your membership";
    }

}