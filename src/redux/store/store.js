import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//persist redux
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//reducers
import HomeModalReducer from "../reducers/HomeModalReducer";

const persistConfig = {
  key: "root",
  storage,
};


//combine all reducers
const mainReducer = combineReducers({
  home: HomeModalReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store;