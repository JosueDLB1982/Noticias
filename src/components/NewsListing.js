import News from "./News"

const NewsListing = ({news}) => {
    return (
        <div className="row">
            {news.map(n => (
               <News/> 
            ))}
        </div>
    )
}

export default NewsListing
