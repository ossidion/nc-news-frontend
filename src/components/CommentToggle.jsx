import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const CommentToggle = ({ toggleComments, commentCount, active }) => {
  return (
    <button
      className={`pill comment-pill${active ? ' active' : ''}`}
      onClick={toggleComments}
      aria-label="Toggle comments"
      type="button"
    >
      <FontAwesomeIcon icon={faComment} className="icon" />
      <span>{commentCount}</span>
    </button>
  );
};

export default CommentToggle;
