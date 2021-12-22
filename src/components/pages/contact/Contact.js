import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.div`
    margin: 2% 0;
    
    div{
        width: 100%;
        text-align: center;
        font-size: 1.6rem;
    }

    h1{
        margin-top: 0;
        font-size: 2.75rem;
    }
`

const Contact = (props) => {
    return (
        <StyledContact>
            <div>
                <h1>Contact</h1>
            </div>
            <div className="contact">
                <h2>Phone</h2>
                <p>1-800-123-1234</p>
                <h2>Email</h2>
                <p>planner@potluck.com</p>
            </div>
        </StyledContact>
    )
}

export default Contact;