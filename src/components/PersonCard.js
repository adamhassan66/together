
import React, { useState } from "react";

const PersonCard = (props) => {
  const [birthdayAge, setBirthdayAge] = useState(props.age);

  // age is used when setting up state and so we do not need to destructure it here!
  const {firstName, lastName, hair} = props;

  return (
    <div className="container">
      <h2>
        {lastName}, {firstName}
      </h2>
      <p>Age: {birthdayAge}</p>
      <p>Hair Color: {hair}</p>
      <button onClick={() => setBirthdayAge( birthdayAge + 1 )}>
        Birthday Button for {firstName} {lastName}
      </button>
    </div>
  );
}
export default PersonCard;