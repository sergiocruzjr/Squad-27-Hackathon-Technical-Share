import express from 'express';
import { remove, update } from 'firebase/database';
import { database, set, ref, get, child } from './database/firebase-connection';

const app = express();
app.use(express.json());

//TODO: tratamento de erros e exceções
app.post("/teste", async (request, response) => {
    const { name, username } = request.body;

    const referencePath = '/users/'+username+'/';
	const userReference = ref(database, referencePath);

    await update(userReference, {
        name,
        created_at: new Date(),
    });

    return response.status(200).send();
});

app.get("/teste", async (request, response) => {
    let users;

    const referencePath = '/users/';
    const userReference = ref(database, referencePath);
    const snapshot = await get(userReference);

    if (snapshot.exists()) {
        users = snapshot.val();
        console.log(snapshot.val());
        console.log(users);
    } else {
        console.log("No data available");
    }
    
    return response.status(200).json(users);
});

app.put("/users", async (request, response) => {
    const { name, username } = request.body;

    const referencePath = '/users/'+username+'/';
    const userReference = ref(database, referencePath);

    //TODO: como será tratado os dados que não serão alterados
    await set(userReference, {
        name,
        created_at: new Date(),
    });

    return response.status(200).send();
});

app.delete("/users/:username", async (request, response) => {
    const { username } = request.params;
    console.log(username);

    const referencePath = '/users/'+username+'/';
    const userReference = ref(database, referencePath);

    await remove(userReference);

    return response.status(200).send();
});

app.listen(3333, () => console.log("Servidor está rodando..."));