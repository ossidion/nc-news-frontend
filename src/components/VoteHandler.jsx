import { updateArticleVotesInc, updateArticleVotesDec } from "../api";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const VoteHandler = ({ article_id, votes }) => {
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const [userVote, setUserVote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleVote = (direction) => {
    if (userVote === direction) return;

    setIsLoading(true);
    setError(null);

    const voteChange = direction === 'up'
      ? (userVote === 'down' ? 2 : 1)
      : (userVote === 'up' ? -2 : -1);

    const apiCall = direction === 'up' ? updateArticleVotesInc : updateArticleVotesDec;

    setOptimisticVotes((curr) => curr + voteChange);
    setUserVote(direction);

    apiCall(article_id)
      .then(() => setIsLoading(false))
      .catch(() => {
        setOptimisticVotes((curr) => curr - voteChange);
        setUserVote(null);
        setError(`Failed to ${direction === 'up' ? 'upvote' : 'downvote'}. Please try again.`);
        setIsLoading(false);
      });
  };

  const voteTotal = votes + optimisticVotes;

  return (
    <div className={`vote-pill ${userVote}`}>
      <button
        onClick={() => handleVote('up')}
        aria-label="Upvote"
        disabled={isLoading}
        className="vote-icon"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>

      <span className="vote-text">
        {userVote ? voteTotal : "vote"}
      </span>

      <button
        onClick={() => handleVote('down')}
        aria-label="Downvote"
        disabled={isLoading}
        className="vote-icon"
      >
        <FontAwesomeIcon icon={faArrowDown} />
      </button>

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};

export default VoteHandler;
