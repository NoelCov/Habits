import React, { useState } from "react";
import axios from "axios";

function Item(props){

  function handleonClick(event) {
    let name = event.target.innerHTML;

    axios.delete('habits/' + name)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
    window.location.reload()
  }

  return <a href="#" className = "habit-element list-group-item list-group-item-action list-group-item-dark"
  onClick={handleonClick}
  >{props.element}</a>
}

export default Item;

