function login(){
    var user=document.getElementById("username");
    var password=document.getElementById("password");
    if(user.value==="" || password.value===""){
        alert("please fill the required fields");
        console.log("Hello")
    }
    else{
    alert("You have logged in sucessfully");
    alert("welcome "+user.value);
    }
}