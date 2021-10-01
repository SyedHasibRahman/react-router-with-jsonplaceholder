import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './friends.css'

const Friends = () => {
    const [friends, setfriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setfriends(data));
    }, [])
    return (
        <div>
            <h3>This is Friend {friends.length}</h3>
            <div className="friends-container">
                {
                    friends.map(friend => <Friend
                        key={friend.id}
                        friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;