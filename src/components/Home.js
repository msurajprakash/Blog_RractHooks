import { useState, useEffect } from "react";
import { firestore } from '../firebase';
import { NavLink } from "react-router-dom";

//this is styled component
import styled from "styled-components";

const BlogHeading = styled.h1`
  text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
`;

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore
      .collection('posts')
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });

        console.log('posts', posts);
        setPosts(posts);
      });
  }, []);

  return (
    <div className="home">
      {/* this is styled-component */}
      <BlogHeading>Tech Blog</BlogHeading>
      <div id="blog-by">Suraj</div>

      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <NavLink to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </NavLink>

          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;