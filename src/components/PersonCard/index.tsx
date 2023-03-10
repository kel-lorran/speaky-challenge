import { Person } from 'store/person'
import { abreviateText, getFlagUrlByCountry } from 'utils/helpers'

import * as S from './index.style'
import GenericAvatar from 'assets/illustration/genericAvatar.png'

export interface PersonCardProps {
    person: Person;
    altImgText?: string
}

const PersonCard = ({ person, altImgText = 'avatar image' }: PersonCardProps) => {
    const makeTagContent = (list: string[]) => `${list[0]}${list.length > 1 ? ` + ${list.length - 1}` : ''}`

    return (
        <S.ComponentWrapper>
            <div className="first-section">
                <img className="img-avatar" src={person.imgUrl || GenericAvatar} alt={altImgText} />
                <div className="text-group">
                    <div className="title">
                        <span className="full-name">{person.firstName} {abreviateText(person.lastName, 1, '.')}</span>
                        <span className="person-age">{person.age}</span>
                        <img src={getFlagUrlByCountry(person.nationality)} alt="flag nationality" className="flag" />
                    </div>
                    <p className="text-resume">{abreviateText(person.resume, 120, '...')}</p>
                </div>
            </div>
            <div className="second-section">
                <div className="left-content">
                    <p>Parle</p>
                    <p className="tag">{makeTagContent(person.parle)}</p>
                </div>
                <div className="right-content">
                    <p>Apprend</p>
                    <p className="tag">{makeTagContent(person.apprend)}</p>
                </div>
            </div>
        </S.ComponentWrapper>
    )
}

export default PersonCard