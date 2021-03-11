import{ useState, useEffect } from 'react'

export default function Counter() {
    //setState hook returns state value and a function to set the value
    const [count, setCount] = useState(1)
    
    // example of having an object
    const [user, setUser] = useState({ name: 'Brinn'})
    
    //use effect hooks
    //use effect runs after every render
    useEffect(() => {
        console.log(count)
        return () => {
            console.log('on every unmount')
        }
    })
    
    useEffect(() => {
        console.log('i only run once')
    }, [])
    //event handlers
    const handleIncreaseCount = () => {
        setCount(count + 1)
    }
    return(
        <div>
            <h1>Hello Functional Components</h1>
            <h2>The count is {count}</h2>
            <h3>Hello {user.name}</h3>
            <button onClick={handleIncreaseCount}>Increase the count</button>
        </div>
    )
}