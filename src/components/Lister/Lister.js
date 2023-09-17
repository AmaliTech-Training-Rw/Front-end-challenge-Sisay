import React from "react";
import './Lister.css';
import Header from "../Header/Header";
import { useState } from 'react';

           /* */
function Lister(){
    const [isListerPage, setListerPage] = useState(true);
    return(
        <div className="lister-container">
            <Header isLister={isListerPage} />
            <div className="frame-container">
                <div className="frame">
                    <div className="icon-txt">
                    <div className="icon"></div>
                    <div className="txt">Popular</div>
                    </div>

                    <div className="season">
                    <div className="icon"></div>
                    <div className="txt">Season 1</div>
                    </div>

                    <div className="season">
                    <div className="icon"></div>
                    <div className="txt">Season 2</div>
                    </div>

                    <div className="season">
                    <div className="icon"></div>
                    <div className="txt">Season 3</div>
                    </div>

                    <div className="season">
                    <div className="icon"></div>
                    <div className="txt">Season 4</div>
                    </div>

                    <div className="search-container">
                        <div className="gala-search"></div>
                        <div className="line">|</div>
                        <input type="text" placeholder="Search"></input>
                        <div className="charm-cross"></div>
                    </div>

                </div>
            </div>
            <div className="grid-container">
               <div className="item1">
                  <div className="inside">
                   <div className="inside1"></div>
                   <div className="about">
                    <div className="charactor">Obi-Wan Kenobi</div>
                    <div className="actor">Ewan McGregor</div>
                    <div className="learn-more">Learn More{'>'}</div>
                   </div>
                </div>
                <div className="item"><div className="iside"></div></div>
                 <div className="item"><div className="iside"></div></div>
                 </div>
            </div>
        </div>
    )
}
export default Lister;