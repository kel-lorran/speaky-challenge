import { useSelector, useDispatch } from 'react-redux';

import PersonDisplayer from 'components/PersonDisplayer';
import { AppDispatch, RootState } from 'store';
import { PersonState, updatePersonList } from 'store/person'

import * as S from './index.style';

const Home = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { personList, hasMore } = useSelector<RootState, PersonState>(store => store.person)

    const handleGetMoreData = () => { dispatch(updatePersonList()) }

    return (
        <S.PageWrapper>
            <main>
                <S.ContainerBase>
                    <PersonDisplayer data={personList} hasMoreItems={hasMore} getMoreData={handleGetMoreData} />
                </S.ContainerBase>
            </main>
        </S.PageWrapper>
    )
}

export default Home;