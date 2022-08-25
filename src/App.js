import Reg_goolge from "./components/Reg_goolge";

import Well from "./components/Well";
import Pole_input from "./components/Pole_input";
import Reg_btn from "./components/Reg_btn";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container-wellcome">
          <h1 className="well">Welcome to</h1>
          <h1 className="uni color-h2">Uni42 Academy</h1>
          <Reg_goolge />
          <Pole_input />
          <Reg_btn />
        </div>
        <Well />
      </div>
    </div>
  );
}

export default App;