import React from 'react';
import Styled from 'styled-components';
import EventCard from './EventCard';

const LoggedInContainer = Styled.div`

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
            <EventCard event={dummyEvent} />
        </LoggedInContainer>
    )
}

export default LoggedIn;