import React, { Component } from "react";
import PropTypes from "prop-types";

import { convertStops } from "../../../helpers/helpers";
import "../StopsBlock/StopsBlock.css";

class Checkbox extends Component {
  static propTypes = {
    stopsFilter: PropTypes.func.isRequired,
    stops: PropTypes.object.isRequired,
    field: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
  };

  state = { isVisibleHoverBtn: false };

  handleOneMoreStop = ({ target: { name, checked } }) => {
    const { stopsFilter, stops } = this.props;
    stopsFilter(name, checked, stops);
  };

  handleOnlyOneStop = ({ target: { name } }) => {
    const { stopsFilter } = this.props;
    stopsFilter(name, "only");
  };

  handleMouseEnter = () => {
    this.setState({ isVisibleHoverBtn: true });
  };

  onMouseLeave = () => {
    this.setState({ isVisibleHoverBtn: false });
  };

  render() {
    const { isVisibleHoverBtn } = this.state;
    const { field, checked } = this.props;

    return (
      <label
        className="checkbox"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={this.handleOneMoreStop}
          name={field}
        />

        <span className="checkbox_checked" />

        {convertStops(field)}
        {isVisibleHoverBtn && (
          <button name={field} onClick={this.handleOnlyOneStop}>
            Тільки
          </button>
        )}
      </label>
    );
  }
}

export default Checkbox;
