import { Person } from 'store/person'
import { abreviateText, getFlagUrlByCountry } from 'utils/helpers'

import * as S from './index.style'

export interface StudentCardProps {
    person: Person;
    altImgText?: string
}

const StudentCard = ({ person, altImgText = 'avatar image' }: StudentCardProps) => {
    return (
        <S.ComponentWrapper>
            <div className="first-section">
                <img src={person.imgUrl} alt={altImgText} />
                <div className="text-group">
                    <div className="title">
                        <span className="full-name">{person.firstName} {abreviateText(person.lastName, 1, '.')}</span>
                        <span className="person-age"></span>
                        <img src={getFlagUrlByCountry(person.nationality)} alt="flag nationality" className="flag" />
                    </div>
                    <p className="text-resume"></p>
                </div>
            </div>
            <div className="second-section"></div>
        </S.ComponentWrapper>
    )
}

export default StudentCard