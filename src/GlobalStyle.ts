import { createGlobalStyle } from 'styled-components';
import PretendardExtraLight from './assets/fonts/Pretendard-ExtraLight.woff2';
import PretendardRegular from './assets/fonts/Pretendard-Regular.woff2';
import PretendardBold from './assets/fonts/Pretendard-Bold.woff2';
import PretendardExtraBold from './assets/fonts/Pretendard-ExtraBold.woff2';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        font-weight: 200;
        src: url(${PretendardExtraLight}) format('woff2');    
        unicode-range: U+AC00-D7A3;
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 400;
        src: url(${PretendardRegular}) format('woff2');    
        unicode-range: U+AC00-D7A3;
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 700;
        src: url(${PretendardBold}) format('woff2');    
        unicode-range: U+AC00-D7A3;
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 800;
        src: url(${PretendardExtraBold}) format('woff2');    
        unicode-range: U+AC00-D7A3;
    }
    * {
    	font-family: 'Pretendard';
      box-sizing: border-box;
    }
`;

export default GlobalStyle;
