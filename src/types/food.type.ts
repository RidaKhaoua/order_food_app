export type TFood = {
    id: number,
    documentId: string,
    name: string,
    image: string,
    price: number,
    description: string,
    category: string,
    quantity?: number,
    isAuthenticated?: boolean,
    isLiked: boolean
}

