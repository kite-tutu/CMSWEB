import React from 'react'

const Testimonial = () => {
  return (
    <>
      <section className='testimonial-section bg-color-2'>
        <div className='outer-container clearfix'>
          <div className='testimonial-inner pull-left'>
            <div className='shape' style={{ backgroundImage: 'url(/assets/images/shape/shape-8.png)' }} />
            <div className='testimonial-content'>
              <div className='single-item-carousel owl-carousel owl-theme owl-nav-none'>
                <div className='inner-box'>
                  <div className='icon-box'>
                    <i className='flaticon-quote' />
                  </div>
                  <div className='text'>
                    <h3>
                      This is due to their excellent service, and augue homero consectetuer in nam. Eu quo laoreet
                      propriae, malis exerci habemus has vocent persius eum ea.
                    </h3>
                  </div>
                  <div className='author-box'>
                    <figure className='author-thumb'>
                      <img src='/assets/images/resource/testimonial-1.jpg' alt />
                    </figure>
                    <span className='name'>Jessica Brown</span>
                    <span className='designation'>Customer</span>
                  </div>
                </div>
                <div className='inner-box'>
                  <div className='icon-box'>
                    <i className='flaticon-quote' />
                  </div>
                  <div className='text'>
                    <h3>
                      This is due to their excellent service, and augue homero consectetuer in nam. Eu quo laoreet
                      propriae, malis exerci habemus has vocent persius eum ea.
                    </h3>
                  </div>
                  <div className='author-box'>
                    <figure className='author-thumb'>
                      <img src='/assets/images/resource/testimonial-1.jpg' alt />
                    </figure>
                    <span className='name'>Jessica Brown</span>
                    <span className='designation'>Customer</span>
                  </div>
                </div>
                <div className='inner-box'>
                  <div className='icon-box'>
                    <i className='flaticon-quote' />
                  </div>
                  <div className='text'>
                    <h3>
                      This is due to their excellent service, and augue homero consectetuer in nam. Eu quo laoreet
                      propriae, malis exerci habemus has vocent persius eum ea.
                    </h3>
                  </div>
                  <div className='author-box'>
                    <figure className='author-thumb'>
                      <img src='/assets/images/resource/testimonial-1.jpg' alt />
                    </figure>
                    <span className='name'>Jessica Brown</span>
                    <span className='designation'>Customer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='faq-inner pull-right'>
            <div className='faq-content'>
              <div className='sec-title'>
                <span className='sub-title'>Frequently Asked Question</span>
                <h2>Any Question?</h2>
              </div>
              <ul className='accordion-box'>
                <li className='accordion block active-block'>
                  <div className='acc-btn active'>
                    <div className='icon-outer' />
                    <h5>Nullam scelerisque eu lacus quis ultrices.</h5>
                  </div>
                  <div className='acc-content current'>
                    <div className='text'>
                      <p>
                        There are many variations of passages of available but majority have alteration in some by
                        inject humour or random words. Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </li>
                <li className='accordion block'>
                  <div className='acc-btn'>
                    <div className='icon-outer' />
                    <h5>Cras faucibus fringilla orci in sollicitudin</h5>
                  </div>
                  <div className='acc-content'>
                    <div className='text'>
                      <p>
                        There are many variations of passages of available but majority have alteration in some by
                        inject humour or random words. Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </li>
                <li className='accordion block'>
                  <div className='acc-btn'>
                    <div className='icon-outer' />
                    <h5>Nullam scelerisque eu lacus quis ultrices.</h5>
                  </div>
                  <div className='acc-content'>
                    <div className='text'>
                      <p>
                        There are many variations of passages of available but majority have alteration in some by
                        inject humour or random words. Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial
