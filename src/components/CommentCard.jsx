import DeleteCommentHandler from "./DeleteCommentHandler";
import { reverseDate } from "../../utilityFunctions";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

function CommentCard({ comment, className, onDelete }) {
  const { loggedInUser } = useContext(UserContext);
  const combinedClassName = `comment-card ${className || ""}`.trim();

  if (loggedInUser === comment.author) {
    return (
      <div className={combinedClassName}>
        <h4>{comment.author}</h4>
        <p className="comment-body">{comment.body}</p>
        <DeleteCommentHandler comment={comment} onDelete={onDelete}/>
        <p className="comment-created-at">
          {comment.created_at.slice(11, -8)} on {reverseDate(comment.created_at)}
        </p>
        <p className="comment-list-votes">Votes: {comment.votes}</p>
      </div>
    );
  }

  return (
    <section className={combinedClassName}>
      <h4 className="comment-author">{comment.author}</h4>
      <p className="comment-body">{comment.body}</p>
      <p className="comment-created-at">
        {comment.created_at.slice(11, -8)} on {reverseDate(comment.created_at)}
      </p>
      <p className="comment-list-votes">Votes: {comment.votes}</p>
    </section>
  );
}

export default CommentCard;
