import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledQuestion = styled.div`
    margin-top: .5%;
    border: 2px solid black;
    border-radius: 10px;
    width: 60%;
    display: flex;
    justify-content: space-between;

    button{
        border:none;
        background-color: transparent;
        width: 4%;
    }
    button:hover{
        cursor: pointer;
    }
`

const StyledAnswer = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    background-color: #FFCC96;
    text-shadow: 2px 2px 2px black;
    color: white;
    height: auto;
    width: 60%;
    font-size: 1rem;

    a{
        margin: 4% 0;
        font-size: 1.2rem;
        text-shadow: none;
        border-bottom: none;
        
    }
`

const Question = (props) => {
    const {question, answer, link, linkText} = props;
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledQuestion onClick={() => setOpen(!open)}>
                <h3>{question}</h3>
                <button>{open ? <>&#9650;</>: <>&#9660;</>}</button>
            </StyledQuestion>
            {open && (
                <StyledAnswer>
                    <p>{answer}</p>
                    {link && <Link to={link}>{linkText}</Link>}
                </StyledAnswer>
            )}
        </>
    )
}

export default Question;