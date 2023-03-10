import React from 'react';
import * as S from './index.style';

export interface CustomButtonProps
    extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    > {
    children: React.ReactNode;
    primaryColor?: string;
    secondaryColor?: string;
    outline?: boolean;
}

const CustomButton = ({
    children,
    primaryColor = '#1a8bfa;',
    secondaryColor = 'white',
    outline = false,
    ...props
}: CustomButtonProps) => {
    return (
        <S.ComponentWrapper
            {...props}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            outline={outline}
        >
            {children}
        </S.ComponentWrapper>
    );
};

export default CustomButton;