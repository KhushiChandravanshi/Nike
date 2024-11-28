import React from 'react';
import './Xyz.css';

const Xyz = () => {
    return (
        <>
            <div className="slider">
                <div className="container">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>

                        {/* Wrapper for slides */}
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src="https://i.ibb.co/NZSnbwr/header2.jpg" alt="Los Angeles" style={{ width: '100%', height: '300px' }} />
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/xmZ7ZtT/hea.jpg" alt="Chicago" style={{ width: '100%', height: '300px' }} />
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/6nBgr87/header.png" alt="Chicago" style={{ width: '100%', height: '300px' }} />
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/3TJv4yG/headdddd.jpg" alt="Chicago" style={{ width: '100%', height: '300px' }} />
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/7WSXd4P/hea.jpg" alt="Chicago" style={{ width: '100%', height: '300px' }} />
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/YBhGkht/head.png" alt="Chicago" style={{ width: '100%', height: '300px' }} />
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/HBn6L3M/heade.jpg" alt="New York" style={{ width: '100%', height: '300px' }} />
                            </div>
                        </div>

                        {/* Left and right controls */}
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Xyz;
