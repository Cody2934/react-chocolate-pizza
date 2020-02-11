import React from 'react';
import './App.css';
import Footer from "./bottom.js";
import Section4 from "./ingredients.js";
import Section3 from "./paragraph.js";
import Section2 from "./pizzaPic.js";
import Section1 from "./top.js";
import Header from "./tippyTop.js";

function App() {
  const mixers1 = {type: 'food', mixin: '1 1/2 Cups Milk'};
  const mixers2 = {type: 'alsofood', mixin: '1 1/2 cup mascarpone'};
  const mixers3 ={type: 'foodtoo', mixin: '1/2 tsp pink salt'};
  const mixers4 = {type: 'morefood', mixin: '1 lb Black Mission Figs'};
  const mixers5 = {type: 'stillfood', mixin: '1/2 cup brown sugar'};
  const image1 = './choco-pizza.png';
  const image2 = './van-pic.png';

  return (
  <div>

    <Header/>
    <div> 
    </div>

    <Section1/>
    <div>
      {/* <section className="top">
        <h1>Chocolate Pizza</h1>
        <h6>POSTED ON 15 DEC 2013 / DESSERTS</h6>
        <img src="print-icon.png"/>
      </section> */}
    </div>

    <Section2 image1={image1}/>
    <div>
      {/* <section className="pizzaPic">
        <img src="choco-pizza.png"/>
      </section> */}
    </div>

    <Section3/>
    <div>
      {/* <section className="paragraph">
        <p></p>
        <p></p>
        <p></p>
      </section> */}
    </div>

    <Section4 mixers1={mixers1.mixin} mixers2={mixers2.mixin} mixers3={mixers3.mixin} mixers4={mixers4.mixin} mixers5={mixers5.mixin} bob={mixers1.type}/>
    <div>
      {/* <ul className="ingredients">
        <img src="list-bg.png"/>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}
    </div>

    <Footer image2={image2}/>
    <div>
      {/* <footer className="bottom">
        <img src="van-pic.png" alt="girl"/>
        <h3>Vanessa Stevenson</h3>
        <p></p>
      </footer> */}
    </div>

  </div>
  );
}

export default App;
