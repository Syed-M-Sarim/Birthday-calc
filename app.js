function calculateAge() {
    var birthDate = new Date(document.getElementById("birthDate").value);
    var now = new Date();

    var age = now.getFullYear() - birthDate.getFullYear();

    // Check if the birthday hasn't occurred yet this year
    if (now.getMonth() < birthDate.getMonth() || 
        (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById("result").innerHTML = "Your age is: " + age;
}
