import { firestore } from '../firebase';
import { useFormInput } from "../hooks";
import styled, { css } from 'styled-components';

//this is module css file which only can affect changes in this component only
// import classes from './Style.module.css';

const StyledButton = styled.button`
  height: 33px;
  background: ${(props) => (props.primary ? '#4caf50' : 'lightblue')}; //primary is used in button so the color is 4caf50 or if not used then lightblue
  border: 0;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  ${(props) =>
    props.primary && css`
      border: 4px solid ${props.border};
    `
  }
`;

function CreatePost() {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log('Title', title)
    console.log('Sub-Title', subTitle)
    console.log('Content', content)

    firestore.collection('posts').add({
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date()
    });
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>
        {/* this is css module */}
        {/* <button className={classes.btn}>Create Post</button> */}
        {/* dynamic css with props */}
        <StyledButton primary border="darkgreen">Create Post</StyledButton>
      </form>
    </div>
  );
}

export default CreatePost;