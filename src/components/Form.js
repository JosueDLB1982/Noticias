import React from 'react'
import styles from './Form.module.css'
import useSelect from '../hooks/useSelect'

const Form = ({setCategory}) => {
    const OPTIONS = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'}
    ]

    // iniciamos nuestro custon hook
    const [category, SelectNews] = useSelect('general', OPTIONS)

    // submitn al Form, pasar categoría a app.js
    const searchNews = e => {
        e.preventDefault()

        setCategory(category)
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={searchNews}
                >
                    <h2 className={styles.heading}>
                        Encuentra Noticias por Categoría
                    </h2>

                    <SelectNews/>

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
