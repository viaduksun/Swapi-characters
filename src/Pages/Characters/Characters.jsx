import React, { useEffect, useState } from "react";
import getCharacters from "../../api/getCharacters";
import CharactersField from "../../Components/CharactersField/CharactersField";
import Loader from "../../Components/Loader/Loader";
import Pagination from "../../Components/Pagination/Pagination";
import styles from "./Characters.module.scss";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [pagesCount, setPagesCount] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getCharacters(currPage)
      .then((res) => {
        setCharacters(res.data.results);
        setPagesCount(Math.ceil(res.data.count / 10));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currPage]);
  const setCurrentPage = (value) => {
    setCurrPage(value);
  };
  return (
    <div className={styles.charactersPage}>
      <div className="container">
        <h1 className={styles.pageTitle}>Characters</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <CharactersField characters={characters} />
            <Pagination
              pagesCount={pagesCount}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Characters;
