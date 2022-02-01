import News from "./News"

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

export default NewsListing
