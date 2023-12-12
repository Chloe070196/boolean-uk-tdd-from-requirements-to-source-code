function totalCost(basket) {
  let total = 0;
  basket.forEach((item) => (total += item.price * item.quantity));
  return total;
}

function createReceipt(basket) {
  if (basket.length === 0) {
    return "basket is empty";
  }

  if (basket.length > 0) {
    const createItemStrings = (item) => {
      return ` ${item.quantity} ${item.name} - ${
        item.quantity * item.price
      } GBP`;
    };

    const ListedItemStrings = basket.map((item) => createItemStrings(item));

    return `${ListedItemStrings} _________TOTAL: ${totalCost(basket)} GBP`;
  }
}

module.exports = { totalCost, createReceipt };
