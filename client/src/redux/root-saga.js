import { all, call } from "redux-saga/effects";
import { shopSagas } from "./shop/shop.saga";
import { userSagas } from "./users/user.saga";
import { cartSagas } from "./cart/cart.saga";
export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
