import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './style.module.css';

const FolowersName = () => {
  const [folloData, setfolloData] = useState([]);
  const [loading, setLoading] = useState(true);
  const folowData = () => {
    let obj = JSON.parse(localStorage.getItem("follow")) || {};
    fetch(obj)
      .then((res) => res.json())
      .then((data) => setfolloData(data));
      setLoading(false);
  };
  useEffect(() => {
    folowData();
  }, []);

  console.log(folloData);

  const navigate = useNavigate();

  const FoloRepoData = (elem) => {
    localStorage.setItem("foloRepo", JSON.stringify(elem.repos_url));
    navigate(`/folowerRepo${elem.id}`);
  };
  return loading ? ("Loading....."):(
    <div className={styles.followerData}>
      {folloData.map((elem, i) => {
        return (
          <div key={i} onClick={() => FoloRepoData(elem)}>
            <img src={elem.avatar_url} alt="" />
            <h1>{elem.login}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default FolowersName;
