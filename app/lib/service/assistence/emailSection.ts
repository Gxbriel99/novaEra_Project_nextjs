import axios from "axios";


export const getUserTickets = async (data: any) => {
    try {
        const api: string = 'http://91.98.195.174:8000/api/allTickets'
        const response = await axios.post(api, data)
        return response
    } catch (error) {
         console.error(error)
        throw error
    }
}