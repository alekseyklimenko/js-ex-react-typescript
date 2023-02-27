import React, {createContext, useState} from "react";

interface IModalContext {
    isVisible: boolean,
    open: () => void,
    close: () => void
}

export const ModalContext = createContext<IModalContext>({
    isVisible: false,
    open: () => {},
    close: () => {}
})

export const ModalState = ({children}: {children: React.ReactNode}) => {
    const [isVisible, setIsVisible] = useState(false)
    const open = () => setIsVisible(true)
    const close = () => setIsVisible(false)

    return (
        <ModalContext.Provider value={{isVisible, open, close}}>
            { children }
        </ModalContext.Provider>
    )
}
