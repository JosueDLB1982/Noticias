import News from "./News"
import PropTypes from 'prop-types'

const NewsListing = ({news}) => {
    return (
        <div className="row">
            {news.map(n => (
               <News
                    key={n.url}
                    n={n}
               /> 
            ))}
        </div>
    )
}

NewsListing.propTypes = {
    news : PropTypes.array.isRequired
}

export default NewsListing
