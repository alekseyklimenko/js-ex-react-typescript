import React, {useEffect, useState} from 'react';
import {Product} from "./components/Product";
import {Loader} from "./components/Loader"
import {ErrorMessage} from "./components/ErrorMessage"
import {Modal} from "./components/Modal"
import {useProducts} from "./hooks/products";
import {CreateProductForm} from "./components/CreateProductForm";
import {IProduct} from "./models";

function App() {
    const [products, isLoading, error, addProduct] = useProducts()
    const [showModal, setShowModal] = useState(true)

    const createHandler = (product: IProduct) => {
        setShowModal(false)
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { isLoading && <Loader/> }
            { error && <ErrorMessage error={error}/> }
            { products.map(product => <Product product={product} key={product.id} />) }

            { showModal && <Modal title="Create new product">
                <CreateProductForm onCreate={createHandler}/>
            </Modal> }
        </div>
    )
}

export default App;
