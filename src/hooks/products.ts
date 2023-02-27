import {useEffect, useState} from "react";
import {IProduct} from "../models";
import axios, {AxiosError} from "axios";

export function useProducts(): [IProduct[], boolean, string, ((product: IProduct) => void)] {
    const [products, setProducts] = useState<IProduct[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    function addProduct(product: IProduct) {
        setProducts(prev => [...prev, product])
    }
    async function fetchProducts() {
        try {
            setIsLoading(true)
            setError('')
            const responce = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
            setProducts(responce.data)
            setIsLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setIsLoading(false)
            setError(error.message)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return [products, isLoading, error, addProduct]
}
