import React from 'react'

const About = () => {
  return (
    <>
      <section className='about-section bg-color-1'>
        <div className='pattern-layer' style={{ backgroundImage: 'url(/assets/images/shape/shape-4.png)' }} />
        <div className='auto-container'>
          <div className='row clearfix'>
            <div className='col-lg-6 col-md-12 col-sm-12 image-column'>
              <div className='image_block_one'>
                <div className='image-box'>
                  <div className='text'>amping</div>
                  <div className='shape' style={{ backgroundImage: 'url(/assets/images/shape/shape-3.png)' }} />
                  <figure className='image'>
                    <img src='/assets/images/resource/about-1.jpg' alt />
                  </figure>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 content-column'>
              <div className='content_block_one'>
                <div className='content-box'>
                  <div className='sec-title'>
                    <span className='sub-title'>Our Introductions</span>
                    <h2>Welcome to Camp of Summers</h2>
                  </div>
                  <div className='text'>
                    <div className='icon-box'>
                      <i className='flaticon-camping' />
                    </div>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                  </div>
                  <ul className='list-style-one clearfix'>
                    <li>Refresing to get such a personal touch.</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
                    <li>Velit esse cillum dolore eu fugiat nulla pariatur.</li>
                  </ul>
                  <div className='btn-box'>
                    <a href='about.html' className='theme-btn btn-one'>
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
