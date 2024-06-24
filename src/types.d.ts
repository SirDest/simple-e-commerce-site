export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface AddToCartAction {
  type: "ADD_TO_CART";
  payload: CartItem;
}

export interface UpdateItemQuantityAction {
  type: "UPDATE_ITEM_QUANTITY";
  payload: {
    id: number;
    quantity: number;
  };
}

export type CartActionTypes = AddToCartAction | UpdateItemQuantityAction;
