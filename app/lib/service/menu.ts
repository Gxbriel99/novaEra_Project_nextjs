import axios from "axios";

export const sendTicket = async (data:any) => {
    try {
        const api:string = "http://91.98.195.174:8000/api/sendRequest"; 
        console.log(data)
        const response = await axios.post(api,data);            // richiesta POST
        return response.data;                             // ritorna i dati
    } catch (error) {
        console.error("Errore GET ticket:", error);
        throw error; // rilancia l'errore per gestirlo nel componente
    }
};
