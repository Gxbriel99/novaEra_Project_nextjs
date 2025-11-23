import { z } from 'zod';

// Definizione del tipo TType 
const TTypeSchema = z.union([
    z.literal('.pdf'),
    z.literal('.jpg'),
    z.literal('.jpeg'),
    z.literal('.png')
]);

//Definizione regole dati anagrafici
const nameRegex = /^[a-zA-Z\u00C0-\u017F\s'-]+$/;

// Schema IModalForm
export const modalFormSchema = z.object({
    name: z.string().min(3, { message: 'Il nome è troppo corto.' })
    .regex(nameRegex, { message: 'Il nome non deve contenere numeri o caratteri speciali.' }),

    surname: z.string().min(3, { message: 'Il cognome è troppo corto.' })
        .regex(nameRegex, { message: 'Il cognome non deve contenere numeri o caratteri speciali.' }),

    object: z.string().min(1, { message: "L'oggetto è obbligatorio." }),

    email: z.string()
        .nonempty("Il campo email non può essere vuoto")
        .min(3, { message: "L'email è obbligatoria." })
        .email({ message: "Formato email non valido." }),

    description: z.string().min(1, { message: 'Il messaggio è obbligatorio.' }),

    attachment: z.any()
        .optional()
        .nullable()
        .refine(val => {
            // Se non ci sono file, è valido (nullable/optional)
            if (!val) return true;
            // Se c'è un valore, deve essere un'istanza di FileList
            if (val instanceof FileList) return true;

            // Questo è il caso in cui il campo è presente, ma non è una FileList (errore)
            return false;
        }, { message: 'Formato allegati non valido.' }),

});


export type modalFormType = z.infer<typeof modalFormSchema>;