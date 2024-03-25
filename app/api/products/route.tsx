import type { NextRequest } from 'next/server'

export const GET = async (request: NextRequest) => {
    try {
        const response = await fetch('https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd');
        const products = await response.json(); 

        return new Response(JSON.stringify(products), {
            status: 200
        });
    } catch (err) {
        console.log('Problem appeared trying to get products: ', err);

        return new Response("Failed to fetch products", {
            status: 500
        });
    }
};