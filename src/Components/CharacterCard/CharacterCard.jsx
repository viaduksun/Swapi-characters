import React, { useEffect, useState } from "react";
import CommentsBlock from "../CommentsBlock/CommentsBlock";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import styles from "./CharacterCard.module.scss";
import classNames from "classnames";
import Loader from "../Loader/Loader";
import { Button, withStyles } from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
  root: {
    color: "white",
    // backgroundColor: "rgb(204, 104, 91)",
    backgroundColor: "rgb(87, 87, 87)",
    "&:hover": {
      backgroundColor: "rgb(54, 54, 54)",
    },
  },
}))(Button);

const CharacterCard = ({ character }) => {
  // console.log(character);
  const [comments, setComments] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isNoComments, setIsNoComments] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (character) {
      setIsLoading(false);
    }
  }, [character]);

  useEffect(() => {
    setComments([]);
    setIsNoComments(true);
    const commentsFromLocal = localStorage.getItem(character.created);
    if (commentsFromLocal) {
      setComments(JSON.parse(commentsFromLocal));
      setIsNoComments(false);
    }
  }, [character.created]);
  const handleInput = (e) => {
    setCurrentText(e.target.value);
  };
  const handleComment = (e) => {
    e.preventDefault();
    if (currentText.trim()) {
      const newComment = {
        text: currentText,
        id: Date.now(),
        date: new Date().toLocaleString(),
      };
      setComments([newComment, ...comments]);
      setCurrentText("");
      localStorage.setItem(
        character.created,
        JSON.stringify([newComment, ...comments])
      );
      setIsActive(true);
      setIsNoComments(false);
    }
  };
  const handleClick = () => {    
    setIsActive(!isActive);
  };
  return (
    <div className={styles.characterCardWrapper}>
      <div className={styles.characterCard}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className={styles.characterData}>
              <div className={styles.avatar}>Avatar</div>
              <div className={styles.data}>
                <div className={styles.dataItem}>
                  <div className={styles.title}>Name:</div>
                  <div className={styles.value}>{character.name}</div>
                </div>
                <div className={styles.dataItem}>
                  <div className={styles.title}>Birth year:</div>
                  <div className={styles.value}>{character.birth_year}</div>
                </div>
                <div className={styles.dataItem}>
                  <div className={styles.title}>Gender:</div>
                  <div className={styles.value}>{character.gender}</div>
                </div>
                <div className={styles.dataItem}>
                  <div className={styles.title}>Height:</div>
                  <div className={styles.value}>{character.height}</div>
                </div>
              </div>
            </div>
            <div className={styles.formWrapper}>
              <form className={styles.form}>
                <textarea
                  className={styles.textarea}
                  onChange={(e) => handleInput(e)}
                  value={currentText}
                />
                <div className={styles.actions}>
                  <ColorButton
                    variant="contained"
                    color="secondary"
                    startIcon={<SendIcon />}
                    onClick={(e) => handleComment(e)}
                    size="small"
                  >
                    Comment
                  </ColorButton>
                </div>
              </form>
            </div>
            <div className={styles.accord}>
              <div
                className={classNames(styles.accordBtn, {
                  [styles.accordBtn_active]: !isNoComments,
                })}
              >
                <IconButton
                  aria-label="delete"
                  onClick={() => handleClick()}
                  disabled={isNoComments}
                >
                  {isActive ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </div>
            </div>
          </>
        )}
      </div>
      <CommentsBlock comments={comments} isActive={isActive} />
    </div>
  );
};

export default CharacterCard;
