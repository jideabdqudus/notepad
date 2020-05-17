import React, {useState} from "react";

const Card = () => {
 const [item, setItem] = useState([]);

 const formChanged=(e)=>{
  e.preventDefault();
  setItem(e.target.value)
}

 const formSubmitted=(e)=>{
  e.preventDefault();
  const form = e.target.elements.item.value
  if(form){
    setItem(form)
    e.target.elements.item.value = ""
  }

 }
  return (
    <div>
      <form onSubmit={formSubmitted}>
        <input type="text" name="item"  placeholder="Your Item"/>
        <button type="submit" value="Submit">Submit</button>
      </form>
    </div>
  );
};

export default Card;
