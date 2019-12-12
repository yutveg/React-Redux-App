import React from "react";

const CivCard = props => {
  return (
    <div className="civ-card">
      <h1>{props.civData.name}</h1>
      <h2>{props.civData.army_type}</h2>
      <h3>{props.civData.team_bonus}</h3>
      {props.civData.civilization_bonus.map(item => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default CivCard;
