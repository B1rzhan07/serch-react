import React from "react";
import classes from "./Dialog.module.css";
import Hero from "../Music/Hero";
import { Link } from "react-router-dom";
let dialogName=[
  {name: "Almaz", id:1},
  {name: "Naziya", id:2},
  {name: "Angsar", id:3},
  {name: "Daulet", id:4},
  {name: "Rustem", id:5},
  {name: "Islam", id:6},
  {name: "Maksat", id:7},
  {name: "Symbat", id:8}

]
const AllDial = (props) => {
  let path = "/dialogue/" + props.id;
  return (
    <div className={classes.text}>
      
      <Link to={path} className={classes.btn}>
        {props.name}
      </Link>
      <textarea cols="20" rows="2" className={classes.border}></textarea>
      <button className={classes.border}>Send</button>
    </div>
  );
};

const Dialogs = () => {
  return (
    <div>
      <Hero text="Communication" />
      <div className={classes.btn}>
        <AllDial name={dialogName[0].name} id={dialogName[0].id} />
        <AllDial name={dialogName[1].name} id={dialogName[1].id} />
        <AllDial name={dialogName[2].name} id={dialogName[2].id} />
        <AllDial name={dialogName[3].name} id={dialogName[3].id} />
        <AllDial name={dialogName[4].name} id={dialogName[4].id} />
        <AllDial name={dialogName[5].name} id={dialogName[5].id} />
        <AllDial name={dialogName[6].name} id={dialogName[6].id} />
        <AllDial name={dialogName[7].name} id={dialogName[7].id} />
      </div>
    </div>
  );
};

export default Dialogs;
