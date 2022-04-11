var botaoCadastrar = document.querySelector("#finalizar-cadastro");

var buscarUsuarios = document.querySelector("#button-addon2")

buscarUsuarios.addEventListener("click", function(){
    const urlUsuarios = "";
    fetch(urlUsuarios, {method:"POST", mode:"no-cors", params:usuario})



/*botaoCadastrar.addEventListener("click", 
function(event){
    event.preventDefault();
    var form = document.querySelector("#form-cadastro")

    //Extraindo informações do usuario do form
    var usuario = obtemUsuarioCadastrado(form)

    //cria tr e td do usuario
    var usuarioTr = montaTr(usuario)*/


    form.reset();
})

function obtemUsuarioCadastrado(form){
    
    var usuario = {
        nome: form.nome.value,
        email: form.email.value,
        senha: form.senha.value
    }
    return usuario;
}


/*var enviarUsuarios = document.querySelector("#finalizar-cadastro")

enviarUsuarios.addEventListener("click", function(){
    console.log(enviarUsuarios);

    var xhr = new XMLHttpRequest();

    xhr.open("PUT", "localhost:3333/users")

    /*xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        var usuarios = JSON.parse(resposta);

        usuarios.forEach(function(usuario){
        

        })
    })

    xhr.send();
})*/


function montaTr(usuario) {
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

    usuarioTr.appendChild(nomeTd);
    usuarioTr.appendChild(emailTd);
    usuarioTr.appendChild(senhaTd);

    var tabela = document.querySelector("#tabela-usuarios")
    tabela.appendChild(usuarioTr);

    return usuarioTr;
}