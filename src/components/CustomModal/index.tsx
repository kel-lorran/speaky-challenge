import React from 'react';
import { FaTimes } from 'react-icons/fa';
import * as S from './index.style';

export interface CustomModalProps {
    children: React.ReactNode;
    handleClose: () => void;
    show?: boolean;
}

const CustomModal = ({
    children,
    handleClose,
    show = false,
}: CustomModalProps) => {
    return (
        <S.Wrapper
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                if (e.target === e.currentTarget) {
                    handleClose();
                }
            }}
            show={show}
        >
            <div>
                {handleClose && (
                    <span onClick={handleClose} className="close-button">
                        <FaTimes />
                    </span>
                )}
                {children}
            </div>
        </S.Wrapper>
    );
};

export default CustomModal;
