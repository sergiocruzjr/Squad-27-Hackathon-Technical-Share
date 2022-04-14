
const buscarUsuarios = document.querySelector("#button-addon2")
const buscarTodos = document.querySelector("#btncheck1")
const buscarDevs = document.querySelector("#btncheck2")
const buscarUx = document.querySelector("#btncheck3")
const buscarScrum = document.querySelector("#btncheck4")

const url=""



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


buscarTodos.addEventListener("click", function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
})

buscarDevs.addEventListener("click", function getUser(id) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCargo.textContent = data.cargo
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
})

/*buscarUx.addEventListener("click", Cargo getUser() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCargo.textContent = data.cargo
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
})

buscarScrum.addEventListener("click", Cargo getUser() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCargo.textContent = data.cargo
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
})



getUsers()
getUser()


function montaArticle(usuario) {
    var usuarioArticle = document.createElement("article");
    usuarioArticle.classList.add("usuario");

    var div = document.createElement("div");
    div.classList.add("card-body");

        var div2 = document.createElement("div");
        div2.classList.add("card-body");

            var img = document.createElement("img");
            img.textContent = usuario.img;
            img.classList.add("imagem");

            var div3 = document.createElement("div");
            div3.classList.add("card-body");

                var nomeH5 = document.createElement("h5");
                nomeH5.textContent = usuario.name;
                nomeH5.classList.add("card-title");

                var cargoP = document.createElement("p");
                cargoP.textContent = usuario.cargo;
                cargoP.classList.add("card-text");

   
    var tabela = document.querySelector("#tabela-usuarios")
    tabela.appendChild(usuarioTr);
}*/