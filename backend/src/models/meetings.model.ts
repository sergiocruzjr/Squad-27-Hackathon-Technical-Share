//! Importar funções do Firebase para criação de collection de meetings
import { update, push } from 'firebase/database';
import { database, set, ref, get, child } from './database/firebase-connection';

async function createNewMeeting(userId: string, guestName: string, subject: string, date: Date){
    //? Coletar o id do convidado a partir do nome
    const databaseRef = ref(database);
    let userInformationArray = new Array();
    
    await get(child(databaseRef, 'users'))
        .then(snapshot => {
            //? Coletando o objeto que contém os dados dos usuários
            const userIDsObject = snapshot.val();
            //? Transformando o objeto em array
            const userIDsArray = Object.entries(userIDsObject);
            //? Pegando apenas os dado do usuário chamado
                //* Retorno -> [ guestId, { guestData } ]
            userInformationArray = userIDsArray.find(user => user[1]['name'] === guestName);
        });
    
    console.log(userInformationArray);

    //? Definir a collection 'meetings'
        //* meeting_id -> meetings.length + 1
        //* uid_user   -> string
        //* uid_guest  -> string
        //* subject    -> string
        //* date       -> Date()
        //* upcoming   -> boolean
    
    //? Definindo a ID da reunião
    let meetingId = push(child(ref(database), 'meetings')).key;

    //? Definindo a collection de 'meetings'
    const referencePath = `meetings/${meetingId}`;
    const meetingReference = ref(database, referencePath);
    
    await set(meetingReference, {
        userId,
        guestId: userInformationArray[0],
        subject,
        date,
        upcoming: true,
    });

    //TODO Fazer função local
    //TODO --> updateUserMeeting(userId, meetingId, userType)
    //? Na collection 'users' -> UPDATE meetings:  { 0: { meetingId: x, isGuest: true/false } }
    const referenceUserPath = `users/${userId}/meetings/${meetingId}`;
    const referenceGuestPath = `users/${userInformationArray[0]}/meetings/${meetingId}`;
    const userReference = ref(database, referenceUserPath);
    const guestReference = ref(database, referenceGuestPath);
    
    await update(userReference, {
        type: 'host'
    })
    await update(guestReference, {
        type: 'guest'
    })
}

async function deleteMeeting(meetingId: string){
    //? Usar o método UPDATE para trocar a property 'upcoming' para false
}

//! Exportar as funções
export {
    createNewMeeting,
    deleteMeeting,
}