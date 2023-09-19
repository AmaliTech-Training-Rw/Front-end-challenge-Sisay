import React from "react";
import './Pagination.css';

class Pagination extends React.Component{
    constructor(props){
        super(props);
        this.state = {currentPage:1};

        this.state = {btnValues : [1, 2, 3,'...', 10 ]};
       
    }  
    
    /*handlePrevClick(){
        this.state.currentPage !== 1?this.setState({currentPage: this.state.currentPage -1}):'';
    }
    
    handleNextClick(){
        this.state.currentPage < 10?this.setState({currentPage: this.state.currentPage + 1}):'';
    }*/
   
        //this.state.currentPage = this.state.currentPage.bind(this);
    changeBtns(newvalue){
      if (newvalue !== '...'){
        this.setState({currentPage: newvalue});
       } 
       else{
            this.setState({btnValues : [1,2,3,4,5,6,7,8,9]});
             
         }
}
    render(){
        
        return (
            <div className="pagination-container">
                <button id="prev" onClick={() => this.state.currentPage !== 1?this.setState({currentPage: this.state.currentPage -1}):''}>Prev</button>
                {this.state.btnValues.map((btn, index)=> {
                    return (
                    <button key={index} id="current-page" value={btn} onClick={() => this.changeBtns(btn)} className={btn === this.state.currentPage?'current-page':''} >
                        {btn}</button>
                    );
                })}
                
                
                <button id="next" onClick={() => this.state.currentPage < 10?this.setState({currentPage: this.state.currentPage + 1}):''}>Next</button>
            </div>
        )
    }
    
}
export default Pagination;