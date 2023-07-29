import { useAppDispatch, useAppSelector } from "@/store/hook"
import { Dispatch, useEffect } from "react"
import { addProducts, deleteProducts, editProducts, fetchProducts } from "../actions/products";
import { Button } from "..";

const ProductList = () => {
    const dispatch: Dispatch<any> = useAppDispatch();
    const { products } = useAppSelector((state: any) => state.product);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    return (
        <div>
            {products?.map((item: any) => {
                return <div>
                    <p key={item.id}>{item.name} <span key={item.id}>{item.price}</span></p>
                </div>
            })
            }
            <Button
                type="primary"
                onClick={() => dispatch(addProducts({ name: "Product add", price: 200 }))}
            >Add</Button>
            <Button
                type="primary"
                onClick={() => dispatch(editProducts({ id: 3, name: "Product edit", price: 300 }))}
            >Edit</Button>
            <Button
                type="danger"
                onClick={() => dispatch(deleteProducts(3))}
            >Delete</Button>
        </div>

    )
}

export default ProductList