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
const StyledLeftSide = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
`
const StyledRightSide = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid blue;
`

const dummyEvents = [
    {
        name: "Mary's Christmas Party",
        date: "12/25/21",
        time: '3:30PM',
        items: ['Ham', 'Chips'],
        isOrganizer: false
    },
    {
        name: "New Years work party 2022!",
        date: "01/01/22",
        time: '3:30PM',
        items: [],
        isOrganizer: true
    }
]


const LoggedIn = (props) => {
    return(
        <LoggedInContainer>
            <StyledLeftSide>
                <h2><strong>Upcoming Events</strong></h2>
                <EventCard event={dummyEvents[0]} />
                <EventCard event={dummyEvents[1]} />
            </StyledLeftSide>

            <StyledRightSide>
                
            </StyledRightSide>
            
        </LoggedInContainer>
    )
}

export default LoggedIn;