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

const PostSubTitile = styled.p`
  font-size: 13px;
`;

const Post = styled.div`
  border: 1px solid #e1e1e1;
  padding: 10px 10px;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
  border: 1px solid #2196f3;
  }

  h3 {
  margin: 0;
  padding: 0;
  font-size: 25px;
  font-weight: bold;
  color: black;
  }

  a {
    text-decoration: none;
  }
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
        <Post key={`post-${index}`}>
          <NavLink to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </NavLink>

          <PostSubTitile>{post.subTitle}</PostSubTitile>
        </Post>
      ))}
    </div>
  );
}

export default Home;