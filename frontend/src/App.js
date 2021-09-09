import "./App.css";
import Index from "./component/Index";
import { Provider } from "react-redux";
import store from "./redux/store";
import SessionLogin from "./firebase";

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
