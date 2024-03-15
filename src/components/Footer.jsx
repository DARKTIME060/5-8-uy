import React from 'react'
import mastercardsvg from "../images/mastercard.svg"
import paypalsvg from "../images/paypal.svg"
import pinterestsvg from "../images/pinterest.svg"
import twittersvg from "../images/twitter.svg"
import discoversvg from "../images/discover.svg"
import facebooksvg from "../images/facebook.svg"
import vimeosvg from "../images/vimeo.svg"
import visasvg from "../images/visa.svg"
import youtubesvg from "../images/youtube.svg"

function footer() {
  return (
    <div>        <footer class="footer">
    <div class="footer__top">
        <div class="container">
            <div class="footer__box">
                <p class="footer__title">Customer Services</p>
                <ul class="footer__list">
                    <li class="footer__item"><a href="" class="footer__link">Contact Us</a></li>
                    <li class="footer__item"><a href="" class="footer__link">Shipping</a></li>
                    <li class="footer__item"><a href="" class="footer__link">Click & Collect</a></li>
                    <li class="footer__item"><a href="" class="footer__link">Returns</a></li>
                    <li class="footer__item"><a href="" class="footer__link">FAQ’s</a></li>
                </ul>
            </div>
            <div class="footer__box">
                <p class="footer__title">Customer Assistance</p>
                <ul class="footer__list">
                    <li class="footer__item"><a href="" class="footer__link">Track My Orders</a></li>
                    <li class="footer__item"><a href="" class="footer__link">Online Returns</a></li>
                    <li class="footer__item"><a href="" class="footer__link">Shipping Rates</a></li>
                    <li class="footer__item"><a href="" class="footer__link">Returns & Exchanges</a></li>
                    <li class="footer__item"><a href="" class="footer__link">International Shipping</a></li>
                </ul>
            </div>
            <div class="footer__box">
                <p class="footer__title">Customer Services</p>
                <ul class="footer__list">
                    <li class="footer__item"><a href="" class="footer__link"><img src={facebooksvg} alt="facebook"/> Contact Us</a></li>
                    <li class="footer__item"><a href="" class="footer__link"><img src={twittersvg} alt="twitter"/> Shipping</a></li>
                    <li class="footer__item"><a href="" class="footer__link"><img src={vimeosvg} alt="vimeo"/> Click & Collect</a></li>
                    <li class="footer__item"><a href="" class="footer__link"><img src={pinterestsvg} alt="pinterest"/> Returns</a></li>
                    <li class="footer__item"><a href="" class="footer__link"><img src={youtubesvg} alt="youtube"/> FAQ’s</a></li>
                </ul>
            </div>
            <div class="footer__box">
                <p class="footer__title">Join The Club</p>
                <div class="footer__search">
                    <input type="text" class="footer__input" placeholder="E-mail Address*"/>
                    <button class="footer__button">JOIN</button>
                </div>
                <p class="footer__text">Sign me up to receive emails on new product arrivals, special offers and exclusive events.</p>
                <div class="footer__cards">
                    <a href="" class="footer__card"><img src={visasvg} alt="visa"/></a>
                    <a href="" class="footer__card"><img src={paypalsvg} alt="paypal"/></a>
                    <a href="" class="footer__card"><img src={discoversvg} alt="discover"/></a>
                    <a href="" class="footer__card"><img src={mastercardsvg} alt="mastercard"/></a>
                </div>
            </div>
        </div>
    </div>
    <div class="footer__bottom">
        <p class="footer__author">Designed and Powered by <span>ZICO</span></p>
    </div>
</footer></div>
  )
}

export default footer