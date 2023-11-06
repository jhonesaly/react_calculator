import { createGlobalStyle } from 'styled-components'
import LEDCalculatorFont from './fonts/LEDCalculator.ttf';

export default createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: 'LEDCalculator';
    src: url(${LEDCalculatorFont}) format('truetype');
  }
`