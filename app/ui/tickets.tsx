import { ITicket, TType } from "../lib/definition";

import "../globals.css";

export const ticket: ITicket[] = [
    {
        idTicket: 1001,
        oggetto: "Problema di accesso all'area riservata",
        descrzione: "Non riesco a effettuare il login dopo l'aggiornamento del sito. Ricevo un errore 'Credenziali non valide' anche se sono sicuro che la password sia corretta.",
        allegati: [
            {
                idAttachment: 1,
                idTicket: 1001,
                fileName: "screenshot_errore_login.png",
                path: "/uploads/tickets/1001/screenshot_errore_login.png",
                type: ".png" as TType
            }
        ]
    },
    {
        idTicket: 1002,
        oggetto: "Richiesta di fattura relativa a ordine #45678",
        descrzione: "Ho completato l'ordine #45678 due settimane fa ma non ho ancora ricevuto la fattura elettronica. Potreste inviarmela via email?",
        allegati: [
            {
                idAttachment: 2,
                idTicket: 1002,
                fileName: "conferma_ordine_45678.pdf",
                path: "/uploads/tickets/1002/conferma_ordine_45678.pdf",
                type: ".pdf" as TType
            }
        ]
    },
    {
        idTicket: 1003,
        oggetto: "Domanda su funzionalità prodotto X",
        descrzione: "Il prodotto X (versione 3.1) dovrebbe permettere la sincronizzazione automatica. Non trovo l'opzione nel menu impostazioni. È stata rimossa o devo attivarla altrove?",
        allegati: null 
    },
    {
        idTicket: 1004,
        oggetto: "Domanda su funzionalità prodotto Y",
        descrzione: "Il prodotto Y (versione 3.1) dovrebbe permettere la sincronizzazione automatica. Non trovo l'opzione nel menu impostazioni. È stata rimossa o devo attivarla altrove?",
        allegati: null
    },
    {
        idTicket: 1005,
        oggetto: "Domanda su funzionalità prodotto Z",
        descrzione: "Il prodotto Z (versione 3.1) dovrebbe permettere la sincronizzazione automatica. Non trovo l'opzione nel menu impostazioni. È stata rimossa o devo attivarla altrove?",
        allegati: null
    }
];


export default function Ticket() {
    return (
        <main className="w-full h-full rounded-lg overflow-y-scroll bg-[#161616] p-2 scrollbar-hide">
            {
                ticket && ticket.map((t) => (
                    <div
                        key={t.idTicket}
                        className="w-full p-3 sm:p-4 mb-2 bg-black rounded-lg flex items-center justify-between 
                                   hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                    >

                        <div className="flex flex-col gap-1 pr-4 min-w-0 flex-grow">

                            <div className="flex items-center gap-3 flex-wrap">
                                <p className="text-indigo-400 font-bold text-sm sm:text-base">Ticket #{t.idTicket}</p>
                                <h3 className="text-white font-semibold text-sm sm:text-base truncate max-w-xs">{t.oggetto}</h3>
                            </div>

                            <p className="text-sm text-gray-400 truncate max-w-full">
                                {t.descrzione}
                            </p>

                            {t.allegati && t.allegati.length > 0 && (
                                <span className="text-xs text-green-400 mt-1 block font-medium">
                                    📎 {t.allegati.length} Allegato/i
                                </span>
                            )}
                        </div>

                        <div className="pl-2 flex items-center h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-5 h-5 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>

                    </div>
                ))
            }
        </main>
    )
}