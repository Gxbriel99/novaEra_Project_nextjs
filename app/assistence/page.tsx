'use client'
import "../globals.css";
import { useState, useEffect } from "react";

import { IStatusSection } from "../lib/definition";
import EmailSection from "../ui/assistence/emailSection";
import TicketSection from "../ui/assistence/tickets";
import ButtonSection from "../ui/assistence/buttonSection";


export default function Assistence() {

    const [statusSection, chageStatus] = useState<IStatusSection>({
        buttonSection: true,
        emailSection: false,
        ticketSection: false
    })

    const openButtontSection = ()=>{
        chageStatus(prev => ({
            ...prev,
            emailSection: false,
            buttonSection: true
        }));
    }
    const openEmailSection = ()=>{
        chageStatus(prev => ({
            ...prev,
            buttonSection: false,
            emailSection: true
        }));
    }
    const openTicketSection = ()=>{
        chageStatus(prev => ({
            ...prev,
            buttonSection: false,
            ticketSection: true
        }));
    }

    return (
        <main>
            { statusSection.buttonSection && <ButtonSection openEmail={openEmailSection} openTicket={openTicketSection} />}

            {statusSection.emailSection && <EmailSection openButtons={openButtontSection }/>}

            {statusSection.ticketSection && <TicketSection openButtons={openButtontSection} />}
        </main>
    )
}