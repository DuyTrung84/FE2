import { IProducts } from "@/interface/products";
import axios from "axios"

export const fetchProducts = () => async (dispatch: any) => {
    try {
        const { data } = await axios.get(`http://localhost:3000/products`);
        dispatch({ type: "products/fetching", playload: data })
    } catch (error) {

    }
};
export const addProducts = (products: IProducts) => async (dispatch: any) => {
    try {
        const { data } = await axios.post(`http://localhost:3000/products`, products);
        dispatch({ type: "products/add", playload: data })
    } catch (error) {

    }
};
export const deleteProducts = (id: number) => async (dispatch: any) => {
    try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        dispatch({ type: "products/delete", playload: id });

    } catch (error) {

    }
};
export const editProducts = (products: IProducts) => async (dispatch: any) => {
    try {
        const { data } = await axios.put(`http://localhost:3000/products/${products.id}`, products);
        dispatch({ type: "products/edit", playload: data })
    } catch (error) {

    }
};