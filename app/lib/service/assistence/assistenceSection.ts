import axios from "axios";


export const getAssistenceTickets = async ()=>{
   try{
       const api: string = 'http://91.98.195.174:8000/api/allTicketsAssistence'
       const response= await axios.get(api)
       const tickets= response.data
       return tickets
   }catch(error){
    // console.error(error)
    throw error
   }
}