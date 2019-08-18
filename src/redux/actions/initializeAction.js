import axios from "axios";
import { tickets } from "../../helpers/tickets";

import { GET_CURRENCY_RATE, GET_TICKETS, INITIALIZE_ERROR } from "../constants";

const currency = "RUB";

const initializeState = {
  getTickets: tickets => ({
    type: GET_TICKETS,
    payload: { tickets }
  }),
  getCurrencyRate: rate => ({
    type: GET_CURRENCY_RATE,
    payload: rate
  }),
  error: () => ({ type: INITIALIZE_ERROR })
};


const initializeStateAction = () => dispatch => {
  axios
    .get(`https://api.exchangeratesapi.io/latest?base=${currency}`)
    .then(({ data: { rates: { USD, EUR, RUB } } }) => {
      dispatch(initializeState.getCurrencyRate({ USD, EUR, RUB }));
      dispatch(initializeState.getTickets(tickets));
    })
    .catch(() => dispatch(initializeState.error()));
};

export { initializeStateAction };
