import { useEffect } from "react";

export default function EmployedChat(){

    const getTicket = () => {
        console.log("ciao");
    };

    useEffect(() => {
        getTicket();   // viene eseguita al montaggio della pagina
    }, []);  

    

    return (
        <main className="flex h-screen items-center justify-center flex-col">
            <div className="w-full h-full flex flex-col space-y-4 overflow-y-auto p-4 scrollbar-hide">
                <div className="chat chat-start">
                    <div className="chat-bubble bg-indigo-600 max-w-lg text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum unde cum fuga incidunt, illo ipsam nam dolor est expedita.
                    </div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble bg-gray-700 text-white max-w-lg">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum consequuntur doloribus dolor natus, sunt itaque illo nisi voluptatum autem esse iusto culpa laudantium alias aperiam eveniet? Mollitia nam laborum necessitatibus?
                    </div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble bg-indigo-600 max-w-lg text-white">
                        Secondo messaggio.
                    </div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble bg-gray-700 text-white max-w-lg">
                        Risposta.
                    </div>
                </div>

            </div>
            <div className="w-full p-4 border-t border-gray-700 bg-[#161616]">
                <form className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Scrivi un messaggio..."
                        className="w-full flex-grow p-3 rounded-full bg-gray-700 text-white placeholder-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-transparent 
                       transition duration-150 text-sm"
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
            </div>
        </main>
    );
}