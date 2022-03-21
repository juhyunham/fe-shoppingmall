import { atom, useRecoilValue, selectorFamily } from "recoil";

// 상품id, 상품수량
const cartState = atom<Map<string, number>>({
  key: "cartState",
  default: new Map(),
});

export const cartItemSelector = selectorFamily<number | undefined, string>({
  key: "cartItem",
  get:
    (id: string) =>
    ({ get }) => {
      const carts = get(cartState);
      return carts.get(id);
    },
  set:
    (id: string) =>
    ({ get, set }, newValue) => {
      if (typeof newValue === "number") {
        const newCart = new Map([...get(cartState)]);
        newCart.set(id, newValue);
        set(cartState, newCart);
      }
    },
});
