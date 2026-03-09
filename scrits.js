function login(){

let user = document.getElementById("user").value
let pass = document.getElementById("password").value

if(
(user === "caixa" && pass === "123") ||
(user === "user3" && pass === "123") ||
(user === "admin" && pass === "123")
){

sessionStorage.setItem("logado","true")

window.location.href = "caixa.html"

}else{

alert("Usuário ou senha inválidos")

}

}

function enterLogin(event){

if(event.key === "Enter"){
login()
}

}