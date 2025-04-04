import { reverseDate } from "../../utilityFunctions";
import { useContext } from 'react';
import { UserContext } from '../contexts/User'
import DeleteCommentHandler from "./DeleteCommentHandler";

function CommentCard({ comment }) {
  const {loggedInUser} = useContext(UserContext)
  if (loggedInUser === comment.author) {
    return (
      <>
        <section className="comment-card">
          <h4>{comment.author}</h4>
          <p className="comment-body">{comment.body}</p>
          <DeleteCommentHandler comment={comment}/>
          <p className="comment-created-at">{comment.created_at.slice(11, -8)}     
          {" on "}{reverseDate(comment.created_at)}</p>
          <p className="comment-list-votes">Votes: {comment.votes}</p>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="comment-card">
        <h4>{comment.author}</h4>
        <p className="comment-body">{comment.body}</p>
        <p className="comment-created-at">{comment.created_at.slice(11, -8)}     
        {" on "}{reverseDate(comment.created_at)}</p>
        <p className="comment-list-votes">Votes: {comment.votes}</p>
      </section>
    </>
  )
};

export default CommentCard;