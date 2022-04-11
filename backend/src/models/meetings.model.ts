//! Importar funções do Firebase para criação de collection de meetings
import { update } from 'firebase/database';
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
    
    let meetingsObject: Object;
    let meetingId: Number;
    
    //? Definindo a ID da collection de reuniões
    await get(child(databaseRef, 'meetings'))
        .then(snapshot => {
            meetingsObject = snapshot.val();
            (meetingsObject !== null) ?
                meetingId = (Object.keys(meetingsObject).length) + 1 :
                meetingId = 1;
        })

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

    //? Na collection 'users' -> UPDATE meetings:  { 0: { meetingId: x, isGuest: true/false } }
}

async function deleteMeeting(meetingId: string){
    //? Usar o método UPDATE para trocar a property 'upcoming' para false
}

//! Exportar as funções
export {
    createNewMeeting,
    deleteMeeting,
}