import React from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

const News = (props) => {
const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(true);
const [page, setPage] = useState(1);
const [totalResult, setTotalResult] = useState(0);

 const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  
  const updateNews =async()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=634796f47b5445238318e5fe9c9f30f1&page=${page}&pageSize=${props.pageSize}`
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResult(parsedData.setTotalResult);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    document.title=` NewsMonkey - ${capitalizeFirstLetter(props.category)}`;
    updateNews();
    // eslint-disable-next-line
  }, [])
  

  // const handlePrev = async () =>{
  //  setPage(page-1);
  //  updateNews();
  // }
  // const handleNext= async ()=>{
  //  setPage(page+1);
  //  updateNews();
  // }

  const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=634796f47b5445238318e5fe9c9f30f1&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResult(parsedData.totalResult)
  }


  
    return (
      <>
        <h1 className="text-center" style={{margin:"80px 0px",fontWeight:"bolder",}}>NewsMonkey Top {capitalizeFirstLetter(props.category)} Headlines </h1>
        {loading && <Spinner/>}
        <InfiniteScroll style={{overflow:'hidden'}}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResult}
          loader={<Spinner/>}
          >
        <div className="container">
        <div className="row my-4">
        {articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem 
              title={element.title?element.title.slice(0,20):""}
              description={element.description?element.description.slice(0,88):""}
              imgUrl={element.urlToImage}
            newsUrl={element.url}
            author={element.author}
            date={element.publishedAt}
            source={element.source.name}/>
          </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
        
      </>

     
    );
  
}


News.defaultProps={
  country:"in",
  pageSize:6,
  category:"general"
 }

 News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category:PropTypes.string
 }


export default News;
