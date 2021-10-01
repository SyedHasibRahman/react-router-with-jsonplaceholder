import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    console.log(friendId);
    const [friend, setFriend] = useState([]);
    const history = useHistory();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, []);
    const handleClick = () => {
        history.push('/friends');
    }
    return (
        <div>
            <h2>FriendDetail : {friendId}</h2>
            <h3>{friend.name}</h3>
            <h3>{friend.phone}</h3>
            <p>Work at: {friend.company?.name}</p>
            <button onClick={handleClick}>See All Friends</button>
        </div>
    );
};

export default FriendDetail;