import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./style.module.css";

const RepoDetails = () => {
  const [data, setData] = useState({});

  const getData = () => {
    let obj = JSON.parse(localStorage.getItem("usersRepos")) || {};
    console.log(obj);
    setData(obj);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.container}>
      <div>
        <div>
          <h3>
            <b>Repo-Name :- </b>
            {data.name}
          </h3>
          <p>
            <b>language :- </b> {data.language}
          </p>
          <p>
            {" "}
            <b>visibility :- </b>
            {data.visibility}
          </p>
          <p>
            <b>created_at :- </b>
            {data.created_at}
          </p>
        </div>
        <h3>
          <b>Description :- </b>
          {data.description}
        </h3>
      </div>
    </div>
  );
};

export default RepoDetails;
