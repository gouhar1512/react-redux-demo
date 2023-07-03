import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux";

const HooksIceCreamContainer = () => {
  const numOfCakes = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of icecreams - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Icecream</button>
    </div>
  );
};

export default HooksIceCreamContainer;
