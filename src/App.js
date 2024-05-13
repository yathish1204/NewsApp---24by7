// import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import{ BrowserRouter as Router, 
  Route, 
  Routes} from 'react-router-dom'
  import LoadingBar from 'react-top-loading-bar'

const App =()=> {
 const pageSize=5;
 const apiKey=process.env.REACT_APP_NEWS_API;
 
 const [progress, setProgress] = useState(0);


  
    return (
      <div > 
      <Router>
       <Navbar />
       <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        
      />
    {/* <News setProgress={setProgress} apiKey={apiKey}   pageSize={6}  country="in" category="general"/> */}
       <Routes>
    <Route exact path="/" element ={<News setProgress={setProgress} apiKey={apiKey} pageSize={6} key="general"  country="in" category="general" /> }/>
    <Route exact path="/business" element ={<News setProgress={setProgress} apiKey={apiKey}  pageSize={6} key="business"  country="in" category="business" /> }/>
    <Route exact path="/entertainment" element ={<News setProgress={setProgress} apiKey={apiKey}  pageSize={6}  key="entertainment" country="in" category="entertainment"/> }/>
    <Route exact path="/health" element ={<News setProgress={setProgress} apiKey={apiKey}  pageSize={6} key="health" country="in" category="health" /> }/>
    <Route exact path="/science" element ={<News setProgress={setProgress} apiKey={apiKey}  pageSize={6} key="science"  country="in" category="science" /> }/>
    <Route exact path="/sports"  element ={<News setProgress={setProgress} apiKey={apiKey}  pageSize={6} key="sports" country="in" category="sports" /> }/>
    <Route exact path="/technology" element ={<News setProgress={setProgress} apiKey={apiKey}  pageSize={6} key="technology" country="in" category="technology" /> }/>
    </Routes>
      </Router>
      </div>
    )
  
}

export default App ;