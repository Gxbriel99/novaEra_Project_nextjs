'use client'
import "../globals.css";
import { useState } from "react";

import { IStatusSection, ITicket } from "../lib/definition";
import EmailSection from "../ui/assistence/emailSection";
import TicketSection from "../ui/assistence/tickets";
import ButtonSection from "../ui/assistence/buttonSection";
import { getAssistenceTickets } from "../lib/service/assistence/assistenceSection";
import { useQuery } from "@apollo/client/react";
import { GET_TICKETS_LIST } from "../lib/graphql/assistence/assistenceQuery";


export default function Assistence() {

    //Switch Section UI
    const [statusSection, chageStatus] = useState<IStatusSection>({
        buttonSection: true,
        emailSection: false,
        ticketSection: false
    })

    //get userEmail
    const [email, setUserEmail] = useState<string>("");

    //Manage CustomerTickets
    const [customerTicket, setCustomerTickets] = useState<ITicket[]>([])

    //Manage CustomerTickets
    const [assistenceTicket, setAssistenceTickets] = useState<ITicket[]>([])

    


    //--------------Manage UI------------------//
    const openButtontSection = () => {
        setCustomerTickets([]);
        setAssistenceTickets([]);
        chageStatus(prev => ({
            ...prev,
            emailSection: false,
            ticketSection: false,
            buttonSection: true
        }));
    }
    const openEmailSection = () => {
        chageStatus(prev => ({
            ...prev,
            buttonSection: false,
            emailSection: true
        }));
    }
     const openTicketSection = () => {
        chageStatus(prev => ({
            ...prev,
            buttonSection: false,
            emailSection: false,
            ticketSection: true
        }));
    }


    

    //----------QUERY--------//



    return (
        <main>
            {statusSection.buttonSection && <ButtonSection
                openEmailSection={openEmailSection}
                openTicketSection={openTicketSection}
                
            />}

            {statusSection.emailSection && <EmailSection
                openButtonsSection={openButtontSection}
                openTicketSection={openTicketSection}
                setUserEmail={setUserEmail} 
                />}

            {statusSection.ticketSection && <TicketSection 
                openButtonsSection={openButtontSection} 
                
                getCustomerTickets={customerTicket}
                userEmail={email}
                
            />}
        </main>
    )
}