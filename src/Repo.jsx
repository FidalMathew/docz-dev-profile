import React, { useEffect, useState } from 'react';
import './user.css'

function Repo(props) {

    const [repo, setRepo] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            try {
                const res = await fetch(`https://api.github.com/users/${props.username}/repos`, {
                    headers: {
                        'Accept': 'application/vnd.github.v3+json'
                    }
                });

                const data = await res.json();
                console.log(data)
                setRepo(data);

            } catch (error) {
                console.log(error)
            }

        }
        fetchData();

    }, [props.username]);


    return (<div>
        <h2>My Projects on Github</h2>
        {
            repo.map((val, ind) => {
                return (
                    <>

                        {(!val.fork && val.homepage) ?
                            <>
                                <div className='repos'>
                                    <h2 ><a href={val.homepage} target="_blank" rel="noreferrer"> {val.name}</a></h2>
                                    <p>forks {val.forks} | stars {val.stargazers_count} | <a href={val.svn_url}> View</a></p>
                                </div></> : ""}
                    </>)
            })
        }

    </div>);
}

export { Repo };
