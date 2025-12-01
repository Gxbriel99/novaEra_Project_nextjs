'use client'

import { useGetChatQuery, useSendAssistenceResponseMutation, useSendCustomerResponseMutation } from "@/app/lib/codeGenType/graphql";
import { IMessage } from "@/app/lib/definition";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

export default function EmployedChat() {
    const { idTicket } = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const mode = searchParams.get("mode"); // "assistence" oppure null

    const employedMethod = useForm();
    const customerMethod = useForm();

    const { data, loading, refetch } = useGetChatQuery({
        variables: { assistence_request_id: Number(idTicket) },
        skip: !idTicket,
    });

    
    const employedChat = data?.getChat ?? [];
    const customerChat = data?.getChat ?? [];


    const [sendAssistenceResponse ] = useSendAssistenceResponseMutation();
    const [sendCustomerResponse ] = useSendCustomerResponseMutation();

    const onEmployedSubmit = async (data:any) => {
        const botCheckElement = document.querySelector<HTMLInputElement>('.botCheck');

        if (botCheckElement?.value) {
            console.warn('Bot intercettato');
            return;
        }

        const payload = {
            assistence_request_id: Number(idTicket), 
            response: data.message,
            attachments: data.attachments
        };
        
        const result = await sendAssistenceResponse({
            variables: { payload: payload }
        });
        if (result.data?.sendResponse?.success) return refetch();
        else return console.warn('Errore nell\'invio della risposta di assistenza');
        
    };

    const onCustomerSubmit = async (data:any) => {
        const botCheckElement = document.querySelector<HTMLInputElement>('.botCheck');

        if (botCheckElement?.value) {
            console.warn('Bot intercettato');
            return;
        }

        const payload = {
            assistence_request_id: Number(idTicket), 
            message: data.message,
            attachments: data.attachments
        };

        const result = await sendCustomerResponse({
            variables: { payload: payload }
        });

        if (result.data?.sendMessage?.success) return refetch();
        else return console.warn('Errore nell\'invio della risposta di customer');

        console.log('customer')

        
    };


    return (
        <main className="flex h-screen items-center justify-center flex-col">

            {/* Torna indietro con freccia */}
            <div className="w-full flex justify-start p-2 pb-4">
                <button
                    onClick={() => router.back()}
                    className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm font-semibold"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12l7.5-7.5M3 12h18" />
                    </svg>
                    Torna Indietro
                </button>
            </div>

            {loading && <p>Loading...</p>}

            {!loading && (
                <>
                    {/* Assistenza */}
                    {mode === "assistence" && employedChat.length > 0 && (
                        <div className="w-full h-full flex flex-col space-y-4 overflow-y-auto p-4 scrollbar-hide">
                            {employedChat.map(chat => (
                                <div key={chat.id}>
                                    {chat.message && (
                                        <div className="chat chat-start">
                                            <div className="chat-bubble bg-gray-700 max-w-lg text-white">
                                                {chat.message}
                                            </div>
                                        </div>
                                    )}
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

                    {/* Customer */}
                    {!mode && customerChat.length > 0 && (
                        <div className="w-full h-full flex flex-col space-y-4 overflow-y-auto p-4 scrollbar-hide">
                            {customerChat.map(chat => (
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
                    )}

                    {/* Messaggi non trovati */}
                    {((mode === "assistence" && employedChat.length === 0) || (!mode && customerChat.length === 0)) && (
                        <p className="text-gray-400 text-center text-lg sm:text-xl">
                            404 Chat not found
                        </p>
                    )}
                </>
            )}


            {/* Form per invio messaggi */}
            <div className="w-full p-4 border-t border-gray-700 bg-[#161616]">

                {mode === "assistence" ? (
                    // ===== FORM EMPLOYED =====
                    <form
                        className="flex items-center gap-2 relative"
                        onSubmit={employedMethod.handleSubmit(onEmployedSubmit)}
                    >

                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Scrivi come employed..."
                                className="w-full flex-grow p-3 pr-10 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-transparent transition duration-150 text-sm"
                                {...employedMethod.register('message')}
                            />

                            <label htmlFor="fileUploadEmployed"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 cursor-pointer text-xl hover:text-white duration-150">
                                +
                            </label>

                            <input id="fileUploadEmployed" type="file" className="hidden" multiple {...employedMethod.register('attachments')} />
                            <input type="text" className="hidden botCheck" />
                        </div>

                        <button type="submit"
                            className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-900">
                            Invia
                        </button>
                    </form>
                ) : (
                    // ===== FORM CUSTOMER =====
                    <form
                        className="flex items-center gap-2 relative"
                            onSubmit={customerMethod.handleSubmit(onCustomerSubmit)}
                    >

                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Scrivi come customer..."
                                className="w-full flex-grow p-3 pr-10 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-transparent transition duration-150 text-sm"
                                {...customerMethod.register('message')}
                            />

                            <label htmlFor="fileUploadCustomer"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 cursor-pointer text-xl hover:text-white duration-150">
                                +
                            </label>

                            <input id="fileUploadCustomer" type="file" className="hidden" multiple {...customerMethod.register('attachments')} />
                            <input type="text" className="hidden botCheck" />
                        </div>

                        <button type="submit"
                            className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-900">
                            Invia
                        </button>
                    </form>
                )}
            </div>
        </main>
    );
}
