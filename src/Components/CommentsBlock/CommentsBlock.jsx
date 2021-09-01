import React from "react";
import classNames from "classnames";
import styles from "./CommentsBlock.module.scss";

const CommentsBlock = ({ comments, isActive }) => {
  // console.log(comments);
  const CommentsBlockStyles = classNames({
    [styles.CommentsBlock]: true,
    [styles.CommentsBlock_active]: isActive,
  });
  return (
    <div className={CommentsBlockStyles}>
      {comments.map((comment) => (
        <div className={styles.commentItem} key={comment.id}>
          <div className={styles.commentText}>{comment.text}</div>
          <div className={styles.commentDate}>{comment.date}</div>
        </div>
      ))}
    </div>
  );
};

export default CommentsBlock;
