import React from'react';
import './Header.css';

// This header used in all pages and adjusts its appearance according to the calling page.
class Header extends React.Component {
    constructor(props){
        super(props);
    }

  
    render(){
       return (
        <div className="container" style={this.props.isLister?{height:164 + 'px'}:{height:145 + 'px'}}>
            <div className='logo'></div>
            {this.props.isLister?'':
            <div className='search'>
               <div className='search-img'></div>
                <div className='search-txt'>Search</div>
             </div>}
            <div className='home'>
                 <a href='#'>Home</a>
            </div>
            <div className='lister'>
                 <a href='#'>Lister</a>
            </div>
      </div>
    );
}
      
} export default Header;
  