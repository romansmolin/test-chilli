"use client"
import { FC } from "react"
import { BaseGrid, BaseTitle, BaseSearchBar } from "@/components/Base"
import { ProductCard } from "@/components/ProductCard"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ProductType } from "@/global"


interface PaginationButtonsProps {
	setCurrentPage: (page: number) => void;
	maxPage: number,
	minPage: number,
	currentPage: number,
}

export default function Home() {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [pageLimits, setPageLimits] = useState<{ max: number, min: number }>({ max: 1, min: 1 });
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [search, setSearch] = useState<string>('');
	const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);
	
	useEffect(() => {
		const getProducts = async () => {
			setIsLoading(true);
			try {
				const res = await fetch(`/api/products/${currentPage}${search !== "" ? `/?search=${search}` : ""}`);
				const data = await res.json();

				setProducts(data?.products);
				setPageLimits({ max: data?.maxPage, min: data?.minPage });
			} catch (error) {
				console.error('Fetch error:', error);
			}
			setIsLoading(false);
		};

		getProducts()
	}, [currentPage]);

	const handleSearchChange = (newSearch: string) => {
		setSearch(newSearch);

		if (searchTimeout) {
			clearTimeout(searchTimeout);
		}

		const timeoutId = setTimeout(async () => {
			setCurrentPage(1)
			const res = await fetch(`/api/products/${currentPage}/?search=${newSearch }`);
			const searchResult = await res.json();

			setProducts(searchResult?.products);
		}, 500);

		setSearchTimeout(timeoutId);
	};

	if (isLoading) return <div className="blue_gradient text-5xl">Loading...</div>;

	return (
		<div className="mt-7">
			<BaseSearchBar
				value={search}
				updateFunction={handleSearchChange}
			/>
			<BaseTitle text={'Products'} className='mt-5' />
			<BaseGrid>
				{products.map((product: ProductType) => (
					<Link
						key={product.id}
						href={`/details/?productId=${product.id}`}
					>
						<ProductCard
							id={product.id}
							price={product.price}
							name={product.name}
							category={product.category}
						/>
					</Link>
				))}
			</BaseGrid>
			<PaginationButtons
				setCurrentPage={setCurrentPage}
				maxPage={pageLimits.max}
				minPage={pageLimits.min}
				currentPage={currentPage}
			/>
		</div>
	);
}

const PaginationButtons: FC<PaginationButtonsProps> = ({ setCurrentPage, maxPage, minPage, currentPage }) => {

	const handleNext = () => {
		if (currentPage < maxPage) {
			setCurrentPage(currentPage + 1);
		}
	}

	const handlePrev = () => {
		if (currentPage > minPage) {
			setCurrentPage(currentPage - 1);
		}
	}


	return (
		<div className="mt-5 w-full flex justify-between">
			<button className="p-3 border bottom-1 text-black cursor-pointer" onClick={handlePrev}>Prev</button>
			<button className="p-3 border bottom-1 text-black cursor-pointer" onClick={handleNext}>Next</button>
		</div>
	)
}
