import styled from "@emotion/styled";
import { CustomButtonProps } from '.';

export const ComponentWrapper = styled.button<CustomButtonProps>`
    padding: 0.4em 1.2em;
    border-radius: 1.3em;
    display: flex;
    ${({ primaryColor, secondaryColor, outline }) =>
    outline
      ? `
    border: 1px solid ${primaryColor};
    color: ${primaryColor};
    background: ${secondaryColor};
    `
      : `
      border: 1px solid ${primaryColor};
      color: ${secondaryColor};
      background: ${primaryColor};
    `}
    
    &:hover {
      opacity: 0.85;
    }
    &:active {
      opacity: 0.65;
    }
    &:disabled {
      opacity: 0.4;
    }
`;
