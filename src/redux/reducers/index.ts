import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {burgerReducer} from "./burgerReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    burger: burgerReducer
})

export type RootState = ReturnType<typeof rootReducer>