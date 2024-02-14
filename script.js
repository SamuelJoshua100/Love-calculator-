function love() {

    var firstName = document.getElementById("name1").value;

    var secondName = document.getElementById("name2").value;

    if (firstName.length <= 2) {
        alert("Enter at least 3 characters");
    }
    if (secondName.length <= 2) {
        alert("Enter at least 3 characters");
    }
    else {
        var random = Math.floor(Math.random() * 100) + 1;
        document.getElementById("output").innerHTML = "The lovescore for " + firstName + " and " +
            secondName + " is " + random + "%";
    }
    if (random <= 10 || random <= 40) {
        document.querySelector(".statement").innerHTML = "You both are in a forced relationship. Breakup now";
    }
    else if (random <= 41 || random <= 60) {
        document.querySelector(".statement").innerHTML = "Please choose someone better";
    }
    else if (random <= 61 || random <= 84) {
        document.querySelector(".statement").innerHTML = "Good enough but don't settle for the less";
    }
    else if (random <= 85 || random <= 100) {
        document.querySelector(".statement").innerHTML = "Congratulations, Good choice";
    }
}
