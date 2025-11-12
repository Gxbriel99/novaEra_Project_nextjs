'use client'
import Link from "next/link"
import { useState } from "react" //importo hook

export default function HomeForm() {

    //lo definisco nel corpo del component
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // 1. FUNZIONE HANDLER: Gestisce l'aggiornamento dello stato del form
    const readData = (e: React.ChangeEvent<HTMLInputElement>) => {
       
        setFormData(input => ({
            ...input, // Mantiene i campi vecchi (es. se cambi email, tiene la password)
            [e.target.name]: e.target.value, // Aggiorna solo il campo corrente
        }));
        
    };

    return (
        <form className="h-full w-full md:w-100 flex item-center justify-center flex-col gap-4 absolute z-5 p-1">
            <h1 className="text-black uppercase font-bold text-3xl">Unisciti a noi</h1>

            {/* assegno valori e method */}
            <input
                type="email"
                name="email" // ⬅️ **Necessario per la funzione readData**
                value={formData.email}
                onChange={readData} 
                placeholder="Inserisci l'email"
                className="bg-black/75 text-white p-2"
            />

            {/* 3. INPUT PASSWORD: Aggiunto 'name' e readData 'onChange' */}
            <input
                type="password"
                name="password" // ⬅️ **Necessario per la funzione handleChange**
                value={formData.password}
                onChange={readData} 
                placeholder="inserisci la password"
                className="bg-black/75 text-white p-2"
            />

            <button type="button" className="bg-black/75 text-white py-1 hover:bg-indigo-700 transition-all cursor-pointer ">Invia</button>

            <div className=" w-full h-auto text-center flex item-center justify-between flex-col md:flex-row">
                <Link href="#" className="text-black/75 transition-all hover:text-indigo-600">
                    Recupera passwword
                </Link>
                <Link href="#" className="text-black/75 transition-all hover:text-indigo-600">
                    Non ho un account
                </Link>
            </div>
        </form>
    )
}