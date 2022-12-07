import { useState } from "react"
export const Animal = ({ani , ca}) => { 
    const [counter, setCounter] = useState(0)
    const handleAdd = () => { 
        setCounter(counter + 1)
        ca(prev => {
            const tmp = prev
            const object = tmp.find((el)=> el.name === ani.name)
            object.counter = object.counter === undefined ? 1 : object.counter +1
            return [...tmp]
        })
    }
    const handleRemove = () => { 
        setCounter(counter - 1)
        ca(prev => {
            const tmp = prev
            const object = tmp.find((el)=> el.name === ani.name)
            object.counter = object.counter === undefined ? 1 : object.counter -1
            return [...tmp]
        })
    }
    return(
        <div className="animal">
            <h5>{ani.name}</h5>
            <p>{ani.price}</p>
            <button onClick={handleRemove} disabled={counter === 0 ? true: false}>-</button>
            <button onClick={handleAdd}>+</button>
            <p>{counter}</p>
        </div>
    )
}