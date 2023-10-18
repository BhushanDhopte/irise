function Register(event){
    event.preventDefault();

    var name=document.getElementById("name").value;
    var mobile=document.getElementById("mobile").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    var userData = {username:name,userNumber:mobile,userEmail:email,userPassword:password};
    console.log(userData,"-userdata")

    localStorage.setItem("user",JSON.stringify(userData));

    document.getElementById("name").value='';
    document.getElementById("mobile").value='';
    document.getElementById("email").value='';
    document.getElementById("password").value='';

    alert("Registration Successfull")

    const A= JSON.parse(localStorage.getItem("user"))


}