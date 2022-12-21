import { useState } from "react"

const App = () => {
    const [value,setValue] = useState({normal:'por defecto' , texto: '' })
    const handleChange = (e) =>{
        console.log(e.target.name)
       setValue((state) => ({
        ...state,
        [e.target.name]:e.target.value
       }))
    }
    console.log(value)
    return (
        <div>
            {value.length < 5 ? <span>longitud minima de 5</span> : null}
            <input name='normal' type='text' value={value.normal} onChange={handleChange} />
            <textarea name='texto' value={value.texto}  onChange={handleChange}/>
        </div>
    )
}

export default App
  