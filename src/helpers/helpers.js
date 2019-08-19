const currencySymbols = { RUB: "\u20BD", USD: "\x24", EUR: "\u20AC" };
const stopsTitle = {
  0: "Без пересадок",
  1: "1 пересадка",
  2: "2 пересадки",
  3: "3 пересадки"
};

export const filterByStops = (tickets, stopsList, orderBy = "price") => {
  let filteredData = tickets.filter(({ stops }) => stopsList[stops]);

  if (orderBy === "price") {
    filteredData.sort(({ price: prevPrice }, { price }) => prevPrice - price);
  }
  return filteredData;
};

export const getStopTitle = stop => stopsTitle[stop];

export const convertToRealPrice = (price, rate, currency) =>
  `${(price * rate).toFixed()} ${currencySymbols[currency]} `;
