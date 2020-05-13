import React, {useState} from "react";

const Card = () => {
 const [item, setItem] = useState("")


 const formSubmitted=(e)=>{
   e.preventDefault();
   setItem(e.target.value)

 }
  return (
    <div>
    <div>{item}</div>
      <form onSubmit={formSubmitted}>
        <input type="name" value={item}  placeholder="Your Item"/>
        <button type="submit" value="Submit">Submit</button>
      </form>
    </div>
  );
};

export default Card;
