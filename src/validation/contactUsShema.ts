import {z} from "zod";

const contactUsShema = z.object({
    firstName: z.string().min(1, {message:"firstName is required"}).max(15, {message: "The FirstName is Long"}),
    lastName: z.string().min(1, {message:"lastName is required"}).max(15, {message: "The LastName is Long"}),
    email: z.string().email(),
    contentMessage: z.string().min(5, {message:"message is required"})
})

type TContactUsShema = z.infer<typeof contactUsShema>;

export {
    type TContactUsShema,
    contactUsShema
}