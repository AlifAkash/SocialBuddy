import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const url = "https://jsonplaceholder.typicode.com/posts"
      fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

    // useEffect(() => {
    //   const url = "http://newsapi.org/v2/everything?domains=wsj.com&apiKey=e8a89caab3e1497c9a86d5fa964e90fb"
    //   fetch(url)
    //   .then(res => res.json())
    //   .then(data => setArticles(data.articles))
    // },[])


    return (
        <div>
            <h1>WellCome To Social Buddy WebSite</h1>
            {
                posts.map(post => <Post post = {post} key = {post.id}></Post>)
            }
        </div>
    );
};

export default Home;