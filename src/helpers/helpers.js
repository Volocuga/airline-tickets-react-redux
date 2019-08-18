export const sortAndFilter = (array, stopsObj) => {
  return array
    .filter(({ stops }) => stopsObj[stops])
    .sort(({ price: prevPrice }, { price }) => prevPrice - price);
};

export const convertStops = stop => {
  switch (+stop) {
    case 0:
      return "Без пересадок";
    case 1:
      return "1 пересадка";
    case 2:
      return "2 пересадки";
    case 3:
      return "3 пересадки";
    default:
      return `${stop} пересадок`;
  }
};

export const convertPrice = (price, rate, currency) => {
  let activeCurrency = null;

  if (currency === "RUB") activeCurrency = "\u20BD";
  if (currency === "USD") activeCurrency = "\x24";
  if (currency === "EUR") activeCurrency = "\u20AC";

  return `${(price * rate).toFixed()} ${activeCurrency} `;
};
