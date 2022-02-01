import { Fragment, useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form";

function App() {
  // definir la categoria y noticia
  const [category, setCategory] = useState('')

  return (
    <Fragment>
      <Header
        title='Buscador de Noticias'
      />

      <div className="container white">
        <Form
          setCategory={setCategory}
        />
      </div>
    </Fragment>
  );
}

export default App;
