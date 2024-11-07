export type TUser = {
    user: {
        id:number,
        documentId: string,
        username:string,
        email: string,
        provider: string,
        confirmPassword: boolean,
        createdAt: string,
        updatedAt: string
    } | null,
    jwt: null | string
}