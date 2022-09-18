import { useEffect, useRef } from "react"

export const useClickOutside = (ref, callBack) => {

    const handleClick = ({target}) => {
        if (ref.current && !ref.current.contains(target)) {
            callBack()
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClick);
        
        return () => {
            document.removeEventListener("click", handleClick);
        }
    })
}
    
