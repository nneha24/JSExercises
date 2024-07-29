
function checkage(age) {
    if (parseInt(age) && age < 110) {
        if (age >= 65) {
            return "Your are senior citizen";
        }
        else if (age >= 20) {
            return "Your are an Adult";
        }
    
        else if (age >= 13) {
            return "Your are Teenager";
        }
    
        else {
            return "Your are child";
        }
    }
    else {
        return "Not valid ";
    }
    
}

