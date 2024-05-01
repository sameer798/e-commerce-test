import React from "react";
import classes from './Button.module.css';

export default function Button(props) {
  return (
    <div className={classes.btn}>
      <button type={props.type} id={props.id} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
}
