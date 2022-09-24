import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const Owner = ({ ownerData }) => {
  const navigate = useNavigate();
  const showFollower = (elem) => {
    localStorage.setItem("follow", JSON.stringify(elem.owner.followers_url));
    navigate(`/folowers${elem.id}`);
  };
  return (
    <div className={styles.ownerDetails}>
      {ownerData.map((elem, i) => {
        return (
          <>
            {i <= 0 ? (
              <div>
                <img src={elem.owner.avatar_url} alt="" />
                <div>
                  <h3>{elem.owner.login}</h3>
                  <button onClick={() => showFollower(elem)}>Followers</button>
                </div>
              </div>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default Owner;
