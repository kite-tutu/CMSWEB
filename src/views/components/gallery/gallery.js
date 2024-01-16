import React from 'react'

const Gallery = () => {
  return (
    <>
      <section className='gallery-section centred'>
        <div className='auto-container'>
          <div className='sec-title'>
            <span className='sub-title'>Our Photoshots</span>
            <h2>Our Gallery</h2>
          </div>
          <div className='sortable-masonry'>
            <div className='items-container row clearfix'>
              <div className='col-lg-3 col-md-6 col-sm-12 masonry-item small-column'>
                <div className='gallery-block-one'>
                  <div className='inner-box'>
                    <figure className='image-box'>
                      <a href='/assets/images/gallery/gallery-1.jpg' className='lightbox-image' data-fancybox='gallery'>
                        <img src='/assets/images/gallery/gallery-1.jpg' alt />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 masonry-item small-column'>
                <div className='gallery-block-one'>
                  <div className='inner-box'>
                    <figure className='image-box'>
                      <a href='/assets/images/gallery/gallery-2.jpg' className='lightbox-image' data-fancybox='gallery'>
                        <img src='/assets/images/gallery/gallery-2.jpg' alt />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 masonry-item small-column'>
                <div className='gallery-block-one'>
                  <div className='inner-box'>
                    <figure className='image-box'>
                      <a href='/assets/images/gallery/gallery-3.jpg' className='lightbox-image' data-fancybox='gallery'>
                        <img src='/assets/images/gallery/gallery-3.jpg' alt />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 masonry-item small-column'>
                <div className='gallery-block-one'>
                  <div className='inner-box'>
                    <figure className='image-box'>
                      <a href='/assets/images/gallery/gallery-4.jpg' className='lightbox-image' data-fancybox='gallery'>
                        <img src='/assets/images/gallery/gallery-4.jpg' alt />
                      </a>
                    </figure>
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

export default Gallery
