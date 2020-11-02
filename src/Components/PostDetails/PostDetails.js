import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const { postsId } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const { body } = post;

    const [comments, setComments] = useState([]);

    const loadData = () => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data));
    }

    useEffect(loadData, [])

    return (
        <div>
            <h2>Post details of Id: {postsId}</h2>
            <p>{body}</p>
            {
                comments.map(comment => <Comments comment={comment} key={comment.id}></Comments>)
            }
        </div>
    );
};

export default PostDetails;