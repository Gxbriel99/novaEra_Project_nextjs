'use client'

import { IChat } from "@/app/lib/definition";
import { GET_CHAT_BY_TICKET } from "@/app/lib/graphql/assistence/chat/chatQuery";
import { useQuery } from "@apollo/client/react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";


export default function EmployedChat() {
    const { idTicket } = useParams();
    const router=useRouter()


    const employedMethod = useForm(); // method per employee

    const { data, loading, error } = useQuery<{ getChat: IChat[] }>(GET_CHAT_BY_TICKET, {
        variables: { assistence_request_id: Number(idTicket) },
        skip: !idTicket,
    });

    const employedChat = data?.getChat ?? [];
    const customerChat = data?.getChat ?? [];

    if (!loading && employedChat.length === 0) {
        console.warn(error)
        return (
            <main className="flex h-screen items-center justify-center flex-col">
                <p className="text-gray-400 text-center text-lg sm:text-xl">
                    404 Chat not found 
                </p>
            </main>

        );
    }

    return (
        <main className="flex h-screen items-center justify-center flex-col">

            {/* PULSANTE TORNA ALLA TICKET SECTION */}
            <div className="w-full flex justify-start p-2 pb-4">
                <button onClick={() => router.back()}
                    className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm font-semibold"
                
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Torna Indietro
                </button>
            </div>

            {loading && (
                <div className="flex justify-center items-center p-4 h-screen">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
                </div>
            )}

            {!loading && (employedChat.length === 0 && customerChat.length===0) && (
                <p className="text-gray-400 text-center text-lg sm:text-xl">
                    Chat not found 404
                </p>
            )}

            {!loading && employedChat.length > 0 && (
                <div className="w-full h-full flex flex-col space-y-4 overflow-y-auto p-4 scrollbar-hide">
                    {employedChat.map((chat: IChat) => (
                        <div key={chat.id}>
                            {/* Messaggio dell'employee */}
                            {chat.message && (
                                <div className="chat chat-start">
                                    <div className="chat-bubble bg-gray-700 max-w-lg text-white">
                                        {chat.message}
                                    </div>
                                </div>
                            )}
                            {/* Risposta dell'utente */}
                            {chat.response && (
                                <div className="chat chat-end">
                                    <div className="chat-bubble bg-indigo-600 text-white max-w-lg">
                                        {chat.response}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
            
            {/* {!loading && customerChat.length > 0 && (
                <div className="w-full h-full flex flex-col space-y-4 overflow-y-auto p-4 scrollbar-hide">
                    {customerChat.map((chat: IChat) => (
                        <div key={chat.id}>
                           
                            {chat.response && (
                                <div className="chat chat-start">
                                    <div className="chat-bubble bg-gray-700 max-w-lg text-white">
                                        {chat.response}
                                    </div>
                                </div>
                            )}
                           
                            {chat.message && (
                                <div className="chat chat-end">
                                    <div className="chat-bubble bg-indigo-600 text-white max-w-lg">
                                        {chat.message}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )} */}

            {/* FORM PER INVIO MESSAGGI */}
            <div className="w-full p-4 border-t border-gray-700 bg-[#161616]">
                <form className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Scrivi un messaggio..."
                        className="w-full flex-grow p-3 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-transparent transition duration-150 text-sm"
                        {...employedMethod.register('message')}
                    />
                    <button
                        type="submit"
                        className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </button>
                </form>
            </div>
        </main>

    );
}
