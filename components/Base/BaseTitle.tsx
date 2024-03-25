import React, { ReactNode, FC } from 'react'

interface BaseTitleProps {
    text: ReactNode | string,
    className?: string;
}
export const BaseTitle: FC<BaseTitleProps> = ({ text, className }) => {
    return (
        <h2 className={`title ${className}`}>
            {text}
        </h2>
    )
}
