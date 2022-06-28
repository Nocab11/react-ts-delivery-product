interface ProductState {
    products: any[];
    product: object;
    loading: boolean;
    error: null | string;
    modal: boolean;
    total: number;
    basket: any[]
}

export enum ProductActionTypes {
    FETCH_PRODUCT = "FETCH_PRODUCT",
    FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS",
    FETCH_PRODUCT_ERRORS = "FETCH_PRODUCT_ERRORS",
    GET_PRODUCT = "GET_PRODUCT",
    CLOSE_MODAL = "CLOSE_MODAL",
    SET_BASKET = "SET_BASKET"
}

interface FetchProductAction {
    type: ProductActionTypes.FETCH_PRODUCT;
}

interface FetchProductSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCT_SUCCESS;
    payload: any[]
}

interface FetchProductErrorsAction {
    type: ProductActionTypes.FETCH_PRODUCT_ERRORS;
    payload: string
}
interface GetProductAction {
    type: ProductActionTypes.GET_PRODUCT;
    payload: object
}

interface CloseModalAction {
    type: ProductActionTypes.CLOSE_MODAL;
    payload: boolean
}

interface SetBasketAction {
    type: ProductActionTypes.SET_BASKET;
    payload: any[]
}

export type ProductAction = FetchProductAction | FetchProductSuccessAction | FetchProductErrorsAction | GetProductAction | CloseModalAction | SetBasketAction

const initialState: ProductState = {
    products: [],
    product: {},
    loading: false,
    error: null,
    modal: false,
    total: 0,
    basket: []
}

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCT:
            return {
                ...state,
                products: [],
                product: {},
                loading: true,
                error: null,
                modal: false,
                total: 0
            }
        case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload,
                product: {},
                loading: false,
                error: null,
                modal: false,
                total: 0
            }
        case ProductActionTypes.FETCH_PRODUCT_ERRORS:
            return {
                ...state,
                products: [],
                product: {},
                loading: false,
                error: action.payload,
                modal: false,
                total: 0
            }
        case ProductActionTypes.GET_PRODUCT:
            return {
                ...state,
                product: action.payload,
                modal: true
            }
        case ProductActionTypes.CLOSE_MODAL:
            return {
                ...state,
                modal: action.payload
            }
        case ProductActionTypes.SET_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
        default:
            return state
    }
}