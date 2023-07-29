import { produce } from "immer";

const initinalState = { products: [] } as any;

export const productReducer = (state = initinalState, action: any) => {
    return produce(state, (draState: { products: any[]; }) => {
        switch (action.type) {
            case "products/fetching":
                draState.products = action.playload;
                break;
            case "products/add":
                draState.products.push(action.playload);
                break;
            case "products/delete":
                const id = action.playload
                draState.products = state.id.filer((item: any) => item.id !== id);
                break;
            case "products/edit":
                const products = action.playload
                draState.products = state.products.map((item: any) => item.id === products.id ? products : item)
                break;
            default:
                return state;
        }
    })
}