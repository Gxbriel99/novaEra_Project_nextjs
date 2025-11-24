'use client'

import { ITicket } from "@/app/lib/definition";
import "../../globals.css"; 
import { useRouter } from "next/navigation";

interface ITicketProps {
    openButtonsSection: () => void;
    getCustomerTickets: ITicket[];
    getAssistenceTickets: ITicket[];
}


export default function TicketSection({ openButtonsSection, getCustomerTickets, getAssistenceTickets }: ITicketProps) {

    const router= useRouter()

    const NavigateToTicket = (idTicket: number) => {
        router.push(`/assistence/chat/${idTicket}`);
    };


    return (
        <section className="flex h-screen items-center justify-center flex-col p-3">
            <div className="h-full w-full bg-[#161616] rounded-lg overflow-hidden overflow-y-auto">
                {/* PULSANTE PER TORNARE INDIETRO */}
                <div className="w-full flex justify-start p-2 pb-4">
                    <button
                        className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm font-semibold"
                        onClick={openButtonsSection}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Torna Indietro
                    </button>
                </div>

                {/* MOSTRA CUSTOMER TICKETS */}
                {getCustomerTickets && getCustomerTickets.length > 0 && getCustomerTickets.map((t) => (
                    <div key={t.idTicket} className="w-full p-3 sm:p-4 mb-2 bg-black rounded-lg flex items-center justify-between hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                        onClick={() => NavigateToTicket(t.idTicket)}>
                        <div className="flex flex-col gap-1 pr-4 min-w-0 flex-grow">
                            <div className="flex items-center gap-3 flex-wrap">
                                <p className="text-indigo-400 font-bold text-sm sm:text-base">Ticket #{t.idTicket}</p>
                                <h3 className="text-white font-semibold text-sm sm:text-base truncate max-w-xs">{t.oggetto}</h3>
                            </div>
                            <p className="text-sm text-gray-400 truncate max-w-full">
                                {t.description.length > 100 ? t.description.slice(0, 100) + "..." : t.description}
                            </p>
                        </div>
                    </div>
                ))}

                {/* MOSTRA ASSISTENCE TICKETS */}
                {(!getCustomerTickets || getCustomerTickets.length === 0) && getAssistenceTickets && getAssistenceTickets.length > 0 && getAssistenceTickets.map((t) => (
                    <div key={t.idTicket} className="w-full p-3 sm:p-4 mb-2 bg-black rounded-lg flex items-center justify-between hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                        onClick={() => NavigateToTicket(t.idTicket)}>
                        <div className="flex flex-col gap-1 pr-4 min-w-0 flex-grow">
                            <div className="flex items-center gap-3 flex-wrap">
                                <p className="text-indigo-400 font-bold text-sm sm:text-base">Ticket #{t.idTicket}</p>
                                <h3 className="text-white font-semibold text-sm sm:text-base truncate max-w-xs">{t.oggetto}</h3>
                            </div>
                        </div>
                    </div>
                ))}

                {/* MESSAGGIO SE ENTRAMBI VUOTI */}
                {(!getCustomerTickets || getCustomerTickets.length === 0) && (!getAssistenceTickets || getAssistenceTickets.length === 0) && (
                    <p className="text-gray-400 text-center mt-4">Nessun ticket disponibile</p>
                )}
            </div>
        </section>
    )
}
