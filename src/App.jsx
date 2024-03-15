
import basketpng from "./images/basket.png"
import collect1png from "./images/collect1.png"
import collect2png from "./images/collect2.png"
import collect3png from "./images/collect3.png"
import collect4png from "./images/collect4.png"

import jacket1png from "./images/jacket1.png"
import jacket2png from "./images/jacket2.png"
import jacket3png from "./images/jacket3.png"
import jacket4png from "./images/jacket4.png"
import likesvg from "./images/like.svg"
import viewsvg from "./images/view.svg"


import Header from "./components/Header"
import Footer from "./components/Footer"
import './global.css'

import React from 'react'


const col = [
  {
    name:'Barcelona',
    image:collect1png
  },
  {
    name:'Barcelona',
    image:collect2png
  },
  {
    name:'Barcelona',
    image:collect3png
  },
  {
    name:'Barcelona',
    image:collect4png
  },
]
const jak = [
  {
    image:jacket1png,
    neme:"Cotton-Blend-Jacket",
    mony:"$48.00"
  },
  {
    image:jacket2png,
    neme:"Multi Pocket Jacket",
    mony:"$59.00"
  },
  {
    image:jacket3png,
    neme:"Velvet Blazer",
    mony:"$48.00"
  },
  {
    image:jacket4png,
    neme:"Cotton-Blend-Jacket",
    mony:"$16.00",
    oldin:"$28.00"
  },
]


function App() {
  return (
    <div>
    <body>
      <Header/>
      <main>
        <section class="collect">
            <div class="container">
                {col.map((item) => {
                  return(
                    <div class="collect__box">
                    <p class="collect__title">{item.name}</p>
                    <img src={item.image} alt="collection" class="collect__image" />
                  </div>
                  )
                })}
            </div>
        </section>
        <section class="project">
            <div class="project__top">
                <h3 class="project__top-title">eCommerce Ready</h3>
                <p class="project__top-text">Style your products and shop pages, add a cart widget to your header, and convert clicks into sales.</p>
            </div>
            <div class="project__bottom">
                <div class="container">
                    <p class="project__bottom-text">The Chloe Collection</p>
                    <h3 class="project__bottom-title">The Project Jacket</h3>
                    <button class="project__bottom-button">PURCHASE THEME</button>
                </div>
            </div>
        </section>
        <section class="jacket">
            <div class="jacket__top">
                <h3 class="jacket__top-title">Highly Customizable</h3>
                <p class="jacket__top-text">Style your products and shop pages, add a cart widget to your header, and convert clicks into sales.</p>
            </div>
            <div class="jacket__bottom">
                <div class="container">
                    {jak.map((item) => {
                      return (
                        <div class="jacket__bottom-box">
                          <div class="jacket__bottom-box_top">
                              <img src={item.image} alt="jacket" class="jacket__bottom-box_image" />
                              <div class="jacket__bottom-box_icons">
                                  <button class="jacket__bottom-box_basket">
                                      <img src={basketpng} alt="basket" />
                                      <span>add to cart</span>
                                  </button>
                                  <div class="jacket__bottom-box_info">
                                      <button><img src={likesvg} alt="like" /></button>
                                      <button><img src={viewsvg} alt="view" /></button>
                                  </div>
                              </div>
                          </div>
                          <div class="jacket__bottom-box_bottom">
                              <p class="jacket__bottom-box_name">{item.neme}</p>
                              <p class="jacket__bottom-box_price"><span>{item.oldin}</span> {item.mony}</p>
                          </div>
                        </div>
                      )
                    })}
                </div>
            </div>
        </section>
    </main>
        <Footer/>
      
    </body></div>
  )}

export default App

