import React from "react";
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

 const App = () => {
    
    return  (
    <>   
         <div className="outer-wrap">
            <Header />
            <MainContent />
            <Footer />
        </div>
    </ >
    )
  }





export default App;