import React from 'react';
import './Productslider.css';

const Productslider = () => {
    return(
        <>
            <div class="product-slider">
          <div id="main">
            <div class="card">
                <img src="https://i.ibb.co/3cQNVKN/black.jpg" alt="london" title="clock tower"/>
                <button class="redish-button">
                  25% Off 
              </button>
              <div class="like"><span class="	glyphicon glyphicon-heart heart"></span></div>
            </div>
            <div class="card">
                <img src="https://i.ibb.co/9N6FS7m/pink.jpg" alt="london" title="clock tower"/>
                <button class="redish-button">
                 10% Off 
              </button>
              <div class="like"><span class="glyphicon glyphicon-heart heart"></span></div>
            </div>
            <div class="card">
                <img src="https://i.ibb.co/vqzVfK8/purple.jpg" alt="london" title="clock tower"/>
                <button class="redish-button">
                  20% Off
              </button>
              <div class="like"><span class="	glyphicon glyphicon-heart heart"></span></div>
              
            </div>
            <div class="card">
                <img src="https://i.ibb.co/TKTN8Lt/gown.jpg" alt="london" title="clock tower"/>
                <button class="redish-button">
                  40% Off
                </button>
                <div class="like"><span class="	glyphicon glyphicon-heart heart"></span></div>
            </div>
            </div>
        </div>
        </>
    );
}


export default Productslider;