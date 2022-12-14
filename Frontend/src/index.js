import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"
import { persistStore } from "redux-persist"
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store from "./Redux/Store"

const persistor = persistStore(store)


ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)