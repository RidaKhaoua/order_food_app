import { z } from "zod";

const singUpShema = z.object({
  username: z.string().min(1, {message: "You should enter userName."}),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 charachters" })
    .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
      message: "Password should contain at least 1 special character",
    }),
  confirmPassword: z
    .string()
    .min(1, { message: "ConfirmPassword is required" }),
}).refine((input) => input.password === input.confirmPassword, {
    message: "Password and ConfirmPassword doesn't Match",
    path: ["confirmPassword"]
})
;

type singUpType = z.infer<typeof singUpShema>

export {
    type singUpType,
    singUpShema
}