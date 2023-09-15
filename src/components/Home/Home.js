import React from 'react';
import './Home.css';

function Home(){
    return(
        <div className='container'>
          <div className='txt'>
              <div className='meet'>Meet</div>
               <div className='your-fav'>
                Your favorite Starwars <br/>
                charactors
               </div>
               <div className='recently'>Recently viewed</div>
            
            </div> 
          <div className='photo-room'></div>
          <div className='item-1'><div className='view'>View</div></div>
          <div className='item-2'><div className='view'>View</div></div>
          <div className='item-3'><div className='view'>View</div></div>
        </div>
    );

}
export default Home;