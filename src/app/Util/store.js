import { createStore, combineReducers} from "redux";

import LoginReducer from "../components/Login/Login.reducer";
import DashboardReducer from "../components/Dashboard/Dashboard.reducer";

export default createStore(
    combineReducers({
        LoginReducer,
        DashboardReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);