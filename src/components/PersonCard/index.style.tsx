import styled from '@emotion/styled';

export const ComponentWrapper = styled.div`
    font-size: 14px;
    padding: 14px;
    border-radius: 14px;
    background: white;
    box-shadow: 0 0 4px rgb(0 0 0 / 14%);
    .img-avatar {
        max-width: 64px;
        max-height: 64px;
        border-radius: 50%;
    }
    .text-group {
        margin-left: 1em;
    }
    .full-name {
        font-weight: bold;
    }
    .title > * {
        margin-right: 0.8em;
    }
    .first-section, .second-section {
        display: flex;
    }
    .second-section {
        margin-top: 1.5em;
        justify-content: space-between;
        text-transform: uppercase;
        color: #727272;
    }
    .flag {
        object-fit: contain;
        height: 1em;
        border-radius: 0.2em;
    }
    .tag{
        padding: 0.3em;
        color: white;
        border-radius: 0.3em;
        display: inline-block;
        margin-top: 0.8em;
    }
    .left-content {
        .tag {
            background: #fdba33;
        }
    }
    .right-content {
        .tag {
            background: #1a8bfa;
        }
    }
`;