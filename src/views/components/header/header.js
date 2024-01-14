import React from 'react'

const Header = () => {
  return (
    <>
      <div>
        {/* preloader */}
        {/* <div className='preloader'>
          <div className='boxes'>
            <div className='box'>
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className='box'>
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className='box'>
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className='box'>
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div> */}
        {/* preloader end */}
        {/* main header */}
        <header className='main-header header-style-one'>
          <div className='header-lower'>
            <div className='logo-box'>
              <figure className='logo'>
                <a href='index.html'>
                  <img src='/assets/images/logo.png' alt />
                </a>
              </figure>
            </div>
            <div className='outer-box'>
              <div className='menu-area'>
                {/*Mobile Navigation Toggler*/}
                <div className='mobile-nav-toggler'>
                  <i className='icon-bar' />
                  <i className='icon-bar' />
                  <i className='icon-bar' />
                </div>
                <nav className='main-menu navbar-expand-md navbar-light'>
                  <div className='collapse navbar-collapse show clearfix' id='navbarSupportedContent'>
                    <ul className='navigation clearfix'>
                      <li className='current dropdown'>
                        <a href='index.html'>Home</a>
                        <ul>
                          <li>
                            <a href='index.html'>Home Page One</a>
                          </li>
                          <li>
                            <a href='index-2.html'>Home Page Two</a>
                          </li>
                          <li>
                            <a href='index-onepage.html'>Home OnePage</a>
                          </li>
                          <li>
                            <a href='index-rtl.html'>Home RTL</a>
                          </li>
                          <li className='dropdown'>
                            <a href='index.html'>Header Style</a>
                            <ul>
                              <li>
                                <a href='index.html'>Header Style One</a>
                              </li>
                              <li>
                                <a href='index-2.html'>Header Style Two</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className='dropdown'>
                        <a href='index.html'>Activities</a>
                        <ul>
                          <li>
                            <a href='activities.html'>Activities</a>
                          </li>
                          <li>
                            <a href='climbing.html'>Climbing</a>
                          </li>
                          <li>
                            <a href='adventure.html'>Adventure</a>
                          </li>
                          <li>
                            <a href='camping.html'>Camping</a>
                          </li>
                          <li>
                            <a href='diving.html'>Diving</a>
                          </li>
                          <li>
                            <a href='parachute.html'>Parachute</a>
                          </li>
                          <li>
                            <a href='throwing.html'>Throwing</a>
                          </li>
                        </ul>
                      </li>
                      <li className='dropdown'>
                        <a href='index.html'>Pages</a>
                        <ul>
                          <li>
                            <a href='about.html'>About Us</a>
                          </li>
                          <li>
                            <a href='team.html'>Our Team</a>
                          </li>
                          <li>
                            <a href='gallery.html'>Our Gallery</a>
                          </li>
                          <li>
                            <a href='error.html'>404</a>
                          </li>
                        </ul>
                      </li>
                      <li className='dropdown'>
                        <a href='index.html'>Elements</a>
                        <div className='megamenu'>
                          <div className='row clearfix'>
                            <div className='col-lg-6 column'>
                              <ul>
                                <li>
                                  <h4>Elements 1</h4>
                                </li>
                                <li>
                                  <a href='about-element-1.html'>About Block 01</a>
                                </li>
                                <li>
                                  <a href='about-element-2.html'>About Block 02</a>
                                </li>
                                <li>
                                  <a href='about-element-3.html'>About Block 03</a>
                                </li>
                                <li>
                                  <a href='activities-element-1.html'>Activities Block 01</a>
                                </li>
                                <li>
                                  <a href='activities-element-2.html'>Activities Block 02</a>
                                </li>
                                <li>
                                  <a href='news-element-1.html'>News Block 01</a>
                                </li>
                                <li>
                                  <a href='news-element-2.html'>News Block 02</a>
                                </li>
                                <li>
                                  <a href='team-element-1.html'>Team Block 01</a>
                                </li>
                              </ul>
                            </div>
                            <div className='col-lg-6 column'>
                              <ul>
                                <li>
                                  <h4>Elements 2</h4>
                                </li>
                                <li>
                                  <a href='team-element-2.html'>Team Block 02</a>
                                </li>
                                <li>
                                  <a href='feature-element-1.html'>Feature Block 01</a>
                                </li>
                                <li>
                                  <a href='feature-element-2.html'>Feature Block 02</a>
                                </li>
                                <li>
                                  <a href='video-element.html'>Video Block</a>
                                </li>
                                <li>
                                  <a href='gallery-element.html'>Gallery Block</a>
                                </li>
                                <li>
                                  <a href='testimonial-element.html'>Testimonial Block</a>
                                </li>
                                <li>
                                  <a href='cta-element.html'>Cta Block</a>
                                </li>
                                <li>
                                  <a href='clients-element.html'>Clients Block</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className='dropdown'>
                        <a href='index.html'>Blog</a>
                        <ul>
                          <li>
                            <a href='blog.html'>Our Blog</a>
                          </li>
                          <li>
                            <a href='blog-details.html'>Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='contact.html'>Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className='menu-right-content'>
                <div className='support-box'>
                  <div className='icon'>
                    <i className='flaticon-chat' />
                  </div>
                  <span>Call Anytime</span>
                  <h5>
                    <a href='tel:12463330079'>+1- ( 246 ) 333 - 0079</a>
                  </h5>
                </div>
                <div className='search-box-outer'>
                  <div className='dropdown'>
                    <button
                      className='search-box-btn'
                      type='button'
                      id='dropdownMenu3'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      <i className='flaticon-magnifying-glass' />
                    </button>
                    <div className='dropdown-menu search-panel' aria-labelledby='dropdownMenu3'>
                      <div className='form-container'>
                        <form method='post' action='https://azim.commonsupport.com/Amping/blog.html'>
                          <div className='form-group'>
                            <input type='search' name='search-field' defaultValue placeholder='Search....' required />
                            <button type='submit' className='search-btn'>
                              <span className='fas fa-search' />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cart-box'>
                  <a href='index.html'>
                    <i className='flaticon-shopping-cart' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*sticky Header*/}
          <div className='sticky-header'>
            <div className='outer-box'>
              <div className='menu-area'>
                <nav className='main-menu clearfix'>{/*Keep This Empty / Menu will come through Javascript*/}</nav>
              </div>
              <div className='menu-right-content'>
                <div className='support-box'>
                  <div className='icon'>
                    <i className='flaticon-chat' />
                  </div>
                  <span>Call Anytime</span>
                  <h5>
                    <a href='tel:12463330079'>+1- ( 246 ) 333 - 0079</a>
                  </h5>
                </div>
                <div className='search-box-outer'>
                  <div className='dropdown'>
                    <button
                      className='search-box-btn'
                      type='button'
                      id='dropdownMenu4'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      <i className='flaticon-magnifying-glass' />
                    </button>
                    <div className='dropdown-menu search-panel' aria-labelledby='dropdownMenu4'>
                      <div className='form-container'>
                        <form method='post' action='https://azim.commonsupport.com/Amping/blog.html'>
                          <div className='form-group'>
                            <input type='search' name='search-field' defaultValue placeholder='Search....' required />
                            <button type='submit' className='search-btn'>
                              <span className='fas fa-search' />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cart-box'>
                  <a href='index.html'>
                    <i className='flaticon-shopping-cart' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* main-header end */}
        {/* Mobile Menu  */}
        <div className='mobile-menu'>
          <div className='menu-backdrop' />
          <div className='close-btn'>
            <i className='fas fa-times' />
          </div>
          <nav className='menu-box'>
            <div className='nav-logo'>
              <a href='index.html'>
                <img src='/assets/images/logo-2.png' alt title />
              </a>
            </div>
            <div className='menu-outer'>
              {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
            </div>
            <div className='contact-info'>
              <h4>Contact Info</h4>
              <ul>
                <li>Chicago 12, Melborne City, USA</li>
                <li>
                  <a href='tel:+8801682648101'>+88 01682648101</a>
                </li>
                <li>
                  <a href='mailto:info@example.com'>info@example.com</a>
                </li>
              </ul>
            </div>
            <div className='social-links'>
              <ul className='clearfix'>
                <li>
                  <a href='index.html'>
                    <span className='fab fa-twitter' />
                  </a>
                </li>
                <li>
                  <a href='index.html'>
                    <span className='fab fa-facebook-square' />
                  </a>
                </li>
                <li>
                  <a href='index.html'>
                    <span className='fab fa-pinterest-p' />
                  </a>
                </li>
                <li>
                  <a href='index.html'>
                    <span className='fab fa-instagram' />
                  </a>
                </li>
                <li>
                  <a href='index.html'>
                    <span className='fab fa-youtube' />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}
      </div>
    </>
  )
}

export default Header
