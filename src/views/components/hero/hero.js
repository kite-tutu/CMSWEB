import React from 'react'

const Hero = () => {
  return (
    <>
      <section className='banner-section centred'>
        <div className='pattern-layer' style={{ backgroundImage: 'url(/assets/images/shape/shape-1.png)' }} />
        <div className='banner-carousel owl-theme owl-carousel owl-dots-none'>
          <div className='slide-item'>
            <div className='image-layer' style={{ backgroundImage: 'url(/assets/images/banner/banner-1.jpg)' }} />
            <div className='auto-container'>
              <div className='content-box'>
                <div className='shape' style={{ backgroundImage: 'url(/assets/images/shape/shape-2.png)' }} />
                <span>Join the Summer Adventure</span>
                <h2>
                  Camping With <br />
                  Friends Gives Joy
                </h2>
                <div className='btn-box'>
                  <a href='index.html' className='theme-btn btn-one'>
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='slide-item style-two'>
            <div className='image-layer' style={{ backgroundImage: 'url(/assets/images/banner/banner-2.jpg)' }} />
            <div className='auto-container'>
              <div className='content-box'>
                <div className='shape' style={{ backgroundImage: 'url(/assets/images/shape/shape-2.png)' }} />
                <span>Join the Summer Adventure</span>
                <h2>
                  Camping With <br />
                  Friends Gives Joy
                </h2>
                <div className='btn-box'>
                  <a href='index.html' className='theme-btn btn-one'>
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='media-partner'>
          <ul className='media-links clearfix'>
            <li>
              <h6>Follow on social media</h6>
            </li>
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
      </section>
    </>
  )
}

export default Hero
