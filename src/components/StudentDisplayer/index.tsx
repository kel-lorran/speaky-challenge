import { useState } from 'react';

import CustomButton from 'components/CustomButton';
import CustomInput from 'components/CustomInput';
import StudentCard from 'components/StudentCard';
import FilterModal from 'components/FilterModal';

import * as S from './index.style';

const StudentDisplayer = () => {
    const [showFilterModal, setShowFilterModal] = useState(false)

    const handleFilterModal = () => {
        setShowFilterModal(true)
    }

    const handleCloseFilterModal = () => {
        setShowFilterModal(false)
    }

    return (
        <>
            <S.ComponentWrapper>
                <div className="displayer-header">
                    <CustomButton onClick={handleFilterModal}>Filtres</CustomButton>
                    <CustomInput></CustomInput>
                </div>
                <div className="displayer-body">
                    <StudentCard />
                </div>
            </S.ComponentWrapper>
            <FilterModal handleClose={handleCloseFilterModal} show={showFilterModal} />
        </>
    )
}

export default StudentDisplayer