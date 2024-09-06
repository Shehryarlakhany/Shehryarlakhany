// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  return (
    <>
      <main className="home overflow-x-hidden">
        <section className="home-banner position-relative">
          <div className="container-fluid custom-container">
            <div className="row">
              <div className="col-12">
                <div className="home-banner-wrapper row align-items-center">
                  <div className="col-12 col-lg-6 col-xl-7 home-banner-text-col position-relative">
                    <div className="sub-heading d-flex align-items-center">
                      <img src="./assets/image/orangeDot.png" alt="orange-dot" />
                      <p>I AM FULL STACK DEVELOPER</p>
                    </div>
                    <div className="animate-heading">
                      <h1 className="black-color h1 home-one-title ah-headline clip is-full-width">
                        Creative
                        Design and Web
                        {/* <span className="orange-color">
                          <span className="ah-words-wrapper" style="width: 16.2922px; overflow: hidden;">
                            <b className="is-hidden"> Solutions</b>
                            <b className="is-visible">Design</b>
                          </span>
                        </span> */}
                        <br />
                      </h1>
                    </div>
                    <p className="h5 line-height-7 mt-20 secondary-black fw-400">
                      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                      minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis
                      dolor repellendus. Temporibus autem quibusdam et.
                    </p>
                    <a className="btn_effect btn home-banner-btn orange-btn mt-50"
                      href="https://credesign.vercel.app/onePage/onePageOne/resume.html"><span
                        className="z-1 position-relative">Download My CV</span>
                    </a>
                    <div className="banner-particle-one-container">
                      <img className="position-absolute banner-particle-one d-none d-lg-inline"
                        src="./assets/image/particleOne.png" alt="banner particle one" />
                    </div>
                    <div className="banner-particle-two-container">
                      <img className="position-absolute banner-particle-two delay-one"
                        src="./assets/image/particleTwo.png" alt="banner particle two" />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 col-xl-5 text-center position-relative home-banner-img-col">
                    <div className="banner-particle-one-container">
                      <img className="position-absolute banner-particle-one d-lg-none"
                        src="./assets/image/particleOne.png" alt="banner particle one" />
                    </div>

                    <img className="position-absolute home-banner-shape bg-move-3d"
                      src="./assets/image/homeNannerShape.png" alt="banner-shape" />
                    <img className="img-fluid position-relative z-index-10 home-banner-img"
                      src="./assets/image/bannerImg.png" alt="banner-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row align-items-center">
                  <div className="about-image-col col-12 col-lg-6 text-center">
                    <div className="img-overlay mx-auto mx-lg-0">
                      <img className="img-fluid" src="./assets/image/about.png" alt="about image" />
                    </div>
                  </div>
                  <div className="about-text-col col-12 col-lg-6">
                    <div className="about-text-top">
                      <div className="section-heading">
                        <div className="sub-heading d-flex align-items-center">
                          <img src="./assets/image/orangeDot.png" alt="orange-dot" />
                          <p>About Me</p>
                        </div>
                        <h2 className="black-color line-height-3 h2">
                          I Can Design Anything You Want
                        </h2>
                      </div>
                      <p className="secondary-black line-height-7 mt-20">
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                        minus id quod maxime placeat facere possimus, omnis voluptas assumenda est,
                        omnis dolor repellendus. Temporibus autem quibusdam et aut officiis. Nam libero
                        tempore, cum soluta
                        nobis est eligendi optio cumque nihil impedit.
                      </p>
                    </div>
                    <div className="row row-mobile-margin gy-3 gy-sm-0 mt-50">
                      <div className="col-12 col-sm-6 col-lg-6 d-flex align-items-center">
                        <div className="mr-10">
                          <img src="./assets/image/aboutIconOne.png" alt="about icon one" />
                        </div>
                        <div className="about-complete-project">
                          <h4 className="fw-700 orange-color h4"><span className="counter">350</span>+</h4>
                          <h4 className="fw-500 black-color h4">Complete Project</h4>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-lg-6 d-flex align-items-center">
                        <div className="mr-10">
                          <img src="./assets/image/aboutIconTwo.png" alt="about icon two" />
                        </div>
                        <div className="about-years-experience">
                          <h4 className="fw-700 orange-color h4"><span className="counter">16</span>+</h4>
                          <h4 className="fw-500 black-color h4">Year of experience</h4>
                        </div>
                      </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500"
                      className="row flex-column row-mobile-margin mt-50 aos-init aos-animate">
                      <div className="col-12 mb-0 mb-20 ">
                        <div className="row">
                          <div className="col-12 col-sm-6 col-lg-6">
                            <div className="mb-20 d-flex align-items-center">
                              <svg className="svg-inline--fa fa-square-check mr-10 h6 orange-color"
                                aria-hidden="true" focusable="false" data-prefix="far"
                                data-icon="square-check" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                data-fa-i2svg="">
                                <path fill="currentColor"
                                  d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z">
                                </path>
                              </svg>
                              <p>Work simple and cline design</p>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-6">
                            <div className="mb-20 d-flex align-items-center">
                              <svg className="svg-inline--fa fa-square-check mr-10 h6 orange-color"
                                aria-hidden="true" focusable="false" data-prefix="far"
                                data-icon="square-check" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                data-fa-i2svg="">
                                <path fill="currentColor"
                                  d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z">
                                </path>
                              </svg>
                              <p>Web Design Full stack</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12 col-sm-6 col-lg-6">
                            <div className="d-flex align-items-center mb-20">
                              <svg className="svg-inline--fa fa-square-check mr-10 h6 orange-color"
                                aria-hidden="true" focusable="false" data-prefix="far"
                                data-icon="square-check" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                data-fa-i2svg="">
                                <path fill="currentColor"
                                  d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z">
                                </path>
                              </svg>
                              <p>New idea and user friendly design</p>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-6">
                            <div className="d-flex align-items-center">
                              <svg className="svg-inline--fa fa-square-check mr-10 h6 orange-color"
                                aria-hidden="true" focusable="false" data-prefix="far"
                                data-icon="square-check" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                data-fa-i2svg="">
                                <path fill="currentColor"
                                  d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z">
                                </path>
                              </svg>
                              <p>Unlimited Revisions</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500"
                      className="btn btn_effect home-banner-btn orange-btn mt-50 aos-init aos-animate"
                      href="https://credesign.vercel.app/onePage/onePageOne/resume.html"><span
                        className="position-relative z-1">Download My CV</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading-middle">
                  <div className="sub-heading d-flex align-items-center mx-auto">
                    <img src="./assets/image/orangeDot.png" alt="orange-dot" />
                    <p>My Service</p>
                  </div>
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    Services I offer
                  </h2>
                </div>
                <div className="service-grid-container mt-50 row-mobile-margin">
                  <div className="service-grid-item text-center">
                    <img className="service-item-img" src="./assets/image/serviceOne.png" alt="service-img-one" />
                    <h3 className="h3 fw-500 service-item-heading black-color">UI/UX Design</h3>
                    <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                      Hen our power of choice is untrammelled and when nothing prevents our being able
                    </p>
                  </div>
                  <div className="service-grid-item text-center">
                    <img className="service-item-img" src="./assets/image/serviceTwo.png" alt="service-img-two" />
                    <h3 className="h3 fw-500 service-item-heading black-color">Mobile App</h3>
                    <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                      Hen our power of choice is untrammelled and when nothing prevents our being able
                    </p>
                  </div>
                  <div className="service-grid-item text-center">
                    <img className="service-item-img" src="./assets/image/serviceThree.png"
                      alt="service-img-three" />
                    <h3 className="h3 fw-500 service-item-heading black-color">Graphic Design</h3>
                    <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                      Hen our power of choice is untrammelled and when nothing prevents our being able
                    </p>
                  </div>
                  <div className="service-grid-item text-center">
                    <img className="service-item-img" src="./assets/image/serviceFour.png" alt="service-img-four" />
                    <h3 className="h3 fw-500 service-item-heading black-color">Web Developer</h3>
                    <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                      Hen our power of choice is untrammelled and when nothing prevents our being able
                    </p>
                  </div>
                  <div className="service-grid-item text-center">
                    <img className="service-item-img" src="./assets/image/serviceFive.png" alt="service-img-five" />
                    <h3 className="h3 fw-500 service-item-heading black-color">SEO Optimisation</h3>
                    <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                      Hen our power of choice is untrammelled and when nothing prevents our being able
                    </p>
                  </div>
                  <div className="service-grid-item text-center">
                    <img className="service-item-img" src="./assets/image/serviceSix.png" alt="service-img-six" />
                    <h3 className="h3 fw-500 service-item-heading black-color">WordPress Developer</h3>
                    <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                      Hen our power of choice is untrammelled and when nothing prevents our being able
                    </p>
                  </div>
                  <div className="service-grid-item text-center">
                    <img className="service-item-img" src="./assets/image/serviceSeven.png"
                      alt="service-img-seven" />
                    <h3 className="h3 fw-500 service-item-heading black-color">App Development</h3>
                    <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                      Hen our power of choice is untrammelled and when nothing prevents our being able
                    </p>
                  </div>
                  <div className="service-grid-item text-center">
                    <img className="service-item-img" src="./assets/image/serviceEight.png"
                      alt="service-img-eight" />
                    <h3 className="h3 fw-500 service-item-heading black-color">Business Strategy</h3>
                    <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                      Hen our power of choice is untrammelled and when nothing prevents our being able
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="resume">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="resume-wrapper">
                  <div className="section-heading-middle">
                    <div className="sub-heading d-flex align-items-center mx-auto">
                      <img src="./assets/image/orangeDot.png" alt="orange-dot" />
                      <p>My Resume</p>
                    </div>
                    <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                      10+ YEARS OF EXPERIENCE
                    </h2>
                  </div>
                  <div className="row mt-50 row-mobile-margin">
                    <div className="col-12 col-lg-2">
                      <div
                        className="resume-topics h-100 flex-column justify-content-center position-relative">
                        <h3
                          className="h3 line-height-3 resume-topic-item resume-topic-one fw-500 text-black position-absolute">
                          Education</h3>
                        <h3
                          className="h3 line-height-3 resume-topic-item resume-topic-two fw-500 text-black position-absolute">
                          Software Skills
                        </h3>
                        <h3
                          className="h3 line-height-3 resume-topic-item resume-topic-three fw-500 text-black position-absolute">
                          Experience</h3>
                      </div>
                    </div>
                    <div className="col-12 col-lg-10">
                      <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800"
                        className="resume-education bg-white aos-init aos-animate">
                        <div className="row">
                          <div className="col-lg-4 resume-first-item">
                            <h4 className="h4 text-black fw-500">
                              BSc in Computer Science
                            </h4>
                            <p className="p secondary-black fw-400 line-height-7 mt-10">
                              University of ULAV (2018 - 2022)
                            </p>
                            <p className="p secondary-black fw-400 line-height-7 mt-20">
                              Pomnis voluptas assumenda est, omnis dolor repellendus.
                            </p>
                          </div>
                          <div className="col-lg-4 resume-second-item">
                            <h4 className="h4 text-black fw-500">
                              AS - Science &amp; Information
                            </h4>
                            <p className="p secondary-black fw-400 line-height-7 mt-10">
                              University of ULAV (2016 - 2018)
                            </p>
                            <p className="p secondary-black fw-400 line-height-7 mt-20">
                              Pomnis voluptas assumenda est, omnis dolor repellendus.
                            </p>
                          </div>
                          <div className="col-lg-4 resume-third-item">
                            <h4 className="h4 text-black fw-500">
                              Secondary School Education
                            </h4>
                            <p className="p secondary-black fw-400 line-height-7 mt-10">
                              Kindergarten (2006 - 2016)
                            </p>
                            <p className="p secondary-black fw-400 line-height-7 mt-20">
                              Pomnis voluptas assumenda est, omnis dolor repellendus.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"
                        className="resume-skills bg-white mt-4 aos-init aos-animate">
                        <div className="row">
                          <div className="col-lg-4 resume-first-item">
                            <h4 className="h4 text-black fw-500">
                              UI/UX Design
                            </h4>
                            <div className="row mt-10 justify-content-between">
                              <p
                                className="col-10 p secondary-black fw-400 line-height-7 skill-name position-relative">
                                Figma
                              </p>
                              <p className="col-2 p secondary-black fw-400 line-height-7">
                                90%
                              </p>
                            </div>
                            <div className="row justify-content-between mt-10">
                              <p
                                className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                Adobe XD
                              </p>
                              <p className="p col-2 secondary-black fw-400 line-height-7">
                                85%
                              </p>
                            </div>
                            <div className="row justify-content-between mt-10">
                              <p
                                className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                Photoshop
                              </p>
                              <p className="p col-2 secondary-black fw-400 line-height-7">
                                80%
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-4 resume-second-item">
                            <h4 className="h4 text-black fw-500">
                              Web Developer
                            </h4>
                            <div className="row mt-10 justify-content-between">
                              <p
                                className="col-10 p secondary-black fw-400 line-height-7 skill-name position-relative">
                                WordPress
                              </p>
                              <p className="col-2 p secondary-black fw-400 line-height-7">
                                90%
                              </p>
                            </div>
                            <div className="row justify-content-between mt-10">
                              <p
                                className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                Mockplus
                              </p>
                              <p className="p col-2 secondary-black fw-400 line-height-7">
                                85%
                              </p>
                            </div>
                            <div className="row justify-content-between mt-10">
                              <p
                                className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                Weebly
                              </p>
                              <p className="p col-2 secondary-black fw-400 line-height-7">
                                80%
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-4 resume-third-item">
                            <h4 className="h4 text-black fw-500">
                              App Development
                            </h4>
                            <div className="row mt-10 justify-content-between">
                              <p
                                className="col-10 p secondary-black fw-400 line-height-7 skill-name position-relative">
                                Quixy
                              </p>
                              <p className="col-2 p secondary-black fw-400 line-height-7">
                                92%
                              </p>
                            </div>
                            <div className="row justify-content-between mt-10">
                              <p
                                className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                AppyPie
                              </p>
                              <p className="p col-2 secondary-black fw-400 line-height-7">
                                87%
                              </p>
                            </div>
                            <div className="row justify-content-between mt-10">
                              <p
                                className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                iBuildApp
                              </p>
                              <p className="p col-2 secondary-black fw-400 line-height-7">
                                82%
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="800"
                        className="resume-education mt-4 bg-white aos-init aos-animate">
                        <div className="row">
                          <div className="col-lg-4 resume-first-item">
                            <h4 className="h4 text-black fw-500">
                              Web Developer &amp; Trainer
                            </h4>
                            <p className="p secondary-black fw-400 line-height-7 mt-10">
                              Brac Developer Team - (2012 - 2016)
                            </p>
                            <p className="p secondary-black fw-400 line-height-7 mt-20">
                              Pomnis voluptas assumenda est, omnis dolor repellendus.
                            </p>
                          </div>
                          <div className="col-lg-4 resume-second-item">
                            <h4 className="h4 text-black fw-500">
                              Front-end Developer
                            </h4>
                            <p className="p secondary-black fw-400 line-height-7 mt-10">
                              Brane - (2020 - 2011)
                            </p>
                            <p className="p secondary-black fw-400 line-height-7 mt-20">
                              Pomnis voluptas assumenda est, omnis dolor repellendus.
                            </p>
                          </div>
                          <div className="col-lg-4 resume-third-item">
                            <h4 className="h4 text-black fw-500">
                              UI/UX Designer
                            </h4>
                            <p className="p secondary-black fw-400 line-height-7 mt-10">
                              Google Out Tech - (2017 - Present)
                            </p>
                            <p className="p secondary-black fw-400 line-height-7 mt-20">
                              Pomnis voluptas assumenda est, omnis dolor repellendus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="portfolio-wrapper">
                  <div className="section-heading-middle">
                    <div className="sub-heading d-flex align-items-center mx-auto">
                      <img src="./assets/image/orangeDot.png" alt="orange-dot" />
                      <p>My Portfolio</p>
                    </div>
                    <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                      VISIT MY PORTFOLIO
                    </h2>
                  </div>
                  <div className="mt-50 row-mobile-margin">
                    <div className="controls d-flex justify-content-center flex-wrap gap-1 gap-lg-4 mb-45">
                      <button type="button" className="control filter btn .outline-0 border-0 secondary-black"
                        data-filter=".all">All</button>
                      <button type="button" className="control filter btn .outline-0 border-0 secondary-black"
                        data-filter=".ui">UI/Ux Design</button>
                      <button type="button" className="control filter btn .outline-0 border-0 secondary-black"
                        data-filter=".branding">Branding Design</button>
                      <button type="button" className="control filter btn .outline-0 border-0 secondary-black"
                        data-filter=".graphic">Graphic Design</button>
                      <button type="button"
                        className="control filter btn .outline-0 border-0 secondary-black mixitup-control-active"
                        data-filter=".app">App Development</button>
                      <button type="button" className="control filter btn .outline-0 border-0 secondary-black"
                        data-filter=".web">Web Design</button>
                    </div>
                    <div className="portfolio-massonary-container" id="MixItUp957C77" style="">
                      <div className="portfolio-massonary-items mix ui all position-relative"
                        style="display: none;">
                        <div className="modal fade" id="portfolioModalOne" tabIndex="-1" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered justify-content-center">
                            <div>
                              <button type="button" className="btn-close mb-10 btn"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                              <img className="img-fluid" src="./assets/image/portfolioOne.png"
                                alt="portfolio img" />
                            </div>
                          </div>
                        </div>
                        <img className="img-fluid" src="./assets/image/portfolioOne.png" alt="portfolio img" />
                        <div className="portfolio-card-overlay w-100 position-absolute top-0">
                        </div>
                        <div
                          className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                          <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                            <p className="text-white fw-400 line-height-7">Graphic Design</p>
                            <a data-bs-toggle="modal" data-bs-target="#portfolioModalOne"
                              href="https://credesign.vercel.app/onePage/onePageOne/index.html#portfolioOne"
                              className="h4 text-white fw-600 line-height-3">
                              The best way to impress your web
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-massonary-items mix graphic all position-relative"
                        style="display: none;">
                        <div className="modal fade" id="portfolioModalTwo" tabIndex="-1" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered justify-content-center">
                            <div>
                              <button type="button" className="btn-close mb-10 btn"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                              <img className="img-fluid" src="./assets/image/portfolioTwo.png"
                                alt="portfolio img" />
                            </div>
                          </div>
                        </div>
                        <img className="img-fluid" src="./assets/image/portfolioTwo.png" alt="portfolio img" />
                        <div className="portfolio-card-overlay w-100 position-absolute top-0">
                        </div>
                        <div
                          className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                          <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                            <p className="text-white fw-400 line-height-7">Graphic Design</p>
                            <a data-bs-toggle="modal" data-bs-target="#portfolioModalTwo"
                              href="https://credesign.vercel.app/onePage/onePageOne/index.html#portfolioTwo"
                              className="h4 text-white fw-600 line-height-3">
                              The best way to impress your web
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-massonary-items mix ui graphic all position-relative"
                        style="display: none;">
                        <div className="modal fade" id="portfolioModalThree" tabIndex="-1"
                          aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered justify-content-center">
                            <div>
                              <button type="button" className="btn-close mb-10 btn"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                              <img className="img-fluid" src="./assets/image/portfolioThree.png"
                                alt="portfolio img" />
                            </div>
                          </div>
                        </div>
                        <img className="img-fluid" src="./assets/image/portfolioThree.png"
                          alt="portfolio img" />
                        <div className="portfolio-card-overlay w-100 position-absolute top-0">
                        </div>
                        <div
                          className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                          <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                            <p className="text-white fw-400 line-height-7">Graphic Design</p>
                            <a data-bs-toggle="modal" data-bs-target="#portfolioModalThree"
                              href="https://credesign.vercel.app/onePage/onePageOne/index.html#portfolioThree"
                              className="h4 text-white fw-600 line-height-3">
                              The best way to impress your web
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-massonary-items mix web all position-relative"
                        style="display: none;">
                        <div className="modal fade" id="portfolioModalFour" tabIndex="-1"
                          aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered justify-content-center">
                            <div>
                              <button type="button" className="btn-close mb-10 btn"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                              <img className="img-fluid" src="./assets/image/portfolioFour.png"
                                alt="portfolio img" />
                            </div>
                          </div>
                        </div>
                        <img className="img-fluid" src="./assets/image/portfolioFour.png" alt="portfolio img" />
                        <div className="portfolio-card-overlay w-100 position-absolute top-0">
                        </div>
                        <div
                          className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                          <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                            <p className="text-white fw-400 line-height-7">Graphic Design</p>
                            <a data-bs-toggle="modal" data-bs-target="#portfolioModalFour"
                              href="https://credesign.vercel.app/onePage/onePageOne/index.html#portfolioFour"
                              className="h4 text-white fw-600 line-height-3">
                              The best way to impress your web
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-massonary-items mix app all position-relative" style="">
                        <div className="modal fade" id="portfolioModalFive" tabIndex="-1"
                          aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered justify-content-center">
                            <div>
                              <button type="button" className="btn-close mb-10 btn"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                              <img className="img-fluid" src="./assets/image/portfolioFive.png"
                                alt="portfolio img" />
                            </div>
                          </div>
                        </div>
                        <img className="img-fluid" src="./assets/image/portfolioFive.png" alt="portfolio img" />
                        <div className="portfolio-card-overlay w-100 position-absolute top-0">
                        </div>
                        <div
                          className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                          <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                            <p className="text-white fw-400 line-height-7">Graphic Design</p>
                            <a data-bs-toggle="modal" data-bs-target="#portfolioModalFive"
                              href="https://credesign.vercel.app/onePage/onePageOne/index.html#portfolioFive"
                              className="h4 text-white fw-600 line-height-3">
                              The best way to impress your web
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-massonary-items mix branding all position-relative"
                        style="display: none;">
                        <div className="modal fade" id="portfolioModalSix" tabIndex="-1" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered justify-content-center">
                            <div>
                              <button type="button" className="btn-close mb-10 btn"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                              <img className="img-fluid" src="./assets/image/portfolioSix.png"
                                alt="portfolio img" />
                            </div>
                          </div>
                        </div>
                        <img className="img-fluid" src="./assets/image/portfolioSix.png" alt="portfolio img" />
                        <div className="portfolio-card-overlay w-100 position-absolute top-0">
                        </div>
                        <div
                          className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                          <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                            <p className="text-white fw-400 line-height-7">Graphic Design</p>
                            <a data-bs-toggle="modal" data-bs-target="#portfolioModalSix"
                              href="https://credesign.vercel.app/onePage/onePageOne/index.html#portfolioSix"
                              className="h4 text-white fw-600 line-height-3">
                              The best way to impress your web
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-massonary-items mix web all position-relative"
                        style="display: none;">
                        <div className="modal fade" id="portfolioModalSeven" tabIndex="-1"
                          aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered justify-content-center">
                            <div>
                              <button type="button" className="btn-close mb-10 btn"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                              <img className="img-fluid" src="./assets/image/portfolioSeven.png"
                                alt="portfolio img" />
                            </div>
                          </div>
                        </div>
                        <img className="img-fluid" src="./assets/image/portfolioSeven.png"
                          alt="portfolio img" />
                        <div className="portfolio-card-overlay w-100 position-absolute top-0">
                        </div>
                        <div
                          className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                          <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                            <p className="text-white fw-400 line-height-7">Graphic Design</p>
                            <a data-bs-toggle="modal" data-bs-target="#portfolioModalSeven"
                              href="https://credesign.vercel.app/onePage/onePageOne/index.html#portfolioSeven"
                              className="h4 text-white fw-600 line-height-3">
                              The best way to impress your web
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-massonary-items mix app all position-relative" style="">
                        <div className="modal fade" id="portfolioModalEight" tabIndex="-1"
                          aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered justify-content-center">
                            <div>
                              <button type="button" className="btn-close mb-10 btn"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                              <img className="img-fluid" src="./assets/image/portfolioEight.png"
                                alt="portfolio img" />
                            </div>
                          </div>
                        </div>
                        <img className="img-fluid" src="./assets/image/portfolioEight.png"
                          alt="portfolio img" />
                        <div className="portfolio-card-overlay w-100 position-absolute top-0">
                        </div>
                        <div
                          className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                          <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                            <p className="text-white fw-400 line-height-7">Graphic Design</p>
                            <a data-bs-toggle="modal" data-bs-target="#portfolioModalEight"
                              href="https://credesign.vercel.app/onePage/onePageOne/index.html#portfolioEight"
                              className="h4 text-white fw-600 line-height-3">
                              The best way to impress your web
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section id="contact" className="home-contact">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="home-contact-wrapper">
                  <div className="section-heading-middle">
                    <div className="sub-heading d-flex align-items-center mx-auto">
                      <img src="./assets/image/orangeDot.png" alt="orange-dot" />
                      <p>My Contact</p>
                    </div>
                    <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                      I WANT TO HEAR FROM YOU
                    </h2>
                  </div>
                  <div className="home-contact-info-container row row-mobile-margin mt-50 align-items-start">
                    <div className="col-12 col-md-12 home-contact-icon-container">
                      <div className="row row-mobile-margin gy-3 gy-sm-0">
                        <div className="col-12 col-md-4 d-flex align-items-center">
                          <div className="mr-10">
                            <div className="light-orange-bg-icon">
                              <svg className="svg-inline--fa fa-location-dot orange-color"
                                aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="location-dot" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                data-fa-i2svg="">
                                <path fill="currentColor"
                                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z">
                                </path>
                              </svg>
                            </div>
                          </div>
                          <div className="about-complete-project">
                            <h4 className="fw-500 black-color h4">Address</h4>
                            <p className="fw-400 secondary-black">
                              <a href="geo:377749">
                                202 Dog Hill Lane Beloit, KS 67420
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex align-items-center">
                          <div className="mr-10">
                            <div className="light-orange-bg-icon">
                              <svg className="svg-inline--fa fa-phone-volume orange-color"
                                aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="phone-volume" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                data-fa-i2svg="">
                                <path fill="currentColor"
                                  d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z">
                                </path>
                              </svg>
                            </div>
                          </div>
                          <div className="about-years-experience">
                            <h4 className="fw-500 black-color h4">Phone</h4>
                            <p className="fw-400 secondary-black">
                              <a href="tel:01589634755">+01589634755</a>
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex align-items-center">
                          <div className="mr-10">
                            <div className="light-orange-bg-icon">
                              <svg className="svg-inline--fa fa-envelope orange-color"
                                aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="envelope" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                data-fa-i2svg="">
                                <path fill="currentColor"
                                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z">
                                </path>
                              </svg>
                            </div>
                          </div>
                          <div className="about-years-experience">
                            <h4 className="fw-500 black-color h4">Email</h4>
                            <p className="fw-400 secondary-black">
                              <a href="mailto:credesign@gmail.com">
                                credesign@gmail.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="footer">
          <div className="footer-wrapper">
            <div className="footer-bottom">
              <div className="container">
                <div className="footer-bottom-container">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 text-center">
                      <p className="p text-white line-height-7">
                        All rights reserved © 2024 Shehryar Lakhany
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <div className="loader-mask">
        <div className="loader">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default App
