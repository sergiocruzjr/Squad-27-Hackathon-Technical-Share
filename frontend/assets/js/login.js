const authenticate = async () => {
    // const data = { 
    //     email: document.getElementById("email").value,
    //     password: document.getElementById("password").value
    // };

    const data = { 
        email: 'fulanodasilva@email.com',
        password: 'senha123'
    };

    await axios.put('http://localhost:3333/auth/login', data)
    .then((response) => response.data)
    //Then with the data from the response in JSOrN...
    .then((data) => {
        console.log(data.data.uid);
        if(data.data.uid) {
            location.href = 'http://localhost:5500/frontend/home.html';
        }
    })
    //Then with the error genereted...
    .catch((error) => {
        console.error('Error:', error);
    });
}

const inputEmail = document.getElementById('email')
const inputPassword = document.getElementById('password')
const button = document.getElementById('btn-login')


const validation = () => {
  if (inputPassword.value === 'senha123') {
    button.disabled = false
  } else {
    button.disabled = true
  }
}
inputPassword.addEventListener('input', validation)