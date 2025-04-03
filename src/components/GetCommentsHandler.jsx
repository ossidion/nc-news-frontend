import CommentCard from "./CommentCard"
import { getComments } from "../api"
import { useEffect, useState } from "react"

function GetCommentsHandler({ article }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article.article_id)
    .then(({ comments }) =>{
      setComments(comments)
        })
  }, [])

  
  // function handleClick () {
  //   getComments(article.article.article_id)
  //   .then((comments) => {
  //     console.log(comments.data)
  //     return <div>Hello</div>
  //   })
  //   return <div>Hello</div>

  // }

  
  return (
    <section>
        {comments.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />
        })}
    </section>
  )
}

export default GetCommentsHandler