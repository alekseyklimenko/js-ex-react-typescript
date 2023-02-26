import React, {useEffect, useState} from 'react';
import {Product} from "./components/Product";
import {Loader} from "./components/Loader"
import {ErrorMessage} from "./components/ErrorMessage"
import {Modal} from "./components/Modal"
import {useProducts} from "./hooks/products";
import {CreateProductForm} from "./components/CreateProductForm";

function App() {
    const [products, isLoading, error] = useProducts()
    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { isLoading && <Loader/> }
            { error && <ErrorMessage error={error}/> }
            { products.map(product => <Product product={product} key={product.id} />) }
            <Modal title="Create new product">
                <CreateProductForm />
            </Modal>
        </div>
    )
}

export default App;
