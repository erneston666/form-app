function App() {
  const submit = (e) =>{
    e.preventDefault()
    console.log(Array.from(new FormData(e.target)))
  }
  return (
    <form onSubmit={submit}>
      <div>
        <span>
          lala
        </span>
        <input name='campo' />
      </div>
      <input name='campo2' />
      <input type='submit' value='Enviar' />
    </form>
  
  );
}

export default App;
