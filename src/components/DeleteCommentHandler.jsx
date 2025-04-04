import { deleteComment } from "../api"
import { useState, useEffect } from 'react';
import { RingLoader } from 'react-spinners';


const DeleteCommentHandler = ({comment}) => {

  const [successfulDeleteMessage, setSuccessfulDeleteMessage] = useState(false)

  // const [error, setError] = useState([false]);

  // const [isLoading, setIsLoading] = useState([true]);

  // console.log(comment.comment_id)

  const deleteCurrentComment = () => {
    // setIsLoading(true)
    // setError(false)
    deleteComment(comment.comment_id)
    setSuccessfulDeleteMessage(true)
  }

  if (successfulDeleteMessage === true) return <p>Successfully deleted!</p>

  // if (error) return <p>oops, something went wrong!</p>

  // if (isLoading) return <RingLoader />


  return (
  <section>
    <button onClick={deleteCurrentComment}>Delete Comment</button>
  </section>
  )
}

export default DeleteCommentHandler