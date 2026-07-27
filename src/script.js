function checkGender() {
    let gender = prompt("Please enter your gender (Male or Female):");

    if (gender.toLowerCase() === "female") {
        alert("You are a girl! 👧🏽");
    } else if (gender.toLowerCase() === "male") {
        alert("You are a boy! 👦🏽");
    } else {
        alert("Please enter either Male or Female.");
    }
}

checkGender();