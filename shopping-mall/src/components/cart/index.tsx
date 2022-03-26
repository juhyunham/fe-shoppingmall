import React from "react";
import { CartType } from "../../graphql/cart";
import CartItem from "./item";

function CartList({ items }: { items: CartType[] }) {
  return (
    <ul>
      {items.map((item) => (
        <CartItem {...item} key={item.id} />
      ))}
    </ul>
  );
}

export default CartList;
