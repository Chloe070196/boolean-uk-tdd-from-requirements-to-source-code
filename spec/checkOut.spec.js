/* eslint-disable spaced-comment */
/* eslint-disable no-undef */
/* eslint-disable quotes */
// const {totalCost} = require(...)
// const {createReceipt} = require(...)

describe("total cost", () => {
  //HAPPY PATH
  it("returns sum of all items price x their quantity if there are items in the basket", () => {
    //SETUP

    const basket = [
      { name: "potato", price: 2, quantity: 3 },
      { name: "beetroot", price: 1, quantity: 4 },
      { name: "lemon", price: 5, quantity: 1 },
    ];

    //EXECUTE
    const result = totalCost(basket);

    //VERIFY
    expect(result).toEqual(15);
  });

  //UNHAPPY PATH

  it("returns 0 if the basket is empty", () => {
    const basket = [];

    const result = totalCost(basket);

    expect(result).toEqual(0);
  });
});

describe("create a receipt", () => {
  it("returns a string listing all items with their name, price, and  their quantity if there are items in the basket", () => {
    //SETUP
    const basket = [
      { name: "potato", price: 2, quantity: 3 },
      { name: "beetroot", price: 1, quantity: 4 },
      { name: "lemon", price: 5, quantity: 1 },
    ];

    //EXECUTE
    const result = createReceipt(basket);

    //VERIFY
    expect(result).toEqual(JSON.stringify(basket));
  });

  it("returns 'basket is empty'if there are no items in the basket", () => {
    //SETUP
    const basket = [];

    //EXECUTE
    const result = createReceipt(basket);

    //VERIFY
    expect(result).toEqual('basket is empty');
  });
});
