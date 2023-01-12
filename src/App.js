import React from "react";
import PersonCard from "./components/PersonCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PersonCard 
        lastName={"Doe"} 
        firstName={"Jane"} 
        age={45}
        hair={"Black"} />

      <PersonCard
        lastName={"Smith"}
        firstName={"John"}
        age={88}
        hair={"Brown"}
      />
<PersonCard
lastName={"Hassan"}
firstName={"Adam"}
age={27}
hair={"Black"}
/>
    </div>
  );
}

export default App;