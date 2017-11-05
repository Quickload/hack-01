import React from 'react';
import styled, {keyframes} from 'styled-components';

const LoaderWrapper = styled.div`
  position: relative;
  margin: 200px 0;
`;

const loaderAnimation = keyframes`
  17% {border-bottom-right-radius: 3px;}
  25% {transform: translateY(9px) rotate(22.5deg);}
  50% {transform: translateY(18px) scale(1, .9) rotate(45deg); border-bottom-right-radius: 40px;}
  75% {transform: translateY(9px) rotate(67.5deg);}
  100% {transform: translateY(0) rotate(90deg);}
`;

const shadowAnimation = keyframes`
  0%, 100% {transform: scale(1, 1);}
  50% {transform: scale(1.2, 1);}
`;

const StyledLoader = styled.div`
  width: ${({theme}) => theme.spacing.large}px;
  height: ${({theme}) => theme.spacing.large}px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  &:before {
    content: '';
    width: ${({theme}) => theme.spacing.large}px;
    height: 5px;
    background: ${({theme}) => theme.colors.dark};
    opacity: 0.1;
    position: absolute;
    top: 59px;
    left: 0;
    border-radius: 50%;
    animation: ${shadowAnimation} .5s linear infinite;
  }
  &:after {
    content: '';
    width: ${({theme}) => theme.spacing.large}px;
    height: ${({theme}) => theme.spacing.large}px;
    background: ${({theme}) => theme.colors.primary.base};
    animation: ${loaderAnimation} .5s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px;
  }
`;

export const QuickLoader = ({props}) => (
  <LoaderWrapper>
    <StyledLoader />
  </LoaderWrapper>
);

export default QuickLoader;
