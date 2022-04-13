
var buscarUsuarios = document.querySelector("#button-addon2")

buscarUsuarios.addEventListener("click", function(){
    const urlUsuarios = "http://localhost:3333/users";
    fetch(urlUsuarios, {method:"GET", mode:"no-cors"}) //usar o "params" para trazer as informações do back
    .then(function(resposta){
        resposta.text().then(function(resposta){
            console.log(resposta);
        })
    })
    //ERRO DE CORS
})


/*function montaTr(usuario) {
    var usuarioTr = document.createElement("tr");
    usuarioTr.classList.add("usuario");

    var nomeTd = document.createElement("td");
    nomeTd.textContent = usuario.nome;
    nomeTd.classList.add("info-nome");

    var emailTd = document.createElement("td");
    emailTd.textContent = usuario.email;
    emailTd.classList.add("info-email");
    
    var senhaTd = document.createElement("td");
    senhaTd.textContent = usuario.senha;
    senhaTd.classList.add("info-senha");

    var tabela = document.querySelector("#tabela-usuarios")
    tabela.appendChild(usuarioTr);
}*/