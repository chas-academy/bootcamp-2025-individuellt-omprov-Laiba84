const products = [
  { title: "Apple", price: 12 },
  { title: "Banana", price: 7 },
  { title: "Carrot", price: 3 },
];

// returna priset i objektet som denna funktion tar emot
// skriva din lösning inuti denna funktion
const getPrice = (product) => {};

// lämna denna orörd
export const getAllPrices = () => {
  let prices = [];
  products.forEach((product) => {
    prices.push(getPrice(product));
  });
  return prices;
};

console.log(getAllPrices());
