import React, { FC } from 'react'
import { BaseContainer } from '../Base'
import Link from 'next/link'
import { Cart } from '../Cart'

export const Header: FC = () => {

	return (
		<header className='bg-[#E3F8FF] flex items-center justify-center px-5'>
			<BaseContainer className='h-[70px] flex items-center justify-between'>
				<Link href='/'>
					<p className='head_text cursor-pointer'>
						<span className='blue_gradient'>Chilli Products</span>
					</p>
				</Link>
				<Cart />
			</BaseContainer>
		</header>
	)
}

