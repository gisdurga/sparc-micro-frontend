import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import App from "./index";
import { store, persistor } from "./app/redux/store/store-index";

ReactDOM.render(
    (<React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>), document.getElementById("root"));
