import { PayloadAction } from "@reduxjs/toolkit";

import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [] as any[] },
  action: PayloadAction
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item: any = action.payload;
      const existItem: any = state.cartItems.find(
        (x: any) => x.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x: any) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};
