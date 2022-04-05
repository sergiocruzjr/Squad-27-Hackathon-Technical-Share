var botaoCadastro = document.querySelector("#finalizar-cadastro");
botaoCadastrar.addEventListeners("click", 
function(event){
    var form = document.querySelector("#form-cadastro")
    var usuario = obtemUsuarioCadastrado(form)
})

function obtemUsuarioCadastrado(form){
    var usuario = {
        nome: form.nome.value,
        email: form.email.value,
        senha: form.senha.value
    }
    return usuario;
}