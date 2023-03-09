import CustomButton from "components/CustomButton"
import CustomModal, { CustomModalProps } from "components/CustomModal"
import * as S from './index.style'

const FilterModal = (props: Omit<CustomModalProps, 'children'>) => {
    return (
        <CustomModal {...props} >
            <S.ComponentWrapper>
                <div className="filter-modal-header">
                    Filtres
                </div>
                <form className="filter-modal-body">
                    <div className="input-group">
                        <h5>Âge</h5>

                    </div>
                    <CustomButton type="submit">Appliquer</CustomButton>
                </form>
            </S.ComponentWrapper>
        </CustomModal>
    )
}

export default FilterModal