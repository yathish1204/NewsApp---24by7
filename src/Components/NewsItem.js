import React from 'react'

const NewsItem = (props) => {
 let {title,description, imgUrl,newsUrl , author, date, source} = props;
    return (
      <div className='my-3'>
         <div className="card" >
         {/* <span className="position-absolute top-0 start-100  translate-middle badge rounded-pill bg-danger" style={{  top:" 4% !important",left: "81% !important",zIndex: 1}}> </span> */}
        <img loading='lazy' src={!imgUrl?"https://dimages2.corriereobjects.it/files/og_thumbnail/uploads/2024/05/03/66351e0cdf616.jpeg":imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="d-flex justify-content-between ">
            <h4 className="card-title">{title}...</h4>
          <h6><span className="badge text-bg-danger">{source}</span></h6>
          </div>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark btn-sm">Read more</a>
        </div>
      </div>
      
      </div>
    )
  
}

export default NewsItem
