
const buscarUsuarios = document.querySelector("#button-addon2")
const buscarTodos = document.querySelector("#btncheck1")
const buscarDevs = document.querySelector("#btncheck2")
const buscarUx = document.querySelector("#btncheck3")
const buscarSm = document.querySelector("#btncheck4")

const url=""

/*buscarUsuarios.addEventListener("click", function(){
    const urlUsuarios = "http://localhost:3333/users";
    fetch(urlUsuarios, { 
        method:"GET", 
        mode:"no-cors"
    }) //usar o "params" para trazer as informações do back
    .then(function(resposta){
        resposta.text().then(function(resposta){

            /* 
                userList = [
                    {
                        name: 'foo',
                        profileImage: 'http://imageplaceholder.com',
                        job: 'dev',
                    },
                    {
                        name: 'bar',
                        profileImage: 'http://imageplaceholder.com',
                        job: 'ux designer',
                    }
                ]
            */

            /*const userList = resposta.users; 
            const userListEl = document.querySelector("#user-list"); 

            userList.forEach((user) => {
                const userCardTemplate = mountCard(user);

                /* userCardTemplate
                    <article class="col-sm-6 col-md-4 col-lg-3" >
                        <div class="p-4">
                        <div class="card borda-cor-especial">
                            <img src="${user.profileImage}" class="card-img-top card-posicao-imagem" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${user.name}</h5>
                            <p class="card-text fs-6">${user.job}</p>
                            <a href="#" class="btn botao-cor-especial w-100">Ver perfil</a>
                            </div>
                        </div>
                        </div>
                    </article>
                
                userListEl.append(userCardTemplate);
            });
        })
    })
    //ERRO DE CORS
})*/


/*buscarTodos.addEventListener("click", function getUsers() {
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

buscarUx.addEventListener("click", Cargo getUser() {
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
getUser()*/


const userList = [
             user = {
                name: 'Juliana Almeida',
                profileImage: '../img/Grupo de máscara 7.png',
                job: 'Desenvolvedor',
            },

             userUx = {
                name: 'Pedro Henquique',
                profileImage: '../img/Grupo de máscara -2.png',
                job: 'UX Design',
            },

            userUx = {
                name: 'Carlos Silva',
                profileImage: '../img/Grupo de máscara -4.png',
                job: 'UX designer',
            },


            userSm = {
                name: 'Joana Oliveira',
                profileImage: '../img/Grupo de máscara -6.png',
                job: 'Scrum Master',
            },

            user = {
                name: 'Marcelo Lima',
                profileImage: '../img/Grupo de máscara -1.png',
                job: 'Desenvolvedor',
            },

            user = {
                name: 'Felipe Moura',
                profileImage: '../img/Grupo de máscara -3.png',
                job: 'Desenvolvedor',
            },

            userUx = {
                name: 'Marcos Borges',
                profileImage: '../img/Grupo de máscara -5.png',
                job: 'UX designer'
            },

            user = {
                name: 'Christiana Lima',
                profileImage: '../img/Grupo de máscara -7.png',
                job: 'Desenvolvedor'
            }

]

const userListEl = document.querySelector("#user-list"); 

const mountCard = function(user) {
                const cardTemplate = `
                    <article class="col-sm-6 col-md-4 col-lg-3">
                      <div class="p-4 px-0">
                        <div class="card borda-cor-especial">
                          <img src="${user.profileImage}" class="imagem card-img-top card-posicao-imagem1" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">${user.name}</h5>
                            <p class="card-text">${user.job}</p>
                            <p class="color-p">Disponível para ajudar</p>
                            <a href="../tela-de-agendamento.html" class="btn botao-cor-especial w-100">Ver perfil</a>
                          </div>
                        </div>
                      </div>
                    </article>`;

    return cardTemplate;
}

buscarTodos.addEventListener("click", function(){
    userListEl.innerHTML = ""
    userList.forEach((userList) => {
        const userCardTemplate = mountCard(userList);
        userListEl.innerHTML += userCardTemplate;
    });
});


buscarDevs.addEventListener("click", function(){
    userListEl.innerHTML = ""
    userList.forEach((userList) => {
        if (userList.job === 'Desenvolvedor'){
        const userCardTemplate = mountCard(userList);
        userListEl.innerHTML += userCardTemplate;
        }
    });
});

buscarUx.addEventListener("click", function(){
    userListEl.innerHTML = ""
    userList.forEach((userList) => {
        if (userList.job === 'UX designer'){
        const userCardTemplate = mountCard(userList);
        userListEl.innerHTML += userCardTemplate;
        }
    });
});

buscarSm.addEventListener("click", function(){
    userListEl.innerHTML = ""
    userList.forEach((userList) => {
        if (userList.job === 'Scrum Master'){
        const userCardTemplate = mountCard(userList);
        userListEl.innerHTML += userCardTemplate;
        }
    });
});