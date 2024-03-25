"use client"
import React, { FC, useEffect } from 'react'
import { BaseButton } from '../Base'
import { useAppContext } from '@/context'
import { IoClose } from "react-icons/io5";


export const CartPopUp: FC = () => {
    const { setShowPopUp, products, showPopUp } = useAppContext()

    useEffect(() => {
        console.log(products)
    }, [products])

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 ${showPopUp ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg p-5 w-[300px]">
                <div className='w-full flex justify-end'>
                    <IoClose onClick={() => setShowPopUp(false)} style={{ color: '#3b82f6', cursor: 'pointer' }} />
                </div>
                <div className="mt-4 flex justify-center items-center">
                    {products.length === 0 ? (
                        <div className='blue_gradient'>Your cart is empty</div>
                    ) : (
                        <div className='flex flex-col gap-2 w-full'>
                            {products.map(({ product, quantity }) => (
                                <div key={product.id} className='blue_gradient flex justify-between'>
                                    <p>{product.name}</p>
                                    <span>Quantity: {quantity}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

