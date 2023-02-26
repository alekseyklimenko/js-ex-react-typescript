import React, {useState} from "react";

export function CreateProductForm() {
    const [value, setValue] = useState('')
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
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

            <button type="submit" className="py-2 px-4 border bg-yellow-400">Create</button>
        </form>
    )
}
