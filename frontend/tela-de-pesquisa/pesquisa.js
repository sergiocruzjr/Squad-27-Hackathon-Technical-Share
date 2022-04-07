
var buscarUsuarios = document.querySelector("#buscar-usuarios")

buscarUsuarios.addEventListener("click", function(){
    console.log(buscarUsuarios);

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "localhost:3333/users")

    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        var usuarios = JSON.parse(resposta);

        usuarios.forEach(function(usuario){
        
        montaTr(usuario)

        })
    })

    xhr.send();
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
