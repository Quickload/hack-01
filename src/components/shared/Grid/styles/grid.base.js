import { css } from 'styled-components';

export default css`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;

  ${props => props.around && `
    justify-content: space-around;
  `};

  ${props => props.between && `
    justify-content: space-between;
  `};

  ${props => props.bottom && `
    align-items: flex-end;
  `};

  ${props => props.center && `
    justify-content: center;
  `};

  ${props => props.end && `
    justify-content: flex-end;
  `};

  ${props => props.gutters && `
    margin: 0 -${props.theme.spacing.small}px;
  `};

  ${props => props.middle && `
    align-items: center;
  `};

  ${props => props.start && `
    justify-content: flex-start;
  `};

  ${props => props.top && `
    align-items: flex-start;
  `};
`;
