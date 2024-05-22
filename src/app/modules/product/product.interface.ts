export interface IInventory {
    quantity: number
    inStock: boolean
}
export interface IVariants {
    type: string
    value: string
}

export interface IProduct {
    name: string
    description: string
    price: number
    category: string
    tags: []
    variants: IVariants[]
    inventory: IInventory
}
