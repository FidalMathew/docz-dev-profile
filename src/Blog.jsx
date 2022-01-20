// https://dev.to/api/articles?username=fidalmathew
import React, { useEffect, useState } from 'react';
import './user.css'

function Blog(props) {

    const [blog, setBlog] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            try {
                const res = await fetch(`https://dev.to/api/articles?username=${props.username}`, {
                    headers: {
                        'Accept': 'application/vnd.github.v3+json'
                    }
                });

                // console.log(res.json());
                const data = await res.json();
                console.log(data)
                setBlog(data);

            } catch (error) {
                console.log(error)
            }

        }
        fetchData();

    }, [props.username]);


    return (<><h2>My Articles on Dev.to</h2>
        <div className='card_container'>
            {blog.map((val) => {
                return (<div className='card'>

                    <img className='article_img' src={val.cover_image || val.social_image} alt="article" />
                    <a href={val.url} target="_blank" rel="noreferrer"> <h2>   {val.title}  </h2></a>

                </div >)
            })
            }
        </div></>)
}

export { Blog };
