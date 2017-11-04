import { css } from 'styled-components';

import mediaQuery from '../../../../theme/helpers/mediaQuery';
import { viewportSizes } from '../../../../theme/helpers/viewports';
import { GRID_ITEM_WIDTHS } from '../../../../constants/grid';

export default css`
  ${({theme, gutters}) => gutters && `
    margin: 0 ${theme.spacing.small}px;
  `}

  ${props =>
    viewportSizes.map(viewport => {
      const viewportWidth = GRID_ITEM_WIDTHS[props[viewport]];
      const gridItemGutterStyle = `${viewportWidth} - ${props.theme.spacing
        .small * 2}px`;

      return props[viewport] && mediaQuery[viewport]`
        ${props.gutters ? `
          max-width: calc(${gridItemGutterStyle});
          flex-basis: calc(${gridItemGutterStyle});
        ` : `
          max-width: ${viewportWidth};
          flex-basis: ${viewportWidth};
        `}
      `;
    })
  };
`;
