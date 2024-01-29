import { useState, useEffect } from "react";

export function useDebounce(inputValue, n) {
    const [value, setValue] = useState(''); 

    useEffect(()=>{
        const time = setTimeout(()=>{
            setValue(inputValue);
        }, n);
        return ()=>{
            clearTimeout(time);
        }
    }, [inputValue, n])
    
    return value;
}