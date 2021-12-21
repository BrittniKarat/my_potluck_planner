import React from 'react';
import styled from 'styled-components';
import Question from './Question';

const StyledFAQ = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2% 0;
`

const FAQ = (props) => {
    return (
        <StyledFAQ>
            <Question question={'How do you sign up?'} answer={'You go to our sign up page and enter your information!'} link={'/signup'} linkText={'Sign Up page'} />
            <Question question={'Where do you login?'} answer={'You go to our login page and enter your username and password!'} link={'/login'} linkText={'Login page'}/>
        </StyledFAQ>
    )
}

export default FAQ;