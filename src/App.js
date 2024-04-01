import { useState } from "react";
import "./App.css";
import Bill from "./Bill";
import Service from "./Service";
import Total from "./Total";

function App() {
  const [bill, setBill] = useState(0);
  const [service, Setservice] = useState(0);
  const [friend, setFriend] = useState(0);
  function handelReset() {
    Setservice(0);
    setBill(0);
  }

  return (
    <div className="App">
      <Bill bill={bill} setBill={setBill} />
      <Service service={service} Setservice={Setservice}>
        How did you like the service?
      </Service>
      <Service service={friend} Setservice={setFriend}>
        How did your friend like the service?
      </Service>
      <Total bill={bill} service={service} friend={friend} />
      {bill > 0 && (
        <button onClick={handelReset} style={{ margin: "10px" }}>
          Reset
        </button>
      )}
    </div>
  );
}

export default App;
