function LeapYear(year){
    let lasttwodigit = year % 100;
    
    if( lasttwodigit % 4 == 0){
        return "True";

    }
    else{
        return "False";
    }
}