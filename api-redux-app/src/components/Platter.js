import React, { useEffect } from "react";
import CivCard from "./CivCard.js";
import { connect } from "react-redux";
import { getCiv, nextCiv, prevCiv } from "../actions";

const Platter = props => {
  useEffect(() => props.getCiv(props.queryID), [props.queryID]);

  return (
    <div className="platter">
      <h1>Civilization Navigation</h1>
      <button onClick={props.prevCiv}>Prev</button>
      {!props.civData && !props.isFetching && (
        <p>something went terribly wrong..</p>
      )}
      {props.isFetching && <p>one moment please..</p>}
      {props.civData && <CivCard civData={props.civData} />}
      <button onClick={props.nextCiv}>Next</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    civData: {
      name: state.civData.name,
      army_type: state.civData.army_type,
      team_bonus: state.civData.team_bonus,
      civilization_bonus: state.civData.civilization_bonus
    },
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {
  getCiv,
  nextCiv,
  prevCiv
})(Platter);
