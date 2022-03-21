import { graphql } from "msw";
import { v4 as uuid } from "uuid";
import GET_PRODUCTS from "../graphql/products";

const mock_products = Array.from({ length: 20 }).map((_, i) => ({
  id: uuid(),
  imageUrl: `https://placeimg.com/640/480/${i + 1}`,
  price: 50000,
  title: `임시상품${i + 1}`,
  description: `임시상세내용${i + 1}`,
  createdAt: new Date(1646736789123 + i * 1000 * 60 * 60 * 24).toString,
}));

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    return res(
      ctx.data({
        products: mock_products,
      })
    );
  }),
];
