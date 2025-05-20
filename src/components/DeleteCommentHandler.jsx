import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const DeleteCommentHandler = ({ comment, onDelete }) => {

  const deleteCurrentComment = () => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      onDelete(comment.comment_id);
    }
  };

  return (
    <button
      className="delete-comment-button"
      onClick={deleteCurrentComment}
      aria-label="Delete comment"
      title="Delete comment"
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}

export default DeleteCommentHandler