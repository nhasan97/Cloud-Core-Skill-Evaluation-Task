import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import orderSlice from "./slices/orderSlice";
import wishlistSlice from "./slices/wishlistSlice";

const cartPersistConfig = {
  key: "cart",
  storage,
};

const persistedCartSlice = persistReducer(cartPersistConfig, cartSlice);

const wishlistPersistConfig = {
  key: "wishlist",
  storage,
};

const persistedWishlistSlice = persistReducer(
  wishlistPersistConfig,
  wishlistSlice
);

export const store = configureStore({
  reducer: {
    productSlice: productSlice,
    cartSlice: persistedCartSlice,
    orderSlice: orderSlice,
    wishlistSlice: persistedWishlistSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// .concat(baseApi.middleware)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
