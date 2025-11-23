import { z } from "zod";

export const emailSchema = z.object({
    email: z
        .string()
        .nonempty("Il campo email non può essere vuoto") 
        .min(3, "L'email è troppo corta")
        .email("Inserisci un'email valida")
});
