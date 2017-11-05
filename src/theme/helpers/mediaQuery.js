import { css } from 'styled-components';
import variables from '../variables';

const sizes = variables.viewports;

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label].minWidth}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
