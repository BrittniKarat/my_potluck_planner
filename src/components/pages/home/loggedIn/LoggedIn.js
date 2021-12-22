import React from 'react';
import Styled from 'styled-components';
import EventCard from './EventCard';

const LoggedInContainer = Styled.div`
    display: flex;
    width: 100%;
    h2{
        margin-top: 0;
        margin-bottom: 4%;
        text-decoration: underline;
    }
`
const StyledUpcoming = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
`

const dummyEvent = {
    name: "Mary's Christmas Party",
    date: "12/25/21",
    time: '3:30PM',
    items: ['Ham', 'Chips'],
}

const LoggedIn = (props) => {
    return(
        <LoggedInContainer>
            <StyledUpcoming>
                <h2><strong>Upcoming Events</strong></h2>
                <EventCard event={dummyEvent} />
            </StyledUpcoming>
            
        </LoggedInContainer>
    )
}

export default LoggedIn;