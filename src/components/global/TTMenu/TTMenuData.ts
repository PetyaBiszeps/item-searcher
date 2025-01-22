import type { IProduct, IProductResponse } from "@/components/global/TTMenu/TTMenuTypes";

export class TTMenuData {
    inputRef = ref<string>('');
    products = ref<IProduct[]>([]);

    loading = ref(true);
    error = ref<string | null>(null);

    filter = computed(() => {
        const query: string = this.inputRef.value.toLowerCase().trim();
        if (!query) return this.products.value;

        return this.products.value.filter((p: IProduct) => p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
    });

    async fetchData(limit: number = 20, page: number = 1): Promise<IProductResponse | null> {
        this.loading.value = true;
        this.error.value = null;

        try {
            const response: Response = await fetch(`https://dummyjson.com/products?limit=${limit}&page=${page}`);

            if (!response.ok) {
                console.error(`Failed to fetch products: ${response.statusText}`);
                return null;
            }

            return await response.json();
        } catch (e) {
            console.error(`Error fetching products: ${(e as Error).message}`);
            return null;
        } finally {
            this.loading.value = false;
        }
    };

    async loadProducts(): Promise<void> {
        const res: (IProductResponse | null) = await TTMenuClass.fetchData();

        if (res) TTMenuClass.products.value = res.products;
        else TTMenuClass.error.value = 'Failed to load products';
    };
}

export const TTMenuClass: TTMenuData = new TTMenuData();