'use client'
import Link from "next/link";
import React, { useRef,useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { IAttachment, IModalForm } from "../lib/definition";
import { zodResolver } from '@hookform/resolvers/zod';
import { modalFormSchema, modalFormType } from "../lib/zod/menu/menuZod";
  
import { error } from "console";
import { watch } from "fs";

const links: { name: string; href: string }[] = [
    { name: "Home", href: "/" },
    {
        name: "Assistence",
        href: "/assistence",
    },
];



export default function Menu() {


    //-------------------MODAL------------------//
    // 1 Dichiaro una variabile che sarà la "mano" per afferrare l'elemento.
    const dialog = useRef<HTMLDialogElement | null>(null);

    // 3 Creo la funzione che aprirà il modal
    const openModal = () => {
        dialog.current?.showModal()
    }

    //---------------FILE--------------------------//

    // 1 inizializzo l'array vuoto
    const [selectedFiles, setSelectedFiles] = useState<IAttachment[]>([]);

    const addFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        // e.preventDefault() è inutile qui

        const fileList = e.target.files;

        if (fileList) { 
            const filesArray = Array.from(fileList);

            // 3. Stampa le informazioni sul file per verificare
            filesArray.forEach(file => {
                console.log("Nome:", file.name, "Dimensione:", file.size,"Tipo:", file.type)
            });
        } else {
            console.warn('Nessun file selezionato');
        }
    }
    //----------------react-hook-form---------------//
    // 1 importo i metodi
    const {
        register, //per registrate i vari inputù
        watch,
        handleSubmit, // verifica la validita del form prima  di proseguire
        formState: { errors } // gestisce gli errori
    } = useForm<modalFormType>({
        resolver: zodResolver(modalFormSchema)
    });

    const values= watch()
    console.log(values)

    // 3 creo la funzione "onSubmit"
    const onSubmit = (data: modalFormType) => {
        console.log(data)
    }



    return (
        <div className="navbar bg-[#161616] shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={1}
                        role="button"
                        className="btn btn-ghost btn-circle"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-white"> {/* Aggiunto text-white per visibilità */}
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 hover:shadow-lg  focus:outline-none  focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-all cursor-pointer"
                    onClick={openModal}>
                    Contatti
                </button>
            </div>

            {/* 2 dicolo alla mano cosa deve prendere */}
            <dialog ref={dialog} className="modal modal-bottom sm:modal-middle backdrop-blur-sm  bg-opacity-60">
                <div
                    className="modal-box bg-[#1b1b1b] text-white p-0 rounded-lg shadow-2xl border border-gray-700 w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">

                    <div className="flex items-center justify-between p-4 border-b border-gray-700">
                        <h3 className="font-bold text-xl md:text-2xl text-white">Ricevi Supporto 🧑‍💻</h3>
                        <form method="dialog">
                            <button
                                className="btn btn-sm btn-circle bg-transparent text-gray-400 hover:text-white hover:bg-gray-700 transition duration-200 border-0 text-lg">✕</button>
                        </form>
                    </div>

                    {/* 2 assegno una funzione all' oneSubmit */}
                    <form className="p-4 sm:p-6 flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label
                                    className="flex items-center gap-3 bg-[#171717] p-3 rounded-lg border border-gray-700 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 transition-all duration-200">
                                    <svg className="h-5 w-5 opacity-70 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                    </svg>
                                    {/* 4 associo per ogni campo il nome col suo valore e lo inserisco nella const register con le condizioni di validazione */}
                                    <input type="text" placeholder="Name" id="name" {...register('name')}
                                        className="flex-grow bg-transparent outline-none placeholder-gray-500 text-white text-sm" />
                                    {/* 5 gestisco i possibili errori */}
                                </label>
                                {errors.name && <p className="text-red-500 text-sm ">{errors.name.message}</p>}

                            </div>

                            <div>
                                <label
                                    className="flex items-center gap-3 bg-[#171717] p-3 rounded-lg border border-gray-700 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 transition-all duration-200">
                                    <svg className="h-5 w-5 opacity-70 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                    </svg>
                                    <input type="text" placeholder="Surname" id="surname" {...register('surname')}
                                        className="flex-grow bg-transparent outline-none placeholder-gray-500 text-white text-sm" />
                                </label>
                                {errors.surname && <p className="text-red-500 text-sm">{errors.surname.message}</p>}
                            </div>

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label
                                    className="flex items-center gap-3 bg-[#171717] p-3 rounded-lg border border-gray-700 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 transition-all duration-200">
                                    <svg className="h-5 w-5 opacity-70 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                    </svg>
                                    <input type="text" placeholder="Object Request" id="object" {...register('object', { required: true })}
                                        className="flex-grow bg-transparent outline-none placeholder-gray-500 text-white text-sm" />
                                </label>
                                {errors.object && <p className="text-red-500 text-sm">{errors.object.message}</p>}
                            </div>

                            <div>
                                <label
                                    className="flex items-center gap-3 bg-[#171717] p-3 rounded-lg border border-gray-700 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 transition-all duration-200">
                                    <svg className="h-5 w-5 opacity-70 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                    </svg>
                                    <input type="email" placeholder="Email" id="email" {...register('email', { required: true })}
                                        className="flex-grow bg-transparent outline-none placeholder-gray-500 text-white text-sm" />
                                </label>
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                            </div>

                        </div>

                        <div>
                            <textarea id="message" {...register('message', { required: true })}
                                className="bg-[#171717] w-full h-32 resize-y p-3 placeholder-gray-500 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:border-indigo-600 transition-all duration-200"
                                placeholder="Descrivi dettagliatamente il tuo problema o la tua richiesta..." ></textarea>
                            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                        </div>

                        <div
                            className="relative flex flex-col items-center justify-center w-full p-6 border-2 border-dashed border-gray-600 rounded-lg text-gray-400 cursor-pointer hover:border-indigo-500 hover:text-indigo-400 transition-all duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-8 h-8 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M12 16.5V9.75m0 0l3.75 3.75M12 9.75L8.25 13.5m-3.75 6.75h14.25a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0018.75 4.5H5.25A2.25 2.25 0 003 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                            <p className="text-center text-sm font-medium">Trascina qui un file o <span
                                className="text-indigo-400 hover:underline">clicca per selezionarlo</span></p>

                            <input type="file" multiple className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" id="attachment" {...register('attachment')} onChange={addFile} />

                        </div>
                           
                        {/* //FILE */}
                        <div className="flex flex-col gap-2 mt-[-10px]">
                            <div
                                className="flex items-center justify-between p-2 bg-gray-800 rounded-lg border border-gray-700">

                                <div className="flex items-center gap-2 overflow-hidden">
                                    <svg className="h-5 w-5 text-indigo-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M18.375 7.5a1.125 1.125 0 011.125 1.125v12.75A1.125 1.125 0 0118.375 22h-12.75A1.125 1.125 0 014.5 20.875v-12.75A1.125 1.125 0 015.625 7.5h12.75zM12 6.75a3 3 0 100-6 3 3 0 000 6z" />
                                    </svg>

                                    <span className="text-white text-sm truncate">nome_file_esempio.jpg</span>
                                    <span className="text-gray-400 text-xs ml-2 flex-shrink-0"> (1.50 MB)</span>
                                </div>

                                <button type="button"
                                    className="text-red-400 hover:text-red-500 transition-colors duration-200 focus:outline-none ml-3 flex-shrink-0">
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 mt-2">

                            <button type="submit"
                                className="w-full sm:w-1/2 px-8 py-2.5 rounded-lg text-white bg-indigo-600 border border-indigo-600 hover:bg-indigo-700 hover:scale-[1.01] transition-all duration-300 font-semibold text-base shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
                                Invia Richiesta 🚀
                            </button>
                            <button type="reset"
                                className="w-full sm:w-1/2 px-8 py-2.5 rounded-lg text-white bg-gray-700 border border-gray-700 hover:bg-gray-800 hover:scale-[1.01] transition-all duration-300 font-semibold text-base shadow-md">
                                Cancella
                            </button>
                        </div>
                    </form>

                </div>
            </dialog>
        </div>

    );
}


