import React, { useState, useEffect } from 'react';

function Profile() {
    const [nickname, setNickname] = useState('');
    const [message, setMessage] = useState('');
    const [user_name, setUserName] = useState('');
    const fetchProfile = async () => {
        const response = await fetch('/api/current_user');
        const user = await response.json();
        setUserName(user.name);
        setNickname(user.nickname || '');
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/update_nickname', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nickname }),
        });
        const result = await response.json();
        setMessage(result.message);
    };

    return (
        <div>
        <h1>Profile</h1>
        <form onSubmit={handleSubmit}>
            <div>user name: {user_name}</div>

            <label>
            Nickname:
            <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
            />
            </label>
            <button type="submit">Save</button>
        </form>
        {message && <p>{message}</p>}
        </div>
    );
}

export default Profile;
