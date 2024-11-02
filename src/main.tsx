import { createRoot } from "react-dom/client";
import "./index.css";
import "./services/axios-global.js";
import Routes from "@routes/routes";
import { persiststore, store } from "@store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persiststore}>
      <Routes />
    </PersistGate>
  </Provider>
);
