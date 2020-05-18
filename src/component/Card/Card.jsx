import React from "react";

const Card = () => {
  return (
    <div>
        <ul>
          <li>Dish washing</li>
          <li>Edit CV</li>
          <li>Football</li>
          <li>Paysmosmo</li>
          <li>New Laptop</li>
        </ul>
    </div>
  );
};

export default Card;





// const Card = () => {
//   const [item, setItem] = useState([]);
 
//   const formChanged=(e)=>{
//    e.preventDefault();
//    setItem(e.target.value)
//  }
 
//   const formSubmitted=(e)=>{
//    e.preventDefault();
//    const form = e.target.elements.item.value
//    if(form){
//      setItem(form)
//      e.target.elements.item.value = ""
//    }
 
//   }
//    return (
//      <div>
//        <form onSubmit={formSubmitted}>
//          <input type="text" name="item"  placeholder="Your Item"/>
//          <button type="submit" value="Submit">Submit</button>
//        </form>
//      </div>
//    );
//  };
 