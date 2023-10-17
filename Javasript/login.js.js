function Login(event) {
    event.preventDefault();

    const userEmail = document.getElementById("email").value;
    const userPassword = document.getElementById("password").value;
 
    if (userEmail && userPassword) {
        const userData = { email: userEmail, password: userPassword };
        localStorage.setItem("UserCreds", JSON.stringify(userData))
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        return alert("Data added successfully.")
    } else {
        return alert("All fields are mandatory.")
    }
}