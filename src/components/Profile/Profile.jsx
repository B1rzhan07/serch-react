import React from "react";
import Hero from "../Music/Hero";
import classes from "./Profile.module.css";
import { Link } from "react-router-dom";
const Profile = () => {
  let newPost = React.createRef();
  let addPost = () => {
    let text = newPost.current.value;
    alert(text);
  };
  return (
    <div>
      <Hero text="Myself" />
      <div className={classes.profile}>
        <div className={classes.img}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9cnEvZ98kadKb7ZIhW20sXOTNVlEsH1q4Q&usqp=CAU"
              alt=""
            />
        </div>
        <div className={classes.table}></div>
            <ul>
              <li>
                <Link to="/dialogue">Friends</Link>: 150
              </li>
              <li>
                <Link to="/music">Tracks</Link>: 20
              </li>
              <li>
                <Link to="/">Favourites</Link>: 30
              </li>
            </ul>
            <span>About me:</span>
            <input ref={newPost}></input>
            <button onClick={addPost}>Sumbit</button>
        </div>
      </div>
  );
};

export default Profile;
