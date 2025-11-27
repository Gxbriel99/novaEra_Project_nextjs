import { ITicket } from "@/app/lib/definition";

interface ButtonSectionProps {
    openEmailSection: () => void;
    openTicketSection: () => void;
    
}

export default function ButtonSection({ openTicketSection, openEmailSection }: ButtonSectionProps) {


    return (
        <section className=" flex h-screen items-center justify-center flex-col ">
            <h1 className="uppercase font-bold text-2xl md:text-5xl lg:text-4xl">Assistence service</h1>
            <div className=" w-full lg:w-fit h-auto flex item-center justify-around">
                <button className="m-2 px-8 py-2 md:px-20 md:py-4 md:text-3xl lg:text-2xl lg:px-15 lg:py-2 bg-gray-600 text-white font-semibold rounded-md shadow-md hover:bg-gray-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition-all cursor-pointer"
                    onClick={openEmailSection}>Customer</button>
                <button className="m-2 px-8 py-2 md:px-20 md:py-4 md:text-3xl lg:text-2xl lg:px-15 lg:py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-all cursor-pointer"
                    onClick={() => {
                        openTicketSection();      
                    }}

                    
                    >Assistence</button>
            </div>
        </section>
    )
}