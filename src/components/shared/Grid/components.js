import styled from 'styled-components';

import gridBase from './styles/grid.base';
import gridItemBase from './styles/gridItem.base';
import gridItemGutters from './styles/gridItem.gutters';

export const StyledGrid = styled.div`
  ${gridBase}
`;

export const StyledGridItem = styled.div`
  ${gridItemBase}
  ${gridItemGutters};
`;
