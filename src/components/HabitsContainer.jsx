import React, { useState, useEffect } from "react";
import Item from "./Item";
const axios = require("axios");

function HabitsContainer(){
  const [habitList, setList] = useState([]);
  const [controller, setController] = useState(false);


  useEffect(async () => {
    const result = await axios("/habits");
    setList(result.data);
    if (result.data.length === 0){
      setController(true);
    }
  }, []);


  return(
    <div className="list-group">
    {controller ? <h2><i>Start tracking your habits!</i></h2> : null}
    {  habitList.map((item, index) => <Item key={index} id={index} element={(item.habit)} />)}
    </div>  
  )
};
  
export default HabitsContainer;
