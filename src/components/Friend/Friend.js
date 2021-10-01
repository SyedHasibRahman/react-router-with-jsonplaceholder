import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, address, id } = props.friend;
    const friendStyle = {
        border: '3px solid aqua',
        padding: '10px',
        borderRadius: '10px'
    }
    const history = useHistory();
    const url = `/friend/${id}`;
    const handleFriendClick = () => {
        history.push(`/friend/${id}`);
    }
    return (
        <div style={friendStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <address>{address.street}</address>
            <p>city:{address.city}</p>
            <Link to={url}>Visit me</Link> <br />
            <Link to={url}>
                <button>Visit Me</button>
            </Link>
            <button onClick={handleFriendClick}>Visit me 2</button>
        </div>
    );
};

export default Friend;