import { useEffect } from "react"
import { useSelector } from "react-redux"


export const UserMsg =()=>{
    const msg = useSelector(state => state.userModule.msg)

    useEffect(() => {
      
        setTimeout(() => {
            
        }, 3000)
    
      return () => {
        second
      }
    }, [third])
    

    return(
        <section className="user-msg-wrapper">

        </section>
    )
}