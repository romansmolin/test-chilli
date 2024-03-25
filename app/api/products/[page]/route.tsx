import { ProductType } from "@/global";
import type { NextRequest } from 'next/server';

export const GET = async (request: NextRequest, { params }: any) => {
    try {
        const response = await fetch('https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd');
        if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.statusText}`);
        }

        const { products } = await response.json();
        const { page = 1 } = params;  
        const search = request.nextUrl.searchParams.get("search") ?? ""

        const filteredProducts = filterProducts(products, search);

        const itemsPerPage = 8;
        const startIndex = (page - 1) * itemsPerPage;
        const slicedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

        const maxPage = Math.ceil(filteredProducts.length / itemsPerPage);

        const obj = {
            products: slicedProducts,
            maxPage,
            minPage: 1,
        };

        return new Response(JSON.stringify(obj), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err: any) {
        return new Response(JSON.stringify({ error: `Failed to fetch products: ${err.message}` }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};

const filterProducts = (products: ProductType[], search: string) => {

    if (!search || search.trim() === '') {
        return products;
    }

    const regex = new RegExp(search, 'i');

    const filteredProducts = products.filter((item: ProductType) =>
        regex.test(item.name) || regex.test(item.category)
    );

    return filteredProducts
};
