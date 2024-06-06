import { ValidationErrors } from "@/validations/enums";
import { z } from "zod";

export const loginSchemaZod = z.object({
  emailUsuario: z.string({ required_error: ValidationErrors.emptyField })
    .min(3,)
    .max(30),
  passwordUsuario: z.string({ required_error: ValidationErrors.emptyField })
    .regex(new RegExp('.*[A-Z].*'), ValidationErrors.invalidPassword)
    .regex(new RegExp('.*[a-z].*'), ValidationErrors.invalidPassword)
    .regex(new RegExp('.*[0-9].*'), ValidationErrors.invalidPassword)
})

export type ILogin = z.infer<typeof loginSchemaZod>;
