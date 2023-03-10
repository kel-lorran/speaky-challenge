import { FLAG_URL } from "./constants"

export const abreviateText = (text: string, length: number, finalChar = '') => {
    const abreviatedText = text.slice(0, length)
    return abreviateText.length < text.length ? `${abreviatedText}${finalChar}` : text
}

export const getFlagUrlByCountry = (acronym: string) => `${FLAG_URL}${acronym.toUpperCase()}.svg`