import {z} from "zod";

const singInShema = z.object({
    identifier: z.string().min(1, {message:"Email is required"}).email(),
    password: z.string().min(1, {message:'Password is required'})
})

type TSingInShema = z.infer<typeof singInShema>;

export {
    type TSingInShema,
    singInShema
}