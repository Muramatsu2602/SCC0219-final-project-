import './LandingPage.style.css'

import React from 'react'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Nav from '../components/Nav.jsx'
import Card from '../components/Card.jsx'

export default function LandingPage () {
  return (
    <>
      <Header />
      <Nav />
      <div class='landing-hero'>
        <div class='hero-text'>
          <h1>Welcome to Pintastic</h1>
          <p>Discover the best collection of pins and stickers!</p>
        </div>
      </div>
      <main>
        <section id='landing-highlighted'>
          <div class='section-title'>
            <span>Best selling products</span>
          </div>
          <div id='highlighted-content'>
            <div id='highlighted-options'>
              <ul>
                <li>
                  <a href='#'>New Arrivals</a>
                </li>
                <li>
                  <a href='#'>Best Sellers</a>
                </li>
                <li>
                  <a href='#'>Sale Items</a>
                </li>
                <li>
                  <a href='#'>Clearance</a>
                </li>
              </ul>

              <Button buttonText={'More Products'} />
            </div>
            <div id='highlighted-items'>
              <Card
                productTitle={'Product Title'}
                productDescription={'Space for a small product description'}
                productPrice={'5.99'}
                productDiscountPercentage={'4.3'}
                productImage={'./assets/img/items/caramelo.png'}
              />

              <Card
                productTitle={'Product Title'}
                productDescription={'Space for a small product description'}
                productPrice={'5.99'}
                productDiscountPercentage={'4.3'}
                productImage={'./assets/img/items/caramelo.png'}
              />

              <Card
                productTitle={'Product Title'}
                productDescription={'Space for a small product description'}
                productPrice={'5.99'}
                productDiscountPercentage={'4.3'}
                productImage={'./assets/img/items/caramelo.png'}
              />
            </div>
          </div>
        </section>

        <hr />
        <section id='landing-testimonials'>
          <div class='section-title'>
            <span>Relato de nossos clientes</span>
          </div>
          <div id='testimonials-content'>
            <div class='testimonial'>
              <div class='testimonial-content'>
                <p class='testimonial-text'>
                  "Pintastic has made it so easy for me to find unique and
                  high-quality pins for my collection. I'm always impressed with
                  the selection and the customer service."
                </p>
              </div>
              <div class='testimonial-image'>
                <img
                  src='img/testimonials/testimonial-1.jpeg'
                  alt='Testimonial 1'
                  class='testimonial-avatar'
                />
              </div>
              <p class='testimonial-author'>Kenzo Johnson</p>
            </div>

            <div class='testimonial'>
              <div class='testimonial-content'>
                <p class='testimonial-text'>
                  "Pintastic is my go-to for all things pins and stickers. The
                  website is user-friendly and the checkout process is a breeze.
                  I can always count on Pintastic to deliver high-quality
                  products!"
                </p>
              </div>
              <div class='testimonial-image'>
                <img
                  src='img/testimonials/testimonial-3.jpeg'
                  alt='Testimonial 3'
                  class='testimonial-avatar'
                />
              </div>
              <p class='testimonial-author'>Emily Chen</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
