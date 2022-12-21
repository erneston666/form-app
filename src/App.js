import { useState } from "react"

const App = () => {
    const [value,setValue] = useState({normal:'por defecto' , texto: '' , select:'', check:false})
    const handleChange = (target) =>{
        console.log(target.type, target.checked)
        console.log(target.name)
       setValue((state) => ({
        ...state,
        [target.name]:target.type === 'checkbox' ? target.checked : target.value
       }))
    }
    console.log(value)
    return (
        <div>
            {value.length < 5 ? <span>longitud minima de 5</span> : null}
            <input name='normal' type='text' value={value.normal} onChange={handleChange} />
            <textarea name='texto' value={value.texto}  onChange={handleChange}/>
            <select value={value.select} name='select' onChange={handleChange}>
                <option value=''> --- Seleccione ---</option>
                <option value='chanchofeliz'> Chancho Feliz</option>
                <option value='chanchitofeliz'> Chanchito Feliz</option>
                <option value='chanchitotriste'> Chanchito Triste</option>
                <option value='felipe'> Felipe</option>
            </select>
            <input
            type="checkbox"
            name="check"
            onChange={handleChange}
            checked={value.check}
            />
        </div>
    )
}

export default App
  