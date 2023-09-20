import React from "react";
import './Details.css';
import Header from "../Header/Header";

function Details(){
        const isLister = false;
        return(
            <div className="details-container">
                <Header isLister={isLister} />
                <div className="frame-12">
                    <div className="yoda-played-by">
                         <div className="yoda">YODA</div>
                         <div className="played-by">played by:Frank Oz</div>
                    </div>
                    <div className="height-mass-born">
                        <div className="height">
                            <div className="num">172</div>
                            <div className="txt">Height</div>
                        </div>
                        <div className="line"></div>
                        <div className="mass">
                            <div className="num">77</div>
                            <div className="txt">Mass</div>
                        </div>
                        <div className="line-2"></div>
                        <div className="born">
                            <div className="num">19BBY</div>
                            <div className="txt">Born</div>
                        </div>
                    </div>
                    <div className="frame-9">
                           <div className="gender">
                            <div className="key">Gender : </div>
                           <div className="value">Male</div>
                           </div>

                           <div className="skin-color">
                            <div className="key">skin color : </div>
                           <div className="value">Green</div>
                           </div>

                           <div className="eye-color">
                            <div className="key">Eye color : </div>
                           <div className="value">Dark</div>
                           </div>

                           <div className="hair-color">
                            <div className="key">Hair color : </div>
                           <div className="value">White</div>
                           </div>

                           <div className="home-world">
                            <div className="key">Home world: </div>
                           <div className="value">Dagobah</div>
                           </div>
                          
                        </div>
                          <div className="species">
                            <div className="key">Species: </div>
                            <div className="value">Dagobah</div>
                           </div>

                           <div className="line-3"></div>
                            <div className="vechicle">
                            <div className="vechicle-txt">Vechiles</div>
                           </div>

                           <div className="lorem-1">
                                 <div className="lorem-container">
                                   <div className="elipse"></div>
                                   <div className="lorem-txt">Lorem ipsum</div>
                                </div>

                                <div className="lorem-container">
                                   <div className="elipse"></div>
                                   <div className="lorem-txt">Lorem ipsum</div>
                                </div>

                           </div>

                           
                           <div className="starship">
                              <div className="line-4"></div>
                              <div className="starship-txt">Starship</div>
                           </div>

                           <div className="lorem-2">
                            <div className="lorem-container">
                                <div className="elipse"></div>
                                <div className="lorem-txt">Lorem ipsum</div>
                            </div>

                            <div className="lorem-container">
                                <div className="elipse"></div>
                                <div className="lorem-txt">Lorem ipsum</div>
                            </div>

                            <div className="lorem-container">
                                <div className="elipse"></div>
                                <div className="lorem-txt">Lorem ipsum</div>
                            </div>
    
                           </div>
                           <div className="featured">
                              <div className="line-5"></div>
                              <div className="featured-txt">Starship</div>
                           </div>

                           <div className="lorem-3">   
                             <div className="lorem-container">
                                <div className="elipse"></div>
                                <div className="lorem-txt">Lorem ipsum</div>
                            </div>

                            <div className="lorem-container">
                                <div className="elipse"></div>
                                <div className="lorem-txt">Lorem ipsum</div>
                             </div>

                            <div className="lorem-container">
                                <div className="elipse"></div>
                                <div className="lorem-txt">Lorem ipsum</div>
                              </div>

                              <div className="single-lorem"><div className="lorem-container">
                                <div className="elipse"></div>
                                <div className="lorem-txt">Lorem ipsum</div></div>
                              </div>
                           </div>
                 </div>  
                <div className="gradient-bg" > </div>
                <div className="y-removebg-preview-5"></div>
                <div className="footer"></div>
                <div className="sw-logo"></div> <div className="TM-txt">TM & © Lucasfilm Ltd. All Rights Reserved</div>
               
            </div>
        )
    
}
export default Details;