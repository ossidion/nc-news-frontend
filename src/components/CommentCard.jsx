import { reverseDate } from "../../utilityFunctions";

function CommentCard({ comment }) {

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