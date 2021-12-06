import { useState } from "react";

 const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(()=>{
        try {
            const item = window.localStorage.getItem(key) //traemos el dato con la key unica
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    const setValue = value =>{
        try {
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value)) //El local storage solo guarda valores de tipo string, asi q convertimos cualquier valor que nos llegue a cadena de texto.
        } catch (error) {
            console.error(error)
        }
    }
    return [storedValue, setValue]
}

export default useLocalStorage