import "./App.css";
import Homepage from "./Components/HomePage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "./utils/Store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Homepage />
      </div>
    </Provider>
  );
}

export default App;
