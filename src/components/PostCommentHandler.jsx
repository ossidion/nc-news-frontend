import { postComment } from "../api";
import { useState } from 'react';

const PostCommentHandler = ({ article_id, addNewComment }) => {

  const [commentInput, setCommentInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    setCommentInput(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    try {
      const newComment = await postComment(article_id, commentInput);
      addNewComment(newComment);
      setCommentInput('');
    } catch (error) {
      setErrorMessage('Failed to post comment. Please try again.');
    }
  }

  return (
    <section>
      {errorMessage && <p style={{ color: 'red', marginBottom: '0.5rem' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="post-comment-form">
        <textarea
          value={commentInput}
          onChange={handleChange}
          placeholder="Share your thoughts..."
          className="post-comment-textarea"
          required
        />
        <button type="submit" className="post-comment-button" disabled={!commentInput.trim()}>
          Post
        </button>
      </form>
    </section>
  )
}

export default PostCommentHandler