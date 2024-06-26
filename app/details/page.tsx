'use client'
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { ProductDetailsCard } from "@/components/ProductDetailsCard"
import { ProductType } from "@/global"

export default function Details() {
    const [product, setProduct] = useState<ProductType>({
        id: 0,
        name: '',
        price: 0,
        category: '',
        description: '',
        currency: ''
    });
    const searchParams = useSearchParams()
    const [productId, setProductId] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const id = searchParams.get('productId')
        setProductId(id)
    }, [searchParams])

    useEffect(() => {
        if (productId) {
            const getProduct = async () => {
                setLoading(true);
                const res = await fetch(`api/products/product/${productId}`)
                const targetProduct = await res.json()
                setProduct(targetProduct[0])
                setLoading(false);
            }
            getProduct()
        }
    }, [productId])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
			<ProductDetailsCard 
                id={product?.id}
                name={product?.name}
                price={product?.price}
                category={product?.category}
                description={product?.description}
                currency={product?.currency}
            />
    );
}
