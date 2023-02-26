import React, {useEffect, useState} from 'react';
import {Product} from "./components/Product";
import {useProducts} from "./hooks/products";

function App() {
    const [products, isLoading, error] = useProducts()
    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { isLoading && <p className="text-center">Loading...</p> }
            { error && <p className="text-center text-red-600">{ error }</p> }
            { products.map(product => <Product product={product} key={product.id} />) }
        </div>
    )
}

export default App;
