import { css } from 'styled-components';

import mediaQuery from './mediaQuery';
import { SMALL, MEDIUM, LARGE, XLARGE } from '../../constants/sizes';

export const viewportSizes = [SMALL, MEDIUM, LARGE, XLARGE];

export default Object.keys(viewportSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    ${viewportSizes.map(viewport => mediaQuery[viewport]`${css(...args)}`)};
  `;

  return acc;
}, {});
