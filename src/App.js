import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import HooksIceCreamContainer from "./Components/HooksIceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <HooksIceCreamContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
