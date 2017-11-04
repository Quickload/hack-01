import React from 'react';
import PropTypes from 'prop-types';

import { StyledGrid } from './components';

export const Grid = ({
  children,
  id,
  gutters,
  around,
  between,
  start,
  center,
  end,
  top,
  middle,
  bottom,
  className,
}) => (
  <StyledGrid
    id={id}
    gutters={gutters}
    around={around}
    between={between}
    start={start}
    center={center}
    end={end}
    top={top}
    middle={middle}
    bottom={bottom}
    className={className}
  >
    {React.Children.map(
      children,
      child => child && React.cloneElement(child, { gutters })
    )}
  </StyledGrid>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  gutters: PropTypes.bool,
  around: PropTypes.bool,
  between: PropTypes.bool,
  start: PropTypes.bool,
  center: PropTypes.bool,
  end: PropTypes.bool,
  top: PropTypes.bool,
  middle: PropTypes.bool,
  bottom: PropTypes.bool,
  className: PropTypes.string,
};

Grid.defaultProps = {
  id: null,
  gutters: false,
  around: false,
  between: false,
  start: false,
  center: false,
  end: false,
  top: false,
  middle: false,
  bottom: false,
  className: null,
};

export default Grid;
