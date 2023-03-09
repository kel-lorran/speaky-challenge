import { useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import CustomButton from 'components/CustomButton';
import CustomInput from 'components/CustomInput';
import StudentCard from 'components/StudentCard';
import FilterModal from 'components/FilterModal';

import * as S from './index.style';
import { Person } from 'store/person';
import { PAGINATION_ITEMS_QTD } from 'utils/constants';

export interface PersonDisplayerProps {
    data: Person[]
    getMoreData: () => void,
    hasMoreItems: boolean,
}

const PersonDisplayer = ({ getMoreData, hasMoreItems, data }: PersonDisplayerProps) => {
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
                    <InfiniteScroll
                        dataLength={PAGINATION_ITEMS_QTD}
                        next={getMoreData}
                        hasMore={hasMoreItems}
                        loader={<h4>Loading...</h4>}
                        height={400}
                    >
                        {data.map(person => <StudentCard person={person} />)}
                    </InfiniteScroll>
                </div>
            </S.ComponentWrapper>
            <FilterModal handleClose={handleCloseFilterModal} show={showFilterModal} />
        </>
    )
}

export default PersonDisplayer