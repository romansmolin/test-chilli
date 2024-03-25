import React, { ReactNode, FC } from 'react'
import {productImages} from '@/public/consts'
import { ProductProps } from '@/global'

export const ProductCard: FC<ProductProps> = ({ id, name, price , category}) => {
    // @ts-ignore
    const ProductSvg = productImages[name]

    return (
        <div className='group relative flex flex-col gap-5 items-center px-6 py-3 md:px-8 rounded-lg overflow-hidden bg-[#E3F8FF] hover:shadow-md cursor-pointer'>
            <ProductSvg className='group-hover:rotate-[15deg] group-hover:ml-14 transition-500 h-[100px]' />
            <div className='flex justify-center items-center absolute writing-vertical-rl text-center rotate-180 left-[-26%] 
            top-0 w-[26%] h-full blue-gradient-bg text-white font-bold group-hover:left-0 transition-500'>
                <p className='uppercase'>{category}</p>
            </div>
            <div className="flex w-full group-hover:ml-14 justify-center items-end transition-500">
                <div>
                    <span className="text-black text-center block mb-1">{name}</span>
                    <span className="text-black text-center block font-bold">$ {price}</span>
                </div>
            </div>
        </div>
    )
}
