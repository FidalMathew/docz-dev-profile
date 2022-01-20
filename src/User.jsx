import React, { useEffect, useState } from 'react';
import './user.css'
function User(props) {

    const [user, setUser] = useState({})

    useEffect(() => {

        const fetchData = async () => {

            try {
                const res = await fetch(`https://api.github.com/users/${props.username}`, {
                    headers: {
                        'Accept': 'application/vnd.github.v3+json'
                    }
                });

                const data = await res.json();
                console.log(data)
                setUser(data);

            } catch (error) {
                console.log(error)
            }

        }
        fetchData();

    }, [props.username]);


    return (<div className='user_desc'>

        <div>  <img className='profile_pic' src={user.avatar_url} alt="profile_img" /></div>
        <h1 > {user.name}</h1>
    </div>);
}

export { User };
