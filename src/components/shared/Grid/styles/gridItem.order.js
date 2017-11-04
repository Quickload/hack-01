import { css } from 'styled-components';

import mediaQuery from '../../../shared/helpers/mediaQuery';

export default css`
  ${({orderSmall}) => orderSmall && mediaQuery.small`
    order: ${props.orderSmall};
  `} ${({orderMedium}) => orderMedium && mediaQuery.medium`
    order: ${props.orderMedium};
  `} ${({orderLarge}) => orderLarge && mediaQuery.large`
    order: ${props.orderLarge};
  `};
`;
