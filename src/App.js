import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./Components/HooksCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
