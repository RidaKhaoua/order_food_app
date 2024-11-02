import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categories from "./categories/categorieSlice";
import foodList from "./foods/foodsSlice";
import cart from "./Cart/cartSlice";
import auth from "./auth/authSlice";
import wishlist from "./wishlist/wishlistSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "auth"],
};

const rootReducer = combineReducers({
  categories,
  foodList,
  cart,
  auth,
  wishlist
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER, PURGE],
      },
    });
  },
});

const persiststore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persiststore };
