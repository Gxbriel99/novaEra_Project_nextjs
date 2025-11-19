export default function EmialSection({openButtons}:{openButtons:()=>void}){
    return(
        <section className=" flex h-screen items-center justify-center flex-col ">
            <h1 className="uppercase font-bold text-2xl md:text-5xl lg:text-4xl">Area Personale</h1>
            <label className="input validator my-1 overflow-hidden">
                <svg className="h-full opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                </svg>
                <input type="email" placeholder="Inserisci la tua email" required />
                <button className="px-2 py-1 md:text-xl bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-all cursor-pointer flex items-center justify-center ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 md:w-8 md:h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
                    </svg>
                </button>
            </label>
            <div className="validator-hint hidden">Enter valid email address</div>
            <button
                className="my-2 text-gray-300 border-b-2 border-t-2 border-gray-300 py-1 transition-all hover:py-2"
                onClick={openButtons}>Torna indietro
            </button>
        </section>
    )
}