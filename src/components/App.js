import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { initializeStateAction } from "../redux/actions/initializeAction";
import FilterBlock from "./FilterBlock/FilterBlock";
import TicketList from "./TicketsList/TicketList";
import Logo from "../assets/img/logo.svg";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const { initializeState } = this.props;
    initializeState();
  }

  render() {
    return (
      <div className="App">
        <img src={Logo} alt="" className="logo" />
        <div className="container">
          <FilterBlock />
          <TicketList />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  initializeState: PropTypes.func.isRequired
};

const mapDispatchToProps = { initializeState: initializeStateAction };

export default connect(
  null,
  mapDispatchToProps
)(App);
