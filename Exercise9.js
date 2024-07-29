function isPrime(num) {
    // Take a number
    if (num) {
        // Check if it's a prime number
        if (num < 2) {
            return false; // Numbers less than 2 are not prime
        } else if (num == 2) {
            return true; // 2 is the only even prime number
        } else if (num % 2 == 0) {
            return false; // Other even numbers are not prime
        } else {
            for (let index = 3; index <= Math.sqrt(num); index += 2) {
                if (num % index == 0) {
                    return false; // Found a divisor, not prime
                }
            }
            return true; // No divisors found, num is prime
        }
    } else {
        return false; // If num is undefined, null, or 0, treat as not prime
    }
}
