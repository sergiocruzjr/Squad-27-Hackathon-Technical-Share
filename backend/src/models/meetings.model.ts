//! Importar funções do Firebase para criação de collection de meetings

async function createNewMeeting(userId: string, guestName: string, subject: string, date: Date){
    //? Coletar o id do convidado a partir do nome
    //? Definir a collection 'meetings'
        //* meeting_id -> meetings.length + 1
        //* uid_user   -> string
        //* uid_guest  -> string
        //* subject    -> string
        //* date       -> Date()
        //* upcoming   -> boolean
    //? Na collection 'users' -> UPDATE meetings_user:  { 0: meeting_id_x, ..., n: meeting_id_n }
    //?                          UPDATE meetings_guest: { 0: meeting_id_x, ..., n: meeting_id_n }
}

async function deleteMeeting(meetingId: string){
    //? Usar o método UPDATE para trocar a property 'upcoming' para false
}

//! Exportar as funções
export {
    createNewMeeting,
    deleteMeeting,
}