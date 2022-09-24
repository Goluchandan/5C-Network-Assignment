import React, { useState } from "react";
import axios from "axios";
import RepoMap from "./RepoMap";
import Owner from "./Owner";
import styles from "./style.module.css";

const GitHub = () => {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  console.log(users);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .get(`https://api.github.com/users/${text}/repos`)
        .then((response) => {
          setUsers(response.data);
        });
    } catch (error) {
      alert("Repository dont exixts");
    }
  };
  return (
    <div>
      <form onClick={(e) => handleSubmit(e)} className={styles.github}>
        <input
          type="text"
          placeholder="Enter the repos here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">SUBMIT</button>
      </form>

      <div>
        <Owner ownerData={users} />
      </div>
      <div>
        <RepoMap data={users} />
      </div>
    </div>
  );
};

export default GitHub;
