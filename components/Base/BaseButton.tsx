import React, { ReactNode, FC } from 'react';

interface BaseButtonProps {
    title: string;
    className?: string;
    onClick: any
}

export const BaseButton: FC<BaseButtonProps> = ({ title, className, onClick }) => {
    return (
        <button 
            className={`rounded-lg cursor-pointer ${className}`} 
            onClick={onClick}
        >
            {title}
        </button>
    );
};
