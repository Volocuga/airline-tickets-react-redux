import {
  FILTER_SET_ACTIVE_CURRENCY,
  FILTER_ONE_MORE_STOP,
  FILTER_SHOW_ALL_STOPS,
  FILTER_ONLY_ONE_STOP,
} from "../constants";

const setActiveCurrencyAction = currency => ({
  type: FILTER_SET_ACTIVE_CURRENCY,
  payload: currency
});

const stopsFilter = {
  oneMore: payload => ({ type: FILTER_ONE_MORE_STOP, payload }),
  onlyOne: fieldName => ({
    type: FILTER_ONLY_ONE_STOP,
    payload: fieldName
  }),
  showAll: bool => ({ type: FILTER_SHOW_ALL_STOPS, payload: bool }),
};

const stopsFilterAction = (field, bool, stops) => {
  if (typeof stops === "object") {
    const allChecked = Object.keys(stops).filter(key => stops[key] === true);

    if (allChecked.length === 1 && !bool) return stopsFilter.showAll(true);
    if (allChecked.length === 3 && bool) return stopsFilter.showAll(bool);
    return stopsFilter.oneMore({ [field]: bool });
  }
  if (field === "all") return stopsFilter.showAll(bool);
  if (bool === "only") return stopsFilter.onlyOne(field);
};

export { setActiveCurrencyAction, stopsFilterAction };
