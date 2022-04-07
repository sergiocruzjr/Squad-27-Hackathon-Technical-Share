import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { createUser } from './users.model';
const auth = getAuth();

//! Criando um novo usuário no 'auth'
async function createUserAuth(email: string, password: string) : Promise<boolean>{
    let success = false;
    
    await createUserWithEmailAndPassword(auth, email, password)
        .then(
            async (userCredential) => {
                const { user } = userCredential;
                console.log(`email: ${user.email}\nuid: ${user.uid}`);

                const { email, uid } = user; 
                await createUser(email, uid);

                success = true;
            }
        )
        .catch(error => {
            const { code, message } = error;
            console.log(`Houve um erro ${code}:\n${message}`);
        })

        return success;
    //TODO -> enviar para a página de login
}

async function signInUserAuth(email: string, password: string){
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const { user } = userCredential;
            console.log(`${user.email} logou com sucesso`)
        })
        .catch((error) => {
            const { code, message } = error;
            console.log(`Houve um erro ${code}:\n${message}`);
        })
    //TODO -> enviar para o dashboard
}

async function signOutUserAuth(){
    await signOut(auth)
        .then(() => {
            console.log(`O usuário se deslogou com sucesso`);
        })
        .catch((error) => {
            const { code, message } = error;
            console.log(`Houve um erro ${code}:\n${message}`);
        })
    //TODO -> enviar para a página de login
}

export {
    createUserAuth,
    signInUserAuth,
    signOutUserAuth,
}