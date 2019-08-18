import {
  FILTER_ONLY_ONE_STOP,
  FILTER_SET_ACTIVE_CURRENCY,
  FILTER_ONE_MORE_STOP,
  FILTER_SHOW_ALL_STOPS
} from "../constants";

const allStopsFalse = { 0: false, 1: false, 2: false, 3: false };

const initialState = {
  activeCurrency: "RUB",
  stops: { 0: true, 1: true, 2: true, 3: true },
  showAll: true
};

const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_SET_ACTIVE_CURRENCY:
      return { ...state, activeCurrency: payload };

    case FILTER_ONE_MORE_STOP:
      return {
        ...state,
        stops: { ...state.stops, ...payload },
        showAll: false
      };

    case FILTER_ONLY_ONE_STOP:
      return {
        ...state,
        stops: { ...allStopsFalse, [payload]: true },
        showAll: false
      };

    case FILTER_SHOW_ALL_STOPS:
      return { ...state, showAll: payload, stops: initialState.stops };

    default:
      return state;
  }
};

export default filterReducer;
