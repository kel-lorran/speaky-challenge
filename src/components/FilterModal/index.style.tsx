import styled from "@emotion/styled"

export * from 'shared/index.style'

export const ComponentWrapper = styled.div`
    min-width: 400px;
    display: flex;
    flex-direction: column;
    > * {
        padding: 16px 0;
    }
    .filter-modal-header {
        border-bottom: 1px solid #e7e7e7;
    }
    .radio-group {
        display: flex;
        margin: 16px 0;
        justify-content: space-between;
    }
`