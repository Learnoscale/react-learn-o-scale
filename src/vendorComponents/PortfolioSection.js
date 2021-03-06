import React from 'react'
import './style.css'
export const PortfolioSection = () => (
    <div>
      {/* ======= Breadcrumbs Section ======= */}
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Portfolio Details</h2>
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="portfolio.html">Portfolio</a>
              </li>
              <li>Portfolio Details</li>
            </ol>
          </div>
        </div>
      </section>
      {/* Breadcrumbs Section */}
      {/* ======= Portfolio Details Section ======= */}
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img src="assets/img/portfolio/portfolio-details-1.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/img/portfolio/portfolio-details-2.jpg"  alt=""  />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/img/portfolio/portfolio-details-3.jpg"  alt=""  />
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: Web design
                  </li>
                  <li>
                    <strong>Client</strong>: ASU Company
                  </li>
                  <li>
                    <strong>Project date</strong>: 01 March, 2020
                  </li>
                  <li>
                    <strong>Project URL</strong>: <Link to="#">www.example.com</Link>
                  </li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>This is an example of portfolio detail</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                  itaque inventore commodi labore quia quia. Exercitationem
                  repudiandae officiis neque suscipit non officia eaque itaque
                  enim. Voluptatem officia accusantium nesciunt est omnis tempora
                  consectetur dignissimos. Sequi nulla at esse enim cum deserunt
                  eius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Portfolio Details Section */}
    </div>
  )