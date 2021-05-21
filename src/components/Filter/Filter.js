import React from 'react';
import './Filter.scss';
const Filter = ({ ...props }) => {
  return (
    <div>
      <div className="filter">
        <label for={props.name}> {props.name}</label>
        <input
          type="radio"
          name="status-radio"
          id={props.name}
          onChange={props.filtered}
        />
      </div>
    </div>
  );
};
export default Filter;
