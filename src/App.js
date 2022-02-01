import { Fragment, useState, useEffect } from "react"
import Header from "./components/Header"
import Form from "./components/Form";

function App() {
  // definir la categoria y noticia
  const [category, setCategory] = useState('')
  const [news, setNews] = useState([])

  useEffect(() => {
    const consultAPI = async () => {
      const keyAPI = '5efbe2cd697e4500b9d98ac1dcd7249e'
      const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${category}&apiKey=${keyAPI}`
      const response = await fetch(url)
      const news = await response.json()
      setNews(news.articles) 
    }
    consultAPI()
  }, [category])

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
