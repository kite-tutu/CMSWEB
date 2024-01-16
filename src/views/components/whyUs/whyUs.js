import React from 'react'

const WhyUs = () => {
  return (
    <>
      <section className='chooseus-section bg-color-1'>
        <div className='auto-container'>
          <div className='row clearfix'>
            <div className='col-lg-8 col-md-12 col-sm-12 content-column'>
              <div className='content-inner'>
                <div className='image-box'>
                  <div className='row clearfix'>
                    <div className='col-lg-6 col-md-6 col-sm-12 image-column'>
                      <figure className='image'>
                        <img src='/assets/images/resource/chooseus-1.jpg' alt />
                      </figure>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 image-column'>
                      <figure className='image'>
                        <img src='/assets/images/resource/chooseus-2.jpg' alt />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className='inner-box'>
                  <div className='sec-title'>
                    <span className='sub-title'>Our Benefits</span>
                    <h2>Why Choose Us</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour.
                    </p>
                  </div>
                  <div className='inner'>
                    <ul className='list clearfix'>
                      <li>Private Cottages</li>
                      <li>Compact Trailers</li>
                      <li>Tents on Rent</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 col-sm-12 inner-column'>
              <div className='content_block_two'>
                <div className='content-box'>
                  <div className='upper'>
                    <span>Spend a Happy Weekend</span>
                    <p>Aliq is notm hendr erit a augue insu image pellen tes. Lorem ipsum dolor sit amet.</p>
                    <a href='index.html' className='theme-btn btn-one'>
                      Register now
                    </a>
                  </div>
                  <figure className='image'>
                    <img src='/assets/images/resource/chooseus-3.jpg' alt />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyUs
