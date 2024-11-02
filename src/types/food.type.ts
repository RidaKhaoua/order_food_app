export type TFood = {
    id: string | number,
    name: string,
    image: string,
    price: number,
    description: string,
    category: string,
    quantity?: number,
    isAuthenticated?: boolean,
    isLiked: boolean
}

