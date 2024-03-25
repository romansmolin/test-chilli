import React, { ReactNode, FC } from 'react'

interface BaseGridrProps {
    children: ReactNode
}
export const BaseGrid: FC<BaseGridrProps> = ({ children }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 m-auto gap-4 p-5'>
            {children}
        </div>
    )
}
