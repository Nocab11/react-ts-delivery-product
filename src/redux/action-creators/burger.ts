import axios from "axios";
import {Dispatch} from "redux";
import {BurgerAction, BurgerActionTypes} from "../reducers/burgerReducer";

export const fetchBurger = () => {
    return async (dispatch: Dispatch<BurgerAction>) => {
        try {
            dispatch({type: BurgerActionTypes.FETCH_BURGER})
            const response = await axios.get('https://6193cd7d221e680017450c22.mockapi.io/burger')
            dispatch({type: BurgerActionTypes.FETCH_BURGER_SUCCESS, payload: response.data})
            console.log('response', response.data)
        } catch {
            dispatch({type: BurgerActionTypes.FETCH_BURGER_ERRORS, payload: 'ffff'})
        }
    }
}