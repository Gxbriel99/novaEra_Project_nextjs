'use client'

import { ITicket } from "@/app/lib/definition";
import "../../globals.css";
import { useRouter } from "next/navigation";
import { useGetTicketsListQuery, useGetUserTicketsQuery } from "@/app/lib/codeGenType/graphql";

interface ITicketProps {
    openButtonsSection: () => void;
    getCustomerTickets: ITicket[];
    userEmail: string

}


export default function TicketSection({ openButtonsSection, getCustomerTickets, userEmail }: ITicketProps) {


    //-----------------------------------------
    //PARAMS
    //-----------------------------------------
    const router = useRouter()

    const NavigateAssistenceToTicket = (id: string) => {
        router.push(`/assistence/chat/${id}?mode=assistence`);
    };
    const NavigateCustomerToTicket = (id: string) => {
        router.push(`/assistence/chat/${id}`);
    };

    //-----------------------------------------
    //QUERY
    //-----------------------------------------

    const { data: allTicketsData } = useGetTicketsListQuery({
        skip: !!userEmail,
    });

    console.log(allTicketsData?.ticketsList)
    const allTickets: ITicket[] = allTicketsData?.ticketsList ?? [];

    const { data: userTicketsData } = useGetUserTicketsQuery({
        skip: !userEmail,
        variables: { email: userEmail },
    });

    const userTickets: ITicket[] = userTicketsData?.userTicketsList ?? [];




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

                {/* BLOCCO: ALL TICKETS */}
                {allTickets.length > 0 && (
                    <div>
                        {allTickets.map((t) => (
                            <div
                                key={t.id}
                                className="w-full p-3 sm:p-4 mb-2 bg-black rounded-lg flex items-center justify-between hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                                onClick={() => NavigateAssistenceToTicket(t.id)}

                            >
                                <div className="flex flex-col gap-1 pr-4 min-w-0 flex-grow">
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <p className="text-indigo-400 font-bold text-sm sm:text-base">Ticket #{t.id}</p>
                                        <h3 className="text-white font-semibold text-sm sm:text-base truncate max-w-xs">{t.object}</h3>
                                    </div>
                                    <p className="text-sm text-gray-400 truncate max-w-full">
                                        {t.description.length > 100 ? t.description.slice(0, 100) + "..." : t.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* BLOCCO: CUSTOMER TICKETS */}
                {userTickets.length > 0 && (
                    <div>
                        {userTickets.map((t) => (
                            <div
                                key={t.id}
                                className="w-full p-3 sm:p-4 mb-2 bg-black rounded-lg flex items-center justify-between hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                                onClick={() => NavigateCustomerToTicket(t.id)}
                            >
                                <div className="flex flex-col gap-1 pr-4 min-w-0 flex-grow">
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <p className="text-indigo-400 font-bold text-sm sm:text-base">Ticket #{t.id}</p>
                                        <h3 className="text-white font-semibold text-sm sm:text-base truncate max-w-xs">{t.object}</h3>
                                    </div>
                                    <p className="text-sm text-gray-400 truncate max-w-full">
                                        {t.description.length > 100 ? t.description.slice(0, 100) + "..." : t.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* MESSAGGIO SE ENTRAMBI VUOTI */}
                {allTickets.length === 0 && userTickets.length === 0 && (
                    <p className="text-gray-400 text-center mt-4">Nessun ticket disponibile</p>
                )}

            </div>
        </section>
    );


}
