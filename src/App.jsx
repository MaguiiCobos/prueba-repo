import Footer from "./Footer.jsx"

function App() {

  // todo lo q va por encima del return es JavaScript
  let nombre = "magui"

  const sumar = () => {
    console.log(5+2);
  }

  return (
    <div>
      <h1>Hola {nombre}</h1>
      <h2>como estas?</h2>
      <button onClick={sumar}>Sumar</button>

      <Footer /> {/* asi se llama a la funcion del footer, no se llama footer() */}
    </div>
    
  )
}

export default App
