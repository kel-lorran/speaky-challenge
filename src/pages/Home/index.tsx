import StudentDisplayer from 'components/StudentDisplayer';
import * as S from './index.style';

const Home = () => {
    return (
        <S.PageWrapper>
            <main>
                <S.ContainerBase>
                    <StudentDisplayer />
                </S.ContainerBase>
            </main>
        </S.PageWrapper>
    )
}

export default Home;