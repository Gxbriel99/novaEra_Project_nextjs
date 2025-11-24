'use client'

import { IChat, IMessage, ITicket } from "@/app/lib/definition";
import { findChat, sendResponse } from "@/app/lib/service/assistence/chat/chat";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function EmployedChat() {

    const { idTicket } = useParams();  //prende il valore dall’URL

    const employedMethod= useForm() //method per employed
    const customerMethod = useForm() //method per customer

    const [employedChat, setEmpoloyedChat] = useState<IChat[]>([])

    useEffect(() => {
        if (!idTicket) return
        const setMessages = async () => {
            const chat = await findChat(Number(idTicket));
            setEmpoloyedChat(chat);
            console.log(chat)
        }

        setMessages()


    }, [idTicket]);

    const sendAssistenceResponse = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!idTicket) return; // controllo sicurezza

        const payload: IMessage = {
            idTicket: Number(idTicket), // conversione in number
            response: employedMethod.getValues('message'),
            attachment: null
        };

        console.log(payload);

        employedMethod.reset();

        await sendResponse(payload);

        const updatedChat = await findChat(Number(idTicket));
        setEmpoloyedChat(updatedChat);
    };



    return (
        <main className="flex h-screen items-center justify-center flex-col">
            <div className="w-full h-full flex flex-col space-y-4 overflow-y-auto p-4 scrollbar-hide">

                {employedChat && employedChat.map((chat) => (
                    <div key={chat.id}>

                        {/* Messaggio dell'employee */}
                        {chat.message && (
                            <div className="chat chat-start">
                                <div className="chat-bubble bg-indigo-600 max-w-lg text-white">
                                    {chat.message}
                                </div>
                            </div>
                        )}

                        {/* Risposta dell'utente */}
                        {chat.response && (
                            <div className="chat chat-end">
                                <div className="chat-bubble bg-gray-700 text-white max-w-lg">
                                    {chat.response}
                                </div>
                            </div>
                        )}

                    </div>
                ))}

            </div>

            <div className="w-full p-4 border-t border-gray-700 bg-[#161616]">
                {employedChat && <form className="flex items-center gap-2" onSubmit={sendAssistenceResponse}>
                    <input
                        id="message"
                        type="text"
                        placeholder="Scrivi un messaggio..."
                        className="w-full flex-grow p-3 rounded-full bg-gray-700 text-white placeholder-gray-400 
                        focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-transparent 
                        transition duration-150 text-sm"
                        {...employedMethod.register('message')}
                    />
                    <button
                        type="submit"
                        className="p-3 rounded-full bg-indigo-600 text-white 
                        hover:bg-indigo-700 transition duration-150 
                        focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </button>
                </form>
                }
            </div>
        </main>
    );

}