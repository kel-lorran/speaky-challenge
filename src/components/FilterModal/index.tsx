import CustomButton from "components/CustomButton"
import CustomInputRadio, { CustomInputRadioOption } from "components/CustomInputRadio"
import CustomModal, { CustomModalProps } from "components/CustomModal"
import { PersonDisplayerFilter } from "components/PersonDisplayer"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "store"
import { setPesonList } from "store/person"
import * as S from './index.style'

export interface FilterModalProps extends Omit<CustomModalProps, 'children'> {
    setFilterList: (filterList: PersonDisplayerFilter[]) => void
}

const FilterModal = ({ setFilterList, ...restProps }: FilterModalProps) => {
    const [genderOptions, setGenderOptions] = useState<CustomInputRadioOption[]>([
        {
            text: 'Homme',
            value: 'M',
            checked: false,
        },
        {
            text: 'Femme',
            value: 'F',
            checked: false,
        },
        {
            text: 'Autre',
            value: 'A',
            checked: true,
        }
    ]);
    const [genderFilter, setGenderFilter] = useState<PersonDisplayerFilter>()

    const handleChangeGender = (e: any) => {
        setGenderOptions(genderOptions.map(op => {

            const isChecked = op.value === (e.target as HTMLInputElement).value
            if (isChecked && op.value !== 'A') {
                const fnFilter: PersonDisplayerFilter = (elm) => elm.gender === (e.target as HTMLInputElement).value
                setGenderFilter(() => fnFilter)
            }
            return ({ ...op, checked: isChecked })
        }))
    }

    const handleFilter = (e: any) => {
        e.preventDefault()
        const tempFilterList: PersonDisplayerFilter[] = []
        if (genderFilter) tempFilterList.push(genderFilter)
        if (tempFilterList.length) setFilterList(tempFilterList)
        restProps.handleClose()
    }

    return (
        <CustomModal {...restProps} >
            <S.ComponentWrapper>
                <div className="filter-modal-header">
                    <S.ContainerBase>
                        Filtres
                    </S.ContainerBase>
                </div>
                <form onSubmit={handleFilter} className="filter-modal-body">
                    <S.ContainerBase>
                        <div className="input-group">
                            <h5>GENRE</h5>
                            <div className="radio-group">
                                <CustomInputRadio onChange={handleChangeGender} options={genderOptions} name="filter-radio-gender" />
                            </div>
                        </div>
                        <CustomButton type="submit">Appliquer</CustomButton>
                    </S.ContainerBase>
                </form>
            </S.ComponentWrapper>
        </CustomModal>
    )
}

export default FilterModal