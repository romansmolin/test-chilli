import React, { ReactNode, FC } from 'react';

interface BaseContainerProps {
    children: ReactNode;
    className?: string; 
}

export const BaseContainer: FC<BaseContainerProps> = ({ children, className }) => {
    return (
        <div className={`w-full m-auto lg:w-[900px] xl:w-[1050px] ${className}`}>
            {children}
        </div>
    );
};
