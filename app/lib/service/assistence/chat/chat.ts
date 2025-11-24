import { IMessage } from "@/app/lib/definition";
import axios from "axios";


export const findChat = async (idTicket: number) => {
    try{
        const api = `http://91.98.195.174:8000/api/allChat/${idTicket}`;
        const response = await axios.get(api)
        const chat = response.data
        return chat
    }catch (error) {
        throw error
    }
};


export const sendResponse = async (data:IMessage) => {
    try {
        const api = `http://91.98.195.174:8000/api/sendResponse`;
        const response = await axios.post(api,data)
        const chat = response.data
        return chat
    } catch (error) {
        throw error
    }
};