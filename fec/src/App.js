import logo from "./logo.svg";
import "./App.css";
import Products from "./Products";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Products />
      </div>
    </RecoilRoot>
  );
}

export default App;

