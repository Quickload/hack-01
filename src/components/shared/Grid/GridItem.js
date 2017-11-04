import React from 'react';
import PropTypes from 'prop-types';

import { StyledGridItem } from './components';

const GridItem = ({
  children,
  id,
  small,
  medium,
  large,
  orderSmall,
  orderMedium,
  orderLarge,
  gutters,
  className,
}) => (
  <StyledGridItem
    id={id}
    small={small}
    medium={medium}
    large={large}
    orderSmall={orderSmall}
    orderMedium={orderMedium}
    orderLarge={orderLarge}
    gutters={gutters}
    className={className}
  >
    {children}
  </StyledGridItem>
);

GridItem.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
  orderSmall: PropTypes.number,
  orderMedium: PropTypes.number,
  orderLarge: PropTypes.number,
  gutters: PropTypes.bool,
  className: PropTypes.string,
};

GridItem.defaultProps = {
  id: null,
  small: 12,
  medium: null,
  large: null,
  orderSmall: null,
  orderMedium: null,
  orderLarge: null,
  gutters: false,
  className: null,
};

export default GridItem;
