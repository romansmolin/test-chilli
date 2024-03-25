export interface SvgProps {
    className: string
}

export interface ProductProps {
    id: number,
    name: string,
    price: number,
    category: string,
    description?: string,
    currency?: string
}

export type ProductType = {
	id: number
	name: string
	price: number
	currency: string
	category: string
	description: string
}