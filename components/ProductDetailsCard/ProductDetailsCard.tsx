"use client"
import React, { FC, useEffect } from 'react'
import { productImages } from '@/public/consts'
import { ProductType } from '@/global'
import { useAppContext } from '@/context'
import { BaseButton } from '../Base'

export const ProductDetailsCard: FC<ProductType> = ({ id, name, price, category, description, currency }) => {
    //@ts-ignore
    const ProductSvg = productImages[name] ?? ''

    const { addProduct, products } = useAppContext()

    useEffect(() => {
        console.log(products)
    }, [products])


    const addProductOnClick = ({
            id,
            name,
            price,
            currency,
            category,
            description }: ProductType
    ) => { addProduct({
            id,
            name,
            price,
            currency,
            category,
            description
        })
    }
    return (
        <div className='w-full flex flex-col sm:flex-row p-5 rounded-lg bg-[#E3F8FF] mt-5 gap-10'>
            <div className='p-20 flex items-center justify-center rounded-lg blue-gradient-bg'>
                {ProductSvg && <ProductSvg className='w-[200px]' />}
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='head_text'>
                    <span className='blue_gradient'>{name}</span>
                </h1>
                <span className='text-black blue_gradient'>Price: {price} $</span>
                <span className='text-black blue_gradient'>Category: {category}</span>
                <p className='text-black blue_gradient'>{description}</p>
                <BaseButton title='Add Product' onClick={() => addProductOnClick({id, name, price, currency, category, description})} className="border border-gray-300 h-10 p-5 rounded-md blue-gradient-bg flex items-center justify-center" />
            </div>
        </div>
    )
}

