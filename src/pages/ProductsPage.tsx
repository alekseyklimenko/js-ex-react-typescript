import React, {useContext} from "react";
import {useProducts} from "../hooks/products";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import {Loader} from "../components/Loader";
import {ErrorMessage} from "../components/ErrorMessage";
import {Product} from "../components/Product";
import {Modal} from "../components/Modal";
import {CreateProductForm} from "../components/CreateProductForm";

export function ProductsPage() {
    const [products, isLoading, error, addProduct] = useProducts()
    const {isVisible: isModalVisible, open: openModal, close: closeModal} = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        closeModal()
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { isLoading && <Loader/> }
            { error && <ErrorMessage error={error}/> }
            { products.map(product => <Product product={product} key={product.id} />) }

            { isModalVisible && <Modal title="Create new product" onClose={closeModal}>
                <CreateProductForm onCreate={createHandler}/>
            </Modal> }

            <button className="absolute bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
                    onClick={openModal}>+</button>
        </div>
    )
}
