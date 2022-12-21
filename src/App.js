import { useState } from "react"

const App = () => {
    const [value,setValue] = useState('')
    const handleChange = (e) =>{
        setValue(e.target.value)
    }
    console.log(value)
    return (
        <div>
            {value.length < 5 ? <span>longitud minima de 5</span> : null}
            <input name='normal' type='text' value={value} onChange={handleChange} />
        </div>
    )
}

export default App
  