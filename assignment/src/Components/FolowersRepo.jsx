import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
const Folowers = () => {
  const [folloRepo, setFolloRepo] = useState([]);
  const navigate = useNavigate()

  const folowerNData = () => {
    let obj = JSON.parse(localStorage.getItem("foloRepo")) || {};
    fetch(obj)
      .then((res) => res.json())
      .then((data) => setFolloRepo(data));
  };
  useEffect(() => {
    folowerNData();
  }, []);
  console.log(folloRepo);
  return (
    <>
      <button onClick={() => {navigate("/")}} className={styles.goback}>go back to the repository </button>
      <div className={styles.followerRepo}>
        {folloRepo.map((elem, index) => {
          return (
            <div key={index}>
              <h3>
                <b>Repo-Name :- </b>
                {elem.name}
              </h3>
              <p>
                <b>language :- </b> {elem.language}
              </p>
              <p>
                {" "}
                <b>visibilityisibility :- </b>
                {elem.visibility}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Folowers;
