import { useState } from "react"
import "./App.css"
import Hobbies from "./components/Hobbies/Hobbies"
import NavBar from "./components/NavBar/NavBar"
import Popup from "./components/Popup/Popup"

function App() {
  const [usePopup, setPopup] = useState(false);

  return (
    <div className="bg">
      <NavBar setTrigger={setPopup} />
      <Hobbies />
      <Popup trigger={usePopup} setTrigger={setPopup}>
        <h3>All tables full!</h3>
        <p>There should be an empty seat soon</p>
      </Popup>
    </div>
  );
}

export default App;
