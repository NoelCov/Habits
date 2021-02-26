import React from "react";
import axios from "axios";

export default function Item(props){

  function handleonClick(event) {
    let name = event.target.innerHTML;

    axios.delete('habits/habit/' + name)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
    window.location.reload()
  }

  return (
      <a href="#" className="habit-element list-group-item list-group-item-action list-group-item-dark"
      onClick={handleonClick}
      >{props.element}</a>
  )}


