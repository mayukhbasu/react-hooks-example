import React, {useEffect, useState} from 'react';
import axios from 'axios';

//https://jsonplaceholder.typicode.com/posts
function DataFetching() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdfromButtonclick] = useState(1);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => {
           console.log(response);
           setPost(response.data);
        })
    }, [idFromButtonClick]);
    const handleClick = () => {
        setIdfromButtonclick(id);
    }
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
        </div>
    );
}

export default DataFetching;