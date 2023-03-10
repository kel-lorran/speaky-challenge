import * as S from './index.style'

export interface CustomInputProps extends React.HTMLProps<HTMLInputElement> { }

const CustomInput = (props: CustomInputProps) => {
    return (
        <S.ComponentWrapper>
            <input {...props} />
        </S.ComponentWrapper>
    )
}

export default CustomInput