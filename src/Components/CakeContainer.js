import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

// With this the state of our redux store is mapped to a prop in our component.
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

// With this dispatch of an action creator is mapped to a prop in our component.
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// `connect` connects state and dispatch to our component.
// With this our component is now subscribed to the store.
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
