import styled from "@emotion/styled";

import SearchIcon from 'assets/icons/search.svg';

const color = '#727272';

export const ComponentWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    input {
        border: none;
        box-shadow: 0 0 4px rgb(0 0 0 / 14%);
        font-size: 1em;
        padding: 0.4em 3em;
        :placeholder {
            color: ${color};
        }
        border-radius: 1.4em;
    }
    :before {
      content: '';
      position: absolute;
      width: 1.1em;
      height: 1.1em;
      background-image: url(${SearchIcon});
      background-size: cover;
      left: 1em;
      color: ${color};
    }
`;