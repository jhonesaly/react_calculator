import styled from 'styled-components';

export const InputContainer = styled.div`
    width: calc(100% - 20px);
    height: 75px;
    background-color: #a5d1a7;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 10px;

    font-size: 24px;
    font-family: 'LEDCalculator', monospace;

    input {
        width: 100%;
        height: 100%;
        background-color: inherit;
        padding: 0 10px;
        font-size: inherit;
        font-family: inherit;
        color: #000000
    }
`
