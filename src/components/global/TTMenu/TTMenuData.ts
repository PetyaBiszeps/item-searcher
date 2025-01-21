import type { IProductResponse } from "@/components/global/TTMenu/TTMenuTypes";

export async function fetchProducts(limit: number = 20, page: number = 1): Promise<IProductResponse | null> {
    try {
        const response: Response = await fetch(`https://dummyjson.com/products?limit=${limit}&page=${limit}&page=${page}`);
        if (!response.ok) {
            console.error(`Failed to fetch products: ${response.statusText}`);
            return null;
        }

        const data: IProductResponse = await response.json();
        return data;
    } catch (e) {
        console.error(`Error fetching products: ${(e as Error).message}`);
        return null;
    }
}