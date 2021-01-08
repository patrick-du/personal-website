import { createGlobalStyle } from 'styled-components';

import SFProDisplayUltraLight from '../fonts/SFProDisplay-UltraLight.ttf';
import SFProDisplayLight from '../fonts/SFProDisplay-Light.ttf';
import SFProDisplayMedium from '../fonts/SFProDisplay-Medium.ttf';
import SFProDisplayRegular from '../fonts/SFProDisplay-Regular.ttf';
import SFProDisplayBold from '../fonts/SFProDisplay-Bold.ttf';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'SFProDisplay-UltraLight';
        src: url('${SFProDisplayUltraLight}') format('truetype')
    }
    @font-face {
        font-family: 'SFProDisplay-Light';
        src: url('${SFProDisplayLight}') format('truetype')
    }
    @font-face {
        font-family: 'SFProDisplay-Medium';
        src: url('${SFProDisplayMedium}') format('truetype')
    }
    @font-face {
        font-family: 'SFProDisplay-Regular';
        src: url('${SFProDisplayRegular}') format('truetype')
    }
    @font-face {
        font-family: 'SFProDisplay-Bold';
        src: url('${SFProDisplayBold}') format('truetype')
    }

    body {
        color: #2b2b2b;
        font-family: SFProDisplay-Light;
    }
    
    @media(max-width: 575.98px) {
        p {
            font-size: 16px;
        }
    }

    @media(min-width: 576px) {
        p {
            font-size: 18px;
        }
    }
  `;
