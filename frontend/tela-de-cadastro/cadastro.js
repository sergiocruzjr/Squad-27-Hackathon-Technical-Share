var botaoCadastrar = document.querySelector("#finalizar-cadastro");
botaoCadastrar.addEventListener("click", 
function(event){
    event.preventDefault();
    var form = document.querySelector("#form-cadastro")

    //Extraindo informações do usuario do form
    var usuario = obtemUsuarioCadastrado(form)

    //adicionaUsuarioLista(usuario)
    adicionaUsuarioLista(usuario)
    //cria tr e td do usuario
    var usuarioTr = montaTr(usuario)

    var tabela = document.querySelector("#tabela-usuarios")
    tabela.appendChild(usuarioTr);

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

var listaUsuarios = [];

function adicionaUsuarioLista(usuario){
    listaUsuarios.push(usuario);
    console.log(listaUsuarios);
}

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

    return usuarioTr;
}