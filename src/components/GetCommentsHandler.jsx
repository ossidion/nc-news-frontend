import CommentCard from "./CommentCard";

function GetCommentsHandler({ comments, newlyAddedCommentId, onDelete, commentBeingDeletedId }) {
  return (
    <section>
      {comments.map((comment) => (
        <CommentCard
          comment={comment}
          key={comment.comment_id}
          className={comment.comment_id === newlyAddedCommentId ? 'new-comment' : ''}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}

export default GetCommentsHandler;
