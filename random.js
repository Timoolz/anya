
//Random generator between 9 and 20 inclusive
function randomBetween9And20() {
    return Math.floor(Math.random() * (20 - 9 + 1)) + 9;
}

// Random generator between 1 and 100 inclusive
// The approach taken here is; Any integer between 9 and 20(inclusive), lets call the number X
// If you either multiply X by any number from 1 and 5  OR divide X by any number from 1 to 9. the resultant value is a random number from 1 to 100 inclusive
function randomBetween1And100() {

    var randomBoolean = Math.random() < 0.5;
    // random number from 9 to 20 inclusive
    var random920 = randomBetween9And20();
    if (randomBoolean) {

        //Divide random value by any number between 1 and 9 (min: 9 / 9 = 1)
        return Math.ceil(random920 / (Math.floor((Math.random() * 9)) + 1));

    } else {

        //Multiply random value by any number between 1 and 5 (max: 20 * 5 = 100)
        return Math.floor(random920 * (Math.floor((Math.random() * 5)) + 1));

    }


}




// Test method
// To test the method; We would runa loop for a configured time (say 5 minutes). In that period we would call the generate random gerator multiple times
// We would then test the values and ensure they do not cross the boundaries (1 - 100);
const start = +new Date;
var complete = true;
while (+new Date < start + 100000) {

    var random100 = randomBetween1And100()

    if ((random100 >= 1 && random100 <= 100)) {
        console.log(random100, "is between 1 and 100")
    } else {
        complete = false;
        console.log("Error ", random100, "is not between between 1 and 100!!!",)
        break;

    }

}

console.log(complete ? "Test completed successfully" : "An error occured, test did not complete successfully")

