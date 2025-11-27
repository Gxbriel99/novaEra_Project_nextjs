import { ITicket } from "@/app/lib/definition";
import { getUserTickets } from "@/app/lib/service/assistence/emailSection";
import { emailSchema } from "@/app/lib/zod/assistence/customer/email.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface ButtonSectionProps {
    openButtonsSection: () => void;
    openTicketSection: () => void;
    setUserEmail: (email: string) => void;
}

export default function EmailSection({ openTicketSection, openButtonsSection, setUserEmail }: ButtonSectionProps) {

    const formMethod = useForm({
        resolver: zodResolver(emailSchema)
    });

    const onSubmit = async (data: any) => {

        const checkBotValue = (document.getElementById('checkBot') as HTMLInputElement)?.value;

        if (checkBotValue && checkBotValue.trim() !== "") {
            console.warn("Bot rilevato! Form non inviato.");
            return;
        }
        
        setUserEmail(data.email)

        openTicketSection()

        return
        
    };

    useEffect(() => {
        if (formMethod.formState.isSubmitSuccessful) {
            formMethod.reset();
        }
    }, [formMethod.formState.isSubmitSuccessful])


    return (
        <section className="flex h-screen items-center justify-center flex-col">
            <h1 className="uppercase font-bold text-2xl md:text-5xl lg:text-4xl">
                Area Personale
            </h1>

            <form noValidate
                className="w-full max-w-sm flex item-center justify-center flex-col"
                onSubmit={formMethod.handleSubmit(onSubmit)}
            >
                <label className="input validator my-1 overflow-hidden w-full">
                    <svg
                        className="h-full opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
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

                    <input
                        type="email"
                        placeholder="Inserisci la tua email"
                        {...formMethod.register("email")}
                        required
                    />

                    <input type="text" id="checkBot" className="hidden" />

                    <button
                        type="submit"
                        className="px-2 py-1 md:text-xl bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-all cursor-pointer flex items-center justify-center"
                    >
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
                {formMethod.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1 text-center">
                        {formMethod.formState.errors.email.message}
                    </p>
                )}

            </form>

            <button
                className="my-2 text-gray-300 border-b-2 border-t-2 border-gray-300 py-1 transition-all hover:py-2"
                onClick={openButtonsSection}
            >
                Torna indietro
            </button>
        </section>
    );
}
