import React from 'react';
import { pure } from 'recompose';
import styled from 'styled-components';

import partyImage from '../images/iconParty.png';

import App from './App';

import { Link } from 'react-router-dom';

const CongratsWrapper = styled.div`
    margin: ${({ theme }) => theme.spacing.xsmall}px ${({ theme }) => theme.spacing.small}px;
    text-align: center;
`;

const H1Wrapper = styled.h1`
    font-size: 44px;
    font-weight: bold;
`;

const H2Wrapper = styled.h2`
    font-size: 28px;
`;

const ImageWrapper = styled.img`
    margin-top: 50px;
    margin-bottom: 50px;
`;

const FinishedButton = styled(Link) `
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary.base};
    margin-bottom: 25px;
`;

const Congrats = () => (
    <App>
        <CongratsWrapper>
            <div className="container whiteBG">
                <div className="details">
                    <div className="row">
                        <div className="col-12">
                            <H1Wrapper>Congrats!</H1Wrapper>
                        </div>
                        <div className="col-12">
                            <H2Wrapper>We will contact you shortly.</H2Wrapper>
                        </div>
                        <div className="col-12">
                            <ImageWrapper className="img-responsive" src={partyImage} alt="Congrats" />
                        </div>
                        <div className="col-12">
                            <FinishedButton className="btn" to="/search">FIND MORE JOBS</FinishedButton>
                        </div>
                    </div>
                </div>
            </div >
        </CongratsWrapper>
    </App >
);

export default pure(Congrats)
