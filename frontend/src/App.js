import "./App.css";
import ComponentIndex from "./component/ComponentIndex";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ComponentIndex />
    </Provider>
  );
}

export default App;
