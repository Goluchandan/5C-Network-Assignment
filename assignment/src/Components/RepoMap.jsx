import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const RepoMap = ({ data }) => {
  const navigate = useNavigate();

  const showData = (elem) => {
    localStorage.setItem("usersRepos", JSON.stringify(elem));
    navigate(`/${elem.id}`);
  };

  // console.log(data);
  return (
    <div>
      <div className={styles.main_container}>
        {data.map((elem, index) => {
          return (
            <div
              key={index}
              onClick={() => showData(elem)}
            >
              <h3>
                <b>Repo-Name :- </b>
                {elem.name}
              </h3>
              <p>
                <b>language :- </b> {elem.language}
              </p>
              <p>
                {" "}
                <b>visibility :- </b>
                {elem.visibility}
              </p>
              <p>
                <b>created_at :- </b>
                {elem.created_at}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RepoMap;
