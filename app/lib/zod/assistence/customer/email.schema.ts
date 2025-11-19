import { z } from "zod";

export const emailSchema = z.object({
    email: z
        .string()
        .min(3, "L'email è troppo corta")
        .email("Inserisci un'email valida")
});
