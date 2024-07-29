function checkCharacter(char) {

    if (char) {
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            return "You have entered Vowel " + char;

        } else {
            return "You have entered Consonant " + char;
        }
    }
}

//check if it reads any character
// check vowel ==(a, e, i, o, u)
//if not declare it Consonant