import React, {useEffect, useState} from 'react';
import {Product} from "./components/Product";
import {Loader} from "./components/Loader"
import {ErrorMessage} from "./components/ErrorMessage"
import {Modal} from "./components/Modal"
import {useProducts} from "./hooks/products";
import {CreateProductForm} from "./components/CreateProductForm";

function App() {
    const [products, isLoading, error] = useProducts()
    const [showModal, setShowModal] = useState(true)
    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { isLoading && <Loader/> }
            { error && <ErrorMessage error={error}/> }
            { products.map(product => <Product product={product} key={product.id} />) }

            { showModal && <Modal title="Create new product">
                <CreateProductForm onCreate={() => setShowModal(false)}/>
            </Modal> }
        </div>
    )
}

export default App;
