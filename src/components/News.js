import PropTypes from 'prop-types'

const News = ({ n }) => {
    // Extraer los datos con destructuring
    const { urlToImage, url, title, description, source } = n

    const image = (urlToImage) ? // Si la noticia no tiene imagen no la muestra
        <div className="card-image">
            <img
                src={urlToImage}
                alt={title}
            />
            <samp className="card-title">
                {source.name}
            </samp>
        </div> : null

    return (
        <div className="col s12 m6 l4">

            <div className="card">
                {image}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >
                        ver Noticia Completa
                    </a>
                </div>
            </div>
        </div>
    )
}

News.propTypes = {
    n : PropTypes.object.isRequired
}


export default News
