import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of icecreams - {props.numOfIceCreams} </h2>
      <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  );
};

// With this the state of our redux store is mapped to a prop in our component.
const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

// With this dispatch of an action creator is mapped to a prop in our component.
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

// `connect` connects state and dispatch to our component.
// With this our component is now subscribed to the store.
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
