import styled from 'styled-components';
import LEDCalculatorFont from '../../fonts/LEDCalculator.ttf';

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: #a5d1a7;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 24px;
  font-family: 'LEDCalculator', sans-serif;
  
  @font-face {
    font-family: 'LEDCalculator';
    src: url(${LEDCalculatorFont}) format('truetype');
  }
`
