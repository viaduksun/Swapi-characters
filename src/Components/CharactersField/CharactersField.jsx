import React, { useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import styles from "./CharactersField.module.scss";

const CharactersField = ({ characters }) => {
  const [active, setActive] = useState(null);
  if (!characters) {
    return null;
  }
  const handleAccordionClick = (id) => {
    if (active === id) {
      return setActive(null);
    }
    setActive(id);
  };
  return (
    <div className={styles.CharactersField}>
      {characters.map((character) => (
        <CharacterCard
          character={character}
          handleClick={handleAccordionClick}
          isActive={active}
          key={character.created}
        />
      ))}
    </div>
  );
};

export default CharactersField;
