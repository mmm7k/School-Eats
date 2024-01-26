import { css } from '@emotion/react';

export const globalStyles = css`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0px;
    box-sizing: border-box;
    font-weight: 400;
    font-family: 'Pretendard-Regular';
  }
  html,
  body {
    max-width: 100%;
    overflow-x: hidden;
  }
`;
