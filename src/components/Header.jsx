import React from 'react'
import logosvg from "../images/logo.svg"
import downsvg from "../images/down.svg"
import searchsvg from "../images/search.svg"

function header() {
  return (
  <div>        <header class="header">
    <nav class="header__nav container">
        <a href="" class="header__logo"><img src={logosvg} alt="logo"/></a>
        <ul class="header__list">
            <li class="header__item"><a href="" class="header__link">HOME</a></li>
            <li class="header__item"><a href="" class="header__link">PAGES</a></li>
            <li class="header__item">
                <a href="" class="header__link">PORTFOLIO <img src={downsvg} alt="down"/></a>
                <ul class="header__dropdown">
                    <li class="header__dropdown-item"><a href="" class="header__dropdown-link">SHOP</a></li>
                    <li class="header__dropdown-item"><a href="" class="header__dropdown-link">FASHION</a></li>
                    <li class="header__dropdown-item"><a href="" class="header__dropdown-link">GALLERY</a></li>
                </ul>
            </li>
            <li class="header__item"><a href="" class="header__link">BLOG</a></li>
            <li class="header__item"><a href="" class="header__link">ABOUT</a></li>
            <li class="header__item"><a href="" class="header__link">SHORTCODES</a></li>
        </ul>
        <div class="header__search">
            <input type="text" class="header__search-input" placeholder="Search"/>
            <button class="header__search-button"><img src={searchsvg} alt="search"/></button>
        </div>
    </nav>
    <div class="header__content">
        <h1 class="header__title">Amazing Shop Layouts</h1>
        <p class="header__text">Grayson Collection</p>
        <button class="header__button">SHOP NOW</button>
    </div>
</header></div>
  )
}

export default header