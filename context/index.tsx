"use client"
import React, { createContext, useContext, useState } from "react";
import { ProductType } from "@/global";

let initialState: { product: ProductType; quantity: number }[] = [];

const AppContext = createContext<{
    products: { product: ProductType; quantity: number }[];
    addProduct: (product: ProductType) => void;
    setShowPopUp: (arg: boolean) => void,
    showPopUp: boolean
}>({
    products: initialState,
    addProduct: () => {},
    setShowPopUp: () => {},
    showPopUp: false
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<{ product: ProductType; quantity: number }[]>(initialState);
    const [showPopUp, setPopUp] = useState<boolean>(false)

    const addProduct = (productToAdd: ProductType) => {
        setProducts(prevProducts => {
            const productIndex = prevProducts.findIndex(item => item.product.id === productToAdd.id);

            if (productIndex !== -1) {
                const updatedProducts = [...prevProducts];

                updatedProducts[productIndex] = {
                    ...updatedProducts[productIndex],
                    quantity: updatedProducts[productIndex].quantity + 1
                };
                
                return updatedProducts;
            } else {
                return [...prevProducts, { product: productToAdd, quantity: 1 }];
            }
        });
    };

    const setShowPopUp = (show: boolean) => {
        setPopUp(show)
    }

    return (
        <AppContext.Provider value={{ products, addProduct, showPopUp, setShowPopUp }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
