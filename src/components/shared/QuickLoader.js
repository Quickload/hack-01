import React from 'react';
import styled, {keyframes} from 'styled-components';

const LoaderWrapper = styled.div`
  position: relative;
  height: 100px;
`;

const loaderAnimation = keyframes`
  0% { left: 0; height: 30px; width: 15px }
  50% { height: 8px; width: 40px }
  100% { left: 235px; height: 30px; width: 15px}
`;

const StyledLoader = styled.div`
  width: 250px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-weight: 900;
  color: ${({theme}) => theme.colors.primary.base};
  letter-spacing: 0.2em;

  :before,
  :after {
    display: block;
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: ${({theme}) => theme.colors.primary.base};
    animation: ${loaderAnimation} .7s infinite alternate ease-in-out;
  }

  :before {
    top: 0;
  }

  :after {
    bottom: 0;
  }
`;

export const QuickLoader = ({props}) => (
  <LoaderWrapper>
    <StyledLoader>
      quickloading
    </StyledLoader>
  </LoaderWrapper>
);

export default QuickLoader;
