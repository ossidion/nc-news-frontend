import { updateArticleVotesInc } from "../api";
import { updateArticleVotesDec } from "../api";
import { useState } from "react";

const VoteHandler = ({ article_id }) => {
  
  const [optimisticVotes, setOptimisticVotes] = useState(0)
  
  const handleUpVote = () => {
    updateArticleVotesInc(article_id.article_id).catch(() => {
      setOptimisticVotes((currOptimisticVotes) => {
        return currOptimisticVotes - 1
      })
    })
    setOptimisticVotes((currOptimisticVotes) => {
      return currOptimisticVotes + 1
    })
  }

  const handleDownVote = () => {
    updateArticleVotesDec(article_id.article_id).catch(() => {
      setOptimisticVotes((currOptimisticVotes) => {
        return currOptimisticVotes + 1
      })
    })
    setOptimisticVotes((currOptimisticVotes) => {
      return currOptimisticVotes - 1
    })
  }

  return (
  <div>
    <p className="article-votes">Votes: {article_id.votes + optimisticVotes}</p>
    <button onClick={handleUpVote}>Up Vote</button>
    <button onClick={handleDownVote}>Down Vote</button>

  </div>
  )
}

export default VoteHandler