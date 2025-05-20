import GetCommentsHandler from "./GetCommentsHandler";
import VoteHandler from "./VoteHandler";
import PostCommentHandler from "./PostCommentHandler";
import CommentToggle from "./CommentToggle";
import { getArticleById, getComments, deleteComment } from "../api";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { RingLoader } from "react-spinners";
import { CSSTransition } from "react-transition-group";
import "../App.css";

function ArticleBody() {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [newlyAddedCommentId, setNewlyAddedCommentId] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  

  const commentNodeRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    Promise.all([getArticleById(id), getComments(id)])
      .then(([articleData, commentsData]) => {
        setArticle(articleData.updatedArticle);
        setComments(commentsData.comments);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  const toggleComments = () => {
    setCommentsVisible((prev) => !prev);
  };

  const addNewComment = (newComment) => {

    const date = newComment.created_at ? new Date(newComment.created_at) : new Date();
    date.setTime(date.getTime() + 3600000);

    const sanitizedComment = {
      comment_id: newComment.comment_id || `temp-id-${Date.now()}`,
      author: newComment.author || 'jessjelly',
      body: newComment.body || '',
      created_at: date.toISOString(),
      votes: typeof newComment.votes === 'number' ? newComment.votes : 0,
    };
    setNewlyAddedCommentId(sanitizedComment.comment_id);
    setComments(prevComments => [sanitizedComment, ...prevComments]);

  };

  useEffect(() => {
    if (newlyAddedCommentId !== null) {
      const timer = setTimeout(() => {
        setNewlyAddedCommentId(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [newlyAddedCommentId]);

  const deleteCommentOptimistically = (commentId) => {
    // Store previous state in case we need to roll back
    const previousComments = [...comments];
  
    setComments(currentComments =>
      currentComments.filter(comment => comment.comment_id !== commentId)
    );

    deleteComment(commentId).catch(() => {
      // If API fails, roll back
      setComments(previousComments);
      alert("Failed to delete comment. Please try again.");
    })}

  if (error) return <p>Oops, something went wrong!</p>;

  if (isLoading)
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RingLoader />
      </div>
    );

  return (
    <>
      <section className="article-card-body">
        <h2 className="article-title-body">{article.title}</h2>
        <p className="article-meta">Published by {article.author}</p>
        {article.article_img_url && (
          <img
            className="img-body"
            src={article.article_img_url}
            alt={article.title}
          />
        )}
        <p className="article-body">{article.body}</p>

        <div
          className="vote-and-comment-container"
          style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
        >
          <VoteHandler
            article_id={article.article_id}
            votes={article.votes}
          />
          <CommentToggle
            toggleComments={toggleComments}
            commentCount={comments.length}
            active={commentsVisible}
          />
        </div>

        <CSSTransition
          in={commentsVisible}
          timeout={300}
          classNames="comment-fade"
          unmountOnExit
          nodeRef={commentNodeRef}
        >
          <div className="comment-wrapper" ref={commentNodeRef}>
            <PostCommentHandler article_id={article.article_id} addNewComment={addNewComment}/>
            <GetCommentsHandler
            comments={comments}
            newlyAddedCommentId={newlyAddedCommentId}
            onDelete={deleteCommentOptimistically}
            />
            </div>
        </CSSTransition>
      </section>
    </>
  );
}

export default ArticleBody;
