

interface ProductState {
    products: any[];
    product: object;
    loading: boolean;
    error: null | string;
    modal: boolean
}

export enum ProductActionTypes {
    FETCH_PRODUCT = "FETCH_PRODUCT",
    FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS",
    FETCH_PRODUCT_ERRORS = "FETCH_PRODUCT_ERRORS",
    GET_PRODUCT = "GET_PRODUCT",
    CLOSE_MODAL = "CLOSE_MODAL",
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

export type ProductAction = FetchProductAction | FetchProductSuccessAction | FetchProductErrorsAction | GetProductAction | CloseModalAction

const initialState: ProductState = {
    products: [],
    product: {},
    loading: false,
    error: null,
    modal: false
}

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCT:
            return {
                products: [],
                product: {},
                loading: true,
                error: null,
                modal: false
            }
        case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
            return {
                products: action.payload,
                product: {},
                loading: false,
                error: null,
                modal: false
            }
        case ProductActionTypes.FETCH_PRODUCT_ERRORS:
            return {
                products: [],
                product: {},
                loading: false,
                error: action.payload,
                modal: false
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
        default:
            return state
    }
}