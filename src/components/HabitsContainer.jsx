import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useAuth } from "../Contexts/AuthContext";
const axios = require("axios");

function HabitsContainer(){
  const [habitList, setList] = useState([]);
  const [controller, setController] = useState(false);
  const { currentUser } = useAuth();
  let url = "/habits/email/" + currentUser.email;

  useEffect(async () => {
    const result = await axios.get(url)

    try {
      setList(result.data)
    } catch (error) {
      console.error(error);
    }

    if (result.data.length === 0){
      setController(true);
    }
  }, []);


  return(
    <div className="list-group">
    {controller && <h2><i>Start tracking your habits!</i></h2> }
    { habitList && habitList.map((item, index) => <Item key={index} id={index} element={(item.habit)} />)}
    </div>  
  )
};
  
export default HabitsContainer;
