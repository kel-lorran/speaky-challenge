import React, { useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import CustomButton from 'components/CustomButton';
import CustomInput from 'components/CustomInput';
import PersonCard from 'components/PersonCard';
import FilterModal from 'components/FilterModal';

import * as S from './index.style';
import { Person } from 'store/person';
import { PAGINATION_ITEMS_QTD } from 'utils/constants';
import { useEffect } from '@storybook/addons';

export interface PersonDisplayerProps {
    data: Person[]
    getMoreData: () => void,
    hasMoreItems: boolean,
}

export type PersonDisplayerFilter = (person: Person) => boolean

const PersonDisplayer = ({ getMoreData, hasMoreItems, data }: PersonDisplayerProps) => {
    const [showFilterModal, setShowFilterModal] = useState(false)
    const [filters, setFilter] = useState<PersonDisplayerFilter[]>([])

    const handleFilterModal = () => {
        setShowFilterModal(true)
    }

    const handleCloseFilterModal = () => {
        setShowFilterModal(false)
    }

    const dataComputed = data.filter(elm => filters.reduce((ac: boolean, e) => ac && e(elm), true))

    return (
        <>
            <S.ComponentWrapper>
                <div className="displayer-header">
                    <div className="filter-group">
                        <CustomButton onClick={handleFilterModal} outline >Filtres</CustomButton>
                    </div>
                    <CustomInput></CustomInput>
                </div>
                <div>
                    <InfiniteScroll
                        dataLength={PAGINATION_ITEMS_QTD}
                        next={getMoreData}
                        hasMore={hasMoreItems}
                        loader={<h4>Loading...</h4>}
                        height="250"
                    >
                        <div className="displayer-body">
                            {dataComputed.map(person => <React.Fragment key={person.id}><PersonCard person={person} /></React.Fragment>)}
                        </div>
                    </InfiniteScroll>
                </div>
            </S.ComponentWrapper>
            <FilterModal setFilterList={setFilter} handleClose={handleCloseFilterModal} show={showFilterModal} />
        </>
    )
}

export default PersonDisplayer