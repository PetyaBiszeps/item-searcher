import type { IProduct, IProductResponse } from "@/components/global/TTMenu/TTMenuTypes";

export class TTMenuData {
    inputRef = ref<string>('');
    products = ref<IProduct[]>([]);

    loading = ref(false);
    error = ref<string | null>(null);

    filter = computed(() => {
        const query: string = this.inputRef.value.toLowerCase().trim();
        if (!query) return this.products.value;

        return this.products.value.filter((p: IProduct) => p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
    });

    currentPage = ref<number>(1);
    totalProducts = ref<number>(0);
    hasMore = ref<boolean>(true);

    async fetchData(limit: number = 20, page: number = 1): Promise<IProductResponse | null> {
        this.loading.value = true;
        this.error.value = null;

        try {
            const response: Response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`);

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

    async loadData(isInitialLoad: boolean = false): Promise<void> {
        if (this.loading.value || (isInitialLoad && this.products.value.length > 0)) return;

        const res: (IProductResponse | null) = await this.fetchData(20, this.currentPage.value);

        if (res) {
            if (isInitialLoad) {
                this.products.value = res.products;
                this.totalProducts.value = res.total;
                this.hasMore.value = this.products.value.length < this.totalProducts.value;
                this.currentPage.value = 2; // После начальной загрузки начинаем с 2 страницы
            } else {
                this.products.value = [...this.products.value, ...res.products];
                this.hasMore.value = this.products.value.length < this.totalProducts.value;
                this.currentPage.value += 1;
            }
        } else this.error.value = 'Failed to load products';
    };
}

export const TTMenuClass: TTMenuData = new TTMenuData();