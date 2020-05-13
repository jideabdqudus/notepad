import React, {useState} from "react";

const Card = () => {
 const [item, setItem] = useState([]);

 const formChanged=(e)=>{
  e.preventDefault();
  setItem(e.target.value)
}

 const formSubmitted=(e)=>{
   e.preventDefault();

 }
  return (
    <div>
    <div>{item}</div>
      <form onSubmit={formSubmitted}>
        <input type="name" onChange={formChanged} placeholder="Your Item"/>
        <button type="submit" value="Submit">Submit</button>
      </form>
    </div>
  );
};

export default Card;
