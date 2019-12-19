import React from "react";

const CivCard = props => {
  return (
    <div className="civ-card">
      <h1>{props.civData.name}</h1>
      <h2>Army Specialty: {props.civData.army_type}</h2>
      <h3>Team Bonus: {props.civData.team_bonus}</h3>
      <div>
        <p>Civ Bonuses:</p>
        {props.civData.civilization_bonus.map(item => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default CivCard;
