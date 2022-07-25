function hello(){
    alert("Olá mundo")
}

let nome = document.getElementById("nome")
let email = document.getElementById("email")
let assunto = document.getElementById("assunto")

function enviar(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("Todos os campos devem ser preenchidos")
    }else{
        alert("Seu feedback foi enviado com sucesso!")
    }
}