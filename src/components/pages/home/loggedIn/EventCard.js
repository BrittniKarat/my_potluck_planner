import React from 'react';
import Styled from 'styled-components';

const StyledEvent = Styled.div`

`

const EventCard = (props) => {
    const {event} = props;

    return(
        <StyledEvent>
            <p>{event.name}</p>
            <p>{event.date} {event.time}</p>
            <p>You're bringing: {event.items.join(', ')}</p>
        </StyledEvent>
    )
}

export default EventCard;