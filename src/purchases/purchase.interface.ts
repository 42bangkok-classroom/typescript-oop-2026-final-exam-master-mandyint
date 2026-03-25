export interface Purchase{
    id: number,
    customerName: string,
    purchaseDate: Date,
    item: PurchaseItem,
    totalPrice: number
}

export interface PurchaseItem{
    productId: number,
    quantity: number,
    price: number,
}