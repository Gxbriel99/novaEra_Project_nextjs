import Link from "next/link"

export default function HomeForm() {
    return (
        <form className="h-full w-full md:w-100 flex item-center justify-center flex-col gap-4 absolute z-5 p-1">
            <h1 className="text-black uppercase font-bold text-3xl">Unisciti a noi</h1>
            <input type="text" placeholder="Inserisci l'email" className="bg-black/75 text-white p-2" />
            <input type="password" placeholder="inserisci la password" className="bg-black/75 text-white p-2" />
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