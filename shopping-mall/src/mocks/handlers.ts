import { graphql } from "msw";
import { v4 as uuid } from "uuid";
import { ADD_CART, Cart, GET_CART } from "../graphql/cart";
import GET_PRODUCTS, { GET_PRODUCT } from "../graphql/products";

const mock_products = Array.from({ length: 20 }).map((_, i) => ({
  id: uuid(),
  imageUrl: `https://placeimg.com/640/480/${i + 1}`,
  price: 50000,
  title: `임시상품${i + 1}`,
  description: `임시상세내용${i + 1}`,
  createdAt: new Date(1646736789123 + i * 1000 * 60 * 60 * 24).toString,
}));

const cartData: { [key: string]: Cart } = (() => ({}))();

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    return res(
      ctx.data({
        products: mock_products,
      })
    );
  }),

  graphql.query(GET_PRODUCT, (req, res, ctx) => {
    const found = mock_products.find((item) => item.id === req.variables.id);

    if (found) return res(ctx.data(found));
    return res();
  }),

  graphql.query(GET_CART, (req, res, ctx) => {
    return res();
  }),

  graphql.query(ADD_CART, (req, res, ctx) => {
    const newData = { ...cartData };
    const id = req.variables.id;

    if (newData[id]) {
      newData[id] = {
        ...newData[id],
        amount: newData[id].amount + 1,
      };
    } else {
      const found = mock_products.find((item) => item.id === req.variables.id);

      if (found) {
        newData[id] = {
          ...found,
          amount: newData[id].amount + 1,
        };
      }
    }

    return res(ctx.data({ newData }));
  }),
];
