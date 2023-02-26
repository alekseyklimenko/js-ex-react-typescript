import React, {useEffect, useState} from 'react';
import {Product} from "./components/Product";
import {Loader} from "./components/Loader"
import {ErrorMessage} from "./components/ErrorMessage"
import {useProducts} from "./hooks/products";

function App() {
    const [products, isLoading, error] = useProducts()
    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { isLoading && <Loader/> }
            { error && <ErrorMessage error={error}/> }
            { products.map(product => <Product product={product} key={product.id} />) }
        </div>
    )
}

export default App;
