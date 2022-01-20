
interface BurgerState {
    burgers: any[];
    loading: boolean;
    error: null | string
}

export enum BurgerActionTypes {
    FETCH_BURGER = "FETCH_BURGER",
    FETCH_BURGER_SUCCESS = "FETCH_BURGER_SUCCESS",
    FETCH_BURGER_ERRORS = "FETCH_BURGER_ERRORS"
}

interface FetchBurgerAction {
    type: BurgerActionTypes.FETCH_BURGER;
}

interface FetchBurgerSuccessAction {
    type: BurgerActionTypes.FETCH_BURGER_SUCCESS;
    payload: any[]
}

interface FetchBurgerErrorsAction {
    type: BurgerActionTypes.FETCH_BURGER_ERRORS;
    payload: string
}

export type BurgerAction = FetchBurgerAction | FetchBurgerSuccessAction | FetchBurgerErrorsAction

const initialState: BurgerState = {
    burgers: [],
    loading: false,
    error: null
}

export const burgerReducer = (state = initialState, action: BurgerAction): BurgerState => {
    switch (action.type) {
        case BurgerActionTypes.FETCH_BURGER:
            return {
                burgers: [],
                loading: true,
                error: null
            }
        case BurgerActionTypes.FETCH_BURGER_SUCCESS:
            return {
                burgers: action.payload,
                loading: false,
                error: null
            }
        case BurgerActionTypes.FETCH_BURGER_ERRORS:
            return {
                burgers: [],
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}