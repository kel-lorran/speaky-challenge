import styled from '@emotion/styled';

const gaps = '20px';

export const ComponentWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    > * {
        display: flex;
        overflow: hidden;
    }
    .infinite-scroll-component__outerdiv {
        display: flex;
    }
    .displayer-header {
        display: flex;
        align-items: center;
        min-height: 60px;
        justify-content: space-between;
    }
    .displayer-body {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-grow: 1;
        > * {
            max-width: calc(33% - (0.66 * ${gaps}));
            margin-bottom: ${gaps};
            width: 100%;
        }
    }
`;
