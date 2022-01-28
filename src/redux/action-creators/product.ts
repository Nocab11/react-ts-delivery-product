import axios from "axios";
import {Dispatch} from "redux";
import {ProductAction, ProductActionTypes} from "../reducers/productReducer";

export const fetchProduct = () => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCT})
            const response = await axios.get('https://61e97ab67bc0550017bc6306.mockapi.io/foods')
            dispatch({type: ProductActionTypes.FETCH_PRODUCT_SUCCESS, payload: response.data})
            console.log('response', response.data)
        } catch {
            dispatch({type: ProductActionTypes.FETCH_PRODUCT_ERRORS, payload: 'ffff'})
        }
    }
}