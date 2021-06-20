import "./App.css";
import Base from "./component/Base";

import { Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
        <Base />
      </Switch>
    </div>
  );
}

export default App;
