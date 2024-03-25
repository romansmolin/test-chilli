import { ProductType } from "@/global";
import type { NextRequest } from 'next/server';

export const GET = async (request: NextRequest, { params }: any) => {
    try {
        const response = await fetch('https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (!data.products) {
            throw new Error('No products key found in response');
        }

        const products = data.products;
        const { page = 1 } = params;  
        const search = request.nextUrl.searchParams.get("search") ?? "";

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
    } catch (err) {
        console.error(err);
        return new Response(`Failed to fetch products: ${err}`, {
            status: 500
        });
    }
};

const filterProducts = (products: ProductType[], search: string) => {
    if (!search || search.trim() === '') {
        return products;
    }

    const regex = new RegExp(search, 'i');
    return products.filter((item: ProductType) =>
        regex.test(item.name) || regex.test(item.category)
    );
};
