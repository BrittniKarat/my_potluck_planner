import React from 'react';
import Styled from 'styled-components';

const StyledEvent = Styled.div`
    border: 3px solid ${props => props.theme.primaryColor};
    border-radius: 15px;
    width: 80%;
    p{
        margin: 0;
    }

    .Card{
        margin: 4% 0;
    }
`

const EventCard = (props) => {
    const {event} = props;

    return(
        <StyledEvent>
            <div className='Card'>
                <p>{event.name}</p>
                <p>{event.date} {event.time}</p>
                <p>You're bringing: {event.items.join(', ')}</p>
            </div>
        </StyledEvent>
    )
}

export default EventCard;