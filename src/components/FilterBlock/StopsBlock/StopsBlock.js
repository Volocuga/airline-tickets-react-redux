import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { stopsFilterAction } from "../../../redux/actions/filterAction";
import Checkbox from "../Checkbox/Checkbox";
import "../Checkbox/Checkbox.css";

const StopsBlock = ({ stops, showAll, stopsFilter }) => {
  const handleChange = ({ target: { name, checked } }) => {
    stopsFilter(name, checked);
  };

  return (
    <>
      <h3>Кількість пересадок</h3>

      <label className="checkbox">
        <input
          type="checkbox"
          name="all"
          onChange={handleChange}
          checked={showAll}
          disabled={showAll}
        />
        <span className="checkbox_checked" />
        Всі
      </label>

      {Object.keys(stops).map(field => (
        <Checkbox
          key={field}
          field={field}
          checked={stops[field]}
          stops={stops}
          stopsFilter={stopsFilter}
        />
      ))}
    </>
  );
};

StopsBlock.propTypes = {
  stops: PropTypes.object.isRequired,
  showAll: PropTypes.bool.isRequired,
  stopsFilter: PropTypes.func.isRequired
};

const mapStateToProps = ({ filters: { stops, showAll } }) => ({
  stops,
  showAll
});

const mapDispatchToProps = { stopsFilter: stopsFilterAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StopsBlock);
