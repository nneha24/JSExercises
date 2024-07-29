function convertTemperature(temp, scale) {
    // check if temperature exsist
    if (temp) {
        // scale== Fahrenheit
        if (scale == "f") {
            return "Temperature in Fahrenheit is: "+(temp * (9 / 5)) + 32;

        } else if (scale == "c") {// scale == celsius
            return "Temperature in Celsius is: "+(temp - 32) * (5 / 9);
        } else {
            return "Enter a Valid Scale";// if not of these
        }
        

        

    }
    else {
        return "Enter a valid temperature";
    }
}