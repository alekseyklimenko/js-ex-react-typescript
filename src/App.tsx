import React, {useContext} from 'react';
import {Product} from "./components/Product";
import {Loader} from "./components/Loader"
import {ErrorMessage} from "./components/ErrorMessage"
import {Modal} from "./components/Modal"
import {useProducts} from "./hooks/products";
import {CreateProductForm} from "./components/CreateProductForm";
import {IProduct} from "./models";
import {ModalContext} from "./context/ModalContext";

function App() {
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

export default App;
