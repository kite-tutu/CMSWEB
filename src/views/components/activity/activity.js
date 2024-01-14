import React from 'react'

const Activity = () => {
  return (
    <>
      <section className='activities-section sec-pad'>
        <div className='auto-container'>
          <div className='upper-box centred'>
            <div className='sec-title'>
              <span className='sub-title'>What We’re Offering</span>
              <h2>Our Activities</h2>
            </div>
            <div className='row clearfix'>
              <div className='col-lg-4 col-md-6 col-sm-12 activities-block'>
                <div
                  className='activities-block-one wow fadeInUp animated'
                  data-wow-delay='00ms'
                  data-wow-duration='1500ms'
                >
                  <div className='inner-box'>
                    <div className='image-box'>
                      <a href='climbing.html'>
                        <img src='/assets/images/resource/activities-1.jpg' alt />
                      </a>
                    </div>
                    <div className='lower-content'>
                      <div className='icon-box'>
                        <div className='shape' style={{ backgroundImage: 'url(/assets/images/shape/shape-5.png)' }} />
                        <div
                          className='overlay-shape'
                          style={{ backgroundImage: 'url(/assets/images/shape/shape-6.png)' }}
                        />
                        <i className='flaticon-climbing' />
                      </div>
                      <h3>
                        <a href='climbing.html'>Climbing</a>
                      </h3>
                      <p>There are not many of passages of lorem ipsum available alteration in osten some form.</p>
                      <div className='link'>
                        <a href='climbing.html'>Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-12 activities-block'>
                <div
                  className='activities-block-one wow fadeInUp animated'
                  data-wow-delay='00ms'
                  data-wow-duration='1500ms'
                >
                  <div className='inner-box'>
                    <div className='image-box'>
                      <a href='adventure.html'>
                        <img src='/assets/images/resource/activities-2.jpg' alt />
                      </a>
                    </div>
                    <div className='lower-content'>
                      <div className='icon-box'>
                        <div className='shape' style={{ backgroundImage: 'url(/assets/images/shape/shape-5.png)' }} />
                        <div
                          className='overlay-shape'
                          style={{ backgroundImage: 'url(/assets/images/shape/shape-6.png)' }}
                        />
                        <i className='flaticon-adventurer' />
                      </div>
                      <h3>
                        <a href='adventure.html'>Adventure</a>
                      </h3>
                      <p>There are not many of passages of lorem ipsum available alteration in osten some form.</p>
                      <div className='link'>
                        <a href='adventure.html'>Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-12 activities-block'>
                <div
                  className='activities-block-one wow fadeInUp animated'
                  data-wow-delay='00ms'
                  data-wow-duration='1500ms'
                >
                  <div className='inner-box'>
                    <div className='image-box'>
                      <a href='camping.html'>
                        <img src='/assets/images/resource/activities-3.jpg' alt />
                      </a>
                    </div>
                    <div className='lower-content'>
                      <div className='icon-box'>
                        <div className='shape' style={{ backgroundImage: 'url(/assets/images/shape/shape-5.png)' }} />
                        <div
                          className='overlay-shape'
                          style={{ backgroundImage: 'url(/assets/images/shape/shape-6.png)' }}
                        />
                        <i className='flaticon-tent' />
                      </div>
                      <h3>
                        <a href='camping.html'>Camping</a>
                      </h3>
                      <p>There are not many of passages of lorem ipsum available alteration in osten some form.</p>
                      <div className='link'>
                        <a href='camping.html'>Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='lower-box'>
            <div className='sec-title light'>
              <span className='sub-title'>Get Ready For The</span>
              <h3>Summer of a Lifetime</h3>
            </div>
            <div className='text'>
              <p>
                There are not many of lorem ipsum <br />
                available alteration.
              </p>
            </div>
            <div className='support-box'>
              <p>Call Anytime</p>
              <h3>
                <a href='tel:12463330079'>+1- ( 246 ) 333 - 0079</a>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Activity
