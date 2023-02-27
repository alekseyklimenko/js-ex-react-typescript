import React, {useState} from "react";
import {IProduct} from "../models";
import axios from "axios";
import {ErrorMessage} from "./ErrorMessage";

const productData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreateProductProps {
    onCreate: () => void
}

export function CreateProductForm({onCreate}: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }
        productData.title = value
        const resp = axios.post<IProduct>('https://fakestoreapi.com/products', productData)
        onCreate()
    }
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" className="border py-2 px-4 mb-2 outline-0 w-full"
                   placeholder="Enter product title"
                   value={value}
                   onChange={changeHandler}
            />

            { error && <ErrorMessage error={error}/> }
            <button type="submit" className="py-2 px-4 border bg-yellow-400">Create</button>
        </form>
    )
}
