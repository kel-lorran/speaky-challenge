import React from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'

import * as S from './index.style';

export interface CustomInputRadioOption {
    value?: string,
    text: string,
    checked: boolean,
}

export interface CustomInputRadioProps {
    name: string,
    options: CustomInputRadioOption[],
    onChange: (e: any) => void
}

const CustomInputRadio = ({ options, name, onChange }: CustomInputRadioProps) => {
    return (<>
        {

            options.map((op, i) => {
                const computesValue = op.value || op.text
                const computedId = `id_${computesValue}`
                return (
                    <S.ComponentWrapper key={computesValue}>
                        <input type="radio" id={computedId} name={name} value={computesValue} checked={op.checked} onChange={onChange} />
                        <label htmlFor={computedId}>
                            <span className="icon">{op.checked ? <ImCheckboxChecked color="#1a8bfa" size="1.2em" /> : <ImCheckboxUnchecked color="#898997" size="1.2em" />}</span>
                            {op.text}
                        </label>
                    </S.ComponentWrapper>

                )
            })
        }
    </>)

}

export default CustomInputRadio