import React from 'react';
import './QuickSearch.css';

const QuickSearch = (props) => {
    console.log("props",props)

    const listCategory = ({quickData}) => {
        if(quickData){
            return quickData.map((item) => {
                return(
                   
    <div className="tileContainer somato">
                    <div className="tileComponent1">
                        <img src="https://i.ibb.co/B6RT0Qp/chanderi.jpg" alt="dinner"/>
                    </div>
                    <div className="tileComponent2">
                        <div className="compHeading">
                            <a href="#">Chanderi sarees</a>
                            <p><button>Explore Here</button></p>
                        </div>
                    </div>
                </div>
                )
            })
        }
    }
    return(
        <>
          {/* <div id="quickSearch">
            <span class="quickHeading">Quick Search</span>
            <span class="quickSubHeading"><button>Enjoy the shopping</button></span> */}
            <div class="mainBox">
                {listCategory(props)}
                {/* <div class="tileContainer tomato">
                    <div class="tileComponent1">
                        <img src="https://i.ibb.co/TTZ5HV1/kajivaram.jpg" alt="dinner"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="compHeading">
                            <a href="#">Kanjeevaram sarees</a>
                            <p><button>Explore Here</button></p>
                        </div>
                    </div> */}
                </div>
                {/* <div class="tileContainer comato">
                    <div class="tileComponent1">
                        <img src="https://i.ibb.co/C2h0dD4/bana.jpg" alt="dinner"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="compHeading">
                            <a href="#">Banarasi sarees</a>
                            <p><button>Explore Here</button></p>
                        </div>
                    </div>
                </div>
                <div class="tileContainer komato">
                    <div class="tileComponent1">
                        <img src="https://i.ibb.co/crhBbz5/bandhani-saree.jpg"alt="dinner"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="compHeading">
                            <a href="#">Bandhani sarees</a>
                            <p><button>Explore Here</button></p>
                        </div>
                    </div>
                </div>
                <div class="tileContainer somato">
                    <div class="tileComponent1">
                        <img src="https://i.ibb.co/B6RT0Qp/chanderi.jpg" alt="dinner"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="compHeading">
                            <a href="#">Chanderi sarees</a>
                            <p><button>Explore Here</button></p>
                        </div>
                    </div>
                </div>
                <div class="tileContainer bomato">
                    <div class="tileComponent1">
                        <img src="https://i.ibb.co/qxGg9Hp/tant.jpg" alt="dinner"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="compHeading">
                            <a href="#">Tant sarees</a>
                            <p><button>Explore Here</button></p>
                        </div>
                    </div>
                </div>
                <div class="tileContainer romato">
                    <div class="tileComponent1">
                        <img src="https://i.ibb.co/7JchBpS/ikat-saree.jpg" alt="dinner"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="compHeading">
                            <a href="#">Ikat sarees</a>
                            <p><button>Explore Here</button></p>
                        </div>
                    </div>
                </div> */}
               
            {/* </div> */}
        {/* </div> */}
    
        </>
    )
}


export default QuickSearch;