import styled from "@emotion/styled";

export const ComponentWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    color: #545468;
    label {
        isplay: flex;
        align-items: center;
    }
    .icon {
        padding-right: 1em;
    }
    input {
        display: none;
        &:checked ~ .icon {
            display: initial;
        }
    }
`;