import type { NextRequest } from 'next/server'

export const GET = async (request: NextRequest, { params }: any) => {
    try {
        const response = await fetch('https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd');
        const res = await response.json();
        const { products } = res

        const targetProduct = products.filter((product: { id: any; }) => product.id === Number(params.id));
        console.log(targetProduct)
        return new Response(JSON.stringify(targetProduct), {
            status: 200
        });
    } catch (err) {
        console.log('Problem appeared trying to get products: ', err);

        return new Response("Failed to fetch product", {
            status: 500
        });
    }
};