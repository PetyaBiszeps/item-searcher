export interface IProduct {
    id: number;

    title: string;
    description: string;
    discountPercentage: number;
    brand: string;

    price: number;
    rating: number;
    category: string;

    images: string;
}

export interface IProductResponse {
    products: IProduct[];
    limit: number;
    total: number;
}