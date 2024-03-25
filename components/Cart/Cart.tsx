"use client"
import React, { FC } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { useAppContext } from '@/context';

export const Cart: FC = () => {
	const iconStyle = {
		height: '50px',
		color: '#3b82f6',
		width: '30px',
		cursor: 'pointer'
	};

	const { setShowPopUp } = useAppContext()

	return <FaCartArrowDown style={iconStyle} onClick={() => setShowPopUp(true)}/>

}

