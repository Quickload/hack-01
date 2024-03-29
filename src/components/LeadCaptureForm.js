import React from 'react';
import { pure } from 'recompose';
import styled from 'styled-components';

const ContactSpan = styled.span`
    font-size: 20px;
`

const OrangeHr = styled.hr`
    height: 6px;
    background-color: rgb(248,137,0);
    width: 100%;
    border: none !Important;
`

const FormLabel = styled.label`
    font-size: 15px;
    line-height: 20px;
    color: rgb(125,125,125);
`

const FormWrapper = styled.form`
    padding-bottom: 25px;
`

const LeadCaptureForm = ({ job, name, phone, email, handleChange }) => {
    const onChange = e => {
        const text = e.target.value;
        switch (e.target.name) {
            case 'name':
                handleChange(text, phone, email);
                break;
            case 'phone':
                handleChange(name, text, email);
                break;
            case 'email':
                handleChange(name, phone, text);
                break;
            default:
                console.log('unknown input name');
        }
    }

    return (
        <div className="container whiteBG">
            <div className="details">
                <div className="row">
                    <div className="col-12">
                        <ContactSpan>How do we contact you?</ContactSpan>
                    </div>
                    <div className="col-6">
                        <span className="city">{job.PickCity} - {job.DropCity}</span>
                    </div>
                    <div className="col-6 textRight">
                        <span className="city">{job.QuotePrice}</span>
                    </div>
                    <OrangeHr />
                </div>
                <FormWrapper>
                    <div className="form-group">
                        <FormLabel for="name">FULL NAME</FormLabel>
                        <input onChange={onChange} name="name" type="text" className="form-control" id="name" aria-describedby="name" placeholder="John Smith" value={name} />
                    </div>
                    <div className="form-group">
                        <FormLabel for="phone">MOBILE NUBMER</FormLabel>
                        <input onChange={onChange} type="text" name="phone" className="form-control" id="phone" aria-describedby="phone" placeholder="(305) 555-1212" value={phone} />
                    </div>
                    <div className="form-group">
                        <FormLabel for="email">E-MAIL</FormLabel>
                        <input onChange={onChange} name="email" type="email" className="form-control" id="email" aria-describedby="email" placeholder="jsmith@mail.com" value={email} />
                    </div>
                </FormWrapper>
            </div>
        </div>
    )
}


export default pure(LeadCaptureForm)