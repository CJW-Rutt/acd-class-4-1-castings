import { useEffect } from "react"

export default function Casting(){
    let x: unknown = 'Hello';
    
    useEffect(() => {
        console.log((x as string).length);
        // casting is just another way to convert to another data type
    }, [])

    return(
        <>
            {x}
        </>
    )
}