import { postComment } from "../api";
import { useState } from 'react';

const PostCommentHandler = ({  article_id }) => {

  const [commentInput, setCommentInput] = useState('');

  const [successfulCommentMessage, setSuccessfulCommentMessage] = useState(false)

  const handleChange = (event) => {
    // event.preventDefault();
    setCommentInput(event.target.value)
  }


  const handleSubmit = (event) => {
    setSuccessfulCommentMessage(false)

    event.preventDefault();
    postComment(article_id.article_id, commentInput)
    setSuccessfulCommentMessage(true)
    setCommentInput(() => {
      return ""
    })
  }

  if (successfulCommentMessage === true) return <p>Successfully commented!</p>

  return (
    <section className="post-comment-form">
      <form onSubmit={handleSubmit}>
        <label>Post Comment..
          <input type="text" onChange={handleChange} value={commentInput}></input>
        </label>
        <button type="submit">Post</button>
      </form>
      <p>{}</p>
    </section>
  )
}

export default PostCommentHandler