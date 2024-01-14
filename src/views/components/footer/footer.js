import React from 'react'

const Footer = () => {
  return (
    <>
      <div>
        {/* main-footer */}
        <footer className='main-footer'>
          <div className='pattern-layer' style={{ backgroundImage: 'url(/assets/images/shape/shape-13.png)' }} />
          <div className='auto-container'>
            <div className='footer-top'>
              <div className='top-inner'>
                <div className='text'>
                  <h5>Send Email</h5>
                  <h3>
                    <a href='mailto:needhelp@company.com'>needhelp@company.com</a>
                  </h3>
                </div>
                <figure className='footer-logo'>
                  <a href='index.html'>
                    <img src='/assets/images/footer-logo.png' alt />
                  </a>
                </figure>
                <div className='text'>
                  <h5>Call Anytime</h5>
                  <h3>
                    <a href='tel:12463330079'>+1- ( 246 ) 333 - 0079</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className='widget-section'>
              <div className='row clearfix'>
                <div className='col-lg-2 col-md-6 col-sm-12 footer-column'>
                  <div className='footer-widget links-widget'>
                    <div className='widget-title'>
                      <h4>Explore</h4>
                    </div>
                    <div className='widget-content'>
                      <ul className='links-list clearfix'>
                        <li>
                          <a href='index.html'>Meet Our Team</a>
                        </li>
                        <li>
                          <a href='index.html'>What We Do</a>
                        </li>
                        <li>
                          <a href='index.html'>Latest News</a>
                        </li>
                        <li>
                          <a href='index.html'>Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 footer-column'>
                  <div className='footer-widget links-widget ml-70'>
                    <div className='widget-title'>
                      <h4>Activities</h4>
                    </div>
                    <div className='widget-content'>
                      <ul className='links-list clearfix'>
                        <li>
                          <a href='index.html'>Tree Climbing</a>
                        </li>
                        <li>
                          <a href='index.html'>Cross the River</a>
                        </li>
                        <li>
                          <a href='index.html'>Mountain Boarding</a>
                        </li>
                        <li>
                          <a href='index.html'>Parachute</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 footer-column'>
                  <div className='footer-widget contact-widget'>
                    <div className='widget-title'>
                      <h4>Contact</h4>
                    </div>
                    <div className='widget-content'>
                      <p>60 road, broklyn golden street new york. USA</p>
                      <ul className='social-links clearfix'>
                        <li>
                          <a href='index.html'>
                            <i className='fab fa-twitter' />
                          </a>
                        </li>
                        <li>
                          <a href='index.html'>
                            <i className='fab fa-facebook-f' />
                          </a>
                        </li>
                        <li>
                          <a href='index.html'>
                            <i className='fab fa-pinterest-p' />
                          </a>
                        </li>
                        <li>
                          <a href='index.html'>
                            <i className='fab fa-instagram' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 footer-column'>
                  <div className='footer-widget newsletter-widget'>
                    <div className='widget-title'>
                      <h4>Newsletter</h4>
                    </div>
                    <div className='widget-content'>
                      <p>Subsrcibe for our upcoming latest articles and news resources</p>
                      <form action='#' method='post' className='newsletter-form'>
                        <div className='form-group'>
                          <input type='email' name='email' placeholder='Email address' required />
                          <button type='submit'>
                            <i className='fas fa-paper-plane' />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer-bottom centred'>
            <div className='auto-container'>
              <div className='copyright'>
                <p>
                  © Copyright 2024 by <a href='index.html'>Chaim Levi</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* main-footer end */}
        {/* scroll to top */}
        <button className='scroll-top scroll-to-target' data-target='html'>
          <i className='fal fa-long-arrow-up' />
        </button>
      </div>
    </>
  )
}

export default Footer
