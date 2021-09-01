import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import "./pagination.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
    ul: {
      "& > *": {
        border: "#fff",
      },
    },
  },
}));
const StyledPagination = withStyles({
  root: {
    "& .MuiPaginationItem-outlined": {
      border: "1px solid rgb(160, 74, 74)",
      color: "rgb(160, 74, 74)",
    },
    "& .Mui-selected": {
      border: "1px solid red",
      color: "white",
      backgroundColor: "rgba(255, 0, 0, 0.2)",
    },
    "& .MuiPaginationItem-ellipsis": {
      color: "white",
    },
  },
})(Pagination);

export default function PaginationRounded({ pagesCount, setCurrentPage }) {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
    setCurrentPage(value);
  };

  return (
    <div className="pg-container">
      <div className={classes.root}>
        <StyledPagination
          count={pagesCount}
          variant="outlined"
          shape="rounded"
          size="large"
          page={page}
          onChange={handlePageChange}
          color="secondary"
        />
      </div>
    </div>
  );
}
