import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PAGINATION_ITEMS_QTD } from 'utils/constants';

import personList from './mockDataPersonList.json'

export interface Person {
    id: number;
    imgUrl: string;
    firstName: string;
    lastName: string;
    age: number,
    nationality: string;
    resume: string;
    parle: string[];
    apprend: string[];
}

export interface PersonState {
    loading: boolean;
    success: boolean | null;
    personList: Person[];
    page: number;
    hasMore: boolean;
}

const getMoreData = (page: number) => {
    return personList.slice((page - 1) * PAGINATION_ITEMS_QTD, (page * PAGINATION_ITEMS_QTD) - 1)
}

const initialState: PersonState = {
    loading: false,
    success: true,
    personList: getMoreData(1),
    page: 1,
    hasMore: true,
};

const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        updatePersonList: (state) => {
            if (state.hasMore) {
                const currentPage = state.page + 1
                const newData = getMoreData(currentPage)

                return {
                    ...state,
                    page: currentPage,
                    personList: [...state.personList, ...newData],
                    hasMore: !!newData.length
                }
            }
        }
    },
});

export const { updatePersonList } = personSlice.actions
export default personSlice.reducer;
